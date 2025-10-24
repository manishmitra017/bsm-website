/**
 * Signup API Route
 *
 * Handles new user registration with email/password.
 * Creates member profile in DynamoDB with PENDING status.
 */

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { docClient, TABLES, PutCommand, QueryCommand } from '@/lib/db';
import { generateMemberId, calculateExpiryDates } from '@/lib/member-utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName, phone, recaptchaToken } = body;

    // Verify reCAPTCHA
    if (recaptchaToken) {
      const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
      if (recaptchaSecret) {
        try {
          const recaptchaResponse = await fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
            }
          );

          const recaptchaData = await recaptchaResponse.json();

          if (!recaptchaData.success || recaptchaData.score < 0.5) {
            console.warn('reCAPTCHA failed:', recaptchaData);
            return NextResponse.json(
              { error: 'reCAPTCHA verification failed. Please try again.' },
              { status: 400 }
            );
          }

          console.log('reCAPTCHA passed. Score:', recaptchaData.score);
        } catch (recaptchaError) {
          console.error('reCAPTCHA verification error:', recaptchaError);
          // Continue anyway if reCAPTCHA service is down
        }
      }
    }

    // Validation
    if (!email || !password || !firstName || !lastName || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password strength (min 8 chars, with upper, lower, number, special)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        {
          error: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
        },
        { status: 400 }
      );
    }

    const emailLower = email.toLowerCase();

    // Check if email already exists
    const checkCommand = new QueryCommand({
      TableName: TABLES.members,
      IndexName: 'GSI1',
      KeyConditionExpression: 'GSI1PK = :email AND GSI1SK = :sk',
      ExpressionAttributeValues: {
        ':email': `EMAIL#${emailLower}`,
        ':sk': 'MEMBER'
      },
      Limit: 1
    });

    const existingUser = await docClient.send(checkCommand);

    if (existingUser.Items && existingUser.Items.length > 0) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    // Generate member ID
    const memberId = await generateMemberId();

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Calculate expiry dates (will be set when admin approves)
    const { expiryDate, graceExpiryDate } = calculateExpiryDates();

    const now = new Date().toISOString();

    // Create member profile
    const memberProfile = {
      PK: `MEMBER#${memberId}`,
      SK: 'PROFILE',
      memberId,
      email: emailLower,
      emailVerified: false, // Will be verified via email link
      passwordHash,

      // Personal Info
      firstName,
      lastName,
      phone,

      // Membership Info
      membershipType: 'SINGLE', // Default, can be changed
      membershipStatus: 'PENDING', // Awaiting admin approval
      joinedDate: now,
      expiryDate: null, // Set when approved
      graceExpiryDate: null, // Set when approved

      // Auth Provider
      authProvider: 'EMAIL',

      // Admin flags
      isAdmin: false,
      roles: [],

      // Timestamps
      createdAt: now,
      updatedAt: now,

      // GSI keys for lookups
      GSI1PK: `EMAIL#${emailLower}`,
      GSI1SK: 'MEMBER'
    };

    // Save to DynamoDB
    await docClient.send(new PutCommand({
      TableName: TABLES.members,
      Item: memberProfile,
      ConditionExpression: 'attribute_not_exists(PK)'
    }));

    // TODO: Send verification email
    // For now, we'll auto-verify in development
    if (process.env.NODE_ENV === 'development') {
      const { UpdateCommand } = await import('@/lib/db');
      await docClient.send(new UpdateCommand({
        TableName: TABLES.members,
        Key: {
          PK: `MEMBER#${memberId}`,
          SK: 'PROFILE'
        },
        UpdateExpression: 'SET emailVerified = :verified',
        ExpressionAttributeValues: {
          ':verified': true
        }
      }));
    }

    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      memberId,
      email: emailLower,
      emailVerified: process.env.NODE_ENV === 'development' // Auto-verify in dev
    }, { status: 201 });

  } catch (error) {
    console.error('Signup error:', error);

    if (error instanceof Error && error.name === 'ConditionalCheckFailedException') {
      return NextResponse.json(
        { error: 'Account already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create account. Please try again.' },
      { status: 500 }
    );
  }
}
