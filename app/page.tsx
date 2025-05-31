'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHandHoldingHeart, FaGraduationCap, FaUsers } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Women empowerment background"
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
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Empowering Women Through Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Join us in creating opportunities for underprivileged women to achieve economic independence
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/donate"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Volunteer
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FaHandHoldingHeart className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Economic Empowerment</h3>
              <p className="text-gray-600">
                Providing women with the skills and resources they need to achieve financial independence.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FaGraduationCap className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="text-gray-600">
                Offering quality education and vocational training programs tailored to women's needs.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FaUsers className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community Building</h3>
              <p className="text-gray-600">
                Creating a supportive network where women can share experiences and grow together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
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
                src="/impact-image.jpg"
                alt="Women in training"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8">
            Your support can make a difference in the lives of underprivileged women.
            Whether through donations, volunteering, or spreading awareness, you can help
            us create lasting change.
          </p>
          <Link
            href="/get-involved"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </main>
  )
} 