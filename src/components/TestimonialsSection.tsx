import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/physicsData';
import { MessageSquare, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#022B18] text-white relative overflow-hidden">
      {/* Background Physics Grid */}
      <div className="absolute inset-0 bg-physics-grid-dark opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B6B3A]/80 border border-[#FFD21F]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span>Student &amp; Parent Voices</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            What Our Students <span className="text-[#FFD21F]">Share</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
            Real feedback on classroom teaching, personal doubt solving, and physics confidence from Kurne Institute students.
          </p>
        </div>

        {/* Carousel / Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-[#064D2A] rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                idx === activeIndex
                  ? 'border-[#FFD21F] shadow-2xl shadow-black/50 ring-2 ring-[#FFD21F]/30'
                  : 'border-emerald-600/40 hover:border-emerald-500'
              }`}
            >
              {/* Quote Icon watermark */}
              <Quote className="absolute -bottom-4 -right-4 w-28 h-28 text-emerald-500/10 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#022B18] text-[#FFD21F] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#022B18] text-emerald-300 border border-emerald-700">
                    {item.examType}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-emerald-100/95 italic leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-700/50 flex items-center justify-between">
                <div>
                  <div className="text-base font-black text-white font-mono-formula">
                    {item.studentName}
                  </div>
                  <div className="text-xs text-[#FFD21F] font-semibold">
                    {item.classBatch}
                  </div>
                </div>

                {item.verifiedBadge && (
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-[#022B18] px-2 py-1 rounded-lg border border-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center text-xs text-emerald-300/80">
          Editable placeholder format: Genuine student testimonials and signed parent feedback will be updated regularly.
        </div>

      </div>
    </section>
  );
};
