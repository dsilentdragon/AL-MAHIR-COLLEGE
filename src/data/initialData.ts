import { SchoolInfo, GalleryItem, NewsItem, EnquiriesItem, AnalyticsStats } from '../types';

export const INITIAL_SCHOOL_INFO: SchoolInfo = {
  name: "AlMahir College Dutse",
  location: "Yalwawa Maja, Dutse, Jigawa State, Nigeria",
  established: "August 25, 2016",
  founder: "Sheikh Muhammad Jamiu Sulaiman, Chief Imam of Yoruba Mosque",
  motto: "Knowledge For Moral Building",
  heroHeadline: "ALMAHIR COLLEGE DUTSE",
  heroSubheadline: "Knowledge That Builds Character.",
  heroBody: "At AlMahir College Dutse, we nurture young learners through quality education in a conducive Islamic environment—developing knowledge, faith, leadership and strong moral values.",
  phones: ["07035886851", "08050342151", "08070861428"],
  email: "almahircollege@gmail.com",
  missionStatement: "To provide a supportive, conducive Islamic environment where learners acquire academic knowledge, firm faith in Allah, leadership skills, and sound moral values to become responsible Muslims.",
  visionStatement: "Our vision is to provide a conducive and Islamic environment where youths can learn, believe in their Lord and be prepared and guided by Allah, academically and morally, in all the affairs of life and society.",
  announcementBanner: "Admissions Open for 2026/2027 Academic Session for Primary & Junior Secondary School!"
};

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Classroom Learning",
    category: "Classroom Learning",
    imageUrl: "/images/classroom.jpg",
    caption: "Interactive STEM & literacy instruction in dark-green uniforms in our air-conditioned classrooms.",
    isRepresentative: true
  },
  {
    id: "gal-2",
    title: "Islamic Studies & Tajweed",
    category: "Islamic Learning",
    imageUrl: "/images/quran-learning.jpg",
    caption: "Daily Quranic recitation, Hadith studies, and Islamic ethics session guided by qualified tutors.",
    isRepresentative: true
  },
  {
    id: "gal-3",
    title: "Primary Pupils Learning",
    category: "Classroom Learning",
    imageUrl: "/images/primary-school.jpg",
    caption: "Primary school pupils engaging in reading and numeracy exercises at AlMahir College.",
    isRepresentative: true
  },
  {
    id: "gal-4",
    title: "Junior Secondary Scholars",
    category: "Leadership & Character",
    imageUrl: "/images/jss-school.jpg",
    caption: "Junior Secondary School students collaborating on science project presentations.",
    isRepresentative: true
  },
  {
    id: "gal-5",
    title: "Student Leadership & Mentorship",
    category: "Student Activities",
    imageUrl: "/images/sports-leadership.jpg",
    caption: "Weekly prefect leadership workshop developing public speaking, confidence, and Islamic responsibility.",
    isRepresentative: true
  },
  {
    id: "gal-6",
    title: "School Community & Parent Forum",
    category: "School Community",
    imageUrl: "/images/school-community.jpg",
    caption: "Parents, teachers, and school management conferring during the annual PTA Academic Progress Forum.",
    isRepresentative: true
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Orientation Program for New Primary & JSS Students",
    summary: "AlMahir College Dutse invites new students and parents to the upcoming academic orientation session in Yalwawa Maja.",
    content: "The management of AlMahir College Dutse is pleased to announce the schedule for the 2026/2027 Academic Year Student Orientation. Parents will have the opportunity to interact with school leadership, tour our Islamic learning facilities, and review the academic curriculum.",
    date: "2026-09-05",
    category: "Academic",
    imageUrl: "/images/hero-students.jpg",
    published: true
  },
  {
    id: "news-2",
    title: "Annual Tajweed & Islamic Knowledge Competition",
    summary: "Celebrating student excellence in Quranic recitation, memorization, and Islamic jurisprudence.",
    content: "Students across Primary and Junior Secondary levels demonstrated impressive mastery during the annual AlMahir Tajweed exhibition. Prizes were awarded to top reciters in recognition of their dedication to Islamic learning.",
    date: "2026-08-28",
    category: "Islamic Event",
    imageUrl: "/images/quran-learning.jpg",
    published: true
  },
  {
    id: "news-3",
    title: "Commemoration of AlMahir College 10th Founding Anniversary",
    summary: "Marking a decade of Knowledge For Moral Building since our establishment on August 25, 2016.",
    content: "AlMahir College Dutse marked 10 years of educational excellence in Dutse, Jigawa State. Founded on August 25, 2016 by Sheikh Muhammad Jamiu Sulaiman, Chief Imam of Yoruba Mosque, the institution continues its commitment to developing knowledge, faith, leadership and character.",
    date: "2026-08-25",
    category: "Announcement",
    imageUrl: "/images/founder.jpg",
    published: true
  }
];

