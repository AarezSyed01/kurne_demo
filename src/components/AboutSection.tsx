import React, { useState } from 'react';
import { INSTITUTE_INFO } from '../data/physicsData';
import { 
  Atom, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';

interface AboutSectionProps {
  onOpenEnquiry: (courseName?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  const [activeDiagramTab, setActiveDiagramTab] = useState<'mechanics' | 'electromagnetism' | 'optics'>('mechanics');

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F9F7] relative overflow-hidden">
      {/* Background Physics Grid */}
      <div className="absolute inset-0 bg-physics-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] border border-[#0B6B3A]/30 text-[#064D2A] text-xs font-bold uppercase tracking-wider">
            <Atom className="w-3.5 h-3.5 text-[#0B6B3A]" />
            <span>About Kurne Institute</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#022B18] tracking-tight">
            Better Concepts. <span className="text-[#0B6B3A]">Higher Results.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Kurne Institute is a Physics coaching institute in Latur dedicated to helping students develop strong conceptual understanding, numerical-solving ability and confidence in Physics.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Story, Mentorship & Core Commitments */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#022B18]/5 border border-emerald-100 space-y-5">
              
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-[#064D2A] text-[#FFD21F] flex items-center justify-center font-black text-xl shadow-md">
                  KI
                </div>
                <div>
                  <div className="text-lg font-black text-[#022B18]">
                    Founded by {INSTITUTE_INFO.founder}
                  </div>
                  <div className="text-xs font-semibold text-[#0B6B3A]">
                    Senior Physics Educator • Latur, Maharashtra
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                At Kurne Institute, we believe that Physics is not a subject to be memorized — it is the language of the physical universe. Guided by <strong>Mr. Mubeen Kurne Sir</strong>, our teaching methodology turns intimidating formulas into intuitive, step-by-step problem-solving principles.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Crystal-clear derivations explained with fundamental logic',
                  'Rigorous numerical drills designed for State Board, MHT-CET, NEET & JEE',
                  'One-on-one student monitoring to address specific conceptual doubts',
                  'Regular evaluation with actionable, step-by-step feedback'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#EBF7EE] text-[#064D2A] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Verified Placeholders Stats Row (without inventing unverified numbers) */}
              <div className="pt-4 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-[#F7F9F7] p-3 rounded-xl border border-emerald-100/80">
                  <div className="text-lg sm:text-xl font-black text-[#064D2A] font-mono-formula">[X]+</div>
                  <div className="text-[11px] font-semibold text-gray-500">Students</div>
                </div>
                <div className="bg-[#F7F9F7] p-3 rounded-xl border border-emerald-100/80">
                  <div className="text-lg sm:text-xl font-black text-[#064D2A] font-mono-formula">[X]+</div>
                  <div className="text-[11px] font-semibold text-gray-500">Years Experience</div>
                </div>
                <div className="bg-[#F7F9F7] p-3 rounded-xl border border-emerald-100/80">
                  <div className="text-lg sm:text-xl font-black text-[#064D2A] font-mono-formula">[X]+</div>
                  <div className="text-[11px] font-semibold text-gray-500">Batches</div>
                </div>
                <div className="bg-[#F7F9F7] p-3 rounded-xl border border-emerald-100/80">
                  <div className="text-lg sm:text-xl font-black text-[#064D2A] font-mono-formula">[X]%</div>
                  <div className="text-[11px] font-semibold text-gray-500">Improvement</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry('About Kurne Institute')}
                  className="px-6 py-3 rounded-xl bg-[#064D2A] hover:bg-[#0B6B3A] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <span>Join Our Next Batch</span>
                  <ArrowRight className="w-4 h-4 text-[#FFD21F]" />
                </button>
                
                <a
                  href="#founder"
                  className="px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#022B18] font-bold text-xs sm:text-sm transition-colors"
                >
                  Meet Mubeen Kurne Sir
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Visually Interesting Physics Illustration & Formula Engine */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#022B18] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-2 border-[#0B6B3A] overflow-hidden">
              
              {/* Glow highlights */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD21F]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0B6B3A]/30 rounded-full blur-3xl pointer-events-none" />

              {/* Header inside illustration */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Atom className="w-5 h-5 text-[#FFD21F]" />
                  <span className="font-bold text-sm tracking-wide text-white">
                    PHYSICS CONCEPT CORE
                  </span>
                </div>
                <span className="text-[11px] font-mono-formula text-[#FFD21F] bg-[#064D2A] px-2 py-0.5 rounded border border-[#0B6B3A]">
                  KURNE METHODOLOGY
                </span>
              </div>

              {/* Interactive Diagram Mode Selector */}
              <div className="flex rounded-xl bg-[#064D2A]/80 p-1 border border-emerald-600/40 mb-6">
                {[
                  { id: 'mechanics', label: 'Mechanics' },
                  { id: 'electromagnetism', label: 'Electromagnetism' },
                  { id: 'optics', label: 'Optics & Modern' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDiagramTab(tab.id as any)}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeDiagramTab === tab.id
                        ? 'bg-[#FFD21F] text-[#022B18] shadow-md'
                        : 'text-emerald-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Diagram Stage */}
              <div className="relative min-h-[260px] rounded-2xl bg-[#064D2A]/60 border border-emerald-500/30 p-6 flex flex-col justify-between">
                
                {activeDiagramTab === 'mechanics' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs text-emerald-300">
                      <span className="font-bold">Kinematics &amp; Dynamic Vectors</span>
                      <span className="font-mono-formula text-[#FFD21F]">F = m · a</span>
                    </div>

                    {/* Vector illustration box */}
                    <div className="py-4 px-3 rounded-xl bg-[#022B18]/70 border border-emerald-700/50 space-y-2.5">
                      <div className="flex items-center justify-between font-mono-formula text-xs sm:text-sm text-yellow-300">
                        <span>v² = u² + 2as</span>
                        <span className="text-emerald-400">s = ut + ½at²</span>
                      </div>
                      <div className="w-full bg-emerald-950/80 h-2 rounded-full overflow-hidden relative">
                        <div className="bg-gradient-to-r from-emerald-500 to-[#FFD21F] h-full w-3/4 rounded-full" />
                      </div>
                      <div className="flex justify-between text-[10px] text-emerald-300/80 font-mono-formula">
                        <span>Initial Vector (u)</span>
                        <span>Acceleration (a)</span>
                        <span>Velocity (v)</span>
                      </div>
                    </div>

                    <p className="text-xs text-emerald-100/90 leading-relaxed">
                      Every student is trained to visually dissect free-body diagrams (FBD), resolve components along coordinate axes, and solve equilibrium equations effortlessly.
                    </p>
                  </div>
                )}

                {activeDiagramTab === 'electromagnetism' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs text-emerald-300">
                      <span className="font-bold">Field Lines &amp; Induction</span>
                      <span className="font-mono-formula text-[#FFD21F]">ε = -dΦ/dt</span>
                    </div>

                    <div className="py-4 px-3 rounded-xl bg-[#022B18]/70 border border-emerald-700/50 space-y-2.5">
                      <div className="flex items-center justify-between font-mono-formula text-xs sm:text-sm text-yellow-300">
                        <span>V = I · R</span>
                        <span className="text-emerald-400">F = q(v × B)</span>
                      </div>
                      <div className="w-full bg-emerald-950/80 h-2 rounded-full overflow-hidden relative">
                        <div className="bg-gradient-to-r from-[#FFD21F] via-emerald-400 to-teal-300 h-full w-4/5 rounded-full" />
                      </div>
                      <div className="flex justify-between text-[10px] text-emerald-300/80 font-mono-formula">
                        <span>Gauss Law</span>
                        <span>Faraday Induction</span>
                        <span>Lorentz Force</span>
                      </div>
                    </div>

                    <p className="text-xs text-emerald-100/90 leading-relaxed">
                      Understanding electric flux, magnetic field lines, and circuit loops through intuitive physical analogies makes 12th electromagnetism a scoring section.
                    </p>
                  </div>
                )}

                {activeDiagramTab === 'optics' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs text-emerald-300">
                      <span className="font-bold">Ray Optics &amp; Wave Interference</span>
                      <span className="font-mono-formula text-[#FFD21F]">E = hν = hc/λ</span>
                    </div>

                    <div className="py-4 px-3 rounded-xl bg-[#022B18]/70 border border-emerald-700/50 space-y-2.5">
                      <div className="flex items-center justify-between font-mono-formula text-xs sm:text-sm text-yellow-300">
                        <span>1/f = (μ - 1)(1/R₁ - 1/R₂)</span>
                        <span className="text-emerald-400">λ = ax/D</span>
                      </div>
                      <div className="w-full bg-emerald-950/80 h-2 rounded-full overflow-hidden relative">
                        <div className="bg-gradient-to-r from-teal-400 to-[#FFD21F] h-full w-2/3 rounded-full" />
                      </div>
                      <div className="flex justify-between text-[10px] text-emerald-300/80 font-mono-formula">
                        <span>Lens Maker</span>
                        <span>YDSE Fringes</span>
                        <span>Photoelectric</span>
                      </div>
                    </div>

                    <p className="text-xs text-emerald-100/90 leading-relaxed">
                      From ray tracing conventions to de Broglie matter waves and semiconductor PN-junctions, we emphasize exact step-by-step presentation for board and CET success.
                    </p>
                  </div>
                )}

                {/* Bottom formula indicator */}
                <div className="pt-3 border-t border-emerald-700/40 flex items-center justify-between text-[11px] text-emerald-300">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span>Conceptual Clarity First</span>
                  </span>
                  <span className="text-[#FFD21F] font-bold">Latur Physics Center</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
