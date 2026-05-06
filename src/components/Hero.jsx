import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, X } from 'lucide-react';
import AbdullahProfile from '../assets/Abdullah-Nobackground.png';

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen bg-white dark:bg-[#030303] flex flex-col items-center justify-center overflow-hidden pt-28 md:pt-20 transition-colors duration-500">
      {/* Checkerboard Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(45deg, #000000 25%, transparent 25%), linear-gradient(-45deg, #000000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000000 75%), linear-gradient(-45deg, transparent 75%, #000000 75%)', backgroundSize: '100px 100px', backgroundPosition: '0 0, 0 50px, 50px 50px, 50px 0' }} />

      {/* Background Noise Effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />

      <div className="container px-4 md:px-10 lg:px-0 lg:mx-auto lg:max-w-[1400px] relative z-10 flex-grow flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 w-full pb-20">

          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 relative px-6 py-1"
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">Hello There!</span>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col mb-8"
            >
              <motion.h1 variants={fadeUp} className="text-5xl md:text-[80px] font-bold leading-[1.05] tracking-tight mb-2">
                <span className="text-primary">I'm Abdullahi,</span>
              </motion.h1>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-[80px] font-bold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-2">
                Product Designer
              </motion.h1>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-[80px] font-bold text-gray-900 dark:text-white leading-[1.05] tracking-tight">
                based in Nigeria.
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-500 dark:text-white/40 text-lg md:text-xl max-w-xl font-medium leading-relaxed mb-12"
            >
              I'm an experienced Product Designer with 4+ years in the field, collaborating with various companies and startups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a href="#projects" className="bg-primary text-black px-10 py-4 rounded-full font-bold text-[14px] hover:scale-105 transition-all shadow-lg shadow-primary/20">
                View My Work
              </a>
              <a href="#" className="bg-transparent border border-black/10 dark:border-white/20 text-gray-900 dark:text-white px-10 py-4 rounded-full font-bold text-[14px] hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right Side: Image with Graphics */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative order-1 lg:order-2 py-12">
            <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">

              {/* Green Graphic Circle with Wavy Pattern */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute w-[80%] h-[80%] bg-primary rounded-full z-0 overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wavy-lines.png')" }} />
              </motion.div>

              {/* Floating Label: Product Designer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute md:bottom-1/4 bottom-[18%] left-0 z-30 bg-primary text-black px-5 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-wider flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-black rounded-full" />
                Product Designer
              </motion.div>

              {/* Floating Label: UI/UX Designer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute md:top-1/2 top-[58%] right-10 z-30 bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-wider border border-white/20 dark:border-black/20"
              >
                UI/UX Designer
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 w-[100%] h-[100%] flex items-end justify-center overflow-hidden"
              >
                <img
                  src={AbdullahProfile}
                  alt="Abdullahi"
                  className="w-[90%] h-auto object-contain filter grayscale drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              {/* Circular Text Badge */}
              <motion.a
                href="#contact"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute top-1/4 right-0 w-28 h-28 z-20 hidden md:block group/badge cursor-pointer"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                  <text className="text-[10px] font-bold uppercase fill-gray-900 dark:fill-white tracking-[0.1em] transition-colors group-hover/badge:fill-primary">
                    <textPath xlinkHref="#circlePath">
                      ✦ Hire Me ✦ Hire Me ✦ Hire Me ✦ Hire Me ✦
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black group-hover/badge:scale-110 transition-transform">
                    <X size={20} className="font-bold" />
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scrolling Marquee line */}
      <div className="w-full relative bg-primary py-5 overflow-hidden border-t border-primary mt-auto">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap items-center"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-black font-bold uppercase tracking-tight px-12 text-2xl flex items-center gap-12">
                Web Design <span className="text-3xl">✻</span> App Design <span className="text-3xl">✻</span> Dashboard <span className="text-3xl">✻</span> Wireframe <span className="text-3xl">✻</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
