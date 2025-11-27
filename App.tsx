import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { GoalSection, EligibilitySection, TimelineSection } from './components/Sections';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('ru');

  // Load language from local storage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('app-lang') as Language;
    if (savedLang && ['ru', 'uz', 'en'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('app-lang', lang);
  };

  const t = TRANSLATIONS[currentLang];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentLang={currentLang} setLanguage={handleSetLanguage} t={t} />
      
      <main className="flex-grow">
        <Hero t={t} />

        <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            <GoalSection t={t} />
            <EligibilitySection t={t} />
            <TimelineSection t={t} />
          </div>

          {/* Right Column: Sidebar */}
          <Sidebar t={t} />
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;