'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: any) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    setError('')
    
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }

    // Here you would typically send the form data to your backend
    // For now, we'll just show the success message
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-72 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us"
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Get in touch with us to learn more about our programs
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <FaMapMarkerAlt className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">
                123 Empowerment Street<br />
                Women's Development Area<br />
                City, State 12345
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <FaPhone className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">
                Main: (123) 456-7890<br />
                Support: (123) 456-7891
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <FaEnvelope className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">
                info@cedra.org<br />
                support@cedra.org
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Hours */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-100 text-green-800 p-6 rounded-lg">
                  <FaCheckCircle className="inline mr-2 text-green-600 text-2xl" />
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-1 font-medium">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                  {error && <div className="text-red-600 text-sm">{error}</div>}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>

            {/* Office Hours and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Office Hours</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <FaClock className="text-primary text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Main Office</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80"
                      alt="Office Location"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow p-4">
              <summary className="font-medium cursor-pointer">How can I volunteer with CEDRA?</summary>
              <p className="mt-2 text-gray-600">
                You can apply to volunteer through our volunteer page. We'll review your application and get back to you within 2-3 business days.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-4">
              <summary className="font-medium cursor-pointer">How can I donate to CEDRA?</summary>
              <p className="mt-2 text-gray-600">
                You can make a donation through our secure donation page. We accept various payment methods including credit cards and bank transfers.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-4">
              <summary className="font-medium cursor-pointer">How can I enroll in CEDRA's programs?</summary>
              <p className="mt-2 text-gray-600">
                Visit our programs page to learn about our offerings, then contact us through this form or call our office to begin the enrollment process.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  )
} 