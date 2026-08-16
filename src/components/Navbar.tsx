import React, { useState, useEffect } from 'react';
import { INSTITUTE_INFO } from '../data/physicsData';
import { Phone, MessageCircle, Menu, X, ArrowRight, Atom, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (courseName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Topics', href: '#topics' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Why Kurne', href: '#why-kurne' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Batches', href: '#batches' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Sleek Top micro-bar */}
      <div className="bg-[#022B18] text-white text-xs py-1.5 px-4 sm:px-10 border-b border-[#0B6B3A]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-emerald-200">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#064D2A] border border-[#FFD21F]/40 text-[#FFD21F] font-bold text-[10px] tracking-widest uppercase">
              Admissions Open 2025-26
            </span>
            <span className="hidden sm:inline text-xs font-medium text-emerald-100/90">
              11th &amp; 12th Physics Batches • Under the Guidance of <strong>{INSTITUTE_INFO.founder}</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden md:flex items-center gap-1.5 text-emerald-200 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>Behind Keshavrai School, {INSTITUTE_INFO.city}</span>
            </div>
            <a
              href={`tel:${INSTITUTE_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-[#FFD21F] font-mono-formula font-bold hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{INSTITUTE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sleek Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-black/5 py-2.5 border-b border-gray-100'
            : 'bg-white py-3.5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#064D2A] rounded-lg p-0.5"
          >
            <div className="w-10 h-10 rounded-xl bg-[#022B18] text-[#FFD21F] flex items-center justify-center font-black group-hover:scale-105 transition-transform duration-200 shadow-sm">
              <Atom className="w-6 h-6 animate-spin-slow text-[#FFD21F]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#022B18] leading-none">
                KURNE INSTITUTE
              </span>
              <span className="text-[10px] font-bold text-[#064D2A] tracking-[0.2em] uppercase mt-0.5">
                Physics Coaching • Latur
              </span>
            </div>
          </a>

          {/* Desktop Sleek Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] font-bold text-gray-600 uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#022B18] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Phone & Pill CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${INSTITUTE_INFO.phoneRaw}`}
              className="text-[14px] font-bold text-[#022B18] hover:text-[#064D2A] transition-colors tracking-tight hidden md:block mr-1"
            >
              {INSTITUTE_INFO.phone}
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="bg-[#FFD21F] text-[#022B18] px-6 py-2.5 rounded-full font-bold text-[12px] uppercase tracking-wider hover:bg-[#e6bd1c] transition-all shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#022B18]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="bg-[#FFD21F] text-[#022B18] px-3.5 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wider"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#022B18] hover:text-[#064D2A] focus:outline-none rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#022B18] text-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#0B6B3A]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Atom className="w-6 h-6 text-[#FFD21F]" />
                  <div className="font-black text-lg text-white">KURNE INSTITUTE</div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-white hover:text-[#FFD21F]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-2 text-[11px] font-bold tracking-widest text-[#FFD21F] uppercase">
                Physics Coaching • Latur
              </div>

              <nav className="flex flex-col gap-1 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 text-sm font-semibold text-emerald-100 hover:text-[#FFD21F] hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={`tel:${INSTITUTE_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-white/10 text-[#FFD21F] font-bold text-xs hover:bg-white/20 transition-colors font-mono-formula"
              >
                <Phone className="w-4 h-4" />
                <span>Call {INSTITUTE_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=Hello%20Kurne%20Institute,%20I%20would%20like%20to%20enquire%20about%20Physics%20batches.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs shadow hover:bg-[#20ba5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 rounded-full bg-[#FFD21F] text-[#022B18] font-bold text-xs uppercase tracking-wider text-center shadow-lg cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
