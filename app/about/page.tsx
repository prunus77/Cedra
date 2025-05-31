'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaBullseye, FaUsers, FaHandshake } from 'react-icons/fa'

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="About CEDRA"
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
            About CEDRA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Empowering women through education and economic opportunities
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                CEDRA was founded in 2010 with a vision to create sustainable change in the lives of
                underprivileged women. What started as a small initiative has grown into a movement
                that has impacted thousands of lives across multiple communities.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by countless success stories of women who have transformed
                their lives through education, skill development, and economic empowerment.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/our-story.jpg"
                alt="Our Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FaBullseye className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
              <p className="text-gray-600">
                We believe in empowering women with the knowledge, skills, and resources they need to
                achieve their full potential.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FaUsers className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Inclusivity</h3>
              <p className="text-gray-600">
                We are committed to creating an inclusive environment where every woman feels valued
                and supported.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FaHandshake className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Partnership</h3>
              <p className="text-gray-600">
                We work in partnership with communities, organizations, and individuals to create
                lasting change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <motion.div
                key={member}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={`/team-${member}.jpg`}
                    alt={`Team Member ${member}`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Member {member}</h3>
                <p className="text-gray-600">Position</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Board Members</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Jane Doe', position: 'Chairperson', img: '/board-1.jpg' },
              { name: 'John Smith', position: 'Treasurer', img: '/board-2.jpg' },
              { name: 'Priya Patel', position: 'Secretary', img: '/board-3.jpg' },
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 