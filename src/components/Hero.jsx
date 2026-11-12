import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Globe2, Sparkles, TrendingUp, Anchor, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenConsultation, onStartQuiz }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-trade-600/15 via-trade-900/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-['Space_Grotesk']">
            Master the Global <span className="bg-gradient-to-r from-trade-400 via-cyan-300 to-trade-200 bg-clip-text text-transparent">Import & Export</span> Business
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Learn how to launch and scale a compliant, profitable cross-border trading venture. From <span className="text-white font-medium">entity licensing & HS codes</span> to <span className="text-white font-medium">Incoterms 2020</span>, secure <span className="text-white font-medium">Letters of Credit (LC)</span>, and ocean freight logistics.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#roadmap"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-trade-600 to-trade-500 hover:from-trade-500 hover:to-trade-400 text-white font-bold text-base shadow-lg shadow-trade-600/30 hover:shadow-trade-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Trade Blueprint</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onStartQuiz}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-trade-400" />
              <span>Test Your Trade Readiness</span>
            </button>
          </div>

          {/* Quick value badges */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400 font-medium">Risk-Free Trade</p>
                <p className="text-sm font-bold text-white">100% LC & TT Security</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-800">
              <Globe2 className="w-5 h-5 text-trade-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400 font-medium">Standard ICC Rules</p>
                <p className="text-sm font-bold text-white">Incoterms 2020 Guide</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-800">
              <TrendingUp className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400 font-medium">Real Quotations</p>
                <p className="text-sm font-bold text-white">Landed Cost Simulator</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400 font-medium">Customs Clearance</p>
                <p className="text-sm font-bold text-white">Zero Demurrage Hacks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

