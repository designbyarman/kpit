import React, { useState } from 'react';
import { PageRoute } from '../../types';

interface PressMediaScreenProps {
  onNavigate: (page: PageRoute) => void;
}

export const PressMediaScreen: React.FC<PressMediaScreenProps> = ({ onNavigate }) => {
  const [downloadingKit, setDownloadingKit] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [interviewModal, setInterviewModal] = useState(false);
  const [interviewEmail, setInterviewEmail] = useState('');
  const [interviewPublication, setInterviewPublication] = useState('');
  const [interviewSent, setInterviewSent] = useState(false);

  const handleDownloadKit = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadingKit(true);
    setTimeout(() => {
      setDownloadingKit(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    }, 1200);
  };

  const handleInterviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInterviewSent(true);
    setTimeout(() => {
      setInterviewSent(false);
      setInterviewModal(false);
      setInterviewEmail('');
      setInterviewPublication('');
    }, 3000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: Editorial Hero Header */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#eee0d9] px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#b3401e] animate-pulse" />
                <span className="font-['Inter'] text-xs uppercase font-semibold text-[#6c625d]">
                  Newsroom &amp; Media Archive
                </span>
              </div>
              <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1b1b] tracking-tight">
                Press, Dispatches &amp; Media Resources
              </h1>
              <p className="font-['Inter'] text-base sm:text-lg text-[#58423b] max-w-2xl leading-relaxed">
                Covering the stories that mainstream television overlooks. Resources, brand kits, and
                newsroom dispatches for journalists and cultural editors.
              </p>
            </div>

            {/* Live Signal Box */}
            <div className="flex flex-col gap-1.5 p-5 bg-[#f6f3f2] rounded-2xl border border-[#dfc0b7]/40 min-w-[260px]">
              <div className="flex items-center gap-2 text-[#58423b]">
                <span className="material-symbols-outlined text-[18px] text-[#b3401e]">
                  verified
                </span>
                <span className="font-['Inter'] text-xs uppercase font-bold tracking-wider">
                  Independent Press Desk
                </span>
              </div>
              <p className="font-['Inter'] text-xs text-[#665c57]">Updated June 2024 • New Delhi</p>
              <div className="pt-1 flex items-center gap-1.5 text-[#b3401e] font-['Inter'] text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>Response guarantee: &lt; 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: "As Seen In" Publication Strip */}
      <section className="w-full bg-[#f6f3f2] py-12 border-y border-[#dfc0b7]/40">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <span className="font-['Inter'] text-xs uppercase text-[#665c57] tracking-widest font-semibold">
              Independent Coverage &amp; Institutional Features
            </span>
            <div className="flex items-center gap-2 text-[#b3401e] font-['Inter'] text-xs font-semibold">
              <span>Global Citation Rate • 94% Ethics Clearance</span>
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            <div className="h-16 bg-white flex items-center justify-center px-4 rounded-xl shadow-sm border border-[#dfc0b7]/40">
              <span className="font-['Playfair_Display'] text-base font-bold tracking-tighter text-[#1c1b1b] italic">
                THE HINDU
              </span>
            </div>
            <div className="h-16 bg-white flex items-center justify-center px-4 rounded-xl shadow-sm border border-[#dfc0b7]/40">
              <div className="flex items-center gap-1 font-['Inter'] text-xs font-bold text-[#1c1b1b] tracking-tight">
                <span className="bg-[#1c1b1b] text-white px-1.5 py-0.5 rounded">B</span>
                <span className="bg-[#1c1b1b] text-white px-1.5 py-0.5 rounded">B</span>
                <span className="bg-[#1c1b1b] text-white px-1.5 py-0.5 rounded">C</span>
                <span className="text-[#b3401e] font-semibold pl-0.5">Hindi</span>
              </div>
            </div>
            <div className="h-16 bg-white flex items-center justify-center px-4 rounded-xl shadow-sm border border-[#dfc0b7]/40">
              <span className="font-['Inter'] text-xs font-bold tracking-wide text-[#1c1b1b] uppercase text-center leading-none">
                The Indian
                <br />
                <span className="font-extrabold tracking-widest text-sm">EXPRESS</span>
              </span>
            </div>
            <div className="h-16 bg-white flex items-center justify-center px-4 rounded-xl shadow-sm border border-[#dfc0b7]/40">
              <span className="font-['Playfair_Display'] text-base text-[#b3401e] font-bold tracking-tight">
                Scroll<span className="text-[#1c1b1b]">.in</span>
              </span>
            </div>
            <div className="h-16 bg-white flex items-center justify-center px-4 rounded-xl shadow-sm border border-[#dfc0b7]/40">
              <span className="font-['Inter'] text-xs uppercase text-[#1c1b1b] font-bold tracking-tight text-center leading-tight">
                The Better
                <br />
                <span className="text-[#b3401e]">INDIA</span>
              </span>
            </div>
            <div className="h-16 bg-white flex items-center justify-center px-4 rounded-xl shadow-sm border border-[#dfc0b7]/40">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-5 bg-amber-500 inline-block rounded-xs" />
                <span className="font-['Inter'] text-xs uppercase text-[#1c1b1b] font-bold tracking-wider">
                  NAT GEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Selected Press Coverage Grid */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-widest">
                Selected Press Coverage
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mt-1">
                Critical Inquiries &amp; Investigative Profiles
              </h2>
            </div>
            <p className="font-['Inter'] text-sm text-[#58423b] max-w-md leading-relaxed">
              How prominent publications review our verified storytelling methodology and grassroots
              documentary model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-[#eee0d9]/40 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#dfc0b7]/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Playfair_Display'] text-lg text-[#1c1b1b] italic font-bold">
                    The Hindu
                  </span>
                  <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57] bg-white px-2.5 py-1 rounded">
                    Feature Profile • Film Culture
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b] hover:text-[#b3401e] transition-colors leading-snug">
                  “How Keep It Real is redefining grassroots documentary filmmaking in regional India.”
                </h3>
                <p className="font-['Inter'] text-sm text-[#58423b] leading-relaxed">
                  An in-depth study of Kabir Varma’s on-ground field protocol, bypassing sensational
                  YouTube algorithms in favor of unhurried, multi-week human chronicling across the
                  Chambal valley and Sundarbans.
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between border-t border-[#dfc0b7]/30 mt-4">
                <span className="font-['Inter'] text-xs text-[#665c57]">
                  Published April 14, 2024 • By Shoma Chaudhury
                </span>
                <span className="inline-flex items-center gap-1 font-['Inter'] text-xs font-semibold text-[#b3401e]">
                  <span>Read Article</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </span>
              </div>
            </article>

            <article className="bg-[#eee0d9]/40 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#dfc0b7]/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Inter'] text-sm font-bold text-[#1c1b1b]">BBC Hindi</span>
                  <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57] bg-white px-2.5 py-1 rounded">
                    Broadcast • Documentary Spotlight
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b] hover:text-[#b3401e] transition-colors leading-snug">
                  “Unsung changemakers find a global voice through Kabir Varma’s quiet lens.”
                </h3>
                <p className="font-['Inter'] text-sm text-[#58423b] leading-relaxed">
                  The BBC highlights how a crew of three filmmakers has turned forgotten local water
                  engineers and tribal teachers into universally revered folk icons without
                  patronizing tropes.
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between border-t border-[#dfc0b7]/30 mt-4">
                <span className="font-['Inter'] text-xs text-[#665c57]">
                  Broadcast March 28, 2024 • Special Dispatch
                </span>
                <span className="inline-flex items-center gap-1 font-['Inter'] text-xs font-semibold text-[#b3401e]">
                  <span>Watch Segment</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </span>
              </div>
            </article>

            <article className="bg-[#eee0d9]/40 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#dfc0b7]/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Inter'] text-sm font-bold text-[#922906]">
                    The Better India
                  </span>
                  <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57] bg-white px-2.5 py-1 rounded">
                    Grassroots Impact • Case Study
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b] hover:text-[#b3401e] transition-colors leading-snug">
                  “The digital storytellers raising crores for rural innovators without sensationalism.”
                </h3>
                <p className="font-['Inter'] text-sm text-[#58423b] leading-relaxed">
                  Analyzing the channel’s crowdfund transparency: ₹4.8 Crores mobilized with 100%
                  direct beneficiary disbursement, independently audited and verified with open
                  ledger entries.
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between border-t border-[#dfc0b7]/30 mt-4">
                <span className="font-['Inter'] text-xs text-[#665c57]">
                  Published February 11, 2024 • By Tanvi Patel
                </span>
                <span className="inline-flex items-center gap-1 font-['Inter'] text-xs font-semibold text-[#b3401e]">
                  <span>Read Case Study</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </span>
              </div>
            </article>

            <article className="bg-[#eee0d9]/40 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#dfc0b7]/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[#1c1b1b]">
                    NatGeo Society
                  </span>
                  <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57] bg-white px-2.5 py-1 rounded">
                    Editorial Review • Global Ethics
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b] hover:text-[#b3401e] transition-colors leading-snug">
                  “An exemplary model of non-extractive human-interest cinema.”
                </h3>
                <p className="font-['Inter'] text-sm text-[#58423b] leading-relaxed">
                  An institutional reflection praising the channel's protocol: providing subjects
                  editorial veto power, collaborative cut previews, and structured intellectual
                  compensation.
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between border-t border-[#dfc0b7]/30 mt-4">
                <span className="font-['Inter'] text-xs text-[#665c57]">
                  Newsletter Edition #412 • January 2024
                </span>
                <span className="inline-flex items-center gap-1 font-['Inter'] text-xs font-semibold text-[#b3401e]">
                  <span>View Archival Note</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 4: Press Kit Download Card */}
      <section className="w-full bg-[#f6f3f2] py-16 px-5 md:px-8 lg:px-12 border-t border-[#dfc0b7]/40">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-[#eee0d9] p-8 sm:p-12 rounded-2xl shadow-md relative overflow-hidden border border-[#dfc0b7]/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-[#b3401e]">
                  <span className="material-symbols-outlined text-[16px]">
                    download_for_offline
                  </span>
                  <span className="font-['Inter'] text-xs uppercase font-bold tracking-wider">
                    Official Media Package • Q2 2024
                  </span>
                </div>
                <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b]">
                  Official Press Kit &amp; Archival Factsheet
                </h2>
                <p className="font-['Inter'] text-base text-[#58423b] max-w-xl leading-relaxed">
                  Clean vector brandmarks, verified biographical data, audited impact ledger, and
                  production-grade 4K unit stills cleared for worldwide print, digital, and
                  broadcast syndication.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleDownloadKit}
                    disabled={downloadingKit}
                    className="bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-7 py-3.5 rounded-lg transition-all shadow-sm active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
                  >
                    {downloadingKit ? (
                      <>
                        <span className="material-symbols-outlined text-[20px] animate-spin">
                          progress_activity
                        </span>
                        <span>Compiling Media Package...</span>
                      </>
                    ) : downloadSuccess ? (
                      <>
                        <span className="material-symbols-outlined text-[20px]">check</span>
                        <span>Package Download Ready!</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        <span>Download Full Press Kit (.ZIP • 28MB)</span>
                      </>
                    )}
                  </button>
                  <span className="font-['Inter'] text-xs text-[#6c625d]">
                    SHA-256 Verified • Cleared under CC BY-ND 4.0
                  </span>
                </div>
              </div>

              {/* Download Specs List */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl shadow-sm space-y-3 flex flex-col justify-center border border-[#dfc0b7]/40">
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b] mb-1">
                  Bundle Inclusions:
                </h3>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-[#f6f3f2] transition-colors">
                  <span className="material-symbols-outlined text-[#b3401e] text-[22px] mt-0.5">
                    palette
                  </span>
                  <div>
                    <p className="font-['Inter'] text-xs font-bold text-[#1c1b1b]">
                      High-res Brand Logos
                    </p>
                    <p className="font-['Inter'] text-xs text-[#58423b]">
                      SVG, EPS vector formats &amp; transparent PNG masters
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-[#f6f3f2] transition-colors">
                  <span className="material-symbols-outlined text-[#b3401e] text-[22px] mt-0.5">
                    badge
                  </span>
                  <div>
                    <p className="font-['Inter'] text-xs font-bold text-[#1c1b1b]">
                      Founder Bio &amp; Headshots
                    </p>
                    <p className="font-['Inter'] text-xs text-[#58423b]">
                      Kabir Varma 300 DPI field portraits with editorial clearance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-[#f6f3f2] transition-colors">
                  <span className="material-symbols-outlined text-[#b3401e] text-[22px] mt-0.5">
                    query_stats
                  </span>
                  <div>
                    <p className="font-['Inter'] text-xs font-bold text-[#1c1b1b]">
                      2024 Impact &amp; Audience Factsheet
                    </p>
                    <p className="font-['Inter'] text-xs text-[#58423b]">
                      1-pager PDF: 850k+ subscribers, 42M minutes watched, donor ledgers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-[#f6f3f2] transition-colors">
                  <span className="material-symbols-outlined text-[#b3401e] text-[22px] mt-0.5">
                    photo_camera
                  </span>
                  <div>
                    <p className="font-['Inter'] text-xs font-bold text-[#1c1b1b]">
                      Still Frames for Publication
                    </p>
                    <p className="font-['Inter'] text-xs text-[#58423b]">
                      32 curated 16:9 documentary production stills with full caption tags
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Critical Endorsements Quotes */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto space-y-10">
          <div className="max-w-2xl">
            <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-widest">
              Critical Endorsements
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mt-1">
              Praise from the Documentary Field
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f6f3f2] p-8 rounded-2xl shadow-sm flex flex-col justify-between relative border border-[#dfc0b7]/40">
              <span className="material-symbols-outlined text-[#b3401e]/20 text-5xl absolute top-6 right-6 select-none">
                format_quote
              </span>
              <p className="font-['Playfair_Display'] text-base italic text-[#1c1b1b] relative z-10 mb-6 leading-relaxed">
                “In an ecosystem dominated by sensational click-traps, Keep It Real treats subjects
                with the tender sacredness of classical non-fiction literature.”
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#dfc0b7]/30">
                <div className="w-10 h-10 rounded-full bg-[#eee0d9] flex items-center justify-center text-[#b3401e] font-['Playfair_Display'] text-base font-bold">
                  AR
                </div>
                <div>
                  <p className="font-['Inter'] text-xs font-bold text-[#1c1b1b]">Ananya Roy</p>
                  <p className="font-['Inter'] text-xs text-[#665c57]">
                    Senior Film Critic, Cinema Journal
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f6f3f2] p-8 rounded-2xl shadow-sm flex flex-col justify-between relative border border-[#dfc0b7]/40">
              <span className="material-symbols-outlined text-[#b3401e]/20 text-5xl absolute top-6 right-6 select-none">
                format_quote
              </span>
              <p className="font-['Playfair_Display'] text-base italic text-[#1c1b1b] relative z-10 mb-6 leading-relaxed">
                “Their camera does not extract grief for applause; it bears witness with quiet
                fidelity. Every release feels like an indelible historical record.”
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#dfc0b7]/30">
                <div className="w-10 h-10 rounded-full bg-[#eee0d9] flex items-center justify-center text-[#b3401e] font-['Playfair_Display'] text-base font-bold">
                  DK
                </div>
                <div>
                  <p className="font-['Inter'] text-xs font-bold text-[#1c1b1b]">Devanshu Kapoor</p>
                  <p className="font-['Inter'] text-xs text-[#665c57]">
                    Curator, South Asia Documentary Forum
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f6f3f2] p-8 rounded-2xl shadow-sm flex flex-col justify-between relative border border-[#dfc0b7]/40">
              <span className="material-symbols-outlined text-[#b3401e]/20 text-5xl absolute top-6 right-6 select-none">
                format_quote
              </span>
              <p className="font-['Playfair_Display'] text-base italic text-[#1c1b1b] relative z-10 mb-6 leading-relaxed">
                “The most transparent crowdfunding mechanism in independent media. They show every
                rupee, every life shifted, and zero self-congratulation.”
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#dfc0b7]/30">
                <div className="w-10 h-10 rounded-full bg-[#eee0d9] flex items-center justify-center text-[#b3401e] font-['Playfair_Display'] text-base font-bold">
                  MN
                </div>
                <div>
                  <p className="font-['Inter'] text-xs font-bold text-[#1c1b1b]">
                    Meera Narayanan
                  </p>
                  <p className="font-['Inter'] text-xs text-[#665c57]">
                    Director of Investigative Ethics, Guild of Editors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Brand Assets Preview Gallery */}
      <section className="w-full bg-[#f6f3f2] py-16 px-5 md:px-8 lg:px-12 border-t border-[#dfc0b7]/40">
        <div className="max-w-[1360px] mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-widest">
                Visual Identity Specs
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mt-1">
                Brand Assets &amp; Editorial Guidelines
              </h2>
            </div>
            <p className="font-['Inter'] text-sm text-[#58423b] max-w-md leading-relaxed">
              Strict visual conventions ensuring authentic representation across print syndication,
              festival programming, and web features.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Asset 1: Brandmark */}
            <div className="lg:col-span-6 bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between border border-[#dfc0b7]/40">
              <div className="space-y-2">
                <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57]">
                  Asset 01 • Official Brandmark Lockup
                </span>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b]">
                  Primary Logo Usage &amp; Clearspace
                </h3>
                <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                  The dotted red sun represents unblinking documentary focus. Maintain a minimum clear
                  space equivalent to the height of the primary uppercase 'K'.
                </p>
              </div>

              <div className="my-8 p-8 bg-[#f6f3f2] rounded-xl flex items-center justify-center border border-[#dfc0b7]/30">
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 36 36" fill="none" className="w-12 h-12">
                    <circle cx="18" cy="18" r="8" fill="#B3401E" />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      stroke="#B3401E"
                      strokeWidth="1.5"
                      strokeOpacity="0.4"
                      strokeDasharray="3 3"
                    />
                  </svg>
                  <span className="font-['Playfair_Display'] text-3xl font-bold text-[#1A1A1A] tracking-tight">
                    Keep It Real
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B3401E] self-start mt-2" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#f0eded]">
                <span className="font-['Inter'] text-xs text-[#665c57]">
                  Min Width: 140px • SVG / PNG / Vector
                </span>
                <button
                  onClick={handleDownloadKit}
                  className="font-['Inter'] text-xs font-semibold text-[#b3401e] hover:text-[#922906] flex items-center gap-1 cursor-pointer"
                >
                  <span>Export Master</span>
                  <span className="material-symbols-outlined text-[16px]">file_download</span>
                </button>
              </div>
            </div>

            {/* Asset 2 & 3: Typography & Colors */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              {/* Typography */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-3 border border-[#dfc0b7]/40">
                <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57]">
                  Asset 02 • Typography Guidelines
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 bg-[#f6f3f2] rounded-xl">
                    <span className="font-['Inter'] text-xs text-[#b3401e] uppercase font-bold block mb-1">
                      Editorial Titles
                    </span>
                    <span className="font-['Playfair_Display'] text-xl text-[#1c1b1b] font-bold block">
                      Playfair Display
                    </span>
                    <span className="font-['Inter'] text-xs text-[#665c57]">
                      Weights: 500, 600, 700, Italic
                    </span>
                  </div>
                  <div className="p-4 bg-[#f6f3f2] rounded-xl">
                    <span className="font-['Inter'] text-xs text-[#b3401e] uppercase font-bold block mb-1">
                      Body &amp; Metadata
                    </span>
                    <span className="font-['Inter'] text-lg text-[#1c1b1b] font-bold block">
                      Inter Sans
                    </span>
                    <span className="font-['Inter'] text-xs text-[#665c57]">
                      Weights: 400, 500, 600, 700
                    </span>
                  </div>
                </div>
              </div>

              {/* Color Swatches */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-3 border border-[#dfc0b7]/40">
                <div className="flex items-center justify-between">
                  <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57]">
                    Asset 03 • Core Color Palette
                  </span>
                  <span className="font-['Inter'] text-xs text-[#665c57]">4 Color Gamut</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  <div className="flex flex-col gap-1.5">
                    <div className="h-16 rounded-lg bg-[#FCF9F8] border border-[#dfc0b7] flex items-end p-2">
                      <span className="text-[10px] font-mono text-[#58423b]">#FCF9F8</span>
                    </div>
                    <span className="font-['Inter'] text-xs font-semibold text-[#1c1b1b]">
                      Canvas Paper
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-16 rounded-lg bg-[#1C1B1B] flex items-end p-2">
                      <span className="text-[10px] font-mono text-white">#1C1B1B</span>
                    </div>
                    <span className="font-['Inter'] text-xs font-semibold text-[#1c1b1b]">
                      Archival Ink
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-16 rounded-lg bg-[#B3401E] flex items-end p-2">
                      <span className="text-[10px] font-mono text-white">#B3401E</span>
                    </div>
                    <span className="font-['Inter'] text-xs font-semibold text-[#1c1b1b]">
                      Rust Earth
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-16 rounded-lg bg-[#EEE0D9] flex items-end p-2">
                      <span className="text-[10px] font-mono text-[#1c1b1b]">#EEE0D9</span>
                    </div>
                    <span className="font-['Inter'] text-xs font-semibold text-[#1c1b1b]">
                      Terracotta
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Press Contact CTA */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-[#eae7e7] p-8 sm:p-12 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 border border-[#dfc0b7]/50">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-[#b3401e]">
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                <span className="font-['Inter'] text-xs font-bold uppercase">
                  Dedicated Newsroom Dispatch
                </span>
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1c1b1b]">
                Editorial Inquiries &amp; Film Permissions
              </h2>
              <p className="font-['Inter'] text-base text-[#58423b] leading-relaxed">
                For press inquiries, broadcast interviews, and screening permissions:{' '}
                <a
                  href="mailto:press@keepitreal.in"
                  className="text-[#b3401e] font-semibold underline underline-offset-4 hover:text-[#922906]"
                >
                  press@keepitreal.in
                </a>
              </p>
              <p className="font-['Inter'] text-xs text-[#665c57]">
                Our newsdesk operates Monday through Friday, 09:00 - 18:00 IST. Emergency broadcast
                clearance requests receive immediate response within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href="mailto:press@keepitreal.in"
                className="w-full sm:w-auto bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-8 py-3.5 rounded-lg transition-all shadow-sm text-center active:scale-[0.98]"
              >
                Contact Media Desk
              </a>
              <button
                onClick={() => setInterviewModal(true)}
                className="w-full sm:w-auto bg-white hover:bg-[#f6f3f2] text-[#1c1b1b] font-['Inter'] text-sm font-semibold px-6 py-3.5 rounded-lg transition-all text-center shadow-sm cursor-pointer border border-[#dfc0b7]"
              >
                Request Interview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Request Modal */}
      {interviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1c1b1b]">
                Request Filmmaker Interview
              </h3>
              <button
                onClick={() => setInterviewModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="font-['Inter'] text-sm text-[#58423b]">
              Connect with director Kabir Varma and our field archival team for podcast, print, or
              broadcast interviews.
            </p>

            {interviewSent ? (
              <div className="p-4 bg-[#ffded6] text-[#922906] rounded-lg text-sm font-medium flex items-center gap-2">
                <span className="material-symbols-outlined">check_circle</span>
                <span>Interview inquiry transmitted. The press desk will reply within 24h.</span>
              </div>
            ) : (
              <form onSubmit={handleInterviewSubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                    Your Press Email
                  </label>
                  <input
                    type="email"
                    required
                    value={interviewEmail}
                    onChange={(e) => setInterviewEmail(e.target.value)}
                    placeholder="reporter@media.com"
                    className="w-full p-3 rounded-lg border border-[#dfc0b7] text-sm focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                    Publication / Outlet &amp; Story Angle
                  </label>
                  <input
                    type="text"
                    required
                    value={interviewPublication}
                    onChange={(e) => setInterviewPublication(e.target.value)}
                    placeholder="e.g. National Daily / Documentary podcast"
                    className="w-full p-3 rounded-lg border border-[#dfc0b7] text-sm focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#b3401e] hover:bg-[#922906] text-white py-3 rounded-lg font-['Inter'] text-sm font-semibold transition-colors cursor-pointer"
                >
                  Send Interview Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
