export const ROADMAP_STEPS = [
  {
    step: 1,
    title: "Entity Setup & Trade Licensing",
    tagline: "Building your compliant trade foundation",
    icon: "ShieldCheck",
    duration: "Week 1-2",
    description: "Establish your legal business entity, register for an official trade identifier (e.g., IEC in India, EORI in the EU, EIN/CBP Importer Number in the US), open a multi-currency foreign exchange bank account, and secure Authorized Dealer (AD) code registrations.",
    keyTakeaways: [
      "Company registration (LLC, Pvt Ltd, Sole Proprietorship)",
      "Import-Export Code (IEC) & Tax registrations (GST/VAT/EIN)",
      "RCMC (Registration-cum-Membership Certificate) with Export Promotion Councils",
      "Multi-currency bank account & AD Code generation"
    ],
    proTip: "Never begin foreign negotiations without an active bank AD code and trade identity. Banks will freeze inward foreign remittances that lack trade documentation."
  },
  {
    step: 2,
    title: "Product Selection & Market Analysis",
    tagline: "Finding high-margin, high-demand exportable commodities",
    icon: "TrendingUp",
    duration: "Week 2-3",
    description: "Evaluate products using global trade flow data (ITC Trade Map, UN Comtrade), HS code tariff structures, non-tariff barriers, certifications (FDA, CE, REACH, Phytosanitary), and domestic competitive advantage.",
    keyTakeaways: [
      "Identifying the 6-digit to 8-digit HS (Harmonized System) Code",
      "Analyzing import volumes, tariffs, and duty drawbacks per target country",
      "Verifying sanitary/phytosanitary, shelf-life, and mandatory quality standards",
      "Calculating gross margins after shipping, packing, and insurance"
    ],
    proTip: "Look for products where your origin country has a natural raw material or manufacturing cost advantage, and where destination countries apply low or zero preferential tariffs."
  },
  {
    step: 3,
    title: "Supplier Vetting & Quality Assurance",
    tagline: "Securing reliable manufacturer relationships without fraud",
    icon: "Factory",
    duration: "Week 3-4",
    description: "Source verified manufacturers, conduct on-site factory audits or hire third-party inspection agencies (SGS, Bureau Veritas, Intertek), negotiate MOQs (Minimum Order Quantities), and inspect Pre-Shipment Samples.",
    keyTakeaways: [
      "Direct manufacturer vs trading agent differentiation",
      "Factory audit checklists: capacity, certifications, financial stability",
      "Drafting an enforceable International Purchase Agreement",
      "Pre-shipment Inspection (PSI) protocols and AQL 2.5 quality benchmarks"
    ],
    proTip: "Always retain an independent inspector for Pre-Shipment Inspection (PSI). Releasing the final payment before inspection is the #1 mistake new importers make."
  },
  {
    step: 4,
    title: "Mastering Incoterms 2020 & Costing",
    tagline: "Allocating cost, risk, and transport responsibility",
    icon: "Anchor",
    duration: "Week 4-5",
    description: "Understand the 11 International Commercial Terms (Incoterms 2020) established by the ICC. Calculate accurate export quotation prices (EXW, FOB, CFR, CIF, DDP) incorporating packaging, terminal handling, and ocean/air freight.",
    keyTakeaways: [
      "Clear distinction between cost transfer point and risk transfer point",
      "FOB (Free on Board) vs CIF (Cost, Insurance & Freight) mechanics",
      "Why DDP (Delivered Duty Paid) carries high tax exposure for novice exporters",
      "Building a foolproof landed cost spreadsheet"
    ],
    proTip: "For sea freight exports, start with FOB (Free on Board). It leaves ocean freight booking and destination customs risk to the buyer while keeping your liability limited to loading at origin."
  },
  {
    step: 5,
    title: "Trade Finance & Risk Mitigation",
    tagline: "Getting paid 100% safely without cross-border default",
    icon: "CreditCard",
    duration: "Week 5-6",
    description: "Eliminate payment defaults using Irrevocable Documentary Letters of Credit (LC), Advance TT payments, Escrow, and Export Credit Guarantee Corporation (ECGC / Ex-Im Bank) credit insurance covers.",
    keyTakeaways: [
      "Step-by-step Letter of Credit (LC at Sight) process cycle",
      "Avoiding LC discrepancies (late shipment, document mismatch, port errors)",
      "Hedging foreign currency exchange risk with forward contracts",
      "Credit ratings and country risk verification (D&B reports)"
    ],
    proTip: "Strict compliance is king in Letters of Credit: even a single typo between the Commercial Invoice and Bill of Lading can cause an LC discrepancy and freeze your funds."
  },
  {
    step: 6,
    title: "Logistics, Shipping & Customs Clearance",
    tagline: "Moving containers across oceans and clearing border controls",
    icon: "Truck",
    duration: "Week 6-7",
    description: "Partner with licensed Freight Forwarders and Custom House Agents (CHA / Customs Brokers). Understand FCL (Full Container Load) vs LCL (Less than Container Load), Bill of Lading issuance, and customs declarations.",
    keyTakeaways: [
      "FCL (20ft, 40ft, 40HC, Reefer) vs LCL pallet consolidation",
      "Master vs House Bill of Lading (MBL vs HBL), Sea Waybill, and Air Waybill",
      "Origin export customs filing (Shipping Bill) and Destination import entry",
      "Preventing demurrage and detention charges at container ports"
    ],
    proTip: "Always negotiate 14 to 21 days of free detention time at the destination port with your freight forwarder to buffer against customs clearance delays."
  },
  {
    step: 7,
    title: "Global Buyer Acquisition & B2B Sales",
    tagline: "Closing verified overseas buyers and building long-term trade lanes",
    icon: "Globe",
    duration: "Week 7-8",
    description: "Generate consistent international trade leads using customs shipment manifest databases (Panjiva, ImportGenius), international trade fairs (Canton Fair, Gulfood, Anuga), digital B2B marketplaces, and diplomatic trade attache channels.",
    keyTakeaways: [
      "Using bill of lading customs data to identify who buys your product right now",
      "Sending professional cold export proposals with Proforma Invoices",
      "Sampling logistics (express courier with commercial sample declarations)",
      "Retaining repeat buyers through reliability and volume discounts"
    ],
    proTip: "Customs manifest databases reveal the exact names of companies importing your commodity, the volume they buy, their previous suppliers, and the price they paid."
  }
];

