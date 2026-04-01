'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function StoryRedesign() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={sectionRef} className="relative bg-petroleum overflow-hidden">
      {/* Top amber rule */}
      <div className="h-1 bg-workshop-amber" />

      <div className="relative py-24 md:py-32">
        {/* Background timeline */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-parchment/5 hidden lg:block" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left - Image stack */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main image */}
              <motion.div
                style={{ y: imageY }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1694155735994-c8c8edfd34e0?w=800&h=1000&fit=crop"
                  alt="Frank Kubin working"
                  fill
                  className="object-cover"
                  style={{ filter: 'sepia(0.25) saturate(0.7) contrast(1.05)' }}
                />
                <div className="absolute inset-0 halftone" />

                {/* Photo corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-workshop-amber" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-workshop-amber" />
              </motion.div>

              {/* Timeline date card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 lg:-right-12 bg-workshop-amber p-6 shadow-2xl"
              >
                <div className="font-display text-6xl text-petroleum leading-none">1978</div>
                <div className="font-body text-xs text-petroleum/70 uppercase tracking-wider mt-2">Est.</div>
              </motion.div>

              {/* Handwritten note */}
              <motion.div
                initial={{ opacity: 0, rotate: 3 }}
                whileInView={{ opacity: 1, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -top-8 left-8 font-handwritten text-xl text-workshop-amber hidden lg:block"
                style={{ transform: 'rotate(3deg)' }}
              >
                where it all began →
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-workshop-amber" />
                <span className="section-eyebrow">Our Story</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-parchment leading-[0.9] mb-8">
                FROM FATHER
                <br />
                <span className="text-workshop-amber">TO SON</span>
                <br />
                TO YOU
              </h2>

              {/* Story blocks with timeline */}
              <div className="space-y-8 relative">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-px bg-parchment/10" />

                <div className="relative pl-10">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-workshop-amber bg-petroleum" />
                  <p className="font-body text-lg text-parchment/70 leading-relaxed">
                    Frank Kubin opened these doors in 1978 with one simple belief — that a good mechanic is honest above all else.
                    <span className="font-handwritten text-workshop-amber ml-2">no exceptions</span>
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-workshop-amber bg-petroleum" />
                  <p className="font-body text-lg text-parchment/70 leading-relaxed">
                    Today, his son Kent carries that same ethic forward. Different generation, same values. The tools have changed. The community has grown.
                    <span className="font-handwritten text-workshop-amber ml-2">the family is still here</span>
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 mt-10 font-body font-semibold text-workshop-amber hover:text-parchment transition-colors"
              >
                <span className="uppercase tracking-wider text-sm">Meet the Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
