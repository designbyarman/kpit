/**
 * KEEP IT REAL — INDEPENDENT DOCUMENTARY ARCHIVE
 * Pure Vanilla JavaScript Client Engine
 */

export interface Story {
  id: string;
  title: string;
  episode: string;
  stateLocation: string;
  category: string;
  categoryTag: string;
  duration: string;
  views: string;
  timeAgo: string;
  director: string;
  description: string;
  imageUrl: string;
  fundRaised: string;
  outcome: string;
}

export const STORIES: Story[] = [
  {
    id: 'clay-guardian-chambal',
    title: 'The Clay Guardian of Chambal: 40 Years Along the River',
    episode: 'Episode 41',
    stateLocation: 'Madhya Pradesh',
    category: 'ecology heroes',
    categoryTag: 'Rural Ecology',
    duration: '28:14',
    views: '1.4M views',
    timeAgo: '1 month ago',
    director: 'Kabir Varma',
    description:
      'Mangal Ram has sculpted alluvial mud along the notorious Chambal ravines since 1984, tracking the vanishing mugger crocodiles and reviving traditional clay cooling storage vessels for arid villages.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaDsTbXDmDteDFPXRb7hhTP_oxDvfddCOYYbfQlz5wEgvM17U7OtOaMM11Td4dgyGgmb8hlJXMwcdnH3d88tkfR6bKhx513VPUz-BB7gYHF2_HWXa8AplOxBcI_OvjVD33r9Gdq9hts2xeOiu7dbGhQ-sifYhk9-WzP7J6NHUU_rYB1YRLtcjGpG92QTUbj8gXOT8jls8gPo08LjA9oRDo29qNZHsOI3yEVshea_-Zc-l_G42O-U7KWA',
    fundRaised: '₹12.4L Protagonist Fund',
    outcome: 'Earthen workshop rebuilt with solar lighting & filtration unit',
  },
  {
    id: 'weaver-of-varanasi',
    title: 'The Weaver of Varanasi: Last of the Pure Kadwa Loom',
    episode: 'Episode 40',
    stateLocation: 'Uttar Pradesh',
    category: 'heroes',
    categoryTag: 'Master Artisans',
    duration: '19:42',
    views: '920K views',
    timeAgo: '3 weeks ago',
    director: 'Kabir Varma',
    description:
      'Master weaver Ramzan Ali refuses powerlooms. His pit-loom weaves a single silk sari over three months using pure gold zari, preserving a 400-year-old Mughal floral motif.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8m2x5qP4R5yOa_11WjCvh5W14B97GgM8L6oBq29P-h8vXo1uC9d7T1h_t8B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0',
    fundRaised: '₹8.6L Artisan Guild',
    outcome: 'Apprenticeship fund secured for 6 young village weavers',
  },
  {
    id: 'night-rider-delhi',
    title: "Night Rider: Delhi's Midnight Women Paramedics",
    episode: 'Episode 39',
    stateLocation: 'New Delhi NCR',
    category: 'healthcare survival',
    categoryTag: 'Frontline Healthcare',
    duration: '24:18',
    views: '1.1M views',
    timeAgo: '1 month ago',
    director: 'Kabir Varma',
    description:
      'Sunita and her crew navigate high-risk midnight ambulance dispatches through narrow alleys, battling structural indifference while delivering infants in transit.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDg23rV9rD2W78xY_6Q2jX1c1B8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0',
    fundRaised: '₹14.2L Emergency Relief',
    outcome: 'Installed 3 trauma paramedic kits and secured shift safety gear',
  },
  {
    id: 'seeds-of-vidarbha',
    title: 'Seeds of Vidarbha: The Widow Who Built a Seed Sanctuary',
    episode: 'Episode 38',
    stateLocation: 'Maharashtra',
    category: 'ecology survival',
    categoryTag: 'Agrarian Resilience',
    duration: '21:05',
    views: '780K views',
    timeAgo: '2 months ago',
    director: 'Kabir Varma',
    description:
      'After losing her husband to farm debt in 2012, Kamalabai built an open-source seed bank of 80 drought-tolerant native grains, liberating 300 families from chemical debt.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMBz4MjXYNYIcZQFvA3l9UkwELS-9QvBLvrJMkem0RzA8BCExv0jqemLwgq8NwFWPR5lKHuXBK6CUxc_Kmu-ameu7EdXlDUU8giX9QH6PQ_6VHloE5tknscm4TdIYZPfmenyBtQovyitppG1zdeQeYoceERVHiQSAqYHITxkOGVga6mKkfRlbw6xMvaP36CDucjgEsKkUutw23JkYEFwnluGBB07XVKgROh91Ol7LXO4QmfVywdZr5ww',
    fundRaised: '₹19.4L Agrarian Trust',
    outcome: '80 heirloom seed strains permanently safeguarded',
  },
  {
    id: 'living-root-meghalaya',
    title: 'The Living Root Architect: 50-Year Bridges of the Khasi',
    episode: 'Episode 33',
    stateLocation: 'Nongriat, Meghalaya',
    category: 'ecology heroes',
    categoryTag: 'Indigenous Ecology',
    duration: '31:12',
    views: '1.6M views',
    timeAgo: '3 months ago',
    director: 'Kabir Varma',
    description:
      'Bah Kular guides tree roots across torrential rivers for bridges he will never live to see completed—an intergenerational covenant with the cloud forest.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5fp-mGDkzoutkiPTIFWQUP6ZGJIz0-Xc6ppkZsT8EethVcbH7P8C7vbinsKNsq4UuB-iRwEThKmDnHcwWfaAJ73ISQSg2IFobI_AbH1wc107E2KURaNJOfhZJEMhSc0t-2PK7_7n8A24uZkE_CqjypvWvvyQYoEusJBg4UkELVZ0vcgs0r3eXMM46rWPCyy4v-AwaUYxLfS7IBFZHiUmHgVzkvFfnCG6sKy7p8zNYhSSovsoNMS4qjw',
    fundRaised: '₹22.1L Bio-Reserve Fund',
    outcome: 'Created community trail conservancy guarding ancient ficus groves',
  },
  {
    id: 'chaiwala-school-cuttack',
    title: "The Chaiwala's School: 70 Children, One Boiling Kettle",
    episode: 'Episode 29',
    stateLocation: 'Cuttack, Odisha',
    category: 'heroes',
    categoryTag: 'Grassroots Education',
    duration: '17:50',
    views: '2.3M views',
    timeAgo: '4 months ago',
    director: 'Kabir Varma',
    description:
      'D Prakash Rao poured half of every tea cup earnings into teaching slum children who could not afford uniform shoes, creating a generational leap.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8m8H0Z2V5K8X1q3Y7t9W1c1B8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0',
    fundRaised: '₹31.8L Education Endowment',
    outcome: 'Equipped science lab and library for 140 low-income students',
  },
  {
    id: 'forgotten-manuscripts-kashmir',
    title: 'Keeper of the Forgotten Manuscripts: Saving 10,000 Folios',
    episode: 'Episode 24',
    stateLocation: 'Srinagar, Kashmir',
    category: 'heroes',
    categoryTag: 'Cultural Heritage',
    duration: '26:30',
    views: '640K views',
    timeAgo: '5 months ago',
    director: 'Kabir Varma',
    description:
      'Ghulam Rasool cleans mold from 14th-century birch bark Quranic and Shaivite texts in his attic, defending shared syncretic Kashmiri history from damp decay.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1D3j7K2w9L8X1q3Y7t9W1c1B8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0B2X8_0Z4L2R6_p2E4w7X3jP_1K9T4m3Z9Q5W0',
    fundRaised: '₹11.2L Heritage Fund',
    outcome: 'Purchased humidity chambers and digitizing flatbed scanner',
  }
];

