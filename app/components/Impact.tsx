'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Impact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Transforming Lives</h3>
            <p className="text-gray-600 mb-6">
              Through our programs, we've helped thousands of women gain new skills, start businesses,
              and improve their economic status. Our success stories are a testament to the power of
              education and community support.
            </p>
            <Link
              href="/stories"
              className="text-primary font-semibold hover:underline"
            >
              Read Success Stories →
            </Link>
          </div>
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Women in training"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 