'use client'

import { useState } from 'react'
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

export default function ContactContent() {
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

  const inputClass = "w-full border border-cream-border bg-white px-4 py-3 text-slate-body font-body text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-amber-electric focus:border-transparent"
  const labelClass = "block font-body font-medium text-xs uppercase tracking-wide text-slate-body mb-2"

  return (
    <section className="bg-cream-bright py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="section-eyebrow mb-6">VISIT OUR SHOP</h2>
            
            <div className="space-y-4">
              <a
                href={BUSINESS.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 font-body text-base text-slate-body hover:text-navy-black transition-colors"
              >
                <MapPin className="w-5 h-5 text-amber-electric mt-0.5 shrink-0" />
                {BUSINESS.address.full}
              </a>
              
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-3 font-body text-base text-slate-body hover:text-navy-black transition-colors"
              >
                <Phone className="w-5 h-5 text-amber-electric shrink-0" />
                {BUSINESS.phone}
              </a>
              
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 font-body text-base text-slate-body hover:text-navy-black transition-colors"
              >
                <Mail className="w-5 h-5 text-amber-electric shrink-0" />
                {BUSINESS.email}
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-white border-l-4 border-l-amber-electric p-6 mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-amber-electric" />
                <h3 className="font-display font-bold text-lg text-navy-black">BUSINESS HOURS</h3>
              </div>
              {BUSINESS.hours.display.map((item, index) => (
                <p key={index} className="font-body text-sm text-slate-body">
                  {item.days}: {item.hours}
                </p>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="bg-navy-deep/10 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-amber-electric mx-auto mb-2" />
                  <p className="font-body text-sm text-slate-body">{BUSINESS.address.full}</p>
                  <a
                    href={BUSINESS.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-amber-electric hover:text-amber-muted mt-2 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle className="w-12 h-12 text-amber-electric mx-auto mb-4" />
                <h3 className="font-display font-bold text-3xl text-navy-black">
                  Thank You!
                </h3>
                <p className="font-body text-lg text-slate-body mt-2">
                  We&apos;ll call you to confirm your appointment. See you soon!
                </p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="inline-block font-body text-amber-electric hover:text-amber-muted mt-4"
                >
                  Call us directly: {BUSINESS.phone}
                </a>
              </div>
            ) : (
              <>
                <h2 className="section-eyebrow mb-6">SCHEDULE YOUR VISIT</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1 */}
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

                  {/* Row 2 */}
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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClass}>Vehicle Year *</label>
                      <input
                        type="text"
                        name="vehicleYear"
                        required
                        value={formData.vehicleYear}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="2020"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Make *</label>
                      <input
                        type="text"
                        name="vehicleMake"
                        required
                        value={formData.vehicleMake}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Toyota"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Model *</label>
                      <input
                        type="text"
                        name="vehicleModel"
                        required
                        value={formData.vehicleModel}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Camry"
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
                    className="w-full bg-amber-electric text-navy-black font-body font-semibold text-sm uppercase tracking-wider py-4 rounded-none hover:bg-amber-500 transition-colors"
                  >
                    SCHEDULE MY VISIT
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
