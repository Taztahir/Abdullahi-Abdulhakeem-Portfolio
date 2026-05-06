import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
  { name: 'CorelDraw', icon: 'https://img.icons8.com/color/48/coreldraw.png' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { name: 'Sketch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' }
];

const Tools = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#030303] relative overflow-hidden border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col items-center justify-center mb-20 text-center relative">
          {/* Background Text */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03]">
            <span className="text-[10rem] font-black tracking-tighter uppercase leading-none text-gray-900 dark:text-white">My Tools</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 relative px-6 py-1"
          >
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">My Favorite Tools</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Exploring the <span className="text-primary">Tools</span> Behind My Designs
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-center gap-6 p-6 bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-2xl hover:border-primary/20 transition-all duration-500 relative"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 dark:text-white font-bold text-lg">{tool.name}</span>
              </div>
              <div className="absolute top-4 right-4 bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold">
                {i === 0 ? '98%' : i === 1 ? '92%' : i === 2 ? '85%' : i === 3 ? '95%' : i === 4 ? '90%' : '88%'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
