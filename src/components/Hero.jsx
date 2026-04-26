import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AbdullahProfile from '../assets/AbdullahProfile.jpeg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="home" className="relative min-h-[100svh] bg-[#030303] flex items-center justify-center overflow-hidden pt-20">

      {/* Background Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Massive Background Typography (Marquee) */}
      <div className="absolute inset-0 flex flex-col justify-center z-0 pointer-events-none opacity-5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <h1 key={i} className="text-[15vw] font-black whitespace-nowrap leading-[0.8] tracking-tighter px-8">
              PRODUCT DESIGNER
            </h1>
          ))}
        </motion.div>

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex whitespace-nowrap mt-4"
        >
          {[...Array(4)].map((_, i) => (
            <h1 key={i} className="text-[15vw] font-black whitespace-nowrap leading-[0.8] tracking-tighter text-transparent px-8" style={{ WebkitTextStroke: '2px white' }}>
              UI/UX EXPERT
            </h1>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto max-w-[76rem] max-md:px-3 relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 pb-16">

        {/* Left Side: Editorial Typography */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center pt-10 lg:pt-0">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            {/* <Sparkles size={16} className="text-primary" /> */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Available for work</span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-col gap-2 mb-8"
          >
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[0.9] tracking-tighter">
              Crafting
            </motion.h1>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[4.5rem] font-black text-white leading-[0.9] tracking-tighter flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              Digital <span className="text-primary italic font-serif font-light">Experiences</span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/50 text-base md:text-lg max-w-md font-medium leading-relaxed mb-12"
          >
            I'm <span className="text-white font-bold">Abdullah Abdulhakeem</span>, a Product Designer focusing on creating intuitive, high-converting, and beautiful interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a href="#projects" className="group relative inline-flex items-center justify-center gap-3 bg-primary text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10">See Projects</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            </a>

            <div className="flex gap-4">
              {['Ig', 'Tw', 'In'].map((social, i) => (
                <a key={social} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 font-bold text-sm">
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Artistic Image Presentation */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative mt-10 lg:mt-0">

          <motion.div
            style={{ y: y2 }}
            className="relative w-full max-w-[350px] md:max-w-[400px] lg:max-w-[480px]"
          >
            {/* Decorative background shape */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: -6 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-0 bg-primary/20 rounded-[2rem] md:rounded-[3rem] blur-xl translate-x-4 translate-y-8"
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 4 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-primary rounded-[2rem] md:rounded-[3rem]"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative z-10 w-full aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src={AbdullahProfile}
                alt="Abdullah Abdulhakeem"
                className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Floating Name Tag inside image */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl">
                <div>
                  <p className="text-white font-bold text-sm">Abdullah Abdulhakeem</p>
                  <p className="text-primary text-xs font-medium tracking-wider uppercase mt-1">Product Designer</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>

            {/* Floating Graphic Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -top-10 -right-5 md:-right-10 w-24 h-24 md:w-32 md:h-32 opacity-80 z-20 pointer-events-none mix-blend-screen"
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#A3FF33" d="M44.7,-76.4C58.3,-69.2,70,-56.9,79.5,-42.6C89,-28.3,96.3,-12,94.9,3.6C93.4,19.2,83.2,34,71.7,46.5C60.2,59,47.4,69.1,32.8,75.9C18.2,82.7,1.8,86.2,-13.7,83.9C-29.2,81.6,-43.8,73.5,-56.1,62.3C-68.4,51.1,-78.4,36.8,-84.6,20.8C-90.8,4.8,-93.2,-12.9,-86.6,-27.5C-80,-42.1,-64.4,-53.6,-49.6,-60.7C-34.8,-67.8,-20.8,-70.5,-5.5,-61.8C9.8,-53.1,19.6,-53.2,31.1,-63.6C42.6,-74,54.1,-84.7,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Bottom Scrolling Marquee line */}
      <div className="w-full absolute bottom-0 left-0 bg-[#A3FF33] py-4 overflow-hidden border-t border-[#A3FF33]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-black font-black uppercase tracking-[0.2em] px-8 text-sm md:text-base">
                Web Design ✦ App Design ✦ UI/UX ✦ Branding ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
