import React from 'react';
import { Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SchoolInfo } from '../types';

interface FounderProps {
  schoolInfo: SchoolInfo;
}

export const Founder: React.FC<FounderProps> = ({ schoolInfo }) => {
  return (
    <section className="py-20 bg-white text-[#17231D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#F8FAF7] rounded-3xl border-2 border-gray-200 overflow-hidden shadow-xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Photo Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="rounded-2xl overflow-hidden border-4 border-[#0B3D2E] shadow-2xl bg-white">
                  <img
                    src="/images/founder.jpg"
                    alt="Sheikh Muhammad Jamiu Sulaiman"
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="p-4 bg-[#0B3D2E] text-white text-center">
                    <h4 className="font-serif font-bold text-lg text-white">
                      Sheikh Muhammad Jamiu Sulaiman
                    </h4>
                    <p className="text-xs text-[#D6B65A] font-semibold mt-0.5">
                      Founder &amp; Chief Imam of Yoruba Mosque
                    </p>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -bottom-4 -right-2 bg-[#D6B65A] text-[#0B3D2E] font-bold px-4 py-2 rounded-xl text-xs shadow-lg border border-white flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Est. Aug 25, 2016</span>
                </div>
              </div>
            </div>

            {/* Right Biography / Statement Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#176B45] text-xs font-extrabold uppercase tracking-widest bg-[#176B45]/10 px-3 py-1 rounded-full">
                <HeartHandshake className="w-4 h-4 text-[#176B45]" />
                <span>Founding Leadership</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">
                Founded With Purpose
              </h2>

              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p className="font-medium text-[#0B3D2E]">
                  Sheikh Muhammad Jamiu Sulaiman
                  <span className="block text-sm font-normal text-gray-600">
                    Founder &amp; Chief Imam of Yoruba Mosque, Dutse
                  </span>
                </p>

                <p className="bg-white p-6 rounded-2xl border-l-4 border-[#D6B65A] shadow-sm italic font-serif text-gray-800">
                  "AlMahir College Dutse was founded on August 25, 2016, with a vision of nurturing young people through an educational environment where knowledge and moral development go hand in hand."
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Under the visionary guidance of Sheikh Muhammad Jamiu Sulaiman, AlMahir College continues to serve the families of Dutse and Jigawa State, instilling academic competence, Islamic piety, and societal leadership in every learner.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#0B3D2E]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#176B45]" />
                  <span>Authentic Leadership</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#176B45]" />
                  <span>Moral Responsibility</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