export const INCOTERMS_DATA = [
  {
    code: "EXW",
    name: "Ex Works",
    transport: "Any Mode (Multimodal)",
    sellerResponsibility: "Make goods available at seller's factory/warehouse in export-ready packaging.",
    buyerResponsibility: "Loading onto truck, export customs clearance, main carriage, insurance, destination customs, and final delivery.",
    riskTransfer: "When goods are made available to buyer at seller's premises.",
    sellerCostLevel: 1, // 1 to 5 scale
    buyerCostLevel: 5,
    suitability: "Domestic sales or experienced multinational buyers with local freight forwarders in the exporter's country.",
    caution: "High burden for foreign buyers. As an exporter, you may have difficulty obtaining proof of export for tax exemptions."
  },
  {
    code: "FCA",
    name: "Free Carrier",
    transport: "Any Mode (Multimodal / Air / Road / Rail / Ocean)",
    sellerResponsibility: "Export packaging, export customs clearance, and delivery to buyer's nominated carrier at named location.",
    buyerResponsibility: "Main international freight, transit insurance, import clearance, and destination transport.",
    riskTransfer: "When handed over to buyer's nominated carrier at named point.",
    sellerCostLevel: 2,
    buyerCostLevel: 4,
    suitability: "Recommended by ICC for modern containerized trade instead of FOB.",
    caution: "Ensure the exact carrier handover point is specified down to the terminal or depot gate."
  },
  {
    code: "FOB",
    name: "Free On Board",
    transport: "Sea & Inland Waterways Only",
    sellerResponsibility: "Packaging, origin inland transport, export customs clearance, and loading the cargo safely onboard the vessel.",
    buyerResponsibility: "Ocean freight contract, marine cargo insurance, import customs duties, and destination inland delivery.",
    riskTransfer: "The instant goods pass the ship's rail and are securely stowed on board the vessel at origin port.",
    sellerCostLevel: 2,
    buyerCostLevel: 4,
    suitability: "The most popular maritime trade term globally for bulk and general cargo exports.",
    caution: "Technically designed for non-containerized ocean freight. Once containers are handed to a container terminal, FCA is technically preferred, though FOB remains widely used."
  },
  {
    code: "CFR",
    name: "Cost and Freight",
    transport: "Sea & Inland Waterways Only",
    sellerResponsibility: "Export clearance, loading onboard, and paying ocean freight to named destination discharge port.",
    buyerResponsibility: "Marine transit insurance, destination port discharge, import customs duties, taxes, and final delivery.",
    riskTransfer: "Onboard the vessel at port of loading (risk transfers BEFORE the ocean journey, even though seller pays freight!).",
    sellerCostLevel: 3,
    buyerCostLevel: 3,
    suitability: "Exporters with high-volume freight contracts who can secure cheaper shipping rates than the buyer.",
    caution: "Vital to know: Risk transfers at origin, but cost ends at destination. Buyer must arrange their own marine insurance!"
  },
  {
    code: "CIF",
    name: "Cost, Insurance and Freight",
    transport: "Sea & Inland Waterways Only",
    sellerResponsibility: "Export clearance, loading onboard, paying ocean freight to destination, and purchasing Institute Cargo Clause (C) minimum marine insurance.",
    buyerResponsibility: "Unloading at destination port, import customs clearance, tariffs, and inland transport to final warehouse.",
    riskTransfer: "When goods are loaded onboard at the port of departure.",
    sellerCostLevel: 4,
    buyerCostLevel: 2,
    suitability: "Standard for commodities and manufactured exports where buyers want insurance included.",
    caution: "Under Incoterms 2020, CIF requires minimum Clause C insurance. Buyers often negotiate for comprehensive Clause A coverage."
  },
  {
    code: "CIP",
    name: "Carriage and Insurance Paid To",
    transport: "Any Mode (Multimodal / Air / Sea / Rail)",
    sellerResponsibility: "Packaging, export customs, transport to named place, and paying comprehensive Institute Cargo Clauses (A) all-risk insurance.",
    buyerResponsibility: "Import customs clearance, duties, taxes, and unloading at destination facility.",
    riskTransfer: "When handed over to the first carrier at origin.",
    sellerCostLevel: 4,
    buyerCostLevel: 2,
    suitability: "High-value manufactured goods, electronics, and containerized cargo transported by air or multimodal routes.",
    caution: "Incoterms 2020 upgraded CIP to require Clause A (All Risk) insurance, which costs slightly more than CIF Clause C."
  },
  {
    code: "DAP",
    name: "Delivered at Place",
    transport: "Any Mode (Multimodal)",
    sellerResponsibility: "All transport costs and risks right up to the buyer's destination doorstep, ready for unloading.",
    buyerResponsibility: "Unloading the vehicle and paying import customs duties, taxes (VAT/GST), and official import clearance.",
    riskTransfer: "When goods arrive at the destination address, ready for unloading.",
    sellerCostLevel: 4,
    buyerCostLevel: 2,
    suitability: "B2B deliveries where buyer wants hassle-free logistics but retains local tax credit and customs responsibility.",
    caution: "Seller is responsible for destination delays or demurrage if transit is blocked before arrival at the site."
  },
  {
    code: "DDP",
    name: "Delivered Duty Paid",
    transport: "Any Mode (Multimodal)",
    sellerResponsibility: "MAXIMUM SELLER RESPONSIBILITY: Entire shipping journey, origin & destination clearance, import duties, tariffs, VAT/GST, and doorstep delivery.",
    buyerResponsibility: "Only unloading the goods at their destination warehouse.",
    riskTransfer: "When delivered cleared for import at the buyer's named facility.",
    sellerCostLevel: 5,
    buyerCostLevel: 1,
    suitability: "E-commerce fulfillment, Amazon FBA replenishment, or when selling to buyers who cannot or will not act as importer of record.",
    caution: "Extremely risky for inexperienced exporters. In many nations, a non-resident foreign company cannot legally pay local import taxes without local VAT registration."
  }
];

