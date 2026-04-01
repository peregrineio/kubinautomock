'use client'

import { motion } from 'framer-motion'
import { Wrench, Zap, Heart, MapPin } from 'lucide-react'

const values = [
  {
    icon: Wrench,
    title: 'HONESTY',
    description: 'We tell you exactly what your car needs. Nothing more, nothing less. Ever.',
  },
  {
    icon: Zap,
    title: 'QUALITY',
    description: "Every repair done right the first time. We don't cut corners on your safety.",
  },
  {
    icon: Heart,
    title: 'FAMILY',
    description: 'We treat every vehicle like it belongs to one of our own.',
  },
  {
    icon: MapPin,
    title: 'COMMUNITY',
    description: 'Serving Bryan and the Brazos Valley for 47 years. This is our home too.',
  },
]

export default function ValuesSection() {
  return (
    <section className="bg-navy-black py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-4">WHAT WE STAND FOR</p>
          <h2 className="font-display font-bold text-4xl text-cream-bright">
            Our Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-deep p-8 text-center"
            >
              <value.icon className="w-9 h-9 text-amber-electric mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-cream-bright">
                {value.title}
              </h3>
              <p className="font-body text-sm text-cream-bright/60 mt-2">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
