import React, { useState } from 'react';
import { TRADE_DOCUMENTS } from '../data/tradeData';
import { FileText, AlertOctagon, CheckSquare, Square, Building2, HelpCircle } from 'lucide-react';

export default function DocumentChecklist() {
  const [selectedDocId, setSelectedDocId] = useState(TRADE_DOCUMENTS[0].id);
  const [checkedItems, setCheckedItems] = useState({});

  const activeDoc = TRADE_DOCUMENTS.find((d) => d.id === selectedDocId) || TRADE_DOCUMENTS[0];

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <section id="documents" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Statutory Trade Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Master Trade Documentation Checklist
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            A single typo between your Bill of Lading and Commercial Invoice can cause customs seizure or bank LC rejection. Learn the anatomy of each required document.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Documents Tab List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-2 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Shipping Documents
              </span>
              <span className="text-xs font-semibold text-trade-400">
                {completedCount} of {TRADE_DOCUMENTS.length} Prepared
              </span>
            </div>

            {TRADE_DOCUMENTS.map((doc) => {
              const isSelected = doc.id === selectedDocId;
              const isChecked = !!checkedItems[doc.id];
              return (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDocId(doc.id)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-800 border-trade-500 shadow-lg shadow-trade-600/20'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCheck(doc.id);
                      }}
                      className="text-slate-400 hover:text-trade-400 transition-colors"
                      title="Mark as ready"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5" />
                      )}
                    </button>
                    <div>
                      <h4 className={`text-sm font-bold ${isChecked ? 'line-through text-slate-500' : 'text-white'}`}>
                        {doc.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">{doc.category}</p>
                    </div>
                  </div>

                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-trade-500/20 text-trade-300' : 'bg-slate-900 text-slate-500'
                  }`}>
                    Inspect →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Document Inspector Card */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-trade-400 mb-1">
                <span>{activeDoc.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Building2 className="w-3.5 h-3.5" />
                  Issued by: {activeDoc.issuedBy}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                {activeDoc.name}
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                {activeDoc.purpose}
              </p>
            </div>

            {/* Critical Fields */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <span>Must-Include Mandatory Fields & Data Points</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeDoc.vitalFields.map((field, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200 flex items-start gap-2"
                  >
                    <span className="text-trade-400 font-bold">•</span>
                    <span>{field}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fatal Pitfall Alert */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-3">
              <AlertOctagon className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-1">
                  Fatal Document Pitfall to Avoid
                </h5>
                <p className="text-sm text-rose-100/90 leading-snug">
                  {activeDoc.pitfall}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

