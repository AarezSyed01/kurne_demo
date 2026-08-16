import React from 'react';
import { WHY_CHOOSE_FEATURES } from '../data/physicsData';
import { 
  UserCheck, 
  ShieldCheck, 
  FileCheck, 
  Calculator, 
  HelpCircle, 
  Target, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface WhyChooseSectionProps {
  onOpenEnquiry: (featureTitle?: string) => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenEnquiry }) => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return UserCheck;
      case 'ShieldCheck': return ShieldCheck;
      case 'FileCheck': return FileCheck;
      case 'Calculator': return Calculator;
      case 'HelpCircle': return HelpCircle;
      case 'Target': return Target;
      default: return Sparkles;
    }
  };

  return (
    <section id="why-kurne" className="py-20 lg:py-28 bg-[#022B18] text-white relative overflow-hidden">
      {/* Background Physics Grid */}
      <div className="absolute inset-0 bg-physics-grid-dark opacity-35 pointer-events-none" />

      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0B6B3A]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FFD21F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B6B3A]/80 border border-[#FFD21F]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span>Why Kurne Institute</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Designed for <span className="text-[#FFD21F]">Concept &amp; Score Mastery</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
            Six pillars that set our Physics coaching in Latur apart, ensuring students not only clear exams but excel with top percentiles.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_FEATURES.map((feature, idx) => {
            const Icon = getFeatureIcon(feature.icon);
            return (
              <div
                key={feature.title}
                onClick={() => onOpenEnquiry(feature.title)}
                className="group relative bg-[#064D2A] rounded-3xl p-7 border border-emerald-600/40 hover:border-[#FFD21F] shadow-xl hover:shadow-2xl hover:shadow-[#0B6B3A]/30 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD21F]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FFD21F]/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#022B18] text-[#FFD21F] group-hover:bg-[#FFD21F] group-hover:text-[#022B18] flex items-center justify-center transition-colors shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono-formula font-bold text-emerald-300/80">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-[#FFD21F] transition-colors tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-emerald-100/80 mt-2.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-700/50 flex items-center justify-between text-xs font-bold text-emerald-300 group-hover:text-[#FFD21F]">
                  <span>Discover this feature</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0B6B3A]/60 border border-[#FFD21F]/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Experience the difference in your very first session.
            </div>
            <div className="text-xs sm:text-sm text-emerald-200">
              Attend a student counselling session with Mr. Mubeen Kurne Sir in Latur.
            </div>
          </div>
          <button
            onClick={() => onOpenEnquiry('Why Kurne Free Counselling')}
            className="px-6 py-3 rounded-xl bg-[#FFD21F] hover:bg-[#F0C20E] text-[#022B18] font-black text-xs sm:text-sm shadow-lg whitespace-nowrap cursor-pointer transition-all"
          >
            Enquire for Next Batch
          </button>
        </div>

      </div>
    </section>
  );
};
