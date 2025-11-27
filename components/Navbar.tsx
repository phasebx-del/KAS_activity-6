import React, { useState } from 'react';
import { Language, TranslationData } from '../types';

interface NavbarProps {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, setLanguage, t }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const LangButton = ({ lang }: { lang: Language }) => (
    <button
      onClick={() => setLanguage(lang)}
      className={`text-sm font-semibold px-2 py-1 rounded transition-colors duration-200 ${
        currentLang === lang ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:text-blue-600'
      }`}
    >
      {lang.toUpperCase()}
    </button>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Main Logo Banner */}
          <img 
            src="header_logos.png" 
            alt="Partners: EU, KAS, Yuksalish, 100 Community" 
            className="h-10 sm:h-14 md:h-16 w-auto object-contain" 
          />

          {/* Desktop Language Switcher */}
          <div className="hidden md:flex space-x-1 text-gray-500 border-l pl-4 border-gray-200 h-8 items-center">
            <LangButton lang="ru" />
            <LangButton lang="uz" />
            <LangButton lang="en" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600 items-center">
          <a href="#about" className="hover:text-blue-700 transition">{t.nav_about}</a>
          <a href="#eligibility" className="hover:text-blue-700 transition">{t.nav_eligibility}</a>
          <a href="#timeline" className="hover:text-blue-700 transition">{t.nav_timeline}</a>
          <a href="#contact" className="hover:text-blue-700 transition">{t.nav_contacts}</a>
          
          <a 
            href="mailto:100community.uz@gmail.com?subject=Act.6/FSTP — Application" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            {t.btn_apply}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
           <div className="flex space-x-1 text-gray-500 border-r pr-4 border-gray-200">
            <LangButton lang="ru" />
            <LangButton lang="uz" />
            <LangButton lang="en" />
          </div>
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <nav className="flex flex-col p-4 space-y-4 text-center">
            <a href="#about" onClick={toggleMenu} className="text-gray-700 font-medium hover:text-blue-600">{t.nav_about}</a>
            <a href="#eligibility" onClick={toggleMenu} className="text-gray-700 font-medium hover:text-blue-600">{t.nav_eligibility}</a>
            <a href="#timeline" onClick={toggleMenu} className="text-gray-700 font-medium hover:text-blue-600">{t.nav_timeline}</a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-700 font-medium hover:text-blue-600">{t.nav_contacts}</a>
             <a 
                href="mailto:100community.uz@gmail.com?subject=Act.6/FSTP — Application" 
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-md w-full block"
            >
                {t.btn_apply}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;