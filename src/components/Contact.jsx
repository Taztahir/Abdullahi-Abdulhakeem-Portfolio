import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 69.44 69.44 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 69.44 69.44 0 0 1-15 0 2 2 0 0 1-2-2Z" /><path d="m9.99 15 5-3-5-3z" /></svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white dark:bg-[#030303] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] z-0">
        <span className="text-[12rem] font-black tracking-tighter uppercase leading-none whitespace-nowrap text-gray-900 dark:text-white">Contact Me</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 relative px-6 py-1"
          >
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">Contact Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Let's Talk for Your <br /> <span className="text-primary">Next Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form action="https://formspree.io/f/your-id" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-gray-900 dark:text-white">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ex. John Doe"
                  required
                  className="bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-gray-900 dark:text-white">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                  className="bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-gray-900 dark:text-white">Phone *</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-gray-900 dark:text-white">I'm Interested in *</label>
                <select name="interest" className="bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                  <option value="">Select</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="web">Web Design</option>
                  <option value="app">App Design</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[13px] font-bold text-gray-900 dark:text-white">Your Message *</label>
                <textarea
                  name="message"
                  placeholder="Enter here..."
                  rows="6"
                  required
                  className="bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="bg-primary text-black px-10 py-4 rounded-full font-bold text-[14px] hover:scale-105 transition-all shadow-lg shadow-primary/20">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-5">
            <div className="bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-[2rem] overflow-hidden relative group shadow-2xl transition-colors duration-500">
              {/* Checkerboard Pattern */}
              <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(45deg, #000000 25%, transparent 25%), linear-gradient(-45deg, #000000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000000 75%), linear-gradient(-45deg, transparent 75%, #000000 75%)', backgroundSize: '60px 60px' }} />

              <div className="md:p-10 max-md:py-10 max-md:px-4 relative z-10">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-primary font-bold text-lg">Location</h4>
                    <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                      Lagos, Nigeria<br />
                      Working Worldwide
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-primary font-bold text-lg">Contact</h4>
                    <div className="flex flex-col gap-2">
                      <p className="text-gray-600 dark:text-white/60 max-md:text-sm">Email : abdullahiabdulhakeem234@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-primary font-bold text-lg">Time</h4>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between max-w-[280px]">
                        <span className="text-gray-600 dark:text-white/60">Monday - Friday</span>
                        <span className="text-gray-600 dark:text-white/60">: 10:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between max-w-[280px]">
                        <span className="text-gray-600 dark:text-white/60">Saturday - Sunday</span>
                        <span className="text-gray-600 dark:text-white/60">: 11:00 - 18:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Section */}
              <div className="bg-primary p-8 relative overflow-hidden">
                {/* Wavy Pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wavy-lines.png')" }} />

                <h4 className="text-black font-black text-lg mb-6 relative z-10">Stay Connected</h4>
                <div className="flex gap-4 relative z-10">
                  {[
                    { icon: <FacebookIcon />, href: 'https://www.facebook.com/share/1XXJA1zSLQ/', name: 'Facebook' },
                    { icon: <InstagramIcon />, href: 'https://www.instagram.com/abdullahi_thecreator?igsh=OTluaXVzMG1jZWUw', name: 'Instagram' },
                    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/abdullahi-abdulhakeem-92b6182a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', name: 'LinkedIn' },
                    { icon: <Mail size={20} />, href: 'mailto:abdullahiabdulhakeem234@gmail.com', name: 'Email' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
