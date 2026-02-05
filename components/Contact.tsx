
import React from 'react';
import { useLanguage } from '../App';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-zinc-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.contact.title}</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-6 text-zinc-600">{t.contact.getInTouch}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-6 p-8 bg-white rounded-lg shadow-sm">
              <Phone className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1 text-zinc-500 text-sm uppercase tracking-wider">{t.profile.phone}</h4>
                <a href="tel:044-573-5270" className="text-2xl font-bold text-zinc-900 hover:text-red-600 transition-colors">044-573-5270</a>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 bg-white rounded-lg shadow-sm">
              <Mail className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1 text-zinc-500 text-sm uppercase tracking-wider">Email</h4>
                <a href="mailto:info@akatsukitokyo.net" className="text-xl font-bold text-zinc-900 hover:text-red-600 transition-colors">
                  info@akatsukitokyo.net
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 bg-white rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1 text-zinc-500 text-sm uppercase tracking-wider">{t.profile.address}</h4>
                <p className="text-zinc-700 font-semibold">〒213-0022 神奈川県川崎市高津区千年747-20</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=神奈川県川崎市高津区千年747-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-6 py-2 bg-red-600 text-white rounded font-bold hover:bg-red-700 transition-colors shadow-md"
                >
                  {t.contact.mapBtn} <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] bg-zinc-200 rounded-lg overflow-hidden shadow-inner relative grayscale hover:grayscale-0 transition-all duration-500 group">
             {/* Map placeholder with better visual */}
             <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1526304640581-d334cd0bf45e?auto=format&fit=crop&q=80&w=1000")'}}></div>
             <div className="absolute inset-0 bg-zinc-900/40 flex flex-col items-center justify-center p-8 text-center text-white backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
               <MapPin size={48} className="mb-4 text-red-500 drop-shadow-lg" />
               <p className="text-lg font-bold drop-shadow-md">Kawasaki, Kanagawa, Japan</p>
               <a
                  href="https://www.google.com/maps/search/?api=1&query=神奈川県川崎市高津区千年747-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-8 py-3 bg-white text-zinc-900 font-bold rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-105"
               >
                 View Live Map
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
