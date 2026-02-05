
import React from 'react';
import { useLanguage } from '../App';

const CompanyProfile: React.FC = () => {
  const { t, lang } = useLanguage();

  const data = [
    { label: t.profile.country, value: lang === 'ja' ? '日本' : 'Japan' },
    { label: t.profile.companyName, value: 'AKATSUKI TOKYO 株式会社' },
    { label: t.profile.address, value: '〒213-0022 神奈川県川崎市高津区千年747-20' },
    { label: t.profile.established, value: lang === 'ja' ? '2017年11月30日' : 'November 30, 2017' },
    { label: t.profile.representative, value: lang === 'ja' ? '直樹 中村' : 'Naoki Nakamura' },
    { label: t.profile.capital, value: '5,000,000円' },
    { label: t.profile.employees, value: lang === 'ja' ? '15名' : '15 Employees' },
    { label: t.profile.phone, value: '044-573-5270' },
    { label: t.profile.bank, value: lang === 'ja' ? '三井住友銀行' : 'Sumitomo Mitsui Banking Corporation' },
    { label: t.profile.regNumber, value: '5020001124097' },
  ];

  return (
    <section id="company" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.profile.title}</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="border-t border-zinc-200">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row border-b border-zinc-200 py-6 md:items-center">
              <div className="w-full md:w-1/3 text-zinc-500 font-medium mb-1 md:mb-0">
                {item.label}
              </div>
              <div className="w-full md:w-2/3 text-zinc-900 font-semibold">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
