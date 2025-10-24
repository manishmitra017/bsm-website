import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { docClient, TABLES, QueryCommand, PutCommand } from '@/lib/db';

// GET /api/family - List all family members for the logged-in user
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.memberId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const memberId = session.user.memberId;

    // Query all family members for this member
    const command = new QueryCommand({
      TableName: TABLES.members,
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
      ExpressionAttributeValues: {
        ':pk': `MEMBER#${memberId}`,
        ':sk': 'FAMILY#'
      }
    });

    const result = await docClient.send(command);
    const familyMembers = (result.Items || []).map(item => ({
      id: item.SK.replace('FAMILY#', ''),
      name: item.name,
      age: item.age,
      sex: item.sex,
      phone: item.phone || '',
      relationship: item.relationship
    }));

    return NextResponse.json({ familyMembers });
  } catch (error) {
    console.error('Error fetching family members:', error);
    return NextResponse.json(
      { error: 'Failed to fetch family members' },
      { status: 500 }
    );
  }
}

// POST /api/family - Add a new family member
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.memberId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const memberId = session.user.memberId;
    const { name, age, sex, phone, relationship } = await request.json();

    // Validation
    if (!name || !age || !sex || !relationship) {
      return NextResponse.json(
        { error: 'Name, age, sex, and relationship are required' },
        { status: 400 }
      );
    }

    // Phone validation: required for adults (18+), optional for children
    if (age >= 18 && !phone) {
      return NextResponse.json(
        { error: 'Phone number is required for adults (18+)' },
        { status: 400 }
      );
    }

    // Generate unique family member ID
    const familyMemberId = `FM${Date.now()}`;
    const now = new Date().toISOString();

    // Create family member record
    const familyMember = {
      PK: `MEMBER#${memberId}`,
      SK: `FAMILY#${familyMemberId}`,
      name,
      age: parseInt(age),
      sex,
      phone: phone || '',
      relationship,
      createdAt: now,
      updatedAt: now
    };

    const command = new PutCommand({
      TableName: TABLES.members,
      Item: familyMember
    });

    await docClient.send(command);

    return NextResponse.json({
      success: true,
      familyMember: {
        id: familyMemberId,
        name,
        age: parseInt(age),
        sex,
        phone: phone || '',
        relationship
      }
    });
  } catch (error) {
    console.error('Error adding family member:', error);
    return NextResponse.json(
      { error: 'Failed to add family member' },
      { status: 500 }
    );
  }
}
