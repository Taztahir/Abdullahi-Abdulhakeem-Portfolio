import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Branding & Marketing',
    description: 'Branding that builds trust and drives loyalty through clear visuals and messaging, into an unforgettable online experience.',
    items: [
      'Brand Strategy and Messaging',
      'Logo Design',
      'Visual Identity',
      'Brand Guidelines & Frameworks',
      'Marketing materials',
      'Motion Design'
    ]
  },
  {
    title: 'Product Design',
    description: 'Creating digital products that solve real problems through user-centered design and iterative prototyping.',
    items: [
      'UI/UX Design',
      'Design Systems',
      'Mobile App Design',
      'Web Application Design',
      'Interactive Prototypes',
      'User Testing'
    ]
  },
  {
    title: 'Web Development',
    description: 'Building high-performance, responsive websites that deliver exceptional user experiences.',
    items: [
      'Frontend Development',
      'Next.js / React',
      'Responsive Design',
      'Animations & Interactions',
      'CMS Integration',
      'Performance Optimization'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-40 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-24 block"
          >
            // Services
          </motion.span>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
              >
                {/* Outlined Number */}
                <div className="lg:col-span-4">
                  <span className="text-[12vw] lg:text-[8vw] font-black leading-none tracking-tighter opacity-20" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)', color: 'transparent' }}>
                    0{index + 1}
                  </span>
                </div>

                {/* Service Details */}
                <div className="lg:col-span-8">
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">{service.title}</h3>
                  <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
                    {service.description}
                  </p>

                  <div className="border-t border-white/10">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 group cursor-default">
                        <span className="text-white/60 group-hover:text-primary transition-colors font-medium">{item}</span>
                        <span className="text-white/20 text-xs font-mono">0{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
