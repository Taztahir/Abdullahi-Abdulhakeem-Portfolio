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
    title: 'Graphic Design',
    description: 'Crafting compelling visual communication and marketing materials that capture attention and tell a story.',
    items: [
      'Marketing Materials',
      'Social Media Graphics',
      'Packaging Design',
      'Typography & Layout',
      'Illustration',
      'Editorial Design'
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

          <div className="space-y-40">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {}
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative"
              >
                {/* Outlined Number - Sticky Sidebar */}
                <div className="lg:col-span-4 h-full relative">
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className="sticky top-32 hidden lg:block"
                  >
                    <span className="text-[12vw] lg:text-[10vw] font-black leading-none tracking-tighter opacity-20" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)', color: 'transparent' }}>
                      0{index + 1}
                    </span>
                  </motion.div>
                  {/* Mobile Number (Non-sticky) */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className="lg:hidden block"
                  >
                    <span className="text-[15vw] font-black leading-none tracking-tighter opacity-20" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)', color: 'transparent' }}>
                      0{index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Service Details */}
                <div className="lg:col-span-8 pt-4">
                  <motion.h3 
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-white/40 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
                  >
                    {service.description}
                  </motion.p>

                  <div className="border-t border-white/10">
                    {service.items.map((item, i) => (
                      <motion.div 
                        key={i} 
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                        }}
                        className="flex justify-between items-center py-6 border-b border-white/5 group cursor-default hover:pl-4 transition-all duration-300"
                      >
                        <span className="text-white/60 text-lg group-hover:text-primary transition-colors font-medium">{item}</span>
                        <span className="text-white/20 text-sm font-mono group-hover:text-primary transition-colors">0{i + 1}</span>
                      </motion.div>
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