// Fallback image urls
const FALLBACK_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaDsTbXDmDteDFPXRb7hhTP_oxDvfddCOYYbfQlz5wEgvM17U7OtOaMM11Td4dgyGgmb8hlJXMwcdnH3d88tkfR6bKhx513VPUz-BB7gYHF2_HWXa8AplOxBcI_OvjVD33r9Gdq9hts2xeOiu7dbGhQ-sifYhk9-WzP7J6NHUU_rYB1YRLtcjGpG92QTUbj8gXOT8jls8gPo08LjA9oRDo29qNZHsOI3yEVshea_-Zc-l_G42O-U7KWA';

// Application State
let currentScreen = 'home';
let activeStory: Story = STORIES[0];
let currentCategory = 'all';
let searchQuery = '';
let isPlaying = false;
let bookmarkedStories = new Set<string>();

// Navigation Controller
export function navigateTo(screenId: string) {
  currentScreen = screenId;

  // Update screen visibility
  document.querySelectorAll('.page-screen').forEach((screen) => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(`screen-${screenId}`);
  if (target) {
    target.classList.add('active');
  }

  // Update nav links
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('data-screen') === screenId) {
      link.classList.add('active');
    }
  });

  // Close mobile drawer
  closeMobileDrawer();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Drawer Controls
export function toggleMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

export function closeMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.remove('open');
  }
}

