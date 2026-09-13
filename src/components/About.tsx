import React from 'react';
import { Target, Heart, Compass, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F8FAF7] text-[#17231D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#176B45] font-semibold text-xs sm:text-sm uppercase tracking-widest px-3 py-1 bg-[#176B45]/10 rounded-full inline-block">
            About The Institution
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E]">
            Welcome to AlMahir College Dutse
          </h2>
          <div className="w-20 h-1 bg-[#D6B65A] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Founding text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-[#0B3D2E] space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                Our Foundation &amp; Heritage
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Established on <span className="font-semibold text-[#0B3D2E]">August 25, 2016</span>, AlMahir College Dutse was founded by <span className="font-semibold text-[#0B3D2E]">Sheikh Muhammad Jamiu Sulaiman</span>, Chief Imam of Yoruba Mosque, with a commitment to creating an educational environment where young people can acquire knowledge while developing faith, character and responsibility.
              </p>
            </div>

            {/* Our Purpose Box */}
            <div className="bg-[#0B3D2E] text-white p-8 rounded-2xl shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#176B45] rounded-xl text-[#D6B65A]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Our Purpose
                </h3>
              </div>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-medium">
                To nurture learners who are academically prepared, firmly grounded in faith, morally upright and capable of contributing positively to society.
              </p>
            </div>

            {/* Why AlMahir Was Established */}
            <div className="bg-white p-8 rounded-2xl shadow-md space-y-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#176B45]/10 rounded-lg text-[#176B45]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                  Why AlMahir Was Established
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                AlMahir College Dutse was established with the belief that education should develop more than academic ability. It should help young people build a strong relationship with Allah, develop sound moral values, gain leadership skills and become responsible Muslims who can make meaningful contributions to society.
              </p>
            </div>

          </div>

          {/* Right Column: Visual Feature Box */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#176B45]">
              <img
                src="/images/classroom.jpg"
                alt="AlMahir College Dutse Classroom"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-5 rounded-xl border-l-4 border-[#D6B65A] shadow-lg">
                <div className="flex items-center gap-2 text-[#0B3D2E] font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-[#176B45]" />
                  <span>Quality Islamic &amp; Academic Environment</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Located in Yalwawa Maja, Dutse, Jigawa State, Nigeria.
                </p>
              </div>
            </div>

            {/* Quick Core Pillars Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow border border-gray-100 text-center">
                <div className="font-serif font-bold text-lg text-[#0B3D2E]">Academic</div>
                <div className="text-xs text-gray-500 font-medium">Core STEM &amp; Arts Excellence</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow border border-gray-100 text-center">
                <div className="font-serif font-bold text-lg text-[#176B45]">Faith &amp; Ethics</div>
                <div className="text-xs text-gray-500 font-medium">Quran, Tajweed &amp; Morals</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
