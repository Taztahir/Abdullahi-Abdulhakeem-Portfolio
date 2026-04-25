import React from 'react';
import { motion } from 'framer-motion';
import AbdullahProfile from '../assets/AbdullahProfile.jpeg';

const Hero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const textRevealVariants = {
    hidden: { y: "120%", rotate: 5, opacity: 0 },
    visible: { 
      y: 0, 
      rotate: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 md:pb-20 overflow-hidden bg-primary">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.05] z-30 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Massive Background Marquee (Infinite Scroll) */}
      <div className="absolute top-[20%] left-0 w-full z-0 pointer-events-none opacity-10 overflow-hidden flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap"
        >
          <h1 className="text-[25vw] md:text-[35vw] font-black leading-none tracking-tighter text-black px-8">ABDULLAH SCOTT</h1>
          <h1 className="text-[25vw] md:text-[35vw] font-black leading-none tracking-tighter text-black px-8">ABDULLAH SCOTT</h1>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 w-full min-h-[75vh]"
      >
        
        {/* Left Column - Typography & Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start pt-10 md:pt-0">
          
          {/* Top Minimal Info */}
          <motion.div variants={fadeUpVariants} className="flex gap-12 opacity-60 mb-8 md:mb-16">
            <div className="flex flex-col gap-1 text-[10px] md:text-xs font-bold text-[#111] uppercase tracking-widest">
              <span>Available for</span>
              <span>Freelance Work</span>
            </div>
            <div className="flex flex-col gap-1 text-[10px] md:text-xs font-bold text-[#111] uppercase tracking-widest">
              <span>Based in</span>
              <span>Worldwide</span>
            </div>
          </motion.div>

          {/* Main Heading - Mask Reveal */}
          <div className="mb-12 md:mb-20">
            <div className="overflow-hidden py-2">
              <motion.h1 variants={textRevealVariants} className="text-[20vw] md:text-[10vw] lg:text-[12vw] font-black leading-[0.8] tracking-tighter text-[#111]">
                Abdullah
              </motion.h1>
            </div>
            <div className="overflow-hidden py-2">
              <motion.h1 variants={textRevealVariants} className="text-[20vw] md:text-[10vw] lg:text-[12vw] font-black leading-[0.8] tracking-tighter text-[#111]">
                Scott
              </motion.h1>
            </div>
          </div>

          {/* Bottom Details */}
          <div className="flex flex-col gap-8 w-full">
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-2xl md:text-4xl font-black text-[#111] leading-[1] tracking-tight">
                // Web Designer<br />
                Art Director
              </h2>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4 md:gap-6 mt-4">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social, i) => (
                <motion.a 
                  key={social}
                  href="#" 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs md:text-sm font-bold text-[#111] hover:opacity-50 transition-all uppercase tracking-widest"
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Right Column - Portrait */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative h-[50vh] md:h-[75vh]">
          {/* Image Reveal Mask + Floating Animation */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="relative w-full max-w-[450px] lg:max-w-[550px] overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <img 
                src={AbdullahProfile} 
                alt="Abdullah Scott" 
                className="w-full h-full object-cover object-top rounded-sm shadow-2xl mix-blend-multiply origin-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
