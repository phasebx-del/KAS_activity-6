import React from 'react';
import { TranslationData } from '../types';

interface HeroProps {
  t: TranslationData;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-500 text-white py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto drop-shadow-md">
          {t.hero_title}
        </h1>

        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
          {t.hero_subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-xl hover:bg-white/20 transition duration-300">
            <div className="text-3xl font-bold mb-1">€ 7,000</div>
            <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">{t.hero_max_amount}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-xl hover:bg-white/20 transition duration-300">
            <div className="text-3xl font-bold mb-1">{t.hero_deadline_date}</div>
            <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">{t.hero_deadline_label}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;