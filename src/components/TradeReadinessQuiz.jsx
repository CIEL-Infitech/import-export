import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/tradeData';
import { Compass, CheckCircle2, RotateCcw, ArrowRight, Award, ShieldAlert, BookOpen } from 'lucide-react';

export default function TradeReadinessQuiz({ onOpenConsultation }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (points) => {
    const updated = {
      ...selectedAnswers,
      [currentQ.id]: points
    };
    setSelectedAnswers(updated);

    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowResults(false);
  };

  // Calculate Total Score
  const totalScore = Object.values(selectedAnswers).reduce((acc, p) => acc + p, 0);

  // Interpretation
  let readinessTier = {
    title: "Trade Foundations Stage",
    badge: "Beginning Phase",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
    summary: "You are at the start of your import-export journey. Before committing working capital, focus on legal entity registration, securing your official trade identifiers (IEC / EORI), and selecting high-margin products with confirmed HS code tariffs.",
    nextStep: "We recommend starting with the 'Import-Export Master Blueprint' to master the core trade architecture before placing supplier deposits."
  };

  if (totalScore >= 13) {
    readinessTier = {
      title: "Commercial Execution Ready",
      badge: "Advanced Level",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30",
      summary: "Outstanding! You have a solid understanding of licensing, product economics, Incoterms, and payment security instruments. You are equipped to execute trial container orders and negotiate buyer purchase agreements.",
      nextStep: "Focus on closing overseas buyers using customs shipment manifest data and fine-tuning your Letter of Credit (LC) clauses to eliminate discrepancies."
    };
  } else if (totalScore >= 9) {
    readinessTier = {
      title: "Operational Intermediate Stage",
      badge: "Intermediate Level",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/30",
      summary: "You have a great foundation, but you have key vulnerability gaps in logistics, Incoterms costing, or payment instruments (LC vs TT risk). Plugging these gaps will prevent costly container port penalties and payment defaults.",
      nextStep: "Deepen your knowledge of Incoterms 2020 risk transfer points and freight forwarder negotiation before signing international sales contracts."
    };
  }

  return (
    <section id="quiz" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Import-Export Readiness Scorecard
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Assess whether your business is ready to execute cross-border shipments without legal or financial pitfalls.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {!showResults ? (
            <div>
              {/* Progress */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="font-semibold text-trade-400">Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-8">
                <div
                  className="bg-gradient-to-r from-trade-600 to-cyan-400 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3.5">
                {currentQ.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(opt.points)}
                    className="w-full text-left p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-trade-500 hover:bg-slate-850 text-slate-200 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <span className="text-sm font-medium pr-4">{opt.text}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-trade-400 group-hover:translate-x-1 shrink-0 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center space-y-6">
              <div className="inline-flex p-4 rounded-full bg-trade-500/10 text-trade-400 mb-2">
                <Award className="w-12 h-12" />
              </div>

              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border ${readinessTier.bg} ${readinessTier.color}`}>
                  {readinessTier.badge}
                </span>
                <h3 className="text-3xl font-extrabold text-white font-['Space_Grotesk']">
                  Your Score: {totalScore} / 15 Points
                </h3>
                <h4 className={`text-lg font-bold mt-1 ${readinessTier.color}`}>
                  {readinessTier.title}
                </h4>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                {readinessTier.summary}
              </p>

              {/* Action Box */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-xl mx-auto text-left">
                <h5 className="text-xs font-bold uppercase tracking-wider text-trade-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-trade-400" />
                  Personalized Next Action:
                </h5>
                <p className="text-sm text-slate-300">
                  {readinessTier.nextStep}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-trade-600 to-trade-500 hover:from-trade-500 hover:to-trade-400 text-white font-bold text-sm shadow-lg shadow-trade-600/30 transition-all"
                >
                  Discuss Results on a Free Strategy Call
                </button>
                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700 hover:bg-slate-750 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

