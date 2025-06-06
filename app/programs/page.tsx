'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaCut, FaCar, FaLaptopCode, FaGraduationCap, FaHandHoldingHeart } from 'react-icons/fa'

export default function Programs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
            alt="CEDRA Programs"
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
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Empowering women through skill development and education
          </motion.p>
        </div>
      </section>

      {/* Vocational Training Programs */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Vocational Training Programs</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1000&q=80"
                alt="Stitching and Sewing Program"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <FaCut className="text-primary text-4xl" />
                <h3 className="text-2xl font-bold">Stitching and Sewing Business</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our comprehensive stitching and sewing program equips women with professional skills to start their own businesses. The program includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Basic to advanced sewing techniques</li>
                <li>Pattern making and design</li>
                <li>Business management skills</li>
                <li>Marketing and customer relations</li>
                <li>Equipment and material support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Skills Development */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <FaCar className="text-primary text-4xl" />
                <h3 className="text-2xl font-bold">Essential Skills Training</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We provide essential life and professional skills training to enhance women's employability and independence:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Professional driving lessons</li>
                <li>Basic computer literacy</li>
                <li>Financial management</li>
                <li>Communication skills</li>
                <li>Digital literacy</li>
              </ul>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80"
                alt="Essential Skills Training"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Children's Education Program */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
                alt="Science and Tech Education"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <FaLaptopCode className="text-primary text-4xl" />
                <h3 className="text-2xl font-bold">Science and Tech Education</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We provide quality education in science and technology for children of underprivileged women:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Basic computer programming</li>
                <li>Science experiments and projects</li>
                <li>Mathematics and problem-solving</li>
                <li>Digital skills development</li>
                <li>STEM workshops and competitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FaGraduationCap className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Adult Education</h3>
              <p className="text-gray-600">
                Basic literacy and numeracy programs for women who missed out on formal education.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FaHandHoldingHeart className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Health and Wellness</h3>
              <p className="text-gray-600">
                Workshops on health awareness, nutrition, and mental well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Programs</h2>
          <p className="text-xl mb-8">
            Take the first step towards empowerment. Our programs are designed to help you achieve your goals and create a better future.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  )
} 