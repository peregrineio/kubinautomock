export default function AboutHero() {
  return (
    <section className="relative bg-navy-black py-24 md:py-32 overflow-hidden">
      {/* Giant Background Element */}
      <div 
        className="absolute bottom-0 right-0 font-display font-extrabold text-[12rem] md:text-[20rem] leading-none select-none pointer-events-none"
        style={{ opacity: 0.06, color: '#F8F5ED' }}
      >
        1978
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-eyebrow mb-4">OUR STORY</p>
        <h1 className="font-display font-extrabold text-6xl md:text-8xl text-cream-bright">
          THE KUBIN FAMILY
        </h1>
      </div>
    </section>
  )
}
