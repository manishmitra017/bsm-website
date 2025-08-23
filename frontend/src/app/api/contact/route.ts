import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, interest } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send an email to BSM leadership
    // 2. Store the inquiry in a database
    // 3. Send a confirmation email to the user
    
    // For now, we'll just log the inquiry and return success
    console.log('BSM Contact Form Submission:', {
      name,
      email,
      phone,
      interest,
      message,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for contacting Bengali Society of Melbourne. We will get back to you soon!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}