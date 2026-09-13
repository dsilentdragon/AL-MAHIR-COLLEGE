import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Shield, ArrowRight, MessageSquare } from 'lucide-react';
import { SchoolInfo } from '../types';
import { trackInteraction } from '../utils/storage';

interface HeaderProps {
  schoolInfo: SchoolInfo;
  activeSection: string;
  setActiveSection: (section: string) => void;
  openAdmin: () => void;
  openAdmissionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  schoolInfo,
  activeSection,
  setActiveSection,
  openAdmin,
  openAdmissionModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'mission-vision', label: 'Mission & Vision' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'gallery', label: 'School Life' },
    { id: 'news', label: 'News & Events' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneClick = () => {
    trackInteraction('phone');
    window.location.href = `tel:${schoolInfo.phones[0]}`;
  };

  const handleWhatsAppClick = () => {
    trackInteraction('whatsapp');
    window.open(`https://wa.me/2347035886851?text=Hello%20AlMahir%20College%20Dutse,%20I%20would%20like%20to%20make%20an%20enquiry.`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md font-sans">
      {/* Top Banner / Announcement if present */}
      {schoolInfo.announcementBanner && (
        <div className="bg-[#0B3D2E] text-[#D6B65A] text-xs sm:text-sm py-1.5 px-4 text-center font-medium border-b border-[#D6B65A]/30 flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C62828] animate-pulse"></span>
          <span>{schoolInfo.announcementBanner}</span>
          <button 
            onClick={openAdmissionModal}
            className="ml-2 underline font-semibold text-white hover:text-[#D6B65A] transition-colors cursor-pointer"
          >
            Apply Now &rarr;
          </button>
        </div>
      )}

      {/* Top Contact Strip */}
      <div className="bg-[#17231D] text-gray-300 text-xs py-2 px-4 border-b border-gray-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onClick={handlePhoneClick}>
              <Phone className="w-3.5 h-3.5 text-[#D6B65A]" />
              <span>07035886851 | 08050342151 | 08070861428</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onClick={() => { trackInteraction('email'); window.location.href = `mailto:${schoolInfo.email}`; }}>
              <Mail className="w-3.5 h-3.5 text-[#D6B65A]" />
              <span>{schoolInfo.email}</span>
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#D6B65A]" />
              <span>{schoolInfo.location}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={openAdmin}
              className="flex items-center gap-1 text-gray-400 hover:text-[#D6B65A] transition-colors cursor-pointer"
              title="Admin Portal"
            >
              <Shield className="w-3.5 h-3.5 text-[#D6B65A]" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <img 
  src="/images/almahir-college-logo.png" 
  alt="Al-Mahir College Crest" 
  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
/>

            <div>
              <span className="font-serif font-extrabold text-lg sm:text-xl text-[#0B3D2E] tracking-tight block leading-tight">
                ALMAHIR COLLEGE
              </span>
              <span className="text-xs text-[#176B45] font-semibold tracking-wider uppercase block">
                DUTSE &bull; JIGAWA STATE
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors hover:text-[#176B45] cursor-pointer py-1 border-b-2 ${
                  activeSection === link.id
                    ? 'border-[#176B45] text-[#0B3D2E] font-semibold'
                    : 'border-transparent text-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-[#0B3D2E] hover:bg-[#176B45] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md flex items-center gap-2 hover:gap-3 cursor-pointer border border-[#D6B65A]/40"
            >
              <span>Contact School</span>
              <ArrowRight className="w-4 h-4 text-[#D6B65A]" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-gray-700 hover:text-[#0B3D2E] hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#0B3D2E] text-white font-bold'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); handleNavClick('contact'); }}
              className="w-full bg-[#0B3D2E] text-white text-center font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <span>Contact School</span>
              <ArrowRight className="w-4 h-4 text-[#D6B65A]" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center font-semibold py-2.5 rounded-lg shadow flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Admissions</span>
            </button>

            <div className="flex justify-between items-center text-xs text-gray-500 pt-2 px-2">
              <span onClick={handlePhoneClick} className="cursor-pointer underline">07035886851</span>
              <button onClick={() => { setMobileMenuOpen(false); openAdmin(); }} className="text-[#0B3D2E] font-semibold underline flex items-center gap-1">
                <Shield className="w-3 h-3 text-[#D6B65A]" /> Admin Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
