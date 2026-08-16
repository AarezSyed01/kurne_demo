import { Course, PhysicsTopic, BatchAnnouncement, TestimonialItem, GalleryItem } from '../types';

export const INSTITUTE_INFO = {
  name: 'Kurne Institute',
  tagline: 'A Place Where Physics Becomes Clear',
  subtitle: 'PHYSICS COACHING • LATUR',
  founder: 'Mr. Mubeen Kurne Sir',
  founderRole: 'Founder & Senior Physics Educator',
  phone: '70 83 23 7777',
  phoneRaw: '7083237777',
  phoneIntl: '+917083237777',
  whatsappNumber: '917083237777',
  address: 'Kurne Institute, Behind Keshavrai School, Near Parivar Kirana Store, Latur',
  city: 'Latur',
  state: 'Maharashtra',
  pincode: '413512',
  email: 'kurneinstitute.latur@gmail.com',
  workingHours: 'Mon – Sat: 7:00 AM – 8:30 PM | Sun: Test Batches',
  corePillars: [
    'Individual Attention',
    'Strong Concepts',
    'Regular Tests',
    'Better Results'
  ]
};

export const COURSES_DATA: Course[] = [
  {
    id: '11th-physics',
    title: '11th Standard Physics',
    badge: 'Foundation & Core',
    targetClass: 'Class 11 (State Board / CBSE)',
    description: 'Foundation-focused Physics coaching with in-depth conceptual development, derivation clarity, and basic to advanced numericals.',
    highlights: [
      'Comprehensive coverage of State Board & NCERT syllabus',
      'Step-by-step mathematical tools & vector foundation',
      'Extensive numerical problem solving from basic to advanced',
      'Chapter-wise conceptual worksheets & regular evaluations',
      'Dedicated weekly doubt resolution sessions'
    ],
    duration: '1-Year Integrated Program',
    mode: 'Classroom Coaching (Latur)',
    iconName: 'Atom',
    popular: true
  },
  {
    id: '12th-physics',
    title: '12th Standard Physics',
    badge: 'Board & Competitive Edge',
    targetClass: 'Class 12 (HSC Maharashtra Board / CBSE)',
    description: 'Targeted preparation for board examinations with rigorous numerical practice, formula mastery, question-paper solving and revisions.',
    highlights: [
      '100% Board syllabus mastery with derivation step marking techniques',
      'Extensive past 10-year question papers solving & model answer writing',
      'Unit-wise speed tests and full syllabus mock test series',
      'Detailed test paper correction with individual feedback',
      'Rapid formula revision notes & exam mind-maps'
    ],
    duration: '1-Year Comprehensive Batch',
    mode: 'Classroom Coaching (Latur)',
    iconName: 'Zap',
    popular: true
  },
  {
    id: 'competitive-physics',
    title: 'Competitive Exam Physics',
    badge: 'MHT-CET • NEET • JEE',
    targetClass: 'Class 11 & 12 / Repeaters',
    description: 'Advanced conceptual understanding, rapid numerical calculation tricks, multi-concept problem drills and time-management strategies.',
    highlights: [
      'Shortcut methods, dimensional analysis & elimination techniques',
      'Topic-wise previous years questions (PYQs) analysis & solved drills',
      'High-frequency test series simulating exact exam environment',
      'Error analysis log to prevent silly calculation mistakes',
      'Personalized rank-improvement mentor sessions'
    ],
    duration: 'Integrated / Crash Course Available',
    mode: 'Offline Classroom Batches',
    iconName: 'Compass'
  },
  {
    id: 'individual-batches',
    title: 'Individual Physics Batches',
    badge: 'Special Attention',
    targetClass: 'Personalized Focus',
    description: 'Special small-batch sessions providing individualized pace, focused attention on weak topics, and customized numerical guidance.',
    highlights: [
      'Small batch strength for 1-on-1 mentor interaction',
      'Customized pace matching student learning speed',
      'Micro-level concept diagnosis and fundamentals repair',
      'Targeted numerical practice on complex topics',
      'Direct mentor feedback after every practice module'
    ],
    duration: 'Flexible Module / Full Year',
    mode: 'Direct In-Person Classroom',
    iconName: 'Users'
  }
];

