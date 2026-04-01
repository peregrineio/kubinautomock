export default function ServicesHero() {
  return (
    <section className="relative bg-navy-black py-24 md:py-32 overflow-hidden">
      {/* Giant Background Element */}
      <div 
        className="absolute inset-0 font-display font-extrabold text-[8rem] md:text-[16rem] leading-none flex items-center justify-center select-none pointer-events-none"
        style={{ opacity: 0.04, color: '#F8F5ED' }}
      >
        SERVICE
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-eyebrow mb-4">WHAT WE DO</p>
        <h1 className="font-display font-extrabold text-6xl md:text-8xl text-cream-bright">
          OUR SERVICES
        </h1>
        <p className="font-body text-xl text-cream-bright/60 mt-4 max-w-xl mx-auto">
          Full-service automotive care. Honest pricing. Every time.
        </p>
      </div>
    </section>
  )
}
