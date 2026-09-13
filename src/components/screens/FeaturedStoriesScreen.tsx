import React, { useState, useMemo } from 'react';
import { Story } from '../../types';
import { STORIES } from '../../data';

interface FeaturedStoriesScreenProps {
  onWatchStory: (story: Story) => void;
}

export const FeaturedStoriesScreen: React.FC<FeaturedStoriesScreenProps> = ({ onWatchStory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'heroes' | 'survival' | 'healthcare' | 'ecology'>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  const pinnedStory = STORIES[0];

  const filterTabs = [
    { key: 'all', label: 'All Stories (142)' },
    { key: 'heroes', label: 'Unsung Heroes' },
    { key: 'survival', label: 'Survival & Courage' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'ecology', label: 'Society & Ecology' },
  ] as const;

  const filteredStories = useMemo(() => {
    return STORIES.slice(1).filter((story) => {
      const matchesCategory =
        selectedFilter === 'all' || story.category.toLowerCase().includes(selectedFilter);
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        story.title.toLowerCase().includes(q) ||
        story.stateLocation.toLowerCase().includes(q) ||
        story.description.toLowerCase().includes(q) ||
        story.categoryTag.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setLoadingMore(false);
      setAllLoaded(true);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: Page Header & Subtitle */}
      <section className="max-w-[1360px] w-full mx-auto px-5 md:px-8 lg:px-12 pt-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#b3401e]" />
              <span className="font-['Inter'] text-xs font-semibold uppercase tracking-wider text-[#b3401e]">
                Curated Documentary Archive
              </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1b1b] tracking-tight">
              Featured Stories &amp; Human Chronicles
            </h1>
            <p className="font-['Inter'] text-base text-[#58423b] max-w-2xl leading-relaxed">
              Every film is a testimony to resilience, quiet kindness, and the stubborn will to
              endure across India. Real people, authentic voices, no scripts.
            </p>
          </div>

          {/* Live Search Box */}
          <div className="w-full md:w-80 relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#665c57] text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by state, name, or theme..."
              className="w-full bg-white text-[#1c1b1b] font-['Inter'] text-sm pl-11 pr-4 py-2.5 rounded-lg border border-[#dfc0b7] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b3401e] placeholder:text-[#665c57]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2: Filter Pill-Tabs */}
      <section className="max-w-[1360px] w-full mx-auto px-5 md:px-8 lg:px-12 pb-8">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setSelectedFilter(tab.key)}
                className={`px-4 py-2 rounded-full font-['Inter'] text-xs sm:text-sm transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#b3401e] text-white font-semibold'
                    : 'bg-white hover:bg-[#f0eded] text-[#665c57] border border-[#dfc0b7]/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: Large Pinned Story Card */}
      <section className="max-w-[1360px] w-full mx-auto px-5 md:px-8 lg:px-12 pb-16">
        <div className="relative bg-[#f6f3f2] rounded-2xl overflow-hidden shadow-md group border border-[#dfc0b7]/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Hero Still */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
              <img
                src={pinnedStory.imageUrl}
                alt={pinnedStory.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black/40" />

              {/* Runtime badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded bg-[#313030]/90 backdrop-blur-md text-[#f3f0ef] font-['Inter'] text-xs tracking-wider uppercase font-semibold">
                <span className="material-symbols-outlined text-[16px] text-[#ffdbd1]">
                  schedule
                </span>
                <span>{pinnedStory.duration}</span>
              </div>

              {/* Pinned Award Indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#b3401e] text-white shadow-sm font-['Inter'] text-xs font-semibold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[14px]">stars</span>
                <span>Editorial Pick of the Month</span>
              </div>
            </div>

            {/* Narrative Block */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#f6f3f2]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#58423b] font-['Inter'] text-xs font-semibold uppercase tracking-wider">
                  <span>{pinnedStory.episode}</span>
                  <span>•</span>
                  <span>{pinnedStory.stateLocation}</span>
                  <span>•</span>
                  <span className="text-[#b3401e] font-bold">{pinnedStory.categoryTag}</span>
                </div>

                <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#1c1b1b] leading-snug">
                  {pinnedStory.title}
                </h2>

                <p className="font-['Inter'] text-sm sm:text-base text-[#58423b] leading-relaxed line-clamp-4">
                  {pinnedStory.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-[#665c57] font-['Inter'] text-xs">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    <span>{pinnedStory.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    <span>{pinnedStory.timeAgo}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px] text-[#b3401e]">
                      volunteer_activism
                    </span>
                    <span className="text-[#1c1b1b] font-semibold">{pinnedStory.fundRaised}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onWatchStory(pinnedStory)}
                  className="inline-flex items-center gap-2 bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-6 py-3 rounded-lg transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">play_circle</span>
                  <span>Watch Full Documentary</span>
                </button>

                <button
                  onClick={(e) => toggleBookmark(pinnedStory.id, e)}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-white hover:bg-[#f0eded] text-[#1c1b1b] font-['Inter'] text-sm font-semibold transition-colors shadow-sm cursor-pointer border border-[#dfc0b7]/50"
                  title="Save to watchlist"
                >
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      bookmarkedIds.has(pinnedStory.id) ? 'text-[#b3401e]' : ''
                    }`}
                  >
                    {bookmarkedIds.has(pinnedStory.id) ? 'bookmark' : 'bookmark_border'}
                  </span>
                  <span className="hidden sm:inline">
                    {bookmarkedIds.has(pinnedStory.id) ? 'Saved' : 'Watch Later'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 6-Card Editorial Video Grid */}
      <section className="max-w-[1360px] w-full mx-auto px-5 md:px-8 lg:px-12 pb-16">
        <div className="flex items-baseline justify-between mb-6">
          <div className="space-y-1">
            <span className="font-['Inter'] text-xs uppercase font-semibold tracking-widest text-[#b3401e]">
              Documentary Dispatch
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#1c1b1b]">
              Original Chronicled Works
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[#665c57] font-['Inter'] text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#b3401e] animate-pulse" />
            <span>4K Ultra HD • Subtitles in 6 Indian languages</span>
          </div>
        </div>

        {filteredStories.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-xl border border-[#dfc0b7] space-y-3">
            <span className="material-symbols-outlined text-[48px] text-[#b3401e]">
              manage_search
            </span>
            <p className="font-['Playfair_Display'] text-xl text-[#1c1b1b]">
              No documentaries match your filter or search query.
            </p>
            <button
              onClick={() => {
                setSelectedFilter('all');
                setSearchQuery('');
              }}
              className="text-sm font-semibold text-[#b3401e] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => {
              const isSaved = bookmarkedIds.has(story.id);
              return (
                <article
                  key={story.id}
                  onClick={() => onWatchStory(story)}
                  className="flex flex-col bg-[#f6f3f2] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-[#dfc0b7]/40"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#eae7e7]">
                    <img
                      src={story.imageUrl}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-white font-['Inter'] text-[11px] font-semibold">
                      {story.duration}
                    </span>
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#b3401e] font-['Inter'] text-[11px] font-bold uppercase">
                      {story.categoryTag}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                      <span className="w-12 h-12 rounded-full bg-[#b3401e] text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <span className="material-symbols-outlined text-[26px]">play_arrow</span>
                      </span>
                    </div>

                    <button
                      onClick={(e) => toggleBookmark(story.id, e)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                      title={isSaved ? 'Remove from watchlist' : 'Add to watchlist'}
                    >
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          isSaved ? 'text-[#ffded6]' : ''
                        }`}
                      >
                        {isSaved ? 'bookmark' : 'bookmark_border'}
                      </span>
                    </button>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#665c57] font-['Inter'] text-xs font-semibold uppercase">
                        <span>{story.stateLocation}</span>
                        <span>•</span>
                        <span>{story.episode}</span>
                      </div>
                      <h4 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b] group-hover:text-[#b3401e] transition-colors leading-snug">
                        {story.title}
                      </h4>
                      <p className="font-['Inter'] text-sm text-[#58423b] line-clamp-2 leading-relaxed">
                        {story.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#dfc0b7]/30 flex items-center justify-between">
                      <div className="text-[#665c57] font-['Inter'] text-xs">
                        {story.views} views • {story.timeAgo}
                      </div>
                      <span className="inline-flex items-center gap-1 font-['Inter'] text-xs font-semibold text-[#b3401e] group-hover:translate-x-1 transition-transform">
                        <span>Watch Film</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* SECTION 5: YouTube Callout Bar */}
      <section className="max-w-[1360px] w-full mx-auto px-5 md:px-8 lg:px-12 pb-16">
        <div className="bg-[#eee0d9]/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden border border-[#dfc0b7]/50">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#b3401e] text-white flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[32px]">smart_display</span>
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white font-['Inter'] text-xs text-[#922906] uppercase font-bold tracking-wider shadow-sm">
                  850K+ Community
                </span>
                <span className="text-[#665c57] font-['Inter'] text-xs hidden sm:inline font-medium">
                  • Weekly 4K Premieres Every Sunday 10 AM IST
                </span>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#1c1b1b]">
                Never miss a voice from the grassroots.
              </h3>
              <p className="font-['Inter'] text-sm text-[#58423b] max-w-xl">
                Support independent documentary filmmaking. Every view directly supports the
                Protagonist Support Fund distributed to our story subjects.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onWatchStory(pinnedStory)}
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-6 py-3.5 rounded-lg shadow-sm transition-transform active:scale-[0.98] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">notifications_active</span>
              <span>Subscribe on YouTube</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: Editorial Pagination & Load-More */}
      <section className="max-w-[1360px] w-full mx-auto px-5 md:px-8 lg:px-12 pb-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="font-['Inter'] text-sm text-[#58423b]">
            Showing{' '}
            <span className="font-semibold text-[#1c1b1b]">
              1–{allLoaded ? '142' : '7'}
            </span>{' '}
            of <span className="font-semibold text-[#1c1b1b]">142</span> stories across 22 Indian
            states
          </p>

          <div className="w-64 h-1.5 bg-[#eae7e7] rounded-full overflow-hidden">
            <div
              className={`h-full bg-[#b3401e] rounded-full transition-all duration-500 ${
                allLoaded ? 'w-full' : 'w-[15%]'
              }`}
            />
          </div>

          <button
            onClick={handleLoadMore}
            disabled={allLoaded || loadingMore}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-['Inter'] text-sm font-semibold transition-all shadow-sm ${
              allLoaded
                ? 'bg-[#f0eded] text-[#665c57] cursor-default'
                : 'bg-[#f6f3f2] hover:bg-[#eae7e7] text-[#1c1b1b] active:scale-95 cursor-pointer border border-[#dfc0b7]/50'
            }`}
          >
            {loadingMore ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">
                  progress_activity
                </span>
                <span>Retrieving Archive...</span>
              </>
            ) : allLoaded ? (
              <>
                <span className="material-symbols-outlined text-[18px]">check</span>
                <span>All Current Dispatches Loaded</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">autorenew</span>
                <span>Load More Documentaries</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* SECTION 7: Mini Stats Strip */}
      <section className="w-full bg-[#f6f3f2] py-12 border-t border-[#dfc0b7]/50">
        <div className="max-w-[1360px] w-full mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#dfc0b7]/60">
            <div className="flex flex-col items-center text-center space-y-1.5 py-3 md:py-0 md:px-4">
              <span className="font-['Inter'] text-xs font-semibold uppercase tracking-widest text-[#b3401e]">
                Chronicles Published
              </span>
              <div className="font-['Playfair_Display'] text-3xl font-bold text-[#1c1b1b]">
                142 Stories
              </div>
              <p className="font-['Inter'] text-xs text-[#58423b] max-w-xs leading-relaxed">
                From Spiti Valley to the Sundarbans, capturing unsung resilience in 22 distinct
                languages and dialects.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-1.5 py-3 md:py-0 md:px-4">
              <span className="font-['Inter'] text-xs font-semibold uppercase tracking-widest text-[#b3401e]">
                Audience Engagement
              </span>
              <div className="font-['Playfair_Display'] text-3xl font-bold text-[#1c1b1b]">
                46M+ Mins
              </div>
              <p className="font-['Inter'] text-xs text-[#58423b] max-w-xs leading-relaxed">
                Total organic documentary watch time across our independent YouTube archive and
                screenings.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-1.5 py-3 md:py-0 md:px-4">
              <span className="font-['Inter'] text-xs font-semibold uppercase tracking-widest text-[#b3401e]">
                Protagonist Care
              </span>
              <div className="font-['Playfair_Display'] text-3xl font-bold text-[#1c1b1b]">
                ₹1.8 Cr Raised
              </div>
              <p className="font-['Inter'] text-xs text-[#58423b] max-w-xs leading-relaxed">
                Direct reader and viewer micro-contributions wired directly into medical and artisan
                funds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
