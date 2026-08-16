import React from 'react';
import { UserCheck, Sparkles, FileCheck2, TrendingUp, ArrowRight } from 'lucide-react';

interface HeroFeatureCardsProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const HeroFeatureCards: React.FC<HeroFeatureCardsProps> = ({ onOpenEnquiry }) => {
  const features = [
    {
      title: 'Individual Attention',
      subtitle: 'Personalized Guidance',
      icon: UserCheck
    },
    {
      title: 'Strong Concepts',
      subtitle: 'Foundation Focused',
      icon: Sparkles
    },
    {
      title: 'Regular Tests',
      subtitle: 'Performance Analysis',
      icon: FileCheck2
    },
    {
      title: 'Better Results',
      subtitle: 'Academic Excellence',
      icon: TrendingUp
    }
  ];

  return (
    <section className="bg-[#064D2A] border-t border-b border-[#FFD21F]/20 py-8 lg:py-6 relative z-30 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                onClick={() => onOpenEnquiry(feature.title)}
                className="flex items-center gap-4 group cursor-pointer p-3 rounded-2xl hover:bg-white/5 transition-all"
              >
                <div className="w-12 h-12 bg-[#FFD21F] rounded-xl flex items-center justify-center flex-shrink-0 text-[#022B18] shadow-md group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base group-hover:text-[#FFD21F] transition-colors">
                    {feature.title}
                  </p>
                  <p className="text-[#FFD21F] text-[11px] opacity-85 font-medium tracking-wide">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
