'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const storyBlocks = [
  {
    title: "Frank's Promise",
    content: "Frank Kubin opened these doors in 1978 with one simple belief — that a good mechanic is honest above all else. He built this shop on transparency, fair pricing, and treating every customer like a neighbor.",
  },
  {
    title: "Kent Carries It Forward",
    content: "Today, Frank's son Kent leads the shop with the same values instilled by his father. A new generation of leadership, same commitment to honest service.",
  },
  {
    title: "The Brazos Valley Family",
    content: "From Bryan families to Texas A&M students and their parents, Kubin Automotive has been the trusted mechanic for generations. Some customers have been coming since the 1980s — and their children come now too.",
  },
]

export default function StorySection() {
  return (
    <section className="bg-cream-bright py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=900&fit=crop"
                alt="Auto repair shop"
                fill
                className="object-cover"
                style={{ filter: 'saturate(0.85) sepia(0.15)' }}
              />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pl-0 md:pl-8 lg:pl-16"
          >
            <p className="section-eyebrow mb-4">ESTABLISHED 1978</p>
            <h2 className="font-display font-bold text-4xl text-navy-black leading-none">
              47 Years of Honest Work
            </h2>

            <div className="mt-8 space-y-6">
              {storyBlocks.map((block) => (
                <div key={block.title} className="border-l-4 border-l-amber-electric pl-4">
                  <h3 className="font-display font-bold text-xl text-navy-black">
                    {block.title}
                  </h3>
                  <p className="font-body text-base text-slate-body mt-2 leading-relaxed">
                    {block.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats Card */}
            <div className="bg-white border-l-4 border-l-amber-electric p-6 mt-8 shadow-sm">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="font-display font-bold text-3xl text-amber-electric">47</div>
                  <div className="font-body text-xs text-slate-body uppercase tracking-wide">Years</div>
                </div>
                <div>
                  <div className="font-display font-bold text-3xl text-amber-electric">3</div>
                  <div className="font-body text-xs text-slate-body uppercase tracking-wide">Generations</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-cream-border text-center">
                <p className="font-body text-sm text-slate-body">Mon–Fri 7:30am–5:30pm</p>
                <p className="font-body text-xs text-slate-body/60 mt-1">Visa, MC, AmEx, Discover</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
