import React from 'react'
import { motion } from 'framer-motion';
import { ServiceCard } from './components/ServiceCard';
import { Button } from './components/ui/button';
import {
  Hammer,
  Layers,
  Paintbrush,
  Droplet,
  Plug,
  Building
} from "lucide-react";

const services = [
  {
    image: '/construction.webp',
    gradient: "from-red-400 to-orange-500",
    icon: Hammer,
    title: "General Construction",
    description:
      "Complete construction solutions backed by skilled manpower and professional execution.",
    details:
      "We provide full-service general construction including system study and analysis, supply and installation, commissioning, and maintenance. Our workforce ensures projects are delivered safely, efficiently, and with consistent quality."
  },
  {
    image: '/gypsum.jpg',
    icon: Layers,
    title: "Gypsum & Interior Works",
    gradient: "from-cyan-500 to-orange-500",
    description:
      "Interior finishing solutions tailored for commercial, residential, and corporate spaces.",
    details:
      "Office partition installation, internal painting, sticker works, carpentry, exhibition & kiosk setup, Celotex ceilings, and all types of flooring solutions designed for aesthetic and functional interiors."
  },
  {
    icon: Paintbrush,
    title: "Painting & Tiles Works",
    image: '/painting.jpg',
    gradient: "from-emerald-500 to-orange-500",
    description:
      "Premium painting and flooring services with durable, high-quality finishes.",
    details:
      "Exterior & interior painting, furniture polishing, classic and modern finishes, marble and tile flooring, vinyl and hardwood flooring solutions — executed with expert craftsmanship for lasting performance."
  },
  {
    icon: Droplet,
    image: '/waterproof.webp',
    title: "Waterproofing & Epoxy",
    gradient: "from-amber-500 to-cyan-500",
    description:
      "Protective coatings and durable flooring systems for long-term resilience.",
    details:
      "Epoxy flooring, floor seal & concrete polishing, 3D epoxy floor coating, membrane & crystalline coating, and waterproofing solutions including epoxy coating for damp surfaces."
  },
  {
    icon: Plug,
    title: "MEP Works",
    image: '/pipings.jpeg',
    gradient: "from-orange-500 to-blue-500",
    description:
      "Reliable Mechanical, Electrical & Plumbing services for all project scales.",
    details:
      "Installation of pipe systems (PVC, UPVC, PPR, HDPE, GI, Copper), GRP tank fittings, cable tray systems, trunking systems, floor boxes, and external lighting with full MEP integration."
  },
  {
    icon: Building,
    image: '/glassworks.jpeg',
    title: "Cladding & Glass Works",
    gradient: "from-blue-500 to-purple-500",
    description:
      "Architectural cladding and glazing solutions for modern, elegant structures.",
    details:
      "Aluminium doors and windows, sliding systems, ACP cladding, thermal break systems, interior & exterior decorative cladding, glazing work, and advertisement board installations."
  }
];

const Services = () => {
  return (
    <section
      id='services'
      className='py-24  px-6 bg-linear-to-r from-orange-200 to-white-300 relative overflow-hidden'
    >
      <div className='absolute inset-0 bg-grid-pattern opacity-5' />

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className='text-gray-900 mb-4'
            style={{ fontSize: '3rem', fontWeight: 700 }}
          >
            Our Services
          </h2>
          <p
            className='text-gray-600 max-w-2xl mx-auto'
            style={{ fontSize: '1.125rem' }}
          >
            Building the future with innovative engineering, skilled manpower, and uncompromised quality.
          </p>
          <div className='w-20 h-1 bg-linear-to-r from-orange-500 to-red-600 mx-auto rounded-full mt-6' />
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* <Button
              size='lg'
              className='bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg'
              style={{ fontSize: '1.125rem', padding: '1.5rem 2.5rem' }}
            >
              View All Services
            </Button> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Services