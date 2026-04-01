'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BUSINESS } from '@/lib/data/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-screen bg-navy-black overflow-hidden">
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
        <div className="absolute inset-0 bg-navy-black/60" />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Giant "47" Background Element */}
      <div
        className="absolute bottom-0 right-0 font-display font-extrabold text-[20rem] md:text-[28rem] leading-none select-none pointer-events-none z-[1]"
        style={{ opacity: 0.06, color: '#F8F5ED' }}
      >
        47
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 min-h-[90vh] md:min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center w-full">
          {/* Left Column - 60% (3/5) */}
          <motion.div
            className="md:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="font-display font-semibold text-sm text-amber-electric uppercase tracking-[0.2em] mb-6"
            >
              BRYAN, TEXAS — SINCE 1978
            </motion.p>

            {/* Headline */}
            <motion.h1 variants={itemVariants}>
              <span className="block font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-cream-bright leading-none">
                FORTY-SEVEN YEARS.
              </span>
            </motion.h1>
            <motion.h1 variants={itemVariants}>
              <span className="block font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-cream-bright leading-none">
                ONE FAMILY.
              </span>
            </motion.h1>
            <motion.h1 variants={itemVariants}>
              <span className="block font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-amber-electric leading-none">
                ONE PROMISE.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-body font-normal text-lg text-cream-bright/70 max-w-lg mt-6"
            >
              The Kubin family has been fixing Bryan&apos;s cars since 1978. No corporate playbook. No upsells. Just honest work from people who care.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link
                href="/contact"
                className="inline-block bg-amber-electric text-navy-black font-body font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-none hover:bg-amber-500 transition-colors text-center"
              >
                SCHEDULE SERVICE
              </Link>
              <Link
                href="/about"
                className="inline-block border-2 border-cream-bright text-cream-bright font-body font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-none hover:bg-cream-bright hover:text-navy-black transition-colors text-center"
              >
                MEET THE KUBINS
              </Link>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 md:gap-4 mt-6 font-body text-xs text-cream-bright/50"
            >
              <span>⭐ 4.5 Stars</span>
              <span className="text-cream-bright/20">|</span>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-cream-bright transition-colors">
                {BUSINESS.phone}
              </a>
              <span className="text-cream-bright/20">|</span>
              <span>Mon–Fri 7:30am–5:30pm</span>
            </motion.div>
          </motion.div>

          {/* Right Column - 40% (2/5) - Hidden on mobile */}
          <div className="hidden md:block md:col-span-2">
            <div className="flex flex-col">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&h=400&fit=crop"
                  alt="Auto mechanic working"
                  fill
                  className="object-cover"
                  style={{ filter: 'saturate(0.85) sepia(0.15)' }}
                />
              </div>
              <div className="h-[3px] bg-amber-electric" />
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                  alt="Car engine repair"
                  fill
                  className="object-cover"
                  style={{ filter: 'saturate(0.85) sepia(0.15)' }}
                />
              </div>
              <div className="h-[3px] bg-amber-electric" />
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop"
                  alt="Classic car"
                  fill
                  className="object-cover"
                  style={{ filter: 'saturate(0.85) sepia(0.15)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amber Rule at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-electric" />
    </section>
  )
}
