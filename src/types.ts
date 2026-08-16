export interface Course {
  id: string;
  title: string;
  badge: string;
  targetClass: string;
  description: string;
  highlights: string[];
  duration: string;
  mode: string;
  iconName: string;
  popular?: boolean;
}

export interface PhysicsTopic {
  id: string;
  title: string;
  grade: '11th' | '12th' | 'Competitive';
  category: 'Mechanics' | 'Thermodynamics' | 'Electromagnetism' | 'Optics & Modern';
  formula: string;
  formulaMeaning: string;
  summary: string;
  icon: string;
}

export interface BatchAnnouncement {
  id: string;
  classGrade: string;
  batchName: string;
  startDate: string;
  timeSlot: string;
  mode: 'Offline (Classroom)' | 'Hybrid' | 'Online';
  seatsStatus: 'Admissions Open' | 'Filling Fast' | 'Limited Seats Left';
  description: string;
}

export interface TestimonialItem {
  id: string;
  studentName: string;
  classBatch: string;
  examType: string;
  quote: string;
  verifiedBadge: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Doubt Solving' | 'Tests & Analysis' | 'Institute Premises';
  caption: string;
  imagePlaceholderText: string;
  aspectRatio: string;
  colorScheme: string;
}

export interface EnquiryFormData {
  studentName: string;
  parentName: string;
  phoneNumber: string;
  studentClass: string;
  courseInterested: string;
  message: string;
}
