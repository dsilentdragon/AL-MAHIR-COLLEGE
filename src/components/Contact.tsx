import React, { useState } from 'react';
import { SchoolInfo } from '../types';
import { Phone, Mail, MapPin, MessageSquare, Send, Check, Navigation } from 'lucide-react';
import { saveEnquiry, trackInteraction } from '../utils/storage';

interface ContactProps {
  schoolInfo: SchoolInfo;
}

export const Contact: React.FC<ContactProps> = ({ schoolInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    saveEnquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || 'N/A',
      type: 'contact',
      message: formData.message || 'General contact enquiry'
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleCall = (phone: string) => {
    trackInteraction('phone');
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = () => {
    trackInteraction('whatsapp');
    window.open(`https://wa.me/2347035888851?text=Hello%20AlMahir%20College%20Dutse,%20I%20am%20reaching%20out%20via%20your%20website.`, '_blank');
  };

  const handleEmail = () => {
    trackInteraction('email');
    window.location.href = `mailto:${schoolInfo.email}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FAF7] text-[#17231D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#176B45] font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1 bg-[#176B45]/10 rounded-full inline-block">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E]">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-[#D6B65A] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-base">
            We welcome inquiries from prospective parents, community members, and educational partners.
          </p>
        </div>

        {/* Top Info Cards & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0B3D2E] text-white p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
              <div className="border-b border-[#D6B65A]/30 pb-4">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {schoolInfo.name}
                </h3>
                <p className="text-xs text-[#D6B65A] uppercase font-bold tracking-wider mt-1">
                  Knowledge For Moral Building
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D6B65A] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-gray-400 block font-semibold uppercase">Location Address</span>
                    <span className="text-sm text-gray-100 font-medium">{schoolInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D6B65A] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-gray-400 block font-semibold uppercase">Telephone Numbers</span>
                    <div className="flex flex-col text-sm text-gray-100 font-medium space-y-1 mt-1">
                      {schoolInfo.phones.map((phone, idx) => (
                        <button key={idx} onClick={() => handleCall(phone)} className="hover:text-[#D6B65A] text-left underline cursor-pointer">
                          {phone}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D6B65A] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-gray-400 block font-semibold uppercase">Email Address</span>
                    <button onClick={handleEmail} className="text-sm text-gray-100 font-medium hover:text-[#D6B65A] underline cursor-pointer">
                      {schoolInfo.email}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Call Us | WhatsApp | Email Us */}
              <div className="pt-4 grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleCall(schoolInfo.phones[0])}
                  className="bg-[#176B45] hover:bg-[#125434] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D6B65A]" />
                  <span>Call Us</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={handleEmail}
                  className="bg-[#D6B65A] hover:bg-[#c4a446] text-[#0B3D2E] py-2.5 px-3 rounded-xl text-xs font-bold shadow transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Us</span>
                </button>
              </div>

            </div>

          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-[#0B3D2E] mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Have questions regarding admissions, academics or school operations? Fill out the form below.
            </p>

            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-[#F8FAF7] rounded-2xl border border-emerald-200">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-xl text-[#0B3D2E]">
                  Message Received!
                </h4>
                <p className="text-gray-600 text-xs">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Malam Bello Usman"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] focus:outline-none text-sm"
                    />
                  </div>

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
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3D2E] uppercase mb-1">
                    Your Message / Inquiry
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#176B45] focus:outline-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B3D2E] hover:bg-[#176B45] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#D6B65A]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Interactive Google Maps Location Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                School Location Map
              </h3>
              <p className="text-xs text-gray-600">
                Yalwawa Maja, Dutse, Jigawa State, Nigeria
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Yalwawa+Maja+Dutse+Jigawa+State+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#176B45] hover:bg-[#0B3D2E] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer w-fit"
            >
              <Navigation className="w-3.5 h-3.5 text-[#D6B65A]" />
              <span>Get Open Directions</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-[#176B45] shadow-xl relative bg-gray-200">
            <iframe
              title="AlMahir College Dutse Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.342129037142!2d9.333333!3d11.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x111326efbcbf8b67%3A0x6b13e0c034293f2f!2sDutse%2C%20Jigawa%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};
