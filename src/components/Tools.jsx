import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
  { name: 'Framer', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framerjs/framerjs-original.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { name: 'Sketch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' }
];

const Tools = () => {
  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 bg-primary/5 text-primary"
          >
            <span className="text-xs font-black uppercase tracking-widest">My Favorite Tools</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter"
          >
            Exploring the <span className="text-primary italic font-serif font-light">Tools</span> <br className="hidden md:block" /> Behind My Designs
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center justify-center gap-4 p-6 md:p-8 bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white/10 hover:border-primary/30 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <span className="text-white/40 font-black uppercase tracking-widest text-[10px] group-hover:text-primary transition-colors">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
