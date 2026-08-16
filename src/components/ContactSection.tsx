import React, { useState } from 'react';
import { INSTITUTE_INFO, COURSES_DATA } from '../data/physicsData';
import { EnquiryFormData } from '../types';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Atom,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ContactSectionProps {
  initialCourse?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialCourse = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    studentName: '',
    parentName: '',
    phoneNumber: '',
    studentClass: '11th Standard',
    courseInterested: initialCourse || '11th Standard Physics',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.studentName.trim()) {
      setErrorMessage('Please enter the student’s name.');
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate immediate submission & local storage logging
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      try {
        const saved = JSON.parse(localStorage.getItem('kurne_enquiries') || '[]');
        saved.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('kurne_enquiries', JSON.stringify(saved));
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      parentName: '',
      phoneNumber: '',
      studentClass: '11th Standard',
      courseInterested: '11th Standard Physics',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#022B18] text-white relative overflow-hidden">
      {/* Background Physics Grid */}
      <div className="absolute inset-0 bg-physics-grid-dark opacity-35 pointer-events-none" />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0B6B3A]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFD21F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B6B3A]/80 border border-[#FFD21F]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span>Admissions &amp; Counselling</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Connect With <span className="text-[#FFD21F]">Kurne Institute</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
            Visit our institute in Latur or send an enquiry. Our admissions desk will guide you regarding batches, seat availability and demo sessions.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Verified Institute Details & Fast Action */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#064D2A] rounded-3xl p-7 sm:p-8 border-2 border-[#0B6B3A] shadow-2xl space-y-6">
              
              <div>
                <div className="inline-block font-mono-formula text-[11px] font-bold text-[#FFD21F] bg-[#022B18] px-3 py-1 rounded-full border border-[#0B6B3A] mb-3">
                  VERIFIED INSTITUTE DETAILS
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Kurne Institute
                </h3>
                <div className="text-xs font-semibold text-emerald-300 mt-1">
                  Founded by {INSTITUTE_INFO.founder}
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                
                {/* Phone */}
                <div className="p-4 rounded-2xl bg-[#022B18]/80 border border-emerald-600/40 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#064D2A] text-[#FFD21F] flex items-center justify-center shrink-0 shadow">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-emerald-300 uppercase">
                      Contact for Admission
                    </div>
                    <a
                      href={`tel:${INSTITUTE_INFO.phoneRaw}`}
                      className="text-lg sm:text-xl font-black text-[#FFD21F] hover:text-white transition-colors font-mono-formula block"
                    >
                      {INSTITUTE_INFO.phone}
                    </a>
                    <div className="text-[11px] text-emerald-200/80">
                      Direct line for students &amp; parents
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-4 rounded-2xl bg-[#022B18]/80 border border-emerald-600/40 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#064D2A] text-[#FFD21F] flex items-center justify-center shrink-0 shadow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-emerald-300 uppercase">
                      Institute Address
                    </div>
                    <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                      {INSTITUTE_INFO.address}
                    </p>
                    <div className="text-[11px] text-emerald-300/80">
                      Latur, Maharashtra - 413512
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="p-4 rounded-2xl bg-[#022B18]/80 border border-emerald-600/40 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#064D2A] text-[#FFD21F] flex items-center justify-center shrink-0 shadow">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-emerald-300 uppercase">
                      Working Hours &amp; Batches
                    </div>
                    <p className="text-xs text-emerald-100 font-medium">
                      {INSTITUTE_INFO.workingHours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Fast Direct Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${INSTITUTE_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-xl bg-[#FFD21F] hover:bg-[#F0C20E] text-[#022B18] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=Hello%20Kurne%20Institute,%20I%20want%20to%20enquire%20about%20Physics%20batch%20admissions.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Working Interactive Admission Enquiry Form */}
          <div className="lg:col-span-7">
            
            <div className="bg-white rounded-3xl p-7 sm:p-10 text-[#111111] shadow-2xl border-4 border-[#0B6B3A] relative">
              
              {formSubmitted ? (
                <div className="text-center py-10 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#064D2A] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10 text-[#0B6B3A]" />
                  </div>

                  <h3 className="text-2xl font-black text-[#022B18]">
                    Enquiry Received Successfully!
                  </h3>

                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.studentName}</strong>! Our admissions mentor at Kurne Institute will call you on <strong>{formData.phoneNumber}</strong> shortly to discuss batch schedules and seat reservation.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-emerald-100 text-xs text-[#064D2A] font-medium max-w-md mx-auto">
                    📍 You can also visit us at <strong>Behind Keshavrai School, Near Parivar Kirana Store, Latur</strong>.
                  </div>

                  <div className="pt-3 flex justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-[#064D2A] text-white font-bold text-xs hover:bg-[#0B6B3A] transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=Hello%20Kurne%20Institute,%20I%20just%20submitted%20an%20admission%20enquiry%20for%20${encodeURIComponent(formData.studentName)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba5a] transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="border-b border-gray-100 pb-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Atom className="w-5 h-5 text-[#064D2A]" />
                      <h3 className="text-xl sm:text-2xl font-black text-[#022B18] tracking-tight">
                        Admission &amp; Batch Enquiry Form
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Fill out this quick form to schedule a conceptual counselling session with Mr. Mubeen Kurne Sir.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Student Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">
                        Student Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rohan Patil"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064D2A] focus:border-transparent"
                      />
                    </div>

                    {/* Parent Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">
                        Parent / Guardian Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mr. Patil"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064D2A] focus:border-transparent"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">
                        Mobile / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064D2A] focus:border-transparent"
                      />
                    </div>

                    {/* Student Class */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">
                        Current Class
                      </label>
                      <select
                        value={formData.studentClass}
                        onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064D2A] bg-white cursor-pointer"
                      >
                        <option value="11th Standard">11th Standard</option>
                        <option value="12th Standard">12th Standard</option>
                        <option value="12th Passed / Repeater">12th Passed / Repeater</option>
                        <option value="10th Moving to 11th">10th Moving to 11th</option>
                      </select>
                    </div>

                  </div>

                  {/* Course Selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">
                      Course Interested In
                    </label>
                    <select
                      value={formData.courseInterested}
                      onChange={(e) => setFormData({ ...formData, courseInterested: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064D2A] bg-white cursor-pointer"
                    >
                      <option value="11th Standard Physics">11th Standard Physics</option>
                      <option value="12th Standard Physics">12th Standard Physics</option>
                      <option value="Competitive Exam Physics (MHT-CET / NEET / JEE)">Competitive Exam Physics (MHT-CET / NEET / JEE)</option>
                      <option value="Individual Physics Batches">Individual Physics Batches</option>
                    </select>
                  </div>

                  {/* Message / Query */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">
                      Specific Questions / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention your preferred batch timing, school/college name or physics doubts..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064D2A] focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#064D2A] hover:bg-[#0B6B3A] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <span>Send Enquiry to Kurne Institute</span>
                          <Send className="w-4 h-4 text-[#FFD21F]" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0B6B3A]" />
                    <span>Your contact details are strictly kept confidential for admissions.</span>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

        {/* Google Maps Location Section */}
        <div className="mt-16 bg-[#064D2A] rounded-3xl p-6 sm:p-8 border-2 border-[#0B6B3A] shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FFD21F]">
                Institute Location Map
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Find Us in Latur
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200 mt-0.5">
                Behind Keshavrai School, Near Parivar Kirana Store, Latur, Maharashtra
              </p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Kurne Institute Behind Keshavrai School Near Parivar Kirana Store Latur')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#FFD21F] hover:bg-[#F0C20E] text-[#022B18] font-bold text-xs flex items-center gap-1.5 transition-colors shadow"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Embed Representation / Interactive Search Frame */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl bg-[#022B18] border border-emerald-600/50 overflow-hidden flex flex-col items-center justify-center text-center p-6 shadow-inner">
            
            {/* Background Grid Lines */}
            <div className="absolute inset-0 bg-physics-grid-dark opacity-30 pointer-events-none" />

            <div className="relative z-10 space-y-3 max-w-md">
              <div className="w-14 h-14 rounded-2xl bg-[#FFD21F] text-[#022B18] flex items-center justify-center mx-auto shadow-lg">
                <MapPin className="w-7 h-7" />
              </div>

              <div className="text-lg font-black text-white">
                Kurne Institute Latur Center
              </div>

              <p className="text-xs text-emerald-200 leading-relaxed font-mono-formula">
                Kurne Institute, Behind Keshavrai School, Near Parivar Kirana Store, Latur, Maharashtra
              </p>

              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Behind Keshavrai School Near Parivar Kirana Store Latur')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#064D2A] hover:bg-[#0B6B3A] text-[#FFD21F] text-xs font-bold border border-[#FFD21F]/40 flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#FFD21F]" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