export const INITIAL_ENQUIRIES: EnquiriesItem[] = [
  {
    id: "enq-101",
    name: "Ibrahim Usman",
    parentName: "Alhaji Usman Garba",
    phone: "08034567812",
    email: "usman.garba@gmail.com",
    type: "admission",
    grade: "Primary School",
    message: "I would like to inquire about Primary 3 placement for my son for the upcoming term. Please contact me with registration requirements.",
    createdAt: "2026-09-08 14:32",
    status: "New"
  },
  {
    id: "enq-102",
    name: "Aisha Bello",
    parentName: "Hajiya Fatimah Bello",
    phone: "08051234987",
    email: "aisha.bello@yahoo.com",
    type: "contact",
    grade: "Junior Secondary School",
    message: "Kindly advise on the daily school hours, bus routes around Dutse metropolis, and JSS 1 enrollment procedure.",
    createdAt: "2026-09-09 10:15",
    status: "In Progress",
    adminNotes: "Called parent on Sep 9. Sent prospectus via WhatsApp."
  },
  {
    id: "enq-103",
    name: "Sani Umar",
    parentName: "Malam Umar Sani",
    phone: "07069876543",
    email: "sani.umar@hotmail.com",
    type: "admission",
    grade: "Junior Secondary School",
    message: "Seeking admission for my twin daughters into JSS 2. Kindly confirm availability.",
    createdAt: "2026-09-10 16:45",
    status: "Resolved",
    adminNotes: "Entrance assessment scheduled for next Monday."
  }
];

export const INITIAL_ANALYTICS: AnalyticsStats = {
  visitors: 3420,
  pageViews: 11850,
  popularPages: [
    { name: "Homepage", views: 5120 },
    { name: "Admissions", views: 2410 },
    { name: "Academics (Primary & JSS)", views: 1890 },
    { name: "About & Founder", views: 1240 },
    { name: "School Life / Gallery", views: 1190 }
  ],
  locations: [
    { city: "Dutse, Jigawa", count: 1850 },
    { city: "Kano", count: 720 },
    { city: "Abuja (FCT)", count: 410 },
    { city: "Kaduna", count: 260 },
    { city: "Lagos", count: 180 }
  ],
  devices: [
    { device: "Mobile (Android/iOS)", percentage: 74 },
    { device: "Desktop", percentage: 22 },
    { device: "Tablet", percentage: 4 }
  ],
  trafficSources: [
    { source: "Direct Visits", percentage: 48 },
    { source: "Google Search (Dutse Schools)", percentage: 32 },
    { source: "WhatsApp Shares", percentage: 14 },
    { source: "Social Media / External", percentage: 6 }
  ],
  whatsappClicks: 215,
  phoneClicks: 184,
  emailClicks: 92,
  recentActivity: [
    { timestamp: "2026-09-11 08:30", text: "New admission enquiry submitted for Primary School", icon: "user-plus" },
    { timestamp: "2026-09-10 17:10", text: "Parent clicked WhatsApp contact button from Dutse", icon: "message-square" },
    { timestamp: "2026-09-10 12:05", text: "Updated School Life Gallery item: Tajweed Studies", icon: "image" },
    { timestamp: "2026-09-09 19:40", text: "News article published: 10th Founding Anniversary", icon: "file-text" }
  ]
};
