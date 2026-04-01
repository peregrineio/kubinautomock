'use client'

import { motion } from 'framer-motion'
import { Wrench, Zap, Heart, MapPin } from 'lucide-react'

const values = [
  {
    icon: Wrench,
    title: 'HONESTY',
    description: 'We tell you exactly what your car needs. Nothing more, nothing less. Ever.',
    annotation: 'always'
  },
  {
    icon: Zap,
    title: 'QUALITY',
    description: "Every repair done right the first time. We don't cut corners on your safety.",
    annotation: 'no shortcuts'
  },
  {
    icon: Heart,
    title: 'FAMILY',
    description: 'We treat every vehicle like it belongs to one of our own.',
    annotation: 'like ours'
  },
  {
    icon: MapPin,
    title: 'COMMUNITY',
    description: 'Serving Bryan and the Brazos Valley for 47 years. This is our home too.',
    annotation: 'neighbors'
  },
]

export default function ValuesSectionRedesign() {
  return (
    <section className="relative bg-petroleum py-20 md:py-28 overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-workshop-amber/10"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="font-display text-[12rem] md:text-[20rem] text-parchment/[0.02] leading-none">
          VALUES
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-workshop-amber" />
            <span className="section-eyebrow">What We Stand For</span>
            <div className="h-px w-12 bg-workshop-amber" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-parchment leading-[0.9]"
          >
            OUR <span className="text-workshop-amber">VALUES</span>
          </motion.h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-parchment p-8 border-t-4 border-workshop-amber"
            >
              {/* Handwritten annotation */}
              <span className="absolute -top-3 right-4 font-handwritten text-lg text-workshop-amber bg-petroleum px-2">
                {value.annotation}
              </span>

              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-petroleum flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-workshop-amber" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-xl text-petroleum">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-graphite/70 mt-2 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-workshop-amber opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Handwritten note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <span className="font-handwritten text-2xl text-workshop-amber">
            this is how we&apos;ve always done it
          </span>
        </motion.div>
      </div>
    </section>
  )
}
