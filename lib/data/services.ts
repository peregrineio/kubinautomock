export type Service = {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  icon: string
  category: 'routine' | 'major' | 'specialty' | 'fleet'
}

export const SERVICES: Service[] = [
  {
    id: 'oil-change',
    name: 'Oil Changes & Routine Maintenance',
    shortDescription: 'Keep your engine running clean with regular oil changes and scheduled maintenance.',
    fullDescription: 'Regular oil changes are the foundation of vehicle health. Our technicians use quality oil and filters to keep your engine protected and running at peak performance.',
    icon: 'Droplets',
    category: 'routine',
  },
  {
    id: 'brakes',
    name: 'Brake Inspection & Repair',
    shortDescription: 'Complete brake system inspection, pad replacement, and rotor service.',
    fullDescription: 'Your brakes are your most important safety system. We inspect your entire brake system and provide honest recommendations — only what you actually need.',
    icon: 'CircleStop',
    category: 'major',
  },
  {
    id: 'engine',
    name: 'Engine Diagnostics & Repair',
    shortDescription: 'Expert engine diagnostics using modern tools and 47 years of hands-on experience.',
    fullDescription: 'From check engine lights to major engine work, our experienced technicians diagnose and repair engine issues accurately and efficiently.',
    icon: 'Settings',
    category: 'major',
  },
  {
    id: 'ac',
    name: 'A/C & Heating Service',
    shortDescription: 'Stay comfortable year-round with complete HVAC system service and repair.',
    fullDescription: "Texas summers demand a working air conditioner. We service, repair, and recharge your vehicle's A/C and heating systems to keep you comfortable in any weather.",
    icon: 'Wind',
    category: 'specialty',
  },
  {
    id: 'electrical',
    name: 'Electrical System Diagnostics',
    shortDescription: 'Complete electrical system diagnosis, from battery to complex wiring issues.',
    fullDescription: 'Modern vehicles are increasingly complex. Our technicians diagnose electrical faults, charging system issues, and wiring problems with precision.',
    icon: 'Zap',
    category: 'specialty',
  },
  {
    id: 'fleet',
    name: 'Fleet Maintenance Services',
    shortDescription: 'Preventative maintenance programs for business fleets of any size.',
    fullDescription: 'Keep your entire fleet on the road with our fleet maintenance programs. We work with businesses across the Brazos Valley to reduce downtime and extend vehicle life.',
    icon: 'Truck',
    category: 'fleet',
  },
  {
    id: 'suspension',
    name: 'Suspension & Steering Repair',
    shortDescription: 'Expert suspension and steering diagnosis and repair for a smooth, safe ride.',
    fullDescription: 'Worn suspension components affect handling, tire wear, and safety. We diagnose and repair shocks, struts, steering components, and alignment issues.',
    icon: 'Car',
    category: 'major',
  },
  {
    id: 'battery',
    name: 'Battery Testing & Replacement',
    shortDescription: 'Battery load testing and replacement to keep you from getting stranded.',
    fullDescription: "We test your battery's health and charging system to catch failures before they happen. Quick replacement service available while you wait.",
    icon: 'Battery',
    category: 'routine',
  },
  {
    id: 'cooling',
    name: 'Cooling System & Radiator Service',
    shortDescription: 'Radiator inspection, coolant flush, and cooling system repair.',
    fullDescription: "Texas heat puts extra stress on your cooling system. We inspect, flush, and repair cooling systems to prevent overheating and costly engine damage.",
    icon: 'Thermometer',
    category: 'specialty',
  },
  {
    id: 'tune-up',
    name: 'Tune-Ups & Performance Checks',
    shortDescription: 'Comprehensive vehicle tune-ups to restore performance and fuel efficiency.',
    fullDescription: 'A tune-up covers spark plugs, filters, belts, and a comprehensive inspection to ensure your vehicle is running at peak performance.',
    icon: 'Gauge',
    category: 'routine',
  },
  {
    id: 'tires',
    name: 'Tire Rotation',
    shortDescription: 'Regular tire rotation to extend tire life and maintain even wear.',
    fullDescription: 'Proper tire rotation extends the life of your tires and ensures even wear for better handling and fuel economy.',
    icon: 'CircleDot',
    category: 'routine',
  },
  {
    id: 'preventative',
    name: 'Preventative Maintenance Packages',
    shortDescription: 'Scheduled maintenance packages to keep small issues from becoming big problems.',
    fullDescription: "Our preventative maintenance packages are tailored to your vehicle's age, mileage, and manufacturer recommendations — keeping you on the road and out of the shop.",
    icon: 'Shield',
    category: 'routine',
  },
]

export const HOMEPAGE_SERVICES = SERVICES.filter(s =>
  ['oil-change', 'brakes', 'engine', 'ac', 'electrical', 'fleet'].includes(s.id)
)
