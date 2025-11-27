import React from 'react';
import { TranslationData } from '../types';

interface SectionProps {
  t: TranslationData;
}

export const GoalSection: React.FC<SectionProps> = ({ t }) => {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <i className="fas fa-bullseye text-blue-600 mr-3 text-xl bg-blue-100 p-2 rounded-lg"></i> 
        <span>{t.section_goal_title}</span>
      </h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <p className="text-gray-600 mb-6 text-lg">
          {t.section_goal_desc}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <i className="fas fa-users text-blue-500 mb-3 text-2xl"></i>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{t.goal_1_title}</h3>
            <p className="text-sm text-gray-600">{t.goal_1_desc}</p>
          </div>
          <div className="p-5 bg-green-50 rounded-xl border border-green-100 hover:shadow-md transition">
            <i className="fas fa-leaf text-green-500 mb-3 text-2xl"></i>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{t.goal_2_title}</h3>
            <p className="text-sm text-gray-600">{t.goal_2_desc}</p>
          </div>
          <div className="p-5 bg-purple-50 rounded-xl border border-purple-100 hover:shadow-md transition">
            <i className="fas fa-laptop-code text-purple-500 mb-3 text-2xl"></i>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{t.goal_3_title}</h3>
            <p className="text-sm text-gray-600">{t.goal_3_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const EligibilitySection: React.FC<SectionProps> = ({ t }) => {
  return (
    <section id="eligibility" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <i className="fas fa-check-circle text-blue-600 mr-3 text-xl bg-blue-100 p-2 rounded-lg"></i>
        <span>{t.section_eligibility_title}</span>
      </h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-bold text-lg mb-4 text-gray-800">{t.eligibility_who_title}</h3>
          <ul className="space-y-3">
             <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                <span className="text-gray-600">{t.eligibility_who_1}</span>
             </li>
             <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                <span className="text-gray-600">{t.eligibility_who_2}</span>
             </li>
             <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                <span className="text-gray-600">{t.eligibility_who_3}</span>
             </li>
          </ul>
        </div>
        <div className="p-6 bg-gray-50/80">
          <h3 className="font-bold text-lg mb-4 text-gray-800">{t.eligibility_geo_title}</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 flex items-center shadow-sm">
              <i className="fas fa-map-marker-alt text-red-500 mr-2"></i> {t.geo_karakalpakstan}
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 flex items-center shadow-sm">
              <i className="fas fa-map-marker-alt text-red-500 mr-2"></i> {t.geo_kashkadarya}
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 flex items-center shadow-sm">
              <i className="fas fa-map-marker-alt text-red-500 mr-2"></i> {t.geo_fergana}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TimelineSection: React.FC<SectionProps> = ({ t }) => {
  return (
    <section id="timeline" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <i className="fas fa-calendar-alt text-blue-600 mr-3 text-xl bg-blue-100 p-2 rounded-lg"></i>
        <span>{t.section_timeline_title}</span>
      </h2>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="relative border-l-2 border-blue-200 ml-3 space-y-10 pb-2">
            {/* Step 1 */}
            <div className="relative pl-8 group">
                <span className="absolute -left-[9px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-gray-300 group-hover:bg-blue-400 transition"></span>
                <div className="text-sm font-semibold text-gray-500 mb-1">{t.timeline_1_date}</div>
                <h4 className="font-bold text-gray-800 text-lg">{t.timeline_1_title}</h4>
                <p className="text-sm text-gray-600 mt-1">{t.timeline_1_desc}</p>
            </div>

            {/* Step 2 */}
            <div className="relative pl-8 group">
                <span className="absolute -left-[9px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-gray-300 group-hover:bg-blue-400 transition"></span>
                <div className="text-sm font-semibold text-gray-500 mb-1">{t.timeline_2_date}</div>
                <h4 className="font-bold text-gray-800 text-lg">{t.timeline_2_title}</h4>
            </div>

            {/* Step 3 - Active/Major */}
            <div className="relative pl-8 group">
                <span className="absolute -left-[11px] top-1.5 h-6 w-6 rounded-full border-4 border-white bg-blue-600 shadow-lg shadow-blue-200 animate-pulse"></span>
                <div className="text-sm text-blue-600 font-bold mb-1">{t.timeline_3_date}</div>
                <h4 className="font-bold text-xl text-gray-900">{t.timeline_3_title}</h4>
                <p className="text-sm text-gray-600 mt-1">{t.timeline_3_desc}</p>
            </div>

            {/* Step 4 */}
            <div className="relative pl-8 group">
                <span className="absolute -left-[9px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-green-500"></span>
                <div className="text-sm font-semibold text-gray-500 mb-1">{t.timeline_4_date}</div>
                <h4 className="font-bold text-gray-800 text-lg">{t.timeline_4_title}</h4>
                <p className="text-sm text-gray-600 mt-1">{t.timeline_4_desc}</p>
            </div>
        </div>
      </div>
    </section>
  );
};