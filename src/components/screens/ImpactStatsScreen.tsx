import React, { useState } from 'react';
import { PageRoute } from '../../types';

interface ImpactStatsScreenProps {
  onNavigate: (page: PageRoute) => void;
}

export const ImpactStatsScreen: React.FC<ImpactStatsScreenProps> = ({ onNavigate }) => {
  const [activeChartPoint, setActiveChartPoint] = useState<number | null>(5);

  const chartData = [
    { year: '2019', watchHours: '1.2M hrs', subs: '45K', x: 100, y: 270 },
    { year: '2020', watchHours: '3.8M hrs', subs: '140K', x: 280, y: 245 },
    { year: '2021', watchHours: '8.4M hrs', subs: '310K', x: 460, y: 190 },
    { year: '2022', watchHours: '14.6M hrs', subs: '490K', x: 640, y: 130 },
    { year: '2023', watchHours: '22.8M hrs', subs: '680K', x: 820, y: 80 },
    { year: '2024 YTD', watchHours: '31.4M hrs', subs: '850K', x: 940, y: 50 },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: Editorial Impact Header with Cinematic Imagery */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#eee0d9] px-3.5 py-1.5 rounded-full text-[#6c625d]">
                <span className="material-symbols-outlined text-[16px] text-[#922906]">verified</span>
                <span className="font-['Inter'] text-xs uppercase tracking-wider font-semibold">
                  Independent Public Audit 2019–2024
                </span>
              </div>
              <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1b1b] tracking-tight leading-tight">
                Measuring Real Impact Beyond The Algorithm
              </h1>
              <p className="font-['Inter'] text-base sm:text-lg text-[#58423b] max-w-2xl leading-relaxed">
                Views matter only when they translate into dignity, community assistance, and policy
                change for our subjects.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-[#665c57] font-['Inter'] text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#b3401e] text-[20px]">public</span>
                  <span>PAN-India Field Chronicles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#b3401e] text-[20px]">
                    volunteer_activism
                  </span>
                  <span>100% Direct Transparent Giving</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-[#f0eded] border border-[#dfc0b7]/50">
                <img
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                  alt="Close up warm portrait of an elderly smiling Rajasthani woodcarver artisan in a sunlit earthen workshop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWxwn56_UX4yZ1LLr-RgFc5bbSvxNiMvrXC5yP7tFvB7_1S2gPnVtVEYO-uCEi7d8HreMkNneNBWHYt9D1-299zeopsDrxyUBtaeK85tiyvscElIFdylNv4jYt84mgx3IVsAEXCk-XZw6l-WCnXwqKFWZcyjNtehmjX36sE9VeGvKS4UZetZ5n9fQAXiiuZLBKkvg835Qfvx7ltp_iEXbjG0z0BPzfPZWzWC4FBC36YvRB-QZOpuc5Lw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden sm:block border border-[#dfc0b7]/40">
                <p className="font-['Inter'] text-xs font-bold uppercase text-[#922906] mb-1">
                  Subject Update • Ram Swaroop ji
                </p>
                <p className="font-['Inter'] text-xs text-[#1c1b1b] leading-relaxed">
                  Community donations enabled him to establish a village woodcarving cooperative for
                  14 youth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Key Stats Grid */}
      <section className="w-full bg-[#f6f3f2] py-16 px-5 md:px-8 lg:px-12 border-y border-[#dfc0b7]/40">
        <div className="max-w-[1360px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-wider">
                Five-Year Footprint
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mt-1">
                Core Metrics of Accountability
              </h2>
            </div>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#665c57] max-w-sm leading-relaxed">
              Verified through public YouTube Analytics &amp; escrow trust bank dispatches audited
              quarterly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-[#eee0d9]/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#dfc0b7]/40">
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Inter'] text-xs font-semibold uppercase text-[#6c625d]">
                  Audience Cohort
                </span>
                <span className="material-symbols-outlined text-[#922906] text-[22px]">group</span>
              </div>
              <div>
                <div className="font-['Playfair_Display'] text-4xl font-bold text-[#1c1b1b] tracking-tight mb-1">
                  850K+
                </div>
                <h3 className="font-['Playfair_Display'] text-base font-bold text-[#1c1b1b] mb-1">
                  Active Subscribers
                </h3>
                <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                  Deeply invested human rights and culture advocates watching long-form.
                </p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#eee0d9]/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#dfc0b7]/40">
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Inter'] text-xs font-semibold uppercase text-[#6c625d]">
                  Total Impressions
                </span>
                <span className="material-symbols-outlined text-[#922906] text-[22px]">
                  play_arrow
                </span>
              </div>
              <div>
                <div className="font-['Playfair_Display'] text-4xl font-bold text-[#1c1b1b] tracking-tight mb-1">
                  46.2M
                </div>
                <h3 className="font-['Playfair_Display'] text-base font-bold text-[#1c1b1b] mb-1">
                  Documentary Views
                </h3>
                <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                  Zero paid media spend. Purely driven by community shares and grassroots word-of-mouth.
                </p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-[#eee0d9]/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#dfc0b7]/40">
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Inter'] text-xs font-semibold uppercase text-[#6c625d]">
                  Consistency Metric
                </span>
                <span className="material-symbols-outlined text-[#922906] text-[22px]">
                  visibility
                </span>
              </div>
              <div>
                <div className="font-['Playfair_Display'] text-4xl font-bold text-[#1c1b1b] tracking-tight mb-1">
                  325,000
                </div>
                <h3 className="font-['Playfair_Display'] text-base font-bold text-[#1c1b1b] mb-1">
                  Avg. Views Per Film
                </h3>
                <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                  Median baseline across 24-minute to 45-minute cinema grade archival releases.
                </p>
              </div>
            </div>

            {/* Stat Card 4 (Highlighted) */}
            <div className="bg-[#922906] text-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Inter'] text-xs font-semibold uppercase text-[#ffded6]">
                  Tangible Relief
                </span>
                <span className="material-symbols-outlined text-white text-[22px]">handshake</span>
              </div>
              <div>
                <div className="font-['Playfair_Display'] text-4xl font-bold text-white tracking-tight mb-1">
                  ₹2.4 Cr
                </div>
                <h3 className="font-['Playfair_Display'] text-base font-bold text-white mb-1">
                  Direct Support Raised
                </h3>
                <p className="font-['Inter'] text-xs text-[#ffded6] leading-relaxed">
                  Channeled without middleman commissions straight to protagonists' verified
                  accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Audience Breakdown */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto space-y-10">
          <div className="max-w-2xl">
            <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-wider">
              Demographic Integrity
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mt-1">
              An Audience of Active Changemakers
            </h2>
            <p className="font-['Inter'] text-base text-[#58423b] mt-2">
              Unlike passive click-through audiences, our viewers are conscious contributors,
              grassroots educators, and civil reform champions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Donut Chart */}
            <div className="bg-[#f0eded] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between border border-[#dfc0b7]/40">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57]">
                    Age Cohort
                  </span>
                  <span className="font-['Inter'] text-xs text-[#922906] font-bold">22–38 YRS</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b] mb-2">
                  Prime Demographic: 62%
                </h3>
                <p className="font-['Inter'] text-xs text-[#58423b] mb-4 leading-relaxed">
                  Young conscious citizens, civil society workers, and emerging policymakers.
                </p>
              </div>

              <div className="flex items-center justify-center my-4">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      className="text-[#e5e2e1]"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="9"
                    />
                    <circle
                      className="text-[#b3401e]"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeDasharray="251.2"
                      strokeDashoffset="95.4"
                      strokeLinecap="round"
                      strokeWidth="9"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="font-['Playfair_Display'] text-2xl font-bold text-[#1c1b1b]">
                      62%
                    </span>
                    <span className="font-['Inter'] text-[11px] text-[#665c57] uppercase font-semibold">
                      22-38 Yrs
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-['Inter'] text-[#665c57]">
                  <span>Under 22: 14%</span>
                  <span>39-55: 18%</span>
                  <span>55+: 6%</span>
                </div>
                <div className="w-full bg-[#e5e2e1] h-2 rounded-full overflow-hidden flex">
                  <div className="bg-[#8c716a] w-[14%]" />
                  <div className="bg-[#b3401e] w-[62%]" />
                  <div className="bg-[#534d47] w-[18%]" />
                  <div className="bg-[#665c57] w-[6%]" />
                </div>
              </div>
            </div>

            {/* Geography Bar */}
            <div className="bg-[#f0eded] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between border border-[#dfc0b7]/40">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57]">
                    Geographic Spread
                  </span>
                  <span className="font-['Inter'] text-xs text-[#922906] font-bold">PAN-INDIA</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b] mb-2">
                  78% India • 22% Global
                </h3>
                <p className="font-['Inter'] text-xs text-[#58423b] mb-4 leading-relaxed">
                  Pervasive reach cutting across Tier 1 metros down to remote sub-district clusters.
                </p>
              </div>

              <div className="space-y-4 my-auto py-2">
                <div>
                  <div className="flex justify-between font-['Inter'] text-xs text-[#1c1b1b] mb-1">
                    <span>Tier 2 &amp; Tier 3 Towns (India)</span>
                    <span className="font-bold text-[#922906]">48%</span>
                  </div>
                  <div className="w-full bg-[#e5e2e1] h-3 rounded-full overflow-hidden">
                    <div className="bg-[#b3401e] h-full rounded-full" style={{ width: '48%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-['Inter'] text-xs text-[#1c1b1b] mb-1">
                    <span>Metros &amp; Tier 1 Hubs (India)</span>
                    <span className="font-bold text-[#922906]">30%</span>
                  </div>
                  <div className="w-full bg-[#e5e2e1] h-3 rounded-full overflow-hidden">
                    <div className="bg-[#665c57] h-full rounded-full" style={{ width: '30%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-['Inter'] text-xs text-[#1c1b1b] mb-1">
                    <span>Global Indian Diaspora</span>
                    <span className="font-bold text-[#922906]">22%</span>
                  </div>
                  <div className="w-full bg-[#e5e2e1] h-3 rounded-full overflow-hidden">
                    <div className="bg-[#8c716a] h-full rounded-full" style={{ width: '22%' }} />
                  </div>
                </div>
              </div>

              <p className="font-['Inter'] text-[11px] text-[#665c57] uppercase font-semibold pt-3 border-t border-[#dfc0b7]/40">
                Top Diaspora: UK, USA, UAE, Singapore &amp; Canada
              </p>
            </div>

            {/* Retention Meter */}
            <div className="bg-[#f0eded] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between border border-[#dfc0b7]/40">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57]">
                    Attention Integrity
                  </span>
                  <span className="font-['Inter'] text-xs text-[#922906] font-bold">
                    INDUSTRY TOP 1%
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b] mb-2">
                  84% Retention Rate
                </h3>
                <p className="font-['Inter'] text-xs text-[#58423b] mb-4 leading-relaxed">
                  Audience completion rate exceeding standard documentary benchmarks by 3.2x.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl my-2 shadow-inner border border-[#dfc0b7]/30">
                <div className="flex items-end justify-between gap-2 h-28 pt-2">
                  <div className="flex-1 bg-[#e5e2e1] rounded-t flex items-center justify-center text-[11px] text-[#665c57] font-mono h-[38%]">
                    38%
                  </div>
                  <div className="flex-1 bg-[#e5e2e1] rounded-t flex items-center justify-center text-[11px] text-[#665c57] font-mono h-[44%]">
                    44%
                  </div>
                  <div className="flex-1 bg-[#dcd9d9] rounded-t flex items-center justify-center text-[11px] text-[#665c57] font-mono h-[58%]">
                    58%
                  </div>
                  <div className="flex-1 bg-[#b3401e] rounded-t flex flex-col items-center justify-start text-[11px] text-white font-bold pt-1 h-[84%]">
                    84%
                    <span className="text-[8px] uppercase">KIR</span>
                  </div>
                </div>
                <div className="flex justify-between font-['Inter'] text-[11px] text-[#665c57] mt-2">
                  <span>Generic Docs</span>
                  <span className="text-[#922906] font-bold">Keep It Real</span>
                </div>
              </div>

              <p className="font-['Inter'] text-xs text-[#58423b] pt-1 leading-relaxed">
                Average continuous watch session spans 23 minutes and 40 seconds per film.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Stories That Sparked Concrete Action */}
      <section className="w-full bg-[#f6f3f2] py-16 px-5 md:px-8 lg:px-12 border-t border-[#dfc0b7]/40">
        <div className="max-w-[1360px] mx-auto space-y-10">
          <div className="max-w-2xl">
            <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-wider">
              Human Echoes
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mt-1">
              Stories That Sparked Concrete Action
            </h2>
            <p className="font-['Inter'] text-base text-[#58423b] mt-2">
              The transformation begins when the video ends. Here is how deep audience connection shifts
              human lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Story Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col border border-[#dfc0b7]/50">
              <div className="relative h-64 overflow-hidden bg-[#f0eded]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt="Kamla Devi teaching under banyan tree"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi5xKWou5y8F05Fl8L8Ll6vXRRNjhxV_OwKsDAG8-piZaSpFaiIbOA-FQ0KdSoytJC-4Tmx2t4k8Rm4YQ-n57FXmY0wcv5NZCRVhpIdd_x3vEfvcUqM64-_6vCrju27RtPci5TP4xJyecgMZpjKMiB085IhTQ6g2Wh0T96V0AthPHCZ9eMqiq4TprZ7xj74PcvENH-Hnz2HhyVkWXkrXr-Bo9dfmg0fApTbUkvSQiwjETMjBZ_8V4hRQ"
                />
                <div className="absolute bottom-3 left-3 bg-[#313030]/90 text-[#f3f0ef] font-['Inter'] text-xs font-semibold px-2.5 py-1 rounded">
                  EPISODE 48 • MADHYA PRADESH
                </div>
                <div className="absolute bottom-3 right-3 bg-[#b3401e] text-white font-['Inter'] text-xs font-semibold px-2.5 py-1 rounded">
                  ₹38.5 Lakhs Raised
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1c1b1b] mb-2">
                    The Barefoot Teacher of Rewa
                  </h3>
                  <p className="font-['Inter'] text-sm text-[#58423b] mb-4 leading-relaxed">
                    Kamla Devi spent 18 years operating a single-room school for 120 tribal daughters
                    without electricity or state sanction.
                  </p>

                  {/* Testimonial */}
                  <div className="bg-[#eee0d9]/50 p-4 rounded-xl mb-4 border-l-4 border-[#b3401e]">
                    <div className="flex items-center gap-1.5 text-[#922906] mb-1">
                      <span className="material-symbols-outlined text-[18px]">format_quote</span>
                      <span className="font-['Inter'] text-xs uppercase font-bold text-[#4e4540]">
                        Verified Subscriber Dispatch
                      </span>
                    </div>
                    <p className="font-['Playfair_Display'] text-sm italic text-[#1c1b1b] leading-relaxed">
                      “I watched this at 2:00 AM from my hostel room in Pune. By dawn, our student
                      engineering council gathered supplies. Two months later, we installed an
                      off-grid 4kW solar plant for Kamla ji’s school. Keep It Real gave us the truth
                      without sensationalism.”
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[#665c57] font-['Inter'] text-xs">
                      <span className="font-semibold text-[#1c1b1b]">
                        — Siddharth Nair, M.Tech Student, Pune
                      </span>
                      <span>14.2K Likes • 410 Replies</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-[#f0eded]">
                  <span className="font-['Inter'] text-xs text-[#922906] font-bold">
                    Outcome: Permanent school building completed (Jan 2024)
                  </span>
                  <button
                    onClick={() => onNavigate('featured-stories')}
                    className="font-['Inter'] text-xs font-semibold text-[#b3401e] hover:text-[#922906] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Follow-up</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col border border-[#dfc0b7]/50">
              <div className="relative h-64 overflow-hidden bg-[#f0eded]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt="Fisherman repairing nets in Kerala"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYloDVOSUqR0t3dWJsqTtlf6TuzITALGSOuFiDyjOxO-tA8HYgBiWUTojRisu1OqVlxbyZsx3qPppf2e_enqBP-oXU-5RozRiqCTZo_VzEpsl1_JiG1i8lpCqtk8lnFF1HjgDpP-tp3FiUr-xOZF_hR8zFQhak1-xbSfC1zTDGjCY2YJSNHVJjvBsaLJnqC4xlSIAZoEH7XLSekZmVxboggk9cTnneDF5GSYo47uOAjVWIEx4eXlEQNA"
                />
                <div className="absolute bottom-3 left-3 bg-[#313030]/90 text-[#f3f0ef] font-['Inter'] text-xs font-semibold px-2.5 py-1 rounded">
                  EPISODE 82 • KOLLAM, KERALA
                </div>
                <div className="absolute bottom-3 right-3 bg-[#b3401e] text-white font-['Inter'] text-xs font-semibold px-2.5 py-1 rounded">
                  Legal Petition: 120,000 Signatures
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1c1b1b] mb-2">
                    Guardians of the Estuary
                  </h3>
                  <p className="font-['Inter'] text-sm text-[#58423b] mb-4 leading-relaxed">
                    Chronicle of coastal artisanal fishers struggling against illegal dredging
                    destroying local fish breeding grounds.
                  </p>

                  {/* Testimonial */}
                  <div className="bg-[#eee0d9]/50 p-4 rounded-xl mb-4 border-l-4 border-[#b3401e]">
                    <div className="flex items-center gap-1.5 text-[#922906] mb-1">
                      <span className="material-symbols-outlined text-[18px]">format_quote</span>
                      <span className="font-['Inter'] text-xs uppercase font-bold text-[#4e4540]">
                        High Court Advocate Comment
                      </span>
                    </div>
                    <p className="font-['Playfair_Display'] text-sm italic text-[#1c1b1b] leading-relaxed">
                      “This 32-minute film provided unassailable visual testament of illegal sand
                      mining. Our legal collective placed timestamps directly into our Public Interest
                      Litigation (PIL). The National Green Tribunal subsequently imposed an interim stay
                      order.”
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[#665c57] font-['Inter'] text-xs">
                      <span className="font-semibold text-[#1c1b1b]">
                        — Meenakshi Sundaram, Advocate, High Court
                      </span>
                      <span>8.9K Likes • 190 Replies</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-[#f0eded]">
                  <span className="font-['Inter'] text-xs text-[#922906] font-bold">
                    Outcome: Estuary declared ecologically protected zone
                  </span>
                  <button
                    onClick={() => onNavigate('featured-stories')}
                    className="font-['Inter'] text-xs font-semibold text-[#b3401e] hover:text-[#922906] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Legal Brief</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Milestones Band (Deep Terracotta Band) */}
      <section className="w-full bg-[#b3401e] text-white py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center md:text-left">
            <div className="space-y-1">
              <span className="material-symbols-outlined text-[36px] text-[#ffded6]">movie</span>
              <div className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold leading-none">
                140+
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-bold">Films Produced</h3>
              <p className="font-['Inter'] text-xs text-[#ffded6] leading-relaxed">
                Spanning 22 States and 3 Union Territories from Ladakh to Tamil Nadu.
              </p>
            </div>

            <div className="space-y-1">
              <span className="material-symbols-outlined text-[36px] text-[#ffded6]">mic</span>
              <div className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold leading-none">
                1,200+
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-bold">Hours Audio Recorded</h3>
              <p className="font-['Inter'] text-xs text-[#ffded6] leading-relaxed">
                Preserving vanishing regional oral histories, folk dialects, and raw testimony.
              </p>
            </div>

            <div className="space-y-1">
              <span className="material-symbols-outlined text-[36px] text-[#ffded6]">
                family_restroom
              </span>
              <div className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold leading-none">
                310
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-bold">
                Families Directly Assisted
              </h3>
              <p className="font-['Inter'] text-xs text-[#ffded6] leading-relaxed">
                Medical emergencies funded, children enrolled in school, livelihood tools restored.
              </p>
            </div>

            <div className="space-y-1">
              <span className="material-symbols-outlined text-[36px] text-[#ffded6]">
                account_balance
              </span>
              <div className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold leading-none">
                100%
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-bold">Independent Ethos</h3>
              <p className="font-['Inter'] text-xs text-[#ffded6] leading-relaxed">
                Zero political sponsorships, zero commercial brand interference in editorial cuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Growth Visual (Interactive SVG Area Chart) */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-wider">
                Five-Year Trajectory
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mt-1">
                Sustained Growth in High-Retention Viewing
              </h2>
            </div>
            <div className="flex items-center gap-6 text-xs font-['Inter'] font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#b3401e] inline-block" />
                <span className="text-[#1c1b1b]">Annual Watch Hours (Millions)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#665c57] inline-block" />
                <span className="text-[#58423b]">Active Subscribers (Thousands)</span>
              </div>
            </div>
          </div>

          {/* Interactive Chart Container */}
          <div className="bg-[#f0eded] rounded-2xl p-6 sm:p-8 shadow-sm border border-[#dfc0b7]/40">
            <div className="relative w-full h-80">
              <svg
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 1000 320"
              >
                <defs>
                  <linearGradient id="warmChartGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#b3401e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#b3401e" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Ticks */}
                <line
                  x1="60"
                  x2="960"
                  y1="40"
                  y2="40"
                  stroke="#dfc0b7"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />
                <line
                  x1="60"
                  x2="960"
                  y1="100"
                  y2="100"
                  stroke="#dfc0b7"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />
                <line
                  x1="60"
                  x2="960"
                  y1="160"
                  y2="160"
                  stroke="#dfc0b7"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />
                <line
                  x1="60"
                  x2="960"
                  y1="220"
                  y2="220"
                  stroke="#dfc0b7"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />
                <line x1="60" x2="960" y1="280" y2="280" stroke="#dfc0b7" strokeOpacity="0.8" />

                {/* Area Fill for Watch Hours */}
                <path
                  d="M 100 270 Q 280 250, 460 190 T 820 80 L 940 50 L 940 280 L 100 280 Z"
                  fill="url(#warmChartGrad)"
                />

                {/* Main Line: Watch Hours */}
                <path
                  d="M 100 270 Q 280 250, 460 190 T 820 80 L 940 50"
                  fill="none"
                  stroke="#b3401e"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />

                {/* Secondary Line: Subscribers */}
                <path
                  d="M 100 275 Q 280 265, 460 215 T 820 120 L 940 90"
                  fill="none"
                  stroke="#665c57"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />

                {/* Interactive Points */}
                {chartData.map((pt, idx) => {
                  const isHovered = activeChartPoint === idx;
                  return (
                    <g
                      key={pt.year}
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveChartPoint(idx)}
                    >
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHovered ? 7 : 5}
                        fill={isHovered ? '#922906' : '#b3401e'}
                        stroke="#ffffff"
                        strokeWidth="2"
                        className="transition-all duration-200"
                      />
                      <text
                        x={pt.x}
                        y={305}
                        textAnchor="middle"
                        fill="#665c57"
                        fontFamily="Inter"
                        fontSize="12"
                        fontWeight={isHovered ? 'bold' : 'normal'}
                      >
                        {pt.year}
                      </text>
                      <text
                        x={pt.x}
                        y={pt.y - 14}
                        textAnchor="middle"
                        fill="#922906"
                        fontFamily="Inter"
                        fontSize={isHovered ? '13' : '11'}
                        fontWeight="bold"
                      >
                        {pt.watchHours}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="mt-6 pt-4 border-t border-[#dfc0b7]/40 grid grid-cols-1 md:grid-cols-3 gap-4 text-[#58423b] font-['Inter'] text-xs">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#922906] text-[20px] shrink-0">
                  trending_up
                </span>
                <span>Exponential word-of-mouth surge triggered in mid-2021 by rural artisan series.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#922906] text-[20px] shrink-0">
                  schedule
                </span>
                <span>Over 72% of view hours generated via connected TV living room screenings.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#922906] text-[20px] shrink-0">
                  language
                </span>
                <span>
                  Multi-language closed captions in Hindi, Tamil, Bengali &amp; English unlocked pan-national reach.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Call to Action (Partner With Us) */}
      <section className="w-full bg-[#f6f3f2] py-16 px-5 md:px-8 lg:px-12 border-t border-[#dfc0b7]/40">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm text-center relative overflow-hidden border border-[#dfc0b7]/50">
            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-wider">
                Join The Collective
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b]">
                Let Us Bring Your Community’s Truth to Light
              </h2>
              <p className="font-['Inter'] text-base sm:text-lg text-[#58423b] max-w-2xl mx-auto leading-relaxed">
                Whether you represent a grassroots non-profit, an ethical impact foundation, or are
                an investigative journalist in the field: collaborate with our independent
                production crew.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('work-with-us');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-8 py-3.5 rounded-lg transition-all shadow-md active:scale-[0.98] cursor-pointer"
                >
                  <span>Partner With Us to Create Tangible Change</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f0eded] hover:bg-[#eae7e7] text-[#1c1b1b] font-['Inter'] text-sm font-semibold px-8 py-3.5 rounded-lg transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#922906]">mail</span>
                  <span>Submit a Story Lead</span>
                </button>
              </div>

              <p className="font-['Inter'] text-xs text-[#665c57] pt-2">
                We review story tips and partnership proposals within 48 operational field hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
