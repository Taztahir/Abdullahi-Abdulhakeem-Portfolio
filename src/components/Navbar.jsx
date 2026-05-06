import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'About Me', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled
        ? 'py-4 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl shadow-2xl'
        : 'py-8 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <div
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-black text-sm group-hover:rotate-[360deg] transition-transform duration-700">
              A
            </div>
            <span className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Abdullahi<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-[12px] font-medium transition-all relative group ${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${theme === 'dark'
                ? 'bg-white/5 border border-white/10 text-white/50 hover:text-white'
                : 'bg-black/5 border border-black/10 text-black/50 hover:text-black'
                }`}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              )}
            </button>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-primary text-black px-6 py-2.5 rounded-full font-bold text-[13px] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden w-12 h-12 rounded-full border transition-all flex items-center justify-center ${theme === 'dark'
              ? 'bg-white/5 border-white/10 text-white hover:bg-primary hover:text-black'
              : 'bg-black/5 border-black/10 text-black hover:bg-primary hover:text-white'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden fixed inset-0 z-[1100] transition-colors duration-500 flex flex-col ${theme === 'dark' ? 'bg-[#030303]' : 'bg-white'
              }`}
          >
            {/* Header in Overlay */}
            <div className="flex justify-between items-center px-6 py-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-black text-sm">
                  A
                </div>
                <span className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Abdullahi<span className="text-primary">.</span>
                </span>
              </div>
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-grow flex flex-col justify-center px-8 pb-20">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`text-3xl md:text-5xl font-black uppercase tracking-tighter transition-all block w-full relative group ${theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'
                        }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <motion.div
                        className="absolute left-0 bottom-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-300"
                      />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer in Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="px-8 py-12 border-t border-gray-100 dark:border-white/5 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Get In Touch</span>
                <a href="mailto:abdullahiabdulhakeem234@gmail.com" className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  abdullahiabdulhakeem234@gmail.com
                </a>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-6">
                  {[
                    { name: 'Instagram', href: 'https://www.instagram.com/abdullahi_thecreator?igsh=OTluaXVzMG1jZWUw' },
                    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullahi-abdulhakeem-92b6182a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                    { name: 'Facebook', href: 'https://www.facebook.com/share/1XXJA1zSLQ/' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
                <button
                  onClick={toggleTheme}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
                    }`}
                >
                  {theme === 'dark' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
