import React from 'react';
import { INSTITUTE_INFO } from '../data/physicsData';
import { 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Atom, 
  BookOpen, 
  Sparkles,
  Award,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: (courseName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F7F9F7] text-[#111111] border-b border-gray-200">
      
      {/* Split Hero Flex / Grid Container */}
      <div className="flex flex-col lg:flex-row min-h-[640px] relative">
        
        {/* LEFT COLUMN (58%): Sleek Light Canvas with Physics Pattern */}
        <div className="w-full lg:w-[58%] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center relative z-10">
          
          {/* Subtle Physics Background Pattern */}
          <div className="absolute inset-0 physics-pattern pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            
            {/* Sleek Pill Badge */}
            <div className="inline-block bg-[#064D2A] text-white text-[10px] sm:text-[11px] font-bold px-3.5 py-1 rounded-full mb-6 tracking-widest uppercase shadow-sm">
              The Standard of Physics in Latur
            </div>

            {/* High-Contrast Bold Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-[#022B18] leading-[0.95] tracking-tight mb-6">
              MASTER<br />
              <span className="text-[#064D2A]">PHYSICS.</span><br />
              BUILD YOUR<br />
              <span className="text-[#0B6B3A]">FUTURE.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-medium">
              Concept-driven coaching designed to build strong fundamentals and sharpen problem-solving skills for 11th &amp; 12th Std under <strong>{INSTITUTE_INFO.founder}</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry()}
                className="bg-[#022B18] text-white px-7 sm:px-8 py-4 rounded-xl font-bold flex items-center gap-3 group hover:bg-[#064D2A] transition-all cursor-pointer shadow-lg shadow-[#022B18]/15 text-sm sm:text-base"
              >
                <span>Join Institute</span>
                <ArrowRight className="w-5 h-5 text-[#FFD21F] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#courses"
                className="border-2 border-[#022B18] text-[#022B18] px-7 sm:px-8 py-4 rounded-xl font-bold hover:bg-[#022B18] hover:text-white transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Courses</span>
              </a>

              <a
                href={`tel:${INSTITUTE_INFO.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-[#064D2A] hover:underline font-mono-formula"
              >
                <Phone className="w-3.5 h-3.5 text-[#0B6B3A]" />
                <span>{INSTITUTE_INFO.phone}</span>
              </a>
            </div>

            {/* Sleek Stats Strip */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-gray-200 pt-6 sm:pt-8">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-[#022B18] tracking-tight leading-none">100%</span>
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-widest mt-1">Clarity</span>
              </div>

              <div className="h-8 w-px bg-gray-200 hidden xs:block" />

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-[#022B18] tracking-tight leading-none">1-to-1</span>
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-widest mt-1">Attention</span>
              </div>

              <div className="h-8 w-px bg-gray-200 hidden xs:block" />

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-[#022B18] tracking-tight leading-none">Weekly</span>
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-widest mt-1">Tests</span>
              </div>

              <div className="h-8 w-px bg-gray-200 hidden md:block" />

              <div className="hidden md:flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-[#022B18] tracking-tight leading-none">Latur</span>
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-widest mt-1">Center</span>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN (42%): Sleek Dark Green Canvas with Glow Portal */}
        <div className="w-full lg:w-[42%] bg-[#022B18] relative flex items-center justify-center overflow-hidden py-16 lg:py-0 px-6">
          
          {/* Watermark Physics Equations */}
          <div className="absolute top-0 right-0 p-8 text-[#FFD21F] opacity-10 font-mono text-3xl sm:text-4xl pointer-events-none italic select-none leading-relaxed text-right">
            E = mc²<br />
            F = ma<br />
            ∇·B = 0
          </div>

          {/* Floating Admission Status Pill */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-2xl border border-gray-100 z-30 flex items-center gap-3">
            <div className="bg-[#FF4444] w-2.5 h-2.5 rounded-full animate-ping" />
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Admissions Open</p>
              <p className="text-xs font-black text-[#022B18]">11th &amp; 12th Batch 2025</p>
            </div>
          </div>

          {/* Glowing Circular Portal Frame */}
          <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center my-8">
            
            {/* Outer Concentric Dashed Ring */}
            <div className="absolute inset-0 border border-dashed border-[#FFD21F]/30 rounded-full animate-spin-slow" />
            
            {/* Middle Orbit Ring */}
            <div className="absolute inset-6 sm:inset-8 border border-[#FFD21F]/20 rounded-full animate-reverse-spin-slow" />

            {/* Glowing Golden Particle */}
            <div className="absolute top-4 right-4 w-3.5 h-3.5 bg-[#FFD21F] rounded-full shadow-[0_0_15px_#FFD21F]" />

            {/* Main Founder Glowing Portal Circle */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#FFD21F] glow relative z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#0B6B3A] to-[#022B18] text-center p-4 group">
              
              {/* Physics background atom watermark */}
              <Atom className="w-32 h-32 text-[#FFD21F]/20 absolute animate-spin-slow" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#022B18] border-2 border-[#FFD21F] flex items-center justify-center text-[#FFD21F] font-black text-xl sm:text-2xl shadow-inner mb-2">
                  MK
                </div>
                <span className="text-white font-bold opacity-90 text-center text-xs px-4">
                  [MUBEEN KURNE SIR PHOTO]
                </span>
                <span className="text-[10px] text-emerald-200 font-mono-formula mt-0.5">
                  Senior Physics Educator
                </span>
              </div>

            </div>

            {/* Floating White Founder Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-2.5 sm:py-3 rounded-2xl shadow-2xl z-20 w-max text-center border border-gray-100">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Founder &amp; Mentor</p>
              <p className="text-sm sm:text-base font-black text-[#022B18]">Mr. Mubeen Kurne Sir</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
