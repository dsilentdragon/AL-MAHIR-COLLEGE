import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Award } from 'lucide-react';
import { SchoolInfo } from '../types';

interface HeroProps {
  schoolInfo: SchoolInfo;
  onDiscoverClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ schoolInfo, onDiscoverClick, onContactClick }) => {
  return (
    <section id="home" className="relative bg-[#0B3D2E] text-white overflow-hidden py-16 lg:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-students.jpg"
          alt="AlMahir College Dutse Nigerian Students in Green Uniforms"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2E] via-[#0B3D2E]/90 to-[#0B3D2E]/75"></div>
      </div>

      {/* Decorative Geometric Overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-islamic-pattern opacity-10 pointer-events-none rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Level Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#176B45]/80 backdrop-blur-sm border border-[#D6B65A]/40 text-[#D6B65A] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-sm">
              <Award className="w-4 h-4 text-[#D6B65A]" />
              <span>Primary &amp; Junior Secondary Education</span>
            </div>

            {/* School Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              ALMAHIR COLLEGE DUTSE
            </h1>

            {/* Motto / Core Message */}
            <div className="relative pl-0 lg:pl-4 border-l-0 lg:border-l-4 border-[#D6B65A]">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#D6B65A] font-semibold">
                Knowledge That Builds Character.
              </p>
            </div>

            {/* Subheading / Description */}
            <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed">
              At AlMahir College Dutse, we nurture young learners through quality education in a conducive Islamic environment—developing knowledge, faith, leadership and strong moral values.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onDiscoverClick}
                className="w-full sm:w-auto bg-[#D6B65A] hover:bg-[#c4a446] text-[#0B3D2E] font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discover AlMahir</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-2 border-white/60 font-semibold text-base px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact the School</span>
              </button>
            </div>

            {/* Quick Pillars highlight */}
            <div className="pt-6 grid grid-cols-3 gap-2 border-t border-white/10 text-center lg:text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D6B65A] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-200">Established 2016</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#D6B65A] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-200">Islamic Values</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D6B65A] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-200">Leadership Focus</span>
              </div>
            </div>

          </div>

          {/* Right Image Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D6B65A]/30 bg-[#176B45]">
              <img
                src="/images/hero-students.jpg"
                alt="AlMahir College Students"
                className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B3D2E] via-[#0B3D2E]/80 to-transparent p-6 text-white">
                <span className="text-xs font-semibold uppercase text-[#D6B65A] tracking-wider block mb-1">
                  Yalwawa Maja, Dutse, Jigawa State
                </span>
                <p className="text-sm font-serif font-bold text-white">
                  "Knowledge For Moral Building"
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Primary &amp; Junior Secondary School learners in dark-green school uniforms.
                </p>
              </div>
            </div>

            {/* Floating Gold Badge */}
            <div className="absolute -bottom-6 -left-4 bg-[#D6B65A] text-[#0B3D2E] font-extrabold px-5 py-3 rounded-2xl shadow-xl border-2 border-white hidden sm:flex items-center gap-3">
              <div className="text-2xl font-serif">10+</div>
              <div className="text-xs uppercase font-bold leading-tight">
                Years of Educational<br/>&amp; Moral Excellence
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
