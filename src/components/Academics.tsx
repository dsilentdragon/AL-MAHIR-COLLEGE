import React, { useState } from 'react';
import { ArrowRight, BookOpen, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import { CurriculumModal } from './CurriculumModal';

interface AcademicsProps {
  openAdmissionModal: () => void;
}

export const Academics: React.FC<AcademicsProps> = ({ openAdmissionModal }) => {
  const [selectedLevel, setSelectedLevel] = useState<'primary' | 'jss' | null>(null);

  return (
    <section id="academics" className="py-20 bg-white text-[#17231D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#176B45] font-semibold text-xs sm:text-sm uppercase tracking-widest px-3 py-1 bg-[#176B45]/10 rounded-full inline-block">
            Academic Programs
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E]">
            Primary &amp; Junior Secondary Education
          </h2>
          <div className="w-20 h-1 bg-[#D6B65A] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg pt-2">
            Structured educational pathways grounded in academic rigor, Islamic values, and character building.
          </p>
        </div>

        {/* Academic Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* 1. Primary School Card */}
          <div className="bg-[#F8FAF7] rounded-3xl border-2 border-gray-200 hover:border-[#176B45] transition-all duration-300 overflow-hidden shadow-lg group flex flex-col justify-between">
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/primary-school.jpg"
                  alt="AlMahir Primary School Pupils"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/90 via-[#0B3D2E]/30 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#0B3D2E] text-[#D6B65A] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#D6B65A]/40 shadow-md">
                  Foundational Level
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-[#D6B65A]" />
                    <span>Primary School</span>
                  </h3>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <p className="text-gray-700 text-base leading-relaxed">
                  Building strong academic foundations while nurturing discipline, curiosity, confidence and Islamic values.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-[#0B3D2E] font-medium">
                    <Sparkles className="w-4 h-4 text-[#D6B65A]" />
                    <span>Numeracy, Literacy &amp; STEM Basics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0B3D2E] font-medium">
                    <Sparkles className="w-4 h-4 text-[#D6B65A]" />
                    <span>Daily Quranic Tajweed &amp; Adab</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0B3D2E] font-medium">
                    <Sparkles className="w-4 h-4 text-[#D6B65A]" />
                    <span>Character Building &amp; Discipline</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 pt-0">
              <button
                onClick={() => setSelectedLevel('primary')}
                className="w-full bg-[#0B3D2E] hover:bg-[#176B45] text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md flex items-center justify-between cursor-pointer group-hover:px-8"
              >
                <span>Explore Primary</span>
                <ArrowRight className="w-5 h-5 text-[#D6B65A]" />
              </button>
            </div>
          </div>

          {/* 2. Junior Secondary School Card */}
          <div className="bg-[#F8FAF7] rounded-3xl border-2 border-gray-200 hover:border-[#176B45] transition-all duration-300 overflow-hidden shadow-lg group flex flex-col justify-between">
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/jss-school.jpg"
                  alt="AlMahir Junior Secondary School Scholars"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/90 via-[#0B3D2E]/30 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#176B45] text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#D6B65A]/40 shadow-md">
                  Intermediate Level
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-[#D6B65A]" />
                    <span>Junior Secondary School (JSS)</span>
                  </h3>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <p className="text-gray-700 text-base leading-relaxed">
                  Developing independent learners with stronger academic abilities, leadership qualities and moral responsibility.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-[#0B3D2E] font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#176B45]" />
                    <span>BECE Examination Preparation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0B3D2E] font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#176B45]" />
                    <span>Advanced Islamic Jurisprudence &amp; Arabic</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0B3D2E] font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#176B45]" />
                    <span>Leadership &amp; Public Speaking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 pt-0">
              <button
                onClick={() => setSelectedLevel('jss')}
                className="w-full bg-[#176B45] hover:bg-[#0B3D2E] text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md flex items-center justify-between cursor-pointer group-hover:px-8"
              >
                <span>Explore JSS</span>
                <ArrowRight className="w-5 h-5 text-[#D6B65A]" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Curriculum Detail Modal */}
      <CurriculumModal
        level={selectedLevel}
        onClose={() => setSelectedLevel(null)}
        openAdmission={openAdmissionModal}
      />
    </section>
  );
};
