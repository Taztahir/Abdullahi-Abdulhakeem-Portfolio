import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 'Expert' },
  { name: 'Sketch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg', level: 'Advanced' },
  { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg', level: 'Advanced' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', level: 'Advanced' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', level: 'Intermediate' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Advanced' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 'Expert' },
  { name: 'Framer', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framerjs/framerjs-original.svg', level: 'Expert' }
];

const Tools = () => {
  return (
    <section className="py-32 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-6 block">Tech Stack</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">My Creative <span className="text-primary italic font-serif">Toolkit.</span></h2>
          <p className="text-gray-500 text-xl leading-relaxed">
            I leverage the best industry tools to design, prototype, and build seamless digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/2 border border-white/5 p-10 rounded-[2.5rem] group hover:bg-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col items-center justify-center relative overflow-hidden"
            >
              {/* Animated Glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative w-20 h-20 mb-8 transform transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.3)]" 
                />
              </div>
              
              <div className="relative text-center">
                <span className="text-white font-black uppercase tracking-widest text-[10px] block mb-2">{tool.name}</span>
                <span className="text-primary/50 font-bold text-[9px] uppercase tracking-[0.3em]">{tool.level}</span>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-white/20 rounded-full group-hover:bg-primary transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
