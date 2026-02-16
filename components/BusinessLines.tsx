
import React, { useState } from 'react';
import { useLanguage } from '../App';
import { Sparkles, Car, Home, ExternalLink } from 'lucide-react';

const BusinessLines: React.FC = () => {
  const { t } = useLanguage();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const withBaseUrl = (assetPath: string) => {
    const baseUrl = ((import.meta as any).env?.BASE_URL as string | undefined) || '/';
    const normalized = assetPath.replace(/^\/+/, '');
    return `${baseUrl}${normalized}`;
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const services = [
    {
      icon: <Sparkles className="w-10 h-10 text-red-600" />,
      title: t.business.spa.title,
      description: t.business.spa.desc,
      image: withBaseUrl('image/ribeautyspa.jpg'),
      link: "https://www.ri-beauty-spa.com/"
    },
    {
      icon: <Car className="w-10 h-10 text-red-600" />,
      title: t.business.cars.title,
      description: t.business.cars.desc,
      image: withBaseUrl('image/car.jpg'),
      link: "https://next-used-car.com/"
    },
    {
      icon: <Home className="w-10 h-10 text-red-600" />,
      title: t.business.realEstate.title,
      description: t.business.realEstate.desc,
      image: withBaseUrl('image/realestate.jpg'),
      link: "https://a-real-estate.net/"
    }
  ];

  return (
    <section id="business" className="py-24 bg-zinc-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.business.title}</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 group flex flex-col h-full">
              <div className="h-64 overflow-hidden relative bg-zinc-100">
                {(!service.image || imageErrors[index]) ? (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 flex flex-col items-center justify-center space-y-2">
                    <div className="opacity-20">{service.icon}</div>
                    <span className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase">Akatsuki Tokyo</span>
                  </div>
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={() => handleImageError(index)}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                   {/* Fix: Cast icon to React.ReactElement<any> to allow className prop during cloneElement */}
                   {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-5 h-5 text-red-600" })}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-sm mb-8 flex-grow">
                  {service.description}
                </p>
                
                <a 
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-zinc-900 font-bold text-sm hover:text-red-600 transition-colors group/link"
                >
                  Learn more 
                  <ExternalLink size={14} className="ml-2 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLines;
