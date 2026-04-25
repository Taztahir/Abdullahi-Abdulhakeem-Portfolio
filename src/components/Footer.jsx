import React from 'react';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      name: 'Github', 
      href: '#', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-1.01 1.25-1.34 2.82-1 4.3.17 1.1.86 2.06 1.84 2.58C5.35 13.56 5.02 14.7 5 15.8c-.02.4.15.79.46 1.05.3.26.71.4 1.12.37H7c0 2.2 1.8 4 4 4h4z"/></svg>
      )
    },
    { 
      name: 'Twitter', 
      href: '#', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
      )
    },
    { 
      name: 'Linkedin', 
      href: '#', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    { 
      name: 'Instagram', 
      href: '#', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    }
  ];

  return (
    <footer className="bg-darker pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between gap-24 mb-32">
          
          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-3 mb-10 group cursor-none">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-black font-black text-xl group-hover:rotate-12 transition-transform">
                A
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">Abdullah<span className="text-primary">.</span></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
              Ready to create something <span className="text-primary italic font-serif">extraordinary?</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-12 font-light">
              Let's collaborate to build digital products that not only look stunning but also deliver exceptional results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:hello@abdullah.com" className="bg-primary text-black px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                Email Me
              </a>
              <a href="#" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                Schedule a Call
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 lg:gap-32">
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Navigation</h4>
              <ul className="flex flex-col gap-6 text-gray-500 font-bold uppercase text-xs tracking-widest">
                {['Work', 'Services', 'Process', 'Insight', 'About'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Connect</h4>
              <ul className="flex flex-col gap-6 text-gray-500 font-bold uppercase text-xs tracking-widest">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a href={social.href} className="hover:text-primary transition-colors flex items-center gap-3">
                      {social.icon} {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
             <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Designed & Built by</p>
             <p className="text-white/50 text-sm font-bold uppercase tracking-widest italic font-serif">Abdullah Scott © 2026</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <ArrowUp size={24} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Legal</a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.01] text-[40vw] font-black leading-none pointer-events-none select-none translate-y-1/2">
        ABD
      </div>
    </footer>
  );
};

export default Footer;
