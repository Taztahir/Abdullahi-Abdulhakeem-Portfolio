import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 69.44 69.44 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 69.44 69.44 0 0 1-15 0 2 2 0 0 1-2-2Z" /><path d="m9.99 15 5-3-5-3z" /></svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#030303] text-gray-900 dark:text-white pt-20 relative overflow-hidden transition-colors duration-500">

      {/* Ticker Tape */}
      <div className="w-full relative bg-primary py-5 overflow-hidden border-b border-primary mb-24">
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

      <div className="container mx-auto px-6 mb-24">
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20 border-b border-gray-100 dark:border-white/10 pb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Let's <span className="text-primary">Connect</span> there
          </h2>
          <a 
            href="#contact"
            className="bg-primary text-black px-10 py-4 rounded-full font-bold text-[14px] hover:scale-105 transition-all shadow-lg shadow-primary/20"
          >
            Hire Me Now
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-black text-lg">A</div>
              <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Abdullahi<span className="text-primary">.</span></span>
            </div>
            <p className="text-gray-500 dark:text-white/40 text-sm leading-relaxed mb-10 max-w-sm">
              Creative UI/UX Designer dedicated to building beautiful, functional, and user-centric digital experiences. Let's create something amazing together.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FacebookIcon />, href: 'https://www.facebook.com/share/1XXJA1zSLQ/' },
                { icon: <InstagramIcon />, href: 'https://www.instagram.com/abdullahi_thecreator?igsh=OTluaXVzMG1jZWUw' },
                { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/abdullahi-abdulhakeem-92b6182a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="text-primary font-bold text-lg mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4 text-gray-500 dark:text-white/60 text-sm font-medium">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#blogs" className="hover:text-primary transition-colors">Blogs</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-primary font-bold text-lg mb-8">Contact</h4>
            <ul className="flex flex-col gap-4 text-gray-500 dark:text-white/60 text-sm font-medium">
              <li>Email : abdullahiabdulhakeem234@gmail.com</li>
              <li className="mt-2 leading-relaxed">
                Lagos, Nigeria<br />
                Working Worldwide
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-primary font-bold text-lg mb-8">Newsletter</h4>
            <p className="text-gray-400 dark:text-white/40 text-xs mb-4">Get the latest design insights and updates.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-black hover:scale-105 transition-transform">
                <Send size={18} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white dark:bg-white relative overflow-hidden py-6">
        {/* Wavy Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wavy-lines.png')" }} />

        <div className="container mx-auto px-6 flex flex-col md:row justify-center items-center gap-4 relative z-10 text-black font-bold text-xs md:flex-row">
          <span>Copyright © {new Date().getFullYear()} Abdullahi. All Rights Reserved.</span>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
