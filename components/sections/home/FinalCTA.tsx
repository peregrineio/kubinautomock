import Link from 'next/link'
import { BUSINESS } from '@/lib/data/constants'

export default function FinalCTA() {
  return (
    <section className="bg-amber-electric py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy-black leading-tight">
          READY TO EXPERIENCE THE KUBIN DIFFERENCE?
        </h2>
        <p className="font-body text-lg text-navy-black/80 mt-4">
          Call us or schedule online. We&apos;re open Monday through Friday, 7:30am to 5:30pm.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="/contact"
            className="inline-block bg-navy-black text-cream-bright font-body font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-none hover:bg-navy-deep transition-colors"
          >
            SCHEDULE SERVICE
          </Link>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-block border-2 border-navy-black text-navy-black font-body font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-none hover:bg-navy-black hover:text-cream-bright transition-colors"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