export const TRADE_DOCUMENTS = [
  {
    id: "bl",
    name: "Bill of Lading (B/L) / Sea Waybill",
    category: "Transport Document",
    issuedBy: "Shipping Line or Freight Forwarder",
    purpose: "Acts as a title document (ownership), receipt of goods, and contract of carriage.",
    vitalFields: [
      "Shipper name & address",
      "Consignee ('To Order' for negotiable B/L or straight named consignee)",
      "Notify Party",
      "Vessel name and voyage number",
      "Ports of Loading and Discharge",
      "Container numbers and seal numbers",
      "Gross weight, volume (CBM), and package count",
      "'Clean On Board' endorsement notation"
    ],
    pitfall: "Losing an original negotiable Ocean Bill of Lading stops cargo release and requires expensive bank indemnity bonds."
  },
  {
    id: "ci",
    name: "Commercial Invoice (CI)",
    category: "Financial & Customs Document",
    issuedBy: "Exporter / Seller",
    purpose: "Official legal bill requesting payment and primary document used by Customs authorities worldwide to assess duties and taxes.",
    vitalFields: [
      "Invoice number and date",
      "Seller & Buyer full legal names and tax IDs",
      "Detailed commodity description (avoid vague terms like 'samples')",
      "Harmonized System (HS) Codes (6 or 8 digits)",
      "Incoterms 2020 delivery terms (e.g. FOB Shanghai Port)",
      "Unit price, currency (USD/EUR), total value",
      "Payment terms (LC / TT / DP / DA)"
    ],
    pitfall: "Under-invoicing to reduce buyer customs duty is illegal international fraud and results in seizure and blacklisting."
  },
  {
    id: "pl",
    name: "Packing List (P/L)",
    category: "Logistics Document",
    issuedBy: "Exporter / Warehouse",
    purpose: "Itemizes the physical packaging dimensions, weights, and contents of each box, crate, pallet, and container.",
    vitalFields: [
      "Box/pallet marks and numbering (e.g., Box 1/50 to 50/50)",
      "Net weight and Gross weight per package",
      "Outer dimensions (L x W x H in cm) and CBM per unit",
      "Total tare weight and net weight match the Commercial Invoice"
    ],
    pitfall: "Discrepancy in weight between Packing List and Bill of Lading triggers immediate customs physical inspection (red channel)."
  },
  {
    id: "coo",
    name: "Certificate of Origin (COO)",
    category: "Customs & Trade Compliance",
    issuedBy: "Chamber of Commerce or Authorized Government Agency",
    purpose: "Certifies the country where goods were manufactured or underwent substantial transformation, enabling preferential lower tariff rates under Free Trade Agreements (FTAs).",
    vitalFields: [
      "Country of Origin",
      "Consignee and Exporter information",
      "Preferential vs Non-preferential classification",
      "Regional Value Content (RVC) or Change in Tariff Classification (CTC) rule"
    ],
    pitfall: "Without an authentic authorized COO, the importer cannot claim zero or reduced duties under FTAs (e.g. USMCA, RCEP, ASEAN, India-UAE CEPA)."
  },
  {
    id: "lc",
    name: "Letter of Credit (LC)",
    category: "Banking & Financial Instrument",
    issuedBy: "Buyer's Bank (Issuing Bank)",
    purpose: "A binding guarantee from the issuing bank that seller will be paid in full, provided strictly conforming documents are presented before the expiry date.",
    vitalFields: [
      "Irrevocable, confirmed, or unconfirmed status",
      "Latest date of shipment and LC expiry date",
      "Partial shipments & transshipment permissions (Allowed vs Prohibited)",
      "Exact list of documents required and specific wording clauses"
    ],
    pitfall: "Typographical discrepancies (e.g. missing a comma or slight address variance) give the issuing bank legal grounds to dishonor the payment."
  },
  {
    id: "insurance",
    name: "Marine Cargo Insurance Certificate",
    category: "Risk Protection",
    issuedBy: "Underwriter / Insurance Broker",
    purpose: "Protects against loss, damage, piracy, or General Average claims while goods travel across international waters, skies, or roads.",
    vitalFields: [
      "Institute Cargo Clauses (Clause A, B, or C)",
      "Insured amount (typically 110% of CIF value as mandated by Incoterms)",
      "Survey claims agent contact at destination port",
      "Voyage details and conveyance info"
    ],
    pitfall: "Relying on carrier liability: shipping lines are protected by international maritime conventions (Hague-Visby) with liability capped at tiny fractions of actual cargo value."
  }
];

