import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    { name: 'Work', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#about' },
    { name: 'Insight', href: '#testimonials' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 py-6`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className={`flex items-center gap-2 group cursor-pointer transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-black'}`}>
            <span className="text-sm font-bold tracking-tight">© Abdullah Abdulhakeem</span>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-12 transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-black'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.1em] opacity-70 hover:opacity-100 transition-opacity relative group"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="text-[11px] font-bold uppercase tracking-[0.1em] opacity-70 hover:opacity-100 transition-opacity">
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4"
          >
            <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter text-white/50 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-white/10 my-4" />
                <button className="bg-primary text-black px-6 py-4 rounded-full font-black uppercase tracking-widest text-xs">
                  Start Project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
