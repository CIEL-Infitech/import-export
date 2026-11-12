import React from 'react';
import { BookOpen, Star, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CoursesPage({ setActivePage }) {
  const courses = [
    {
      id: "bootcamp",
      title: "Import-Export Master Blueprint: Zero to First Container",
      level: "Beginner to Intermediate",
      duration: "8 Weeks (Live + Recorded)",
      badge: "Flagship Programme",
      rating: 4.9,
      reviews: 840,
      students: "3,200+ Enrolled",
      price: "$497",
      originalPrice: "$1,299",
      overview: "The complete, step-by-step flagship curriculum engineered to take you from complete novice to shipping your first profitable cross-border container safely.",
      modules: [
        "Module 1: Legal Entity Formation, IEC/EORI Registration & Bank AD Codes",
        "Module 2: High-Margin Commodity Selection & HS Code Tariff Analysis",
        "Module 3: Manufacturer Vetting, AQL 2.5 Quality Audits & Sales Contracts",
        "Module 4: Incoterms 2020 Masterclass & Real Landed Cost Calculations",
        "Module 5: Payment Security: Irrevocable Letters of Credit (LC at Sight)",
        "Module 6: Shipping Logistics, Container Types (FCL/LCL) & Customs Clearance",
        "Module 7: Customs Manifest Intelligence & Overseas Buyer Acquisition"
      ]
    },
    {
      id: "finance",
      title: "Letters of Credit (LC) & International Trade Finance",
      level: "Intermediate to Advanced",
      duration: "4 Weeks Specialized",
      badge: "High Value",
      rating: 4.95,
      reviews: 412,
      students: "1,450+ Enrolled",
      price: "$349",
      originalPrice: "$799",
      overview: "Deep dive into UCP 600 banking rules, avoiding costly document discrepancies, and structuring multi-million dollar deals with zero payment default risk.",
      modules: [
        "Module 1: UCP 600 & ISBP 745 Banking Rules Decoded",
        "Module 2: Irrevocable, Confirmed vs Unconfirmed & Transferable LCs",
        "Module 3: Clean Document Matching: Bill of Lading, Invoice & Certificate of Origin",
        "Module 4: Export Packing Credit, Factoring & Foreign Currency Hedging"
      ]
    },
    {
      id: "customs",
      title: "Ocean Logistics, Container Shipping & Customs Clearance",
      level: "All Levels",
      duration: "5 Weeks Hands-On",
      badge: "Practical Operations",
      rating: 4.88,
      reviews: 320,
      students: "1,120+ Enrolled",
      price: "$299",
      originalPrice: "$699",
      overview: "Everything you need to know about working with freight forwarders, booking 20ft/40ft containers, managing port handling fees, and eliminating demurrage.",
      modules: [
        "Module 1: Ocean Freight & Air Cargo Operations (FCL vs LCL thresholds)",
        "Module 2: Port Demurrage & Detention: Negotiating Free Time with Carriers",
        "Module 3: Customs Entry Channels: Green, Yellow & Red Inspection Protocols",
        "Module 4: Marine Cargo Insurance: Institute Cargo Clauses (A, B, C)"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header in Luxury Light Palette */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#F3EBDD] px-3.5 py-1.5 rounded-full border border-[#E5D8C7] shadow-xs">
          Structured Curriculum
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk'] mt-3">
          Training Programmes & Masterclasses
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#786657] leading-relaxed">
          Explore our certified training programmes. Each course includes practical exercises, verified templates, live Q&A mentorship, and lifetime student community access.
        </p>
      </div>

      {/* Courses Grid in Clean White Theme */}
      <div className="space-y-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-[#E5D8C7] rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#B66A28]/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Course Summary */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F3EBDD] text-[#B66A28] border border-[#E5D8C7]">
                  {course.badge}
                </span>
                <span className="text-xs text-[#786657] font-medium">{course.level}</span>
                <span className="text-xs text-[#c4b5a2]">•</span>
                <span className="text-xs text-[#786657] flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#B66A28]" />
                  {course.duration}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk'] leading-tight">
                {course.title}
              </h2>

              <p className="text-[#786657] text-sm sm:text-base leading-relaxed">
                {course.overview}
              </p>

              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#B66A28] mb-3 font-['Space_Grotesk']">
                  Syllabus Breakdown:
                </h3>
                <div className="space-y-2">
                  {course.modules.map((mod, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5 text-xs text-[#25190F] font-['DM_Sans']">
                      <CheckCircle2 className="w-4 h-4 text-[#B66A28] shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Enrollment Box */}
            <div className="lg:col-span-5 bg-[#FAF7F1] p-6 sm:p-8 rounded-2xl border border-[#E5D8C7] space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5D8C7]">
                <div className="flex items-center gap-1.5 text-amber-500 text-sm font-bold">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="text-[#25190F]">{course.rating}</span>
                  <span className="text-[#786657] text-xs font-normal">({course.reviews} reviews)</span>
                </div>
                <span className="text-xs text-[#786657] font-medium">{course.students}</span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk']">
                    {course.price}
                  </span>
                  <span className="text-sm text-[#786657] line-through">
                    {course.originalPrice}
                  </span>
                  <span className="text-xs text-[#B66A28] bg-[#F3EBDD] px-2 py-0.5 rounded border border-[#E5D8C7] font-bold ml-auto">
                    Full Certification Included
                  </span>
                </div>
                <p className="text-[11px] text-[#786657] mt-1">
                  Includes lifetime portal access, weekly live mentor clinics, and 50+ document templates.
                </p>
              </div>

              <button
                onClick={() => {
                  setActivePage('register');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-4 rounded-xl bg-[#40291B] hover:bg-[#2d1b11] text-[#FAF7F1] font-extrabold text-sm shadow-md shadow-[#40291B]/20 flex items-center justify-center gap-2 transition-all cursor-pointer font-['DM_Sans']"
              >
                <span>Register for This Programme</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-1.5 text-[11px] text-[#786657] pt-2 border-t border-[#E5D8C7]">
                <div className="flex items-center gap-2">
                  <span className="text-[#B66A28] font-bold">✓</span>
                  <span>100% Money-Back Guarantee (14 Days)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B66A28] font-bold">✓</span>
                  <span>Certificate of International Trade Practice</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B66A28] font-bold">✓</span>
                  <span>Direct WhatsApp Mentorship Group</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