export const COURSES_CATALOG = [
  {
    id: "bootcamp",
    title: "Import-Export Master Blueprint: Zero to First Container",
    level: "Beginner to Intermediate",
    duration: "8 Weeks (Self-paced + Live Q&A)",
    badge: "Most Popular",
    rating: 4.9,
    reviews: 840,
    students: "3,200+ Enrolled",
    price: "$497",
    originalPrice: "$1,299",
    overview: "The definitive hands-on training program designed to take you from total novice to executing your first cross-border export or import shipment safely and profitably.",
    modules: [
      {
        title: "Module 1: Trade Architecture & Business Registration",
        lessons: ["Choosing your entity structure", "Obtaining trade IDs (IEC, EORI, EIN)", "Setting up foreign exchange bank accounts", "Registering with Export Promotion bodies"]
      },
      {
        title: "Module 2: High-Margin Product & Market Selection",
        lessons: ["Using ITC Trade Map & UN Comtrade", "HS Code 6-digit classification", "Analyzing tariff barriers & duty exemptions", "Niche evaluation framework"]
      },
      {
        title: "Module 3: Supplier Vetting & International Contracts",
        lessons: ["Direct manufacturer vs trading house audit", "Sample testing & quality benchmarks (AQL 2.5)", "Drafting international sales contracts", "Non-Disclosure & Non-Circumvention agreements"]
      },
      {
        title: "Module 4: Incoterms 2020 & Smart Quotations",
        lessons: ["The 11 Incoterms decoded", "Cost vs Risk transfer milestones", "Constructing FOB, CIF, & DDP price quotes", "Currency fluctuation protection"]
      },
      {
        title: "Module 5: Banking, Letters of Credit (LC) & Trade Finance",
        lessons: ["Understanding LC at sight vs usance", "Discrepancy prevention masterclass", "Export credit insurance (ECGC/Ex-Im)", "Advance TT payment safeguards"]
      },
      {
        title: "Module 6: Shipping Logistics & Customs Clearance",
        lessons: ["FCL vs LCL container selection", "Working with Freight Forwarders & CHAs", "Bill of Lading types & endorsements", "Preventing port demurrage fees"]
      },
      {
        title: "Module 7: Customs Manifests & Buyer Hunting",
        lessons: ["Extracting buyer names from bill of lading data", "High-conversion cold export proposals", "Sampling strategies that win contracts", "Exhibiting at global trade expos"]
      }
    ]
  },
  {
    id: "finance-lc",
    title: "Letters of Credit (LC) & Trade Finance Specialist",
    level: "Intermediate to Advanced",
    duration: "4 Weeks",
    badge: "High Value",
    rating: 4.95,
    reviews: 412,
    students: "1,450+ Enrolled",
    price: "$349",
    originalPrice: "$799",
    overview: "Master the mechanics of international trade finance, UCP 600 banking rules, and secure multi-million dollar export/import contracts with zero payment risk.",
    modules: [
      {
        title: "Module 1: UCP 600 & ISBP 745 Framework",
        lessons: ["The international banking rules governing LCs", "Parties involved: Issuing, Advising, Confirming banks", "Irrevocable vs Transferable vs Back-to-Back LCs"]
      },
      {
        title: "Module 2: LC Structuring & Clause Negotiations",
        lessons: ["Demystifying restrictive LC clauses", "Delivery date and presentation period rules", "Partial shipment & transshipment permissions"]
      },
      {
        title: "Module 3: Document Preparation & Discrepancy Elimination",
        lessons: ["Matching Commercial Invoices to LC terms verbatim", "Bill of Lading clean-on-board endorsements", "Insurance certificate requirements (Clause A vs C)"]
      },
      {
        title: "Module 4: Pre- & Post-Shipment Working Capital Credit",
        lessons: ["Securing packing credit from banks", "Factoring and forfeiting export receivables", "Hedging against FX volatility"]
      }
    ]
  },
  {
    id: "customs-freight",
    title: "Freight Forwarding, Ocean Logistics & Customs Mastery",
    level: "All Levels",
    duration: "5 Weeks",
    badge: "Practical",
    rating: 4.88,
    reviews: 320,
    students: "1,120+ Enrolled",
    price: "$299",
    originalPrice: "$699",
    overview: "Everything you need to know about sea freight, air cargo, container types, customs brokers, HS code classifications, and avoiding crippling port penalties.",
    modules: [
      {
        title: "Module 1: Maritime Shipping & Container Types",
        lessons: ["20ft, 40ft, 40ft High Cube, Flat Rack & Reefer containers", "Volume vs weight calculations (CBM vs Revenue Ton)", "FCL vs LCL cost thresholds"]
      },
      {
        title: "Module 2: Customs Brokers & Border Clearance",
        lessons: ["How CHAs and customs brokers process entries", "The 3 channels of customs inspection: Green, Yellow, Red", "Tariff quotas, anti-dumping duties, and countervailing taxes"]
      },
      {
        title: "Module 3: Port Fees, Demurrage & Detention Defense",
        lessons: ["Free time negotiation with shipping lines", "Terminal Handling Charges (THC) breakdown", "Managing port congestion and roll-overs"]
      }
    ]
  }
];

