import React, { useState } from 'react';
import { NewsItem } from '../types';
import { Calendar, Tag, ArrowRight, X, BookOpen } from 'lucide-react';

interface NewsSectionProps {
  news: NewsItem[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const publishedNews = news.filter(n => n.published);

  return (
    <section id="news" className="py-20 bg-white text-[#17231D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#176B45] font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1 bg-[#176B45]/10 rounded-full inline-block">
            Announcements &amp; News
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E]">
            Latest School Updates
          </h2>
          <div className="w-20 h-1 bg-[#D6B65A] mx-auto rounded-full"></div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publishedNews.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAF7] rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {item.imageUrl && (
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B3D2E] text-[#D6B65A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#D6B65A]/30">
                      {item.category}
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#176B45]" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#0B3D2E] group-hover:text-[#176B45] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(item)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3D2E] hover:text-[#176B45] transition-colors cursor-pointer"
                >
                  <span>Read Full Notice</span>
                  <ArrowRight className="w-4 h-4 text-[#D6B65A]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-2 border-[#176B45] relative animate-in fade-in zoom-in duration-200 my-8">
            
            <div className="bg-[#0B3D2E] text-white p-6 sm:p-8 relative">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <span className="text-[#D6B65A] text-xs font-bold uppercase tracking-wider bg-[#176B45] px-3 py-1 rounded-full border border-[#D6B65A]/40">
                {selectedArticle.category}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mt-3">
                {selectedArticle.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-gray-300 mt-2">
                <Calendar className="w-3.5 h-3.5 text-[#D6B65A]" />
                <span>Published on {selectedArticle.date}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
              {selectedArticle.imageUrl && (
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                  className="w-full h-56 object-cover rounded-2xl border border-gray-200"
                />
              )}

              <p className="text-gray-800 text-base leading-relaxed font-normal whitespace-pre-line">
                {selectedArticle.content}
              </p>
            </div>

            <div className="p-6 bg-[#F8FAF7] border-t border-gray-200 text-right">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-[#0B3D2E] text-white text-sm font-bold shadow-md hover:bg-[#176B45] transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
