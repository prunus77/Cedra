import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const systemPrompt = `You are CEDRA's AI assistant, helping potential donors, volunteers, and collaborators understand how they can contribute to empowering underprivileged women. Your responses should be:

1. Friendly and professional
2. Focused on CEDRA's mission of women's economic empowerment
3. Provide specific information about:
   - Donation options and impact
   - Volunteer opportunities
   - Partnership possibilities
   - Program details
4. Keep responses concise and actionable

If you're unsure about something, direct the user to the appropriate page on the website or suggest they contact CEDRA directly.`

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    return NextResponse.json({
      response: completion.choices[0].message.content,
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
} 