export const CASE_STUDIES = [
  {
    title: "Exporting 20MT Specialty Arabica Coffee Beans from Vietnam to Germany",
    type: "Export Case Study",
    route: "Haiphong Port (VNHPH) → Port of Hamburg (DEHAM)",
    incoterm: "CIF Hamburg",
    value: "$148,000 USD",
    paymentTerm: "Irrevocable LC at Sight (100%)",
    container: "1 x 20ft Dry Container (Jute bags on pallets with silica gel desiccant)",
    challenges: [
      "Preventing moisture condensation and mold damage during 32-day equatorial sea transit",
      "Meeting strict EU Maximum Residue Limits (MRL) for pesticides and Ochratoxin A",
      "Complying with the EU Deforestation Regulation (EUDR) geolocation traceability requirement"
    ],
    solution: "Used Kraft paper container liners with high-absorption desiccant poles. Hired Eurofins for pre-shipment laboratory analysis before container stuffing. Issued Certificate of Origin Form A for GSP duty relief.",
    outcome: "Cargo cleared Hamburg customs in 36 hours with zero duty under EU preferential tariff. Buyer placed a recurring quarterly contract for 4 additional containers."
  },
  {
    title: "Importing 10,000 Smart Home IoT Sensors from Shenzhen to Los Angeles",
    type: "Import Case Study",
    route: "Yantian Port (CNYTN) → Port of Long Beach (USLGB)",
    incoterm: "FOB Yantian",
    value: "$230,000 USD",
    paymentTerm: "30% Advance TT, 70% against B/L Copy after SGS Inspection",
    container: "1 x 40ft High Cube Container",
    challenges: [
      "Navigating US Section 301 China tariffs (additional 25% duty)",
      "FCC Part 15 wireless radiation certification compliance",
      "Customs Border Protection (CBP) Importer Security Filing (ISF 10+2) strict 24-hour deadline"
    ],
    solution: "Audited factory via SGS prior to final 70% payment wire. Bound FCC test reports directly to customs entry. Lodged ISF 48 hours prior to vessel departure to eliminate $5,000 CBP penalty risk.",
    outcome: "Total landed cost came within 1.5% of projected budget. Goods delivered to US 3PL fulfillment warehouse without inspection holds."
  }
];