// Video Modal Controls
export function openVideoModal(storyId?: string) {
  const story = STORIES.find((s) => s.id === storyId) || STORIES[0];
  activeStory = story;

  const modal = document.getElementById('video-modal');
  if (!modal) return;

  // Populate story info
  const titleEl = document.getElementById('modal-story-title');
  const metaEl = document.getElementById('modal-story-meta');
  const descEl = document.getElementById('modal-story-desc');
  const imgEl = document.getElementById('modal-video-still') as HTMLImageElement;
  const outcomeEl = document.getElementById('modal-story-outcome');
  const fundRaisedEl = document.getElementById('modal-fund-raised');

  if (titleEl) titleEl.textContent = story.title;
  if (metaEl) metaEl.textContent = `${story.episode} • ${story.stateLocation} • ${story.duration}`;
  if (descEl) descEl.textContent = story.description;
  if (outcomeEl) outcomeEl.textContent = story.outcome;
  if (fundRaisedEl) fundRaisedEl.textContent = story.fundRaised;
  if (imgEl) {
    imgEl.src = story.imageUrl;
    imgEl.onerror = () => { imgEl.src = FALLBACK_IMAGE; };
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  if (modal) {
    modal.classList.remove('open');
  }
  document.body.style.overflow = '';
  isPlaying = false;
  const playBtn = document.getElementById('modal-play-btn');
  if (playBtn) playBtn.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';
}

export function togglePlayVideo() {
  isPlaying = !isPlaying;
  const playBtn = document.getElementById('modal-play-btn');
  const statusEl = document.getElementById('video-status-text');
  if (playBtn) {
    playBtn.innerHTML = isPlaying
      ? '<span class="material-symbols-outlined">pause</span>'
      : '<span class="material-symbols-outlined">play_arrow</span>';
  }
  if (statusEl) {
    statusEl.textContent = isPlaying ? 'Playing in 4K Ultra HD...' : 'Paused';
  }
}

// Protagonist Support Fund Interaction
export function selectDonationAmount(amount: number) {
  const input = document.getElementById('donation-custom-input') as HTMLInputElement;
  if (input) {
    input.value = amount.toString();
  }
}

export function submitDonation(e: Event) {
  e.preventDefault();
  const input = document.getElementById('donation-custom-input') as HTMLInputElement;
  const amount = input?.value || '1000';
  const toast = document.getElementById('donation-toast');

  if (toast) {
    toast.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;color:#922906;font-weight:600;font-size:0.9rem;">
        <span class="material-symbols-outlined">check_circle</span>
        <span>Thank you! ₹${amount} micro-fund transaction verified for ${activeStory.title}. 100% direct transfer initiated.</span>
      </div>
    `;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 6000);
  }
}

// Featured Stories Filtering & Render
export function filterStories(category: string) {
  currentCategory = category;

  // Update pill buttons
  document.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-cat') === category) {
      btn.classList.add('active');
    }
  });

  renderStoriesGrid();
}

export function handleSearch(query: string) {
  searchQuery = query.toLowerCase().trim();
  renderStoriesGrid();
}

export function toggleBookmark(storyId: string, event: Event) {
  event.stopPropagation();
  if (bookmarkedStories.has(storyId)) {
    bookmarkedStories.delete(storyId);
  } else {
    bookmarkedStories.add(storyId);
  }
  renderStoriesGrid();
}

export function renderStoriesGrid() {
  const container = document.getElementById('featured-stories-container');
  if (!container) return;

  const stories = STORIES.slice(1).filter((story) => {
    const matchesCat = currentCategory === 'all' || story.category.includes(currentCategory);
    const matchesSearch =
      !searchQuery ||
      story.title.toLowerCase().includes(searchQuery) ||
      story.stateLocation.toLowerCase().includes(searchQuery) ||
      story.categoryTag.toLowerCase().includes(searchQuery) ||
      story.description.toLowerCase().includes(searchQuery);

    return matchesCat && matchesSearch;
  });

  if (stories.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 48px; text-align: center; background: white; border-radius: 12px; border: 1px solid #dfc0b7;">
        <span class="material-symbols-outlined" style="font-size: 40px; color: #b3401e; margin-bottom: 12px;">search_off</span>
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: #1c1b1b; margin-bottom: 8px;">No documentaries match your criteria</h3>
        <p style="font-size: 0.9rem; color: #58423b;">Try clearing your search keyword or switching to 'All Stories'.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = stories
    .map((story) => {
      const isSaved = bookmarkedStories.has(story.id);
      return `
        <article class="story-card" onclick="window.KIR.openVideoModal('${story.id}')">
          <div class="story-thumbnail-wrap">
            <img src="${story.imageUrl}" alt="${story.title}" class="story-thumbnail" onerror="this.src='${FALLBACK_IMAGE}'" />
            <div class="play-hover-overlay">
              <div class="play-icon-circle">
                <span class="material-symbols-outlined" style="font-size: 28px;">play_arrow</span>
              </div>
            </div>
            <span class="story-duration-badge">${story.duration}</span>
            <span class="story-category-badge">${story.categoryTag}</span>
            <button class="bookmark-btn" onclick="window.KIR.toggleBookmark('${story.id}', event)" style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.6); color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <span class="material-symbols-outlined" style="font-size: 18px; color: ${isSaved ? '#ffded6' : '#ffffff'};">
                ${isSaved ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>
          <div class="story-body">
            <div>
              <div class="story-meta-top">
                <span>${story.stateLocation}</span>
                <span>•</span>
                <span>${story.episode}</span>
              </div>
              <h3 class="story-title" style="margin-top: 6px; margin-bottom: 8px;">${story.title}</h3>
              <p class="story-description">${story.description}</p>
            </div>
            <div class="story-footer">
              <span>${story.views} • ${story.timeAgo}</span>
              <span class="story-watch-link">
                <span>Watch</span>
                <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
              </span>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

// Load More Simulation
export function handleLoadMore() {
  const btn = document.getElementById('btn-load-more');
  const progress = document.getElementById('archive-progress-fill');
  const countEl = document.getElementById('showing-count-num');

  if (!btn) return;
  btn.innerHTML = '<span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">autorenew</span><span>Retrieving Archive Dispatches...</span>';

  setTimeout(() => {
    btn.innerHTML = '<span class="material-symbols-outlined">check</span><span>All 142 Documentary Works Loaded</span>';
    (btn as HTMLButtonElement).disabled = true;
    if (progress) progress.style.width = '100%';
    if (countEl) countEl.textContent = '142';
  }, 1000);
}

// FAQ Accordion Toggle
export function toggleFaq(btn: HTMLElement) {
  const item = btn.closest('.faq-item');
  if (!item) return;

  const wasActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'));

  if (!wasActive) {
    item.classList.add('active');
  }
}

// Press Kit Download
export function downloadPressKit() {
  const btn = document.getElementById('btn-download-press-kit');
  if (!btn) return;

  btn.innerHTML = '<span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">autorenew</span><span>Generating Verified Media Bundle...</span>';
  (btn as HTMLButtonElement).disabled = true;

  setTimeout(() => {
    btn.innerHTML = '<span class="material-symbols-outlined">check</span><span>Download Started (.ZIP • 28MB)</span>';
    const alertBox = document.getElementById('press-download-toast');
    if (alertBox) {
      alertBox.style.display = 'block';
      setTimeout(() => { alertBox.style.display = 'none'; }, 6000);
    }
    setTimeout(() => {
      btn.innerHTML = '<span class="material-symbols-outlined">download</span><span>Download Full Press Kit (.ZIP • 28MB)</span>';
      (btn as HTMLButtonElement).disabled = false;
    }, 4000);
  }, 1200);
}

// Generic Forms
export function handleWorkForm(e: Event) {
  e.preventDefault();
  const alertEl = document.getElementById('work-form-toast');
  const form = document.getElementById('work-proposal-form') as HTMLFormElement;
  if (alertEl && form) {
    alertEl.style.display = 'block';
    form.reset();
    setTimeout(() => { alertEl.style.display = 'none'; }, 6000);
  }
}

export function handleContactForm(e: Event) {
  e.preventDefault();
  const alertEl = document.getElementById('contact-form-toast');
  const form = document.getElementById('contact-form') as HTMLFormElement;
  if (alertEl && form) {
    alertEl.style.display = 'block';
    form.reset();
    setTimeout(() => { alertEl.style.display = 'none'; }, 6000);
  }
}

export function handleNewsletter(e: Event, inputId: string, toastId: string) {
  e.preventDefault();
  const input = document.getElementById(inputId) as HTMLInputElement;
  const toast = document.getElementById(toastId);
  if (input && input.value) {
    input.value = '';
    if (toast) {
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 5000);
    }
  }
}

// Global initialization
declare global {
  interface Window {
    KIR: any;
  }
}

window.KIR = {
  navigateTo,
  toggleMobileDrawer,
  closeMobileDrawer,
  openVideoModal,
  closeVideoModal,
  togglePlayVideo,
  selectDonationAmount,
  submitDonation,
  filterStories,
  handleSearch,
  toggleBookmark,
  handleLoadMore,
  toggleFaq,
  downloadPressKit,
  handleWorkForm,
  handleContactForm,
  handleNewsletter,
};

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
  renderStoriesGrid();

  // Bind Esc key for modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
      closeMobileDrawer();
    }
  });
});
