import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Configure AWS SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'ap-southeast-2', // Melbourne region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// Email templates
const EMAIL_TEMPLATES = {
  contact: {
    subject: (data: any) => `New Contact Form Submission from ${data.name}`,
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #ea580c); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">🔔 New Contact Form Submission</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Bengali Society of Melbourne Website</p>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #374151; margin-top: 0;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #111827;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${data.email}" style="color: #dc2626;">${data.email}</a></td>
              </tr>
              ${data.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Phone:</td>
                <td style="padding: 8px 0; color: #111827;"><a href="tel:${data.phone}" style="color: #dc2626;">${data.phone}</a></td>
              </tr>
              ` : ''}
              ${data.interest ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Interest:</td>
                <td style="padding: 8px 0; color: #111827; text-transform: capitalize;">${data.interest}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h2 style="color: #374151; margin-top: 0;">Message</h2>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; color: #374151; line-height: 1.6;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border: 1px solid #fbbf24; border-radius: 6px;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              📝 <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
          <p>This email was sent automatically from the BSM website contact form.</p>
          <p>Bengali Society of Melbourne | <a href="https://bsmmelbourne.org" style="color: #dc2626;">bsmmelbourne.org</a></p>
        </div>
      </div>
    `,
    text: (data: any) => `
New Contact Form Submission - Bengali Society of Melbourne

Contact Details:
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.interest ? `Interest: ${data.interest}` : ''}

Message:
${data.message}

Please respond to this inquiry within 24 hours.

---
This email was sent automatically from the BSM website contact form.
Bengali Society of Melbourne | https://bsmmelbourne.org
    `,
  },
  membership: {
    subject: (data: any) => `New Membership Application - ${data.fullName} (${data.membershipType})`,
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #ea580c); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">🎊 New Membership Application</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Bengali Society of Melbourne</p>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #374151; margin-top: 0;">Membership Details</h2>
            <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
              <p style="margin: 0; color: #92400e; font-weight: bold; font-size: 16px;">
                Membership Type: ${data.membershipType?.toUpperCase()} ${data.membershipType === 'single' ? '($50/year)' : '($80/year)'}
              </p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 120px;">Full Name:</td>
                <td style="padding: 8px 0; color: #111827;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${data.email}" style="color: #dc2626;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Phone:</td>
                <td style="padding: 8px 0; color: #111827;"><a href="tel:${data.phone}" style="color: #dc2626;">${data.phone}</a></td>
              </tr>
              ${data.dateOfBirth ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Date of Birth:</td>
                <td style="padding: 8px 0; color: #111827;">${data.dateOfBirth}</td>
              </tr>
              ` : ''}
              ${data.address ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Address:</td>
                <td style="padding: 8px 0; color: #111827;">${data.address}</td>
              </tr>
              ` : ''}
              ${data.emergencyContact ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Emergency Contact:</td>
                <td style="padding: 8px 0; color: #111827;">${data.emergencyContact}</td>
              </tr>
              ` : ''}
              ${data.emergencyPhone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Emergency Phone:</td>
                <td style="padding: 8px 0; color: #111827;">${data.emergencyPhone}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          ${data.familyMembers && data.familyMembers.length > 0 ? `
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #374151; margin-top: 0;">Family Members</h2>
            ${data.familyMembers.map((member: any, index: number) => `
              <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; margin-bottom: 10px;">
                <p style="margin: 0; font-weight: bold; color: #374151;">Family Member ${index + 1}</p>
                <p style="margin: 5px 0; color: #6b7280;">Name: ${member.name}</p>
                <p style="margin: 5px 0; color: #6b7280;">Relationship: ${member.relationship}</p>
                ${member.dateOfBirth ? `<p style="margin: 5px 0; color: #6b7280;">Date of Birth: ${member.dateOfBirth}</p>` : ''}
              </div>
            `).join('')}
          </div>
          ` : ''}
          
          <div style="background: #fef2f2; padding: 20px; border: 1px solid #fca5a5; border-radius: 8px;">
            <h3 style="color: #b91c1c; margin-top: 0;">💳 Payment Information</h3>
            <p style="color: #7f1d1d; margin: 0;">
              <strong>BSB:</strong> 033070 | <strong>Account:</strong> 371537<br>
              <strong>Amount:</strong> ${data.membershipType === 'single' ? '$50' : '$80'} per year<br>
              <strong>Reference:</strong> ${data.fullName}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border: 1px solid #fbbf24; border-radius: 6px;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              📝 <strong>Next Steps:</strong> 
              1. Verify payment has been received<br>
              2. Process membership application<br>
              3. Send welcome email with membership details
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
          <p>This email was sent automatically from the BSM website membership form.</p>
          <p>Bengali Society of Melbourne | <a href="https://bsmmelbourne.org" style="color: #dc2626;">bsmmelbourne.org</a></p>
        </div>
      </div>
    `,
    text: (data: any) => `
New Membership Application - Bengali Society of Melbourne

Membership Type: ${data.membershipType?.toUpperCase()} ${data.membershipType === 'single' ? '($50/year)' : '($80/year)'}

Personal Details:
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
${data.dateOfBirth ? `Date of Birth: ${data.dateOfBirth}` : ''}
${data.address ? `Address: ${data.address}` : ''}
${data.emergencyContact ? `Emergency Contact: ${data.emergencyContact}` : ''}
${data.emergencyPhone ? `Emergency Phone: ${data.emergencyPhone}` : ''}

${data.familyMembers && data.familyMembers.length > 0 ? `
Family Members:
${data.familyMembers.map((member: any, index: number) => `
Family Member ${index + 1}:
  Name: ${member.name}
  Relationship: ${member.relationship}
  ${member.dateOfBirth ? `Date of Birth: ${member.dateOfBirth}` : ''}
`).join('')}
` : ''}

Payment Information:
BSB: 033070 | Account: 371537
Amount: ${data.membershipType === 'single' ? '$50' : '$80'} per year
Reference: ${data.fullName}

Next Steps:
1. Verify payment has been received
2. Process membership application  
3. Send welcome email with membership details

---
This email was sent automatically from the BSM website membership form.
Bengali Society of Melbourne | https://bsmmelbourne.org
    `,
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    // Validate required fields
    if (!formType || !formData) {
      return NextResponse.json(
        { error: 'Missing form type or form data' },
        { status: 400 }
      );
    }

    // Validate form type
    if (!EMAIL_TEMPLATES[formType as keyof typeof EMAIL_TEMPLATES]) {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      );
    }

    // Get email template
    const template = EMAIL_TEMPLATES[formType as keyof typeof EMAIL_TEMPLATES];
    
    // Recipient email (will be configurable later)
    const recipientEmail = 'manish.bvc@gmail.com';
    
    // Prepare email parameters
    const emailParams = {
      Source: process.env.SES_FROM_EMAIL || 'noreply@bsmmelbourne.org',
      Destination: {
        ToAddresses: [recipientEmail],
      },
      Message: {
        Subject: {
          Data: template.subject(formData),
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: template.html(formData),
            Charset: 'UTF-8',
          },
          Text: {
            Data: template.text(formData),
            Charset: 'UTF-8',
          },
        },
      },
    };

    // Send email using AWS SES
    const command = new SendEmailCommand(emailParams);
    const result = await sesClient.send(command);

    console.log('Email sent successfully:', {
      messageId: result.MessageId,
      formType,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      messageId: result.MessageId,
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}