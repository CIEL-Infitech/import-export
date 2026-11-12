import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course Enrollment Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone & WhatsApp",
      primary: "+1 (800) 542-8920",
      secondary: "+44 20 7946 0921 (UK & EU)"
    },
    {
      icon: Mail,
      label: "Official Email",
      primary: "admissions@tradecraftacademy.com",
      secondary: "support@tradecraftacademy.com"
    },
    {
      icon: MapPin,
      label: "Trade Headquarters",
      primary: "450 Lexington Avenue, 14th Floor",
      secondary: "New York, NY 10017, USA"
    },
    {
      icon: Clock,
      label: "Counseling Hours",
      primary: "Mon – Fri: 08:00 – 19:00 EST",
      secondary: "Saturday: 09:00 – 15:00 EST"
    },
    {
      icon: ShieldCheck,
      label: "Security & Response",
      primary: "256-Bit SSL Encrypted Learning Portal",
      secondary: "Response guaranteed within 4 business hours"
    }
  ];

  return (
    <div className="bg-[#F7F3ED] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#F3EBDD] px-3.5 py-1.5 rounded-full border border-[#E5D8C7]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#25190F] tracking-tight font-['Space_Grotesk'] mt-3.5">
            Contact Us & Student Support
          </h1>
          <p className="mt-3.5 text-base sm:text-lg text-[#786657] leading-relaxed">
            Have questions regarding our import-export training programmes, cohort dates, or trade advisory? Connect directly with our team.
          </p>
        </div>

        {/* Two-Column Grid: Perfectly balanced and aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card: #E8E1D5 */}
          <div className="lg:col-span-6 flex">
            <div className="w-full bg-[#E8E1D5] border border-[#d6ccbe] rounded-3xl p-7 sm:p-9 lg:p-10 shadow-sm flex flex-col justify-between space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#dfd6c8] px-3.5 py-1 rounded-full border border-[#cfc3b2]">
                  Global Advisory Centre
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight font-['Space_Grotesk'] mt-2.5">
                  Official Advisory Offices
                </h2>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mt-1">
                  Our trade counselors and specialists are available Mon – Sat to review your trade goals.
                </p>
              </div>

              {/* 5 Perfectly Aligned Detail Items */}
              <div className="space-y-3.5 flex-1 flex flex-col justify-between pt-1">
                {contactDetails.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-4 sm:p-4.5 rounded-2xl bg-[#dfd6c8]/70 border border-[#cbbeab] flex items-center gap-4 shadow-xs hover:bg-[#dfd6c8] transition-all"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#faefe4] text-[#B66A28] border border-[#ecd5c0] flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="w-5 h-5 text-[#B66A28]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] block">
                          {item.label}
                        </span>
                        <p className="text-sm sm:text-base text-[#172033] font-bold mt-0.5 truncate sm:break-normal">
                          {item.primary}
                        </p>
                        <p className="text-xs text-[#475569] mt-0.5">
                          {item.secondary}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Direct Send an Enquiry Form Column: #FFFFFF */}
          <div className="lg:col-span-6 flex" id="enquiry-form">
            <div className="w-full bg-[#FFFFFF] border border-[#e2dacf] rounded-3xl p-7 sm:p-9 lg:p-10 shadow-sm flex flex-col justify-between space-y-6">
              
              {!submitted ? (
                <div className="flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B66A28] bg-[#fdf5eb] px-3.5 py-1 rounded-full border border-[#f5dfc8]">
                      Trade Advisory Enquiry
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight font-['Space_Grotesk'] mt-2.5">
                      Send an Enquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                      Please provide your query below and our senior counselors will respond within 4 business hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 pt-1 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#fcfaf7] border border-[#dfd7cc] rounded-xl px-4 py-2.5 text-sm text-[#172033] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#fcfaf7] border border-[#dfd7cc] rounded-xl px-4 py-2.5 text-sm text-[#172033] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[#fcfaf7] border border-[#dfd7cc] rounded-xl px-4 py-2.5 text-sm text-[#172033] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                            Subject
                          </label>
                          <select
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full bg-[#fcfaf7] border border-[#dfd7cc] rounded-xl px-4 py-2.5 text-sm text-[#172033] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors"
                          >
                            <option value="Course Enrollment Enquiry">Course Enrollment Enquiry</option>
                            <option value="Syllabus & Timings">Syllabus & Batch Timings</option>
                            <option value="1-on-1 Mentorship Request">1-on-1 Mentorship Request</option>
                            <option value="Corporate / Team Training">Corporate / Team Training</option>
                            <option value="Payment & Bank LC Assistance">Payment & Bank LC Assistance</option>
                            <option value="General Question">General Question</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                          Message / Question *
                        </label>
                        <textarea
                          rows="4"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-[#fcfaf7] border border-[#dfd7cc] rounded-xl px-4 py-2.5 text-sm text-[#172033] focus:bg-white focus:outline-none focus:border-[#B66A28] focus:ring-2 focus:ring-[#B66A28]/15 transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#40291B] hover:bg-[#2b1b12] text-white font-bold text-sm shadow-md shadow-[#40291B]/20 flex items-center justify-center gap-2 transition-all cursor-pointer font-['DM_Sans']"
                      >
                        <Send className="w-4 h-4 text-[#B66A28]" />
                        <span>Submit Enquiry</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12 space-y-4 my-auto">
                  <div className="w-16 h-16 rounded-2xl bg-[#faefe4] text-[#B66A28] border border-[#ecd5c0] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8 text-[#B66A28]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#172033] font-['Space_Grotesk'] tracking-tight">
                    Enquiry Received!
                  </h3>
                  <p className="text-[#475569] text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry regarding <em>"{formData.subject}"</em> has been received. Our trade desk will respond to <strong>{formData.email}</strong> within 4 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: 'Course Enrollment Enquiry', message: '' });
                      }}
                      className="px-6 py-3 rounded-xl bg-[#40291B] hover:bg-[#2b1b12] text-white font-bold text-xs shadow-md transition-all cursor-pointer font-['DM_Sans']"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
