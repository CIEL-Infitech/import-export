import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LoginPage({ setActivePage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password');
      return;
    }

    // Check if user was registered in localStorage
    try {
      const stored = localStorage.getItem('tradecraft_student');
      if (stored) {
        const student = JSON.parse(stored);
        if (student.email.toLowerCase() === email.trim().toLowerCase()) {
          setLoggedInUser(student);
          setIsLoggedIn(true);
          return;
        }
      }
    } catch (err) {
      console.error(err);
    }

    // Fallback simulated login
    setLoggedInUser({
      fullName: email.split('@')[0],
      email: email,
      studentId: 'TCA-2026-DEMO',
      learningInterest: 'Import-Export Master Blueprint'
    });
    setIsLoggedIn(true);
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="bg-[#fffdf9] border border-[#dfd3c3] rounded-3xl p-8 sm:p-10 shadow-sm">
        
        {!isLoggedIn ? (
          <div>
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#f4ece0] text-[#784f29] border border-[#dfd3c3] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#23180f] tracking-tight font-['Space_Grotesk']">
                Student Portal Login
              </h1>
              <p className="text-xs text-[#6e5645] mt-1">
                Access your course recordings, contracts & mentorship Q&A
              </p>
            </div>

            {error && (
              <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2c2016] mb-1.5">
                  Email Address or Student ID
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8c7462] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#fbf7f1] border border-[#dfd3c3] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#23180f] placeholder-[#a69282] focus:bg-white focus:outline-none focus:border-[#8c5a35] focus:ring-2 focus:ring-[#8c5a35]/15"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-[#2c2016]">
                    Password
                  </label>
                  <a href="#" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your registered email.'); }} className="text-[11px] text-[#784f29] hover:underline font-medium">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#8c7462] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#fbf7f1] border border-[#dfd3c3] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#23180f] placeholder-[#a69282] focus:bg-white focus:outline-none focus:border-[#8c5a35] focus:ring-2 focus:ring-[#8c5a35]/15"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded bg-[#fbf7f1] border-[#dfd3c3] text-[#784f29] focus:ring-[#784f29]"
                />
                <label htmlFor="remember" className="text-xs text-[#5a4637] cursor-pointer">
                  Remember my session for 30 days
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#3b271a] hover:bg-[#281a10] text-[#fdfbf7] font-bold text-sm shadow-md shadow-[#3b271a]/20 flex items-center justify-center gap-2 transition-all cursor-pointer font-['DM_Sans']"
              >
                <span>Sign In to Student Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#dfd3c3] text-center">
              <p className="text-xs text-[#5a4637]">
                Don't have a student account yet?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setActivePage('register');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#784f29] font-bold hover:underline cursor-pointer"
                >
                  Register Now
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#23180f] tracking-tight font-['Space_Grotesk']">
              Welcome Back, {loggedInUser?.fullName}!
            </h2>
            <p className="text-xs text-[#5a4637] max-w-xs mx-auto">
              Logged in successfully as <strong>{loggedInUser?.email}</strong>. Welcome to your Student Learning Dashboard.
            </p>
            <div className="p-4 rounded-xl bg-[#f7f1e7] border border-[#dfd3c3] text-left text-xs space-y-2">
              <div className="text-[#6e5645]">Student ID: <span className="text-[#23180f] font-bold font-mono">{loggedInUser?.studentId}</span></div>
              <div className="text-[#6e5645]">Active Course: <span className="text-[#23180f] font-semibold">{loggedInUser?.learningInterest || 'Import-Export Master Blueprint'}</span></div>
              <div className="text-[#6e5645]">Next Live Clinic: <span className="text-emerald-700 font-semibold">Saturday at 10:00 AM EST</span></div>
              <div className="text-[#6e5645]">Vault Access: <span className="text-[#784f29] font-semibold">50+ Legal Templates Ready</span></div>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-5 py-2 rounded-lg bg-[#efe7da] hover:bg-[#e6dccb] text-[#2c2016] font-semibold text-xs border border-[#d6c7b3] cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
