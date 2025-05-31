'use client'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DonationForm from '../components/DonationForm'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Donate() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/donate-hero.jpg"
            alt="Donate to CEDRA"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Make a Difference
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Your donation helps empower women through education and economic opportunities
          </motion.p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Elements stripe={stripePromise}>
            <DonationForm />
          </Elements>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-4">$25</h3>
              <p className="text-gray-600">
                Provides educational materials for one woman for a month
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-4">$100</h3>
              <p className="text-gray-600">
                Funds a week of vocational training for one woman
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-4">$500</h3>
              <p className="text-gray-600">
                Supports a micro-enterprise startup for one woman
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 