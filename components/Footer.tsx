
import React from 'react';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-lg tracking-wider">AKATSUKI TOKYO</span>
            <span className="text-xs tracking-[0.2em] mt-1 uppercase text-zinc-500">Value Creation Company</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-white transition-colors">{t.nav.home}</a>
            <a href="#business" onClick={(e) => handleNavClick(e, 'business')} className="hover:text-white transition-colors">{t.nav.business}</a>
            <a href="#company" onClick={(e) => handleNavClick(e, 'company')} className="hover:text-white transition-colors">{t.nav.profile}</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors">{t.nav.contact}</a>
          </div>

          <div className="text-xs text-zinc-500">
            &copy; {currentYear} AKATSUKI TOKYO Co., Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
