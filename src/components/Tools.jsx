import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
  { name: 'Framer', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framerjs/framerjs-original.svg' },
  { name: 'Sketch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' }
];

const Tools = () => {
  return (
    <section className="py-10 bg-[#030303] relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/10 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Design Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white leading-[1] tracking-tight"
          >
            Tools I use daily.
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex items-center gap-4 px-6 md:px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default group"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <span className="text-white/80 font-medium text-sm md:text-base group-hover:text-white transition-colors">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
