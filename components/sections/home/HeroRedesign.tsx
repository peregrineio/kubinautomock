'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BUSINESS } from '@/lib/data/constants'

export default function HeroRedesign() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-petroleum overflow-hidden"
    >
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.6) brightness(0.35) sepia(0.2)' }}
        >
          <source src="/herobg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-petroleum/60" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-[1] noise-overlay" />

      {/* Diagonal amber accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-workshop-amber z-[2]"
        style={{
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
          opacity: 0.95
        }}
      />

      {/* Giant year stamp */}
      <motion.div
        style={{ y, opacity }}
        className="absolute -bottom-20 -left-10 font-display text-[25rem] md:text-[40rem] leading-none select-none pointer-events-none stamped z-[3]"
      >
        <span className="text-petroleum-light" style={{ opacity: 0.4 }}>78</span>
      </motion.div>

      {/* Handwritten annotation */}
      <motion.div
        initial={{ opacity: 0, rotate: -3 }}
        animate={{ opacity: 1, rotate: -3 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-32 right-[20%] font-handwritten text-2xl md:text-3xl text-petroleum hidden md:block z-[4]"
        style={{ transform: 'rotate(-3deg)' }}
      >
        <span className="relative">
          still going strong
          <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
            <path d="M0 6 Q50 0 100 4 T200 2" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-20 lg:py-0">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">

            {/* Eyebrow with line */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-workshop-amber" />
              <span className="font-body text-xs font-semibold tracking-[0.3em] text-parchment/60 uppercase">
                Bryan, Texas
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-parchment leading-[0.85] tracking-tight"
              >
                HONEST
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-parchment leading-[0.85] tracking-tight"
              >
                WORK
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex items-baseline gap-4"
              >
                <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-workshop-amber leading-[0.85] tracking-tight">
                  SINCE
                </span>
                <span className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-parchment/30 leading-[0.85]">
                  &apos;78
                </span>
              </motion.div>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-lg md:text-xl text-parchment/70 max-w-lg leading-relaxed"
            >
              Three generations. One promise. The Kubin family has been fixing Bryan&apos;s cars
              the right way — no shortcuts, no surprises, just honest work.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-workshop-amber text-petroleum font-body font-semibold text-sm tracking-wider px-8 py-4 overflow-hidden transition-all hover:pr-12"
              >
                <span className="relative z-10">SCHEDULE SERVICE</span>
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border-2 border-parchment/30 text-parchment font-body font-semibold text-sm tracking-wider px-8 py-4 hover:border-parchment hover:bg-parchment/5 transition-all"
              >
                MEET THE KUBINS
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-parchment/50"
            >
              <div className="flex items-center gap-2">
                <span className="text-workshop-amber text-lg">★★★★★</span>
                <span className="font-body text-sm">4.5 Stars</span>
              </div>
              <div className="h-4 w-px bg-parchment/20" />
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="font-body text-sm hover:text-parchment transition-colors"
              >
                {BUSINESS.phone}
              </a>
              <div className="h-4 w-px bg-parchment/20" />
              <span className="font-body text-sm">Mon–Fri 7:30–5:30</span>
            </motion.div>
          </div>

          {/* Right - Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Main image with diagonal cut */}
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&h=1000&fit=crop"
                alt="Mechanic at work"
                fill
                className="object-cover"
                style={{ filter: 'sepia(0.2) saturate(0.8) contrast(1.1)' }}
                priority
              />
              <div className="absolute inset-0 halftone" />
            </div>

            {/* Floating accent photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 -left-12 w-48 h-48 border-4 border-workshop-amber overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
                alt="Engine work"
                fill
                className="object-cover"
                style={{ filter: 'sepia(0.3) saturate(0.7)' }}
              />
            </motion.div>

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-6 right-8 bg-petroleum px-6 py-4 shadow-xl"
            >
              <div className="font-display text-5xl text-workshop-amber leading-none">47</div>
              <div className="font-body text-xs text-parchment/60 tracking-wider uppercase mt-1">Years</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom amber bar with scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 bg-workshop-amber" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, repeat: Infinity, repeatType: 'reverse', duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-parchment/40"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
