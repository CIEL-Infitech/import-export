import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  ChevronDown,
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export default function RegisterPage({ setActivePage }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    location: '',
    currentOccupation: '',
    selectedCourse: 'Import-Export Master Blueprint: Zero to First Container'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedStudentId, setGeneratedStudentId] = useState('');

  const validate = () => {
    const err = {};
    if (!formData.fullName.trim()) err.fullName = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) err.email = 'Valid Email Address is required';
    if (!formData.whatsappNumber.trim()) err.whatsappNumber = 'WhatsApp Mobile Number is required';
    if (!formData.location.trim()) err.location = 'Location (City / Country) is required';
    if (!formData.currentOccupation.trim()) err.currentOccupation = 'Current Occupation is required';
    if (!formData.selectedCourse.trim()) err.selectedCourse = 'Please select a course';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const studentId = `TCA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setGeneratedStudentId(studentId);
      
      const studentRecord = {
        fullName: formData.fullName,
        email: formData.email,
        whatsappNumber: formData.whatsappNumber,
        location: formData.location,
        occupation: formData.currentOccupation,
        selectedCourse: formData.selectedCourse,
        studentId: studentId,
        enrolledDate: new Date().toLocaleDateString()
      };
      
      try {
        localStorage.setItem('tradecraft_student', JSON.stringify(studentRecord));
      } catch (err) {
        console.error('Local storage save error', err);
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F7F3ED] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {!isSubmitted ? (
          <div className="bg-[#FFFFFF] border border-[#E5D8C7] rounded-3xl p-6 sm:p-9 shadow-sm">
            
            {/* Strong Professional Header */}
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#F3EBDD] px-3.5 py-1 rounded-full border border-[#E5D8C7] shadow-xs">
                Official Admission
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk'] mt-2.5 leading-tight">
                Trade Enrollment Application
              </h1>
              <p className="mt-1.5 text-[#786657] text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                Complete the official registration below to secure your seat in the upcoming international trade cohort.
              </p>
            </div>

            {/* Compact Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* 1. Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#786657] mb-1 font-['DM_Sans']">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#9c8270] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: null });
                    }}
                    className={`w-full bg-[#fcfaf7] border ${errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#dfd7cc]'} rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#25190F] placeholder-[#a89b8d] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors`}
                  />
                </div>
                {errors.fullName && <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* 2. Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#786657] mb-1 font-['DM_Sans']">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#9c8270] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={`w-full bg-[#fcfaf7] border ${errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#dfd7cc]'} rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#25190F] placeholder-[#a89b8d] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors`}
                  />
                </div>
                {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* 3. WhatsApp Mobile Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#786657] mb-1 font-['DM_Sans']">
                  WhatsApp Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#9c8270] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    placeholder="Enter your WhatsApp number"
                    value={formData.whatsappNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, whatsappNumber: e.target.value });
                      if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: null });
                    }}
                    className={`w-full bg-[#fcfaf7] border ${errors.whatsappNumber ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#dfd7cc]'} rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#25190F] placeholder-[#a89b8d] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors`}
                  />
                </div>
                {errors.whatsappNumber && <p className="text-rose-600 text-xs mt-1">{errors.whatsappNumber}</p>}
              </div>

              {/* 4. Location (City / Country) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#786657] mb-1 font-['DM_Sans']">
                  Location (City / Country) *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#9c8270] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your city and country"
                    value={formData.location}
                    onChange={(e) => {
                      setFormData({ ...formData, location: e.target.value });
                      if (errors.location) setErrors({ ...errors, location: null });
                    }}
                    className={`w-full bg-[#fcfaf7] border ${errors.location ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#dfd7cc]'} rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#25190F] placeholder-[#a89b8d] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors`}
                  />
                </div>
                {errors.location && <p className="text-rose-600 text-xs mt-1">{errors.location}</p>}
              </div>

              {/* 5. Current Occupation */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#786657] mb-1 font-['DM_Sans']">
                  Current Occupation *
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-[#9c8270] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your current occupation"
                    value={formData.currentOccupation}
                    onChange={(e) => {
                      setFormData({ ...formData, currentOccupation: e.target.value });
                      if (errors.currentOccupation) setErrors({ ...errors, currentOccupation: null });
                    }}
                    className={`w-full bg-[#fcfaf7] border ${errors.currentOccupation ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#dfd7cc]'} rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#25190F] placeholder-[#a89b8d] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors`}
                  />
                </div>
                {errors.currentOccupation && <p className="text-rose-600 text-xs mt-1">{errors.currentOccupation}</p>}
              </div>

              {/* 6. Course Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#786657] mb-1 font-['DM_Sans']">
                  Import & Export Course Selection *
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-[#9c8270] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    required
                    value={formData.selectedCourse}
                    onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                    className="w-full bg-[#fcfaf7] border border-[#dfd7cc] rounded-xl pl-10 pr-9 py-2.5 text-sm text-[#25190F] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors cursor-pointer appearance-none font-['DM_Sans']"
                  >
                    <option value="Import-Export Master Blueprint: Zero to First Container">
                      Import-Export Master Blueprint: Zero to First Container (Flagship)
                    </option>
                    <option value="Letters of Credit & International Trade Finance">
                      Letters of Credit (LC) & International Trade Finance
                    </option>
                    <option value="Ocean Freight Logistics & Customs Clearance">
                      Ocean Freight Logistics, Shipping & Customs Clearance
                    </option>
                    <option value="Complete All-In-One Trade Masterclass (All Programmes)">
                      Complete All-In-One Trade Masterclass (All Programmes)
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#9c8270] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Submit Button with Refined Hover */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group w-full py-3.5 rounded-xl bg-[#40291B] hover:bg-[#2b1b12] active:bg-[#1f130c] text-[#FAF7F1] font-bold text-sm shadow-md shadow-[#40291B]/20 hover:shadow-lg hover:shadow-[#40291B]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-['DM_Sans']"
                >
                  <span>Complete Registration</span>
                  <ArrowRight className="w-4 h-4 text-[#B66A28] group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <div className="mt-3 text-center text-[11px] text-[#786657] flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B66A28]" />
                  <span>Your details are secure. Zero spam. We protect your privacy.</span>
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="bg-[#FFFFFF] border border-[#E5D8C7] rounded-3xl p-7 sm:p-10 text-center space-y-5 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-[#faefe4] text-[#B66A28] border border-[#ecd5c0] flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-[#B66A28]" />
            </div>

            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F3EBDD] text-[#B66A28] border border-[#E5D8C7] mb-2">
                Registration Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk']">
                Welcome to TradeCraft Academy, {formData.fullName}!
              </h2>
              <p className="text-xs sm:text-sm text-[#786657] mt-1.5 max-w-md mx-auto leading-relaxed">
                Your enrollment has been successfully recorded. Our admissions counselor will contact you via WhatsApp with your onboarding pack.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F1] border border-[#E5D8C7] max-w-md mx-auto text-left space-y-2.5 text-xs shadow-xs">
              <div className="flex justify-between pb-2 border-b border-[#E5D8C7]">
                <span className="text-[#786657] font-bold uppercase tracking-wider">Student ID:</span>
                <span className="font-mono text-[#B66A28] font-bold text-sm">{generatedStudentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786657]">Full Name:</span>
                <span className="text-[#25190F] font-bold">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786657]">Email Address:</span>
                <span className="text-[#25190F] font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786657]">WhatsApp Number:</span>
                <span className="text-[#25190F] font-medium">{formData.whatsappNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786657]">Location:</span>
                <span className="text-[#25190F] font-medium">{formData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786657]">Occupation:</span>
                <span className="text-[#25190F] font-medium">{formData.currentOccupation}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#E5D8C7]">
                <span className="text-[#786657]">Selected Programme:</span>
                <span className="text-[#B66A28] font-bold text-right ml-2">{formData.selectedCourse}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setActivePage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#40291B] hover:bg-[#2b1b12] text-[#FAF7F1] font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer font-['DM_Sans']"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
              
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    whatsappNumber: '',
                    location: '',
                    currentOccupation: '',
                    selectedCourse: 'Import-Export Master Blueprint: Zero to First Container'
                  });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F3EBDD] hover:bg-[#eae0cf] text-[#25190F] font-semibold text-xs border border-[#E5D8C7] transition-colors cursor-pointer font-['DM_Sans']"
              >
                Register Another Student
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
