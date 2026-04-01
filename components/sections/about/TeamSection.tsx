'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const team = [
  {
    name: 'Frank Kubin',
    role: 'Founder & Master Mechanic',
    bio: 'Frank founded Kubin Automotive in 1978. With over four decades of hands-on experience, his diagnostic instincts are unmatched.',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&h=500&fit=crop&crop=face',
  },
  {
    name: 'Kent Kubin',
    role: 'Owner & Lead Technician',
    bio: 'Kent grew up in the shop watching his father work. Modern training, classic values.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&crop=face',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-cream-bright py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-4">MEET THE TEAM</p>
          <h2 className="font-display font-bold text-4xl text-navy-black">
            The Kubins
          </h2>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-sm overflow-hidden"
            >
              <div className="relative aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  style={{ filter: 'saturate(0.85) sepia(0.1)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-navy-black">
                  {member.name}
                </h3>
                <p className="font-body font-medium text-sm text-amber-electric">
                  {member.role}
                </p>
                <p className="font-body text-sm text-slate-body mt-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="font-body text-xs text-slate-body/60 text-center mt-8 italic">
          Note: Stock photos for mockup — will be replaced with real Kubin family photos before launch.
        </p>
      </div>
    </section>
  )
}
