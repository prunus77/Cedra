import { NextResponse } from 'next/server'

const NVIDIA_API_URL = 'https://integrate.api.nvidia.com/v1/chat/completions'
const NVIDIA_MODEL = 'meta/llama-4-maverick-17b-128e-instruct'

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    const apiKey = process.env.NVIDIA_NIM_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'NVIDIA API key not configured' },
        { status: 500 }
      )
    }

    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    const payload = {
      model: NVIDIA_MODEL,
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for CEDRA, an NGO focused on empowering underprivileged women. Provide informative and supportive responses about women's empowerment, education, and social development."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 512,
      temperature: 0.7,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stream: false
    }

    const response = await fetch(NVIDIA_API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`NVIDIA API error: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
} 