import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 'Expert', desc: 'UI/UX & Prototyping' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', level: 'Advanced', desc: 'Vector Graphics' },
  { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg', level: 'Expert', desc: 'Motion Design' },
  { name: 'Framer', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framerjs/framerjs-original.svg', level: 'Expert', desc: 'Web Animation' },
  { name: 'Sketch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg', level: 'Advanced', desc: 'UI Design' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', level: 'Advanced', desc: 'Image Editing' }
];

const Tools = () => {
  return (
    <section className="py-40 bg-[#030303] relative overflow-hidden">
      {/* Background Noise & Glow */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/10 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#A3FF33]" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Design Stack</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white leading-[0.9] tracking-tighter"
            >
              My Digital <span className="text-transparent outline-text opacity-50" style={{ WebkitTextStroke: '2px white' }}>Arsenal.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 overflow-hidden hover:border-primary/50 transition-colors duration-500"
            >
              {/* Hover Glow Effect inside card */}
              <div className="absolute -inset-20 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_20px_rgba(163,255,51,0.4)]" 
                  />
                </div>
                <div className="text-right">
                  <span className="text-white/20 font-black text-3xl">0{i + 1}</span>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-2">{tool.name}</h3>
                <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">{tool.level}</p>
                <p className="text-white/40 text-sm font-medium">{tool.desc}</p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-[3rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
