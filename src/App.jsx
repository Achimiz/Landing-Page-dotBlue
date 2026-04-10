import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ArrowDown, ExternalLink, Star, Plus, Minus } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light font-sans selection:bg-brand-gray selection:text-brand-dark">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/Group 81.png" alt="Logo" className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
            <span className="text-2xl font-bold tracking-tight"></span>
          </a>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-gray">
            <a href="#services" className="hover:text-brand-light transition-colors">Services</a>
            <a href="#projects" className="hover:text-brand-light transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-brand-light transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-brand-light transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">

            <motion.a 
              href="https://ai.psu.blue/login"
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-brand-light text-brand-dark rounded-full font-bold text-sm hover:!bg-blue-400 hover:!text-white transition-colors cursor-pointer"
            >
              Give it a try!
            </motion.a>
          </div>
          
          <button 
            className="md:hidden text-brand-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
        {/* Background FX Setup */}
        <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.img 
              src="/images/hero_bg.png" 
              alt="" 
              className="w-full h-full object-cover rounded-[100px] blur-3xl relative z-0" 
              animate={{
                scale: [1.2, 1.6, 1.2],
                rotate: [0, 10, -10, 0],
                x: ['-2%', '2%', '-2%']
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-0 bg-cyan-400 mix-blend-multiply z-10 rounded-[100px] blur-3xl opacity-80"></div>
          </div>
        </div>

        {/* Shooting Stars Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%]" style={{ transform: 'translate(-50%, -50%) rotate(155deg)' }}>
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="shooting-star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 border border-brand-border rounded-full px-4 py-2 mb-8 bg-brand-dark/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse"></span>
            <span className="text-sm font-medium text-brand-gray">Crafting Unique Brand Identities</span>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-tight mb-8">
              Branding that you need <span className="text-brand-gray italic font-light">Indeed</span>
            </h1>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-brand-gray mb-12 max-w-2xl mx-auto">
            Helping modern companies craft scalable aesthetics, striking visuals, and unforgettable identities.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-light text-brand-dark rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
              Get Started Now <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-border text-brand-light rounded-full font-medium hover:bg-brand-border transition-colors">
              See Projects
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-brand-gray text-sm"
        >
          <span className="mb-2">Scroll down to see projects</span>
          <ArrowDown size={20} className="animate-bounce" />
        </motion.div>
      </section>

      {/* Brands Row */}
      <section className="py-12 border-y border-brand-border overflow-hidden bg-brand-dark flex">
        <div className="flex space-x-16 items-center animate-scroll whitespace-nowrap opacity-50 px-8">
          {['OASIS', 'ASTERISK', 'COOKS', 'OPAL', 'DUNE', 'OASIS', 'ASTERISK', 'COOKS'].map((brand, i) => (
            <span key={i} className="text-2xl font-bold tracking-widest text-brand-gray">{brand}</span>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="group relative rounded-3xl overflow-hidden bg-[#0F172A] aspect-[4/5] md:aspect-square flex flex-col"
            >
              <div className="flex-1 p-8 pb-0">
                <img src="/images/project_image.png" alt="Project" className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 opacity-80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="w-full flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xl font-semibold">Project Title {i}</span>
                  <button className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/20 transition">
                    View Casestudy <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 flex flex-col items-center border-t border-brand-border pt-12">
          <a href="#" className="text-brand-gray underline underline-offset-4 hover:text-brand-light transition mb-6">All Projects</a>
          <button className="px-8 py-3 bg-brand-light text-brand-dark rounded-full font-medium hover:bg-gray-200 transition">
            Book a Free Call
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 px-6 md:px-12 bg-[#020617]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="flex-1 space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-semibold">Meet Meily</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-brand-gray leading-relaxed">
              I am a multidisciplinary designer focusing on building memorable brands and functional products. With over a decade of experience, I blend aesthetics with strategy.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {['Product Design', 'Branding', 'Figma', 'Art Direction'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-brand-border text-sm font-medium">#{skill}</span>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6 pt-6 border-t border-brand-border/50">
              <h3 className="text-xl font-medium">Experience</h3>
              {[
                { role: 'Lead Designer', company: 'Studio XYZ', years: '2020—Present' },
                { role: 'Brand Strategist', company: 'Creative Co', years: '2016—2020' },
              ].map((exp, i) => (
                <div key={i} className="flex justify-between items-center text-brand-gray">
                  <div>
                    <p className="font-medium text-brand-light">{exp.role}</p>
                    <p className="text-sm">{exp.company}</p>
                  </div>
                  <span>{exp.years}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <img src="/images/portrait.png" alt="Meily" className="w-full h-auto rounded-[40px] grayscale hover:grayscale-0 transition duration-500 object-cover aspect-[4/5]" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto space-y-8">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-semibold">Services</motion.h2>
          <motion.p variants={fadeInUp} className="text-brand-gray text-lg">
            Elevating your business through comprehensive design solutions tailored to your unique market positioning.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-8">
            {['Brand Identity', 'Web Design', 'Packaging', 'Naming'].map(service => (
              <div key={service} className="px-6 py-4 rounded-full border border-brand-border bg-brand-dark/50 backdrop-blur-md hover:bg-brand-border transition cursor-pointer">
                {service}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 md:px-12 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-semibold">Client Reviews</h2>
            <div className="flex gap-8 text-center md:text-left">
              <div>
                <p className="text-3xl font-bold">180+</p>
                <p className="text-brand-gray text-sm">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold">96%</p>
                <p className="text-brand-gray text-sm">Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold">15+</p>
                <p className="text-brand-gray text-sm">Years Exp</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-brand-border bg-brand-dark"
              >
                <div className="flex gap-1 mb-6 text-brand-light">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg md:text-xl text-brand-gray mb-8 leading-relaxed">
                  "Working with them was incredible. They truly understood our vision and translated it perfectly into our new branding. It feels right and modern."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-border flex items-center justify-center font-bold">C{i}</div>
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-sm text-brand-gray">Founder, Startup {i}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">Answers</h2>
        <div className="space-y-4">
          {[
            { q: "What design tools do you use?", a: "I primary use Figma for UI/UX and Web design, and Adobe Creative Cloud (Illustrator, Photoshop) for branding and assets." },
            { q: "How long does a typical project take?", a: "A standard branding project takes 4-6 weeks, while a full website design can take 6-8 weeks depending on complexity." },
            { q: "Do you offer development services?", a: "Yes, I collaborate with talented developers or use no-code tools like Framer and Webflow to bring designs to life." }
          ].map((faq, i) => (
            <div key={i} className="border border-brand-border rounded-2xl overflow-hidden bg-[#020617]">
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full flex justify-between items-center p-6 text-left font-medium text-lg hover:bg-brand-border/30 transition"
              >
                {faq.q}
                {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-brand-gray leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 px-6 border-t border-brand-border text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-semibold max-w-3xl mx-auto leading-tight mb-12">
          Curious about what we can create together?
        </h2>
        
        <div className="inline-flex items-center space-x-2 border border-brand-border rounded-full px-5 py-2 mb-12 bg-brand-border/30">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium">Available for Work</span>
        </div>

        <button className="px-10 py-5 bg-brand-light text-brand-dark rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors mb-24">
          Book a Free Call
        </button>

        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-brand-gray border-t border-brand-border pt-8">
          <p>© 2026 Portfolite. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-light transition">X (Twitter)</a>
            <a href="#" className="hover:text-brand-light transition">Behance</a>
            <a href="#" className="hover:text-brand-light transition">Dribbble</a>
          </div>
        </div>
      </footer>

      {/* Global CSS for marquee animation and shooting stars */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes tail {
          0% { width: 0; }
          30% { width: 150px; }
          100% { width: 0; }
        }
        @keyframes shooting {
          0% { transform: translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(800px); opacity: 0; }
        }
        @keyframes shining {
          0% { width: 0; opacity: 0; }
          50% { width: 30px; opacity: 1; }
          100% { width: 0; opacity: 0; }
        }
        .shooting-star {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
          border-radius: 50px;
          filter: drop-shadow(0 0 6px rgba(255, 255, 255, 1));
          animation: tail 3s ease-in-out infinite, shooting 3s ease-in-out infinite;
        }
        .shooting-star::before {
          content: '';
          position: absolute;
          top: calc(50% - 1px);
          right: 0;
          height: 2px;
          background: linear-gradient(-45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
          transform: translateX(50%) rotateZ(45deg);
          border-radius: 100%;
          animation: shining 3s ease-in-out infinite;
        }
        .shooting-star::after {
          content: '';
          position: absolute;
          top: calc(50% - 1px);
          right: 0;
          height: 2px;
          background: linear-gradient(-45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
          transform: translateX(50%) rotateZ(-45deg);
          border-radius: 100%;
          animation: shining 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
