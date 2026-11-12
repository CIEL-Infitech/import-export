import React, { useState } from 'react';
import { COURSES_CATALOG } from '../data/tradeData';
import { BookOpen, Star, Clock, Users, CheckCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function CourseCatalog({ onEnroll }) {
  const [expandedCourseId, setExpandedCourseId] = useState('bootcamp');

  const toggleExpand = (id) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <section id="courses" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trade-500/10 border border-trade-500/30 text-trade-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Masterclasses & Training Programs
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            From complete beginner blueprints to advanced trade finance and container logistics certifications.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COURSES_CATALOG.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            return (
              <div
                key={course.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl flex flex-col justify-between overflow-hidden shadow-xl transition-all"
              >
                {/* Course Header Banner */}
                <div className="p-6 sm:p-7 border-b border-slate-800/80">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-trade-500/20 text-trade-300 border border-trade-500/30">
                      {course.badge}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-500 font-normal">({course.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] leading-snug">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-400 mt-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      {course.students}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm mt-4 leading-relaxed">
                    {course.overview}
                  </p>
                </div>

                {/* Course Modules Accordion */}
                <div className="p-6 sm:p-7 bg-slate-950/40 flex-1 flex flex-col justify-between">
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleExpand(course.id)}
                      className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-trade-400 hover:text-trade-300 mb-4"
                    >
                      <span>Syllabus Breakdown ({course.modules.length} Modules)</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="space-y-4 mb-6">
                        {course.modules.map((mod, idx) => (
                          <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                            <h4 className="text-xs font-bold text-slate-200 mb-2">
                              {mod.title}
                            </h4>
                            <ul className="space-y-1">
                              {mod.lessons.map((lesson, lIdx) => (
                                <li key={lIdx} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                                  <span className="text-trade-400">•</span>
                                  <span>{lesson}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Pricing and Enroll Button */}
                  <div className="pt-4 border-t border-slate-800/80 mt-auto">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-extrabold text-white font-['Space_Grotesk']">
                        {course.price}
                      </span>
                      <span className="text-sm text-slate-500 line-through">
                        {course.originalPrice}
                      </span>
                      <span className="text-xs text-emerald-400 font-bold ml-auto">
                        Lifetime Access
                      </span>
                    </div>

                    <button
                      onClick={() => onEnroll(course.title)}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-trade-600 to-trade-500 hover:from-trade-500 hover:to-trade-400 text-white font-bold text-sm shadow-lg shadow-trade-600/30 hover:-translate-y-0.5 transition-all text-center"
                    >
                      Enroll in Masterclass
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

