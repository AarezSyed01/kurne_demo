import React from 'react';
import { METHODOLOGY_STEPS } from '../data/physicsData';
import { 
  Brain, 
  Lightbulb, 
  Edit3, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap
} from 'lucide-react';

interface MethodologySectionProps {
  onOpenEnquiry: (stepName?: string) => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenEnquiry }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return Brain;
      case 'Lightbulb': return Lightbulb;
      case 'Edit3': return Edit3;
      case 'CheckCircle2': return CheckCircle2;
      default: return Sparkles;
    }
  };

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-[#F7F9F7] relative overflow-hidden">
      {/* Background Physics Grid */}
      <div className="absolute inset-0 bg-physics-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] border border-[#0B6B3A]/30 text-[#064D2A] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#0B6B3A]" />
            <span>Structured Pedagogy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#022B18] tracking-tight">
            How We Make Physics <span className="text-[#0B6B3A]">Easier</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our 4-step progressive learning framework transforms abstract physics formulas into clear, intuitive concepts and reliable exam problem-solving power.
          </p>
        </div>

        {/* 4-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {METHODOLOGY_STEPS.map((step, idx) => {
            const Icon = getStepIcon(step.icon);
            return (
              <div
                key={step.stepNumber}
                className="relative bg-white rounded-3xl p-7 shadow-xl shadow-[#022B18]/5 border border-emerald-100/90 hover:border-[#FFD21F] hover:shadow-2xl hover:shadow-[#064D2A]/10 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl sm:text-3xl font-black font-mono-formula text-[#064D2A] group-hover:text-[#FFD21F] transition-colors">
                    {step.stepNumber}
                  </span>
                  
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF7EE] text-[#064D2A] group-hover:bg-[#064D2A] group-hover:text-[#FFD21F] flex items-center justify-center transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#022B18] tracking-tight group-hover:text-[#064D2A] transition-colors">
                    {step.title}
                  </h3>

                  <div className="text-xs font-bold text-[#0B6B3A]">
                    {step.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-[#064D2A]">
                  <span>Step {idx + 1} of 4</span>
                  <div className="w-2 h-2 rounded-full bg-[#064D2A] group-hover:bg-[#FFD21F] transition-colors" />
                </div>
              </div>
            );
          })}

        </div>

        {/* Process Guarantee Strip */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-emerald-200 shadow-md text-xs sm:text-sm text-gray-700">
            <span className="font-bold text-[#064D2A]">
              The Kurne Physics Standard:
            </span>
            <span className="text-gray-600">
              No rote learning • Derivations with First-Principles • Daily Numerical Drills
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
