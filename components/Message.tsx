
import React from 'react';
import { useLanguage } from '../App';

const Message: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="message" className="py-24 bg-zinc-900 text-white relative overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.message.title}</h2>
            <p className="font-serif-jp text-2xl md:text-3xl font-bold mb-10 text-red-500 italic">
              {t.message.vision}
            </p>
          </div>
          <div className="space-y-6 text-zinc-300 leading-relaxed text-lg font-light">
            <p>{t.message.body1}</p>
            <p>{t.message.body2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
