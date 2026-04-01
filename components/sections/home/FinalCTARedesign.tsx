'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BUSINESS } from '@/lib/data/constants'

export default function FinalCTARedesign() {
  return (
    <section className="relative bg-workshop-amber overflow-hidden">
      {/* Diagonal dark accent */}
      <div
        className="absolute bottom-0 left-0 w-1/3 h-full bg-petroleum"
        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, var(--petroleum) 25%, transparent 25%),
            linear-gradient(-45deg, var(--petroleum) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, var(--petroleum) 75%),
            linear-gradient(-45deg, transparent 75%, var(--petroleum) 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}
      />

      <div className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          {/* Handwritten intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-handwritten text-2xl md:text-3xl text-petroleum/70 mb-4"
          >
            ready when you are
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-petroleum leading-[0.9] mb-6"
          >
            EXPERIENCE THE
            <br />
            KUBIN DIFFERENCE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-petroleum/70 mb-10"
          >
            Call us or schedule online. Monday through Friday, 7:30am to 5:30pm.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-petroleum text-parchment font-body font-semibold text-sm tracking-wider px-10 py-5 hover:bg-petroleum-light transition-colors"
            >
              SCHEDULE SERVICE
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center border-2 border-petroleum text-petroleum font-body font-semibold text-sm tracking-wider px-10 py-5 hover:bg-petroleum hover:text-parchment transition-colors"
            >
              <span className="mr-2">CALL</span>
              {BUSINESS.phone}
            </a>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 inline-flex items-center gap-6 text-petroleum/50"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-petroleum/30 rounded-full" />
              <span className="font-body text-sm">Family Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-petroleum/30 rounded-full" />
              <span className="font-body text-sm">Since 1978</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-petroleum/30 rounded-full" />
              <span className="font-body text-sm">Bryan, TX</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-2 bg-petroleum" />
    </section>
  )
}
