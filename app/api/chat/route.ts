import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    // Placeholder response until OpenAI API is configured
    const response = `Thank you for your interest in CEDRA! While our AI assistant is being configured, please feel free to:
    
1. Visit our website pages for detailed information
2. Contact us directly at [your-email@cedra.org]
3. Call us at [your-phone-number]

We'll be happy to answer any questions you have about:
- Donation options and impact
- Volunteer opportunities
- Partnership possibilities
- Program details`

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
} 