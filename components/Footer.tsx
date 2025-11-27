import React from 'react';
import { TranslationData } from '../types';

interface FooterProps {
  t: TranslationData;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10 mt-12 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
             <i className="fas fa-flag-checkered text-2xl mb-2 text-yellow-500 block"></i>
        </div>
        <p className="mb-3 text-sm font-medium text-gray-300">
            {t.footer_eu}
        </p>
        <div className="w-16 h-1 bg-gray-600 mx-auto my-4 rounded"></div>
        <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Konrad Adenauer Stiftung & Yuksalish. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;