import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import ProjectImg1 from '../assets/Project.jpg'
import ProjectImg2 from '../assets/Project2.jpg'
import ProjectImg3 from '../assets/Project3.jpg'
import ProjectImg4 from '../assets/Project4.jpg'
import ProjectImg5 from '../assets/Project5.jpg'
import ProjectImg6 from '../assets/Project6.jpg'
import ProjectImg7 from '../assets/Projectweb.png'
import ProjectImg8 from '../assets/ProjectWeb2.png'
import ProjectImg9 from '../assets/ProjectWeb3.png'
import ProjectImg10 from '../assets/ProjectWeb4.png'


const projects = [
  {
    id: 1,
    title: 'Ceddr Infrastructure',
    category: 'Product Design',
    image: ProjectImg7,
    link: 'https://ceddrinfra.com/'
  },
  {
    id: 2,
    title: 'Lucem Maritime',
    category: 'Product Design',
    image: ProjectImg8,
    link: 'https://www.lucemglobal.com/'
  },
  {
    id: 3,
    title: 'Adave Studios',
    category: 'Product Design',
    image: ProjectImg9,
    link: 'https://adave-studio.vercel.app/'
  },
  {
    id: 4,
    title: 'Tech on demand',
    category: 'Product Design',
    image: ProjectImg10,
    link: 'https://techondemandltd.com/'
  },
  // {
  //   id: 5,
  //   title: 'Port Harcourt SaaS',
  //   category: 'UI/UX Design',
  //   image: ProjectImg5,
  //   link: '#'
  // },
  // {
  //   id: 6,
  //   title: 'Kano Digital Bank',
  //   category: 'FinTech',
  //   image: ProjectImg6,
  //   link: '#'
  // }
];

const galleryItems = [
  { id: 1, image: ProjectImg1 },
  { id: 2, image: ProjectImg2 },
  { id: 3, image: ProjectImg3 },
  { id: 4, image: ProjectImg4 },
  { id: 5, image: ProjectImg5 },
  { id: 6, image: ProjectImg6 },
];

const MarqueeRow = ({ items, direction = "left", speed = 50 }) => {
  return (
    <div className="flex w-full overflow-hidden py-10">
      <motion.div
        className="flex gap-6 md:gap-8 will-change-transform"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((project, idx) => (
          <div
            key={`${project.id}-${idx}`}
            className="relative w-[350px] md:w-[800px] aspect-[14/9] max-md:aspect-[8/10] rounded-[1rem] md:rounded-[4rem] overflow-hidden shrink-0 border border-gray-100 dark:border-white/5 shadow-2xl transition-all duration-700"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-[#030303] relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dashed border-primary/40 bg-primary/5 text-primary mb-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider">Portfolio Gallery</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Selected <span className="text-primary">Works & Projects</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-white/40 max-w-sm font-medium text-lg leading-relaxed"
          >
            A collection of digital products I've crafted for startups and enterprises in Nigeria and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] bg-gray-100 dark:bg-[#111111] rounded-[10px] overflow-hidden">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-10 md:p-14">
                  <div className="flex justify-end">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black cursor-pointer"
                    >
                      <ArrowUpRight size={28} />
                    </motion.div>
                  </div>

                  <div>
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">{project.category}</span>
                    <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-8">{project.title}</h3>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-primary transition-colors cursor-pointer"
                    >
                      Visit Website <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Info (Visible when not hovering on mobile) */}
              <div className="mt-6 md:hidden flex justify-between items-end px-4">
                <div>
                  <span className="text-primary font-bold text-[10px] uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-gray-900 dark:text-white text-xl font-bold mt-1">{project.title}</h3>
                </div>
                <a href={project.link} className="text-primary font-bold text-sm flex items-center gap-1">
                  View <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Visual Marquee Gallery */}
      <div className="mt-20 border-t border-gray-100 dark:border-white/5 pt-10">
        <div className="container mx-auto px-6 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-4">
            Visual <span className="text-primary italic">Exploration.</span>
            <div className="h-[1px] flex-grow bg-gray-100 dark:bg-white/10" />
          </h3>
        </div>
        <MarqueeRow items={galleryItems} direction="left" speed={60} />
      </div>
    </section>
  );
};

export default Projects;
