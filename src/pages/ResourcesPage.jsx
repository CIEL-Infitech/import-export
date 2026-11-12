import React, { useState } from 'react';
import { 
  FileText, 
  Video, 
  BookOpen, 
  Download, 
  Play, 
  ArrowRight,
  X,
  Printer,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function ResourcesPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);

  const resources = [
    {
      id: "incoterms-matrix",
      type: "guide",
      title: "Incoterms® 2020 Complete Visual Matrix",
      category: "Downloadable PDF & Guide",
      desc: "Detailed chart comparing all 11 trade terms (EXW, FCA, FOB, CFR, CIF, CIP, DAP, DDP) showing exact seller vs buyer risk and cost transfer milestones.",
      format: "PDF Document (12 Pages)",
      badge: "Essential",
      content: {
        summary: "The official ICC Incoterms 2020 define the division of costs, risks, and transport obligations between buyer and seller.",
        sections: [
          {
            heading: "Rules for Sea & Inland Waterway Transport",
            points: [
              "FAS (Free Alongside Ship): Seller places goods alongside vessel; buyer handles loading and ocean freight.",
              "FOB (Free on Board): Seller loads goods on board vessel; risk transfers when cargo is securely stowed on board.",
              "CFR (Cost & Freight): Seller pays freight to destination port, but buyer bears marine transit loss risk.",
              "CIF (Cost, Insurance & Freight): Seller pays ocean freight and minimum Clause (C) marine cargo insurance."
            ]
          },
          {
            heading: "Rules for Any Mode of Transport (Multimodal / Containerized)",
            points: [
              "EXW (Ex Works): Minimum seller responsibility. Buyer picks up goods at seller factory gate.",
              "FCA (Free Carrier): Recommended for container shipping. Seller clears export customs and hands to carrier.",
              "CPT (Carriage Paid To): Seller pays freight to destination place; risk transfers upon first carrier handover.",
              "CIP (Carriage & Insurance Paid): Seller provides comprehensive Institute Cargo Clauses (A) All-Risk insurance.",
              "DAP (Delivered at Place): Seller delivers to destination doorstep ready for unloading; buyer pays import taxes.",
              "DDP (Delivered Duty Paid): Maximum seller responsibility; seller clears import customs and pays all tariffs."
            ]
          }
        ]
      }
    },
    {
      id: "export-checklist",
      type: "guide",
      title: "The First Container Export Checklist",
      category: "Operational Checklist",
      desc: "Step-by-step 45-point checklist covering company registration, AD code generation, pre-shipment inspection, packaging compliance, and bill of lading issuance.",
      format: "Checklist Sheet",
      badge: "Most Downloaded",
      content: {
        summary: "Complete operational milestone checklist to verify before dispatching your first export shipment.",
        sections: [
          {
            heading: "Phase 1: Legal Readiness",
            points: [
              "Business entity registered with tax authority (GST/VAT/EIN).",
              "Import-Export Code (IEC/EORI) active on customs portal.",
              "Bank Authorized Dealer (AD) code registered with port of exit.",
              "Membership certificate (RCMC) secured with Export Promotion Council."
            ]
          },
          {
            heading: "Phase 2: Pre-Shipment Inspection & Packing",
            points: [
              "Sample approved and locked in against AQL 2.5 quality benchmark.",
              "Export-grade corrugated packaging with silica gel moisture desiccant bags.",
              "ISPM-15 heat-treated / fumigated wooden pallets with certified stamp.",
              "Shipping marks clearly labeled on all cartons (Port, Box #, Gross Weight)."
            ]
          },
          {
            heading: "Phase 3: Financial & Shipping Documents",
            points: [
              "Original Irrevocable Letter of Credit received and checked for discrepancies.",
              "Commercial Invoice (CI) issued with exact Incoterms and HS Code.",
              "Packing List (P/L) tare and gross weight matching container weighbridge slip.",
              "Clean on Board Bill of Lading (B/L) issued by ocean carrier."
            ]
          }
        ]
      }
    },
    {
      id: "lc-walkthrough",
      type: "video",
      title: "How an Irrevocable Letter of Credit (LC) Works in Real Life",
      category: "Video Masterclass",
      desc: "Watch our trade banking specialist walk through a real documentary credit transaction from issuing bank to advising bank, avoiding common discrepancies.",
      format: "24 Min HD Video",
      badge: "Video Tutorial",
      content: {
        summary: "Step-by-step masterclass demonstrating the lifecycle of an Irrevocable Letter of Credit (LC at Sight) under UCP 600 rules.",
        sections: [
          {
            heading: "Core Lessons Covered in Video",
            points: [
              "Step 1: Sales contract signed with 'Payment by Irrevocable LC at Sight'.",
              "Step 2: Buyer requests their bank (Issuing Bank) to open the LC.",
              "Step 3: Advising bank in the exporter's country authenticates and delivers the LC.",
              "Step 4: Exporter audits clauses (Latest Shipment Date, Presentation Period, Port names).",
              "Step 5: Goods shipped, Bill of Lading obtained, and documents presented within 21 days.",
              "Step 6: Issuing bank verifies document compliance within 5 banking days and releases payment."
            ]
          }
        ]
      }
    },
    {
      id: "demurrage-defense",
      type: "article",
      title: "How to Avoid Crippling Demurrage & Detention Port Charges",
      category: "Field Article",
      desc: "Learn why shipping lines charge upwards of $200/day for delayed containers and how to negotiate 14 to 21 days of free detention time up front.",
      format: "8 Min Read",
      badge: "Cost Saving",
      content: {
        summary: "Field guide to understanding container terminal demurrage vs carrier detention and how to shield your profit margins.",
        sections: [
          {
            heading: "Demurrage vs Detention Defined",
            points: [
              "Demurrage: Charge for keeping loaded containers inside the port terminal past the free storage days (standard is only 3 to 5 days).",
              "Detention: Charge for keeping the carrier's container outside the port before returning the empty equipment to the container depot."
            ]
          },
          {
            heading: "The 3 Rules to Never Pay Port Penalties",
            points: [
              "Rule 1: Always write '14 Days Free Combined Demurrage & Detention' into your freight forwarder booking confirmation.",
              "Rule 2: Pre-file import customs clearance (ISF / Bill of Entry) 48 hours prior to vessel arrival.",
              "Rule 3: Ensure your container drayage trucking company has direct appointment gate passes at the terminal."
            ]
          }
        ]
      }
    },
    {
      id: "contract-templates",
      type: "guide",
      title: "50+ Standard International Trade Contract Templates",
      category: "Legal & Documentation",
      desc: "Editable Proforma Invoices, International Sales Contracts, Non-Disclosure Agreements (NDA), and Non-Circumvention Agreements for sourcing agents.",
      format: "Word & Excel Pack",
      badge: "Templates",
      content: {
        summary: "Master legal library of attorney-reviewed trade templates customized for cross-border transactions.",
        sections: [
          {
            heading: "Templates Included in the Vault",
            points: [
              "International Commercial Sales Contract (Bilingual English/Spanish/Mandarin).",
              "Standard Proforma Invoice (PI) with banking beneficiary wire instructions.",
              "NCNDA (Non-Circumvention, Non-Disclosure Agreement) for Commission Agents.",
              "Pre-Shipment Inspection Request Form & Quality Audit Protocol (AQL 2.5).",
              "Freight Forwarder Request for Quotation (RFQ) Sheet with CBM Calculator."
            ]
          }
        ]
      }
    },
    {
      id: "customs-manifest-mining",
      type: "video",
      title: "Mining Customs Manifest Databases to Find Real Overseas Buyers",
      category: "Video Masterclass",
      desc: "Screen-share demonstration showing how to search US and EU bill of lading manifests to see exactly which companies are importing your commodity right now.",
      format: "32 Min HD Video",
      badge: "Lead Gen",
      content: {
        summary: "Learn how to legally access international maritime customs shipping bills to locate active volume buyers.",
        sections: [
          {
            heading: "Key Takeaways from the Masterclass",
            points: [
              "How to query US Customs Border Protection (CBP) and EU manifest databases using 6-digit HS Codes.",
              "Extracting the real corporate name, consignee address, and previous overseas suppliers.",
              "Calculating the average container volume (TEUs) and purchase frequency of target importers.",
              "Crafting high-converting cold export proposals referencing their specific commodity specifications."
            ]
          }
        ]
      }
    }
  ];

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(r => r.type === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-trade-700 bg-trade-50 px-3 py-1 rounded-full border border-trade-200">
          Knowledge Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk'] mt-3">
          Guides, Articles & Video Masterclasses
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Access free practical guides, documentation templates, and video lessons designed to help you execute safe international trade operations. Click any resource below to inspect.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Resources' },
            { id: 'guide', label: 'Guides & Checklists' },
            { id: 'video', label: 'Video Lessons' },
            { id: 'article', label: 'Articles' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activeTab === tab.id
                  ? 'bg-trade-600 text-white border-trade-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-trade-50 text-trade-700 border border-trade-200">
                  {res.badge}
                </span>
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                  {res.type === 'video' && <Play className="w-3.5 h-3.5 text-sky-600" />}
                  {res.type === 'guide' && <Download className="w-3.5 h-3.5 text-trade-600" />}
                  {res.type === 'article' && <BookOpen className="w-3.5 h-3.5 text-emerald-600" />}
                  {res.format}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 font-['Space_Grotesk'] tracking-tight leading-snug mb-2">
                {res.title}
              </h2>
              <p className="text-xs text-trade-600 font-medium mb-3">
                {res.category}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {res.desc}
              </p>
            </div>

            <button
              onClick={() => setSelectedResource(res)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-trade-600 hover:text-white text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-slate-200"
            >
              <span>View Resource Preview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Interactive Resource Viewer Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedResource(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-trade-50 text-trade-600 border border-trade-100 flex items-center justify-center shrink-0">
                {selectedResource.type === 'video' && <Play className="w-5 h-5" />}
                {selectedResource.type === 'guide' && <FileText className="w-5 h-5" />}
                {selectedResource.type === 'article' && <BookOpen className="w-5 h-5" />}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-trade-700 bg-trade-50 px-2.5 py-0.5 rounded border border-trade-200">
                  {selectedResource.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-['Space_Grotesk'] tracking-tight mt-1">
                  {selectedResource.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate-700 font-medium">
                  {selectedResource.content.summary}
                </p>
              </div>

              {selectedResource.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-trade-500"></span>
                    {sec.heading}
                  </h4>
                  <ul className="space-y-2">
                    {sec.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-600 flex items-start gap-2 bg-slate-50/50 p-2.5 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Modal Footer Controls */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-300 flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={() => {
                  setSelectedResource(null);
                  setActivePage('register');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-trade-600 hover:bg-trade-700 text-white font-bold text-xs shadow-md shadow-trade-600/20"
              >
                Register for Full Vault Access
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Bottom Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
          Unlock the Complete TradeCraft Resource Library
        </h2>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Enrolled students receive instant unrestricted access to our full vault of 50+ editable shipping contracts, customs calculators, and video recordings.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setActivePage('register');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-xl bg-trade-600 hover:bg-trade-700 text-white font-bold text-sm shadow-md shadow-trade-600/20 transition-all inline-flex items-center gap-2"
          >
            <span>Register Now to Access All Resources</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
