import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-darker text-white selection:bg-primary selection:text-black relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1]" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Tools />
        <Testimonials />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
