/**
 * NextAuth.js Configuration
 *
 * Handles authentication for both email/password and Google OAuth.
 * Works with local DynamoDB in development and AWS DynamoDB in production.
 */

import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { docClient, TABLES, GetCommand, QueryCommand } from '@/lib/db';

export const authOptions: AuthOptions = {
  providers: [
    // Google OAuth Provider
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
    }),

    // Email/Password Provider
    CredentialsProvider({
      id: 'credentials',
      name: 'Email and Password',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        try {
          // Query user by email (using GSI1)
          const command = new QueryCommand({
            TableName: TABLES.members,
            IndexName: 'GSI1',
            KeyConditionExpression: 'GSI1PK = :email AND GSI1SK = :sk',
            ExpressionAttributeValues: {
              ':email': `EMAIL#${credentials.email.toLowerCase()}`,
              ':sk': 'MEMBER'
            },
            Limit: 1
          });

          const result = await docClient.send(command);
          const member = result.Items?.[0];

          if (!member) {
            throw new Error('No account found with this email');
          }

          // Verify password
          if (!member.passwordHash) {
            throw new Error('This account uses Google sign-in. Please sign in with Google.');
          }

          const isValidPassword = await bcrypt.compare(credentials.password, member.passwordHash);

          if (!isValidPassword) {
            throw new Error('Invalid password');
          }

          // Check membership status
          if (member.membershipStatus === 'REJECTED') {
            throw new Error('Your membership application was rejected. Please contact BSM.');
          }

          if (member.membershipStatus === 'SUSPENDED') {
            throw new Error('Your account has been suspended. Please contact BSM.');
          }

          return {
            id: member.memberId,
            email: member.email,
            name: `${member.firstName} ${member.lastName}`,
            memberId: member.memberId,
            isAdmin: member.isAdmin || false,
            membershipStatus: member.membershipStatus,
            membershipType: member.membershipType
          };
        } catch (error) {
          console.error('Authorization error:', error);
          throw error;
        }
      }
    })
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      // Handle Google OAuth sign-in
      if (account?.provider === 'google' && profile?.email) {
        try {
          // Check if user already exists by email
          const command = new QueryCommand({
            TableName: TABLES.members,
            IndexName: 'GSI1',
            KeyConditionExpression: 'GSI1PK = :email AND GSI1SK = :sk',
            ExpressionAttributeValues: {
              ':email': `EMAIL#${profile.email.toLowerCase()}`,
              ':sk': 'MEMBER'
            },
            Limit: 1
          });

          const result = await docClient.send(command);
          const existingMember = result.Items?.[0];

          if (existingMember) {
            // User exists - attach member data
            user.memberId = existingMember.memberId;
            user.isAdmin = existingMember.isAdmin || false;
            user.membershipStatus = existingMember.membershipStatus;
            user.membershipType = existingMember.membershipType;

            // Update Google ID if not set
            if (!existingMember.googleId && account.providerAccountId) {
              const { UpdateCommand } = await import('@/lib/db');
              await docClient.send(new UpdateCommand({
                TableName: TABLES.members,
                Key: {
                  PK: `MEMBER#${existingMember.memberId}`,
                  SK: 'PROFILE'
                },
                UpdateExpression: 'SET googleId = :googleId, authProvider = :provider',
                ExpressionAttributeValues: {
                  ':googleId': account.providerAccountId,
                  ':provider': 'GOOGLE'
                }
              }));
            }

            return true;
          }

          // New Google user - create account in DynamoDB
          try {
            const { PutCommand } = await import('@/lib/db');

            // Generate member ID
            const year = new Date().getFullYear();
            const timestamp = Date.now().toString().slice(-3);
            const memberId = `BSM${year}${timestamp}`;

            const now = new Date().toISOString();

            // Create member profile
            const memberProfile = {
              PK: `MEMBER#${memberId}`,
              SK: 'PROFILE',
              memberId,
              email: profile.email.toLowerCase(),
              emailVerified: true, // Google accounts are verified
              googleId: account.providerAccountId,
              profilePicture: (profile as any).picture || '',
              firstName: (profile as any).given_name || profile.name?.split(' ')[0] || '',
              lastName: (profile as any).family_name || profile.name?.split(' ').slice(1).join(' ') || '',
              phone: '',
              membershipType: 'SINGLE',
              membershipStatus: 'PENDING',
              joinedDate: now,
              createdAt: now,
              updatedAt: now,
              authProvider: 'GOOGLE',
              isAdmin: false,
              GSI1PK: `EMAIL#${profile.email.toLowerCase()}`,
              GSI1SK: 'MEMBER',
              GSI2PK: `GOOGLE#${account.providerAccountId}`,
              GSI2SK: 'MEMBER'
            };

            await docClient.send(new PutCommand({
              TableName: TABLES.members,
              Item: memberProfile
            }));

            console.log('Google user created successfully:', memberId);

            // Attach member data to user object
            user.memberId = memberId;
            user.isAdmin = false;
            user.membershipStatus = 'PENDING';
            user.membershipType = 'SINGLE';

            return true;
          } catch (createError) {
            console.error('Failed to create Google user:', createError);
            return false;
          }

        } catch (error) {
          console.error('Google sign-in error:', error);
          return false;
        }
      }

      return true;
    },

    async jwt({ token, user, account }) {
      // Initial sign-in
      if (user) {
        token.memberId = user.memberId;
        token.isAdmin = user.isAdmin;
        token.membershipStatus = user.membershipStatus;
        token.membershipType = user.membershipType;
      }

      // Google OAuth
      if (account?.provider === 'google') {
        token.googleId = account.providerAccountId;
      }

      return token;
    },

    async session({ session, token }) {
      // Add custom fields to session
      if (session.user) {
        session.user.memberId = token.memberId as string;
        session.user.isAdmin = token.isAdmin as boolean;
        session.user.membershipStatus = token.membershipStatus as string;
        session.user.membershipType = token.membershipType as string;
        session.user.googleId = token.googleId as string;
      }

      return session;
    }
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    newUser: '/auth/complete-profile' // For Google OAuth new users
  },

  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
