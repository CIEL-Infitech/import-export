import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Calendar, Send } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, defaultCourse = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    tradeInterest: 'export', // 'export' | 'import' | 'both'
    productCategory: '',
    experienceLevel: 'beginner', // 'beginner' | 'intermediate' | 'experienced'
    preferredProgram: defaultCourse || 'Import-Export Master Blueprint',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-trade-400 block mb-1">
                Personalized Trade Guidance
              </span>
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                Book a Free 1-on-1 Trade Strategy Call
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Speak directly with an experienced international trade advisor. We’ll review your target commodity, compliance roadmap, and answer your questions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-trade-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@globaltrade.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-trade-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-trade-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Country of Origin *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States, India, Germany"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-trade-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Trade Focus
                  </label>
                  <select
                    value={formData.tradeInterest}
                    onChange={(e) => setFormData({ ...formData, tradeInterest: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-trade-400"
                  >
                    <option value="export">Exporting Goods Overseas</option>
                    <option value="import">Importing Foreign Products</option>
                    <option value="both">Both Import & Export (Merchant Trader)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Current Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-trade-400"
                  >
                    <option value="beginner">Complete Beginner (Starting out)</option>
                    <option value="intermediate">Intermediate (Have trade license/company)</option>
                    <option value="experienced">Experienced (Done prior shipments)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Product / Commodity You Wish to Trade
                </label>
                <input
                  type="text"
                  placeholder="e.g. Agricultural spices, Consumer electronics, Apparel, Solar panels..."
                  value={formData.productCategory}
                  onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-trade-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Specific Questions or Goals
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us what you'd like to achieve or any specific challenges you're facing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-trade-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-trade-600 to-trade-500 hover:from-trade-500 hover:to-trade-400 text-white font-bold text-sm shadow-lg shadow-trade-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Free Strategy Session</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam. Your trade details remain 100% confidential under NDA.</span>
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                Strategy Session Requested!
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our senior trade advisor has received your request and will reach out via email ({formData.email}) and WhatsApp within 24 business hours to confirm your calendar slot.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left max-w-sm mx-auto text-xs space-y-1.5">
              <div className="text-slate-400">Scheduled Commodity: <span className="text-white font-medium">{formData.productCategory || 'Global Trade Basics'}</span></div>
              <div className="text-slate-400">Target Focus: <span className="text-trade-300 font-medium capitalize">{formData.tradeInterest}</span></div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-white font-semibold text-xs border border-slate-700"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

