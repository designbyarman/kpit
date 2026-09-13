import React, { useState } from 'react';
import { Story } from '../types';

interface VideoModalProps {
  story?: Story | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ story, isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);
  const [donated, setDonated] = useState(false);

  if (!isOpen) return null;

  const defaultTitle = story?.title || 'The Clay Guardian of Chambal: 40 Years Along the River';
  const defaultEpisode = story?.episode || 'Episode 41 • Madhya Pradesh';
  const defaultImage =
    story?.imageUrl ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDObhiiinIP7Ghvb2ifc1TfEpUDejkijcMVRAUDjMi5jOIOhl25GjHNC7sY0Q3KNizoE_ZEdm1QCFVeOZIFYS39GGPthwmExD2ePiDnGbmlUcf4RKjFFgcCQL9F5tMDIdrH11DFQ-D-tmXNbfZVmJD_CwYeHJh-Gw8RIIHKZ7cHJvygNmVLm9Bo2bxWq96Gd-sUv_8M7VElpqKrvpKf7o3LahOMkQvQPyxp9plT14HPxhIG2_mVFJOnzA';
  const defaultDesc =
    story?.description ||
    'In the once-feared ravines, one elder hand-crafts sacred terracotta deities while quietly reviving ancient subterranean check-dams. Over four decades, Mangal Ram has reversed seasonal desertification across three districts without asking the government for a single rupee.';

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#1c1b1b] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-[#252424] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#b3401e] animate-pulse" />
            <span className="font-['Inter'] text-xs font-semibold uppercase tracking-wider text-[#ffded6]">
              Keep It Real Cinema • 4K DCI Field Master
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close documentary player"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Video Player Canvas */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={defaultImage}
            alt={defaultTitle}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

          {/* Playing Simulation Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#b3401e]/90 hover:bg-[#b3401e] text-white flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[36px] sm:text-[44px]">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
          </div>

          {/* Player Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent space-y-2">
            {/* Timeline scrubber bar */}
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
              <div className="bg-[#b3401e] h-full w-[42%] rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-['Inter'] text-white/80">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white flex items-center"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <span>11:45 / {story?.duration || '28:14'}</span>
                <span className="hidden sm:inline text-white/40">•</span>
                <span className="hidden sm:inline bg-white/10 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider text-white">
                  Hindi (Original) • English CC
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="hover:text-white flex items-center gap-1 cursor-pointer"
                  title="Copy link"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {copied ? 'check' : 'share'}
                  </span>
                  <span className="hidden sm:inline">{copied ? 'Link Copied' : 'Share'}</span>
                </button>
                <button
                  onClick={() => window.open('https://youtube.com', '_blank')}
                  className="hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  <span className="hidden sm:inline">YouTube</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Documentary Details & Protagonist Care */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 bg-[#1c1b1b]">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ffded6] uppercase tracking-wider">
                <span>{defaultEpisode}</span>
                <span>•</span>
                <span>Director: {story?.director || 'Kabir Varma'}</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-white">
                {defaultTitle}
              </h3>
            </div>

            {/* Protagonist Fund CTA */}
            <div className="shrink-0 bg-[#2b2a2a] p-3 rounded-xl border border-white/10 flex sm:flex-col items-center justify-between sm:justify-center gap-2 min-w-[180px]">
              <div className="text-left sm:text-center">
                <span className="text-[10px] uppercase font-['Inter'] tracking-wider text-[#ffded6] block">
                  Direct Subject Support
                </span>
                <span className="text-sm font-bold text-white font-['Inter']">
                  {story?.fundRaised || '₹12.4 Lakh Raised'}
                </span>
              </div>
              <button
                onClick={() => setDonated(true)}
                className="bg-[#b3401e] hover:bg-[#922906] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer shadow-sm whitespace-nowrap active:scale-95"
              >
                {donated ? '✓ Contribution Logged' : 'Contribute Directly'}
              </button>
            </div>
          </div>

          <p className="font-['Inter'] text-sm text-[#e5e2e1] leading-relaxed">
            {defaultDesc}
          </p>

          <div className="p-3.5 bg-white/5 rounded-lg border border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#dcd9d9]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#ffded6]">
                verified
              </span>
              <span>100% of viewer contributions go directly to the protagonist without administrative deductions.</span>
            </div>
            <span className="text-[11px] text-[#ffb5a0] font-medium">Audited Quarterly</span>
          </div>
        </div>
      </div>
    </div>
  );
};
