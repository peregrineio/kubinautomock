'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const storyBlocks = [
  {
    year: '1978',
    title: "Frank's Promise",
    content: "Frank Kubin opened these doors with one simple belief — that a good mechanic is honest above all else. He built this shop on transparency, fair pricing, and treating every customer like a neighbor.",
    annotation: 'the beginning'
  },
  {
    year: 'Today',
    title: "Kent Carries It Forward",
    content: "Today, Frank's son Kent leads the shop with the same values instilled by his father. A new generation of leadership, same commitment to honest service.",
    annotation: 'still going'
  },
  {
    year: 'Always',
    title: "The Brazos Valley Family",
    content: "From Bryan families to Texas A&M students and their parents, Kubin Automotive has been the trusted mechanic for generations. Some customers have been coming since the 1980s — and their children come now too.",
    annotation: 'our community'
  },
]

export default function StorySectionRedesign() {
  return (
    <section className="relative bg-aged-paper py-20 md:py-28 overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--petroleum) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop"
                alt="Auto repair shop"
                fill
                className="object-cover"
                style={{ filter: 'sepia(0.25) saturate(0.8)' }}
              />
              <div className="absolute inset-0 halftone" />
            </div>

            {/* Floating date card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-petroleum px-8 py-6 shadow-xl"
            >
              <div className="font-display text-5xl text-workshop-amber leading-none">47</div>
              <div className="font-body text-sm text-parchment/60 tracking-wider uppercase mt-1">Years Strong</div>
            </motion.div>

            {/* Corner accent */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-workshop-amber" />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-workshop-amber" />
              <span className="section-eyebrow">Established 1978</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-petroleum leading-[0.9] mb-4">
              47 YEARS OF
              <br />
              <span className="text-workshop-amber">HONEST WORK</span>
            </h2>

            <div className="font-handwritten text-xl text-workshop-amber mb-8">
              from father to son
            </div>

            {/* Story blocks with timeline */}
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-4 bottom-4 w-px bg-workshop-amber/30" />

              {storyBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 bg-workshop-amber flex items-center justify-center">
                    <div className="w-2 h-2 bg-petroleum" />
                  </div>

                  {/* Year badge */}
                  <span className="font-display text-xs text-workshop-amber tracking-wider">
                    {block.year}
                  </span>

                  <h3 className="font-display text-xl text-petroleum mt-1">
                    {block.title}
                  </h3>

                  <p className="font-body text-sm text-graphite/70 mt-2 leading-relaxed">
                    {block.content}
                  </p>

                  {/* Handwritten annotation */}
                  <span className="font-handwritten text-sm text-workshop-amber/70 mt-2 block">
                    — {block.annotation}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
