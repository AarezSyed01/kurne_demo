import React from 'react';
import { INSTITUTE_INFO } from '../data/physicsData';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface QuickActionMobileBarProps {
  onOpenEnquiry: () => void;
}

export const QuickActionMobileBar: React.FC<QuickActionMobileBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#064D2A]/95 backdrop-blur-md border-t-2 border-[#FFD21F] p-2.5 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Call */}
        <a
          href={`tel:${INSTITUTE_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#FFD21F] mb-0.5" />
          <span className="text-[11px] font-bold">Call Sir</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=Hello%20Kurne%20Institute,%20I%20want%20to%20enquire%20about%20Physics%20batches.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-[#25D366] text-white shadow hover:bg-[#20ba5a] transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Enquire Now */}
        <button
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-[#FFD21F] text-[#022B18] shadow-md hover:bg-[#F0C20E] transition-colors font-black cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-black">Enquire</span>
        </button>

      </div>
    </div>
  );
};
