import React, { useState } from 'react';
import { Ship, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Bespoke Color Styling per Page: 1st Home (Light Beige), 2nd About (Warm Linen Beige), 3rd Courses (Emerald Green)
  const themeStyles = {
    home: {
      header: 'bg-[#F7F3ED]/95 border-b border-[#E5D8C7]',
      brandText: 'text-[#25190F]',
      brandSub: 'text-[#786657]',
      brandBadge: 'bg-[#FAF7F1] text-[#B66A28] border-[#E5D8C7]',
      navActive: 'text-[#25190F] font-bold border-b-2 border-[#25190F] pb-1',
      navInactive: 'text-[#786657] hover:text-[#B66A28] font-medium transition-colors duration-200',
      loginBtnActive: 'text-[#25190F] bg-[#FAF7F1] border border-[#E5D8C7]',
      loginBtnInactive: 'text-[#786657] hover:text-[#B66A28] hover:bg-[#FAF7F1] transition-colors',
      registerBtn: 'bg-[#40291B] hover:bg-[#2d1b11] text-[#FAF7F1] shadow-md shadow-[#40291B]/20',
      mobileBg: 'bg-[#FAF7F1] border-[#E5D8C7] text-[#25190F]',
      mobileItemActive: 'bg-[#F3EBDD] text-[#25190F] font-bold',
      mobileItemInactive: 'text-[#786657] hover:text-[#B66A28] hover:bg-[#F3EBDD]',
      mobileToggle: 'text-[#786657] hover:text-[#25190F] hover:bg-[#FAF7F1]'
    },
    about: {
      header: 'bg-[#F7F3ED]/95 border-b border-[#E5D8C7]',
      brandText: 'text-[#25190F]',
      brandSub: 'text-[#786657]',
      brandBadge: 'bg-[#FAF7F1] text-[#B66A28] border-[#E5D8C7]',
      navActive: 'text-[#25190F] font-bold border-b-2 border-[#25190F] pb-1',
      navInactive: 'text-[#786657] hover:text-[#B66A28] font-medium transition-colors duration-200',
      loginBtnActive: 'text-[#25190F] bg-[#FAF7F1] border border-[#E5D8C7]',
      loginBtnInactive: 'text-[#786657] hover:text-[#B66A28] hover:bg-[#FAF7F1] transition-colors',
      registerBtn: 'bg-[#40291B] hover:bg-[#2d1b11] text-[#FAF7F1] shadow-md shadow-[#40291B]/20',
      mobileBg: 'bg-[#FAF7F1] border-[#E5D8C7] text-[#25190F]',
      mobileItemActive: 'bg-[#F3EBDD] text-[#25190F] font-bold',
      mobileItemInactive: 'text-[#786657] hover:text-[#B66A28] hover:bg-[#F3EBDD]',
      mobileToggle: 'text-[#786657] hover:text-[#25190F] hover:bg-[#FAF7F1]'
    },
    courses: {
      header: 'bg-[#F7F3ED]/95 border-b border-[#E5D8C7]',
      brandText: 'text-[#25190F]',
      brandSub: 'text-[#786657]',
      brandBadge: 'bg-[#FAF7F1] text-[#B66A28] border-[#E5D8C7]',
      navActive: 'text-[#25190F] font-bold border-b-2 border-[#25190F] pb-1',
      navInactive: 'text-[#786657] hover:text-[#B66A28] font-medium transition-colors duration-200',
      loginBtnActive: 'text-[#25190F] bg-[#FAF7F1] border border-[#E5D8C7]',
      loginBtnInactive: 'text-[#786657] hover:text-[#B66A28] hover:bg-[#FAF7F1] transition-colors',
      registerBtn: 'bg-[#40291B] hover:bg-[#2d1b11] text-[#FAF7F1] shadow-md shadow-[#40291B]/20',
      mobileBg: 'bg-[#FAF7F1] border-[#E5D8C7] text-[#25190F]',
      mobileItemActive: 'bg-[#F3EBDD] text-[#25190F] font-bold',
      mobileItemInactive: 'text-[#786657] hover:text-[#B66A28] hover:bg-[#F3EBDD]',
      mobileToggle: 'text-[#786657] hover:text-[#25190F] hover:bg-[#FAF7F1]'
    }
  };

  const t = themeStyles[activePage] || (
    activePage === 'resources' ? themeStyles.about : 
    (activePage === 'register' ? themeStyles.courses : themeStyles.home)
  );

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md shadow-xs transition-colors duration-300 ${t.header}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#40291B] border border-[#B66A28]/35 flex items-center justify-center text-[#FAF7F1] shadow-sm group-hover:scale-105 transition-transform">
              <Ship className="w-5 h-5 text-[#FAF7F1] stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-['Space_Grotesk'] font-extrabold text-xl sm:text-2xl tracking-tight leading-none ${t.brandText}`}>
                  TradeCraft
                </span>
                <span className={`font-['Space_Grotesk'] font-bold text-[10px] uppercase tracking-wider border px-2 py-0.5 rounded-md shadow-2xs leading-none ${t.brandBadge}`}>
                  Academy
                </span>
              </div>
              <p className={`font-medium text-[11px] sm:text-xs tracking-wide hidden sm:block mt-1 ${t.brandSub}`}>
                Import & Export Business Training
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm py-1 cursor-pointer transition-colors duration-200 ${
                  activePage === item.id 
                    ? t.navActive
                    : t.navInactive
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTA: Register Now */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('register')}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer ${t.registerBtn}`}
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${t.mobileToggle}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 border-t space-y-2 rounded-b-2xl shadow-xl px-2 ${t.mobileBg}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base transition-colors cursor-pointer ${
                  activePage === item.id 
                    ? t.mobileItemActive
                    : t.mobileItemInactive
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('register')}
                className={`w-full py-3 rounded-xl font-bold text-sm text-center shadow-md cursor-pointer ${t.registerBtn}`}
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
