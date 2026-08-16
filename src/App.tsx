import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroFeatureCards } from './components/HeroFeatureCards';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { CoursesSection } from './components/CoursesSection';
import { PhysicsTopicsSection } from './components/PhysicsTopicsSection';
import { MethodologySection } from './components/MethodologySection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AdmissionsBanner } from './components/AdmissionsBanner';
import { BatchNoticeSection } from './components/BatchNoticeSection';
import { PhysicsSandboxWidget } from './components/PhysicsSandboxWidget';
import { ResultsSection } from './components/ResultsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { QuickActionMobileBar } from './components/QuickActionMobileBar';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string>('11th Standard Physics');

  const handleOpenEnquiry = (courseOrTopic?: string) => {
    if (courseOrTopic) {
      setSelectedCourseForModal(courseOrTopic);
    }
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F9F7] text-[#111111] font-sans selection:bg-[#FFD21F] selection:text-[#022B18] relative">
      {/* Top sticky Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. Hero Feature Cards */}
        <HeroFeatureCards onOpenEnquiry={handleOpenEnquiry} />

        {/* 3. About Kurne Institute */}
        <AboutSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Founder Showcase: Mr. Mubeen Kurne Sir */}
        <FounderSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Courses & Programs */}
        <CoursesSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Comprehensive Physics Topics Grid (14 Core Domains) */}
        <PhysicsTopicsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 7. Teaching Methodology (4-Step Roadmap) */}
        <MethodologySection onOpenEnquiry={handleOpenEnquiry} />

        {/* 8. Why Choose Kurne Institute */}
        <WhyChooseSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 9. Poster-Inspired Admissions Banner */}
        <AdmissionsBanner onOpenEnquiry={handleOpenEnquiry} />

        {/* 10. Notice Board & Upcoming Batches */}
        <BatchNoticeSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 11. Interactive Concept Lab / Physics Sandbox */}
        <PhysicsSandboxWidget />

        {/* 12. Verified Results & Milestones */}
        <ResultsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 13. Testimonials & Student Voices */}
        <TestimonialsSection />

        {/* 14. Campus Gallery */}
        <GallerySection />

        {/* 15. FAQ Section */}
        <FAQSection />

        {/* 16. Contact & Admission Desk with Map & Working Form */}
        <ContactSection initialCourse={selectedCourseForModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Modal for Fast Inquiries */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        selectedCourse={selectedCourseForModal}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <QuickActionMobileBar onOpenEnquiry={() => handleOpenEnquiry()} />
    </div>
  );
}
