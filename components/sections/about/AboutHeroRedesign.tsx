'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutHeroRedesign() {
  return (
    <section className="relative bg-petroleum py-24 md:py-32 overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Giant year in background */}
      <div className="absolute -bottom-20 -right-10 font-display text-[20rem] md:text-[35rem] leading-none select-none pointer-events-none">
        <span className="text-parchment/[0.03]">1978</span>
      </div>

      {/* Diagonal accent */}
      <div
        className="absolute bottom-0 left-0 w-1/3 h-full bg-workshop-amber/10"
        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-workshop-amber" />
              <span className="section-eyebrow">Our Story</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-parchment leading-[0.9] mb-6"
            >
              THE KUBIN
              <br />
              <span className="text-workshop-amber">FAMILY</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg text-parchment/70 max-w-lg"
            >
              Three generations of honest automotive service in Bryan, Texas.
              A family tradition built on trust and hard work.
            </motion.p>

            {/* Handwritten note */}
            <motion.div
              initial={{ opacity: 0, rotate: -2 }}
              animate={{ opacity: 1, rotate: -2 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="font-handwritten text-2xl text-workshop-amber mt-6"
            >
              still family, still honest
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop"
                alt="Kubin Automotive workshop"
                fill
                className="object-cover"
                style={{ filter: 'sepia(0.2) saturate(0.8)' }}
              />
              <div className="absolute inset-0 halftone" />
            </div>

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-workshop-amber px-6 py-4 shadow-xl"
            >
              <div className="font-display text-4xl text-petroleum leading-none">47</div>
              <div className="font-body text-xs text-petroleum/70 tracking-wider uppercase">Years</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-workshop-amber" />
    </section>
  )
}
