import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/physicsData';
import { GalleryItem } from '../types';
import { Image, Atom, Sparkles, Eye, Users, BookOpen, Layers } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Classroom', 'Doubt Solving', 'Tests & Analysis', 'Institute Premises'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F7F9F7] relative overflow-hidden">
      {/* Background Physics Grid */}
      <div className="absolute inset-0 bg-physics-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] border border-[#0B6B3A]/30 text-[#064D2A] text-xs font-bold uppercase tracking-wider">
            <Image className="w-3.5 h-3.5 text-[#0B6B3A]" />
            <span>Campus &amp; Learning Culture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#022B18] tracking-tight">
            Inside <span className="text-[#0B6B3A]">Kurne Institute</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Take a visual tour through our classroom teaching sessions, individualized doubt-solving hours, and regular test evaluation environment in Latur.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#064D2A] text-[#FFD21F] shadow-md shadow-[#064D2A]/20'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#022B18]/5 border border-emerald-100/90 hover:border-[#064D2A] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              {/* Media Frame Placeholder */}
              <div className="relative aspect-video sm:aspect-square bg-gradient-to-br from-[#022B18] via-[#064D2A] to-[#0B6B3A] p-6 flex flex-col items-center justify-center text-center overflow-hidden">
                {/* Atom watermark in background */}
                <Atom className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#FFD21F] flex items-center justify-center mb-3 shadow-inner group-hover:bg-[#FFD21F] group-hover:text-[#022B18] transition-colors">
                  <Image className="w-7 h-7" />
                </div>

                <div className="font-mono-formula text-xs font-bold text-[#FFD21F] px-2.5 py-1 rounded bg-black/40 border border-white/10 uppercase">
                  {item.imagePlaceholderText}
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#FFD21F] text-[#022B18] text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Session</span>
                  </div>
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-5 space-y-1.5 bg-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B6B3A]">
                  {item.category}
                </span>
                <h3 className="text-base font-black text-[#022B18] group-hover:text-[#064D2A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-xl w-full bg-[#064D2A] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#FFD21F] shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-emerald-600">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFD21F]">
                  {selectedImage.category}
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-emerald-300 hover:text-white text-sm font-bold px-2.5 py-1 rounded-lg bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-video bg-[#022B18] rounded-2xl border border-emerald-600 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                <Atom className="w-16 h-16 text-[#FFD21F] mb-3 animate-spin-slow" />
                <div className="font-mono-formula text-sm font-bold text-[#FFD21F]">
                  {selectedImage.imagePlaceholderText}
                </div>
                <div className="text-xs text-emerald-300 mt-1">
                  Kurne Institute • Latur, Maharashtra
                </div>
              </div>

              <div>
                <h4 className="text-xl font-black text-white">
                  {selectedImage.title}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-700/50 flex justify-end">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-2 rounded-xl bg-[#FFD21F] text-[#022B18] font-bold text-xs hover:bg-[#F0C20E] transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
