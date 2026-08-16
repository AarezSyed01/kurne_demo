import React, { useState } from 'react';
import { INSTITUTE_INFO, COURSES_DATA } from '../data/physicsData';
import { X, Atom, Send, CheckCircle2, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedCourse = '11th Standard Physics'
}) => {
  const [studentName, setStudentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [course, setCourse] = useState(selectedCourse);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phoneNumber.trim()) return;

    try {
      const saved = JSON.parse(localStorage.getItem('kurne_enquiries') || '[]');
      saved.push({
        studentName,
        phoneNumber,
        course,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('kurne_enquiries', JSON.stringify(saved));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setStudentName('');
    setPhoneNumber('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#064D2A] text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#064D2A] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10 text-[#0B6B3A]" />
            </div>

            <h3 className="text-2xl font-black text-[#022B18]">
              Thank You!
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              We have received your enquiry for <strong>{course}</strong>. Our admissions team at Kurne Institute will call you on <strong>{phoneNumber}</strong> shortly.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=Hello%20Kurne%20Institute,%20I%20enquired%20for%20${encodeURIComponent(course)}%20for%20${encodeURIComponent(studentName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#064D2A] text-white font-bold text-xs hover:bg-[#0B6B3A]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <div className="w-10 h-10 rounded-xl bg-[#064D2A] text-[#FFD21F] flex items-center justify-center font-bold">
                <Atom className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#022B18]">
                  Enquire at Kurne Institute
                </h3>
                <div className="text-xs text-[#0B6B3A] font-semibold">
                  Physics Coaching • Latur, Maharashtra
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">
                Student Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter full name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064D2A]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064D2A]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">
                Select Program
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064D2A] bg-white"
              >
                <option value="11th Standard Physics">11th Standard Physics</option>
                <option value="12th Standard Physics">12th Standard Physics</option>
                <option value="Competitive Exam Physics (CET/NEET/JEE)">Competitive Exam Physics (CET/NEET/JEE)</option>
                <option value="Individual Physics Batches">Individual Physics Batches</option>
              </select>
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#FFD21F] hover:bg-[#F0C20E] text-[#022B18] font-black text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Submit Quick Enquiry</span>
                <Send className="w-4 h-4 text-[#022B18]" />
              </button>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                <a
                  href={`tel:${INSTITUTE_INFO.phoneRaw}`}
                  className="text-[#064D2A] font-bold flex items-center gap-1 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {INSTITUTE_INFO.phone}</span>
                </a>

                <div className="flex items-center gap-1 text-[11px] text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0B6B3A]" />
                  <span>Direct to Mentor</span>
                </div>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
