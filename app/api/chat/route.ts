import { NextResponse } from 'next/server'

const NIM_API_URL = 'https://api.nvcf.nvidia.com/v2/nvcf/pexec/functions'
const MODEL_ID = process.env.NVIDIA_NIM_MODEL || 'deepseek-r1'

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    const apiKey = process.env.NVIDIA_NIM_API_KEY

    if (!apiKey) {
      throw new Error('NVIDIA NIM API key not configured')
    }

    const response = await fetch(`${NIM_API_URL}/${MODEL_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'You are CEDRA Assistant, a helpful AI assistant for the CEDRA NGO that focuses on empowering underprivileged women through education and economic opportunities. Be friendly, professional, and informative in your responses.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to get response from NVIDIA NIM')
    }

    const data = await response.json()
    return NextResponse.json({ response: data.choices[0].message.content })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
} 