import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    content: 'Abdullah possesses a rare talent for balancing complex business requirements with elegant, human-centric design. He transformed our platform.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    rating: 5
  },
  {
    name: 'Marcus Chen',
    role: 'Product Manager at Innovate',
    content: 'The attention to detail in Abdullah\'s work is unmatched. He doesn\'t just design screens; he designs complete experiences that convert.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-40 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-32 gap-10">
          <div className="max-w-3xl text-center lg:text-left">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">// Client Voices</span>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">Kind Words From Partners.</h2>
          </div>
          <div className="hidden lg:block">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-dark overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" />
                </div>
              ))}
              <div className="w-16 h-16 rounded-full border-4 border-dark bg-primary flex items-center justify-center text-black font-black text-xs">
                50+
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/2 border border-white/5 p-12 rounded-[3rem] relative group hover:bg-white/5 transition-all duration-500"
            >
              <Quote className="absolute top-12 right-12 text-primary/10 group-hover:text-primary/20 transition-colors" size={80} />
              
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-white/80 text-2xl font-light italic leading-relaxed mb-12 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-500">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm font-black uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
