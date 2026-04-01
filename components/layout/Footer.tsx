import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { BUSINESS } from '@/lib/data/constants'

// Custom social icons since lucide-react doesn't include brand icons
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/fleet', label: 'Fleet Services' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-black">
      {/* Amber Rule */}
      <div className="h-1 bg-amber-electric" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1 - Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display font-bold text-2xl text-cream-bright">
                KUBIN AUTOMOTIVE
              </span>
            </Link>
            <p className="font-body text-sm text-cream-bright/50 italic mt-2">
              Honest Service Since 1978
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-bright/60 hover:text-amber-electric transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-bright/60 hover:text-amber-electric transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="section-eyebrow mb-4">QUICK LINKS</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-cream-bright/70 hover:text-cream-bright transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact & Hours */}
          <div>
            <h3 className="section-eyebrow mb-4">VISIT US</h3>
            <div className="flex flex-col gap-3">
              <a
                href={BUSINESS.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 font-body text-sm text-cream-bright/70 hover:text-cream-bright transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {BUSINESS.address.full}
              </a>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 font-body text-sm text-cream-bright/70 hover:text-cream-bright transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 font-body text-sm text-cream-bright/70 hover:text-cream-bright transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-cream-bright/70 mt-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  {BUSINESS.hours.display.map((item, index) => (
                    <div key={index}>
                      {item.days}: {item.hours}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-bright/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-cream-bright/40">
              © 2026 Kubin Automotive Service. All rights reserved.
            </p>
            <p className="font-body text-xs text-cream-bright/40">
              Built by{' '}
              <a
                href="https://peregrine.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-bright transition-colors"
              >
                Peregrine IO
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
