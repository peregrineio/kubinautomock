'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "My family has used Kubin Automotive for well over 20 years and have always been very pleased with their service. They are honest, friendly and they know their stuff.",
    source: "Yelp Reviewer",
    type: "20+ Year Customer",
  },
  {
    quote: "Ken from Kubin was the only one who agreed to look at the car on short notice. He worked me in and got it taken care of for a very fair price. If my car needs to be worked on I will drive all the way from Round Rock!",
    source: "Google Reviewer",
    type: "Out-of-Town Visitor",
  },
  {
    quote: "Honest and dependable. Been in business 40 plus years. Honest and trustworthy. I wouldn't take my car anywhere else in the Bryan area.",
    source: "Nextdoor Neighbor",
    type: "Long-time Customer",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-navy-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-4">WHAT BRYAN SAYS</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-cream-bright">
            Trusted for Generations
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-l-4 border-l-amber-electric p-8 rounded-none"
            >
              <div className="text-amber-electric text-lg mb-4">★★★★★</div>
              <p className="font-body text-base text-slate-body leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="font-body font-semibold text-xs text-slate-body/60 uppercase tracking-wide mt-4">
                — {testimonial.source} | {testimonial.type}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12">
          <p className="font-body text-sm text-cream-bright/50 mb-6">
            ★ 4.5 Stars across platforms | 47 years of community trust
          </p>
          <a
            href="https://maps.google.com/?q=Kubin+Automotive+Service+Bryan+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-electric text-navy-black font-body font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-none hover:bg-amber-500 transition-colors"
          >
            Leave Us a Google Review
          </a>
        </div>
      </div>
    </section>
  )
}
