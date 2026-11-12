import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/tradeData';
import { Briefcase, ArrowRight, ShieldCheck, AlertCircle, CheckCircle, Navigation } from 'lucide-react';

export default function CaseStudies() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const activeCase = CASE_STUDIES[activeCaseIdx];

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Field Deconstruction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Real-World Shipment Case Studies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Study how experienced cross-border operators navigate customs, quality inspections, ocean freight, and trade finance.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          {CASE_STUDIES.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCaseIdx(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeCaseIdx === idx
                  ? 'bg-slate-900 border-trade-500 shadow-lg shadow-trade-600/20'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-trade-400 block mb-1">
                {c.type}
              </span>
              <span className="text-sm font-bold text-white block">
                {c.title.split(' ')[0]} {c.title.split(' ')[1]} {c.title.split(' ')[2]} {c.title.split(' ')[3]}...
              </span>
            </button>
          ))}
        </div>

        {/* Active Case Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-trade-500/20 text-trade-300 border border-trade-500/30">
                {activeCase.type}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Order Value: <span className="text-white font-semibold">{activeCase.value}</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Incoterm: <span className="text-cyan-300 font-semibold">{activeCase.incoterm}</span>
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
              {activeCase.title}
            </h3>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Maritime Trade Route:</span>
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-trade-400" />
                {activeCase.route}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Payment Terms:</span>
              <span className="text-white font-semibold">{activeCase.paymentTerm}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Container Specification:</span>
              <span className="text-white font-semibold">{activeCase.container}</span>
            </div>
          </div>

          {/* Two-Column Breakdown: Challenges vs Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-rose-950/10 border border-rose-500/20 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                Operational Trade Obstacles Encountered
              </h4>
              <ul className="space-y-2">
                {activeCase.challenges.map((ch, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-trade-950/30 border border-trade-500/30 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-trade-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-trade-400" />
                Strategic Compliance & Logistics Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {activeCase.solution}
              </p>
            </div>
          </div>

          {/* Final Outcome Banner */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-start sm:items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block">
                Commercial Outcome & Financial Return:
              </span>
              <p className="text-sm text-emerald-100/90 font-medium">
                {activeCase.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

