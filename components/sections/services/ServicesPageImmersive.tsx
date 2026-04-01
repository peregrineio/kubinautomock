'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence
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
  Phone
} from 'lucide-react'
import { SERVICES, Service } from '@/lib/data/services'
import { BUSINESS } from '@/lib/data/constants'
import ServicesSplitReveal from './ServicesSplitReveal'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets, CircleStop, Settings, Wind, Zap, Truck, Car, Battery, Thermometer, Gauge, CircleDot, Shield
}

// Service Ticker Component - The memorable element
function ServiceTicker() {
  const services = [...SERVICES, ...SERVICES, ...SERVICES] // Triple for seamless loop

  return (
    <div className="relative overflow-hidden py-6 bg-petroleum border-y-2 border-workshop-amber/30">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {services.map((service, i) => (
          <div key={`${service.id}-${i}`} className="flex items-center gap-4">
            <span className="font-display text-2xl md:text-3xl text-workshop-amber">
              {service.name.toUpperCase()}
            </span>
            <span className="text-parchment/30">◆</span>
          </div>
        ))}
      </motion.div>

      {/* Gradient fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-petroleum to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-petroleum to-transparent z-10" />
    </div>
  )
}

// Immersive Hero Section
function ImmersiveHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={heroRef} className="relative min-h-[90vh] bg-petroleum overflow-hidden">
      {/* Animated grid background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--parchment) 1px, transparent 1px),
              linear-gradient(90deg, var(--parchment) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Giant "SERVICE" watermark */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="font-display text-[15vw] md:text-[12vw] text-parchment/[0.02] tracking-tight whitespace-nowrap">
          SERVICE BAY
        </span>
      </motion.div>

      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-workshop-amber/5"
        style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Animated eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div
              className="h-px bg-workshop-amber"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <span className="section-eyebrow">Full-Service Automotive</span>
          </motion.div>

          {/* Staggered headline */}
          <div className="space-y-2 mb-8">
            {['WHAT WE', 'DO BEST'].map((line, i) => (
              <motion.h1
                key={line}
                initial={{ opacity: 0, y: 80, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-parchment leading-[0.85]"
                style={{ transformOrigin: 'bottom' }}
              >
                {line === 'DO BEST' ? (
                  <>DO <span className="text-workshop-amber">BEST</span></>
                ) : line}
              </motion.h1>
            ))}
          </div>

          {/* Animated description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-xl text-parchment/60 max-w-xl mb-10"
          >
            47 years of honest work. From oil changes to complete engine rebuilds,
            the Kubin family handles it all with the care your vehicle deserves.
          </motion.p>

          {/* Handwritten annotation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="font-handwritten text-2xl text-workshop-amber mb-12"
          >
            12 services, one trusted family
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-8 md:gap-16"
          >
            {[
              { number: '47', label: 'Years' },
              { number: '12', label: 'Services' },
              { number: '10K+', label: 'Vehicles' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl text-workshop-amber">{stat.number}</div>
                <div className="font-body text-xs text-parchment/50 uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-parchment/40"
        >
          <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-workshop-amber">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="2"/>
            <motion.circle
              cx="10"
              cy="10"
              r="3"
              fill="currentColor"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom amber line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-workshop-amber" />
    </section>
  )
}

// Service Bay Card - The main service display
function ServiceBayCard({
  service,
  index,
  isExpanded,
  onToggle
}: {
  service: Service
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const Icon = iconMap[service.icon]
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  const bayNumber = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={onToggle}
      className="group relative cursor-pointer"
    >
      <div className={`
        relative bg-parchment overflow-hidden transition-all duration-500
        ${isExpanded ? 'shadow-2xl' : 'shadow-md hover:shadow-xl'}
      `}>
        {/* Bay number */}
        <div className="absolute -top-2 -left-2 z-20">
          <div className="bg-petroleum px-4 py-2">
            <span className="font-display text-3xl text-workshop-amber">{bayNumber}</span>
          </div>
        </div>

        {/* Top accent bar */}
        <motion.div
          className="h-1 bg-workshop-amber origin-left"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.08 + 0.3 }}
        />

        {/* Content */}
        <div className="p-8 pt-12">
          {/* Icon with animated background */}
          <div className="relative mb-6">
            <motion.div
              className="absolute inset-0 bg-petroleum/5 rounded-full"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 + 0.2 }}
            />
            <div className="relative w-16 h-16 bg-petroleum flex items-center justify-center group-hover:bg-workshop-amber transition-colors duration-300">
              {Icon && <Icon className="w-8 h-8 text-workshop-amber group-hover:text-petroleum transition-colors duration-300" />}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl text-petroleum mb-3 leading-tight group-hover:text-workshop-amber transition-colors">
            {service.name.toUpperCase()}
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-graphite/70 leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-petroleum/10">
                  <p className="font-body text-sm text-graphite leading-relaxed mb-4">
                    {service.fullDescription}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-workshop-amber hover:text-petroleum transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Schedule This Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand indicator */}
          <div className="flex items-center gap-2 mt-4 text-workshop-amber/60 group-hover:text-workshop-amber transition-colors">
            <span className="font-body text-xs uppercase tracking-wider">
              {isExpanded ? 'Less' : 'Learn More'}
            </span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ↓
            </motion.span>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-workshop-amber" />
        </div>
      </div>
    </motion.div>
  )
}

