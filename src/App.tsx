import React, { useState, useEffect } from 'react';
import {
  getSchoolInfo,
  getGallery,
  getNews,
  getEnquiries,
  getAnalytics
} from './utils/storage';
import { SchoolInfo, GalleryItem, NewsItem, EnquiriesItem, AnalyticsStats } from './types';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { Academics } from './components/Academics';
import { FaithPillars } from './components/FaithPillars';
import { Founder } from './components/Founder';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Gallery } from './components/Gallery';
import { NewsSection } from './components/NewsSection';
import { Admissions } from './components/Admissions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';

export function App() {
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo>(getSchoolInfo());
  const [gallery, setGallery] = useState<GalleryItem[]>(getGallery());
  const [news, setNews] = useState<NewsItem[]>(getNews());
  const [enquiries, setEnquiries] = useState<EnquiriesItem[]>(getEnquiries());
  const [analytics, setAnalytics] = useState<AnalyticsStats>(getAnalytics());

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check if URL has #admin hash
    if (window.location.hash === '#admin') {
      setIsAdminOpen(true);
    }
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF7] text-[#17231D] flex flex-col font-sans selection:bg-[#176B45] selection:text-white">
      
      {/* Header & Navigation */}
      <Header
        schoolInfo={schoolInfo}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        openAdmin={() => setIsAdminOpen(true)}
        openAdmissionModal={() => setIsAdmissionModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero
          schoolInfo={schoolInfo}
          onDiscoverClick={() => scrollToSection('about')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Trust Bar */}
        <TrustBar />

        {/* About Section & Purpose */}
        <About />

        {/* Mission & Vision */}
        <MissionVision schoolInfo={schoolInfo} />

        {/* Academics (Primary & JSS) */}
        <Academics openAdmissionModal={() => setIsAdmissionModalOpen(true)} />

        {/* Education Rooted in Faith & Preparing Learners for Life */}
        <FaithPillars />

        {/* Founder Section */}
        <Founder schoolInfo={schoolInfo} />

        {/* School Journey Timeline */}
        <JourneyTimeline />

        {/* School Life & Gallery */}
        <Gallery items={gallery} />

        {/* News & Announcements */}
        <NewsSection news={news} />

        {/* Admissions Section */}
        <Admissions
          onContactClick={() => scrollToSection('contact')}
          isModalOpen={isAdmissionModalOpen}
          setIsModalOpen={setIsAdmissionModalOpen}
        />

        {/* Contact Section & Map */}
        <Contact schoolInfo={schoolInfo} />

      </main>

      {/* Footer */}
      <Footer
        schoolInfo={schoolInfo}
        setActiveSection={setActiveSection}
        openAdmin={() => setIsAdminOpen(true)}
      />

      {/* Admin Portal Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        schoolInfo={schoolInfo}
        setSchoolInfo={setSchoolInfo}
        gallery={gallery}
        setGallery={setGallery}
        news={news}
        setNews={setNews}
        enquiries={enquiries}
        setEnquiries={setEnquiries}
        analytics={analytics}
      />

    </div>
  );
}

export default App;