export const CALCULATOR_PRESETS = [
  {
    name: "Consumer Electronics (Shenzhen to Los Angeles)",
    productCost: 50000,
    units: 2500,
    originInland: 650,
    freightCost: 2800,
    insuranceCost: 220,
    dutyRate: 7.5,
    vatTaxRate: 0,
    portHandling: 850,
    destInland: 600,
    currency: "USD"
  },
  {
    name: "Organic Spices & Commodities (Mumbai to Rotterdam)",
    productCost: 35000,
    units: 10000,
    originInland: 450,
    freightCost: 2100,
    insuranceCost: 150,
    dutyRate: 3.2,
    vatTaxRate: 9,
    portHandling: 700,
    destInland: 550,
    currency: "EUR"
  },
  {
    name: "Apparel & Textiles (Dhaka to Felixstowe, UK)",
    productCost: 42000,
    units: 6000,
    originInland: 500,
    freightCost: 2400,
    insuranceCost: 180,
    dutyRate: 12.0,
    vatTaxRate: 20,
    portHandling: 750,
    destInland: 650,
    currency: "GBP"
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Do you currently have a registered business entity with an active trade license (e.g. IEC, EORI, or EIN)?",
    options: [
      { text: "Yes, fully registered with foreign exchange bank account active", points: 3 },
      { text: "I have a domestic business entity, but no trade/import-export license yet", points: 2 },
      { text: "Not yet, I am starting completely from scratch", points: 1 }
    ]
  },
  {
    id: 2,
    question: "Have you identified a specific commodity and its 6-digit Harmonized System (HS) code?",
    options: [
      { text: "Yes, I know the exact 6/8-digit HS Code, tariff rate, and quality certificates required", points: 3 },
      { text: "I have an industry/product idea, but haven't analyzed the HS code or tariffs", points: 2 },
      { text: "No, I am still exploring which profitable products to trade", points: 1 }
    ]
  },
  {
    id: 3,
    question: "How confident are you with Incoterms 2020 (FOB vs CIF vs DDP) and cost calculations?",
    options: [
      { text: "Very confident – I can build accurate landed cost and FOB/CIF export quotations", points: 3 },
      { text: "Somewhat familiar – I understand the basics but get confused by risk vs cost transfer", points: 2 },
      { text: "Beginner – I don't know what Incoterms mean or how to allocate freight/insurance", points: 1 }
    ]
  },
  {
    id: 4,
    question: "How do you plan to handle international payments and credit risk?",
    options: [
      { text: "Through Irrevocable Letters of Credit (LC), Advance TT, or Export Credit Insurance", points: 3 },
      { text: "Open Account with new buyers or standard wire transfers without insurance", points: 1 },
      { text: "I need to learn how cross-border trade payment instruments work", points: 2 }
    ]
  },
  {
    id: 5,
    question: "What is your working capital / budget allocated to your first shipment or inventory?",
    options: [
      { text: "$15,000+ (Sufficient for full container load or high-volume wholesale)", points: 3 },
      { text: "$3,000 to $15,000 (Ideal for LCL consolidation, high-value samples, or niche trade)", points: 2 },
      { text: "Under $3,000 (Focusing on merchant trade agency or micro-importing)", points: 1 }
    ]
  }
];

