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

  const skillTags = [
    "Mobile App Design", "UI/UX Design", "Brand Identity", "Design Systems", "Prototype", "Dashboard", "Wireframe Design"
  ];

  return (
    <section id="about" className="py-10 md:py-32 bg-[#030303] text-white relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Circular Image with Skill Tags */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            <div className="relative w-full max-w-[450px] aspect-square">
              {/* Spinning Background Graphic */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-primary opacity-100 z-0 overflow-hidden"
              >
                {/* Patterns inside the circle */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-30" />
                <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, black 0, black 1px, transparent 0, transparent 20px)', backgroundSize: '40px 40px' }} />
              </motion.div>

              {/* Profile Image container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-black z-10 bg-black flex items-end justify-center">
                <img
                  src={AbdullahProfile}
                  alt="About Abdullah"
                  className="w-full h-[110%] object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700"
                />
              </div>

              {/* Skill Tags - Orbiting around the circle with responsive positioning */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {skillTags.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.2, zIndex: 30 }}
                    className={`absolute px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-2xl whitespace-nowrap pointer-events-auto cursor-default transition-all duration-300 ${i % 2 === 0
                      ? 'bg-black text-white border border-white/20'
                      : 'bg-primary text-black border border-black/10'
                      }`}
                    style={{
                      // Use smaller radius on mobile (calc based on screen width if needed, but here using responsive offsets)
                      top: `calc(40% + ${Math.sin(i * (Math.PI * 2 / skillTags.length)) * 42}%)`,
                      left: `calc(45% + ${Math.cos(i * (Math.PI * 2 / skillTags.length)) * 42}%)`,
                      rotate: `${(i * 10) - 30}deg`
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 bg-primary/5 text-primary"
            >
              <span className="text-xs font-black uppercase tracking-widest">About Me</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-8"
            >
              Who is <span className="text-primary italic font-serif font-light">Abdullah Abdulhakeem?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg font-medium leading-relaxed mb-10"
            >
              I am a multidisciplinary designer specializing in digital products and visual brand identities.
              My approach blends technical precision with artistic flair to create experiences that resonate
              with users and drive business success.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-4xl font-black text-primary tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-3 bg-primary text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-[0_0_20px_rgba(163,255,51,0.2)]"
            >
              Download CV <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
