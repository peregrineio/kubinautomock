'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "My family has used Kubin Automotive for well over 20 years and have always been very pleased with their service. They are honest, friendly and they know their stuff.",
    source: "Yelp Reviewer",
    years: "20+ Years",
    highlight: "honest, friendly"
  },
  {
    quote: "Ken from Kubin was the only one who agreed to look at the car on short notice. He worked me in and got it taken care of for a very fair price. If my car needs to be worked on I will drive all the way from Round Rock!",
    source: "Google Reviewer",
    years: "Out-of-Town",
    highlight: "very fair price"
  },
  {
    quote: "Honest and dependable. Been in business 40 plus years. Honest and trustworthy. I wouldn't take my car anywhere else in the Bryan area.",
    source: "Nextdoor Neighbor",
    years: "Long-time",
    highlight: "wouldn't go anywhere else"
  },
]

export default function TestimonialsRedesign() {
  return (
    <section className="relative bg-petroleum py-24 md:py-32 overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Large quote mark background */}
      <div className="absolute top-20 left-10 font-display text-[20rem] text-parchment/[0.02] leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-workshop-amber" />
            <span className="section-eyebrow">What Bryan Says</span>
            <div className="h-px w-12 bg-workshop-amber" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-parchment leading-[0.9]"
          >
            TRUSTED FOR
            <br />
            <span className="text-workshop-amber">GENERATIONS</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-parchment p-8 md:p-10"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-workshop-amber" />

              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-workshop-amber/30" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-workshop-amber text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-base text-graphite leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Handwritten highlight */}
              <div className="font-handwritten text-lg text-workshop-amber mb-6">
                &ldquo;{testimonial.highlight}&rdquo;
              </div>

              {/* Attribution */}
              <div className="flex items-center justify-between pt-6 border-t border-petroleum/10">
                <div>
                  <div className="font-body font-semibold text-sm text-petroleum">
                    {testimonial.source}
                  </div>
                  <div className="font-body text-xs text-graphite/50 uppercase tracking-wider">
                    {testimonial.years} Customer
                  </div>
                </div>
              </div>

              {/* Corner accents on hover */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-workshop-amber opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-body text-sm text-parchment/50 mb-6">
            ★ 4.5 Stars across platforms | 47 years of community trust
          </p>
          <a
            href="https://maps.google.com/?q=Kubin+Automotive+Service+Bryan+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-workshop-amber text-petroleum font-body font-semibold text-sm tracking-wider px-8 py-4 hover:bg-parchment transition-colors"
          >
            LEAVE US A REVIEW
          </a>
        </motion.div>
      </div>
    </section>
  )
}
