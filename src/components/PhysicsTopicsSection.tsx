import React, { useState } from 'react';
import { PHYSICS_TOPICS } from '../data/physicsData';
import { PhysicsTopic } from '../types';
import { 
  Atom, 
  Activity, 
  ShieldAlert, 
  BatteryCharging, 
  Globe, 
  RefreshCw, 
  Flame, 
  Waves, 
  Radio, 
  Sparkles, 
  Zap, 
  Magnet, 
  Cpu, 
  Eye, 
  Sun,
  Search,
  BookOpen
} from 'lucide-react';

interface PhysicsTopicsSectionProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const PhysicsTopicsSection: React.FC<PhysicsTopicsSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedGrade, setSelectedGrade] = useState<'All' | '11th' | '12th'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopicModal, setSelectedTopicModal] = useState<PhysicsTopic | null>(null);

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return Activity;
      case 'ShieldAlert': return ShieldAlert;
      case 'BatteryCharging': return BatteryCharging;
      case 'Globe': return Globe;
      case 'RefreshCw': return RefreshCw;
      case 'Flame': return Flame;
      case 'Waves': return Waves;
      case 'Radio': return Radio;
      case 'Sparkles': return Sparkles;
      case 'Zap': return Zap;
      case 'Magnet': return Magnet;
      case 'Cpu': return Cpu;
      case 'Eye': return Eye;
      case 'Sun': return Sun;
      default: return Atom;
    }
  };

  const filteredTopics = PHYSICS_TOPICS.filter((topic) => {
    const matchesGrade = selectedGrade === 'All' || topic.grade === selectedGrade;
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  return (
    <section id="topics" className="py-20 lg:py-28 bg-[#022B18] text-white relative overflow-hidden">
      {/* Background Physics Grid */}
      <div className="absolute inset-0 bg-physics-grid-dark opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B6B3A]/80 border border-[#FFD21F]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <Atom className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span>Comprehensive Syllabus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Master Every Core <span className="text-[#FFD21F]">Physics Domain</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
            From foundational 11th mechanics to advanced 12th electromagnetism and modern physics, we turn every chapter into a scoring stronghold.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-[#064D2A]/80 p-3 sm:p-4 rounded-2xl border border-emerald-600/40 backdrop-blur-sm">
          
          {/* Grade Selector Tabs */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {(['All', '11th', '12th'] as const).map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedGrade === grade
                    ? 'bg-[#FFD21F] text-[#022B18] shadow-md'
                    : 'text-emerald-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {grade === 'All' ? 'All 14 Topics' : `Class ${grade} Topics`}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-emerald-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search formula or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#022B18] border border-emerald-500/40 text-xs sm:text-sm text-white placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-[#FFD21F]"
            />
          </div>

        </div>

        {/* Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTopics.map((topic) => {
            const Icon = getTopicIcon(topic.icon);
            return (
              <div
                key={topic.id}
                onClick={() => setSelectedTopicModal(topic)}
                className="group relative bg-[#064D2A] rounded-2xl p-6 border border-emerald-600/40 hover:border-[#FFD21F] shadow-lg hover:shadow-2xl hover:shadow-[#0B6B3A]/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Top Glowing Edge */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFD21F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#022B18] text-[#FFD21F] group-hover:bg-[#FFD21F] group-hover:text-[#022B18] flex items-center justify-center transition-colors shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#022B18] text-emerald-300 border border-emerald-700">
                      Class {topic.grade}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-[#FFD21F] transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-xs text-emerald-100/80 line-clamp-2 mt-1 mb-4 leading-relaxed">
                    {topic.summary}
                  </p>
                </div>

                {/* Formula Highlight Chip */}
                <div className="mt-2 pt-3 border-t border-emerald-700/50">
                  <div className="text-[10px] uppercase font-bold text-emerald-300/70 mb-1">
                    Key Equation:
                  </div>
                  <div className="font-mono-formula text-xs text-[#FFD21F] bg-[#022B18]/90 py-1.5 px-2.5 rounded-lg border border-emerald-600/30 truncate">
                    {topic.formula}
                  </div>
                  <div className="text-[10px] text-emerald-200/70 truncate mt-1">
                    {topic.formulaMeaning}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Topic Modal / Detail Card */}
        {selectedTopicModal && (
          <div 
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedTopicModal(null)}
          >
            <div 
              className="relative max-w-lg w-full bg-[#064D2A] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#FFD21F] shadow-2xl space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-emerald-600">
                <div className="flex items-center gap-2">
                  <Atom className="w-6 h-6 text-[#FFD21F]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFD21F]">
                    Topic Breakdown • Class {selectedTopicModal.grade}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedTopicModal(null)}
                  className="text-emerald-300 hover:text-white text-sm font-bold px-2 py-1 rounded-lg bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div>
                <h4 className="text-2xl font-black text-white">
                  {selectedTopicModal.title}
                </h4>
                <p className="text-xs text-emerald-200 mt-1">
                  Category: {selectedTopicModal.category}
                </p>
              </div>

              <div className="bg-[#022B18] p-4 rounded-2xl border border-emerald-600/50 space-y-2">
                <div className="text-xs text-emerald-300 font-bold uppercase">
                  Fundamental Equation &amp; Law
                </div>
                <div className="font-mono-formula text-sm sm:text-base font-bold text-[#FFD21F]">
                  {selectedTopicModal.formula}
                </div>
                <div className="text-xs text-emerald-200">
                  Concept: {selectedTopicModal.formulaMeaning}
                </div>
              </div>

              <p className="text-sm text-emerald-100 leading-relaxed">
                {selectedTopicModal.summary}
              </p>

              <div className="pt-3 border-t border-emerald-700/50 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedTopicModal(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const topicName = selectedTopicModal.title;
                    setSelectedTopicModal(null);
                    onOpenEnquiry(`Topic Enquiry: ${topicName}`);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#FFD21F] text-[#022B18] text-xs font-black hover:bg-[#F0C20E] transition-colors"
                >
                  Enquire About This Topic
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
