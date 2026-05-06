import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import AbdullahProfile from '../assets/AbdullahProfile.jpeg';

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

          {/* Left Side: Circular Image with Clustered Tags */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative z-10">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              {/* Background Circle with Pattern */}
              <div className="absolute w-[85%] h-[85%] rounded-full bg-primary overflow-hidden">
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                 <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wavy-lines.png')" }} />
              </div>

              {/* Profile Image Cutout */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <img
                  src={AbdullahProfile}
                  alt="Abdullahi"
                  className="w-[80%] h-auto filter grayscale drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Clustered Skill Tags at the bottom */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex flex-wrap justify-center gap-2 z-20 px-4">
                {[
                  { name: "UX/UI Design", color: "bg-primary text-black" },
                  { name: "Mobile App Design", color: "bg-gray-900 dark:bg-black text-white border border-white/20" },
                  { name: "Website Design", color: "bg-primary text-black" },
                  { name: "Design System", color: "bg-primary text-black" },
                  { name: "Prototype", color: "bg-gray-900 dark:bg-black text-white border border-white/20" },
                  { name: "Dashboard", color: "bg-gray-900 dark:bg-black text-white border border-white/20" },
                  { name: "Wireframe Design", color: "bg-primary text-black" }
                ].map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-tight shadow-xl ${skill.color}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
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
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-black px-10 py-4 rounded-full font-bold text-[13px] transition-all shadow-lg shadow-primary/20 inline-block cursor-pointer"
            >
              Download CV
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
