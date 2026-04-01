import ContactHeroRedesign from '@/components/sections/contact/ContactHeroRedesign'
import ContactContentRedesign from '@/components/sections/contact/ContactContentRedesign'

export const metadata = {
  title: 'Contact Us | Kubin Automotive',
  description: 'Schedule your auto repair appointment in Bryan, TX. Call (979) 779-7484 or fill out our online form. Open Mon-Fri 7:30am-5:30pm.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHeroRedesign />
      <ContactContentRedesign />
    </>
  )
}
