import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import AbdullahProfile from '../assets/Abdullah-Nobackground.png';

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen bg-[#030303] flex flex-col items-center justify-center overflow-hidden pt-28">
      {/* Background Noise Effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container px-4 md:px-0 md:mx-auto md:max-w-[1400px] relative z-10 flex-grow flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 w-full pb-20">

          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 bg-primary/5 text-primary"
            >
              <span className="text-xs font-black uppercase tracking-widest">Hello There!</span>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col mb-8"
            >
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-white leading-[1] tracking-tighter mb-4">
                I'm <span className="text-primary italic font-serif font-light">Abdullah</span>
              </motion.h1>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white leading-[1] tracking-tighter">
                Product Designer based in Lagos.
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/60 text-lg md:text-xl max-w-xl font-medium leading-relaxed mb-10"
            >
              I am an experienced Product Designer with a focus on creating intuitive digital experiences and stunning visual identities for global brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a href="#projects" className="group relative inline-flex items-center justify-center gap-3 bg-primary text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(163,255,51,0.3)]">
                View My Work
              </a>
              <a href="#" className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs border border-white/10 transition-all hover:scale-105">
                Download CV <Download size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Image with Graphics */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative order-1 lg:order-2 py-12">
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">

              {/* Massive Green Graphic Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 bg-primary rounded-full opacity-100 z-0 overflow-hidden"
              >
                {/* Visual patterns inside circle */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '12px 12px' }} />
              </motion.div>

              {/* Floating Badge 1: Product Designer */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-10 -left-2 md:-left-4 z-20 bg-primary text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full font-black text-[8px] md:text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                Product Designer
              </motion.div>

              {/* Floating Badge 2: UI/UX Designer */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-1/2 -right-4 md:-right-8 z-20 bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-black text-[8px] md:text-[10px] uppercase tracking-widest border border-white/20 shadow-2xl flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                UI/UX Designer
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 w-[100%] h-[100%] md:w-[110%] md:h-[110%] flex items-end justify-center overflow-hidden -bottom-2 md:-bottom-4"
              >
                <img
                  src={AbdullahProfile}
                  alt="Abdullah Abdulhakeem"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              {/* Circular Text Badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute -top-4 right-4 w-24 h-24 z-20 hidden md:block"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[10px] font-black uppercase fill-black tracking-[0.2em]">
                    <textPath xlinkHref="#circlePath">
                      ✦ Portfolio 2024 ✦ Hire Me ✦ Design ✦
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <ArrowUpRight size={20} className="text-primary" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scrolling Marquee line - Now using relative positioning to prevent overlap */}
      <div className="w-full relative bg-primary py-5 overflow-hidden border-t border-primary mt-auto">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-black font-black uppercase tracking-[0.2em] px-8 text-sm md:text-lg">
                Web Design ✦ App Design ✦ Dashboard ✦ Wireframe ✦ Visual Identity ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
