export interface EnquiriesItem {
  id: string;
  name: string;
  parentName?: string;
  phone: string;
  email: string;
  type: 'contact' | 'admission';
  grade?: 'Primary School' | 'Junior Secondary School' | 'General';
  message: string;
  createdAt: string;
  status: 'New' | 'In Progress' | 'Resolved';
  adminNotes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom Learning' | 'Islamic Learning' | 'Student Activities' | 'Leadership & Character' | 'School Community';
  imageUrl: string;
  caption: string;
  isRepresentative?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: 'Academic' | 'Islamic Event' | 'Announcement' | 'Parent Notice';
  imageUrl?: string;
  published: boolean;
}

export interface SchoolInfo {
  name: string;
  location: string;
  established: string;
  founder: string;
  motto: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroBody: string;
  phones: string[];
  email: string;
  missionStatement: string;
  visionStatement: string;
  announcementBanner?: string;
}

export interface AnalyticsStats {
  visitors: number;
  pageViews: number;
  popularPages: { name: string; views: number }[];
  locations: { city: string; count: number }[];
  devices: { device: string; percentage: number }[];
  trafficSources: { source: string; percentage: number }[];
  whatsappClicks: number;
  phoneClicks: number;
  emailClicks: number;
  recentActivity: { timestamp: string; text: string; icon: string }[];
}

export interface AdminUser {
  username: string;
  isLoggedIn: boolean;
  loginTime?: string;
}
