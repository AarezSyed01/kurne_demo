import React, { useState } from 'react';
import { Atom, Play, RotateCcw, Activity, Zap, Scale, Sparkles } from 'lucide-react';

export const PhysicsSandboxWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pendulum' | 'ohm' | 'motion'>('pendulum');

  // Pendulum State
  const [pendulumLength, setPendulumLength] = useState<number>(1.0); // meters
  const [gravity, setGravity] = useState<number>(9.8); // m/s^2
  const pendulumPeriod = (2 * Math.PI * Math.sqrt(pendulumLength / gravity)).toFixed(2);
  const pendulumFrequency = (1 / parseFloat(pendulumPeriod)).toFixed(2);

  // Ohm's Law State
  const [voltage, setVoltage] = useState<number>(12); // Volts
  const [resistance, setResistance] = useState<number>(4); // Ohms
  const current = (voltage / (resistance || 1)).toFixed(2); // Amperes
  const power = (voltage * parseFloat(current)).toFixed(2); // Watts

  // Projectile / Motion State
  const [initialVelocity, setInitialVelocity] = useState<number>(20); // m/s
  const [angleDeg, setAngleDeg] = useState<number>(45); // degrees
  const angleRad = (angleDeg * Math.PI) / 180;
  const maxRange = (((initialVelocity ** 2) * Math.sin(2 * angleRad)) / 9.8).toFixed(2);
  const maxHeight = (((initialVelocity ** 2) * (Math.sin(angleRad) ** 2)) / (2 * 9.8)).toFixed(2);
  const timeOfFlight = ((2 * initialVelocity * Math.sin(angleRad)) / 9.8).toFixed(2);

  return (
    <section className="py-20 lg:py-24 bg-[#022B18] text-white relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute inset-0 bg-physics-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#FFD21F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064D2A] border border-[#FFD21F]/50 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <Atom className="w-4 h-4 text-[#FFD21F]" />
            <span>Interactive Concept Lab</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See Physics <span className="text-[#FFD21F]">In Action</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
            At Kurne Institute, formulas are not numbers on a blackboard — they are laws that govern reality. Test these interactive physics modules below.
          </p>
        </div>

        {/* Sandbox Container */}
        <div className="max-w-4xl mx-auto bg-[#064D2A] rounded-3xl p-6 sm:p-10 border-2 border-[#0B6B3A] shadow-2xl shadow-black/60">
          
          {/* Simulation Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#022B18]/90 border border-emerald-700/60 mb-8">
            <button
              onClick={() => setActiveTab('pendulum')}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'pendulum'
                  ? 'bg-[#FFD21F] text-[#022B18] shadow-md'
                  : 'text-emerald-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Simple Pendulum (SHM)</span>
            </button>

            <button
              onClick={() => setActiveTab('ohm')}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'ohm'
                  ? 'bg-[#FFD21F] text-[#022B18] shadow-md'
                  : 'text-emerald-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Ohm's Law (Electricity)</span>
            </button>

            <button
              onClick={() => setActiveTab('motion')}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'motion'
                  ? 'bg-[#FFD21F] text-[#022B18] shadow-md'
                  : 'text-emerald-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Projectile Motion</span>
            </button>
          </div>

          {/* Module 1: Pendulum Simulation */}
          {activeTab === 'pendulum' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Visualizer & Formula */}
                <div className="bg-[#022B18] p-6 rounded-2xl border border-emerald-600/40 text-center space-y-4 flex flex-col items-center justify-center min-h-[260px] relative overflow-hidden">
                  
                  {/* Oscillating Bob Animation */}
                  <div className="relative w-48 h-32 flex justify-center items-start pt-2">
                    {/* Pivot */}
                    <div className="w-3 h-3 rounded-full bg-[#FFD21F] shadow" />
                    
                    {/* String & Bob */}
                    <div 
                      className="absolute top-3 origin-top w-0.5 bg-emerald-300 transition-transform duration-500 flex flex-col items-center"
                      style={{
                        height: `${Math.min(100, pendulumLength * 55)}px`,
                        transform: 'rotate(18deg)',
                        animation: `float-gentle ${Math.max(1, parseFloat(pendulumPeriod))}s ease-in-out infinite`
                      }}
                    >
                      <div className="mt-auto w-6 h-6 rounded-full bg-gradient-to-tr from-[#FFD21F] to-[#EAB308] border-2 border-white shadow-lg" />
                    </div>
                  </div>

                  <div className="font-mono-formula text-sm text-[#FFD21F] bg-[#064D2A] px-4 py-2 rounded-xl border border-emerald-600">
                    T = 2π√(L/g) = {pendulumPeriod} s
                  </div>

                  <div className="text-xs text-emerald-200">
                    Frequency (f): <strong className="text-white">{pendulumFrequency} Hz</strong>
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-emerald-200">
                      <span>Length of String (L):</span>
                      <span className="text-[#FFD21F] font-mono-formula">{pendulumLength} meters</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="3.0"
                      step="0.1"
                      value={pendulumLength}
                      onChange={(e) => setPendulumLength(parseFloat(e.target.value))}
                      className="w-full accent-[#FFD21F] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-emerald-400">
                      <span>0.2m</span>
                      <span>1.5m</span>
                      <span>3.0m</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-emerald-200">
                      <span>Acceleration Due to Gravity (g):</span>
                      <span className="text-[#FFD21F] font-mono-formula">{gravity} m/s²</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Earth (9.8)', val: 9.8 },
                        { label: 'Moon (1.6)', val: 1.6 },
                        { label: 'Jupiter (24.8)', val: 24.8 }
                      ].map((preset) => (
                        <button
                          key={preset.label}
                          onClick={() => setGravity(preset.val)}
                          className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-colors ${
                            gravity === preset.val
                              ? 'bg-[#FFD21F] text-[#022B18] border-[#FFD21F]'
                              : 'bg-[#022B18] text-emerald-300 border-emerald-700 hover:border-[#FFD21F]'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#022B18]/70 border border-emerald-600/30 text-xs text-emerald-200/90 leading-relaxed">
                    💡 <strong>Physics Principle:</strong> The period of a simple pendulum depends strictly on its length and gravitational acceleration, independent of the bob mass!
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Module 2: Ohm's Law Simulation */}
          {activeTab === 'ohm' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Result Display */}
                <div className="bg-[#022B18] p-6 rounded-2xl border border-emerald-600/40 text-center space-y-4">
                  <div className="font-mono-formula text-lg sm:text-xl font-bold text-[#FFD21F]">
                    V = I · R  ➜  I = {current} A
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#064D2A] p-3 rounded-xl border border-emerald-600">
                      <div className="text-[11px] text-emerald-300">Current (I)</div>
                      <div className="text-lg font-black text-white font-mono-formula">{current} A</div>
                    </div>
                    <div className="bg-[#064D2A] p-3 rounded-xl border border-emerald-600">
                      <div className="text-[11px] text-emerald-300">Power Dissipated (P)</div>
                      <div className="text-lg font-black text-[#FFD21F] font-mono-formula">{power} W</div>
                    </div>
                  </div>

                  <div className="text-xs text-emerald-200 pt-1">
                    Heat loss according to Joule's heating effect: H = I²Rt
                  </div>
                </div>

                {/* Sliders */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-emerald-200">
                      <span>Potential Difference (Voltage V):</span>
                      <span className="text-[#FFD21F] font-mono-formula">{voltage} Volts</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="48"
                      value={voltage}
                      onChange={(e) => setVoltage(parseInt(e.target.value))}
                      className="w-full accent-[#FFD21F] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-emerald-200">
                      <span>Resistance (R):</span>
                      <span className="text-[#FFD21F] font-mono-formula">{resistance} Ω</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={resistance}
                      onChange={(e) => setResistance(parseInt(e.target.value))}
                      className="w-full accent-[#FFD21F] cursor-pointer"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-[#022B18]/70 border border-emerald-600/30 text-xs text-emerald-200/90 leading-relaxed">
                    💡 <strong>Ohm's Law Insight:</strong> At constant temperature, the current flowing through a conductor is directly proportional to the potential difference applied across its ends.
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Module 3: Projectile Motion */}
          {activeTab === 'motion' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Result Display */}
                <div className="bg-[#022B18] p-6 rounded-2xl border border-emerald-600/40 text-center space-y-4">
                  <div className="font-mono-formula text-sm sm:text-base font-bold text-[#FFD21F]">
                    R = (u² sin 2θ) / g
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="bg-[#064D2A] p-2.5 rounded-xl border border-emerald-600">
                      <div className="text-[10px] text-emerald-300">Max Range (R)</div>
                      <div className="text-base font-black text-white font-mono-formula">{maxRange} m</div>
                    </div>
                    <div className="bg-[#064D2A] p-2.5 rounded-xl border border-emerald-600">
                      <div className="text-[10px] text-emerald-300">Max Height (H)</div>
                      <div className="text-base font-black text-[#FFD21F] font-mono-formula">{maxHeight} m</div>
                    </div>
                    <div className="bg-[#064D2A] p-2.5 rounded-xl border border-emerald-600">
                      <div className="text-[10px] text-emerald-300">Flight Time (T)</div>
                      <div className="text-base font-black text-emerald-200 font-mono-formula">{timeOfFlight} s</div>
                    </div>
                  </div>

                  <div className="text-xs text-emerald-200">
                    Maximum range is always achieved at <strong className="text-[#FFD21F]">θ = 45°</strong>
                  </div>
                </div>

                {/* Sliders */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-emerald-200">
                      <span>Launch Velocity (u):</span>
                      <span className="text-[#FFD21F] font-mono-formula">{initialVelocity} m/s</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={initialVelocity}
                      onChange={(e) => setInitialVelocity(parseInt(e.target.value))}
                      className="w-full accent-[#FFD21F] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-emerald-200">
                      <span>Launch Angle (θ):</span>
                      <span className="text-[#FFD21F] font-mono-formula">{angleDeg}°</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="85"
                      value={angleDeg}
                      onChange={(e) => setAngleDeg(parseInt(e.target.value))}
                      className="w-full accent-[#FFD21F] cursor-pointer"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-[#022B18]/70 border border-emerald-600/30 text-xs text-emerald-200/90 leading-relaxed">
                    💡 <strong>Kinematics Rule:</strong> Horizontal motion has zero acceleration, while vertical motion is governed by acceleration due to gravity (g).
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
