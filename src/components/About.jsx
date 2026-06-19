import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight } from 'lucide-react';
import AbdullahNoBackground from '../assets/AbdullahProfile.jpeg';
import ResumeFile from '../assets/Abdullahi_Adeyemi_Resume.docx?url';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Happy Clients', value: '20+' },
    { label: 'Years Experience', value: '4+' }
  ];

  return (
    <section id="about" className="py-10 md:py-32 bg-white dark:bg-[#030303] text-gray-900 dark:text-white relative overflow-hidden border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">

          {/* Background Text */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] z-0">
            <span className="text-[12rem] font-black tracking-tighter uppercase leading-none text-gray-900 dark:text-white">About Me</span>
          </div>

          {/* Left Side: Card Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[480px] aspect-[4/5] bg-primary rounded-[60px] overflow-hidden group shadow-2xl shadow-primary/5"
            >
              {/* Decorative blobs */}
              <div className="absolute top-[-20px] right-[-20px] w-48 h-48 bg-secondary/40 rounded-full blur-3xl" />
              <div className="absolute top-10 right-10 w-24 h-24 bg-secondary/60 rounded-full blur-xl opacity-60" />
              <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-black/10 rounded-full blur-3xl" />

              {/* Profile Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden">
                <img
                  src={AbdullahNoBackground}
                  alt="Abdullahi"
                  className="w-[100%] h-auto object-contain filter transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Info Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-xl rounded-[32px] p-5 flex items-center justify-between z-20 border border-white/10">
                <div>
                  <h3 className="text-white font-bold text-base md:text-lg">Abdullah Abdulhakeem</h3>
                  <p className="text-primary font-bold text-[9px] uppercase tracking-[0.2em] mt-1">Product & Brand Designer</p>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 relative px-6 py-1"
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">About Me</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-8"
            >
              Who is <span className="text-primary">Abdullahi?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 dark:text-white/40 text-lg font-medium leading-relaxed mb-12 max-w-xl"
            >
              Passionate Product Designer with 4+ years of experience in crafting intuitive and engaging digital products. I specialize in turning complex problems into simple, beautiful solutions.
            </motion.p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-12 mb-16">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-primary tracking-tight">100+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-white/40">Projects Completed</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-primary tracking-tight">20+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-white/40">Happy Clients</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-primary tracking-tight">4+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-white/40">Years of Experience</span>
              </div>
            </div>

            <motion.a
              href={ResumeFile}
              download="Abdullahi_Adeyemi_Resume.docx"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-black px-10 py-4 rounded-full font-bold text-[13px] transition-all shadow-lg shadow-primary/20 cursor-pointer"
            >
              <Download size={16} />
              Download CV
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
