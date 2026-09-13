import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { FAQS } from '../../data';

interface WorkWithUsScreenProps {
  onNavigate: (page: PageRoute) => void;
}

export const WorkWithUsScreen: React.FC<WorkWithUsScreenProps> = ({ onNavigate }) => {
  const [selectedTrack, setSelectedTrack] = useState<'lead' | 'fellowship' | 'partner' | 'screening'>('lead');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', organization: '', message: '' });
    }, 4000);
  };

  const tracks = [
    {
      id: 'lead' as const,
      icon: 'lightbulb',
      title: 'Submit Story Tip',
      badge: 'Open Year-Round',
      desc: 'You know an unsung grassroots hero, ecological pioneer, or quiet community reformer.',
    },
    {
      id: 'fellowship' as const,
      icon: 'school',
      title: 'Field Fellowship',
      badge: 'Cohort 2024-25',
      desc: 'Emerging regional cinematographers, sound recordists, and researchers across India.',
    },
    {
      id: 'partner' as const,
      icon: 'handshake',
      title: 'Ethical CSR / Brand',
      badge: 'Strict Editorial Code',
      desc: 'No commercial product placements. Mission-aligned foundations and CSR partners.',
    },
    {
      id: 'screening' as const,
      icon: 'theaters',
      title: 'Host a Screening',
      badge: 'Universities & Collectives',
      desc: 'Screen 4K master editions at university auditoriums, cultural forums, and festivals.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: Editorial Hero Section */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#eee0d9] px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#b3401e]" />
                <span className="font-['Inter'] text-xs uppercase font-semibold text-[#6c625d]">
                  Fellowship &amp; Partnerships • 2024–25
                </span>
              </div>
              <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1b1b] tracking-tight leading-tight">
                Partner With Us to Unearth Truth
              </h1>
              <p className="font-['Inter'] text-base sm:text-lg text-[#58423b] max-w-2xl leading-relaxed">
                We collaborate with independent researchers, ethical foundations, sound recordists,
                and community fixers who believe in quiet, dignifying storytelling.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 bg-[#f6f3f2] rounded-2xl border border-[#dfc0b7]/40 min-w-[270px]">
              <div className="flex items-center gap-2 text-[#58423b]">
                <span className="material-symbols-outlined text-[18px] text-[#b3401e]">home_pin</span>
                <span className="font-['Inter'] text-xs font-bold uppercase tracking-wider">
                  Field Office New Delhi
                </span>
              </div>
              <p className="font-['Inter'] text-xs text-[#665c57]">
                PAN-India Field Missions • 18 States
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-[#b3401e] font-['Inter'] text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>100% Uncompromised Editorial Independence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Four Collaboration Paths */}
      <section className="w-full bg-[#f6f3f2] py-16 px-5 md:px-8 lg:px-12 border-y border-[#dfc0b7]/40">
        <div className="max-w-[1360px] mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-widest">
                Ways To Engage
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mt-1">
                Four Pathways for Collective Storytelling
              </h2>
            </div>
            <p className="font-['Inter'] text-sm text-[#58423b] max-w-sm leading-relaxed">
              Every partnership is protected by our strict Non-Extractive Filmmaker Charter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track) => {
              const isSelected = selectedTrack === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => {
                    setSelectedTrack(track.id);
                    const formElem = document.getElementById('collaboration-form');
                    formElem?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between border ${
                    isSelected ? 'border-[#b3401e] ring-2 ring-[#b3401e]/20' : 'border-[#dfc0b7]/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#eee0d9] flex items-center justify-center text-[#b3401e]">
                        <span className="material-symbols-outlined text-[20px]">{track.icon}</span>
                      </div>
                      <span className="font-['Inter'] text-[11px] font-bold text-[#b3401e] uppercase tracking-wider bg-[#f6f3f2] px-2 py-0.5 rounded">
                        {track.badge}
                      </span>
                    </div>

                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b]">
                      {track.title}
                    </h3>
                    <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                      {track.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#f0eded] flex items-center justify-between">
                    <span className="font-['Inter'] text-xs font-semibold text-[#b3401e]">
                      {isSelected ? 'Track Selected' : 'Choose Track'}
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-[#b3401e]">
                      arrow_forward
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: The Filmmaker's Field Fellowship */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-[#eee0d9]/60 p-8 sm:p-12 lg:p-14 rounded-3xl shadow-sm border border-[#dfc0b7]/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1 rounded-full text-[#b3401e]">
                  <span className="material-symbols-outlined text-[16px]">stars</span>
                  <span className="font-['Inter'] text-xs uppercase font-bold tracking-wider">
                    Flagship Program • Cohort 2024–25
                  </span>
                </div>
                <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b]">
                  The Grassroots Filmmaker Fellowship
                </h2>
                <p className="font-['Inter'] text-base text-[#58423b] leading-relaxed">
                  A 6-month fully funded field fellowship designed for young regional visual
                  storytellers, investigative journalists, and documentarians based in Tier 2, Tier 3,
                  and rural India.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#b3401e] text-[20px] mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                        ₹75,000 Monthly Living &amp; Production Stipend
                      </p>
                      <p className="font-['Inter'] text-xs text-[#58423b]">
                        To completely unburden fellows from day-to-day commercial freelance stress.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#b3401e] text-[20px] mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                        Cinema Unit &amp; Audio Kit Loaned
                      </p>
                      <p className="font-['Inter'] text-xs text-[#58423b]">
                        Sony FX3 body, low-light prime glass, and broadcast wireless lavaliers for the
                        duration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#b3401e] text-[20px] mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                        Mentorship with Kabir Varma &amp; Senior Editors
                      </p>
                      <p className="font-['Inter'] text-xs text-[#58423b]">
                        Bi-weekly direct narrative critiques, offline cutting guidance, and sound
                        grading.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#b3401e] text-[20px] mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                        Guaranteed Premiere on Keep It Real
                      </p>
                      <p className="font-['Inter'] text-xs text-[#58423b]">
                        Your final 25–35 minute film showcased to our 850K+ organic subscriber base.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSelectedTrack('fellowship');
                      const formElem = document.getElementById('collaboration-form');
                      formElem?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-6 py-3 rounded-lg transition-all shadow-sm cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Apply for Fellowship Cohort</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Fellowship visual badge card */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#dfc0b7]/40 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#dfc0b7]/30">
                  <span className="font-['Inter'] text-xs uppercase font-bold text-[#665c57]">
                    Cohort 2024 Key Dates
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b3401e]" />
                </div>
                <div className="space-y-3 font-['Inter'] text-xs">
                  <div className="flex justify-between py-1 border-b border-[#f0eded]">
                    <span className="text-[#58423b]">Applications Open</span>
                    <span className="font-bold text-[#1c1b1b]">August 1, 2024</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f0eded]">
                    <span className="text-[#58423b]">Shortlist Notification</span>
                    <span className="font-bold text-[#1c1b1b]">September 15, 2024</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f0eded]">
                    <span className="text-[#58423b]">Field Immersion Begins</span>
                    <span className="font-bold text-[#1c1b1b]">October 10, 2024</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#58423b]">Fellows Supported</span>
                    <span className="font-bold text-[#b3401e]">4 Selected Annually</span>
                  </div>
                </div>

                <div className="p-3 bg-[#f6f3f2] rounded-lg">
                  <p className="font-['Inter'] text-[11px] text-[#58423b] leading-relaxed">
                    Priority consideration given to filmmakers from under-represented tribal belts,
                    agrarian heartlands, and the Northeast states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Collaborative Production Principles */}
      <section className="w-full bg-[#f6f3f2] py-16 px-5 md:px-8 lg:px-12 border-t border-[#dfc0b7]/40">
        <div className="max-w-[1360px] mx-auto space-y-10">
          <div className="max-w-2xl">
            <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-widest">
              Our Covenant
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mt-1">
              Guiding Principles for Every Partner
            </h2>
            <p className="font-['Inter'] text-base text-[#58423b] mt-2">
              Before we accept funding, story tips, or co-productions, we require total alignment with
              these non-negotiable boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dfc0b7]/40 space-y-2">
              <span className="material-symbols-outlined text-[#b3401e] text-[28px]">block</span>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b]">
                Zero Sensationalism
              </h3>
              <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                We do not amplify melodrama for watch-time. Human struggle is treated with dignity,
                restraint, and truth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dfc0b7]/40 space-y-2">
              <span className="material-symbols-outlined text-[#b3401e] text-[28px]">
                volunteer_activism
              </span>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b]">
                Protagonist First
              </h3>
              <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                Subjects review the final context before premiere and receive direct transparent
                crowdfund relief.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dfc0b7]/40 space-y-2">
              <span className="material-symbols-outlined text-[#b3401e] text-[28px]">
                filter_drama
              </span>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b]">
                Non-Extractive Time
              </h3>
              <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                We compensate day wages lost due to filming schedules and never parachute in for
                quick sensational soundbites.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dfc0b7]/40 space-y-2">
              <span className="material-symbols-outlined text-[#b3401e] text-[28px]">
                account_balance
              </span>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b]">
                Open Transparency
              </h3>
              <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                All community funds are routed via audited trust bank accounts published on our
                annual public ledger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Interactive Ingestion Form */}
      <section
        id="collaboration-form"
        className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12 scroll-mt-20"
      >
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-md border border-[#dfc0b7]/50 max-w-4xl mx-auto">
            <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
              <span className="font-['Inter'] text-xs uppercase font-bold text-[#b3401e] tracking-widest">
                Start The Dialogue
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b]">
                Submit Your Proposal or Story Tip
              </h2>
              <p className="font-['Inter'] text-sm text-[#58423b]">
                Select the relevant engagement track and provide clear context. We review every note
                personally.
              </p>
            </div>

            {/* Track Selector Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {tracks.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTrack(t.id)}
                  className={`px-4 py-2 rounded-full font-['Inter'] text-xs font-semibold transition-all cursor-pointer ${
                    selectedTrack === t.id
                      ? 'bg-[#b3401e] text-white shadow-sm'
                      : 'bg-[#f6f3f2] text-[#665c57] hover:bg-[#eee0d9]'
                  }`}
                >
                  {t.title}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="p-8 bg-[#eee0d9] rounded-2xl text-center space-y-3">
                <span className="material-symbols-outlined text-4xl text-[#b3401e]">check_circle</span>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1c1b1b]">
                  Dispatch Received
                </h3>
                <p className="font-['Inter'] text-sm text-[#58423b] max-w-md mx-auto">
                  Thank you for trusting Keep It Real. Our editorial directorate will review your note
                  within 48 operational hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-['Inter'] text-xs font-bold text-[#1c1b1b] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Radhika Sen"
                      className="w-full bg-[#f6f3f2] text-[#1c1b1b] font-['Inter'] text-sm p-3.5 rounded-lg border border-[#dfc0b7] focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                    />
                  </div>

                  <div>
                    <label className="block font-['Inter'] text-xs font-bold text-[#1c1b1b] uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. radhika@collective.org"
                      className="w-full bg-[#f6f3f2] text-[#1c1b1b] font-['Inter'] text-sm p-3.5 rounded-lg border border-[#dfc0b7] focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-['Inter'] text-xs font-bold text-[#1c1b1b] uppercase mb-2">
                    Organization / Institution &amp; City (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. University of Delhi / Freelance Filmmaker, Guwahati"
                    className="w-full bg-[#f6f3f2] text-[#1c1b1b] font-['Inter'] text-sm p-3.5 rounded-lg border border-[#dfc0b7] focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                  />
                </div>

                <div>
                  <label className="block font-['Inter'] text-xs font-bold text-[#1c1b1b] uppercase mb-2">
                    Proposal / Story Lead Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide specific details: location, protagonist background, work accomplished, why it deserves to be chronicled, and any safety considerations."
                    className="w-full bg-[#f6f3f2] text-[#1c1b1b] font-['Inter'] text-sm p-3.5 rounded-lg border border-[#dfc0b7] focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <span className="font-['Inter'] text-xs text-[#665c57]">
                    Confidentiality guaranteed. Sources protected under journalistic privilege.
                  </span>
                  <button
                    type="submit"
                    className="bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-8 py-3.5 rounded-lg transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                  >
                    Send Ingestion Dispatch
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ Accordion */}
      <section className="w-full bg-[#f6f3f2] py-16 px-5 md:px-8 lg:px-12 border-t border-[#dfc0b7]/40">
        <div className="max-w-[1360px] mx-auto space-y-10">
          <div className="max-w-2xl">
            <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-widest">
              Frequently Inquired
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mt-1">
              Questions &amp; Operational Clarifications
            </h2>
          </div>

          <div className="max-w-3xl space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id || faq.question}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#dfc0b7]/40 transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#fcf9f8] transition-colors cursor-pointer"
                  >
                    <span className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b]">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#b3401e] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      keyboard_arrow_down
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#f0eded]">
                      <p className="font-['Inter'] text-sm text-[#58423b] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