export const GLOSSARY_TERMS = [
  {
    term: "Harmonized System (HS) Code",
    definition: "A standardized numerical method of classifying traded products developed by the World Customs Organization (WCO). Used by customs authorities worldwide to identify products when assessing duties, taxes, and trade statistics."
  },
  {
    term: "Bill of Lading (B/L)",
    definition: "A legally binding contract issued by a maritime carrier to a shipper, detailing the type, quantity, and destination of the goods being carried. It serves as a title document of ownership, a cargo receipt, and a contract of carriage."
  },
  {
    term: "Letter of Credit (LC / Documentary Credit)",
    definition: "A financial commitment issued by a bank at the buyer's request, guaranteeing that payment will be made to the exporter provided the required shipping documents are presented strictly according to specified terms."
  },
  {
    term: "Incoterms (International Commercial Terms)",
    definition: "A set of eleven standardized 3-letter trade rules published by the International Chamber of Commerce (ICC) defining the responsibilities of buyers and sellers for the delivery of goods under sales contracts."
  },
  {
    term: "Demurrage",
    definition: "A penalty charge applied by the shipping line or port authority when a cargo container is not picked up and moved out of the terminal within the agreed free storage period."
  },
  {
    term: "Detention",
    definition: "A fee charged by the carrier when an empty container is kept outside the port terminal past the permitted free days before being returned to the depot."
  },
  {
    term: "Free on Board (FOB)",
    definition: "An Incoterm meaning the seller delivers the goods on board the vessel nominated by the buyer at the named port of shipment. The risk of loss or damage transfers once goods are loaded on board."
  },
  {
    term: "Cost, Insurance, and Freight (CIF)",
    definition: "An Incoterm where the seller arranges and pays for transportation to the destination port and provides minimum marine cargo insurance. Risk transfers to the buyer as soon as the goods are loaded onto the ship at the origin."
  },
  {
    term: "Certificate of Origin (COO)",
    definition: "An official declaration issued by a chamber of commerce or designated government department certifying the country where goods were manufactured or grown, required for customs duty determination."
  },
  {
    term: "FCL (Full Container Load)",
    definition: "A shipping ocean term denoting that an entire shipping container (typically 20ft or 40ft) is reserved exclusively for one consignor's cargo, regardless of whether it is filled to capacity."
  },
  {
    term: "LCL (Less than Container Load)",
    definition: "A sea freight shipment method where multiple shippers' smaller cargo consignments are consolidated into a shared container. Charges are calculated based on volume (cubic meters / CBM)."
  },
  {
    term: "Customs Broker / CHA (Custom House Agent)",
    definition: "A licensed professional or firm authorized to assist importers and exporters in clearing goods through customs barriers, preparing documentation, and paying statutory duties on their behalf."
  },
  {
    term: "Proforma Invoice (PI)",
    definition: "A preliminary commercial invoice sent by the exporter to the buyer before shipment, specifying description of goods, quantity, pricing, Incoterms, and bank payment instructions for opening an LC or sending a deposit."
  },
  {
    term: "General Average",
    definition: "An ancient maritime law principle whereby all cargo owners on a ship proportionally share the financial losses resulting from voluntary sacrifice of cargo or equipment to save the vessel in an emergency."
  },
  {
    term: "Customs Bond / Bonded Warehouse",
    definition: "A secured building or area where dutiable imported goods may be stored, manipulated, or undergo manufacturing operations without payment of duty until they are removed for domestic consumption."
  }
];

