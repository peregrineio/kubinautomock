'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function KubinStory() {
  return (
    <section className="bg-navy-black py-20 md:py-28">
      {/* Amber Rule at Top */}
      <div className="h-1 bg-amber-electric mb-12 md:mb-16" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1694155735994-c8c8edfd34e0?w=800&h=600&fit=crop"
                alt="Mechanic at work"
                fill
                className="object-cover"
                style={{ filter: 'saturate(0.7) sepia(0.2)' }}
              />
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pl-0 md:pl-8 lg:pl-16"
          >
            <p className="section-eyebrow mb-4">OUR STORY</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-cream-bright leading-none">
              FROM FATHER
            </h2>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-cream-bright leading-none">
              TO SON TO YOU
            </h2>

            <div className="mt-6 space-y-4">
              <p className="font-body text-lg text-cream-bright/70 leading-relaxed">
                Frank Kubin opened these doors in 1978 with one simple belief — that a good mechanic is honest above all else. No unnecessary work. No inflated bills. Just the truth about what your car needs.
              </p>
              <p className="font-body text-lg text-cream-bright/70 leading-relaxed">
                Today, his son Kent carries that same ethic forward. Different generation, same values. The tools have changed. The community has grown. The family is still here.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body font-semibold text-amber-electric hover:text-amber-500 transition-colors mt-6"
            >
              Meet the Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
