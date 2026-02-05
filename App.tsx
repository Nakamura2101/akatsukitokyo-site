
import React, { useState, createContext, useContext } from 'react';
import { Language, TranslationSchema } from './types';
import { translations } from './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

interface LanguageContextType {
  lang: Language;
  t: TranslationSchema;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ja');

  const value = {
    lang,
    t: translations[lang],
    setLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
