import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { X, ZoomIn, Info, Image as ImageIcon } from 'lucide-react';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Classroom Learning',
    'Islamic Learning',
    'Student Activities',
    'Leadership & Character',
    'School Community'
  ];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#F8FAF7] text-[#17231D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#176B45] font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1 bg-[#176B45]/10 rounded-full inline-block">
            School Life &amp; Environment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E]">
            AlMahir Gallery
          </h2>
          <div className="w-20 h-1 bg-[#D6B65A] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-sm sm:text-base pt-1">
            Explore classroom activities, Islamic studies, leadership workshops, and community events.
          </p>
        </div>

        {/* Representative Disclaimer Banner */}
        <div className="bg-[#0B3D2E]/5 border border-[#176B45]/30 p-3.5 rounded-xl text-xs text-[#0B3D2E] flex items-center justify-center gap-2 max-w-2xl mx-auto text-center font-medium">
          <Info className="w-4 h-4 text-[#176B45] shrink-0" />
          <span>Note: Visuals represent the educational standards and learning environment at AlMahir College Dutse.</span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0B3D2E] text-white shadow-md border border-[#D6B65A]/40'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0B3D2E]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-[#D6B65A] text-[#0B3D2E] rounded-full shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-[#0B3D2E] text-[#D6B65A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#D6B65A]/30">
                  {item.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-serif font-bold text-lg text-[#0B3D2E] group-hover:text-[#176B45] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-[#176B45]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-black max-h-[65vh] flex items-center justify-center">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-[#0B3D2E] text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold text-[#D6B65A] tracking-wider">
                  {selectedImage.category}
                </span>
                <span className="text-[10px] text-gray-300">
                  AlMahir College Dutse
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
