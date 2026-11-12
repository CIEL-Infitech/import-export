import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import MentorsPage from './pages/MentorsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

import { MessageCircle, Phone, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Distinct rich color themes per page: 1st Home (Light Beige), 2nd About (Warm Beige/Linen), 3rd Courses (Emerald Green)
  const pageThemeMap = {
    home: 'bg-[#F7F3ED] text-[#25190F] selection:bg-[#B66A28] selection:text-white',
    about: 'bg-[#F7F3ED] text-[#25190F] selection:bg-[#B66A28] selection:text-white',
    courses: 'bg-[#F7F3ED] text-[#25190F] selection:bg-[#B66A28] selection:text-white',
    mentors: 'bg-[#F7F3ED] text-[#25190F] selection:bg-[#B66A28] selection:text-white',
    resources: 'bg-[#F7F3ED] text-[#25190F] selection:bg-[#B66A28] selection:text-white',
    contact: 'bg-[#F7F3ED] text-[#172033] selection:bg-[#B66A28] selection:text-white',
    register: 'bg-[#F7F3ED] text-[#25190F] selection:bg-[#B66A28] selection:text-white',
    login: 'bg-[#F7F3ED] text-[#25190F] selection:bg-[#B66A28] selection:text-white'
  };

  return (
    <div className={`min-h-screen ${pageThemeMap[activePage] || pageThemeMap.home} flex flex-col font-['DM_Sans',sans-serif] relative transition-colors duration-300`}>
      {/* Top Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Page Routing */}
      <main className="flex-1">
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'register' && <RegisterPage setActivePage={setActivePage} />}
        {activePage === 'about' && <AboutPage setActivePage={setActivePage} />}
        {activePage === 'courses' && <CoursesPage setActivePage={setActivePage} />}
        {activePage === 'mentors' && <MentorsPage setActivePage={setActivePage} />}
        {activePage === 'resources' && <ResourcesPage setActivePage={setActivePage} />}
        {activePage === 'contact' && <ContactPage setActivePage={setActivePage} />}
        {activePage === 'login' && <LoginPage setActivePage={setActivePage} />}
      </main>

      {/* Global Footer */}
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
