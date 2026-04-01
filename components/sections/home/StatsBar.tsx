'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '@/lib/data/constants'

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')

  // Extract numeric value and suffix
  const numericMatch = value.match(/^([\d,]+)(.*)$/)
  const targetNumber = numericMatch ? parseInt(numericMatch[1].replace(/,/g, '')) : 0
  const suffix = numericMatch ? numericMatch[2] : ''

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(targetNumber * easeOut)
      
      // Format with commas
      const formatted = current.toLocaleString()
      setDisplayValue(formatted)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(targetNumber.toLocaleString())
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, targetNumber])

  return (
    <div ref={ref} className="text-center py-8 md:py-0">
      <div className="font-display font-extrabold text-6xl md:text-7xl lg:text-8xl text-amber-electric leading-none">
        {displayValue}{suffix}
      </div>
      <div className="font-body font-medium text-xs uppercase tracking-[0.2em] text-cream-bright/50 mt-2">
        {label}
      </div>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="bg-navy-black py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Desktop: 3-column grid with vertical dividers */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="relative">
              <AnimatedStat value={stat.value} label={stat.label} />
              {index < STATS.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-cream-bright/10" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Stacked with horizontal dividers */}
        <div className="md:hidden flex flex-col">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AnimatedStat value={stat.value} label={stat.label} />
              {index < STATS.length - 1 && (
                <div className="h-px bg-amber-electric/30 my-4 mx-16" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
