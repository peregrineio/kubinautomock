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
  Car,
  Battery,
  Thermometer,
  Gauge,
  CircleDot,
  Shield
} from 'lucide-react'
import { SERVICES, Service } from '@/lib/data/services'
import { BUSINESS } from '@/lib/data/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  CircleStop,
  Settings,
  Wind,
  Zap,
  Truck,
  Car,
  Battery,
  Thermometer,
  Gauge,
  CircleDot,
  Shield,
}

const categoryLabels: Record<string, { title: string; annotation: string }> = {
  routine: { title: 'ROUTINE MAINTENANCE', annotation: 'keep it running' },
  major: { title: 'MAJOR REPAIRS', annotation: 'we fix it right' },
  specialty: { title: 'SPECIALTY SYSTEMS', annotation: 'expert care' },
  fleet: { title: 'FLEET SERVICES', annotation: 'for businesses' },
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative bg-parchment p-6 border-t-4 border-workshop-amber hover:bg-petroleum transition-colors duration-300"
    >
      {/* Corner accent on hover */}
      <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-workshop-amber opacity-0 group-hover:opacity-100 transition-opacity" />

      {Icon && (
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-petroleum group-hover:bg-workshop-amber transition-colors">
            <Icon className="w-6 h-6 text-workshop-amber group-hover:text-petroleum transition-colors" />
          </div>
        </div>
      )}

      <h3 className="font-display text-lg text-petroleum group-hover:text-parchment transition-colors uppercase">
        {service.name}
      </h3>
      <p className="font-body text-sm text-graphite/70 group-hover:text-parchment/70 mt-2 leading-relaxed transition-colors">
        {service.fullDescription}
      </p>
    </motion.div>
  )
}

function CategorySection({
  category,
  services
}: {
  category: string
  services: Service[]
}) {
  const { title, annotation } = categoryLabels[category]

  return (
    <div className="mb-20">
      {/* Category Header */}
      <div className="relative mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-8 bg-workshop-amber" />
          <h2 className="font-display text-2xl md:text-3xl text-petroleum">
            {title}
          </h2>
        </motion.div>

        {/* Handwritten annotation */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute -top-4 right-0 font-handwritten text-lg text-workshop-amber hidden md:block"
        >
          {annotation}
        </motion.span>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  )
}

export default function ServicesContentRedesign() {
  const routineServices = SERVICES.filter(s => s.category === 'routine')
  const majorServices = SERVICES.filter(s => s.category === 'major')
  const specialtyServices = SERVICES.filter(s => s.category === 'specialty')

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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <CategorySection category="routine" services={routineServices} />
        <CategorySection category="major" services={majorServices} />
        <CategorySection category="specialty" services={specialtyServices} />

        {/* Fleet Services Special Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-petroleum p-10 md:p-16 mb-20 overflow-hidden"
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 noise-overlay" />

          {/* Diagonal accent */}
          <div
            className="absolute top-0 right-0 w-1/3 h-full bg-workshop-amber/10"
            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-workshop-amber" />
              <span className="section-eyebrow">For Businesses</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl text-parchment leading-[0.9] mb-4">
              FLEET MAINTENANCE
              <br />
              <span className="text-workshop-amber">THAT KEEPS YOU MOVING</span>
            </h2>

            <p className="font-body text-lg text-parchment/70 max-w-2xl mb-8">
              We service fleets of all sizes across the Brazos Valley. Preventative maintenance programs,
              priority scheduling, and a single point of contact for all your vehicles.
            </p>

            <div className="font-handwritten text-xl text-workshop-amber mb-8">
              your business runs, we keep you running
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-workshop-amber text-petroleum font-body font-semibold text-sm tracking-wider px-8 py-4 hover:bg-parchment transition-colors"
            >
              TALK TO US ABOUT YOUR FLEET
            </Link>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-handwritten text-2xl text-workshop-amber mb-4">
            ready to schedule?
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="font-display text-3xl md:text-4xl text-petroleum hover:text-workshop-amber transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <span className="hidden sm:block text-graphite/30">or</span>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-petroleum text-parchment font-body font-semibold text-sm tracking-wider px-8 py-4 hover:bg-petroleum-light transition-colors"
            >
              SCHEDULE ONLINE
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
