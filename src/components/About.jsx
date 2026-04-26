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
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
            className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-20 flex flex-wrap gap-x-3 gap-y-2"
          >
            {("I'm a Product, Brand, and Graphic Designer who partners with founders to turn complex ideas into stunning visual identities and digital products.".split(" ")).map((word, index) => {
              const isHighlight = word.includes("Designer") || word.includes("visual") || word.includes("identities") || word.includes("products.");
              return (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50, rotate: 5 },
                    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                  }}
                  className={`inline-block ${isHighlight ? "text-primary" : "text-white"}`}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.div>

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
