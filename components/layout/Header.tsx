'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/data/constants'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-petroleum sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl text-parchment leading-none tracking-tight">
              KUBIN
            </span>
            <span className="font-body text-xs text-workshop-amber tracking-[0.2em] uppercase">
              Auto
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-parchment/70 hover:text-workshop-amber transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-2 font-body text-sm text-parchment/50 hover:text-parchment transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="bg-workshop-amber text-petroleum font-body font-semibold text-sm uppercase tracking-wider px-5 py-2.5 hover:bg-parchment transition-colors"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-parchment p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-petroleum z-50 md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-parchment p-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-4xl text-parchment hover:text-workshop-amber transition-colors"
                >
                  HOME
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-4xl text-parchment hover:text-workshop-amber transition-colors"
                  >
                    {link.label.toUpperCase()}
                  </Link>
                ))}
              </nav>

              {/* Mobile Bottom Section */}
              <div className="flex flex-col items-center gap-6 pb-8">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="font-display text-2xl text-workshop-amber"
                >
                  {BUSINESS.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-workshop-amber text-petroleum font-body font-semibold text-sm uppercase tracking-wider px-8 py-4 text-center"
                >
                  Book Service
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
