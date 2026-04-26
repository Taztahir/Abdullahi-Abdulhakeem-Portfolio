import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Github', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Linkedin', href: '#' },
    { name: 'Instagram', href: '#' }
  ];

  return (
    <footer className="bg-[#030303] pt-40 pb-10 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 md:mb-10">

          {/* Left: Massive Typographic Hook */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-bold tracking-widest uppercase text-xs">Available for new opportunities</span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
              >
                Got a <br /> <span className="text-transparent outline-text opacity-50 hover:opacity-100 transition-opacity" style={{ WebkitTextStroke: '2px white' }}>Project?</span>
              </motion.h2>
            </div>

            <div className="mt-10">
              <a
                href="mailto:hello@abdullah.com"
                className="inline-flex items-center gap-6 group"
              >
                <span className="text-2xl md:text-5xl font-medium text-white group-hover:text-primary transition-colors border-b-2 border-transparent group-hover:border-primary pb-2">
                  hello@abdullah.com
                </span>
                <span className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                  <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                </span>
              </a>
            </div>
          </div>

          {/* Right: Clean Info Structure */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:pl-12">
            <div className="mb-16">
              <h4 className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Location</h4>
              <p className="text-white/80 text-lg font-medium">Lagos, Nigeria <br /> <span className="text-white/40">Working Worldwide</span></p>
            </div>

            <div className="mb-16">
              <h4 className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Socials</h4>
              <ul className="flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a href={social.href} className="text-white/80 text-xl font-medium hover:text-primary transition-colors flex items-center gap-2 group w-max">
                      {social.name}
                      <ArrowUpRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Minimalist Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black font-black text-sm">A</div>
            <span className="text-white font-bold tracking-tighter uppercase text-sm">Abdullah.</span>
          </div>

          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Designed & Built locally.
          </p>

          <button
            onClick={scrollToTop}
            className="text-white/50 hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
