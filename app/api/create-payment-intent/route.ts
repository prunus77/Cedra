import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { amount } = await request.json()

    // Placeholder response until Stripe is configured
    return NextResponse.json({
      message: "Thank you for your interest in donating to CEDRA! Our payment system is currently being configured. Please contact us directly at [your-email@cedra.org] to make your donation.",
      status: "pending"
    })
  } catch (error) {
    console.error('Payment error:', error)
    return NextResponse.json(
      { error: 'Failed to process payment' },
      { status: 500 }
    )
  }
} 