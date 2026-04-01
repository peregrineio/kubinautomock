'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import {
  motion,
  AnimatePresence,
  useInView,
} from 'framer-motion'
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
  Shield,
  ArrowRight,
} from 'lucide-react'
import { SERVICES, Service } from '@/lib/data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets, CircleStop, Settings, Wind, Zap, Truck, Car, Battery, Thermometer, Gauge, CircleDot, Shield
}

// Get services by category
const routineServices = SERVICES.filter(s => s.category === 'routine')
const majorServices = SERVICES.filter(s => s.category === 'major')
const specialtyServices = SERVICES.filter(s => s.category === 'specialty')

const categories = [
  { id: 'routine', title: 'ROUTINE', subtitle: 'Maintenance', services: routineServices, annotation: 'keep it running' },
  { id: 'major', title: 'MAJOR', subtitle: 'Repairs', services: majorServices, annotation: 'we fix it right' },
  { id: 'specialty', title: 'SPECIALTY', subtitle: 'Systems', services: specialtyServices, annotation: 'expert care' },
]

// The dramatic reveal panel on the right
function RevealPanel({ service, index }: { service: Service | null; index: number }) {
  const Icon = service ? iconMap[service.icon] : null

  return (
    <div className="relative h-full bg-petroleum overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        key={service?.id || 'empty'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--parchment) 1px, transparent 1px),
              linear-gradient(90deg, var(--parchment) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      <AnimatePresence mode="wait">
        {service ? (
          <motion.div
            key={service.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 h-full flex flex-col justify-center p-12 lg:p-16"
          >
            {/* Giant service number */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-8 right-8 font-display text-[12rem] lg:text-[16rem] text-parchment/[0.04] leading-none select-none pointer-events-none"
            >
              {String(index + 1).padStart(2, '0')}
            </motion.div>

            {/* Icon with dramatic entrance */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-workshop-amber flex items-center justify-center">
                {Icon && <Icon className="w-10 h-10 text-petroleum" />}
              </div>
            </motion.div>

            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-workshop-amber" />
              <span className="font-body text-xs font-semibold tracking-[0.3em] text-workshop-amber uppercase">
                {service.category}
              </span>
            </motion.div>

            {/* Service title with staggered letters */}
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl lg:text-5xl xl:text-6xl text-parchment leading-[0.95] mb-6"
            >
              {service.name.toUpperCase()}
            </motion.h3>

            {/* Description with line reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="max-w-md"
            >
              <p className="font-body text-lg text-parchment/70 leading-relaxed mb-6">
                {service.fullDescription}
              </p>
            </motion.div>

            {/* Handwritten note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="font-handwritten text-xl text-workshop-amber mb-8"
            >
              done right, every time
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-workshop-amber text-petroleum font-body font-semibold text-sm tracking-wider px-8 py-4 hover:bg-parchment transition-colors"
              >
                SCHEDULE THIS SERVICE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Decorative corner */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="absolute bottom-8 right-8"
            >
              <div className="w-16 h-16 border-r-2 border-b-2 border-workshop-amber/30" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 h-full flex flex-col items-center justify-center p-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-display text-6xl text-parchment/10 text-center"
            >
              SELECT A<br />SERVICE
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-handwritten text-xl text-workshop-amber/50 mt-6"
            >
              hover to explore
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Service list item with hover effect
function ServiceListItem({
  service,
  index,
  isActive,
  onHover,
  onClick,
}: {
  service: Service
  index: number
  isActive: boolean
  onHover: () => void
  onClick: () => void
}) {
  const Icon = iconMap[service.icon]

  return (
    <motion.button
      onMouseEnter={onHover}
      onClick={onClick}
      className={`
        group relative w-full text-left py-5 px-6 transition-all duration-300
        ${isActive
          ? 'bg-workshop-amber text-petroleum'
          : 'bg-transparent text-petroleum hover:bg-petroleum/5'
        }
      `}
      whileHover={{ x: isActive ? 0 : 8 }}
      transition={{ duration: 0.2 }}
    >
      {/* Left accent line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-workshop-amber"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originY: 0 }}
      />

      <div className="flex items-center gap-4">
        {/* Number */}
        <span className={`
          font-display text-2xl transition-colors duration-300
          ${isActive ? 'text-petroleum' : 'text-workshop-amber'}
        `}>
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Icon */}
        <div className={`
          w-10 h-10 flex items-center justify-center transition-all duration-300
          ${isActive ? 'bg-petroleum' : 'bg-petroleum/10'}
        `}>
          {Icon && (
            <Icon className={`
              w-5 h-5 transition-colors duration-300
              ${isActive ? 'text-workshop-amber' : 'text-petroleum'}
            `} />
          )}
        </div>

        {/* Title */}
        <span className="font-display text-sm lg:text-base leading-tight flex-1">
          {service.name.toUpperCase()}
        </span>

        {/* Arrow indicator */}
        <motion.span
          className={`transition-colors duration-300 ${isActive ? 'text-petroleum' : 'text-workshop-amber'}`}
          animate={{ x: isActive ? 4 : 0 }}
        >
          →
        </motion.span>
      </div>
    </motion.button>
  )
}

// Category section in the list
function CategorySection({
  category,
  activeService,
  onServiceHover,
  onServiceClick,
  startIndex,
}: {
  category: typeof categories[0]
  activeService: Service | null
  onServiceHover: (service: Service, index: number) => void
  onServiceClick: (service: Service, index: number) => void
  startIndex: number
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 px-6 mb-4">
        <div className="h-px w-6 bg-workshop-amber" />
        <h3 className="font-display text-xs tracking-[0.2em] text-petroleum/60">
          {category.title} <span className="text-workshop-amber">{category.subtitle}</span>
        </h3>
        <span className="font-handwritten text-sm text-workshop-amber/70">
          — {category.annotation}
        </span>
      </div>

      {/* Services list */}
      <div className="space-y-1">
        {category.services.map((service, i) => {
          const globalIndex = startIndex + i
          return (
            <ServiceListItem
              key={service.id}
              service={service}
              index={globalIndex}
              isActive={activeService?.id === service.id}
              onHover={() => onServiceHover(service, globalIndex)}
              onClick={() => onServiceClick(service, globalIndex)}
            />
          )
        })}
      </div>
    </motion.div>
  )
}

// Mobile accordion version
function MobileServiceAccordion({ services }: { services: Service[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="lg:hidden">
      {categories.map((category, catIndex) => {
        let startIndex = 0
        for (let i = 0; i < catIndex; i++) {
          startIndex += categories[i].services.length
        }

        return (
          <div key={category.id} className="mb-8">
            {/* Category header */}
            <div className="flex items-center gap-3 px-4 mb-4">
              <div className="h-px w-6 bg-workshop-amber" />
              <h3 className="font-display text-sm tracking-[0.15em] text-petroleum">
                {category.title} <span className="text-workshop-amber">{category.subtitle}</span>
              </h3>
            </div>

            {/* Services */}
            {category.services.map((service, i) => {
              const Icon = iconMap[service.icon]
              const isExpanded = expandedId === service.id
              const index = startIndex + i

              return (
                <motion.div
                  key={service.id}
                  className="border-b border-petroleum/10"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    className={`
                      w-full text-left p-4 flex items-center gap-4 transition-colors
                      ${isExpanded ? 'bg-petroleum' : 'bg-parchment'}
                    `}
                  >
                    <span className={`font-display text-2xl ${isExpanded ? 'text-workshop-amber' : 'text-workshop-amber'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className={`w-10 h-10 flex items-center justify-center ${isExpanded ? 'bg-workshop-amber' : 'bg-petroleum'}`}>
                      {Icon && <Icon className={`w-5 h-5 ${isExpanded ? 'text-petroleum' : 'text-workshop-amber'}`} />}
                    </div>
                    <span className={`font-display text-sm flex-1 ${isExpanded ? 'text-parchment' : 'text-petroleum'}`}>
                      {service.name.toUpperCase()}
                    </span>
                    <motion.span
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      className={isExpanded ? 'text-workshop-amber' : 'text-petroleum'}
                    >
                      →
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-petroleum"
                      >
                        <div className="p-6 pt-2">
                          <p className="font-body text-parchment/70 mb-4">
                            {service.fullDescription}
                          </p>
                          <div className="font-handwritten text-lg text-workshop-amber mb-4">
                            done right, every time
                          </div>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-workshop-amber text-petroleum font-body font-semibold text-sm px-6 py-3"
                          >
                            SCHEDULE
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

// Main component
export default function ServicesSplitReveal() {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const handleServiceHover = (service: Service, index: number) => {
    setActiveService(service)
    setActiveIndex(index)
  }

  const handleServiceClick = (service: Service, index: number) => {
    setActiveService(service)
    setActiveIndex(index)
  }

  // Calculate start indices for each category
  let routineStart = 0
  let majorStart = routineServices.length
  let specialtyStart = majorStart + majorServices.length

  return (
    <section ref={sectionRef} className="relative bg-aged-paper overflow-hidden">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(var(--petroleum) 1px, transparent 1px),
            linear-gradient(90deg, var(--petroleum) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Section header */}
      <div className="relative z-10 py-16 lg:py-20 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-workshop-amber" />
            <span className="section-eyebrow">Our Services</span>
            <div className="h-px w-16 bg-workshop-amber" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-petroleum leading-[0.9]">
            EVERY SERVICE,
            <br />
            <span className="text-workshop-amber">DONE RIGHT</span>
          </h2>
          <p className="font-handwritten text-2xl text-workshop-amber mt-6 hidden lg:block">
            hover any service to explore
          </p>
          <p className="font-handwritten text-xl text-workshop-amber mt-4 lg:hidden">
            tap to explore each service
          </p>
        </motion.div>
      </div>

      {/* Desktop: Split screen layout */}
      <div className="hidden lg:block relative z-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 min-h-[800px]">
            {/* Left: Service list */}
            <div className="bg-parchment py-8 overflow-y-auto max-h-[800px] border-r border-petroleum/10">
              <CategorySection
                category={categories[0]}
                activeService={activeService}
                onServiceHover={handleServiceHover}
                onServiceClick={handleServiceClick}
                startIndex={routineStart}
              />
              <CategorySection
                category={categories[1]}
                activeService={activeService}
                onServiceHover={handleServiceHover}
                onServiceClick={handleServiceClick}
                startIndex={majorStart}
              />
              <CategorySection
                category={categories[2]}
                activeService={activeService}
                onServiceHover={handleServiceHover}
                onServiceClick={handleServiceClick}
                startIndex={specialtyStart}
              />
            </div>

            {/* Right: Reveal panel */}
            <div className="sticky top-0 h-[800px]">
              <RevealPanel service={activeService} index={activeIndex} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Accordion layout */}
      <div className="relative z-10 px-4 pb-16">
        <MobileServiceAccordion services={SERVICES} />
      </div>

      {/* Bottom accent */}
      <div className="h-2 bg-petroleum" />
    </section>
  )
}
