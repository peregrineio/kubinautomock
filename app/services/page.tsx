import ServicesHeroRedesign from '@/components/sections/services/ServicesHeroRedesign'
import ServicesContentRedesign from '@/components/sections/services/ServicesContentRedesign'

export const metadata = {
  title: 'Our Services | Kubin Automotive',
  description: 'Full-service automotive care in Bryan, TX. Oil changes, brake repair, engine diagnostics, A/C service, electrical systems, and fleet maintenance.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroRedesign />
      <ServicesContentRedesign />
    </>
  )
}
