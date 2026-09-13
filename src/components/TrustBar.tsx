import React from 'react';
import { Calendar, GraduationCap, BookMarked, Sparkles } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: <Calendar className="w-6 h-6 text-[#D6B65A]" />,
      stat: "2016",
      label: "Established",
      sub: "August 25, 2016"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#D6B65A]" />,
      stat: "Primary",
      label: "Education",
      sub: "Strong Academic Foundations"
    },
    {
      icon: <BookMarked className="w-6 h-6 text-[#D6B65A]" />,
      stat: "Junior Secondary",
      label: "Education",
      sub: "Leadership & Independent Thinking"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#D6B65A]" />,
      stat: "Islamic",
      label: "Learning Environment",
      sub: "Faith, Discipline & Ethics"
    }
  ];

  return (
    <section className="bg-[#17231D] text-white py-8 border-y-2 border-[#D6B65A]/40 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-gray-800">
          {trustItems.map((item, idx) => (
            <div key={idx} className="p-4 flex flex-col items-center justify-center space-y-2 group hover:scale-105 transition-transform">
              <div className="p-2.5 rounded-full bg-[#0B3D2E] border border-[#D6B65A]/40 group-hover:border-[#D6B65A] transition-colors">
                {item.icon}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-extrabold text-white group-hover:text-[#D6B65A] transition-colors">
                  {item.stat}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#D6B65A] uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
