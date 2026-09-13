import { SchoolInfo, GalleryItem, NewsItem, EnquiriesItem, AnalyticsStats, AdminUser } from '../types';
import { INITIAL_SCHOOL_INFO, INITIAL_GALLERY, INITIAL_NEWS, INITIAL_ENQUIRIES, INITIAL_ANALYTICS } from '../data/initialData';

const KEYS = {
  SCHOOL_INFO: 'almahir_school_info',
  GALLERY: 'almahir_gallery',
  NEWS: 'almahir_news',
  ENQUIRIES: 'almahir_enquiries',
  ANALYTICS: 'almahir_analytics',
  ADMIN_SESSION: 'almahir_admin_session'
};

export const getSchoolInfo = (): SchoolInfo => {
  const data = localStorage.getItem(KEYS.SCHOOL_INFO);
  if (!data) {
    localStorage.setItem(KEYS.SCHOOL_INFO, JSON.stringify(INITIAL_SCHOOL_INFO));
    return INITIAL_SCHOOL_INFO;
  }
  return JSON.parse(data);
};

export const saveSchoolInfo = (info: SchoolInfo): void => {
  localStorage.setItem(KEYS.SCHOOL_INFO, JSON.stringify(info));
};

export const getGallery = (): GalleryItem[] => {
  const data = localStorage.getItem(KEYS.GALLERY);
  if (!data) {
    localStorage.setItem(KEYS.GALLERY, JSON.stringify(INITIAL_GALLERY));
    return INITIAL_GALLERY;
  }
  return JSON.parse(data);
};

export const saveGallery = (gallery: GalleryItem[]): void => {
  localStorage.setItem(KEYS.GALLERY, JSON.stringify(gallery));
};

export const getNews = (): NewsItem[] => {
  const data = localStorage.getItem(KEYS.NEWS);
  if (!data) {
    localStorage.setItem(KEYS.NEWS, JSON.stringify(INITIAL_NEWS));
    return INITIAL_NEWS;
  }
  return JSON.parse(data);
};

export const saveNews = (news: NewsItem[]): void => {
  localStorage.setItem(KEYS.NEWS, JSON.stringify(news));
};

export const getEnquiries = (): EnquiriesItem[] => {
  const data = localStorage.getItem(KEYS.ENQUIRIES);
  if (!data) {
    localStorage.setItem(KEYS.ENQUIRIES, JSON.stringify(INITIAL_ENQUIRIES));
    return INITIAL_ENQUIRIES;
  }
  return JSON.parse(data);
};

export const saveEnquiry = (enquiry: Omit<EnquiriesItem, 'id' | 'createdAt' | 'status'>): EnquiriesItem => {
  const enquiries = getEnquiries();
  const newEnquiry: EnquiriesItem = {
    ...enquiry,
    id: 'enq-' + Date.now().toString().slice(-6),
    createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16),
    status: 'New'
  };
  const updated = [newEnquiry, ...enquiries];
  localStorage.setItem(KEYS.ENQUIRIES, JSON.stringify(updated));

  // Log activity in analytics
  recordActivity(`New ${enquiry.type} enquiry from ${enquiry.name} (${enquiry.grade || 'General'})`, 'user-plus');

  return newEnquiry;
};

export const updateEnquiryStatus = (id: string, status: EnquiriesItem['status'], adminNotes?: string): void => {
  const enquiries = getEnquiries();
  const updated = enquiries.map(e => {
    if (e.id === id) {
      return { ...e, status, adminNotes: adminNotes !== undefined ? adminNotes : e.adminNotes };
    }
    return e;
  });
  localStorage.setItem(KEYS.ENQUIRIES, JSON.stringify(updated));
};

export const deleteEnquiry = (id: string): void => {
  const enquiries = getEnquiries();
  const updated = enquiries.filter(e => e.id !== id);
  localStorage.setItem(KEYS.ENQUIRIES, JSON.stringify(updated));
};

export const getAnalytics = (): AnalyticsStats => {
  const data = localStorage.getItem(KEYS.ANALYTICS);
  if (!data) {
    localStorage.setItem(KEYS.ANALYTICS, JSON.stringify(INITIAL_ANALYTICS));
    return INITIAL_ANALYTICS;
  }
  return JSON.parse(data);
};

export const trackInteraction = (type: 'whatsapp' | 'phone' | 'email'): void => {
  const stats = getAnalytics();
  if (type === 'whatsapp') stats.whatsappClicks += 1;
  if (type === 'phone') stats.phoneClicks += 1;
  if (type === 'email') stats.emailClicks += 1;
  stats.pageViews += 1;

  localStorage.setItem(KEYS.ANALYTICS, JSON.stringify(stats));
  recordActivity(`User clicked ${type.toUpperCase()} contact link`, 'phone-call');
};

export const recordActivity = (text: string, icon = 'activity'): void => {
  const stats = getAnalytics();
  const now = new Date().toISOString().replace('T', ' ').slice(0, 16);
  stats.recentActivity = [{ timestamp: now, text, icon }, ...stats.recentActivity.slice(0, 9)];
  localStorage.setItem(KEYS.ANALYTICS, JSON.stringify(stats));
};

export const getAdminSession = (): AdminUser => {
  const data = localStorage.getItem(KEYS.ADMIN_SESSION);
  if (!data) return { username: 'admin', isLoggedIn: false };
  return JSON.parse(data);
};

export const setAdminSession = (session: AdminUser): void => {
  localStorage.setItem(KEYS.ADMIN_SESSION, JSON.stringify(session));
};