export const PHYSICS_TOPICS: PhysicsTopic[] = [
  {
    id: 'mechanics',
    title: 'Mechanics',
    grade: '11th',
    category: 'Mechanics',
    formula: 'v = u + at,  s = ut + ½at²',
    formulaMeaning: 'Kinematic Equations of Uniform Acceleration',
    summary: 'Study of motion, forces, vectors, projectile motion, and physical quantities that govern how objects move.',
    icon: 'Activity'
  },
  {
    id: 'laws-of-motion',
    title: 'Laws of Motion',
    grade: '11th',
    category: 'Mechanics',
    formula: 'F = dp/dt = m · a',
    formulaMeaning: "Newton's Second Law of Motion",
    summary: "Newton's three fundamental laws, inertia, impulse, conservation of linear momentum, and friction dynamics.",
    icon: 'ShieldAlert'
  },
  {
    id: 'work-energy-power',
    title: 'Work, Energy & Power',
    grade: '11th',
    category: 'Mechanics',
    formula: 'W = ∫ F · dr = ΔK.E.',
    formulaMeaning: 'Work-Energy Theorem',
    summary: 'Work done by constant & variable forces, kinetic & potential energy, conservative forces, and power output.',
    icon: 'BatteryCharging'
  },
  {
    id: 'gravitation',
    title: 'Gravitation',
    grade: '11th',
    category: 'Mechanics',
    formula: 'F = G(m₁m₂)/r²,  g = GM/R²',
    formulaMeaning: "Newton's Universal Law of Gravitation",
    summary: "Kepler's planetary laws, gravitational potential, orbital velocity, escape velocity, and satellite mechanics.",
    icon: 'Globe'
  },
  {
    id: 'rotational-motion',
    title: 'Rotational Motion',
    grade: '11th',
    category: 'Mechanics',
    formula: 'τ = I · α,  L = I · ω',
    formulaMeaning: 'Torque and Angular Momentum Relation',
    summary: 'Moment of inertia, radius of gyration, rolling motion, angular momentum conservation, and torque dynamics.',
    icon: 'RefreshCw'
  },
  {
    id: 'thermodynamics',
    title: 'Thermodynamics',
    grade: '11th',
    category: 'Thermodynamics',
    formula: 'ΔQ = ΔU + ΔW',
    formulaMeaning: 'First Law of Thermodynamics',
    summary: 'Heat, temperature scales, thermal expansion, isothermal/adiabatic processes, Carnot engine, and entropy.',
    icon: 'Flame'
  },
  {
    id: 'oscillations',
    title: 'Oscillations',
    grade: '11th',
    category: 'Mechanics',
    formula: 'T = 2π√(L/g),  x = A sin(ωt + φ)',
    formulaMeaning: 'Simple Harmonic Motion (SHM) Period',
    summary: 'Simple harmonic motion, restoring forces, pendulum equations, energy in SHM, and damped oscillations.',
    icon: 'Waves'
  },
  {
    id: 'waves',
    title: 'Waves & Sound',
    grade: '11th',
    category: 'Mechanics',
    formula: 'v = f · λ,  y = A sin(kx - ωt)',
    formulaMeaning: 'Wave Equation & Velocity Relation',
    summary: 'Transverse and longitudinal waves, Doppler effect, stationary waves in strings and pipes, and resonance.',
    icon: 'Radio'
  },
  {
    id: 'electrostatics',
    title: 'Electrostatics',
    grade: '12th',
    category: 'Electromagnetism',
    formula: 'F = (1/4πε₀)(q₁q₂/r²)',
    formulaMeaning: "Coulomb's Law of Electrostatic Force",
    summary: 'Electric charges, Coulomb law, Gauss theorem, electric potential, capacitors, and dielectric polarization.',
    icon: 'Sparkles'
  },
  {
    id: 'current-electricity',
    title: 'Current Electricity',
    grade: '12th',
    category: 'Electromagnetism',
    formula: 'V = I · R,  P = I²R = V²/R',
    formulaMeaning: "Ohm's Law & Electric Power Dissipation",
    summary: "Ohm's law, Kirchhoff's laws, potentiometer, Wheatstone bridge, internal resistance, and circuit solving.",
    icon: 'Zap'
  },
  {
    id: 'magnetism',
    title: 'Magnetism & Magnetic Fields',
    grade: '12th',
    category: 'Electromagnetism',
    formula: 'F = q(v × B),  dB = (μ₀/4π)(I dl × r̂)/r²',
    formulaMeaning: 'Lorentz Force & Biot-Savart Law',
    summary: 'Biot-Savart law, Ampere circuital law, moving charges in magnetic fields, toroid, and magnetic materials.',
    icon: 'Magnet'
  },
  {
    id: 'emi-ac',
    title: 'Electromagnetic Induction & AC',
    grade: '12th',
    category: 'Electromagnetism',
    formula: 'ε = -dΦ/dt,  Z = √(R² + (X_L - X_C)²)',
    formulaMeaning: "Faraday's Law & RLC Circuit Impedance",
    summary: "Faraday's & Lenz's laws, self/mutual induction, AC generators, transformers, and resonance in LCR circuits.",
    icon: 'Cpu'
  },
  {
    id: 'optics',
    title: 'Optics (Ray & Wave)',
    grade: '12th',
    category: 'Optics & Modern',
    formula: '1/f = (μ - 1)(1/R₁ - 1/R₂),  λ = ax/D',
    formulaMeaning: "Lens Maker's Formula & Young's Double Slit",
    summary: "Reflection, refraction, total internal reflection, optical instruments, Huygens' wave theory, and interference.",
    icon: 'Eye'
  },
  {
    id: 'modern-physics',
    title: 'Modern Physics & Semiconductors',
    grade: '12th',
    category: 'Optics & Modern',
    formula: 'E = hν = hc/λ = W₀ + KE_max',
    formulaMeaning: "Einstein's Photoelectric Equation",
    summary: 'Photoelectric effect, Bohr atomic model, radioactive decay, nuclear binding energy, and p-n junction diodes.',
    icon: 'Sun'
  }
];

