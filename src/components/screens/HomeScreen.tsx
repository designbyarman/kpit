import React, { useState } from 'react';
import { PageRoute, Story } from '../../types';
import { STORIES } from '../../data';

interface HomeScreenProps {
  onNavigate: (page: PageRoute) => void;
  onWatchStory: (story: Story) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onWatchStory }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const featuredStories = STORIES.slice(1, 4);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. FULL-BLEED CINEMATIC HERO */}
      <section className="relative w-full -mt-20 overflow-hidden bg-[#313030]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaDsTbXDmDteDFPXRb7hhTP_oxDvfddCOYYbfQlz5wEgvM17U7OtOaMM11Td4dgyGgmb8hlJXMwcdnH3d88tkfR6bKhx513VPUz-BB7gYHF2_HWXa8AplOxBcI_OvjVD33r9Gdq9hts2xeOiu7dbGhQ-sifYhk9-WzP7J6NHUU_rYB1YRLtcjGpG92QTUbj8gXOT8jls8gPo08LjA9oRDo29qNZHsOI3yEVshea_-Zc-l_G42O-U7KWA')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#313030] via-[#313030]/60 to-[#313030]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#313030] via-[#313030]/40 to-transparent" />

        <div className="relative max-w-[1360px] mx-auto min-h-[92vh] flex flex-col justify-end px-5 md:px-8 lg:px-12 pt-36 pb-16 z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#ffdbd1]">
              <span className="w-2 h-2 rounded-full bg-[#b3401e] animate-pulse" />
              <span className="font-['Inter'] text-xs uppercase tracking-wider font-semibold">
                Documentary Channel &amp; Visual Archive
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-[#f3f0ef] leading-[1.08] tracking-tight font-bold">
              Real Stories.
              <br />
              <span className="italic font-normal text-[#ffded6]">Real People.</span>
              <br />
              Real Impact.
            </h1>

            <p className="font-['Inter'] text-lg sm:text-xl text-[#dcd9d9] max-w-xl pt-1 font-light leading-relaxed">
              Independent human-interest cinema chronicling India's unsung heroes, quiet
              resiliencies, and everyday courage.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <button
                onClick={() => onWatchStory(STORIES[0])}
                className="group inline-flex items-center gap-2.5 bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-7 py-3.5 rounded transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
                  play_arrow
                </span>
                <span>Watch on YouTube</span>
              </button>

              <button
                onClick={() => {
                  onNavigate('featured-stories');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 font-['Inter'] text-sm font-semibold text-[#f3f0ef]/90 hover:text-[#ffded6] transition-colors py-3 px-2 cursor-pointer"
              >
                <span>Explore 140+ Stories</span>
                <span className="material-symbols-outlined text-[18px]">south</span>
              </button>
            </div>
          </div>

          <div className="mt-16 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs text-[#dcd9d9]/70 font-['Inter']">
            <span className="uppercase tracking-widest">
              Field Dispatch No. 142 • Chhattisgarh &amp; Bihar Corridor
            </span>
            <span className="uppercase tracking-widest">
              Acoustic Field Audio • 4K DCI Film Stills
            </span>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS KEEP IT REAL */}
      <section className="w-full bg-[#fcf9f8] py-16 md:py-24">
        <div className="max-w-[960px] mx-auto px-5 md:px-8 lg:px-12 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-[#dfc0b7]" />
            <span className="font-['Inter'] text-xs uppercase font-semibold text-[#922906] tracking-widest">
              The Core Ethos
            </span>
            <span className="h-[1px] w-12 bg-[#dfc0b7]" />
          </div>

          <blockquote className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl text-[#1c1b1b] leading-snug font-medium italic">
            “We believe the most profound revolutions happen without fanfare. We travel to the dust
            roads, coastal towns, and forgotten corners of India to give everyday survivors and
            changemakers the spotlight they never sought.”
          </blockquote>

          <p className="font-['Inter'] text-xs sm:text-sm uppercase tracking-wider text-[#665c57] pt-2 font-semibold">
            Over 45 Million Views • 100% Unscripted • Zero Sensationalism
          </p>
        </div>
      </section>

      {/* 3. FEATURED STORIES SHOWCASE */}
      <section className="w-full bg-[#f6f3f2] py-16 md:py-24" id="stories-showcase">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-['Inter'] text-xs font-semibold uppercase text-[#922906] tracking-widest block mb-1">
                Archival Screenings
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b]">
                Curated Field Documentaries
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[#665c57] font-['Inter'] text-xs font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b3401e]" />
              <span>Updated Bi-weekly from Active Production Units</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <article
                key={story.id}
                onClick={() => onWatchStory(story)}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer border border-[#dfc0b7]/40"
              >
                <div className="relative w-full aspect-video overflow-hidden bg-[#eae7e7]">
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-[#313030]/85 backdrop-blur-sm text-white font-['Inter'] text-[11px] font-semibold uppercase px-2.5 py-1 rounded">
                      {story.duration}
                    </span>
                    <span className="flex items-center gap-1 text-white/90 font-['Inter'] text-[11px]">
                      <span className="material-symbols-outlined text-[15px]">visibility</span>{' '}
                      {story.views}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#922906] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <span className="material-symbols-outlined text-[28px]">play_arrow</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-['Inter'] text-xs font-semibold text-[#922906] uppercase">
                        {story.stateLocation}
                      </span>
                      <span className="text-[#dfc0b7]">•</span>
                      <span className="font-['Inter'] text-xs text-[#665c57] uppercase font-medium">
                        {story.categoryTag}
                      </span>
                    </div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1c1b1b] group-hover:text-[#b3401e] transition-colors mb-2 leading-snug">
                      {story.title}
                    </h3>
                    <p className="font-['Inter'] text-sm text-[#58423b] line-clamp-3 leading-relaxed">
                      {story.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#f0eded] flex items-center justify-between text-[#665c57]">
                    <span className="font-['Inter'] text-xs">{story.director}</span>
                    <span className="font-['Inter'] text-xs font-semibold text-[#922906] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Watch Film{' '}
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => {
                onNavigate('featured-stories');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#eee0d9] hover:bg-[#d1c4bd] text-[#211a16] font-['Inter'] text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Browse All 140+ Documentary Releases</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. STATS STRIP (#181716) */}
      <section className="w-full bg-[#181716] text-[#f3f0ef] py-16 border-y border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <span className="font-['Inter'] text-xs uppercase text-[#ffdbd1] tracking-widest block font-semibold">
                Subscribers
              </span>
              <p className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#f3f0ef] tracking-tight font-bold">
                850,000+
              </p>
              <p className="font-['Inter'] text-xs text-[#dcd9d9]/70">
                Subscribers across YouTube &amp; newsletters
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-['Inter'] text-xs uppercase text-[#ffdbd1] tracking-widest block font-semibold">
                Watch Time &amp; Views
              </span>
              <p className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#f3f0ef] tracking-tight font-bold">
                46.2M
              </p>
              <p className="font-['Inter'] text-xs text-[#dcd9d9]/70">
                Organic lifetime views with 74% retention
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-['Inter'] text-xs uppercase text-[#ffdbd1] tracking-widest block font-semibold">
                Human Archives
              </span>
              <p className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#f3f0ef] tracking-tight font-bold">
                142
              </p>
              <p className="font-['Inter'] text-xs text-[#dcd9d9]/70">
                Films shot across 23 states &amp; territories
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-['Inter'] text-xs uppercase text-[#ffdbd1] tracking-widest block font-semibold">
                Independent Since
              </span>
              <p className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#f3f0ef] tracking-tight font-bold">
                2019
              </p>
              <p className="font-['Inter'] text-xs text-[#dcd9d9]/70">
                Grassroots self-funded film collective
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET THE CREATOR TEASER */}
      <section className="w-full bg-[#fcf9f8] py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Portrait Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-xl bg-[#f0eded]">
                  <img
                    alt="Portrait of Kabir Varma, Lead Storyteller and Director"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdMXhrMOFflaQ787h4xhOe7h2w_TYRXAQMRUSlK-UhE4PPW9OMw-rgd-4hcHFkeAj69oLUjpqgyOwYGOb1hwbaB3WjTEPjwG8ip5dc9xtnn_gPzm1k6NbmVW0E_PgZPP2YfO_Qo06oAtXo8FPi8nw5LOZbLZsDWDNmvhn99uIigxbnpMwO7P7qFn7XRrfacx_bihfur8_HP1w9PrRJp-zNsKXMtiLSTGQJQI4DgU_Xd5eLvmOFm8vXNg"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#eee0d9] text-[#211a16] px-4 py-2.5 rounded-lg shadow-md hidden sm:block">
                  <span className="font-['Inter'] text-[11px] uppercase tracking-wider block font-semibold text-[#665c57]">
                    Field Director • Lead Voice
                  </span>
                  <span className="font-['Playfair_Display'] text-base font-bold">
                    Kabir Varma
                  </span>
                </div>
              </div>
            </div>

            {/* Bio Content Column */}
            <div className="lg:col-span-7 space-y-5 lg:pl-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#922906]" />
                <span className="font-['Inter'] text-xs uppercase font-semibold text-[#922906] tracking-widest">
                  Behind The Lens
                </span>
              </div>

              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1c1b1b] font-bold leading-tight">
                “I walked away from studio news rooms to find the heartbeat of India.”
              </h2>

              <div className="space-y-4 text-[#58423b] font-['Inter'] text-base leading-relaxed">
                <p>
                  In 2018, after eight years covering prime-time network broadcasts in Delhi, Kabir
                  packed two camera bags and a set of shotgun microphones to follow an intuitive
                  conviction: the stories that truly redefine our moral fabric never happen in
                  television studios.
                </p>
                <p>
                  Under his direction, <em>Keep It Real</em> has grown from a solo train journey with
                  a used DSLR into a nationally recognized repository of human courage. Kabir
                  personally visits every community, living alongside subjects for weeks prior to
                  rolling cameras, ensuring dignity outshines tragedy.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 font-['Inter'] text-sm text-[#922906] hover:text-[#b3401e] font-semibold transition-colors cursor-pointer"
                >
                  <span>Read Our Full Story &amp; Origins</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRESS ROW (GREYSCALE / ARCHIVAL) */}
      <section className="w-full bg-[#f0eded] py-12">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 space-y-6">
          <p className="text-center font-['Inter'] text-xs uppercase tracking-widest text-[#665c57] font-semibold">
            Recognized &amp; Covered Across Media
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-['Playfair_Display'] text-lg font-bold tracking-tight text-[#1c1b1b]">
              The Hindu
            </span>
            <span className="font-['Playfair_Display'] text-lg italic tracking-tighter text-[#1c1b1b]">
              The Indian Express
            </span>
            <span className="font-['Inter'] text-sm uppercase tracking-widest font-bold text-[#1c1b1b]">
              BBC Hindi
            </span>
            <span className="font-['Playfair_Display'] text-lg lowercase font-bold text-[#1c1b1b]">
              scroll.in
            </span>
            <span className="font-['Inter'] text-sm tracking-wide font-bold text-[#1c1b1b]">
              The Better India
            </span>
            <span className="font-['Inter'] text-xs uppercase font-extrabold tracking-widest text-[#1c1b1b]">
              Nat Geo Showcase
            </span>
          </div>
        </div>
      </section>

      {/* 7. VALUES TEASER */}
      <section className="w-full bg-[#fcf9f8] py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 space-y-10">
          <div className="max-w-xl">
            <span className="font-['Inter'] text-xs uppercase font-semibold text-[#922906] tracking-widest block mb-1">
              Our Editorial Tenets
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1c1b1b]">
              How We Safeguard Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#f6f3f2] rounded-xl space-y-3 flex flex-col justify-between border border-[#dfc0b7]/40">
              <div>
                <span className="font-['Playfair_Display'] text-2xl font-bold text-[#922906] block mb-2">
                  01
                </span>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b] mb-2">
                  Unfiltered Dignity
                </h3>
                <p className="font-['Inter'] text-sm text-[#58423b] leading-relaxed">
                  We categorically refuse exploitation and melodrama. We refuse to frame hardship as
                  spectacles for pity, preserving our subjects’ complete agency and pride.
                </p>
              </div>
              <div className="pt-4 text-[#665c57] font-['Inter'] text-xs uppercase tracking-wider font-semibold border-t border-[#dfc0b7]/30">
                Subject Agency First
              </div>
            </div>

            <div className="p-6 bg-[#f6f3f2] rounded-xl space-y-3 flex flex-col justify-between border border-[#dfc0b7]/40">
              <div>
                <span className="font-['Playfair_Display'] text-2xl font-bold text-[#922906] block mb-2">
                  02
                </span>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b] mb-2">
                  Hyper-Local Truth
                </h3>
                <p className="font-['Inter'] text-sm text-[#58423b] leading-relaxed">
                  We travel unhurried. Crew sizes never exceed three individuals to minimize
                  disruption, allowing authentic local dialects, customs, and community bonds to
                  emerge naturally.
                </p>
              </div>
              <div className="pt-4 text-[#665c57] font-['Inter'] text-xs uppercase tracking-wider font-semibold border-t border-[#dfc0b7]/30">
                Immersive Ground Presence
              </div>
            </div>

            <div className="p-6 bg-[#f6f3f2] rounded-xl space-y-3 flex flex-col justify-between border border-[#dfc0b7]/40">
              <div>
                <span className="font-['Playfair_Display'] text-2xl font-bold text-[#922906] block mb-2">
                  03
                </span>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b] mb-2">
                  Direct Human Impact
                </h3>
                <p className="font-['Inter'] text-sm text-[#58423b] leading-relaxed">
                  Each episode is paired with transparent, verified fundraisers or direct community
                  micro-initiatives so viewers can turn emotional resonance into tangible support.
                </p>
              </div>
              <div className="pt-4 text-[#665c57] font-['Inter'] text-xs uppercase tracking-wider font-semibold border-t border-[#dfc0b7]/30">
                Over ₹1.8 Cr Crowdfunded
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-['Inter'] text-sm font-semibold text-[#922906] hover:text-[#b3401e] inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Explore our Full Editorial Manifesto &amp; Filming Ethics</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. WORK WITH US CTA BANNER */}
      <section className="w-full bg-[#b3401e] text-white py-16">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="font-['Inter'] text-xs uppercase tracking-widest text-[#ffded6] font-semibold">
                Collaborations &amp; Fellowships
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-white font-bold">
                Have a story to tell or a mission to fund?
              </h2>
              <p className="font-['Inter'] text-base text-white/90 font-light leading-relaxed">
                We partner with ethical brands, NGOs, cultural foundations, and independent patrons
                for meaningful, high-craft human storytelling across the subcontinent.
              </p>
            </div>
            <div className="flex items-center shrink-0">
              <button
                onClick={() => {
                  onNavigate('work-with-us');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#f6f3f2] text-[#b3401e] font-['Inter'] text-sm font-semibold px-8 py-4 rounded shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Start a Conversation</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER SIGNUP ("THE DISPATCHES") */}
      <section className="w-full bg-[#fcf9f8] py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="bg-[#eee0d9] p-8 md:p-12 rounded-2xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-md space-y-2 text-left">
              <span className="font-['Inter'] text-xs uppercase font-semibold text-[#922906] tracking-widest">
                Field Letters • Bi-Weekly
              </span>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1c1b1b]">
                The Dispatches — Stories before they hit YouTube
              </h3>
              <p className="font-['Inter'] text-sm text-[#58423b] leading-relaxed">
                Unpublished film journals, raw field audio snippets, portrait photo-essays, and
                early access to all upcoming documentary screenings.
              </p>
            </div>

            <div className="w-full lg:max-w-md">
              {newsletterSubmitted ? (
                <div className="p-4 bg-white rounded-lg border border-[#b3401e] text-[#922906] text-sm font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  <span>Thank you for subscribing to The Dispatches.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your personal email"
                    className="flex-1 bg-white px-4 py-3 rounded text-sm text-[#1c1b1b] placeholder:text-[#665c57] focus:outline-none focus:ring-2 focus:ring-[#b3401e] shadow-inner"
                  />
                  <button
                    type="submit"
                    className="bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-6 py-3 rounded transition-colors whitespace-nowrap shadow-sm cursor-pointer"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}
              <span className="block font-['Inter'] text-xs text-[#665c57] mt-2">
                Direct dispatch from Kabir &amp; crew. No spam, ever.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
