import React from 'react';
import { Ship, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer({ activePage = 'home', setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const themeStyles = {
    home: {
      footer: 'bg-[#FAF7F1] border-t border-[#E5D8C7] text-[#786657]',
      brandText: 'text-[#25190F]',
      brandSub: 'text-[#786657]',
      brandBadge: 'bg-[#F3EBDD] text-[#B66A28] border-[#E5D8C7]',
      heading: 'text-[#25190F]',
      linkHover: 'hover:text-[#B66A28]',
      accentLink: 'text-[#B66A28] hover:underline font-bold',
      borderSep: 'border-[#E5D8C7]',
      subText: 'text-[#786657]'
    },
    about: {
      footer: 'bg-[#FAF7F1] border-t border-[#E5D8C7] text-[#786657]',
      brandText: 'text-[#25190F]',
      brandSub: 'text-[#786657]',
      brandBadge: 'bg-[#F3EBDD] text-[#B66A28] border-[#E5D8C7]',
      heading: 'text-[#25190F]',
      linkHover: 'hover:text-[#B66A28]',
      accentLink: 'text-[#B66A28] hover:underline font-bold',
      borderSep: 'border-[#E5D8C7]',
      subText: 'text-[#786657]'
    },
    courses: {
      footer: 'bg-[#FAF7F1] border-t border-[#E5D8C7] text-[#786657]',
      brandText: 'text-[#25190F]',
      brandSub: 'text-[#786657]',
      brandBadge: 'bg-[#F3EBDD] text-[#B66A28] border-[#E5D8C7]',
      heading: 'text-[#25190F]',
      linkHover: 'hover:text-[#B66A28]',
      accentLink: 'text-[#B66A28] hover:underline font-bold',
      borderSep: 'border-[#E5D8C7]',
      subText: 'text-[#786657]'
    }
  };

  const t = themeStyles[activePage] || (
    activePage === 'resources' ? themeStyles.about : 
    (activePage === 'register' ? themeStyles.courses : themeStyles.home)
  );

  return (
    <footer className={`${t.footer} text-xs mt-auto transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#40291B] border border-[#B66A28]/35 flex items-center justify-center text-[#FAF7F1] shadow-md shadow-[#40291B]/20">
                <Ship className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`font-montserrat font-extrabold text-xl tracking-tight ${t.brandText}`}>
                    TradeCraft
                  </span>
                  <span className={`font-montserrat font-bold text-[10px] uppercase tracking-wider border px-1.5 py-0.5 rounded shadow-xs ${t.brandBadge}`}>
                    Academy
                  </span>
                </div>
                <p className={`font-montserrat font-medium text-[11px] tracking-wide ${t.brandSub}`}>
                  Import & Export Business Training
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              The premier online educational institution dedicated to practical cross-border trade operations, Incoterms 2020 compliance, marine freight logistics, and trade finance security.
            </p>
            <div className={`text-xs ${t.subText}`}>
              Empowering exporters and importers in 45+ countries.
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className={`font-bold uppercase tracking-wider text-xs mb-4 ${t.heading}`}>
              Explore Pages
            </h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => handleNavClick('home')} className={`${t.linkHover} transition-colors cursor-pointer`}>Home</button></li>
              <li><button onClick={() => handleNavClick('about')} className={`${t.linkHover} transition-colors cursor-pointer`}>About Us</button></li>
              <li><button onClick={() => handleNavClick('courses')} className={`${t.linkHover} transition-colors cursor-pointer`}>Courses</button></li>
              <li><button onClick={() => handleNavClick('mentors')} className={`${t.linkHover} transition-colors cursor-pointer`}>Mentors</button></li>
              <li><button onClick={() => handleNavClick('resources')} className={`${t.linkHover} transition-colors cursor-pointer`}>Resources</button></li>
            </ul>
          </div>

          {/* Account & Portal */}
          <div>
            <h4 className={`font-bold uppercase tracking-wider text-xs mb-4 ${t.heading}`}>
              Student Portal
            </h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => handleNavClick('register')} className={`${t.accentLink} cursor-pointer`}>Register Now</button></li>
              <li><button onClick={() => handleNavClick('login')} className={`${t.linkHover} transition-colors cursor-pointer`}>Student Login</button></li>
              <li><button onClick={() => handleNavClick('contact')} className={`${t.linkHover} transition-colors cursor-pointer`}>Contact Support</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className={`font-bold uppercase tracking-wider text-xs mb-4 ${t.heading}`}>
              Contact Desk
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B66A28] shrink-0" />
                <span>+1 (800) 542-8920</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B66A28] shrink-0" />
                <span>admissions@tradecraftacademy.com</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B66A28] shrink-0 mt-0.5" />
                <span>450 Lexington Ave, New York, NY 10017</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={`mt-12 pt-8 border-t ${t.borderSep} flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] ${t.subText}`}>
          <p>© {new Date().getFullYear()} TradeCraft Academy. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>256-Bit SSL Encrypted Learning Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
