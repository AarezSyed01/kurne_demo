import React from 'react';
import { Award, Trophy, Star, CheckCircle2, ArrowRight } from 'lucide-react';

interface ResultsSectionProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenEnquiry }) => {
  const resultCards = [
    {
      id: 'res-1',
      category: 'HSC Board Physics',
      title: '[Board / Competitive Exam Achievement]',
      highlight: '[Verified Result]',
      student: '[Student Achievement]',
      description: 'Systematic presentation, derivation step accuracy, and complete numerical mastery leading to top academic standing in Latur.',
      badge: 'State Board'
    },
    {
      id: 'res-2',
      category: 'MHT-CET / NEET Physics',
      title: '[Board / Competitive Exam Achievement]',
      highlight: '[Verified Result]',
      student: '[Student Achievement]',
      description: 'High-accuracy numerical solving, time-management drills, and rigorous unit testing resulting in stellar percentiles.',
      badge: 'Competitive'
    },
    {
      id: 'res-3',
      category: '11th Foundation & Olympiad',
      title: '[Board / Competitive Exam Achievement]',
      highlight: '[Verified Result]',
      student: '[Student Achievement]',
      description: 'Strong first-principles foundation built from early Class 11 leading to remarkable conceptual clarity.',
      badge: 'Foundation'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F9F7] relative overflow-hidden">
      {/* Background Physics Grid */}
      <div className="absolute inset-0 bg-physics-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] border border-[#0B6B3A]/30 text-[#064D2A] text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-[#0B6B3A]" />
            <span>Academic Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#022B18] tracking-tight">
            Our Students. <span className="text-[#0B6B3A]">Our Pride.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Every batch at Kurne Institute is driven by genuine concept clarity and hard work. Verified results and score improvements are documented below.
          </p>
        </div>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {resultCards.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 shadow-xl shadow-[#022B18]/5 border border-emerald-100 flex flex-col justify-between hover:border-[#064D2A] hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#064D2A] text-[#FFD21F] flex items-center justify-center shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EBF7EE] text-[#064D2A] border border-emerald-200">
                    {item.badge}
                  </span>
                </div>

                <div className="font-mono-formula text-xs font-bold uppercase tracking-wider text-[#0B6B3A] mb-1">
                  {item.category}
                </div>

                <h3 className="text-xl font-black text-[#022B18] tracking-tight mb-2">
                  {item.title}
                </h3>

                <div className="p-3.5 rounded-2xl bg-[#F7F9F7] border border-emerald-100/80 mb-4 space-y-1">
                  <div className="text-xs text-gray-500 font-semibold">Verified Score Record:</div>
                  <div className="text-base font-black font-mono-formula text-[#064D2A]">
                    {item.highlight}
                  </div>
                  <div className="text-xs font-bold text-gray-800">
                    {item.student}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#064D2A]">
                <span>Verified Institute Record</span>
                <CheckCircle2 className="w-4 h-4 text-[#0B6B3A]" />
              </div>
            </div>
          ))}
        </div>

        {/* Results Note */}
        <div className="mt-12 text-center text-xs text-gray-500 max-w-xl mx-auto">
          * Kurne Institute maintains strict academic integrity. Student records and scorecards are updated upon verified score releases from state and national examination boards.
        </div>

      </div>
    </section>
  );
};
