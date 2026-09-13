import React from 'react';
import { Home, Heart, Award, Users, Quote } from 'lucide-react';
import { SchoolInfo } from '../types';

interface MissionVisionProps {
  schoolInfo: SchoolInfo;
}

export const MissionVision: React.FC<MissionVisionProps> = ({ schoolInfo }) => {
  const missionCards = [
    {
      title: "Conducive Learning Environment",
      desc: "Providing a supportive and Islamic environment where learners can study, grow and develop.",
      icon: <Home className="w-8 h-8 text-[#D6B65A]" />
    },
    {
      title: "Faith & Moral Values",
      desc: "Developing learners with firm faith in Allah and strong moral values.",
      icon: <Heart className="w-8 h-8 text-[#D6B65A]" />
    },
    {
      title: "Leadership Development",
      desc: "Guiding learners to develop confidence, responsibility and strong leadership skills.",
      icon: <Award className="w-8 h-8 text-[#D6B65A]" />
    },
    {
      title: "Responsible Muslims",
      desc: "Preparing learners to become better Muslims and responsible members of society.",
      icon: <Users className="w-8 h-8 text-[#D6B65A]" />
    }
  ];

  return (
    <section id="mission-vision" className="py-20 bg-[#0B3D2E] text-white relative overflow-hidden">
      
      {/* Background Subtle Geometric Styling */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#D6B65A] font-semibold text-xs sm:text-sm uppercase tracking-widest px-3 py-1 bg-[#176B45]/50 border border-[#D6B65A]/30 rounded-full inline-block">
            Our Mission &amp; Vision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Guided By Faith &amp; Purpose
          </h2>
          <div className="w-20 h-1 bg-[#D6B65A] mx-auto rounded-full"></div>
        </div>

        {/* Four Mission Cards */}
        <div>
          <h3 className="text-xl font-serif font-bold text-[#D6B65A] text-center mb-8 uppercase tracking-wider">
            Our Mission Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#176B45]/80 backdrop-blur-md p-8 rounded-2xl border border-[#D6B65A]/30 hover:border-[#D6B65A] transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-[#0B3D2E] rounded-xl w-fit border border-[#D6B65A]/40 shadow-inner">
                    {card.icon}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">
                    {card.title}
                  </h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-white/10 text-xs font-semibold text-[#D6B65A] uppercase tracking-wider">
                  Pillar 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement Box */}
        <div className="bg-gradient-to-r from-[#17231D] via-[#0B3D2E] to-[#17231D] p-8 sm:p-12 rounded-3xl border-2 border-[#D6B65A]/50 shadow-2xl relative">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex p-3 bg-[#D6B65A]/20 rounded-full text-[#D6B65A] mb-2">
              <Quote className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#D6B65A] tracking-tight">
              Our Vision
            </h3>

            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed font-semibold">
              "{schoolInfo.visionStatement}"
            </blockquote>

            <div className="pt-4 flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-[#D6B65A]"></div>
              <span className="text-xs uppercase font-bold text-[#D6B65A] tracking-widest">
                AlMahir College Dutse
              </span>
              <div className="w-12 h-0.5 bg-[#D6B65A]"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
