import React from 'react';
import { SchoolInfo } from '../types';
import { Shield } from 'lucide-react';

interface FooterProps {
  schoolInfo: SchoolInfo;
  setActiveSection: (section: string) => void;
  openAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ schoolInfo, setActiveSection, openAdmin }) => {
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B3D2E] text-white border-t-4 border-[#D6B65A] font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Branding Section */}
                   <div className="inline-flex items-center">
            <img 
              src="/images/almahir-college-logo.png" 
              alt="AlMahir College Logo" 
              className="h-12 w-auto object-contain" 
            />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ALMAHIR COLLEGE DUTSE
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#D6B65A] font-semibold">
            Knowledge For Moral Building
          </p>

          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Primary &amp; Junior Secondary School providing academic development, firm Islamic faith, leadership training, and moral character in Dutse, Jigawa State.
          </p>
        </div>

        {/* Quick Navigation Links Bar */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium border-y border-white/10 py-6">
          <button onClick={() => handleNavClick('home')} className="hover:text-[#D6B65A] transition-colors cursor-pointer">Home</button>
          <span className="text-gray-500">&bull;</span>
          <button onClick={() => handleNavClick('about')} className="hover:text-[#D6B65A] transition-colors cursor-pointer">About</button>
          <span className="text-gray-500">&bull;</span>
          <button onClick={() => handleNavClick('academics')} className="hover:text-[#D6B65A] transition-colors cursor-pointer">Academics</button>
          <span className="text-gray-500">&bull;</span>
          <button onClick={() => handleNavClick('mission-vision')} className="hover:text-[#D6B65A] transition-colors cursor-pointer">Mission &amp; Vision</button>
          <span className="text-gray-500">&bull;</span>
          <button onClick={() => handleNavClick('admissions')} className="hover:text-[#D6B65A] transition-colors cursor-pointer">Admissions</button>
          <span className="text-gray-500">&bull;</span>
          <button onClick={() => handleNavClick('gallery')} className="hover:text-[#D6B65A] transition-colors cursor-pointer">School Life</button>
          <span className="text-gray-500">&bull;</span>
          <button onClick={() => handleNavClick('contact')} className="hover:text-[#D6B65A] transition-colors cursor-pointer">Contact</button>
        </div>

        {/* Contact Info Center Summary */}
        <div className="text-center space-y-2 text-xs sm:text-sm text-gray-300">
          <p className="font-medium text-white">
            {schoolInfo.location}
          </p>
          <p className="font-mono text-[#D6B65A]">
            07035888851 &bull; 08050342151 &bull; 08070861428
          </p>
          <p className="text-gray-300">
            {schoolInfo.email}
          </p>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div>
            &copy; 2026 AlMahir College Dutse. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={openAdmin}
              className="text-gray-400 hover:text-[#D6B65A] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-[#D6B65A]" />
              <span>Admin Portal</span>
            </button>
            <span>&bull;</span>
            <span className="font-semibold text-[#D6B65A]">
              Website by Panthera Digital
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
