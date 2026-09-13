import React from 'react';
import { Flag, TrendingUp, Compass } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const steps = [
    {
      year: "2016",
      tag: "The Beginning",
      title: "Establishment of AlMahir College",
      desc: "AlMahir College Dutse was established on August 25, 2016 in Yalwawa Maja, Dutse, Jigawa State by Sheikh Muhammad Jamiu Sulaiman.",
      icon: <Flag className="w-6 h-6 text-[#D6B65A]" />
    },
    {
      year: "Today",
      tag: "Growing Through Education",
      title: "Consolidating Academic & Moral Excellence",
      desc: "Continuing its commitment to academic, moral and Islamic development across Primary and Junior Secondary levels.",
      icon: <TrendingUp className="w-6 h-6 text-[#D6B65A]" />
    },
    {
      year: "The Future",
      tag: "Preparing the Next Generation",
      title: "Nurturing Leaders of Tomorrow",
      desc: "Equipping learners with knowledge, faith, character and leadership qualities to serve and contribute positively to society.",
      icon: <Compass className="w-6 h-6 text-[#D6B65A]" />
    }
  ];

  return (
    <section className="py-20 bg-[#0B3D2E] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#D6B65A] font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1 bg-[#176B45] rounded-full inline-block border border-[#D6B65A]/30">
            Our Development
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            The AlMahir Journey
          </h2>
          <div className="w-20 h-1 bg-[#D6B65A] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#176B45]/90 backdrop-blur-md p-8 rounded-3xl border border-[#D6B65A]/40 shadow-xl relative space-y-4 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-serif font-extrabold text-[#D6B65A]">
                  {step.year}
                </span>
                <div className="p-2.5 bg-[#0B3D2E] rounded-xl border border-[#D6B65A]/30">
                  {step.icon}
                </div>
              </div>

              <div className="text-xs uppercase font-bold text-[#D6B65A] tracking-wider">
                {step.tag}
              </div>

              <h3 className="font-serif text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
