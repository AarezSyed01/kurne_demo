import React from 'react';
import { BATCH_NOTICES } from '../data/physicsData';
import { 
  BellRing, 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users 
} from 'lucide-react';

interface BatchNoticeSectionProps {
  onOpenEnquiry: (batchName?: string) => void;
}

export const BatchNoticeSection: React.FC<BatchNoticeSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="batches" className="py-20 lg:py-28 bg-[#F7F9F7] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-physics-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] border border-[#0B6B3A]/30 text-[#064D2A] text-xs font-bold uppercase tracking-wider">
            <BellRing className="w-3.5 h-3.5 text-[#0B6B3A] animate-bounce" />
            <span>Notice Board &amp; Schedule</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#022B18] tracking-tight">
            Upcoming <span className="text-[#0B6B3A]">Batch Schedules</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Stay updated with newly commencing classroom batches at Kurne Institute in Latur. Pre-register early to reserve individual attention slots.
          </p>
        </div>

        {/* Batch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BATCH_NOTICES.map((batch) => (
            <div
              key={batch.id}
              className="bg-white rounded-3xl p-7 shadow-xl shadow-[#022B18]/5 border border-emerald-100 flex flex-col justify-between hover:border-[#064D2A] hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#064D2A] text-[#FFD21F] shadow-sm">
                    {batch.seatsStatus}
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    Latur Classroom
                  </span>
                </div>

                {/* Batch Name & Class */}
                <h3 className="text-xl font-black text-[#022B18] group-hover:text-[#064D2A] transition-colors">
                  {batch.batchName}
                </h3>
                
                <div className="text-xs font-bold text-[#0B6B3A] mt-1 mb-4">
                  Class: {batch.classGrade}
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {batch.description}
                </p>

                {/* Editable Schedule Specs */}
                <div className="space-y-3 p-4 rounded-2xl bg-[#F7F9F7] border border-emerald-100/80 text-xs text-gray-700">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#064D2A] shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-500">Date: </span>
                      <span className="font-mono-formula font-bold text-[#022B18]">{batch.startDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#064D2A] shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-500">Timing: </span>
                      <span className="font-medium text-gray-800">{batch.timeSlot}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#064D2A] shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-500">Mode: </span>
                      <span className="font-medium text-gray-800">{batch.mode}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => onOpenEnquiry(`Batch Registration: ${batch.batchName}`)}
                  className="w-full py-3 px-4 rounded-xl bg-[#064D2A] hover:bg-[#0B6B3A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer group"
                >
                  <span>Reserve Batch Seat</span>
                  <ArrowRight className="w-4 h-4 text-[#FFD21F] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Disclaimer Box */}
        <div className="mt-12 p-4 rounded-2xl bg-[#EBF7EE] border border-emerald-200 text-center text-xs text-[#064D2A] font-medium max-w-2xl mx-auto">
          💡 <strong>Note for Parents &amp; Students:</strong> Exact batch batch timings are finalized post student counselling to ensure no overlap with school or junior college hours.
        </div>

      </div>
    </section>
  );
};
