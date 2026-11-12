import React, { useState } from 'react';
import { ROADMAP_STEPS } from '../data/tradeData';
import { 
  ShieldCheck, 
  TrendingUp, 
  Factory, 
  Anchor, 
  CreditCard, 
  Truck, 
  Globe, 
  CheckCircle2, 
  Lightbulb, 
  ChevronRight,
  Clock
} from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp,
  Factory: Factory,
  Anchor: Anchor,
  CreditCard: CreditCard,
  Truck: Truck,
  Globe: Globe,
};

export default function Roadmap() {
  const [activeStep, setActiveStep] = useState(1);

  const selectedStepData = ROADMAP_STEPS.find((s) => s.step === activeStep) || ROADMAP_STEPS[0];
  const StepIcon = iconMap[selectedStepData.icon] || Globe;

  return (
    <section id="roadmap" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trade-500/10 border border-trade-500/20 text-trade-300 text-xs font-semibold mb-3">
            <span>Execution Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            The 7-Step Import & Export Master Blueprint
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A battle-tested operational guide from registering your first trade entity to shipping full containers across oceans.
          </p>
        </div>

        {/* Step Navigation Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start md:justify-center">
          {ROADMAP_STEPS.map((s) => {
            const Icon = iconMap[s.icon] || Globe;
            const isActive = s.step === activeStep;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-trade-600 text-white border-trade-400 shadow-lg shadow-trade-600/30'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isActive ? 'bg-white text-trade-700' : 'bg-slate-800 text-slate-400'
                }`}>
                  {s.step}
                </span>
                <span>{s.title.split(' ')[0]} {s.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-trade-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-trade-700 to-trade-500 flex items-center justify-center text-white shadow-md shadow-trade-600/30">
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-trade-400">Step {selectedStepData.step} of 7</span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {selectedStepData.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk'] mt-1">
                    {selectedStepData.title}
                  </h3>
                </div>
              </div>

              <p className="text-trade-300 font-medium text-sm sm:text-base italic">
                "{selectedStepData.tagline}"
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                {selectedStepData.description}
              </p>

              {/* Pro Tip Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">Trade Insider Tip</h4>
                  <p className="text-sm text-amber-100/90 leading-snug">
                    {selectedStepData.proTip}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Checklist Box */}
            <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-xl p-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Essential Milestones & Deliverables
              </h4>
              <ul className="space-y-3.5">
                {selectedStepData.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-trade-500/20 text-trade-300 border border-trade-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Step Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-800 transition-colors"
                >
                  ← Previous Step
                </button>
                <span className="text-xs text-slate-500">{activeStep} / 7</span>
                <button
                  disabled={activeStep === 7}
                  onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-trade-400 hover:text-trade-300 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-800 transition-colors flex items-center gap-1"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

