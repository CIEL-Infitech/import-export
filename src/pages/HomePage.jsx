import React, { useState, useEffect } from 'react';
import heroSlide1 from '../assets/hero-slide-1.jpg';
import cargoShipImg from '../assets/cargo-ship.jpg';
import heroSlide3 from '../assets/hero-slide-3.jpg';
import { 
  ArrowRight, 
  Ship, 
  Globe2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle2, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  CreditCard, 
  Truck, 
  Sparkles,
  Quote,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Search,
  X
} from 'lucide-react';

export default function HomePage({ setActivePage }) {
  // Hero Images Horizontal Slideshow State (3 Distinct User Images)
  const heroSlides = [
    {
      src: heroSlide1,
      alt: 'Maersk Line Container Ship and Gantry Cranes at Port Terminal Quay',
      title: 'Container Port Terminal',
      tag: 'Global Maritime Hub & Berth'
    },
    {
      src: cargoShipImg,
      alt: 'Container Cargo Ship Sailing on Ocean',
      title: 'Ocean Cargo Vessel',
      tag: 'Deep-Sea Global Trade Lane'
    },
    {
      src: heroSlide3,
      alt: 'Aerial View of PSA Container Port Terminal with Gantry Cranes and Multicolored Containers',
      title: 'Mega Container Port',
      tag: 'Intermodal Freight & Gantry Cranes'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide horizontally every 5 seconds, resets when user clicks an arrow
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Interactive FAQ Accordion State (all closed by default)
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  const learningModules = [
    {
      title: "Company Setup & Trade Licenses",
      tag: "IEC, GST & Company Formation",
      icon: FileText
    },
    {
      title: "Profitable Product Selection",
      tag: "HS Code & Customs Duty",
      icon: TrendingUp
    },
    {
      title: "Finding Verified Overseas Buyers",
      tag: "Global Trade Databases & Cold Outreach",
      icon: Users
    },
    {
      title: "Incoterms 2020 Rules",
      tag: "FOB, CIF, EXW Risk & Costs",
      icon: ShieldCheck
    },
    {
      title: "Letter of Credit & Safe Payments",
      tag: "100% Payment Guarantee via Banks",
      icon: CreditCard
    },
    {
      title: "Shipping, Freight & Customs",
      tag: "Container Booking & CHA Coordination",
      icon: Truck
    }
  ];

  const mentorshipProgrammes = [
    {
      title: "Foundation Cohort",
      level: "Beginner",
      duration: "4 Weeks",
      features: [
        "Company & trade license setup",
        "Product selection & HS codes",
        "Weekly live mentor Q&A"
      ]
    },
    {
      title: "Masterclass Blueprint",
      level: "Flagship",
      duration: "8 Weeks",
      features: [
        "First container shipment guide",
        "Letter of Credit & contracts",
        "Customs manifest buyer database",
        "Verified course certificate"
      ]
    },
    {
      title: "1-on-1 Mentorship",
      level: "Executive",
      duration: "12 Weeks",
      features: [
        "Direct mentor advisory",
        "Contract clause review",
        "Live shipment assistance"
      ]
    }
  ];

  const benefits = [
    "100% Payment Safety (Bank LC & TT)",
    "50+ Legal Contracts & Checklists",
    "Live Mentorship from Trade Brokers",
    "Real Overseas Buyer Databases",
    "Zero-Demurrage Clearance System",
    "Verified Trade Practice Certificate"
  ];

  const successStories = [
    {
      name: "Marcus Vance",
      role: "Agricultural Exporter",
      location: "California, USA",
      quote: "Within 60 days of graduating, I closed my first 20ft container export of organic almonds to Germany on CIF terms with 100% LC payment.",
      metric: "$145,000 First Shipment",
      rating: 5
    },
    {
      name: "Amina Al-Mansoor",
      role: "Consumer Goods Importer",
      location: "Dubai, UAE",
      quote: "The supplier vetting framework saved me from fraud. TradeCraft taught me how to run pre-shipment inspections and negotiate 14 days of free demurrage.",
      metric: "Zero Customs Delays",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Spices Trader",
      location: "Mumbai, India",
      quote: "The mentors reviewed my Proforma Invoice and LC terms clause-by-clause. That gave me the confidence to close European buyers safely.",
      metric: "Recurring EU Contract",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "How much capital do I need to start an import-export business?",
      a: "You can start with as little as $1,000 to $2,500 if you operate as a sourcing agent or indenting broker earning commissions without purchasing inventory. For physical stock export, working capital depends on your commodity, but with confirmed Letters of Credit (LC), bank trade finance can fund up to 80% of shipment costs."
    },
    {
      q: "Do I need prior business experience or a degree in logistics?",
      a: "No prior experience or logistics degree is required. Our step-by-step curriculum is engineered from first principles, taking you from business registration and HS code classification to negotiating Incoterms and clearing customs through licensed freight forwarders."
    },
    {
      q: "How does TradeCraft guarantee 100% payment safety from foreign buyers?",
      a: "We train you thoroughly on International Chamber of Commerce (ICC) UCP 600 rules for Irrevocable Confirmed Letters of Credit (LC) and Export Credit Agency (ECGC / Ex-Im Bank) insurance. When set up correctly, your payment is legally guaranteed by premier commercial banks upon presentation of compliant shipping documents."
    },
    {
      q: "How do I find genuine overseas buyers without getting scammed?",
      a: "TradeCraft students get direct training on accessing global customs bill of lading manifests, government export promotion councils, verified B2B trade intelligence tools, and direct diplomatic commercial attache directories. We teach you how to vet buyers before signing contracts."
    },
    {
      q: "What is the difference between FOB, CIF, and EXW Incoterms?",
      a: "Incoterms 2020 define who pays for shipping and where risk transfers. EXW (Ex Works) means the buyer handles everything from the factory floor. FOB (Free on Board) means the seller delivers goods safely loaded onto the ocean vessel. CIF (Cost, Insurance & Freight) means the seller pays ocean freight and marine cargo insurance up to the foreign destination port."
    },
    {
      q: "Are the classes live or pre-recorded?",
      a: "You get lifetime access to all HD video masterclasses, downloadable trade contract templates, and live weekly mentor advisory sessions on Zoom. All live sessions are recorded and archived with searchable timestamps."
    },
    {
      q: "Will I receive an industry-recognized certificate upon completion?",
      a: "Yes. Upon completing the coursework and passing the practical trade transaction simulation exam, you will receive a verifiable, digitally signed TradeCraft Academy Certificate of International Trade Practice."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION: Multi-Image Horizontal Slideshow */}
      <section className="relative min-h-[90vh] lg:min-h-[820px] flex items-center overflow-hidden border-b border-[#dfd3c3]">
        
        {/* Full-bleed Multi-Image Horizontal Slide Track */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div 
            className="w-full h-full flex transition-transform duration-700 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className="w-full h-full flex-shrink-0 relative overflow-hidden"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center select-none enhanced-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content & Controls Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 w-full z-10 flex flex-col justify-between min-h-[85vh] lg:min-h-[780px]">
          
          {/* Floating luxury content box */}
          <div className="max-w-[530px] bg-[#FAF7F1] backdrop-blur-sm p-7 sm:p-9 rounded-[26px] shadow-[0_12px_36px_rgba(37,25,15,0.07)] border border-[#E5D8C7] space-y-5 text-[#25190F]">
            
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#25190F] tracking-tight leading-[1.2] font-['Space_Grotesk']">
              <span className="text-[#25190F]">Start Your</span> <span className="text-[#B66A28] font-extrabold">Import & Export</span> <span className="text-[#25190F]">Business Journey</span>
            </h1>

            <p className="text-sm sm:text-base text-[#786657] leading-relaxed font-normal">
              Learn how to launch and scale a cross-border trade business with 100% payment safety, Incoterms 2020, and ocean freight logistics.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => {
                  setActivePage('register');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-xl bg-[#40291B] hover:bg-[#2c1c13] text-[#FAF7F1] font-bold text-sm shadow-md shadow-[#40291B]/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group cursor-pointer font-['DM_Sans'] shrink-0"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 text-[#B66A28] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setActivePage('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3 rounded-xl bg-transparent hover:bg-[#F3EBDD]/60 text-[#786657] hover:text-[#25190F] font-medium text-xs sm:text-sm border border-[#E5D8C7] transition-all text-center cursor-pointer font-['DM_Sans']"
              >
                Explore Training Programmes
              </button>
            </div>

            {/* Key Value Badges */}
            <div className="pt-5 grid grid-cols-3 gap-2 sm:gap-2.5 border-t border-[#E5D8C7]">
              <div className="bg-[#F3EBDD] p-3 rounded-2xl border border-[#E5D8C7] shadow-[0_2px_8px_rgba(37,25,15,0.02)] flex flex-col justify-between text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#25190F] font-['Space_Grotesk'] tracking-tight leading-none">100%</div>
                  <div className="font-bold text-xs text-[#25190F] mt-1.5 leading-tight">Payment Safety</div>
                </div>
                <div className="text-[10px] text-[#786657] mt-1 leading-tight font-normal">LC Banking Security</div>
              </div>

              <div className="bg-[#F3EBDD] p-3 rounded-2xl border border-[#E5D8C7] shadow-[0_2px_8px_rgba(37,25,15,0.02)] flex flex-col justify-between text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#25190F] font-['Space_Grotesk'] tracking-tight leading-none">11</div>
                  <div className="font-bold text-xs text-[#25190F] mt-1.5 leading-tight">Incoterms®</div>
                </div>
                <div className="text-[10px] text-[#786657] mt-1 leading-tight font-normal">Official ICC 2020 Rules</div>
              </div>

              <div className="bg-[#F3EBDD] p-3 rounded-2xl border border-[#E5D8C7] shadow-[0_2px_8px_rgba(37,25,15,0.02)] flex flex-col justify-between text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#25190F] font-['Space_Grotesk'] tracking-tight leading-none">$32T</div>
                  <div className="font-bold text-xs text-[#25190F] mt-1.5 leading-tight">Global Trade</div>
                </div>
                <div className="text-[10px] text-[#786657] mt-1 leading-tight font-normal">Annual Market Volume</div>
              </div>
            </div>

          </div>

          {/* Slide Navigation & Controls Dock (Proper Spacing & Alignment) */}
          <div className="mt-8 lg:mt-6 flex justify-start lg:justify-end w-full">
            <div className="inline-flex flex-wrap items-center gap-3 bg-[#FAF7F1]/95 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-[22px] border border-[#E5D8C7] shadow-[0_12px_32px_rgba(37,25,15,0.08)] text-[#25190F]">
              
              {/* Live Slide Indicator & Title */}
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B66A28] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B66A28]"></span>
                </span>
                <span className="text-xs font-bold text-[#25190F] tracking-wide uppercase font-['Space_Grotesk']">
                  {heroSlides[currentSlide].title}
                </span>
                <span className="text-xs text-[#c4b5a2] hidden md:inline">•</span>
                <span className="text-[11px] text-[#786657] font-medium hidden md:inline">
                  {heroSlides[currentSlide].tag}
                </span>
              </div>
              
              {/* Divider */}
              <div className="hidden sm:block h-5 w-px bg-[#E5D8C7] mx-1" />

              {/* Prev / Next & Slide Indicators */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-1.5 rounded-lg bg-[#F3EBDD] hover:bg-[#40291B] text-[#25190F] hover:text-[#FAF7F1] border border-[#E5D8C7] transition-all cursor-pointer shadow-2xs"
                  aria-label="Previous slide"
                  title="Previous slide"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-1.5 px-0.5">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-7 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center font-['Space_Grotesk'] ${
                        currentSlide === idx 
                          ? 'bg-[#40291B] text-[#FAF7F1] shadow-xs scale-105' 
                          : 'bg-[#F3EBDD] hover:bg-[#eae0cf] text-[#25190F] border border-[#E5D8C7]'
                      }`}
                      aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                      title={slide.title}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-1.5 rounded-lg bg-[#F3EBDD] hover:bg-[#40291B] text-[#25190F] hover:text-[#FAF7F1] border border-[#E5D8C7] transition-all cursor-pointer shadow-2xs"
                  aria-label="Next slide"
                  title="Next slide"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-xs font-bold text-[#B66A28] font-mono ml-1 hidden xs:inline">
                  0{currentSlide + 1} / 0{heroSlides.length}
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Marquee Moving Trade Hubs Strip with sleek Black Background */}
      <div className="w-full bg-black border-y border-[#3d2f23] shadow-inner overflow-hidden py-3.5">
        <div className="animate-marquee items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <span className="flex items-center gap-2 text-sky-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Ship className="w-4 h-4 text-sky-400" /> Active Shipping Hubs & Corridors:
          </span>
          <span className="flex items-center gap-1.5 text-white font-medium">⚓ Port of Rotterdam (Europe Hub)</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">🚢 Singapore Transshipment Gateway</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">📦 Shanghai Mega Container Port</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">🏢 Jebel Ali Port, Dubai (MENA)</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">🌊 Port of Los Angeles / Long Beach</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">⚡ Nhava Sheva (JNPT) Mumbai</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">🚢 Hamburg Port (Northern Europe)</span>
          <span className="text-slate-600">•</span>
          {/* Duplicate set for seamless continuous marquee loop */}
          <span className="flex items-center gap-2 text-sky-400 font-bold ml-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Ship className="w-4 h-4 text-sky-400" /> Active Shipping Hubs & Corridors:
          </span>
          <span className="flex items-center gap-1.5 text-white font-medium">⚓ Port of Rotterdam (Europe Hub)</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">🚢 Singapore Transshipment Gateway</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">📦 Shanghai Mega Container Port</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">🏢 Jebel Ali Port, Dubai (MENA)</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">🌊 Port of Los Angeles / Long Beach</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">⚡ Nhava Sheva (JNPT) Mumbai</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-medium">🚢 Hamburg Port (Northern Europe)</span>
        </div>
      </div>

      {/* 2. Simple Introduction to Import and Export + Big Container Port Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F1] border border-[#E5D8C7] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#F3EBDD] px-3.5 py-1 rounded-full border border-[#E5D8C7]">
                The Global Opportunity
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk']">
                What is the Import & Export Business?
              </h2>
              <div className="space-y-2 text-[#786657] text-sm leading-relaxed pt-1">
                <p>
                  <strong className="text-[#25190F]">Exporting:</strong> Selling domestic products to foreign buyers in high-paying global markets.
                </p>
                <p>
                  <strong className="text-[#25190F]">Importing:</strong> Sourcing quality products directly from overseas factories at manufacturer prices.
                </p>
                <p className="text-[#786657] text-xs">
                  <strong className="text-[#B66A28]">Zero Inventory Option:</strong> You can also earn 2% to 7% commissions as a sourcing agent without buying inventory.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#F3EBDD] border border-[#E5D8C7] text-center">
                <Globe2 className="w-6 h-6 text-[#B66A28] mx-auto mb-1" />
                <div className="text-xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk']">$32T</div>
                <div className="text-[11px] text-[#786657]">Global Merchandise Trade</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F3EBDD] border border-[#E5D8C7] text-center">
                <Award className="w-6 h-6 text-[#B66A28] mx-auto mb-1" />
                <div className="text-xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk']">100%</div>
                <div className="text-[11px] text-[#786657]">Bank Payment Security</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F3EBDD] border border-[#E5D8C7] text-center">
                <Ship className="w-6 h-6 text-[#B66A28] mx-auto mb-1" />
                <div className="text-xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk']">11</div>
                <div className="text-[11px] text-[#786657]">Incoterms 2020 Rules</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F3EBDD] border border-[#E5D8C7] text-center">
                <Users className="w-6 h-6 text-[#B66A28] mx-auto mb-1" />
                <div className="text-xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk']">3,200+</div>
                <div className="text-[11px] text-[#786657]">Traders Mentored</div>
              </div>
            </div>
          </div>

          {/* Big Container Port Terminal Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#dfd3c3] shadow-sm">
            <img
              src={heroSlide3}
              alt="Aerial View of Mega Container Port Terminal with Blue Cranes and Cargo Ship"
              className="w-full h-[240px] sm:h-[340px] object-cover enhanced-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#B66A28] text-white">
                  Port Logistics
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] tracking-tight">
                  Container Freight Stations & Ocean Logistics
                </h3>
                <p className="text-xs text-slate-200">
                  Master sea freight operations, customs clearance, and container shipping without port delays.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. What Students Will Learn (Single Large Box in Clean White) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E5D8C7] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-sm space-y-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#F3EBDD] px-3.5 py-1 rounded-full border border-[#E5D8C7]">
              Curriculum & Courses
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk'] mt-2.5">
              What You Will Learn
            </h2>
            <p className="text-[#786657] text-xs sm:text-sm mt-1.5 leading-relaxed">
              Step-by-step masterclasses engineered to take you from foundational setup to managing live global shipments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningModules.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#FAF7F1] hover:bg-white border border-[#E5D8C7] hover:border-[#B66A28]/50 p-4 sm:p-4.5 rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F3EBDD] text-[#B66A28] border border-[#E5D8C7] group-hover:bg-[#40291B] group-hover:text-[#FAF7F1] group-hover:border-[#40291B] flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#25190F] font-['Space_Grotesk'] tracking-tight transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium text-[#786657] group-hover:text-[#B66A28] transition-colors block">
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Mentorship Programmes (With User-Specified Brown Hover Effect) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#F3EBDD] px-3.5 py-1 rounded-full border border-[#E5D8C7]">
            Programmes
          </span>
          <h2 className="text-3xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk'] mt-2">
            Mentorship Programmes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {mentorshipProgrammes.map((prog, idx) => {
            if (prog.level === 'Beginner') {
              // 1. Beginner: Sage Green Fully
              return (
                <div
                  key={idx}
                  className="group bg-[#426450] hover:bg-[#345341] text-white border border-[#345341] rounded-3xl p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#426450]/40 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#2f493a] text-[#b4edc7] border border-[#263e30]">
                        {prog.level}
                      </span>
                      <span className="text-xs text-[#d2edd8] font-semibold">
                        {prog.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] tracking-tight mb-4">
                      {prog.title}
                    </h3>

                    <div className="space-y-2.5 border-t border-[#345341] pt-4 mb-6">
                      {prog.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#e1f2e6] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#78e6a0] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActivePage('register');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3 rounded-xl bg-white text-[#1f3829] hover:bg-[#b4edc7] hover:text-[#14281d] font-bold text-xs shadow-md transition-all cursor-pointer font-['DM_Sans']"
                  >
                    Enroll in This Programme →
                  </button>
                </div>
              );
            }

            if (prog.level === 'Flagship') {
              // 2. Flagship: Dusty Blue
              return (
                <div
                  key={idx}
                  className="group bg-[#42627e] hover:bg-[#335069] text-white border border-[#304a60] rounded-3xl p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#42627e]/40 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#2b4256] text-[#bde0fe] border border-[#213545]">
                        {prog.level}
                      </span>
                      <span className="text-xs text-[#d2e7fa] font-semibold">
                        {prog.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] tracking-tight mb-4">
                      {prog.title}
                    </h3>

                    <div className="space-y-2.5 border-t border-[#304a60] pt-4 mb-6">
                      {prog.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#e2effa] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#72bbf7] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActivePage('register');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3 rounded-xl bg-white text-[#1d354a] hover:bg-[#bde0fe] hover:text-[#122433] font-bold text-xs shadow-md transition-all cursor-pointer font-['DM_Sans']"
                  >
                    Enroll in This Programme →
                  </button>
                </div>
              );
            }

            // 3. Executive / 1-on-1: Muted Terracotta
            return (
              <div
                key={idx}
                className="group bg-[#a15743] hover:bg-[#884331] text-white border border-[#83402e] rounded-3xl p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#a15743]/40 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#753424] text-[#ffdcd3] border border-[#5e271a]">
                      {prog.level}
                    </span>
                    <span className="text-xs text-[#fae1da] font-semibold">
                      {prog.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] tracking-tight mb-4">
                    {prog.title}
                  </h3>

                  <div className="space-y-2.5 border-t border-[#83402e] pt-4 mb-6">
                    {prog.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#fbebe7] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#ffc1b1] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActivePage('register');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-xl bg-white text-[#68291a] hover:bg-[#ffdcd3] hover:text-[#4a1c11] font-bold text-xs shadow-md transition-all cursor-pointer font-['DM_Sans']"
                >
                  Enroll in This Programme →
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Benefits of Joining (Full Muted Lavender Theme) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#685e7a] via-[#605572] to-[#554b66] border border-[#524763] rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#eadffd] bg-[#4e435e] px-3.5 py-1 rounded-full border border-[#3f354f]">
              Why Join
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mt-2">
              Benefits of Joining TradeCraft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-3xl mx-auto">
            {benefits.map((b, idx) => (
              <div 
                key={idx} 
                className="group p-4 rounded-2xl bg-[#766c89] hover:bg-[#493e5a] border border-[#857b98] hover:border-[#9d92b0] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3.5 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-[#534865] group-hover:bg-[#3d334e] text-[#d6c8f2] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-white font-bold transition-colors">
                  {b}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 text-center">
            <button
              onClick={() => {
                setActivePage('register');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-xl bg-white text-[#413653] hover:bg-[#eae1fa] hover:text-[#2c233c] font-bold text-sm shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer font-['DM_Sans']"
            >
              <span>Join Today & Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Success Stories (Soft Sage Green Theme with User-Provided #DEEBE1 Color) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#eaf2ec] via-[#f1f7f3] to-[#e4eee7] border border-[#bed8c8] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-sm space-y-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1d3d29] bg-[#cde4d4] px-3.5 py-1 rounded-full border border-[#add0b9]">
              Alumni Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142e1e] tracking-tight font-['Space_Grotesk'] mt-2.5">
              Success Stories
            </h2>
            <p className="text-[#32523d] text-xs sm:text-sm mt-1.5 leading-relaxed">
              Real results from verified graduates shipping containers across global trade corridors.
            </p>
          </div>

          {/* Continuous Scrolling Success Stories Marquee */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="flex animate-marquee-stories gap-6 hover:[animation-play-state:paused] w-max">
              {[...successStories, ...successStories].map((story, idx) => (
                <div
                  key={idx}
                  className="w-[320px] sm:w-[380px] shrink-0 bg-[#DEEBE1] hover:bg-[#d1e4d5] border border-[#b8d4c1] hover:border-[#96c2a4] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-[#997324]">
                      {[...Array(story.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="w-3.5 h-3.5 fill-[#997324]" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-[#7a5813] leading-relaxed italic font-semibold">
                      "{story.quote}"
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#bed4c5] flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-[#142e1e] font-['Space_Grotesk']">{story.name}</h4>
                      <p className="text-[11px] text-[#3d5f47]">{story.role} • {story.location}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#cbe2d3] text-[#143d22] border border-[#b0d2b9]">
                      {story.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS: Interactive Dropdown Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#F3EBDD] px-3.5 py-1 rounded-full border border-[#E5D8C7]">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk'] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-[#786657] text-xs sm:text-sm mt-1">
            Click on any question below to view detailed answers.
          </p>
        </div>

        {/* Dropdown Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF7F1] border-[#B66A28] shadow-md ring-1 ring-[#B66A28]/25'
                    : 'bg-[#FAF7F1] hover:bg-[#F3EBDD] border-[#E5D8C7] shadow-xs'
                }`}
              >
                {/* Clickable Header Dropdown Trigger */}
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#25190F] text-sm sm:text-base cursor-pointer font-['DM_Sans']"
                >
                  <span className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-[#B66A28]' : 'bg-[#c4b5a2]'}`}></span>
                    <span>{faq.q}</span>
                  </span>
                  
                  {/* Dropdown Chevron Indicator */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#F3EBDD] text-[#B66A28]' : 'bg-[#F3EBDD] text-[#786657]'
                  }`}>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#786657] text-xs sm:text-sm leading-relaxed border-t border-[#E5D8C7] bg-[#F3EBDD] font-['DM_Sans']">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Contact Details & Register CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F1] border border-[#E5D8C7] rounded-3xl p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#F3EBDD] px-3.5 py-1 rounded-full border border-[#E5D8C7]">
                Contact Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk']">
                Have Questions Before Registering?
              </h2>
              <p className="text-[#786657] text-xs sm:text-sm leading-relaxed">
                Our advisors are available to help you select the right programme.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#786657] font-['DM_Sans']">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#B66A28] shrink-0" />
                  <span><strong className="text-[#25190F]">Admissions Phone:</strong> +1 (800) 542-8920</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#B66A28] shrink-0" />
                  <span><strong className="text-[#25190F]">Email:</strong> admissions@tradecraftacademy.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B66A28] shrink-0" />
                  <span><strong className="text-[#25190F]">Trade Centre:</strong> 450 Lexington Ave, New York, NY 10017</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F3EBDD] p-6 rounded-2xl border border-[#E5D8C7] text-center space-y-3">
              <h3 className="text-lg font-bold text-[#25190F] font-['Space_Grotesk'] tracking-tight">
                Ready to Start?
              </h3>
              <p className="text-xs text-[#786657]">
                Next cohort begins soon. Secure your seat today.
              </p>
              <button
                onClick={() => {
                  setActivePage('register');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3.5 rounded-xl bg-[#40291B] hover:bg-[#2d1b11] text-[#FAF7F1] font-bold text-sm shadow-md shadow-[#40291B]/20 flex items-center justify-center gap-2 font-['DM_Sans'] cursor-pointer"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
