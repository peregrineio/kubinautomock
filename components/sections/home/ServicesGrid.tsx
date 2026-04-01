'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Droplets, 
  CircleStop, 
  Settings, 
  Wind, 
  Zap, 
  Truck,
  ArrowRight 
} from 'lucide-react'
import { HOMEPAGE_SERVICES } from '@/lib/data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  CircleStop,
  Settings,
  Wind,
  Zap,
  Truck,
}

export default function ServicesGrid() {
  return (
    <section className="bg-cream-bright py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-4">WHAT WE DO</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-black leading-none">
            Expert Care.
          </h2>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-black leading-none">
            Honest Pricing.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {HOMEPAGE_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border-l-4 border-l-amber-electric rounded-none p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {Icon && (
                  <Icon className="w-7 h-7 text-amber-electric mb-4" />
                )}
                <h3 className="font-display font-bold text-lg md:text-xl text-navy-black">
                  {service.name}
                </h3>
                <p className="font-body text-sm text-slate-body mt-2 leading-relaxed">
                  {service.shortDescription}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-body font-semibold text-amber-muted hover:text-amber-electric transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
