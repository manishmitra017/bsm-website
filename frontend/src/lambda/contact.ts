import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "ap-southeast-2" });

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  interest?: string;
}

interface LambdaEvent {
  httpMethod: string;
  body: string | null;
  headers?: Record<string, string>;
}

export const handler = async (event: LambdaEvent) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
      },
      body: '',
    };
  }

  try {
    // Parse the request body
    const body: ContactFormData = JSON.parse(event.body || '{}');
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          error: 'Missing required fields: name, email, and message are required',
        }),
      };
    }

    // Prepare email content
    const emailSubject = `BSM Contact Form: Message from ${body.name}`;
    const emailBody = `
New contact form submission from BSM website:

Name: ${body.name}
Email: ${body.email}
${body.phone ? `Phone: ${body.phone}` : ''}
${body.interest ? `Interest: ${body.interest}` : ''}

Message:
${body.message}

---
This message was sent from the BSM website contact form.
Reply directly to this email to respond to the sender.
    `;

    // Send email using SES
    const command = new SendEmailCommand({
      Source: process.env.EMAIL_SENDER || 'noreply@bsm.org.au',
      Destination: {
        ToAddresses: [process.env.CONTACT_EMAIL || 'info@bsm.org.au'],
      },
      ReplyToAddresses: [body.email],
      Message: {
        Subject: {
          Data: emailSubject,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: emailBody,
            Charset: 'UTF-8',
          },
          Html: {
            Data: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #dc2626;">New Contact Form Submission</h2>
                <p><strong>From:</strong> ${body.name} &lt;${body.email}&gt;</p>
                ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
                ${body.interest ? `<p><strong>Interest:</strong> ${body.interest}</p>` : ''}
                <h3 style="color: #dc2626;">Message:</h3>
                <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #dc2626; margin: 15px 0;">
                  ${body.message.replace(/\n/g, '<br>')}
                </div>
                <hr style="margin: 20px 0; border: 1px solid #eee;">
                <p style="font-size: 12px; color: #666;">
                  This message was sent from the BSM website contact form.<br>
                  Reply directly to this email to respond to the sender.
                </p>
              </div>
            `,
            Charset: 'UTF-8',
          },
        },
      },
    });

    await ses.send(command);

    // Send auto-reply to the sender
    const autoReplyCommand = new SendEmailCommand({
      Source: process.env.EMAIL_SENDER || 'noreply@bsm.org.au',
      Destination: {
        ToAddresses: [body.email],
      },
      Message: {
        Subject: {
          Data: 'Thank you for contacting Bengali Society of Melbourne',
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: `Dear ${body.name},

Thank you for reaching out to the Bengali Society of Melbourne (BSM). We have received your message and will get back to you as soon as possible.

Your message:
"${body.message}"

We appreciate your interest in our community and cultural activities. If you have any urgent inquiries, please feel free to call us at:
- President: Anup Singha - 0403 617 375
- Vice President: Pabitra Barman - 0413 406 344

Best regards,
Bengali Society of Melbourne Team
info@bsm.org.au
https://bsmmelbourne.org`,
            Charset: 'UTF-8',
          },
          Html: {
            Data: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
                <div style="background: linear-gradient(135deg, #dc2626, #ea580c); color: white; padding: 20px; text-align: center;">
                  <h1 style="margin: 0; font-size: 24px;">Bengali Society of Melbourne</h1>
                  <p style="margin: 5px 0 0 0; opacity: 0.9;">বেঙ্গলি সোসাইটি অফ মেলবোর্ন</p>
                </div>
                
                <div style="padding: 30px 20px;">
                  <p>Dear <strong>${body.name}</strong>,</p>
                  
                  <p>Thank you for reaching out to the Bengali Society of Melbourne (BSM). We have received your message and will get back to you as soon as possible.</p>
                  
                  <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #dc2626; margin: 20px 0;">
                    <strong>Your message:</strong><br>
                    "${body.message}"
                  </div>
                  
                  <p>We appreciate your interest in our community and cultural activities.</p>
                  
                  <div style="background: #fef2f2; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 0; font-weight: bold; color: #dc2626;">For urgent inquiries, please contact:</p>
                    <p style="margin: 5px 0;">📞 President: Anup Singha - <a href="tel:0403617375">0403 617 375</a></p>
                    <p style="margin: 5px 0;">📱 Vice President: Pabitra Barman - <a href="tel:0413406344">0413 406 344</a></p>
                  </div>
                  
                  <p>Best regards,<br>
                  <strong>Bengali Society of Melbourne Team</strong></p>
                </div>
                
                <div style="background: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #666;">
                  <p style="margin: 0;">
                    📧 <a href="mailto:info@bsm.org.au">info@bsm.org.au</a> | 
                    🌐 <a href="https://bsmmelbourne.org">bsmmelbourne.org</a> | 
                    📘 <a href="https://www.facebook.com/bsm2022">Facebook</a>
                  </p>
                </div>
              </div>
            `,
            Charset: 'UTF-8',
          },
        },
      },
    });

    await ses.send(autoReplyCommand);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
      }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Failed to send message. Please try again or contact us directly.',
      }),
    };
  }
};