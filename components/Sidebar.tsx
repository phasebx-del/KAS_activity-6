import React from 'react';
import { TranslationData } from '../types';

interface SidebarProps {
  t: TranslationData;
}

const Sidebar: React.FC<SidebarProps> = ({ t }) => {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        
        {/* Main Action Box */}
        <div id="apply" className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            {t.sidebar_apply_title}
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            {t.sidebar_apply_desc}
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100">
            <div className="text-xs text-gray-500 uppercase mb-1 font-semibold tracking-wide">{t.sidebar_sum_label}</div>
            <div className="font-bold text-gray-900 text-lg">{t.sidebar_sum_value}</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
            <div className="text-xs text-gray-500 uppercase mb-1 font-semibold tracking-wide">{t.sidebar_duration_label}</div>
            <div className="font-bold text-gray-900 text-lg">{t.sidebar_duration_value}</div>
          </div>

          <a href="mailto:100community.uz@gmail.com?subject=Act.6/FSTP — Application" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-4 rounded-lg transition transform hover:-translate-y-0.5 shadow-md mb-4 flex items-center justify-center gap-2">
            <i className="far fa-envelope"></i> <span>{t.btn_send_apply}</span>
          </a>
          
          <div className="text-xs text-center text-gray-500">
            <span className="block mb-1">{t.sidebar_subject_hint}</span>
            <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono text-[10px] break-all border border-gray-200 block">
              Act.6/FSTP — Application — &lt;Org&gt;
            </code>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">{t.sidebar_docs_title}</h3>
          <a href="https://docs.google.com/document/d/1feqAQRnIB8jjTln8T8AYWd-O9rXdvL9V/edit?rtpof=true&sd=true&tab=t.0" target="_blank" rel="noreferrer" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition group border border-transparent hover:border-blue-100">
            <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <i className="far fa-file-word text-lg"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 group-hover:text-blue-700">{t.sidebar_docs_guide}</div>
              <div className="text-xs text-gray-500 group-hover:text-blue-500">{t.sidebar_docs_open} <i className="fas fa-external-link-alt ml-1 text-[10px]"></i></div>
            </div>
          </a>
        </div>

        {/* Contact & Socials */}
        <div id="contact" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">{t.sidebar_contact_title}</h3>
          <p className="text-sm text-gray-600 mb-5 flex items-center">
            <i className="far fa-envelope text-gray-400 mr-2"></i>
            <a href="mailto:100community.uz@gmail.com" className="text-blue-600 hover:underline font-medium">100community.uz@gmail.com</a>
          </p>
          <div className="flex justify-between items-center px-2">
            <a href="https://t.me/youthcommunity_uz" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl transition transform hover:scale-110"><i className="fab fa-telegram"></i></a>
            <a href="https://www.instagram.com/100community.uz/" target="_blank" rel="noreferrer" className="text-pink-500 hover:text-pink-700 text-2xl transition transform hover:scale-110"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/100CommunityKarakalpakstan/?rdid=1Fl471RLSMQemB1b" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl transition transform hover:scale-110"><i className="fab fa-facebook"></i></a>
            <a href="https://www.youtube.com/@100Community-uz" target="_blank" rel="noreferrer" className="text-red-600 hover:text-red-700 text-2xl transition transform hover:scale-110"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;