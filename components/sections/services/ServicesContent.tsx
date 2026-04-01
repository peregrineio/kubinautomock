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

const categoryLabels: Record<string, string> = {
  routine: 'ROUTINE MAINTENANCE',
  major: 'MAJOR REPAIRS',
  specialty: 'SPECIALTY SYSTEMS',
  fleet: 'FLEET SERVICES',
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white border-l-4 border-l-amber-electric p-6 shadow-sm"
    >
      {Icon && <Icon className="w-7 h-7 text-amber-electric mb-4" />}
      <h3 className="font-display font-bold text-xl text-navy-black">
        {service.name}
      </h3>
      <p className="font-body text-sm text-slate-body mt-2 leading-relaxed">
        {service.fullDescription}
      </p>
    </motion.div>
  )
}

export default function ServicesContent() {
  const routineServices = SERVICES.filter(s => s.category === 'routine')
  const majorServices = SERVICES.filter(s => s.category === 'major')
  const specialtyServices = SERVICES.filter(s => s.category === 'specialty')
  const fleetServices = SERVICES.filter(s => s.category === 'fleet')

  return (
    <section className="bg-cream-bright py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Routine Maintenance */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-2xl text-navy-black uppercase border-l-4 border-l-amber-electric pl-4 mb-6">
            {categoryLabels.routine}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routineServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Major Repairs */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-2xl text-navy-black uppercase border-l-4 border-l-amber-electric pl-4 mb-6">
            {categoryLabels.major}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Specialty Systems */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-2xl text-navy-black uppercase border-l-4 border-l-amber-electric pl-4 mb-6">
            {categoryLabels.specialty}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Fleet Services Special Block */}
        <div className="bg-navy-black p-10 md:p-16 mb-16">
          <p className="section-eyebrow mb-4">FOR BUSINESSES</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-cream-bright">
            Fleet Maintenance That Keeps You Moving
          </h2>
          <p className="font-body text-lg text-cream-bright/70 mt-4 max-w-2xl">
            We service fleets of all sizes across the Brazos Valley. Preventative maintenance programs, priority scheduling, and a single point of contact for all your vehicles.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-electric text-navy-black font-body font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-none mt-6 hover:bg-amber-500 transition-colors"
          >
            Talk to Us About Your Fleet
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="font-body text-lg text-slate-body mb-4">
            Ready to schedule your visit?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-block font-display font-bold text-2xl text-amber-electric hover:text-amber-muted transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-block bg-amber-electric text-navy-black font-body font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-none hover:bg-amber-500 transition-colors"
            >
              Schedule Your Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
