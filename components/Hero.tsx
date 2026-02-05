
import React from 'react';
import { useLanguage } from '../App';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const links = {
    spa: "https://www.ri-beauty-spa.com/",
    cars: "https://www.facebook.com/profile.php?id=61568426049252",
    realEstate: "https://a-real-estate.net/"
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900 scroll-mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1920"
          alt="Tokyo Cityscape"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif-jp text-4xl md:text-7xl font-bold text-white mb-6 leading-tight whitespace-pre-line animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t.hero.title}
        </h1>
        <p className="text-zinc-300 text-lg md:text-2xl tracking-[0.3em] font-light mb-12 uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          {t.hero.subtitle}
        </p>

        <div className="grid grid-cols-2 lg:flex items-center justify-center gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          {/* 1. Ri Beauty Spa - Style: Light (White) */}
          <a
            href={links.spa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 md:px-8 bg-white/90 border border-white/25 text-[#111111] font-bold tracking-wider transition-all duration-300 hover:bg-white hover:-translate-y-[1px] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-900 flex items-center justify-center group text-xs sm:text-sm"
          >
            {t.cta.spa}
            <ExternalLink className="ml-2 w-3 h-3 md:w-4 md:h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* 2. Next Used Car - Style: Gold Champagne (Increased Opacity) */}
          <a
            href={links.cars}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 md:px-8 bg-[#eab308]/[0.82] border border-[#eab308]/[0.95] text-[#111111] font-bold tracking-wider transition-all duration-300 hover:bg-[#eab308]/[0.85] hover:-translate-y-[1px] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#eab308]/[0.45] focus:ring-offset-2 focus:ring-offset-zinc-900 flex items-center justify-center group text-xs sm:text-sm"
          >
            {t.cta.cars}
            <ExternalLink className="ml-2 w-3 h-3 md:w-4 md:h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* 3. A-Real-Estate - Style: Teal Solid (Improved Text Contrast) */}
          <a
            href={links.realEstate}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 md:px-8 bg-[#14b8a6]/[0.78] border border-[#14b8a6]/[0.95] text-white font-bold tracking-wider transition-all duration-300 hover:bg-[#0d9488]/[0.88] hover:-translate-y-[1px] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/[0.45] focus:ring-offset-2 focus:ring-offset-zinc-900 flex items-center justify-center group text-xs sm:text-sm"
          >
            {t.cta.realEstate}
            <ExternalLink className="ml-2 w-3 h-3 md:w-4 md:h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* 4. Contact - Style: Primary Red */}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="col-span-2 lg:col-span-1 px-4 py-4 md:px-8 bg-red-600 text-white font-bold tracking-wider transition-all duration-300 hover:bg-red-500 hover:-translate-y-[1px] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-zinc-900 flex items-center justify-center group text-xs sm:text-sm"
          >
            {t.cta.contact}
            <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
