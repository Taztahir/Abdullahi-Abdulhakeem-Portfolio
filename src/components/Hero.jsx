import React from 'react';
import { motion } from 'framer-motion';
import AbdullahProfile from '../assets/AbdullahProfile.jpeg';

const Hero = () => {
  // Animation Variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pb-20 overflow-hidden bg-[#9FDF43]">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.05] z-30 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Center Portrait */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[50%] max-w-[700px] h-[85vh] z-10 pointer-events-none flex items-end justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          className="w-full h-full relative"
        >
          <img
            src={AbdullahProfile}
            alt="Abdullah Abdulhakeem"
            className="w-full h-full object-cover object-top mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
        </motion.div>
      </div>

      {/* Massive Overlapping Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-1/2 -translate-y-1/2 left-0 w-full z-20 pointer-events-none flex overflow-hidden mix-blend-difference text-[#9FDF43]"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap items-center"
        >
          <h1 className="text-[25vw] md:text-[22vw] font-black leading-none tracking-tighter px-8">Abdullah Abdulhakeem</h1>
          <h1 className="text-[25vw] md:text-[22vw] font-black leading-none tracking-tighter px-8">Abdullah Abdulhakeem</h1>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-30 flex flex-col justify-end w-full h-[85vh] md:h-[80vh]">
        {/* Bottom Details */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end pb-4">

          {/* Social Links (Bottom Left) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 1.2 } }
            }}
            className="flex flex-col gap-3 mb-8 md:mb-0"
          >
            {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
              <motion.a
                key={social}
                variants={fadeUpVariants}
                href="#"
                className="text-xs md:text-sm font-bold text-[#111] hover:opacity-50 transition-opacity flex items-center gap-2"
              >
                <span className="w-4 h-4 rounded-sm border border-[#111]/20 flex items-center justify-center text-[10px]">
                  {social === 'LinkedIn' ? 'in' : social === 'Twitter' ? '𝕏' : 'ig'}
                </span>
                {social}
              </motion.a>
            ))}
          </motion.div>

          {/* Profession Tagline (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-left md:text-right"
          >
            <h2 className="text-3xl md:text-5xl lg:text-[4vw] font-black text-[#111] leading-[0.9] tracking-tight">
              // Web Designer<br />
              Art Director
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
