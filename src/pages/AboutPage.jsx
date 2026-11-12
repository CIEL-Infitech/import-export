import React from 'react';
import { Target, Compass, Award, Globe, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#63442a] bg-[#ebdcc9] px-3.5 py-1.5 rounded-full border border-[#d9c4ad] shadow-xs">
          Our Story & Mission
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#291b12] tracking-tight font-['Space_Grotesk'] mt-3">
          About TradeCraft Academy
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#5a4231] leading-relaxed">
          Democratizing global trade knowledge. We bridge the gap between complex international trade laws and everyday entrepreneurs seeking to buy and sell across borders.
        </p>
      </div>

      {/* Vision & Mission Cards in Beige Palette */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#fffdf9] border border-[#dfd2bf] rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-[#ede3d1] text-[#6d4627] border border-[#ddcdb8] flex items-center justify-center shadow-xs">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-[#291b12] tracking-tight font-['Space_Grotesk']">Our Mission</h2>
          <p className="text-[#5a4231] text-sm leading-relaxed">
            To provide practical, zero-fluff, execution-oriented training that equips anyone with the competence to negotiate international contracts, protect payments using bank Letters of Credit, and manage container logistics without costly mistakes.
          </p>
        </div>

        <div className="bg-[#fffdf9] border border-[#dfd2bf] rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-[#ede3d1] text-[#6d4627] border border-[#ddcdb8] flex items-center justify-center shadow-xs">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-[#291b12] tracking-tight font-['Space_Grotesk']">Our Vision</h2>
          <p className="text-[#5a4231] text-sm leading-relaxed">
            To build the world's most trusted global network of ethical, successful merchant exporters, importers, and sourcing specialists connecting local manufacturers to global markets in over 100 countries.
          </p>
        </div>
      </div>

      {/* Why We Are Different */}
      <div className="bg-[#fffdfa] border border-[#dfd2bf] rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#63442a] bg-[#ebdcc9] px-3.5 py-1.5 rounded-full border border-[#d9c4ad]">
            Field-Tested Curriculum
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291b12] tracking-tight font-['Space_Grotesk'] mt-3">
            Why Learn International Trade with Us?
          </h2>
          <p className="text-[#5a4231] text-sm mt-2">
            Most university trade courses teach theoretical macroeconomic theory. We teach real operational trade: how to avoid scams, how to book containers, and how to get paid safely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Taught by Active Traders",
              desc: "Our mentors are licensed customs brokers, shipping company directors, and active exporters with 15+ years in the field."
            },
            {
              title: "Real Legal Contracts Included",
              desc: "Gain access to 50+ attorney-reviewed Proforma Invoices, Sales Agreements, and Letter of Credit checklists."
            },
            {
              title: "Risk-Free Payment Emphasis",
              desc: "We prioritize financial protection: UCP 600 rules, Incoterms 2020 risk points, and marine cargo insurance."
            },
            {
              title: "Global Alumni Community",
              desc: "Connect directly with trusted forwarders, inspection agents, and fellow importers in our private student network."
            },
            {
              title: "Actionable Buyer Sourcing",
              desc: "Step-by-step training on mining customs shipment manifests to target active international buyers."
            },
            {
              title: "Ongoing Mentorship",
              desc: "We don't abandon you after course completion. Bring your real deal drafts and LC terms to our live clinics."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#f5eddf] border border-[#ded0bb] hover:border-[#bfae95] transition-colors">
              <CheckCircle2 className="w-5 h-5 text-[#3b7a42] mb-2" />
              <h3 className="text-base font-bold text-[#291b12] tracking-tight font-['Space_Grotesk'] mb-1">{item.title}</h3>
              <p className="text-xs text-[#5a4231] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA in Warm Beige */}
      <div className="text-center bg-gradient-to-r from-[#ede3d2] via-[#f7f0e3] to-[#ede3d2] border border-[#d8c7b0] rounded-3xl p-8 sm:p-12 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291b12] tracking-tight font-['Space_Grotesk']">
          Ready to Start Your Global Trade Journey?
        </h2>
        <p className="text-[#5a4231] text-sm max-w-xl mx-auto mt-2 mb-6">
          Join thousands of successful entrepreneurs who transformed their business using our practical curriculum.
        </p>
        <button
          onClick={() => {
            setActivePage('register');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-3.5 rounded-xl bg-[#3b271b] hover:bg-[#281910] text-[#fffdfa] font-bold text-sm shadow-md transition-all cursor-pointer"
        >
          Register for the Next Cohort
        </button>
      </div>

    </div>
  );
}
