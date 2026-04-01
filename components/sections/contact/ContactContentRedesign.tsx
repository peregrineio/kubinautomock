'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import { BUSINESS } from '@/lib/data/constants'

const serviceOptions = [
  'Oil Change',
  'Brake Service',
  'Engine Diagnostics',
  'A/C & Heating',
  'Electrical',
  'Suspension',
  'Battery',
  'Tire Rotation',
  'Tune-Up',
  'Fleet Service',
  'Other',
]

export default function ContactContentRedesign() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    service: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const inputClass = "w-full border-2 border-petroleum/20 bg-parchment px-4 py-3 text-graphite font-body text-sm focus:outline-none focus:border-workshop-amber transition-colors"
  const labelClass = "block font-body font-semibold text-xs uppercase tracking-wider text-petroleum/70 mb-2"

  return (
    <section className="relative bg-aged-paper py-16 md:py-24 overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--petroleum) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Info (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-workshop-amber" />
              <span className="section-eyebrow">Visit Our Shop</span>
            </div>

            <div className="space-y-6">
              <a
                href={BUSINESS.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-petroleum flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-workshop-amber" />
                </div>
                <div>
                  <span className="font-body text-sm text-petroleum group-hover:text-workshop-amber transition-colors">
                    {BUSINESS.address.full}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-petroleum flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-workshop-amber" />
                </div>
                <span className="font-body text-sm text-petroleum group-hover:text-workshop-amber transition-colors">
                  {BUSINESS.phone}
                </span>
              </a>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-petroleum flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-workshop-amber" />
                </div>
                <span className="font-body text-sm text-petroleum group-hover:text-workshop-amber transition-colors">
                  {BUSINESS.email}
                </span>
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-parchment border-t-4 border-workshop-amber p-6 mt-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-workshop-amber" />
                <h3 className="font-display text-lg text-petroleum">BUSINESS HOURS</h3>
              </div>
              {BUSINESS.hours.display.map((item, index) => (
                <p key={index} className="font-body text-sm text-graphite/70">
                  {item.days}: {item.hours}
                </p>
              ))}

              {/* Handwritten note */}
              <div className="font-handwritten text-lg text-workshop-amber mt-4">
                walk-ins welcome!
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="bg-petroleum/10 aspect-video flex items-center justify-center relative overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 halftone opacity-30" />
                <div className="text-center relative z-10">
                  <MapPin className="w-8 h-8 text-workshop-amber mx-auto mb-2" />
                  <p className="font-body text-sm text-petroleum">{BUSINESS.address.full}</p>
                  <a
                    href={BUSINESS.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm text-workshop-amber hover:text-petroleum mt-3 transition-colors"
                  >
                    Open in Google Maps
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-parchment p-12 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-workshop-amber flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-petroleum" />
                  </div>
                  <h3 className="font-display text-3xl text-petroleum mb-4">
                    THANK YOU!
                  </h3>
                  <p className="font-body text-lg text-graphite/70 mb-6">
                    We&apos;ll call you to confirm your appointment. See you soon!
                  </p>
                  <div className="font-handwritten text-xl text-workshop-amber mb-6">
                    we appreciate your trust
                  </div>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="font-body text-sm text-workshop-amber hover:text-petroleum transition-colors"
                  >
                    Or call us directly: {BUSINESS.phone}
                  </a>
                </motion.div>
              </div>
            ) : (
              <div className="bg-parchment p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-8 bg-workshop-amber" />
                  <span className="section-eyebrow">Schedule Your Visit</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 - Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2 - Email & Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Date</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 3 - Vehicle Info */}
                  <div>
                    <label className={labelClass}>Vehicle Information *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <input
                        type="text"
                        name="vehicleYear"
                        required
                        value={formData.vehicleYear}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Year"
                      />
                      <input
                        type="text"
                        name="vehicleMake"
                        required
                        value={formData.vehicleMake}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Make"
                      />
                      <input
                        type="text"
                        name="vehicleModel"
                        required
                        value={formData.vehicleModel}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Model"
                      />
                    </div>
                  </div>

                  {/* Row 4 - Service */}
                  <div>
                    <label className={labelClass}>Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  {/* Row 5 - Notes */}
                  <div>
                    <label className={labelClass}>Additional Notes</label>
                    <textarea
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Describe any issues or concerns..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-workshop-amber text-petroleum font-body font-semibold text-sm uppercase tracking-wider py-4 hover:bg-petroleum hover:text-parchment transition-colors"
                  >
                    SCHEDULE MY VISIT
                  </button>

                  {/* Handwritten note */}
                  <p className="font-handwritten text-center text-lg text-workshop-amber mt-4">
                    we&apos;ll call to confirm within 24 hours
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
