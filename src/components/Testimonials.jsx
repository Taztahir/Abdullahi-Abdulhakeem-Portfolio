import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Leslie Alexander',
    role: 'CEO, Software Company',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    rating: 5.0
  },
  {
    id: 2,
    name: 'Dianne Russell',
    role: 'CEO, Event Booking App',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    rating: 5.0
  },
  {
    id: 3,
    name: 'Kathryn Murphy',
    role: 'CEO, Coffee Shop App',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
    rating: 5.0
  },
  {
    id: 4,
    name: 'Robert Fox',
    role: 'CEO, Pet Food App',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    rating: 5.0
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-[#030303] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] z-0">
        <span className="text-[12rem] font-black tracking-tighter uppercase leading-none whitespace-nowrap text-gray-900 dark:text-white">CLIENT TESTIMONIALS</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
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
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">Client Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Testimonials that <br /> <span className="text-primary">Speaks to My Results</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 md:p-10 relative group"
            >
              {/* Left Green Bar */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-primary rounded-r-full" />

              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-start">
                  <div className="flex gap-6 items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 dark:border-white/10 p-1">
                      <img src={item.avatar} alt={item.name} className="w-full h-full object-cover rounded-full grayscale" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.name}</h4>
                      <p className="text-gray-500 dark:text-white/40 text-sm mb-3">{item.role}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="#00FF00" className="text-primary" />
                        ))}
                        <span className="text-gray-600 dark:text-white/60 text-xs font-bold ml-2">{item.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Quote size={20} fill="currentColor" />
                  </div>
                </div>

                <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
