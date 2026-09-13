import React from 'react';
import { Compass, BookCheck, ShieldAlert, Users, Sparkles } from 'lucide-react';

export const FaithPillars: React.FC = () => {
  const lifePillars = [
    {
      title: "Academic Excellence",
      desc: "Developing knowledge and skills for continued education.",
      icon: <BookCheck className="w-6 h-6 text-[#D6B65A]" />
    },
    {
      title: "Moral Development",
      desc: "Building integrity, discipline and respect.",
      icon: <Compass className="w-6 h-6 text-[#D6B65A]" />
    },
    {
      title: "Leadership",
      desc: "Developing responsibility and leadership ability.",
      icon: <ShieldAlert className="w-6 h-6 text-[#D6B65A]" />
    },
    {
      title: "Community",
      desc: "Preparing learners to contribute positively to society.",
      icon: <Users className="w-6 h-6 text-[#D6B65A]" />
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAF7] text-[#17231D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header: Education Rooted in Faith */}
        <div className="bg-[#0B3D2E] text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-islamic-pattern opacity-10 pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[#D6B65A] font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1 bg-[#176B45] rounded-full inline-block border border-[#D6B65A]/30">
              Education Rooted in Faith
            </span>

            <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl font-serif leading-relaxed">
              "At AlMahir, education extends beyond the classroom. We strive to nurture learners whose academic development is strengthened by faith, discipline and good character."
            </p>

            {/* Three Pillars Badge Strip */}
            <div className="pt-4 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-sm sm:text-lg font-serif font-bold text-[#D6B65A]">
              <span className="bg-[#176B45] px-6 py-2 rounded-xl border border-[#D6B65A]/40 shadow-inner">Faith</span>
              <span className="text-white">&bull;</span>
              <span className="bg-[#176B45] px-6 py-2 rounded-xl border border-[#D6B65A]/40 shadow-inner">Knowledge</span>
              <span className="text-white">&bull;</span>
              <span className="bg-[#176B45] px-6 py-2 rounded-xl border border-[#D6B65A]/40 shadow-inner">Character</span>
            </div>
          </div>
        </div>

        {/* Preparing Learners for Life Section */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">
              Preparing Learners for Life
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Four holistic pillars guiding everyday student development at AlMahir College Dutse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifePillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:border-[#176B45] transition-all space-y-3"
              >
                <div className="p-3 bg-[#0B3D2E] rounded-xl w-fit shadow-md">
                  {item.icon}
                </div>
                <h4 className="font-serif font-bold text-xl text-[#0B3D2E]">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
