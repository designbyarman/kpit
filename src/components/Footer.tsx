import React, { useState } from 'react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const navLinks: { label: string; path: PageRoute }[] = [
    { label: 'Home', path: 'home' },
    { label: 'Featured Stories', path: 'featured-stories' },
    { label: 'About & Mission', path: 'about' },
    { label: 'Impact & Stats', path: 'impact-stats' },
    { label: 'Press & Media', path: 'press-media' },
    { label: 'Work With Us', path: 'work-with-us' },
    { label: 'Contact', path: 'contact' },
  ];

  return (
    <footer className="w-full bg-[#eee0d9]/60 border-t border-[#dfc0b7]/60 py-16">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info & Mission Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
                  <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
                    <circle cx="18" cy="18" r="7" fill="#B3401E" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      stroke="#B3401E"
                      strokeWidth="1.5"
                      strokeOpacity="0.4"
                      strokeDasharray="3 3"
                    />
                  </svg>
                </div>
                <span className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b]">
                  Keep It Real
                </span>
              </div>
              <p className="font-['Inter'] text-sm md:text-base text-[#58423b] leading-relaxed max-w-md">
                Keep It Real captures untold stories of courage, resilience, and humanity across
                India. Real people, authentic voices, no scripts.
              </p>
              <div className="pt-2">
                <span className="inline-block font-['Inter'] text-xs font-semibold uppercase tracking-wider text-[#b3401e] bg-[#eae7e7] px-3 py-1 rounded">
                  Independent Documentary Archive
                </span>
              </div>
            </div>
            <div className="pt-8 space-y-1">
              <p className="font-['Inter'] text-xs text-[#665c57]">
                © 2024 Keep It Real Foundation. All rights reserved.
              </p>
              <p className="font-['Inter'] text-[11px] uppercase tracking-wider text-[#665c57]">
                Non-profit documentary pledge • Unbiased human chronicles
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#1c1b1b] mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left font-['Inter'] text-sm text-[#58423b] hover:text-[#b3401e] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Community & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#1c1b1b] mb-4">
                Community &amp; Connect
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-[#58423b] text-sm">
                  <span className="material-symbols-outlined text-[20px] text-[#b3401e]">
                    mail
                  </span>
                  <a
                    href="mailto:stories@keepitreal.in"
                    className="hover:text-[#b3401e] transition-colors"
                  >
                    stories@keepitreal.in
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-[#58423b] text-sm">
                  <span className="material-symbols-outlined text-[20px] text-[#b3401e]">
                    smart_display
                  </span>
                  <span>YouTube • 850K+ subscribers</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#58423b] text-sm">
                  <span className="material-symbols-outlined text-[20px] text-[#b3401e]">
                    photo_camera
                  </span>
                  <span>Instagram @keepitrealstories</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#dfc0b7]/40">
              <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b] mb-1">
                Join 45,000+ weekly readers
              </p>
              <p className="font-['Inter'] text-xs text-[#58423b] mb-3 leading-relaxed">
                Receive intimate field dispatches and documentary releases directly to your inbox.
              </p>
              {subscribed ? (
                <div className="p-3 bg-[#ffffff] border border-[#b3401e] rounded text-xs text-[#922906] font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Welcome to The Dispatches. You are now subscribed.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-white border border-[#dfc0b7] px-4 py-2.5 rounded text-sm text-[#1c1b1b] placeholder:text-[#665c57] focus:outline-none focus:border-[#b3401e]"
                  />
                  <button
                    type="submit"
                    className="bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-5 py-2.5 rounded transition-colors whitespace-nowrap cursor-pointer shadow-sm active:scale-95"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
