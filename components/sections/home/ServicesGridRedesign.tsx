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

export default function ServicesGridRedesign() {
  return (
    <section className="relative bg-parchment py-24 md:py-32 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--petroleum) 1px, transparent 1px),
            linear-gradient(90deg, var(--petroleum) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-16 bg-workshop-amber" />
            <span className="section-eyebrow">What We Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-petroleum leading-[0.9] mb-6"
          >
            EXPERT CARE.
            <br />
            <span className="text-workshop-amber">FAIR PRICE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-graphite/70 leading-relaxed"
          >
            We tell you exactly what your car needs. Nothing more, nothing less.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-petroleum/5">
          {HOMEPAGE_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon]
            const isHighlighted = index === 0 || index === 3

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`
                  group relative p-8 md:p-10 bg-parchment
                  transition-all duration-500
                  hover:bg-petroleum hover:text-parchment
                  ${isHighlighted ? 'md:col-span-1' : ''}
                `}
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-workshop-amber opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-workshop-amber opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Service number */}
                <span className="absolute top-4 right-4 font-display text-4xl text-petroleum/5 group-hover:text-parchment/10 transition-colors">
                  0{index + 1}
                </span>

                {/* Icon */}
                {Icon && (
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 border-2 border-petroleum/10 group-hover:border-workshop-amber transition-colors">
                      <Icon className="w-7 h-7 text-workshop-amber" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <h3 className="font-display text-xl md:text-2xl text-petroleum group-hover:text-parchment transition-colors mb-3 leading-tight">
                  {service.name.toUpperCase()}
                </h3>

                <p className="font-body text-sm text-graphite/70 group-hover:text-parchment/70 transition-colors leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-workshop-amber opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-body text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 font-body font-semibold text-petroleum hover:text-workshop-amber transition-colors"
          >
            <span className="uppercase tracking-wider text-sm">View All Services</span>
            <span className="inline-flex items-center justify-center w-10 h-10 border-2 border-current rounded-full group-hover:bg-workshop-amber group-hover:border-workshop-amber group-hover:text-petroleum transition-all">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
