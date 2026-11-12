import React, { useState } from 'react';
import { INCOTERMS_DATA } from '../data/tradeData';
import { Anchor, AlertTriangle, ShieldCheck, Truck, ArrowRight, Check, X, Info } from 'lucide-react';

const STAGES = [
  { id: 'packaging', label: 'Export Packaging' },
  { id: 'factory_loading', label: 'Factory Loading' },
  { id: 'origin_inland', label: 'Inland Transport to Port' },
  { id: 'export_customs', label: 'Export Customs Clearance' },
  { id: 'origin_thc', label: 'Origin Port Handling (THC)' },
  { id: 'main_freight', label: 'Main Sea / Air Freight' },
  { id: 'marine_insurance', label: 'Cargo Insurance' },
  { id: 'dest_thc', label: 'Destination Port Handling' },
  { id: 'import_customs', label: 'Import Customs & Duties' },
  { id: 'dest_delivery', label: 'Final Doorstep Delivery' }
];

// Helper to determine who pays for each stage under each Incoterm
function getStagePayer(termCode, stageId) {
  switch (termCode) {
    case 'EXW':
      if (stageId === 'packaging') return 'seller';
      return 'buyer';
    case 'FCA':
      if (['packaging', 'factory_loading', 'export_customs'].includes(stageId)) return 'seller';
      return 'buyer';
    case 'FOB':
      if (['packaging', 'factory_loading', 'origin_inland', 'export_customs', 'origin_thc'].includes(stageId)) return 'seller';
      return 'buyer';
    case 'CFR':
      if (['packaging', 'factory_loading', 'origin_inland', 'export_customs', 'origin_thc', 'main_freight'].includes(stageId)) return 'seller';
      return 'buyer';
    case 'CIF':
      if (['packaging', 'factory_loading', 'origin_inland', 'export_customs', 'origin_thc', 'main_freight', 'marine_insurance'].includes(stageId)) return 'seller';
      return 'buyer';
    case 'CIP':
      if (['packaging', 'factory_loading', 'origin_inland', 'export_customs', 'origin_thc', 'main_freight', 'marine_insurance'].includes(stageId)) return 'seller';
      return 'buyer';
    case 'DAP':
      if (stageId === 'import_customs') return 'buyer';
      return 'seller';
    case 'DDP':
      return 'seller';
    default:
      return 'buyer';
  }
}

export default function IncotermsExplorer() {
  const [selectedTerm, setSelectedTerm] = useState('FOB');

  const activeTermData = INCOTERMS_DATA.find((t) => t.code === selectedTerm) || INCOTERMS_DATA[2];

  return (
    <section id="incoterms" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Anchor className="w-3.5 h-3.5" />
            <span>Interactive ICC Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Incoterms® 2020 Visual Explorer
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Never mix up cost and risk. Click any Incoterm below to inspect who pays for freight, insurance, and customs at each stage.
          </p>
        </div>

        {/* Term Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 mb-8">
          {INCOTERMS_DATA.map((t) => {
            const isSelected = t.code === selectedTerm;
            return (
              <button
                key={t.code}
                onClick={() => setSelectedTerm(t.code)}
                className={`py-3 px-2 rounded-xl text-center font-bold transition-all border ${
                  isSelected
                    ? 'bg-gradient-to-b from-trade-600 to-trade-700 text-white border-trade-400 shadow-lg shadow-trade-600/30 scale-105'
                    : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <div className="text-lg font-['Space_Grotesk']">{t.code}</div>
                <div className="text-[10px] uppercase font-semibold text-slate-400 truncate mt-0.5">
                  {t.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Term Analysis Dashboard */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-white font-['Space_Grotesk']">{activeTermData.code}</span>
                <span className="text-lg text-slate-300 font-semibold">— {activeTermData.name}</span>
              </div>
              <p className="text-xs text-trade-400 font-medium mt-1">
                Transport Mode: <span className="text-slate-200">{activeTermData.transport}</span>
              </p>
            </div>

            {/* Responsibility Meters */}
            <div className="flex items-center gap-6 bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800">
              <div>
                <span className="text-xs text-slate-400 block">Seller Burden:</span>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <span
                      key={lvl}
                      className={`w-3.5 h-3.5 rounded-sm ${
                        lvl <= activeTermData.sellerCostLevel ? 'bg-trade-500' : 'bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Buyer Burden:</span>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <span
                      key={lvl}
                      className={`w-3.5 h-3.5 rounded-sm ${
                        lvl <= activeTermData.buyerCostLevel ? 'bg-amber-500' : 'bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 10-Stage Visual Timeline Matrix */}
          <div className="py-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4 text-trade-400" />
              Stage-by-Stage Cost Allocation Matrix
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {STAGES.map((stg, index) => {
                const payer = getStagePayer(activeTermData.code, stg.id);
                const isSeller = payer === 'seller';
                return (
                  <div
                    key={stg.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isSeller
                        ? 'bg-trade-950/40 border-trade-500/40 text-trade-200'
                        : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                      <span className="text-slate-400">#{index + 1}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          isSeller
                            ? 'bg-trade-500/20 text-trade-300 border border-trade-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {isSeller ? 'Seller Pays' : 'Buyer Pays'}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-200 leading-tight">
                      {stg.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transfer & Advice Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-trade-400 block mb-1">
                  Point of Risk Transfer
                </span>
                <p className="text-sm text-slate-200 bg-slate-900 p-3 rounded-lg border border-slate-800">
                  {activeTermData.riskTransfer}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Ideal Commercial Scenario
                </span>
                <p className="text-sm text-slate-300">
                  {activeTermData.suitability}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Crucial Caution & Pitfall
                </span>
                <p className="text-sm text-amber-100/90 bg-amber-950/20 border border-amber-500/30 p-3 rounded-lg leading-relaxed">
                  {activeTermData.caution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