export const METHODOLOGY_STEPS = [
  {
    stepNumber: '01',
    title: 'CONCEPT',
    tagline: 'Understand the Fundamentals',
    description: 'Every chapter starts from core physical definitions, intuitive visualizations, and derivations rather than rote memorization.',
    icon: 'Brain'
  },
  {
    stepNumber: '02',
    title: 'EXPLAIN',
    tagline: 'Connect With Real-World Phenomena',
    description: 'Relate abstract equations to everyday physical phenomena — from moving vehicles to planetary orbits and electronics.',
    icon: 'Lightbulb'
  },
  {
    stepNumber: '03',
    title: 'PRACTICE',
    tagline: 'Solve Numerical & Conceptual Problems',
    description: 'Structured progression from basic textbook questions to board numericals and high-yield competitive exam problems.',
    icon: 'Edit3'
  },
  {
    stepNumber: '04',
    title: 'TEST & IMPROVE',
    tagline: 'Regular Tests, Analysis & Revision',
    description: 'Weekly evaluations with individualized error tracking, step-by-step marking analysis, and continuous concept refinement.',
    icon: 'CheckCircle2'
  }
];

export const WHY_CHOOSE_FEATURES = [
  {
    title: 'Individual Attention',
    description: 'Every student receives dedicated guidance to clarify concepts, resolve personal learning bottlenecks, and build confidence.',
    icon: 'UserCheck'
  },
  {
    title: 'Strong Conceptual Foundation',
    description: 'We prioritize deep first-principles understanding of Physics laws so formulas become logical rather than intimidating.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Regular Tests & Evaluation',
    description: 'Frequent chapter-wise, unit-wise, and comprehensive full-length mock tests simulate real exam conditions and build exam temperament.',
    icon: 'FileCheck'
  },
  {
    title: 'Numerical Problem Solving',
    description: 'Systematic calculation techniques, step marking habits, and dimensional validation methods to secure full numerical marks.',
    icon: 'Calculator'
  },
  {
    title: 'Dedicated Doubt Solving',
    description: 'No question goes unanswered. Regular interactive doubt sessions ensure every student stays on track without accumulated gaps.',
    icon: 'HelpCircle'
  },
  {
    title: 'Exam-Oriented Preparation',
    description: 'Tailored study plans matching Maharashtra State Board patterns along with competitive entrance exam (MHT-CET / NEET / JEE) orientation.',
    icon: 'Target'
  }
];

