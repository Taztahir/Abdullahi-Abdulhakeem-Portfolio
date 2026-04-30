import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Palette, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Layout className="text-primary" size={32} />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and user-centered digital experiences that solve real problems and delight users.',
    link: '#'
  },
  {
    icon: <Smartphone className="text-primary" size={32} />,
    title: 'Mobile App Design',
    description: 'Designing high-performance mobile applications with a focus on usability, speed, and visual appeal.',
    link: '#'
  },
  {
    icon: <Palette className="text-primary" size={32} />,
    title: 'Brand Identity',
    description: 'Building strong and memorable brand identities that build trust and drive long-term business success.',
    link: '#'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#030303] text-white relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 bg-primary/5 text-primary"
            >
              <span className="text-xs font-black uppercase tracking-widest">My Specialization</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter"
            >
              Services I <span className="text-primary italic font-serif font-light">Provide</span>
            </motion.h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-primary text-black font-black uppercase tracking-widest text-[10px] shadow-[0_0_20px_rgba(163,255,51,0.2)]"
          >
            View All Services
          </motion.button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 flex flex-col items-start relative overflow-hidden"
            >
              {/* Card Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:border-primary/30 transition-transform duration-500">
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-white mb-4 relative z-10">{service.title}</h3>

              <p className="text-white/40 font-medium leading-relaxed mb-10 relative z-10">
                {service.description}
              </p>

              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-white/60 group-hover:text-primary transition-colors font-black uppercase tracking-widest text-[10px] mt-auto relative z-10"
              >
                Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
