import React from 'react';
import { INSTITUTE_INFO } from '../data/physicsData';
import { 
  Atom, 
  Phone, 
  MapPin, 
  MessageCircle, 
  ArrowUp, 
  Instagram, 
  Facebook, 
  Youtube,
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#022B18] text-white border-t-4 border-[#0B6B3A] pt-16 pb-14 relative overflow-hidden">
        {/* Background Physics Grid */}
        <div className="absolute inset-0 bg-physics-grid-dark opacity-25 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-emerald-800/60">
            
            {/* Col 1: Institute Brand & Motto */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFD21F] text-[#022B18] flex items-center justify-center font-black shadow-md">
                  <Atom className="w-6 h-6 animate-spin-slow text-[#022B18]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    KURNE <span className="text-[#FFD21F]">INSTITUTE</span>
                  </div>
                  <div className="text-xs font-bold tracking-wider text-emerald-300 uppercase">
                    Physics Coaching • Latur
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/80 max-w-sm leading-relaxed">
                Founded by <strong>{INSTITUTE_INFO.founder}</strong> in Latur, Maharashtra. Dedicated to concept-driven Physics education for 11th and 12th students with personal attention and regular evaluation.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs font-semibold text-emerald-300">
                  Core Pillars:
                </span>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-[#022B18]">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFD21F]">Attention</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-200">Concepts</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFD21F]">Tests</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-200">Results</span>
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FFD21F]">
                Quick Navigation
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-100">
                <li>
                  <a href="#home" className="hover:text-[#FFD21F] transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#FFD21F] transition-colors">About Institute</a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-[#FFD21F] transition-colors">11th &amp; 12th Courses</a>
                </li>
                <li>
                  <a href="#topics" className="hover:text-[#FFD21F] transition-colors">Physics Topics &amp; Formulas</a>
                </li>
                <li>
                  <a href="#methodology" className="hover:text-[#FFD21F] transition-colors">Teaching Methodology</a>
                </li>
                <li>
                  <a href="#faculty" className="hover:text-[#FFD21F] transition-colors">Meet Mubeen Kurne Sir</a>
                </li>
                <li>
                  <a href="#batches" className="hover:text-[#FFD21F] transition-colors">Batch Schedules</a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#FFD21F] transition-colors">Campus Gallery</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#FFD21F] transition-colors">Admission &amp; Contact</a>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact & Address */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FFD21F]">
                Institute Contact Details
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-emerald-100/90">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                  <span>
                    {INSTITUTE_INFO.address}, Latur, Maharashtra - 413512
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#FFD21F] shrink-0" />
                  <a
                    href={`tel:${INSTITUTE_INFO.phoneRaw}`}
                    className="font-mono-formula font-bold text-[#FFD21F] hover:underline"
                  >
                    {INSTITUTE_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <a
                    href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=Hello%20Kurne%20Institute,%20I%20want%20to%20enquire%20about%20Physics%20batches.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-emerald-200"
                  >
                    WhatsApp Admission Enquiry
                  </a>
                </div>
              </div>

              {/* Social Media Placeholders */}
              <div className="pt-2">
                <div className="text-[11px] text-emerald-300/80 mb-2 font-semibold">
                  Connect with us:
                </div>
                <div className="flex items-center gap-2.5">
                  {[
                    { name: 'WhatsApp', icon: MessageCircle, href: `https://wa.me/${INSTITUTE_INFO.whatsappNumber}` },
                    { name: 'Instagram', icon: Instagram, href: '#instagram-placeholder' },
                    { name: 'Facebook', icon: Facebook, href: '#facebook-placeholder' },
                    { name: 'YouTube', icon: Youtube, href: '#youtube-placeholder' }
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FFD21F] hover:text-[#022B18] text-white flex items-center justify-center transition-colors shadow-sm"
                        title={social.name}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Copyright & Back to top */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
            <div>
              &copy; 2025-2026 <strong>Kurne Institute</strong> | Behind Keshavrai School, Latur
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#FFD21F] hover:text-white font-bold transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </footer>

      {/* Sleek Minimalist White Bottom Footer Strip */}
      <div className="bg-white px-4 sm:px-10 py-3 border-t border-gray-100 text-[11px] text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© 2025-2026 Kurne Institute • Latur, Maharashtra</p>
        <div className="flex gap-4 text-[11px] font-semibold text-gray-600">
          <a href="#home" className="hover:text-[#064D2A]">Home</a>
          <a href="#about" className="hover:text-[#064D2A]">About</a>
          <a href="#courses" className="hover:text-[#064D2A]">Courses</a>
          <a href="#contact" className="hover:text-[#064D2A]">Contact</a>
        </div>
      </div>
    </>
  );
};
