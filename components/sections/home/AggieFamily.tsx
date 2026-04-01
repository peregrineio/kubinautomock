'use client'

import { motion } from 'framer-motion'
import { PhoneCall, Receipt, Clock } from 'lucide-react'

const trustTiles = [
  {
    icon: PhoneCall,
    title: 'We Call You First',
    description: "Parents stay informed. We'll reach out before any major work begins.",
  },
  {
    icon: Receipt,
    title: 'Fair, Honest Estimates',
    description: 'We tell you exactly what your car needs — nothing more, nothing less.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: "Most repairs completed same day. Your student won't miss class.",
  },
]

export default function AggieFamily() {
  return (
    <section className="bg-cream-bright py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="section-eyebrow mb-4">FOR AGGIE FAMILIES</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-black leading-none">
            Your Student Is in Bryan.
          </h2>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-black leading-none">
            We&apos;ve Got Them.
          </h2>
        </div>

        {/* Body Text */}
        <p className="font-body text-lg text-slate-body leading-relaxed text-center max-w-2xl mx-auto mt-6">
          Parents across Texas trust us with their Aggies&apos; vehicles. We give you an honest assessment — and we&apos;ll call you first if there&apos;s a bigger issue. No surprises. No pressure. We understand what it means to have family far from home.
        </p>

        {/* Trust Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {trustTiles.map((tile, index) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-cream-border p-8 rounded-none text-center border-t-[3px] border-t-amber-electric"
            >
              <tile.icon className="w-10 h-10 text-amber-electric mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-navy-black">
                {tile.title}
              </h3>
              <p className="font-body text-sm text-slate-body mt-2">
                {tile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
