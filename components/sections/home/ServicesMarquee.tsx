'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  motion,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import {
  Droplets,
  CircleStop,
  Settings,
  Wind,
  Zap,
  Truck,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react'
import { HOMEPAGE_SERVICES } from '@/lib/data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets, CircleStop, Settings, Wind, Zap, Truck
}

// Service-specific imagery and styling
const serviceVisuals: Record<string, { image: string; alt: string }> = {
  'oil-change': {
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=800&fit=crop',
    alt: 'Oil being poured into engine'
  },
  'brakes': {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop',
    alt: 'Brake rotor close-up'
  },
  'engine': {
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=800&fit=crop',
    alt: 'Engine bay diagnostics'
  },
  'ac': {
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=800&fit=crop',
    alt: 'Car interior climate control'
  },
  'electrical': {
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=800&fit=crop',
    alt: 'Car electrical system'
  },
  'fleet': {
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&h=800&fit=crop',
    alt: 'Fleet of vehicles'
  },
}

// Single service item in the marquee
function MarqueeItem({
  service,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  service: typeof HOMEPAGE_SERVICES[0]
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const Icon = iconMap[service.icon]
  const number = String(index + 1).padStart(2, '0')
  const visuals = serviceVisuals[service.id] || serviceVisuals['oil-change']

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative flex-shrink-0 cursor-pointer group"
      animate={{
        width: isHovered ? 520 : 320,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-[450px] overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={visuals.image}
            alt={visuals.alt}
            fill
            className="object-cover"
            style={{
              filter: isHovered
                ? 'saturate(0.7) sepia(0.1) brightness(0.5)'
                : 'saturate(0.4) sepia(0.2) brightness(0.35)'
            }}
          />
        </motion.div>

        {/* Halftone overlay */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at center, var(--petroleum) 1px, transparent 1px)`,
            backgroundSize: '4px 4px'
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-petroleum via-petroleum/70 to-petroleum/30" />

        {/* Animated amber accent line at top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-workshop-amber"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{
            scaleX: isHovered ? 1 : 0.3,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Large background number */}
        <motion.div
          className="absolute -top-4 -right-4 font-display text-[12rem] leading-none text-parchment/[0.06] select-none pointer-events-none"
          animate={{
            opacity: isHovered ? 0.1 : 0.06,
            x: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          {number}
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-8">
          {/* Top row: Icon + Category */}
          <div className="flex items-start justify-between mb-auto">
            <motion.div
              className="relative"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon glow effect */}
              <motion.div
                className="absolute inset-0 bg-workshop-amber blur-xl"
                animate={{
                  opacity: isHovered ? 0.4 : 0,
                  scale: isHovered ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative w-16 h-16 bg-workshop-amber flex items-center justify-center">
                {Icon && <Icon className="w-8 h-8 text-petroleum" />}
              </div>
            </motion.div>

            {/* Service badge */}
            <div className="bg-petroleum/80 backdrop-blur-sm px-3 py-1.5 border border-parchment/10">
              <span className="font-display text-xs tracking-wider text-workshop-amber">
                SERVICE {number}
              </span>
            </div>
          </div>

          {/* Middle: Title (always visible) */}
          <div className="mt-auto">
            <motion.h3
              className="font-display text-2xl md:text-3xl text-parchment leading-[0.95] mb-3"
              animate={{
                y: isHovered ? -10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {service.name.split(' ').slice(0, 2).join(' ').toUpperCase()}
              {service.name.split(' ').length > 2 && (
                <>
                  <br />
                  <span className="text-workshop-amber">
                    {service.name.split(' ').slice(2).join(' ').toUpperCase()}
                  </span>
                </>
              )}
            </motion.h3>

            {/* Expanded content */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: 10, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-body text-sm text-parchment/70 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Handwritten note */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="font-handwritten text-lg text-workshop-amber mb-4"
                  >
                    done right, every time
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="/services"
                      className="group/link inline-flex items-center gap-2 bg-workshop-amber text-petroleum font-body font-semibold text-sm px-5 py-2.5 hover:bg-parchment transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Default state indicator */}
            <AnimatePresence>
              {!isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 mt-4"
                >
                  <div className="h-px flex-1 bg-parchment/20" />
                  <span className="font-body text-xs text-parchment/50 uppercase tracking-wider">
                    Hover
                  </span>
                  <motion.span
                    className="text-workshop-amber"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute bottom-4 right-4"
          animate={{
            opacity: isHovered ? 1 : 0.3,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-8 h-8 border-r-2 border-b-2 border-workshop-amber" />
        </motion.div>

        {/* Vertical separator line */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-parchment/10" />
      </div>
    </motion.div>
  )
}

// The main marquee component
export default function ServicesMarquee() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Double the services for seamless loop
  const doubledServices = [...HOMEPAGE_SERVICES, ...HOMEPAGE_SERVICES]

  const handleHover = (id: string) => {
    setHoveredId(id)
    setIsPaused(true)
  }

  const handleLeave = () => {
    setHoveredId(null)
    setIsPaused(false)
  }

  return (
    <section ref={sectionRef} className="relative bg-petroleum py-20 md:py-28 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/4 h-full bg-workshop-amber/5"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />

      {/* Section header */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-workshop-amber" />
            <span className="section-eyebrow">What We Do</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-parchment leading-[0.9]">
                EXPERT CARE.
                <br />
                <span className="text-workshop-amber">FAIR PRICE.</span>
              </h2>
              <p className="font-body text-lg text-parchment/60 mt-4 max-w-lg">
                We tell you exactly what your car needs. Nothing more, nothing less.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 bg-workshop-amber text-petroleum font-body font-semibold text-sm tracking-wider px-8 py-4 hover:bg-parchment transition-colors"
              >
                VIEW ALL SERVICES
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-petroleum to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-petroleum to-transparent z-20 pointer-events-none" />

        {/* Pause indicator */}
        <AnimatePresence>
          {isPaused && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 z-30 bg-workshop-amber px-4 py-1.5"
            >
              <span className="font-body text-xs text-petroleum font-semibold uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-3 bg-petroleum" />
                <span className="w-1.5 h-3 bg-petroleum" />
                Paused
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The scrolling marquee */}
        <motion.div
          className="flex gap-1"
          animate={{
            x: isPaused ? 0 : [0, -321 * HOMEPAGE_SERVICES.length],
          }}
          transition={{
            x: {
              duration: isPaused ? 0 : 35,
              ease: 'linear',
              repeat: isPaused ? 0 : Infinity,
            },
          }}
        >
          {doubledServices.map((service, i) => {
            const actualIndex = i % HOMEPAGE_SERVICES.length
            const uniqueKey = `${service.id}-${i}`

            return (
              <MarqueeItem
                key={uniqueKey}
                service={service}
                index={actualIndex}
                isHovered={hoveredId === uniqueKey}
                onHover={() => handleHover(uniqueKey)}
                onLeave={handleLeave}
              />
            )
          })}
        </motion.div>
      </div>

      {/* Bottom section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mt-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-parchment/10">
          <div className="font-handwritten text-2xl text-workshop-amber text-center md:text-left">
            47 years of doing it right — and counting
          </div>

          <div className="flex items-center gap-8 text-parchment/40">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-workshop-amber" />
              <span className="font-body text-sm">6 Core Services</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-workshop-amber" />
              <span className="font-body text-sm">All Makes & Models</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
