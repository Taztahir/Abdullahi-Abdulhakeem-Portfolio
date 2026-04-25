import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    size: 'col-span-2 row-span-2',
    year: '2024'
  },
  {
    id: 2,
    title: 'E-commerce App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    size: 'col-span-1 row-span-1',
    year: '2023'
  },
  {
    id: 3,
    title: 'SaaS Platform',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=2070&auto=format&fit=crop',
    size: 'col-span-1 row-span-2',
    year: '2024'
  },
  {
    id: 4,
    title: 'Health Tracker',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    size: 'col-span-1 row-span-1',
    year: '2023'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-40 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-8 block">// Selected Works</span>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">Crafting Digital Products.</h2>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed">A curated selection of projects where strategy meets execution to solve complex problems.</p>
          </div>
          <button className="group text-white/60 hover:text-white transition-colors font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
            View Archive <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`${project.size} group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{project.category} — {project.year}</span>
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-black shadow-lg">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimalist indicator for touch devices */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] text-white/70 uppercase tracking-widest">
                   {project.category}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
