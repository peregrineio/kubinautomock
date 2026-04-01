import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Fleet Services | Kubin Automotive',
  description: 'Fleet maintenance services for businesses in Bryan, TX. Preventative maintenance programs, priority scheduling, and dedicated support.',
}

export default function FleetPage() {
  // Redirect to services page for now, fleet section is there
  redirect('/services#fleet')
}
