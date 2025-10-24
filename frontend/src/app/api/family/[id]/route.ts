import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { docClient, TABLES, UpdateCommand, DeleteCommand } from '@/lib/db';

// PUT /api/family/[id] - Update a family member
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.memberId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const memberId = session.user.memberId;
    const familyMemberId = params.id;
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

    const now = new Date().toISOString();

    // Update family member
    const command = new UpdateCommand({
      TableName: TABLES.members,
      Key: {
        PK: `MEMBER#${memberId}`,
        SK: `FAMILY#${familyMemberId}`
      },
      UpdateExpression: 'SET #name = :name, age = :age, sex = :sex, phone = :phone, relationship = :relationship, updatedAt = :updatedAt',
      ExpressionAttributeNames: {
        '#name': 'name'
      },
      ExpressionAttributeValues: {
        ':name': name,
        ':age': parseInt(age),
        ':sex': sex,
        ':phone': phone || '',
        ':relationship': relationship,
        ':updatedAt': now
      }
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
    console.error('Error updating family member:', error);
    return NextResponse.json(
      { error: 'Failed to update family member' },
      { status: 500 }
    );
  }
}

// DELETE /api/family/[id] - Delete a family member
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.memberId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const memberId = session.user.memberId;
    const familyMemberId = params.id;

    // Delete family member
    const command = new DeleteCommand({
      TableName: TABLES.members,
      Key: {
        PK: `MEMBER#${memberId}`,
        SK: `FAMILY#${familyMemberId}`
      }
    });

    await docClient.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting family member:', error);
    return NextResponse.json(
      { error: 'Failed to delete family member' },
      { status: 500 }
    );
  }
}
