'use client'

import { motion } from 'framer-motion'
import { PhoneCall, FileText, Clock } from 'lucide-react'

const trustPoints = [
  {
    icon: PhoneCall,
    title: 'We Call You First',
    description: "Parents stay informed. We'll reach out before any major work begins.",
    annotation: 'always'
  },
  {
    icon: FileText,
    title: 'Honest Estimates',
    description: 'We tell you exactly what your car needs — nothing more, nothing less.',
    annotation: 'no surprises'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: "Most repairs completed same day. Your student won't miss class.",
    annotation: 'same day'
  },
]

export default function AggieFamilyRedesign() {
  return (
    <section className="relative bg-aged-paper py-24 md:py-32 overflow-hidden">
      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-workshop-amber/10"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--petroleum) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-workshop-amber" />
            <span className="section-eyebrow">For Aggie Families</span>
            <div className="h-px w-12 bg-workshop-amber" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-petroleum leading-[0.9] mb-6"
          >
            YOUR STUDENT IS IN BRYAN.
            <br />
            <span className="text-workshop-amber">WE&apos;VE GOT THEM.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-graphite/70 max-w-2xl mx-auto leading-relaxed"
          >
            Parents across Texas trust us with their Aggies&apos; vehicles. We give you an honest
            assessment — and we&apos;ll call you first if there&apos;s a bigger issue.
          </motion.p>

          {/* Handwritten note */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-handwritten text-2xl text-workshop-amber mt-4"
          >
            we understand what it means to have family far from home
          </motion.div>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="group relative bg-parchment p-8 border-t-4 border-workshop-amber"
            >
              {/* Annotation */}
              <span className="absolute -top-3 right-4 font-handwritten text-lg text-workshop-amber bg-aged-paper px-2">
                {point.annotation}
              </span>

              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-petroleum text-workshop-amber">
                  <point.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-petroleum mb-3 uppercase">
                {point.title}
              </h3>
              <p className="font-body text-sm text-graphite/70 leading-relaxed">
                {point.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-petroleum/5 group-hover:bg-workshop-amber/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
