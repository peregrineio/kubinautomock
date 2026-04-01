'use client'

import { motion } from 'framer-motion'
import { BUSINESS } from '@/lib/data/constants'

export default function ContactHeroRedesign() {
  return (
    <section className="relative bg-petroleum py-20 md:py-28 overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/4 h-full bg-workshop-amber/10"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />

      {/* Handwritten annotation */}
      <motion.div
        initial={{ opacity: 0, rotate: 2 }}
        animate={{ opacity: 1, rotate: 2 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute top-12 right-[10%] font-handwritten text-xl text-workshop-amber hidden md:block"
      >
        we&apos;re here to help
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-workshop-amber" />
            <span className="section-eyebrow">Get In Touch</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-parchment leading-[0.9] mb-6"
          >
            LET&apos;S GET YOUR
            <br />
            <span className="text-workshop-amber">CAR RIGHT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-lg text-parchment/70 max-w-xl mb-8"
          >
            Schedule your visit online or give us a call. We&apos;ll take care of the rest.
          </motion.p>

          {/* Quick contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="font-display text-2xl md:text-3xl text-workshop-amber hover:text-parchment transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <span className="text-parchment/30 hidden sm:block">|</span>
            <span className="font-body text-sm text-parchment/50">
              Mon–Fri 7:30am–5:30pm
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-workshop-amber" />
    </section>
  )
}
