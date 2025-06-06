'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHandHoldingHeart, FaGraduationCap, FaUsers } from 'react-icons/fa'
import Hero from './components/Hero'
import Impact from './components/Impact'
import About from './components/About'
import ProgramCarousel from './components/ProgramCarousel'

export default function Home() {
  return (
    <main>
      <Hero />
      <Impact />
      <ProgramCarousel />
      <About />
    </main>
  )
} 