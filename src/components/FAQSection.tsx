import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/physicsData';
import { HelpCircle, ChevronDown, ChevronUp, Atom } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#F7F9F7] relative overflow-hidden">
      {/* Background Physics Grid */}
      <div className="absolute inset-0 bg-physics-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] border border-[#0B6B3A]/30 text-[#064D2A] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#0B6B3A]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#022B18] tracking-tight">
            Common Questions <span className="text-[#0B6B3A]">Answered</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600">
            Clear details about admissions, classes, tests and coaching at Kurne Institute in Latur.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-emerald-100/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F7F9F7] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-black text-[#022B18]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#064D2A] text-[#FFD21F]' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-gray-700 leading-relaxed border-t border-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