export const BATCH_NOTICES: BatchAnnouncement[] = [
  {
    id: 'batch-11th-new',
    classGrade: '11th Standard',
    batchName: 'Foundation Physics Batch 2026-27',
    startDate: '[UPCOMING BATCH START DATE]',
    timeSlot: 'Morning & Evening Batches Available',
    mode: 'Offline (Classroom)',
    seatsStatus: 'Admissions Open',
    description: 'Targeted for students entering Class 11. Complete basic mathematical tools, kinematics, and Newtonian mechanics.'
  },
  {
    id: 'batch-12th-board',
    classGrade: '12th Standard',
    batchName: 'Target Board & CET Physics Batch',
    startDate: '[REGULAR BATCH ADMISSIONS OPEN]',
    timeSlot: 'Daily Dedicated Slots',
    mode: 'Offline (Classroom)',
    seatsStatus: 'Limited Seats Left',
    description: 'Intensive coverage of 12th syllabus with special focus on derivation step marks, numericals, and regular test series.'
  },
  {
    id: 'batch-competitive',
    classGrade: '11th & 12th Integrated',
    batchName: 'Physics Rank Booster (CET / NEET / JEE)',
    startDate: '[WEEKEND & EVENING SLOTS]',
    timeSlot: 'Scheduled Test & Drill Hours',
    mode: 'Offline (Classroom)',
    seatsStatus: 'Filling Fast',
    description: 'Special numericals workshop, past year paper solving, speed enhancement drills, and formula revision series.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Conceptual Physics Lecture',
    category: 'Classroom',
    caption: 'Live board explanations breaking down complex mechanics & rotational motion derivations into simple steps.',
    imagePlaceholderText: '[Classroom Physics Teaching Session]',
    aspectRatio: 'aspect-video',
    colorScheme: 'from-emerald-950/80 to-emerald-900/60'
  },
  {
    id: 'gal-2',
    title: 'Individual Attention & Doubt Clearing',
    category: 'Doubt Solving',
    caption: 'One-on-one mentor interaction ensuring every student clarifies numerical stumbling blocks.',
    imagePlaceholderText: '[Individual Student Mentorship Session]',
    aspectRatio: 'aspect-square',
    colorScheme: 'from-teal-950/80 to-emerald-900/60'
  },
  {
    id: 'gal-3',
    title: 'Weekly Test & Answer Sheet Discussion',
    category: 'Tests & Analysis',
    caption: 'Continuous evaluation with structured paper correction and performance feedback.',
    imagePlaceholderText: '[Regular Test & Evaluation Session]',
    aspectRatio: 'aspect-square',
    colorScheme: 'from-emerald-900/80 to-green-950/60'
  },
  {
    id: 'gal-4',
    title: 'Institute Learning Environment',
    category: 'Institute Premises',
    caption: 'Comfortable, focused academic environment situated in the education hub of Latur.',
    imagePlaceholderText: '[Kurne Institute Premises & Study Hall]',
    aspectRatio: 'aspect-video',
    colorScheme: 'from-dark-green/90 to-emerald-950/80'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    studentName: '[Student Name]',
    classBatch: '[12th Physics Batch Student]',
    examType: 'HSC Board & CET',
    quote: '"[Student feedback on concept clarity, numerical practice, and individual attention from Mubeen Kurne Sir will be added here.]"',
    verifiedBadge: true
  },
  {
    id: 't-2',
    studentName: '[Student Name]',
    classBatch: '[11th Foundation Batch Student]',
    examType: '11th Physics Foundation',
    quote: '"[Student testimonial regarding simplified physics formulas, clear derivations, and friendly doubt-clearing sessions will be displayed here.]"',
    verifiedBadge: true
  },
  {
    id: 't-3',
    studentName: '[Student Name]',
    classBatch: '[Competitive Exam Physics Batch]',
    examType: 'NEET / JEE / CET Physics',
    quote: '"[Student review describing how regular tests and numerical drills boosted test confidence will be documented here.]"',
    verifiedBadge: true
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Where is Kurne Institute located in Latur?',
    answer: 'Kurne Institute is conveniently located Behind Keshavrai School, Near Parivar Kirana Store, Latur, Maharashtra. Parents and students are welcome to visit during working hours for counselling.'
  },
  {
    question: 'Who teaches Physics at Kurne Institute?',
    answer: 'All core Physics batches and conceptual sessions are personally guided and taught by Mr. Mubeen Kurne Sir (Founder & Physics Educator), ensuring uniform high teaching quality and direct attention.'
  },
  {
    question: 'What classes and exams are coached at the institute?',
    answer: 'We provide specialized Physics coaching for 11th Standard (State Board / CBSE), 12th Standard Board exams, as well as competitive entrance exam foundations including MHT-CET, NEET, and JEE.'
  },
  {
    question: 'How are tests and evaluations conducted?',
    answer: 'We conduct regular chapter-wise subjective tests, numerical practice assignments, and periodic full-syllabus mock papers with individual feedback and step-marking guidance.'
  },
  {
    question: 'How can I enquire or take admission?',
    answer: 'You can call us directly on 70 83 23 7777, message us on WhatsApp via the website, or fill the online enquiry form to schedule a visit to the institute.'
  }
];
