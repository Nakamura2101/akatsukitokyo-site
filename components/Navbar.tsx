
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const { lang, t, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, id: "home" },
    { name: t.nav.business, id: "business" },
    { name: t.nav.message, id: "message" },
    { name: t.nav.profile, id: "company" },
    { name: t.nav.contact, id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="flex items-center group shrink-0"
            aria-label="AKATSUKI TOKYO"
          >
            <span
              className={`inline-flex items-center rounded-md px-2 py-1 transition-colors ${
                scrolled ? 'bg-transparent' : 'bg-white/70 backdrop-blur-sm'
              }`}
            >
              <img
                src="/image/LOGO-ORIGINAL.jpg"
                alt="AKATSUKI TOKYO"
                className="h-8 w-auto object-contain"
                loading="eager"
              />
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium hover:text-red-600 transition-colors ${scrolled ? 'text-zinc-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === 'ja' ? 'en' : 'ja')}
              className={`flex items-center space-x-1 text-xs font-bold px-3 py-1 border rounded-full transition-all ${
                scrolled ? 'border-zinc-300 text-zinc-700 hover:border-zinc-900' : 'border-white/30 text-white hover:border-white'
              }`}
            >
              <Globe size={14} />
              <span>{lang === 'ja' ? 'EN' : 'JP'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={() => setLang(lang === 'ja' ? 'en' : 'ja')}
              className={`p-2 transition-colors ${scrolled ? 'text-zinc-700' : 'text-zinc-900'}`}
            >
              <Globe size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-zinc-900' : 'text-zinc-900'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center`}>
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-2xl font-light text-zinc-800 hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { setLang(lang === 'ja' ? 'en' : 'ja'); setIsOpen(false); }}
            className="flex items-center space-x-2 text-zinc-500 font-bold border border-zinc-200 px-6 py-2 rounded-full"
          >
            <Globe size={18} />
            <span>{lang === 'ja' ? 'Switch to English' : '日本語に切り替え'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
