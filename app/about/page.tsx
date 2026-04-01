import AboutHeroRedesign from '@/components/sections/about/AboutHeroRedesign'
import StorySectionRedesign from '@/components/sections/about/StorySectionRedesign'
import ValuesSectionRedesign from '@/components/sections/about/ValuesSectionRedesign'
import TeamSectionRedesign from '@/components/sections/about/TeamSectionRedesign'
import FinalCTARedesign from '@/components/sections/home/FinalCTARedesign'

export const metadata = {
  title: 'About Us | Kubin Automotive',
  description: 'Family-owned auto repair in Bryan, TX since 1978. Meet Frank and Kent Kubin and learn about our 47-year commitment to honest service.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHeroRedesign />
      <StorySectionRedesign />
      <ValuesSectionRedesign />
      <TeamSectionRedesign />
      <FinalCTARedesign />
    </>
  )
}