export const FAQS = [
  {
    question: "Do I need a huge amount of capital to start an import-export business?",
    answer: "No. You can start as an Export Indenting Agent (Merchant Commission Agent) where you connect international buyers to domestic manufacturers and earn a commission (typically 2% to 7%) without purchasing inventory yourself. If you do take direct title to goods, you can begin with LCL (Less than Container Load) shipments or air cargo orders starting under $2,000–$5,000."
  },
  {
    question: "How do I make sure a foreign buyer will actually pay me?",
    answer: "Never ship on 'Open Account' (delivering goods before receiving payment) with a new buyer. Use an Irrevocable Letter of Credit (LC) confirmed by a top-tier international bank, or request a 30% to 50% advance TT deposit with the balance payable against non-negotiable Bill of Lading copy. Additionally, back your transactions with government export credit insurance (such as ECGC or Ex-Im Bank)."
  },
  {
    question: "What is an HS Code and why is it so critical?",
    answer: "The Harmonized System (HS) Code is an internationally standardized 6-digit code (expanded to 8 or 10 digits by individual countries) that classifies every traded good. It determines your exact import tariffs, whether export subsidies/duty drawbacks apply, which safety certifications (like FDA, CE) are mandatory, and if the item is restricted or banned."
  },
  {
    question: "What is the difference between a Freight Forwarder and a Customs Broker?",
    answer: "A Freight Forwarder organizes the physical transportation of your cargo (booking vessel space, negotiating container freight, arranging trucking and warehouse storage). A Customs Broker (CHA) is licensed by the government to handle the legal entry and export paperwork, classify HS codes, compute duties, and clear cargo through border control."
  },
  {
    question: "How do I find authentic international buyers without traveling?",
    answer: "You can tap into global customs shipment manifest databases (which list exact corporate names of companies receiving shipments of your product), leverage verified B2B trade platforms, partner with your national commercial trade attaches at embassies abroad, and participate in virtual international buyer-seller meets (BSMs)."
  }
];

