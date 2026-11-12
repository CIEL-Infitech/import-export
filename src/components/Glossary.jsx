import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/tradeData';
import { Search, Book, Sparkles } from 'lucide-react';

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = GLOSSARY_TERMS.filter((item) =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glossary" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trade-500/10 border border-trade-500/30 text-trade-300 text-xs font-semibold mb-3">
            <Book className="w-3.5 h-3.5" />
            <span>Cross-Border Terminology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            International Trade Lexicon & Glossary
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Never feel lost in industry jargon. Instant search across essential maritime, banking, and customs trade terms.
          </p>

          {/* Search Input Bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search terms: Demurrage, HS Code, Bill of Lading, General Average..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-trade-500 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none shadow-inner"
            />
          </div>
        </div>

        {/* Glossary Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTerms.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 p-5 rounded-xl transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-trade-400"></span>
                  {t.term}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.definition}
                </p>
              </div>
            </div>
          ))}
          {filteredTerms.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-500">
              No matching trade terms found for "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

