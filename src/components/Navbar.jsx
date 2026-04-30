import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled ? 'py-4 bg-[#030303]/90 backdrop-blur-xl shadow-2xl' : 'py-8 bg-transparent'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center text-white">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-black text-lg group-hover:rotate-[360deg] transition-transform duration-700">
              A
            </div>
            <span className="text-sm font-black tracking-widest uppercase hidden sm:block">Abdullah Abdulhakeem</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            
            <a 
              href="mailto:abdullahiabdulhakeem234@gmail.com" 
              className="bg-primary text-black px-6 py-3 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(163,255,51,0.2)]"
            >
              Let's Talk <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => {
                      // Small delay to ensure the browser processes the link before the menu closes/unmounts
                      setTimeout(() => setIsMobileMenuOpen(false), 100);
                    }}
                    className="text-4xl font-black uppercase tracking-tighter text-white/40 hover:text-primary transition-colors block w-full"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="mailto:abdullahiabdulhakeem234@gmail.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-black px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm text-center hover:bg-white transition-colors flex items-center justify-center gap-3"
              >
                Let's Talk <ArrowUpRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
