import React, { useState } from 'react';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenVideo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenVideo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; path: PageRoute }[] = [
    { label: 'Home', path: 'home' },
    { label: 'Featured Stories', path: 'featured-stories' },
    { label: 'About', path: 'about' },
    { label: 'Impact & Stats', path: 'impact-stats' },
    { label: 'Press & Media', path: 'press-media' },
    { label: 'Work With Us', path: 'work-with-us' },
    { label: 'Contact', path: 'contact' },
  ];

  const handleNavClick = (path: PageRoute) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcf9f8]/90 backdrop-blur-md border-b border-[#dfc0b7]/50 transition-all">
      <div className="h-20 max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          {/* Authentic Keep It Real Vector Mark */}
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
          <span className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b] tracking-tight group-hover:text-[#b3401e] transition-colors">
            Keep It Real
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentPage === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`font-['Inter'] text-sm tracking-wide transition-all cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-[#b3401e] font-semibold'
                    : 'text-[#58423b] hover:text-[#b3401e] font-normal'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b3401e] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Watch on YouTube Action */}
          <button
            onClick={() => onOpenVideo?.()}
            className="inline-flex items-center gap-1.5 bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-[0_1px_8px_rgba(0,0,0,0.06)] active:scale-[0.98] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
            <span className="hidden sm:inline">Watch on YouTube</span>
            <span className="sm:hidden">Watch</span>
          </button>

          {/* User badge */}
          <div
            title="850K+ Community Member"
            className="w-8 h-8 rounded-full bg-[#922906] flex items-center justify-center text-white shrink-0 cursor-default shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>

          {/* Mobile Menu Button (Tablets and Smartphones) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#1c1b1b] hover:bg-[#f0eded] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Responsive for Mobile & Tablets) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fcf9f8] border-b border-[#dfc0b7] px-6 py-5 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center justify-between text-left py-2.5 px-3 rounded-lg font-['Inter'] text-sm transition-colors ${
                    isActive
                      ? 'bg-[#eee0d9] text-[#b3401e] font-semibold'
                      : 'text-[#58423b] hover:bg-[#f0eded]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="material-symbols-outlined text-[16px] text-[#b3401e]">
                      arrow_forward
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <div className="pt-3 border-t border-[#dfc0b7]/50 flex items-center justify-between text-xs text-[#665c57]">
            <span>Field Dispatch • 850K+ Subscribers</span>
            <span className="text-[#b3401e] font-medium">Pan-India Cinema</span>
          </div>
        </div>
      )}
    </header>
  );
};
