import React from 'react';
import { COURSES_DATA } from '../data/physicsData';
import { Course } from '../types';
import { 
  Atom, 
  Zap, 
  Compass, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  MapPin, 
  Sparkles 
} from 'lucide-react';

interface CoursesSectionProps {
  onOpenEnquiry: (courseName?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenEnquiry }) => {
  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return Atom;
      case 'Zap':
        return Zap;
      case 'Compass':
        return Compass;
      case 'Users':
        return Users;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#F7F9F7] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-physics-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] border border-[#0B6B3A]/30 text-[#064D2A] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#0B6B3A]" />
            <span>Academic Programs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#022B18] tracking-tight">
            Learn Physics <span className="text-[#0B6B3A]">With Clarity</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Tailored Physics coaching programs in Latur designed for complete conceptual mastery, extensive numerical drills, and board &amp; competitive exam success.
          </p>
        </div>

        {/* Courses 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES_DATA.map((course: Course) => {
            const Icon = getCourseIcon(course.iconName);
            return (
              <div
                key={course.id}
                className={`relative rounded-3xl bg-white p-7 sm:p-8 shadow-xl shadow-[#022B18]/5 border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#064D2A]/10 hover:-translate-y-1 ${
                  course.popular
                    ? 'border-2 border-[#064D2A] ring-4 ring-[#FFD21F]/20'
                    : 'border-emerald-100/90'
                }`}
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute -top-3.5 right-6 bg-[#064D2A] text-[#FFD21F] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md border border-[#FFD21F]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Flagship Program</span>
                  </div>
                )}

                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#064D2A] text-[#FFD21F] flex items-center justify-center shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-[#064D2A] bg-[#EBF7EE] px-3 py-1.5 rounded-full border border-emerald-200">
                      {course.badge}
                    </span>
                  </div>

                  {/* Title & Target Class */}
                  <h3 className="text-2xl font-black text-[#022B18] tracking-tight">
                    {course.title}
                  </h3>

                  <div className="text-xs font-bold text-[#0B6B3A] mt-1 mb-3">
                    Target: {course.targetClass}
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-gray-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Key Program Features:
                    </div>
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#EBF7EE] text-[#0B6B3A] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A]" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-700 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metadata & CTA */}
                <div className="mt-8 pt-5 border-t border-gray-100 space-y-4">
                  <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 gap-2">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0B6B3A]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0B6B3A]" />
                      <span>{course.mode}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenEnquiry(course.title)}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#064D2A] hover:bg-[#0B6B3A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer group"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-4 h-4 text-[#FFD21F] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    
                    <a
                      href="#batches"
                      className="py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#022B18] font-bold text-xs sm:text-sm transition-colors text-center"
                    >
                      View Batches
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Courses */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#022B18] via-[#064D2A] to-[#022B18] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#0B6B3A] shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xl sm:text-2xl font-black text-white">
              Need personalized guidance on which batch fits best?
            </div>
            <p className="text-xs sm:text-sm text-emerald-200">
              Speak directly with Mr. Mubeen Kurne Sir for batch allocation &amp; conceptual diagnosis.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Course Counselling Request')}
            className="px-6 py-3 rounded-xl bg-[#FFD21F] hover:bg-[#F0C20E] text-[#022B18] font-black text-xs sm:text-sm shadow-lg whitespace-nowrap cursor-pointer"
          >
            Get Free Guidance
          </button>
        </div>

      </div>
    </section>
  );
};
