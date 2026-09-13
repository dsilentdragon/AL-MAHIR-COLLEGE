import React, { useState } from 'react';
import { BookOpen, GraduationCap, Check, Send, Sparkles } from 'lucide-react';
import { saveEnquiry } from '../utils/storage';

interface AdmissionsProps {
  onContactClick: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export const Admissions: React.FC<AdmissionsProps> = ({ onContactClick, isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    phone: '',
    email: '',
    grade: 'Primary School' as 'Primary School' | 'Junior Secondary School',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    saveEnquiry({
      name: formData.name,
      parentName: formData.parentName,
      phone: formData.phone,
      email: formData.email || 'N/A',
      type: 'admission',
      grade: formData.grade,
      message: formData.message || `Admission enquiry for ${formData.grade}`
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        parentName: '',
        phone: '',
        email: '',
        grade: 'Primary School',
        message: ''
      });
    }, 2500);
  };

  return (
    <section id="admissions" className="py-20 bg-[#0B3D2E] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[#D6B65A] font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1 bg-[#176B45] rounded-full inline-block border border-[#D6B65A]/30">
            Admissions Open
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Give Your Child a Strong Foundation
          </h2>

          <p className="text-gray-200 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Begin your child's educational journey in an environment where knowledge, faith and character grow together.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#D6B65A] hover:bg-[#c4a446] text-[#0B3D2E] font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-[#0B3D2E]" />
              <span>Submit Admission Enquiry</span>
            </button>

            <button
              onClick={onContactClick}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 font-semibold text-base px-8 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              <span>Contact the School</span>
            </button>
          </div>
        </div>

        {/* Level Displays */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          
          <div className="bg-[#176B45]/80 backdrop-blur-md p-8 rounded-3xl border border-[#D6B65A]/40 shadow-xl space-y-4">
            <div className="p-3 bg-[#0B3D2E] rounded-xl w-fit border border-[#D6B65A]/40">
              <BookOpen className="w-8 h-8 text-[#D6B65A]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Primary School Admission
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Nurturing young pupils through elementary literacy, STEM foundations, Quranic Tajweed, and moral discipline.
            </p>
            <div className="pt-2">
              <button
                onClick={() => { setFormData(prev => ({ ...prev, grade: 'Primary School' })); setIsModalOpen(true); }}
                className="text-[#D6B65A] hover:text-white font-bold text-sm underline flex items-center gap-1 cursor-pointer"
              >
                <span>Enquire for Primary Level &rarr;</span>
              </button>
            </div>
          </div>

          <div className="bg-[#176B45]/80 backdrop-blur-md p-8 rounded-3xl border border-[#D6B65A]/40 shadow-xl space-y-4">
            <div className="p-3 bg-[#0B3D2E] rounded-xl w-fit border border-[#D6B65A]/40">
              <GraduationCap className="w-8 h-8 text-[#D6B65A]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Junior Secondary School Admission
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Developing independent thinkers with strong academic competencies, Islamic ethics, and leadership skills.
            </p>
            <div className="pt-2">
              <button
                onClick={() => { setFormData(prev => ({ ...prev, grade: 'Junior Secondary School' })); setIsModalOpen(true); }}
                className="text-[#D6B65A] hover:text-white font-bold text-sm underline flex items-center gap-1 cursor-pointer"
              >
                <span>Enquire for JSS Level &rarr;</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Admission Enquiry Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white text-[#17231D] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-2 border-[#176B45] relative animate-in fade-in zoom-in duration-200 my-8">
            
            <div className="bg-[#0B3D2E] text-white p-6 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                &times;
              </button>
              <h3 className="font-serif text-2xl font-extrabold text-white">
                Admission Enquiry Form
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Submit details and the AlMahir College Dutse admissions team will contact you.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                  Enquiry Submitted Successfully!
                </h4>
                <p className="text-gray-600 text-sm">
                  Thank you for reaching out to AlMahir College Dutse. Our administration will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                    Student's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ibrahim Usman"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Alhaji Usman Garba"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] focus:outline-none text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="07035886851"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                    Level Seeking Admission
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] focus:outline-none text-sm bg-white"
                  >
                    <option value="Primary School">Primary School</option>
                    <option value="Junior Secondary School">Junior Secondary School (JSS)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                    Additional Message / Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide any additional information about the learner..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] focus:outline-none text-sm"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0B3D2E] hover:bg-[#176B45] text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#D6B65A]" />
                    <span>Submit Admission Enquiry</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
