import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowRight, ArrowLeft } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    content: 'Abdullah possesses a rare talent for balancing complex business requirements with elegant, human-centric design. He transformed our platform completely.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    color: 'from-[#1a1a1a] to-[#0a0a0a]'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Product Manager at Innovate',
    content: 'The attention to detail in his work is unmatched. He doesn\'t just design screens; he designs complete experiences that convert and retain users seamlessly.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    color: 'from-[#0A1105] to-[#050505]'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Founder at Growthify',
    content: 'Working with Abdullah was a game-changer. His ability to understand our users and craft an interface that simply makes sense has driven our engagement up by 200%.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    color: 'from-[#111111] to-[#000000]'
  }
];

const Testimonials = () => {
  const [cards, setCards] = useState(testimonials);

  const nextCard = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const firstCard = newCards.shift();
      newCards.push(firstCard);
      return newCards;
    });
  };

  const prevCard = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const lastCard = newCards.pop();
      newCards.unshift(lastCard);
      return newCards;
    });
  };

  return (
    <section id="testimonials" className="py-10 bg-[#030303] relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/10 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Client Success</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter"
          >
            Don't just take <br /> <span className="text-transparent outline-text opacity-50" style={{ WebkitTextStroke: '2px white' }}>my word for it.</span>
          </motion.h2>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center perspective-[2000px]">
          <AnimatePresence mode="popLayout">
            {cards.map((testimonial, index) => {
              // Calculate stack styles
              const isFront = index === 0;
              const zIndex = cards.length - index;
              const yOffset = index * 25; // Push cards down
              const scale = 1 - index * 0.05; // Shrink cards slightly
              const opacity = index < 3 ? 1 - index * 0.2 : 0; // Fade out deep cards

              return (
                <motion.div
                  key={testimonial.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 100 }}
                  animate={{
                    opacity: opacity,
                    scale: scale,
                    y: yOffset,
                    zIndex: zIndex,
                    rotateX: index * 5 // Tilt back
                  }}
                  exit={{
                    x: -800, // Fly off screen left
                    opacity: 0,
                    scale: 0.8,
                    rotate: -20, // Spin while exiting
                    transition: { duration: 0.5, ease: "anticipate" }
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    mass: 1
                  }}
                  className={`absolute w-full h-full md:h-auto md:min-h-[400px] rounded-[3rem] p-10 md:p-16 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-br ${testimonial.color} cursor-grab active:cursor-grabbing backdrop-blur-xl`}
                  drag={isFront ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000 || offset.x < -150) {
                      nextCard();
                    } else if (swipe > 10000 || offset.x > 150) {
                      prevCard();
                    }
                  }}
                >
                  <Quote className="absolute top-10 right-10 md:top-16 md:right-16 text-white/5" size={120} />

                  <div className="flex flex-col h-full justify-between relative z-10">
                    <p className="text-white/90 text-xl md:text-4xl font-medium tracking-tight leading-[1.3] max-w-3xl mb-12">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20">
                          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover grayscale" />
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-black text-white">{testimonial.name}</h4>
                          <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Floating Next Button only visible on front card */}
                      {isFront && (
                        <button
                          onClick={nextCard}
                          className="hidden md:flex w-16 h-16 rounded-full bg-white text-black items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                        >
                          <ArrowRight size={24} />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile controls */}
        <div className="flex justify-center items-center gap-6 mt-16 md:hidden relative z-20">
          <button
            onClick={prevCard}
            className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white active:bg-primary active:text-black transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="text-white/40 font-bold text-xs uppercase tracking-widest">Swipe or Click</span>
          <button
            onClick={nextCard}
            className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white active:bg-primary active:text-black transition-all"
          >
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
