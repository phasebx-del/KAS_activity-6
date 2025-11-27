export type Language = 'ru' | 'uz' | 'en';

export interface TranslationData {
  nav_about: string;
  nav_eligibility: string;
  nav_timeline: string;
  nav_contacts: string;
  btn_apply: string;
  hero_title: string;
  hero_subtitle: string;
  hero_max_amount: string;
  hero_deadline_date: string;
  hero_deadline_label: string;
  section_goal_title: string;
  section_goal_desc: string;
  goal_1_title: string;
  goal_1_desc: string;
  goal_2_title: string;
  goal_2_desc: string;
  goal_3_title: string;
  goal_3_desc: string;
  section_eligibility_title: string;
  eligibility_who_title: string;
  eligibility_who_1: string;
  eligibility_who_2: string;
  eligibility_who_3: string;
  eligibility_geo_title: string;
  geo_karakalpakstan: string;
  geo_kashkadarya: string;
  geo_fergana: string;
  section_timeline_title: string;
  timeline_1_date: string;
  timeline_1_title: string;
  timeline_1_desc: string;
  timeline_2_date: string;
  timeline_2_title: string;
  timeline_3_date: string;
  timeline_3_title: string;
  timeline_3_desc: string;
  timeline_4_date: string;
  timeline_4_title: string;
  timeline_4_desc: string;
  sidebar_apply_title: string;
  sidebar_apply_desc: string;
  sidebar_sum_label: string;
  sidebar_sum_value: string;
  sidebar_duration_label: string;
  sidebar_duration_value: string;
  btn_send_apply: string;
  sidebar_subject_hint: string;
  sidebar_docs_title: string;
  sidebar_docs_guide: string;
  sidebar_docs_open: string;
  sidebar_contact_title: string;
  footer_eu: string;
}

export interface Translations {
  ru: TranslationData;
  uz: TranslationData;
  en: TranslationData;
}