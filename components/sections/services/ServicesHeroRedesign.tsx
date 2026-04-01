'use client'

import { motion } from 'framer-motion'

export default function ServicesHeroRedesign() {
  return (
    <section className="relative bg-petroleum py-24 md:py-32 overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Diagonal accent */}
      <div
        className="absolute top-0 left-0 w-1/4 h-full bg-workshop-amber/10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="font-display text-[10rem] md:text-[18rem] text-parchment/[0.03] leading-none tracking-tight">
          SERVICE
        </span>
      </div>

      {/* Handwritten annotation */}
      <motion.div
        initial={{ opacity: 0, rotate: -2 }}
        animate={{ opacity: 1, rotate: -2 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-16 right-[15%] font-handwritten text-xl md:text-2xl text-workshop-amber hidden md:block"
      >
        done right, every time
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-workshop-amber" />
            <span className="section-eyebrow">What We Do</span>
            <div className="h-px w-12 bg-workshop-amber" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-parchment leading-[0.9]"
          >
            OUR SERVICES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-parchment/60 mt-6 max-w-xl mx-auto"
          >
            Full-service automotive care with honest pricing. From routine maintenance to major repairs.
          </motion.p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-workshop-amber" />
    </section>
  )
}
