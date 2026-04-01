'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const team = [
  {
    name: 'Frank Kubin',
    role: 'Founder & Master Mechanic',
    bio: 'Frank founded Kubin Automotive in 1978. With over four decades of hands-on experience, his diagnostic instincts are unmatched.',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&h=500&fit=crop&crop=face',
    annotation: 'the original'
  },
  {
    name: 'Kent Kubin',
    role: 'Owner & Lead Technician',
    bio: 'Kent grew up in the shop watching his father work. Modern training, classic values.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&crop=face',
    annotation: 'carrying on'
  },
]

export default function TeamSectionRedesign() {
  return (
    <section className="relative bg-aged-paper py-20 md:py-28 overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
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
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-workshop-amber" />
            <span className="section-eyebrow">Meet The Team</span>
            <div className="h-px w-12 bg-workshop-amber" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-petroleum leading-[0.9]"
          >
            THE <span className="text-workshop-amber">KUBINS</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-handwritten text-xl text-workshop-amber mt-4"
          >
            father and son, side by side
          </motion.div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-parchment overflow-hidden"
            >
              {/* Top accent */}
              <div className="h-1 bg-workshop-amber" />

              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'sepia(0.2) saturate(0.85)' }}
                />
                <div className="absolute inset-0 halftone opacity-50" />

                {/* Handwritten annotation */}
                <div className="absolute top-4 right-4 font-handwritten text-lg text-workshop-amber bg-parchment/90 px-3 py-1">
                  {member.annotation}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-petroleum">
                  {member.name}
                </h3>
                <p className="font-body font-semibold text-sm text-workshop-amber uppercase tracking-wider mt-1">
                  {member.role}
                </p>
                <p className="font-body text-sm text-graphite/70 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-workshop-amber opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-xs text-graphite/50 text-center mt-10 italic"
        >
          Note: Stock photos for mockup — will be replaced with real Kubin family photos before launch.
        </motion.p>
      </div>
    </section>
  )
}