// Horizontal Scroll Showcase
function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  const showcaseItems = [
    { title: 'DIAGNOSTICS', desc: 'Modern tools meet 47 years of experience' },
    { title: 'REPAIRS', desc: 'Done right the first time, every time' },
    { title: 'MAINTENANCE', desc: 'Preventative care that saves you money' },
    { title: 'TRUST', desc: 'Three generations of honest service' },
  ]

  return (
    <section ref={containerRef} className="relative py-20 bg-petroleum overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      <motion.div style={{ x }} className="flex gap-8 px-8">
        {showcaseItems.map((item, i) => (
          <div
            key={item.title}
            className="flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] p-10 border border-parchment/10 bg-petroleum-light/50"
          >
            <span className="font-display text-8xl md:text-9xl text-parchment/[0.05] absolute -top-4 -left-2">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-4xl md:text-5xl text-parchment mb-4">{item.title}</h3>
            <p className="font-body text-lg text-parchment/60">{item.desc}</p>
            <div className="mt-6 h-px bg-workshop-amber/30 w-24" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}

// Services Grid with Bay Numbers
function ServicesBayGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })

  const routineServices = SERVICES.filter(s => s.category === 'routine')
  const majorServices = SERVICES.filter(s => s.category === 'major')
  const specialtyServices = SERVICES.filter(s => s.category === 'specialty')

  const categories = [
    { title: 'ROUTINE MAINTENANCE', annotation: 'keep it running', services: routineServices },
    { title: 'MAJOR REPAIRS', annotation: 'we fix it right', services: majorServices },
    { title: 'SPECIALTY SYSTEMS', annotation: 'expert care', services: specialtyServices },
  ]

  let globalIndex = 0

  return (
    <section ref={sectionRef} className="relative bg-aged-paper py-24 md:py-32 overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-workshop-amber" />
            <span className="section-eyebrow">Service Bays</span>
            <div className="h-px w-16 bg-workshop-amber" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-petroleum leading-[0.9]">
            EVERY SERVICE,
            <br />
            <span className="text-workshop-amber">DONE RIGHT</span>
          </h2>
          <p className="font-handwritten text-2xl text-workshop-amber mt-6">
            click any bay to learn more
          </p>
        </motion.div>

        {/* Categories */}
        {categories.map((category, catIndex) => (
          <div key={category.title} className="mb-20">
            {/* Category header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="relative flex items-center gap-4 mb-10"
            >
              <div className="h-px flex-1 max-w-[60px] bg-workshop-amber" />
              <h3 className="font-display text-2xl md:text-3xl text-petroleum">
                {category.title}
              </h3>
              <span className="font-handwritten text-lg text-workshop-amber">
                — {category.annotation}
              </span>
              <div className="h-px flex-1 bg-petroleum/10" />
            </motion.div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => {
                const currentIndex = globalIndex++
                return (
                  <ServiceBayCard
                    key={service.id}
                    service={service}
                    index={currentIndex}
                    isExpanded={expandedId === service.id}
                    onToggle={() => setExpandedId(expandedId === service.id ? null : service.id)}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Fleet Section - Premium treatment
function FleetSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={sectionRef} className="relative py-32 bg-petroleum overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              var(--parchment) 0,
              var(--parchment) 1px,
              transparent 1px,
              transparent 20px
            )`
          }}
        />
      </motion.div>

      <div className="absolute inset-0 noise-overlay" />

      {/* Giant FLEET watermark */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none"
      >
        <span className="font-display text-[20vw] text-parchment/[0.02] leading-none">
          FLEET
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-workshop-amber" />
                <span className="section-eyebrow">For Businesses</span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl text-parchment leading-[0.9] mb-6">
                FLEET
                <br />
                <span className="text-workshop-amber">MAINTENANCE</span>
              </h2>

              <p className="font-body text-lg text-parchment/70 mb-8 max-w-lg">
                Your fleet keeps your business moving. We keep your fleet moving.
                Preventative maintenance programs, priority scheduling, and a single
                point of contact for all your vehicles.
              </p>

              <motion.div
                initial={{ opacity: 0, rotate: -3 }}
                animate={isInView ? { opacity: 1, rotate: -3 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-handwritten text-2xl text-workshop-amber mb-10"
              >
                your business runs, we keep it running
              </motion.div>
            </motion.div>

            {/* Fleet benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                'Priority scheduling for minimal downtime',
                'Dedicated fleet account manager',
                'Preventative maintenance programs',
                'Detailed service records & reporting'
              ].map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-workshop-amber" />
                  <span className="font-body text-parchment/80">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-workshop-amber text-petroleum font-body font-semibold text-sm tracking-wider px-8 py-4 hover:bg-parchment transition-colors"
              >
                DISCUSS YOUR FLEET
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Concentric circles */}
              {[1, 2, 3, 4].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 border border-parchment/10 rounded-full"
                  style={{
                    inset: `${ring * 12}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + ring * 0.1 }}
                />
              ))}

              {/* Center icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8, type: 'spring' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-32 h-32 bg-workshop-amber flex items-center justify-center">
                  <Truck className="w-16 h-16 text-petroleum" />
                </div>
              </motion.div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-0 right-0 bg-petroleum-light px-6 py-4 border border-parchment/10"
              >
                <div className="font-display text-3xl text-workshop-amber">100+</div>
                <div className="font-body text-xs text-parchment/60 uppercase tracking-wider">Fleet Vehicles</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative bg-workshop-amber py-24 md:py-32 overflow-hidden">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, var(--petroleum) 25%, transparent 25%),
            linear-gradient(-45deg, var(--petroleum) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, var(--petroleum) 75%),
            linear-gradient(-45deg, transparent 75%, var(--petroleum) 75%)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Diagonal accent */}
      <div
        className="absolute bottom-0 left-0 w-1/3 h-full bg-petroleum"
        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-handwritten text-2xl md:text-3xl text-petroleum/60 mb-4">
            ready to get started?
          </div>

          <h2 className="font-display text-4xl md:text-6xl text-petroleum leading-[0.9] mb-6">
            LET'S GET YOUR
            <br />
            CAR RIGHT
          </h2>

          <p className="font-body text-lg text-petroleum/70 mb-10 max-w-xl mx-auto">
            Call us or schedule online. We'll take care of the rest.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-petroleum text-parchment font-body font-semibold text-sm tracking-wider px-10 py-5 hover:bg-petroleum-light transition-colors"
            >
              SCHEDULE SERVICE
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-petroleum text-petroleum font-body font-semibold text-sm tracking-wider px-10 py-5 hover:bg-petroleum hover:text-parchment transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-petroleum/50"
        >
          {['Family Owned', 'Since 1978', 'Bryan, TX'].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-petroleum/30" />
              <span className="font-body text-sm">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-petroleum" />
    </section>
  )
}

// Main Page Component
export default function ServicesPageImmersive() {
  return (
    <>
      <ImmersiveHero />
      <ServiceTicker />
      <ServicesSplitReveal />
      <HorizontalShowcase />
      <FleetSection />
      <FinalCTA />
    </>
  )
}
