'use client'

import { motion } from 'framer-motion'
import { FaHandHoldingHeart, FaGraduationCap, FaUsers } from 'react-icons/fa'
import Link from 'next/link'

export default function About() {
  return (
    <>
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
    </>
  )
} 