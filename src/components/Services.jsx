import React from 'react';
import { motion } from 'framer-motion';
import {
  Fingerprint,
  PenTool,
  Package,
  Megaphone,
  Monitor,
  Smartphone,
  Printer,
  Share2,
} from 'lucide-react';

const services = [
  {
    title: 'Brand Identity',
    description:
      'Crafting cohesive visual identities — from logo systems and color palettes to typography and brand guidelines that speak to your audience.',
    icon: <Fingerprint size={28} />,
  },
  {
    title: 'Logo Design',
    description:
      'Designing distinctive, memorable logos that capture the essence of your brand and work flawlessly across every medium.',
    icon: <PenTool size={28} />,
  },
  {
    title: 'Packaging Design',
    description:
      'Creating eye-catching packaging that stands out on shelves, communicates your brand story, and elevates the unboxing experience.',
    icon: <Package size={28} />,
  },
  {
    title: 'Flyer Design',
    description:
      'Producing high-impact flyers and promotional materials that grab attention and drive your audience to take action.',
    icon: <Megaphone size={28} />,
  },
  {
    title: 'UI & Web Design',
    description:
      'Designing intuitive, pixel-perfect interfaces and websites that delight users and achieve your business goals.',
    icon: <Monitor size={28} />,
  },
  {
    title: 'Application Design',
    description:
      'Building seamless mobile and desktop app experiences through user research, wireframing, and polished UI design.',
    icon: <Smartphone size={28} />,
  },
  {
    title: 'Print Design',
    description:
      'Developing professional print materials — brochures, business cards, posters, and more — with precision and creative flair.',
    icon: <Printer size={28} />,
  },
  {
    title: 'Social Media Design',
    description:
      'Creating scroll-stopping social media graphics, templates, and content systems that keep your brand consistent and engaging.',
    icon: <Share2 size={28} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 relative inline-block px-6 py-1"
          >
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">
              My Specialization
            </span>
          </motion.div>

          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            <span className="text-primary">Services</span> I Provide
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative p-8 rounded-2xl bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/5 hover:border-primary/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Left Accent Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-primary rounded-r-full shadow-[0_0_15px_#A3E635] group-hover:h-24 transition-all duration-500" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-white dark:bg-[#1A1A1A] flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-lg border border-black/5 dark:border-none">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm font-medium">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
