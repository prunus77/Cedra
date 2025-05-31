'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const timeSlots = ['Morning', 'Afternoon', 'Evening']
const interests = [
  'Community Outreach',
  'Data Collection/Entry',
  'Field Volunteering',
  'Event Planning',
  'Fundraising',
  'Communications & Design',
  'Research & Reports',
  'Tech/Website Support',
]

export default function VolunteerPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    daysAvailable: [] as string[],
    timeSlots: [] as string[],
    startDate: '',
    interests: [] as string[],
    experience: '',
    resume: null as File | null,
    motivation: '',
    codeOfConduct: false,
    commitment: false,
    hoursPerMonth: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: any) {
    const { name, value, type, checked, files } = e.target
    if (type === 'checkbox' && name === 'daysAvailable') {
      setForm((f) => ({
        ...f,
        daysAvailable: checked
          ? [...f.daysAvailable, value]
          : f.daysAvailable.filter((d) => d !== value),
      }))
    } else if (type === 'checkbox' && name === 'timeSlots') {
      setForm((f) => ({
        ...f,
        timeSlots: checked
          ? [...f.timeSlots, value]
          : f.timeSlots.filter((t) => t !== value),
      }))
    } else if (type === 'checkbox' && name === 'interests') {
      setForm((f) => ({
        ...f,
        interests: checked
          ? [...f.interests, value]
          : f.interests.filter((i) => i !== value),
      }))
    } else if (type === 'checkbox') {
      setForm((f) => ({ ...f, [name]: checked }))
    } else if (type === 'file') {
      setForm((f) => ({ ...f, resume: files[0] }))
    } else {
      setForm((f) => ({ ...f, [name]: value }))
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    setError('')
    if (!form.firstName || !form.lastName || !form.email || !form.codeOfConduct || !form.commitment) {
      setError('Please fill all required fields and agree to the commitments.')
      return
    }
    setSubmitted(true)
    // Here you would send the form data to your backend or API
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Banner/Header */}
      <section className="relative h-72 flex items-center justify-center">
        <Image src="/volunteer-banner.jpg" alt="Volunteer Banner" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Join hands with CEDRA to make a difference in vulnerable communities.
          </h1>
        </div>
      </section>

      {/* Why Volunteer with Us */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Volunteer with Us?</h2>
        <p className="text-gray-700 mb-6">
          Volunteers are the backbone of CEDRA. Your time and skills help us reach more women and families, run impactful programs, and create lasting change. Hear from our volunteers:
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <blockquote className="bg-white rounded-lg shadow p-4 text-left max-w-md mx-auto">
            <p className="italic">“Volunteering with CEDRA gave me purpose and a chance to uplift others.”</p>
            <footer className="mt-2 text-sm text-gray-500">— Asha, Community Outreach Volunteer</footer>
          </blockquote>
          <blockquote className="bg-white rounded-lg shadow p-4 text-left max-w-md mx-auto">
            <p className="italic">“I learned so much and made lifelong friends while making a difference.”</p>
            <footer className="mt-2 text-sm text-gray-500">— Ravi, Data Collection Volunteer</footer>
          </blockquote>
        </div>
      </section>

      {/* Volunteer Expectations */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Volunteer Expectations</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Commit to at least 6 hours per month (unless otherwise agreed).</li>
          <li>Adhere to CEDRA's Volunteer Code of Conduct.</li>
          <li>Participate in onboarding and training sessions.</li>
          <li>Communicate availability and changes in schedule.</li>
        </ul>
      </section>

      {/* Volunteer Signup Form */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Volunteer Signup Form</h2>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center">
            <FaCheckCircle className="inline mr-2 text-green-600 text-2xl" />
            Thank you for signing up! We'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">First Name *</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Last Name *</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1 font-medium">City</label>
                <input name="city" value={form.city} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 font-medium">State</label>
                <input name="state" value={form.state} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Country</label>
                <input name="country" value={form.country} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Days Available</label>
              <div className="flex flex-wrap gap-3">
                {days.map((day) => (
                  <label key={day} className="flex items-center gap-1">
                    <input type="checkbox" name="daysAvailable" value={day} checked={form.daysAvailable.includes(day)} onChange={handleChange} />
                    {day}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Preferred Time Slots</label>
              <div className="flex flex-wrap gap-3">
                {timeSlots.map((slot) => (
                  <label key={slot} className="flex items-center gap-1">
                    <input type="checkbox" name="timeSlots" value={slot} checked={form.timeSlots.includes(slot)} onChange={handleChange} />
                    {slot}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Start Date</label>
              <input name="startDate" type="date" value={form.startDate} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Areas of Interest</label>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <label key={interest} className="flex items-center gap-1">
                    <input type="checkbox" name="interests" value={interest} checked={form.interests.includes(interest)} onChange={handleChange} />
                    {interest}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Previous Experience</label>
              <textarea name="experience" value={form.experience} onChange={handleChange} className="w-full border px-3 py-2 rounded" rows={3} placeholder="Share any relevant experience (optional)" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Resume Upload</label>
              <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleChange} className="w-full" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Why do you want to volunteer with CEDRA?</label>
              <textarea name="motivation" value={form.motivation} onChange={handleChange} className="w-full border px-3 py-2 rounded" rows={2} required />
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="codeOfConduct" checked={form.codeOfConduct} onChange={handleChange} required />
                I agree to CEDRA's Volunteer Code of Conduct *
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="commitment" checked={form.commitment} onChange={handleChange} required />
              <span>I commit to volunteering at least</span>
              <input name="hoursPerMonth" type="number" min="1" value={form.hoursPerMonth} onChange={handleChange} className="w-16 border px-2 py-1 rounded mx-1" required />
              <span>hours per month *</span>
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </motion.button>
          </form>
        )}
      </section>

      {/* FAQs Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        <div className="space-y-4">
          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-medium cursor-pointer">Who can volunteer with CEDRA?</summary>
            <p className="mt-2 text-gray-700">Anyone 18 years or older who is passionate about our mission can apply. Some roles may require specific skills or background checks.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-medium cursor-pointer">What is the minimum time commitment?</summary>
            <p className="mt-2 text-gray-700">We ask for a minimum of 6 hours per month, but you can discuss your availability with our team.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-medium cursor-pointer">Will I receive training?</summary>
            <p className="mt-2 text-gray-700">Yes! All volunteers receive onboarding and training relevant to their roles.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-medium cursor-pointer">Can I volunteer remotely?</summary>
            <p className="mt-2 text-gray-700">Many roles can be done remotely. Please indicate your preference in the form.</p>
          </details>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 max-w-4xl mx-auto text-center">
        <p className="text-lg mb-2">Still have questions?</p>
        <a href="mailto:volunteer@cedra.org" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
          <FaEnvelope /> Email our Volunteer Coordinator
        </a>
      </section>
    </main>
  )
} 