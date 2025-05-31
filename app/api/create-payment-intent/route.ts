import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: Request) {
  try {
    const { paymentMethodId, amount } = await request.json()

    // Create a PaymentIntent with the payment method ID
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/success`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Payment error:', error)
    return NextResponse.json(
      { error: 'Payment failed' },
      { status: 500 }
    )
  }
} 