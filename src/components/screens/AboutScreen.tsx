import React from 'react';
import { PageRoute } from '../../types';
import { TIMELINE_MILESTONES } from '../../data';

interface AboutScreenProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO (Warm Paper Minimalist Statement) */}
      <section className="relative w-full py-16 md:py-20 px-5 md:px-8 lg:px-12 max-w-[1360px] mx-auto">
        <div className="flex flex-col items-start max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#b3401e]" />
            <span className="font-['Inter'] text-xs font-semibold uppercase text-[#b3401e] tracking-widest">
              Our Founding Creed • Est. 2019
            </span>
          </div>

          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-[#1c1b1b] mb-4 tracking-tight font-bold leading-tight">
            Documenting the Quiet Giants of Our Time
          </h1>

          <p className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#58423b] font-normal max-w-2xl leading-relaxed">
            Why we stepped away from sensational breaking news to honor real human grit.
          </p>

          {/* Metadata Bar */}
          <div className="mt-8 pt-4 w-full flex flex-wrap items-center gap-x-8 gap-y-3 bg-[#f6f3f2] px-6 py-4 rounded-xl border border-[#dfc0b7]/40">
            <div className="flex items-center gap-2 text-[#665c57]">
              <span className="material-symbols-outlined text-[20px] text-[#b3401e]">movie</span>
              <span className="font-['Inter'] text-xs font-semibold">
                Independent Non-Fiction Cinema
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#665c57]">
              <span className="material-symbols-outlined text-[20px] text-[#b3401e]">location_on</span>
              <span className="font-['Inter'] text-xs font-semibold">18 States Across India</span>
            </div>
            <div className="flex items-center gap-2 text-[#665c57]">
              <span className="material-symbols-outlined text-[20px] text-[#b3401e]">verified</span>
              <span className="font-['Inter'] text-xs font-semibold">Zero Scripted Reenactments</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MISSION (Longform Two-Column Literary Essay) */}
      <section className="w-full py-10 px-5 md:px-8 lg:px-12 max-w-[1360px] mx-auto">
        <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm border border-[#dfc0b7]/40">
          <div className="max-w-2xl mb-8">
            <span className="font-['Inter'] text-xs uppercase font-semibold text-[#665c57] tracking-widest block mb-1">
              Origin Chronicle
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1c1b1b]">
              How It Began in 2019
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4 font-['Inter'] text-base text-[#58423b] leading-relaxed">
              <p>
                It started with the crushing exhaustion of mainstream media cycles. In late 2018,
                while working the national news beat, I realized that truth had been replaced by
                volume, and nuance by immediate gratification. The stories that shaped real lives
                were being drowned out by shouting matches in brightly lit urban broadcast studios.
              </p>
              <p>
                In February 2019, I resigned. I packed a single, beat-up 45-liter rucksack with a
                solitary camera body, two audio lavaliers, and a manual 35mm prime lens. I bought an
                unreserved sleeper ticket headed toward the rugged terrain of Bundelkhand in Madhya
                Pradesh, followed by dusty feeder buses snaking into northern Bihar.
              </p>
              <div className="p-5 bg-[#eee0d9]/40 rounded-xl my-4 border-l-4 border-[#b3401e]">
                <p className="font-['Playfair_Display'] text-lg text-[#1c1b1b] italic leading-relaxed">
                  "The most profound transformations happen in spaces where cell towers barely reach,
                  and no television van has ever parked."
                </p>
              </div>
            </div>

            <div className="space-y-4 font-['Inter'] text-base text-[#58423b] leading-relaxed">
              <p>
                What I discovered on those dirt tracks humbled every textbook premise of
                storytelling I had held dear. India’s truest heroes never call press conferences.
                They do not have PR representatives, media toolkits, or talking points prepared for
                microphones. They are village schoolmasters turning spare mud verandas into physics
                laboratories, women rebuilding embankments by hand before the monsoon surges, and
                grassroots mechanics engineering clean water filters out of discarded irrigation pipes.
              </p>
              <p>
                <em>Keep It Real</em> was born out of an uncompromising promise: to sit quietly on the
                dirt floor, listen until the sunset fades into lantern light, and never ask anyone to
                rehearse their pain or perform their dignity. We make space for the unhurried cadence
                of genuine human endurance.
              </p>
              <div className="pt-2 flex items-center gap-2 text-[#b3401e] font-semibold text-sm">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>No spotlights. No stage direction. Pure human testament.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CREATOR BIO (Split Layout) */}
      <section className="w-full py-10 px-5 md:px-8 lg:px-12 max-w-[1360px] mx-auto">
        <div className="bg-[#f0eded] rounded-2xl overflow-hidden shadow-sm border border-[#dfc0b7]/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Portrait Image */}
            <div className="lg:col-span-5 relative min-h-[440px] lg:min-h-[580px] bg-[#eee0d9]">
              <img
                alt="Kabir Varma, founder and documentary director of Keep It Real"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdMXhrMOFflaQ787h4xhOe7h2w_TYRXAQMRUSlK-UhE4PPW9OMw-rgd-4hcHFkeAj69oLUjpqgyOwYGOb1hwbaB3WjTEPjwG8ip5dc9xtnn_gPzm1k6NbmVW0E_PgZPP2YfO_Qo06oAtXo8FPi8nw5LOZbLZsDWDNmvhn99uIigxbnpMwO7P7qFn7XRrfacx_bihfur8_HP1w9PrRJp-zNsKXMtiLSTGQJQI4DgU_Xd5eLvmOFm8vXNg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 right-6 text-white lg:hidden">
                <p className="font-['Playfair_Display'] text-xl font-bold">Kabir Varma</p>
                <p className="font-['Inter'] text-xs text-[#f3f0ef]">
                  Founder, Lead Storyteller &amp; Director
                </p>
              </div>
            </div>

            {/* Bio Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="hidden lg:block">
                  <span className="font-['Inter'] text-xs font-semibold uppercase text-[#b3401e] tracking-widest block mb-1">
                    The Eye Behind the Lens
                  </span>
                  <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1c1b1b]">
                    Kabir Varma
                  </h2>
                  <p className="font-['Inter'] text-sm text-[#665c57] mt-1 font-medium">
                    Founder, Lead Storyteller &amp; Director
                  </p>
                </div>

                <p className="font-['Inter'] text-base text-[#58423b] leading-relaxed">
                  With twelve years behind the viewfinder as an investigative photojournalist and
                  documentary filmmaker, Kabir has reported from post-disaster flood corridors,
                  drought-stricken agrarian belts, and isolated Himalayan border settlements. His
                  work has appeared in leading independent human rights publications and
                  international film showcases.
                </p>

                <p className="font-['Inter'] text-base text-[#58423b] leading-relaxed">
                  Frustrated by the extractive nature of quick-hit television crews who parachute in
                  during distress and disappear the moment the feed cuts, Kabir founded{' '}
                  <em>Keep It Real</em> to practice slow, relational journalism. His philosophy
                  centers around non-intrusive filming: small rigs, natural lighting, multi-week field
                  immersion, and radical conversational intimacy.
                </p>

                <div className="pt-2 space-y-2">
                  <h3 className="font-['Inter'] text-xs uppercase font-bold text-[#1c1b1b] tracking-wider">
                    The Storyteller's Covenant:
                  </h3>
                  <ul className="space-y-2 text-[#58423b] font-['Inter'] text-sm">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#b3401e] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>We spend at least three days listening before a camera leaves its bag.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#b3401e] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Protagonists have final review rights over the context of their shared
                        reflections.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#b3401e] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Every rupee earned through viewership crowdfunding directly benefits the
                        community chronicled.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Specs Quote */}
              <div className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-4 bg-[#f6f3f2] p-4 rounded-xl border border-[#dfc0b7]/40">
                <div className="space-y-0.5">
                  <span className="font-['Inter'] text-[11px] uppercase tracking-wider text-[#665c57] font-semibold">
                    Gear Philosophy
                  </span>
                  <p className="font-['Inter'] text-xs text-[#1c1b1b] font-medium">
                    Single 35mm focal length • Ambient room tone • No artificial studio lamps
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[#b3401e]">
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                  <span className="font-['Inter'] text-xs font-bold">Ethical Fellowship Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VISUAL TIMELINE */}
      <section className="w-full py-16 px-5 md:px-8 lg:px-12 max-w-[1360px] mx-auto">
        <div className="max-w-2xl mb-10">
          <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-widest block mb-1">
            Our Journey
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b]">
            Five Years of Silent Footwork
          </h2>
          <p className="font-['Inter'] text-base text-[#58423b] mt-1">
            From an unwatched single upload to a nationwide collective of truth-seekers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {TIMELINE_MILESTONES.map((item) => (
            <div
              key={item.year}
              className="bg-white p-6 rounded-xl flex flex-col justify-between shadow-sm hover:-translate-y-1 transition-transform duration-200 border border-[#dfc0b7]/50"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['Playfair_Display'] text-2xl font-bold text-[#b3401e]">
                    {item.year}
                  </span>
                  <span className="material-symbols-outlined text-[#665c57] text-[22px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-['Inter'] text-sm font-bold text-[#1c1b1b] mb-2">
                  {item.title}
                </h3>
                <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-2 bg-[#f6f3f2] px-2 py-1 rounded text-center">
                <span className="font-['Inter'] text-[11px] font-bold text-[#b3401e] uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: VALUES BLOCK (Comparative Editorial Grid) */}
      <section className="w-full py-10 px-5 md:px-8 lg:px-12 max-w-[1360px] mx-auto">
        <div className="max-w-2xl mb-8">
          <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-widest block mb-1">
            Ethical Boundary
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1c1b1b]">
            Our Editorial Code
          </h2>
          <p className="font-['Inter'] text-base text-[#58423b] mt-1">
            Trust is fragile. We hold a clear line between documentary service and exploitative
            storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stories We Tell */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#dfc0b7]/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#eee0d9] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#b3401e] text-[22px]">
                  verified
                </span>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b]">
                Stories We Tell
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#b3401e] text-[20px] mt-0.5 shrink-0">
                  check
                </span>
                <div>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                    Unsung Grassroots Champions
                  </p>
                  <p className="font-['Inter'] text-xs text-[#58423b] mt-0.5 leading-relaxed">
                    Ordinary citizens who repair broken community systems without expecting applause
                    or medals.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#b3401e] text-[20px] mt-0.5 shrink-0">
                  check
                </span>
                <div>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                    Honest Struggles Without Melodrama
                  </p>
                  <p className="font-['Inter'] text-xs text-[#58423b] mt-0.5 leading-relaxed">
                    We allow people to express sorrow, ambivalence, and quiet joy without cueing
                    manipulative violin tracks.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#b3401e] text-[20px] mt-0.5 shrink-0">
                  check
                </span>
                <div>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                    Long-term Impact Follow-ups
                  </p>
                  <p className="font-['Inter'] text-xs text-[#58423b] mt-0.5 leading-relaxed">
                    Returning to the same hamlet six, twelve, and twenty-four months later to witness
                    real change on the ground.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#b3401e] text-[20px] mt-0.5 shrink-0">
                  check
                </span>
                <div>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                    Respectful Time Compensation
                  </p>
                  <p className="font-['Inter'] text-xs text-[#58423b] mt-0.5 leading-relaxed">
                    We never disrupt a protagonist's wage-earning daylight hours without covering their
                    daily wage losses.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* What We Will Never Do */}
          <div className="bg-[#eae7e7]/70 p-6 sm:p-8 rounded-2xl shadow-sm border border-[#dfc0b7]/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[22px]">
                  block
                </span>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b]">
                What We Will Never Do
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5 shrink-0">
                  close
                </span>
                <div>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                    Clickbait Trauma Exploitation
                  </p>
                  <p className="font-['Inter'] text-xs text-[#58423b] mt-0.5 leading-relaxed">
                    We refuse to use tearful close-ups as emotional blackmail for algorithm-driven video
                    clickthroughs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5 shrink-0">
                  close
                </span>
                <div>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                    Staged Reenactments
                  </p>
                  <p className="font-['Inter'] text-xs text-[#58423b] mt-0.5 leading-relaxed">
                    If an event wasn't captured authentically in real-time, we narrate it through
                    spoken testimony, not actors.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5 shrink-0">
                  close
                </span>
                <div>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                    Corporate PR Disguised as Journalism
                  </p>
                  <p className="font-['Inter'] text-xs text-[#58423b] mt-0.5 leading-relaxed">
                    We accept zero paid editorial sponsorships from entities attempting to whitewash
                    ecological violations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5 shrink-0">
                  close
                </span>
                <div>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1c1b1b]">
                    Abandoning Communities Post-Wrap
                  </p>
                  <p className="font-['Inter'] text-xs text-[#58423b] mt-0.5 leading-relaxed">
                    Our relationship with protagonists does not expire when the video renders; our
                    direct line stays open forever.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6: PULL-QUOTE */}
      <section className="w-full py-12 px-5 md:px-8 lg:px-12 max-w-[1360px] mx-auto">
        <div className="bg-[#eee0d9]/60 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm border border-[#dfc0b7]/40">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="material-symbols-outlined text-[#b3401e] text-[36px] opacity-75">
              format_quote
            </span>
            <blockquote className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl text-[#1c1b1b] italic leading-relaxed">
              “To look into someone's eyes without asking them to perform their grief is the first
              act of real filmmaking.”
            </blockquote>
            <div className="pt-4 flex flex-col items-center">
              <p className="font-['Inter'] text-sm text-[#1c1b1b] font-bold tracking-wide">
                Kabir Varma
              </p>
              <p className="font-['Inter'] text-xs uppercase text-[#665c57] tracking-widest mt-0.5">
                Founder • Keep It Real
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="w-full py-16 px-5 md:px-8 lg:px-12 max-w-[1360px] mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm border border-[#dfc0b7]/50">
          <span className="font-['Inter'] text-xs uppercase font-semibold text-[#b3401e] tracking-widest block mb-1">
            Walk With Us
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b] mb-2">
            Witness the Real India
          </h2>
          <p className="font-['Inter'] text-base text-[#58423b] max-w-xl mx-auto mb-8 leading-relaxed">
            Join over 850,000 thoughtful viewers across the subcontinent and beyond who prefer
            honest truth over sensationalism.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('featured-stories');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">smart_display</span>
              <span>Watch Our Stories</span>
            </button>

            <button
              onClick={() => {
                onNavigate('work-with-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#313030] hover:bg-[#1c1b1b] text-white font-['Inter'] text-sm font-semibold px-8 py-3.5 rounded-lg transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">handshake</span>
              <span>Work With Us (Collaborate)</span>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-[#665c57] font-['Inter'] text-xs">
            <span>New longform documentary releases every alternate Sunday evening at 7 PM IST.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
