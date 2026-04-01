'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '@/lib/data/constants'

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = useState('0')

  const numericMatch = value.match(/^([\d,]+)(.*)$/)
  const targetNumber = numericMatch ? parseInt(numericMatch[1].replace(/,/g, '')) : 0
  const suffix = numericMatch ? numericMatch[2] : ''

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(targetNumber * easeOut)
      const formatted = current.toLocaleString()
      setDisplayValue(formatted)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(targetNumber.toLocaleString())
      }
    }

    const delay = setTimeout(() => {
      requestAnimationFrame(animate)
    }, index * 200)

    return () => clearTimeout(delay)
  }, [isInView, targetNumber, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--parchment) 1px, transparent 1px),
              linear-gradient(90deg, var(--parchment) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="relative p-8 md:p-12 text-center">
        {/* Stamped number */}
        <div className="relative inline-block">
          <span className="font-display text-7xl md:text-8xl lg:text-9xl text-parchment leading-none tracking-tighter stamped">
            {displayValue}
          </span>
          <span className="font-display text-4xl md:text-5xl text-workshop-amber ml-1">
            {suffix}
          </span>

          {/* Handwritten accent */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + index * 0.2 }}
            className="absolute -top-4 -right-8 font-handwritten text-lg text-workshop-amber rotate-[-8deg] hidden md:block"
          >
            {index === 0 && 'wow!'}
            {index === 1 && 'family'}
            {index === 2 && 'and counting'}
          </motion.span>
        </div>

        {/* Label */}
        <div className="mt-4 font-body text-sm text-parchment/50 uppercase tracking-[0.2em]">
          {label}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-workshop-amber origin-left"
        />
      </div>
    </motion.div>
  )
}

export default function StatsBarRedesign() {
  return (
    <section className="relative bg-petroleum py-20 md:py-28 overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            var(--parchment),
            var(--parchment) 1px,
            transparent 1px,
            transparent 40px
          )`
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-handwritten text-2xl text-workshop-amber">The numbers tell the story</span>
        </motion.div>

        {/* Stats grid with connecting lines */}
        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-parchment/10" />

          <div className="grid grid-cols-1 md:grid-cols-3">
            {STATS.map((stat, index) => (
              <div key={stat.label} className="relative">
                <AnimatedStat value={stat.value} label={stat.label} index={index} />

                {/* Vertical divider (desktop) */}
                {index < STATS.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-parchment/10" />
                )}

                {/* Horizontal divider (mobile) */}
                {index < STATS.length - 1 && (
                  <div className="md:hidden mx-auto w-32 h-px bg-workshop-amber/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom amber accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-workshop-amber to-transparent opacity-50" />
    </section>
  )
}
