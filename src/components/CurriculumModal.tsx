import React from 'react';
import { X, BookOpen, CheckCircle2, Clock, Award, Star } from 'lucide-react';

interface CurriculumModalProps {
  level: 'primary' | 'jss' | null;
  onClose: () => void;
  openAdmission: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ level, onClose, openAdmission }) => {
  if (!level) return null;

  const isPrimary = level === 'primary';

  const data = isPrimary ? {
    title: "Primary School Curriculum",
    tagline: "Building strong academic foundations while nurturing discipline, curiosity, confidence and Islamic values.",
    image: "/images/primary-school.jpg",
    ageGroup: "Ages 5 – 11 Years (Primary 1 to Primary 6)",
    subjects: [
      "English Language & Phonics",
      "Mathematics & Quantitative Reasoning",
      "Basic Science & Technology",
      "Social Studies & Civic Education",
      "Arabic Language & Alphabetics",
      "Islamic Religious Studies (IRS)",
      "Quranic Recitation & Tajweed",
      "Agricultural Science & Computer Studies",
      "Cultural & Creative Arts"
    ],
    outcomes: [
      "Strong reading, writing and computational skills",
      "Fluency in Quranic recitation and memorization of basic Surahs",
      "Good manners (Adab), cleanliness and Islamic daily etiquette",
      "Problem-solving and critical thinking development"
    ],
    schedule: "8:00 AM – 2:30 PM (Includes Tahfiz & Zuhr Congregational Prayer)"
  } : {
    title: "Junior Secondary School (JSS) Curriculum",
    tagline: "Developing independent learners with stronger academic abilities, leadership qualities and moral responsibility.",
    image: "/images/jss-school.jpg",
    ageGroup: "Ages 11 – 15 Years (JSS 1 to JSS 3)",
    subjects: [
      "English Language & Literature",
      "General Mathematics",
      "Basic Science & Physics Fundamentals",
      "Basic Technology & Computer Studies",
      "Social Studies & Security Education",
      "Islamic Religious Studies & Jurisprudence (Fiqh)",
      "Arabic Language & Translation",
      "Quranic Tajweed & Hadeeth Memorization",
      "Business Studies & Home Economics",
      "Civic & Leadership Education"
    ],
    outcomes: [
      "Preparation for BECE / Junior WAEC Examinations",
      "Advanced Quranic studies and Islamic moral grounding",
      "Leadership and public speaking abilities",
      "Solid STEM foundation for Senior Secondary progression"
    ],
    schedule: "8:00 AM – 3:00 PM (Includes Tahfiz, Public Speaking & Zuhr Prayer)"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border-2 border-[#176B45] my-8 relative animate-in fade-in zoom-in duration-200">
        
        {/* Header Banner */}
        <div className="relative bg-[#0B3D2E] text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <span className="text-[#D6B65A] text-xs font-bold uppercase tracking-wider bg-[#176B45]/80 px-3 py-1 rounded-full border border-[#D6B65A]/40">
            {isPrimary ? 'Primary Education' : 'Junior Secondary Education'}
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mt-3">
            {data.title}
          </h3>
          <p className="text-gray-200 text-sm sm:text-base mt-2 leading-relaxed">
            {data.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Quick Info Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F8FAF7] p-4 rounded-xl border border-gray-200 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#0B3D2E] font-semibold">
              <Star className="w-4 h-4 text-[#D6B65A]" />
              <span>Target Level: {data.ageGroup}</span>
            </div>
            <div className="flex items-center gap-2 text-[#0B3D2E] font-semibold">
              <Clock className="w-4 h-4 text-[#176B45]" />
              <span>School Schedule: {data.schedule}</span>
            </div>
          </div>

          {/* Core Subjects */}
          <div>
            <h4 className="font-serif font-bold text-lg text-[#0B3D2E] flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-[#176B45]" />
              <span>Key Academic &amp; Islamic Subjects</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.subjects.map((subj, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0" />
                  <span>{subj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learning Outcomes */}
          <div>
            <h4 className="font-serif font-bold text-lg text-[#0B3D2E] flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-[#D6B65A]" />
              <span>Key Learning Outcomes</span>
            </h4>
            <ul className="space-y-2">
              {data.outcomes.map((out, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#176B45] mt-2 shrink-0"></span>
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-6 bg-[#F8FAF7] border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end items-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => { onClose(); openAdmission(); }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0B3D2E] text-white text-sm font-bold shadow-md hover:bg-[#176B45] transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Apply For {isPrimary ? 'Primary' : 'JSS'} Admission</span>
            <span className="text-[#D6B65A]">&rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
};
