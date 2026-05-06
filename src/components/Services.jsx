import React from 'react';
import { motion } from 'framer-motion';
import { Layers, PenTool, Monitor } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
      icon: <Layers size={28} />
    },
    {
      title: "Application Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
      icon: <PenTool size={28} />
    },
    {
      title: "Website Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
      icon: <Monitor size={28} />
    }
  ];

  return (
    <section id="services" className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
          <div>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">My Specialization</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              <span className="text-primary">Services</span> I Provide
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-10 rounded-2xl bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/5 hover:border-primary/20 transition-all duration-500 group overflow-hidden"
            >
              {/* Left Accent Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-primary rounded-r-full shadow-[0_0_15px_#00FF00] group-hover:h-24 transition-all duration-500" />
              
              <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1A1A1A] flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-lg border border-black/5 dark:border-none">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 dark:text-gray-400 mb-2 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
