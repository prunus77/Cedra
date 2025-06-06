'use client'

import { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const programs = [
  {
    title: 'Women\'s Education Initiative',
    description: 'Providing quality education and skill development programs for underprivileged women.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    link: '/programs#education'
  },
  {
    title: 'Economic Empowerment',
    description: 'Supporting women entrepreneurs with training, mentorship, and micro-financing opportunities.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    link: '/programs#economic'
  },
  {
    title: 'Health & Wellness',
    description: 'Promoting women\'s health through awareness programs and access to healthcare services.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    link: '/programs#health'
  },
  {
    title: 'Leadership Development',
    description: 'Building leadership skills and confidence in women to create positive change in their communities.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop',
    link: '/programs#leadership'
  }
]

export default function ProgramCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const autoplay = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    const interval = setInterval(autoplay, 5000)
    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="relative h-48">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <a
                      href={program.link}
                      className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 