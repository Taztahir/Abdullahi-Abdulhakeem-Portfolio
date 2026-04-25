import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-40 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-12 block"
          >
            // Intro
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-20"
          >
            I'm a versatile <span className="text-primary">designer</span> who 
            partners with founders to turn ideas into 
            <span className="text-primary"> real products.</span> I focus on clear interfaces, 
            sharp decisions, and fast execution.
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-end gap-12">
            <div className="max-w-md">
              <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-10">
                Bringing your vision to life quickly and efficiently—whether 
                it's branding, apps, or websites—I've got it covered, 
                delivering smooth and effective solutions from start to finish.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/20 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                See my Work
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    </section>
  );
};

export default About;
