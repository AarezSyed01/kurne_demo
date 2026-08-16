import React from 'react';
import { INSTITUTE_INFO } from '../data/physicsData';
import { Phone, MessageCircle, ArrowRight, Atom, CheckCircle2, Sparkles } from 'lucide-react';

interface AdmissionsBannerProps {
  onOpenEnquiry: (batchType?: string) => void;
}

export const AdmissionsBanner: React.FC<AdmissionsBannerProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#022B18] via-[#064D2A] to-[#022B18] text-white relative overflow-hidden">
      {/* Background Physics Visual Watermarks */}
      <div className="absolute inset-0 bg-physics-grid-dark opacity-35 pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0B6B3A]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card styled after the poster's admission focal point */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#064D2A] border-4 border-[#FFD21F] shadow-2xl shadow-black/60 text-center overflow-hidden">
          
          {/* Top Corner Floating Badges */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FFD21F]/20 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-emerald-500/20 rounded-full blur-xl pointer-events-none" />

          {/* Brand header */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#022B18] border border-[#FFD21F] text-[#FFD21F] text-xs sm:text-sm font-black uppercase tracking-widest mb-6 shadow-md">
            <Atom className="w-4 h-4 text-[#FFD21F] animate-spin-slow" />
            <span>KURNE INSTITUTE • LATUR</span>
          </div>

          {/* Main Large Heading */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#FFD21F] tracking-tight uppercase leading-none drop-shadow-md">
            ADMISSIONS OPEN
          </h2>

          {/* Subheading */}
          <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-6 tracking-tight">
            11th &amp; 12th Physics Batches
          </div>

          {/* Tagline Strip from Poster */}
          <div className="inline-block max-w-3xl mx-auto bg-[#022B18]/90 border border-emerald-500/50 rounded-2xl py-3 px-6 shadow-inner mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-base font-bold text-emerald-100">
              <span className="text-[#FFD21F] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFD21F]" />
                Individual Attention
              </span>
              <span className="hidden sm:inline text-emerald-500">•</span>
              <span className="text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFD21F]" />
                Strong Concepts
              </span>
              <span className="hidden sm:inline text-emerald-500">•</span>
              <span className="text-[#FFD21F] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFD21F]" />
                Regular Tests
              </span>
            </div>
          </div>

          {/* Founder Signature mention */}
          <p className="text-sm sm:text-base text-emerald-200 mb-8 max-w-xl mx-auto font-medium">
            Mentored personally by <strong>{INSTITUTE_INFO.founder}</strong> (Founder &amp; Senior Physics Educator). Limited seats per batch for focused individual attention.
          </p>

          {/* Action CTAs: Prominent Yellow Button + Phone / WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            
            <button
              onClick={() => onOpenEnquiry('Admission Banner CTA')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FFD21F] hover:bg-[#F0C20E] text-[#022B18] font-black text-base sm:text-lg shadow-xl hover:shadow-2xl shadow-black/40 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Contact for Admission</span>
              <ArrowRight className="w-5 h-5 text-[#022B18]" />
            </button>

            <a
              href={`tel:${INSTITUTE_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5 text-[#FFD21F]" />
              <span>{INSTITUTE_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=Hello%20Kurne%20Institute,%20I%20want%20to%20apply%20for%20admission%20in%20Physics%20batch.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto p-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg transition-colors"
              title="WhatsApp Admission Desk"
              aria-label="Direct WhatsApp Admission"
            >
              <MessageCircle className="w-6 h-6" />
            </a>

          </div>

          {/* Address verification footer tag */}
          <div className="mt-8 text-xs text-emerald-300/80 font-medium">
            Location: {INSTITUTE_INFO.address}
          </div>

        </div>

      </div>
    </section>
  );
};
