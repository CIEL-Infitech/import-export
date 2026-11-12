import React from 'react';
import { Award, Briefcase, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

export default function MentorsPage({ setActivePage }) {
  const mentors = [
    {
      name: "Captain Robert Sterling",
      role: "Senior Maritime Logistics & Shipping Specialist",
      experience: "24+ Years in Trade Operations",
      bio: "Former commercial vessel master and port operations director at Rotterdam & Long Beach. Mentored over 1,200 exporters on container stuffing, bill of lading negotiation, and reducing demurrage fees.",
      specialties: ["Ocean Freight & Container Shipping", "Port Free-Time Negotiation", "Marine Insurance & General Average"],
      shipped: "$450M+ In Ocean Freight Managed"
    },
    {
      name: "Devika Sharma, LL.M.",
      role: "International Trade Finance & LC Specialist",
      experience: "18+ Years Banking & Trade Law",
      bio: "Ex-Standard Chartered Trade Desk Senior Advisor. Expert in UCP 600 rules, documentary credit structure, and helping exporters eliminate costly letter of credit discrepancies.",
      specialties: ["Letters of Credit (LC at Sight)", "UCP 600 Compliance", "Foreign Currency Hedging & Escrow"],
      shipped: "Zero Payment Defaults in 18 Years"
    },
    {
      name: "Jean-Paul Dupont",
      role: "Customs Broker & Global Tariff Compliance Advisor",
      experience: "16+ Years Customs Clearance",
      bio: "Licensed Customs Broker across EU and US border agencies. Specializes in HS Code classification, anti-dumping duty mitigation, and Free Trade Agreement (FTA) preferential certificates of origin.",
      specialties: ["Harmonized System (HS) Classification", "Customs Audit Defense", "FTA Rules of Origin"],
      shipped: "10,000+ Border Entries Cleared"
    },
    {
      name: "Hassan Al-Zahrani",
      role: "B2B Export Sales & Buyer Acquisition Mentor",
      experience: "14+ Years International Commodity Trade",
      bio: "Founder of a multinational agricultural and FMCG trading house with distribution networks in 28 countries. Teaches students how to extract active buyer contacts from bill of lading customs databases.",
      specialties: ["Customs Manifest Buyer Mining", "Proforma Invoice Closing", "International Trade Fairs"],
      shipped: "Active Supply Lanes in 28 Nations"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#F3EBDD] px-3.5 py-1.5 rounded-full border border-[#E5D8C7] shadow-xs">
          Industry Practitioners
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk'] mt-4">
          Meet Your Trade Mentors
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#786657] leading-relaxed font-normal">
          Learn directly from veteran customs brokers, international trade bankers, and seasoned commodity exporters who have navigated global supply chains for decades.
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mentors.map((mentor, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E5D8C7] rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#B66A28]/40 transition-all duration-300 space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#25190F] bg-[#F3EBDD] px-3 py-1 rounded-full border border-[#E5D8C7]">
                  {mentor.experience}
                </span>
                <span className="text-xs font-bold text-[#B66A28] bg-[#FAF7F1] px-2.5 py-1 rounded-full border border-[#E5D8C7]">
                  {mentor.shipped}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk']">
                {mentor.name}
              </h2>
              <p className="text-xs text-[#B66A28] font-semibold mt-1 mb-3">
                {mentor.role}
              </p>

              <p className="text-xs sm:text-sm text-[#786657] leading-relaxed">
                {mentor.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5D8C7] space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#786657] block font-['Space_Grotesk']">
                Areas of Direct Mentorship:
              </span>
              <div className="flex flex-wrap gap-2">
                {mentor.specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs bg-[#FAF7F1] px-2.5 py-1 rounded-lg text-[#25190F] border border-[#E5D8C7] font-['DM_Sans']"
                  >
                    • {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-[#FAF7F1] border border-[#E5D8C7] rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk']">
          Get Mentored on Your Live Trade Deals
        </h2>
        <p className="text-[#786657] text-sm max-w-xl mx-auto">
          Every TradeCraft student receives access to weekly live Q&A clinics where our mentors review your actual contracts, supplier quotations, and shipping proposals.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setActivePage('register');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-xl bg-[#40291B] hover:bg-[#2d1b11] text-[#FAF7F1] font-bold text-sm shadow-md shadow-[#40291B]/20 transition-all inline-flex items-center gap-2 cursor-pointer font-['DM_Sans']"
          >
            <span>Register & Connect with Mentors</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
