/**
 * Member Utility Functions
 *
 * Helper functions for member ID generation, validation, and data formatting.
 */

import { docClient, TABLES, QueryCommand, ScanCommand } from './db';

/**
 * Generate next member ID
 * Format: BSM + YEAR + 3-digit sequence (e.g., BSM2025001)
 */
export async function generateMemberId(): Promise<string> {
  const year = new Date().getFullYear();
  const prefix = `BSM${year}`;

  try {
    // Query all members for current year
    const command = new ScanCommand({
      TableName: TABLES.members,
      FilterExpression: 'begins_with(memberId, :prefix) AND SK = :sk',
      ExpressionAttributeValues: {
        ':prefix': prefix,
        ':sk': 'PROFILE'
      },
      ProjectionExpression: 'memberId'
    });

    const result = await docClient.send(command);
    const members = result.Items || [];

    if (members.length === 0) {
      // First member of the year
      return `${prefix}001`;
    }

    // Find highest sequence number
    const sequences = members
      .map(m => parseInt(m.memberId.replace(prefix, '')))
      .filter(n => !isNaN(n));

    const maxSequence = Math.max(...sequences);
    const nextSequence = (maxSequence + 1).toString().padStart(3, '0');

    return `${prefix}${nextSequence}`;
  } catch (error) {
    console.error('Error generating member ID:', error);
    // Fallback: use timestamp-based ID
    return `${prefix}${Date.now().toString().slice(-3)}`;
  }
}

/**
 * Generate family member ID
 * Format: FAM + 3-digit sequence (e.g., FAM001)
 */
export async function generateFamilyMemberId(primaryMemberId: string): Promise<string> {
  try {
    // Query all family members for this member
    const command = new QueryCommand({
      TableName: TABLES.members,
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
      ExpressionAttributeValues: {
        ':pk': `MEMBER#${primaryMemberId}`,
        ':sk': 'FAMILY#'
      },
      ProjectionExpression: 'familyMemberId'
    });

    const result = await docClient.send(command);
    const familyMembers = result.Items || [];

    if (familyMembers.length === 0) {
      return 'FAM001';
    }

    // Find highest sequence number
    const sequences = familyMembers
      .map(fm => parseInt(fm.familyMemberId.replace('FAM', '')))
      .filter(n => !isNaN(n));

    const maxSequence = Math.max(...sequences);
    const nextSequence = (maxSequence + 1).toString().padStart(3, '0');

    return `FAM${nextSequence}`;
  } catch (error) {
    console.error('Error generating family member ID:', error);
    return `FAM${Date.now().toString().slice(-3)}`;
  }
}

/**
 * Calculate membership expiry dates
 * @param approvalDate - Date when membership was approved
 * @returns Object with expiryDate and graceExpiryDate
 */
export function calculateExpiryDates(approvalDate: Date = new Date()) {
  const expiryDate = new Date(approvalDate);
  expiryDate.setFullYear(expiryDate.getFullYear() + 1); // +1 year

  const graceExpiryDate = new Date(expiryDate);
  graceExpiryDate.setMonth(graceExpiryDate.getMonth() + 2); // +2 months grace period

  return {
    expiryDate: expiryDate.toISOString(),
    graceExpiryDate: graceExpiryDate.toISOString()
  };
}

/**
 * Check if member is in grace period
 */
export function isInGracePeriod(expiryDate: string, graceExpiryDate: string): boolean {
  const now = new Date();
  const expiry = new Date(expiryDate);
  const graceExpiry = new Date(graceExpiryDate);

  return now > expiry && now <= graceExpiry;
}

/**
 * Check if membership has expired (past grace period)
 */
export function isExpired(graceExpiryDate: string): boolean {
  const now = new Date();
  const graceExpiry = new Date(graceExpiryDate);

  return now > graceExpiry;
}

/**
 * Format membership status for display
 */
export function formatMembershipStatus(
  status: string,
  expiryDate?: string,
  graceExpiryDate?: string
): { status: string; badge: string; description: string } {
  if (status !== 'ACTIVE') {
    const statusMap: Record<string, { badge: string; description: string }> = {
      PENDING: { badge: 'warning', description: 'Awaiting approval' },
      EXPIRED: { badge: 'error', description: 'Membership expired' },
      REJECTED: { badge: 'error', description: 'Application rejected' },
      SUSPENDED: { badge: 'error', description: 'Account suspended' }
    };

    return {
      status,
      ...statusMap[status] || { badge: 'default', description: status }
    };
  }

  // Check if in grace period
  if (expiryDate && graceExpiryDate && isInGracePeriod(expiryDate, graceExpiryDate)) {
    return {
      status: 'GRACE_PERIOD',
      badge: 'warning',
      description: 'Renewal required - in grace period'
    };
  }

  return {
    status: 'ACTIVE',
    badge: 'success',
    description: 'Active membership'
  };
}
