import React from 'react';
import { INSTITUTE_INFO } from '../data/physicsData';
import { 
  Atom, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  Lightbulb, 
  Target, 
  HeartHandshake, 
  HelpCircle 
} from 'lucide-react';

interface FounderSectionProps {
  onOpenEnquiry: (courseName?: string) => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="faculty" className="py-20 lg:py-28 bg-[#022B18] text-white relative overflow-hidden">
      {/* Background Physics Equations Grid */}
      <div className="absolute inset-0 bg-physics-grid-dark opacity-30 pointer-events-none" />

      {/* Decorative Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#0B6B3A]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFD21F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B6B3A]/80 border border-[#FFD21F]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <Atom className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span>Academic Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Meet Your Physics Mentor
          </h2>

          <div className="text-xl sm:text-2xl font-bold text-[#FFD21F]">
            Mr. Mubeen Kurne Sir
          </div>

          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-300">
            Founder &amp; Senior Physics Educator • Kurne Institute
          </p>
        </div>

        {/* Founder Presentation Card */}
        <div className="bg-[#064D2A] rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#0B6B3A] shadow-2xl shadow-black/50 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Founder Portrait Area */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              
              <div className="relative w-64 sm:w-72 rounded-3xl p-1.5 bg-gradient-to-b from-[#FFD21F] via-[#0B6B3A] to-[#022B18] shadow-2xl">
                <div className="rounded-[22px] bg-[#022B18] p-6 flex flex-col items-center justify-center min-h-[320px] relative overflow-hidden border border-emerald-600/40">
                  
                  {/* Subtle atom watermark */}
                  <Atom className="absolute -right-8 -bottom-8 w-44 h-44 text-emerald-500/10 pointer-events-none animate-spin-slow" />
                  
                  {/* Portrait Placeholder / Presentation Icon */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#FFD21F] to-[#0B6B3A] p-1.5 shadow-xl mb-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#064D2A] flex flex-col items-center justify-center text-white border-2 border-[#FFD21F]">
                      <span className="text-4xl font-black text-[#FFD21F]">MK</span>
                      <span className="text-[9px] font-bold text-emerald-200 tracking-wider">LATUR</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono-formula px-3 py-1 rounded-full bg-[#FFD21F]/20 text-[#FFD21F] font-bold border border-[#FFD21F]/40 mb-2">
                    [FOUNDER PHOTO]
                  </div>

                  <div className="text-base font-black text-white">
                    Mr. Mubeen Kurne Sir
                  </div>

                  <div className="text-xs text-emerald-300 font-medium mt-0.5">
                    Founder &amp; Physics Educator
                  </div>

                  <div className="text-[11px] text-emerald-400/80 mt-2 font-mono-formula">
                    [QUALIFICATION / CREDENTIALS]
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs text-[#FFD21F] font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Latur Physics Mentorship</span>
                  </div>

                </div>
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 w-full max-w-xs">
                <a
                  href={`tel:${INSTITUTE_INFO.phoneRaw}`}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFD21F] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Sir</span>
                </a>
                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=Hello%20Mubeen%20Kurne%20Sir,%20I%20would%20like%20to%20know%20more%20about%20Physics%20batches.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right: Mentor Philosophy & Commitments */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Making Physics <span className="text-[#FFD21F]">Clear, Logical &amp; Scoring</span>
                </h3>
                
                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                  Physics is often perceived by 11th and 12th students as a complex puzzle of formulas and tricky derivations. Under the personalized guidance of <strong>Mr. Mubeen Kurne Sir</strong>, the focus is placed squarely on concept clarity, visualization of physical phenomena, and systematic step-by-step problem solving.
                </p>
              </div>

              {/* Four Pillars of Sir's Teaching */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-2xl bg-[#022B18]/70 border border-emerald-600/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#FFD21F] font-bold text-sm">
                    <Lightbulb className="w-4 h-4" />
                    <span>Conceptual Teaching</span>
                  </div>
                  <p className="text-xs text-emerald-200/90 leading-relaxed">
                    Building the physical intuition behind every law before introducing equations and numerical applications.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#022B18]/70 border border-emerald-600/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#FFD21F] font-bold text-sm">
                    <Target className="w-4 h-4" />
                    <span>Problem Solving Mastery</span>
                  </div>
                  <p className="text-xs text-emerald-200/90 leading-relaxed">
                    Teaching structured numerical breakdown: identifying given data, selecting right formulas, and preventing calculation errors.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#022B18]/70 border border-emerald-600/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#FFD21F] font-bold text-sm">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Individual Student Attention</span>
                  </div>
                  <p className="text-xs text-emerald-200/90 leading-relaxed">
                    Ensuring no student feels left behind in a crowded room. Every student's doubts and pace are personally addressed.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#022B18]/70 border border-emerald-600/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#FFD21F] font-bold text-sm">
                    <HelpCircle className="w-4 h-4" />
                    <span>Continuous Student Guidance</span>
                  </div>
                  <p className="text-xs text-emerald-200/90 leading-relaxed">
                    Regular academic mentoring, exam strategy planning, and psychological encouragement for board and competitive tests.
                  </p>
                </div>

              </div>

              {/* Callout quote */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#022B18] to-[#0B6B3A]/40 border-l-4 border-[#FFD21F] text-xs sm:text-sm text-emerald-100 italic">
                "Our mission is simple: replace the fear of Physics with profound conceptual confidence, so students write exams with complete mastery."
                <div className="mt-1 text-right font-bold not-italic text-[#FFD21F] text-xs">
                  — Mr. Mubeen Kurne Sir
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry('Founder Mentorship')}
                  className="px-6 py-3.5 rounded-xl bg-[#FFD21F] hover:bg-[#F0C20E] text-[#022B18] font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg cursor-pointer"
                >
                  <span>Request Student Counselling with Mubeen Kurne Sir</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
