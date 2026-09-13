import { Story, Milestone, FAQItem } from './types';

export const STORIES: Story[] = [
  {
    id: 'chambal-clay',
    title: 'The Clay Guardian of Chambal: 40 Years Along the River',
    episode: 'Episode 41',
    stateLocation: 'Madhya Pradesh',
    category: 'ecology heroes',
    categoryTag: 'Rural Ecology',
    duration: '28:14 MINS',
    views: '1.4M views',
    timeAgo: 'Released Oct 2024',
    director: 'Kabir Varma',
    description:
      'In the once-feared ravines, one elder hand-crafts sacred terracotta deities while quietly reviving ancient subterranean check-dams. Over four decades, Mangal Ram has reversed seasonal desertification across three districts without asking the government for a single rupee.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDObhiiinIP7Ghvb2ifc1TfEpUDejkijcMVRAUDjMi5jOIOhl25GjHNC7sY0Q3KNizoE_ZEdm1QCFVeOZIFYS39GGPthwmExD2ePiDnGbmlUcf4RKjFFgcCQL9F5tMDIdrH11DFQ-D-tmXNbfZVmJD_CwYeHJh-Gw8RIIHKZ7cHJvygNmVLm9Bo2bxWq96Gd-sUv_8M7VElpqKrvpKf7o3LahOMkQvQPyxp9plT14HPxhIG2_mVFJOnzA',
    fundRaised: '₹12.4L Protagonist Fund',
    outcome: 'Three perennial aquifers restored in Morena district',
    isPinned: true,
  },
  {
    id: 'ramchandra-forest',
    title: 'The Potter Who Built a Forest',
    episode: 'Episode 24',
    stateLocation: 'Chambal Valley, MP',
    category: 'ecology heroes',
    categoryTag: 'Ecology',
    duration: '24 mins',
    views: '1.2M',
    timeAgo: '3 weeks ago',
    director: 'Kabir Varma',
    description:
      'How 68-year-old Ramchandra spent 34 years transforming arid ravines into a 20-acre green canopy, planting native saplings by hand between clay firings.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIcLu5DBpI6UO79BvP5GEfKR1Zx5V491dDVmiB9yEC1-IeOdLYExBRGYalD3obNkwuJifEKPujoXXc7139M_PndaZInv8Dn6FnpL6I37Iraj3NMITX08PKup6RIlKK5MKY68qoPUOpW_PfR51CTQILh3dpjDV7zssZTNhveNJOHXKF7w0Vqs4LQMEPvCRqoAqKI8LYqjneE6aQaOHlb9616acpDxUXEqDPOszktSFeE6bGTKCLT94dSA',
    fundRaised: '₹8.6L Eco Grant',
    outcome: 'Over 14,000 endemic trees cataloged and preserved',
  },
  {
    id: 'midnight-ambulance',
    title: 'The Midnight Ambulance of Patna',
    episode: 'Episode 39',
    stateLocation: 'Patna, Bihar',
    category: 'healthcare survival',
    categoryTag: 'Healthcare',
    duration: '19 mins',
    views: '890K',
    timeAgo: '1 month ago',
    director: 'Field Unit Bihar',
    description:
      'Sister Mary’s 18-year vigil rescuing abandoned patients along the Ganges, providing palliative hospice care and restorative hope in the dead of winter nights.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOq4rB8sPuubv5_qez413NupWsP5N3nmA34n4jLBhmAHOpebhPEkSOL3wy74vn4USsdxOkSvOKUWP16iOYUyjh-IGMHCdofCvZ4Tl0RF5Lu2OKt8XoGSngqBifHs_19dPDrONdDLEEVBjk8jJwbZ7Hfj7m690FgKecp9Cm6sLLG0oENu6SKRAxC8KVIcBRBzjYhWdLRaGyg_jltR5hOBYOtlhcE_gWlUSymKjrTKK5mMdwM4rJc7adOA',
    fundRaised: '₹22.5L Medical Fund',
    outcome: 'Dedicated nighttime intensive care van dispatched',
  },
  {
    id: 'tassar-weaver',
    title: 'Silent Loom: The Last Tassar Weaver',
    episode: 'Episode 27',
    stateLocation: 'Bastar, Chhattisgarh',
    category: 'heroes ecology',
    categoryTag: 'Heritage Crafts',
    duration: '16 mins',
    views: '640K',
    timeAgo: '2 months ago',
    director: 'Field Unit Central',
    description:
      'Preserving an ancestral craft against industrial automation in Chhattisgarh, where songs passed through ten generations still calibrate the weave rhythm.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRrVxsXwWxH498cy28RMvdLMEl2etr2kAA4-acYcw9h9OUFn_aO4PRgkzmr_wl6Xwmv__fgK5zYsGs1u9XRiQwweKJYKhbTZDYh6jTee3MUfoNF_rHyoqmIV5eba7Jsy5Elhl40zLT3G8QaHa-2PKfpipirQi_mATH1sOCEEL8kUlhegoQim9Ai3NO-vHv2gz2Uc-PsHlqGXER0ddnUJ3Z8AalKsH988b03svfsivJO4qHPkBj4SuM5A',
    fundRaised: '₹14.2L Cooperative Fund',
    outcome: 'Cooperative established for 38 youth weavers',
  },
  {
    id: 'varanasi-weaver',
    title: 'The Weaver of Varanasi: Last of the Pure Kadwa Loom',
    episode: 'Episode 38',
    stateLocation: 'Varanasi, Uttar Pradesh',
    category: 'heroes',
    categoryTag: 'Artisans',
    duration: '19:42',
    views: '920K views',
    timeAgo: '3 weeks ago',
    director: 'Kabir Varma',
    description:
      'Inside a crumbling century-old courtyard, Mohammad Idris weaves a single bridal brocade over six months, preserving an art form fading against powerloom machines.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZgCBr1eEjIdxMxD_jFVva-d5nof4DQbD8gnaVlN-KKkdq3yQiviGqOwW-w_lx1cZR-08PQIRQHga3lFvtr2ZmVeVHVZRkepOK9qFhJyqfkmeX4cQL7QbG6BnOuUIcuUpaijSxeM6g1KWsQa3GMgmB-fLeh4UEX4M7dy6pThfmmkxjXJ5Y_I0CnRfy9SHeiSMRO7eaiv4xPcBVG_shAoghOsvLj7bj9TVgw3EqqjKNRI8m9-USK-ntiQ',
    fundRaised: '₹18.0L Heritage Trust',
    outcome: 'Direct patron orders guaranteed for 2 years',
  },
  {
    id: 'delhi-women-paramedics',
    title: "Night Rider: Delhi's Midnight Women Paramedics",
    episode: 'Episode 39',
    stateLocation: 'New Delhi',
    category: 'healthcare survival',
    categoryTag: 'Healthcare',
    duration: '24:18',
    views: '1.1M views',
    timeAgo: '1 month ago',
    director: 'Kabir Varma',
    description:
      'Sunita and Priya navigate chaotic midnight traffic, road trauma emergencies, and social stigma to run the capital’s first all-female night response ambulance.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAA9DsYApWGkzyDib5PXb0KM7c7bmYejY-1_Reb55uoYTND14br1RKWBfIMeDVm4XL26h43FpNYI-ykZiQzgBexvfrf93nkn145mC4Gj7-uJ_wt1sRC3dfxBhwQ080Q8RWMG5eh9kGaXJVW5pPpu_dE9fkAs8SJumItNULWDLhNzXjYhDGFvQXkhtCqXqVffnBotXoRjgXHUQGIDrd-KlBdOdqAdvIfrhffrwuhDqc6-C_nteTfT7oWTA',
    fundRaised: '₹15.8L Equipment Fund',
    outcome: 'Fleet expanded with two modern response vehicles',
  },
  {
    id: 'vidarbha-seeds',
    title: 'Seeds of Vidarbha: The Widow Who Built a Seed Sanctuary',
    episode: 'Episode 35',
    stateLocation: 'Yavatmal, Maharashtra',
    category: 'survival ecology',
    categoryTag: 'Agriculture',
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
    fundRaised: '₹11.2L Forest Grant',
    outcome: 'Buffer corridor recognized as community reserve',
  },
  {
    id: 'chaiwala-school',
    title: "The Chaiwala's School: 70 Children, One Boiling Kettle",
    episode: 'Episode 31',
    stateLocation: 'Cuttack, Odisha',
    category: 'heroes survival',
    categoryTag: 'Education',
    duration: '17:50',
    views: '2.3M views',
    timeAgo: '4 months ago',
    director: 'Kabir Varma',
    description:
      'D. Prakash Rao spent over half of his daily tea stall profits for 20 years to fund a free primary school for slum youth behind his tiny stall.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfKUfa59lvlzz6cS57e-N6OyDZ1etyNF0tjrMQIByBnhD8yigGLRotzfQW9xNo4gGUanmQqm8Iz5mwCfrrtBxFob30mRvUxaN7wdVGq0lUacA5jXa3vjTZs32QxO30aXMvr6bmgjfnqQh0gqUXaOjuuBsf1uxjn2KZI2WkXtUe0c5wKr95fd4j4zuNM5OX4E2Xv5-RKo6SVVyF3wU1b3zXa9DCFNTdTmnxy-wOUUipZErp2nYNs_iHJQ',
    fundRaised: '₹34.0L Education Trust',
    outcome: 'Permanent school structure constructed with computer lab',
  },
  {
    id: 'forgotten-manuscripts',
    title: 'Keeper of the Forgotten Manuscripts: Saving 10,000 Folios',
    episode: 'Episode 29',
    stateLocation: 'Thanjavur, Tamil Nadu',
    category: 'heroes ecology',
    categoryTag: 'Heritage',
    duration: '26:30',
    views: '640K views',
    timeAgo: '5 months ago',
    director: 'Field Unit South',
    description:
      'Working without institutional funding, S. Vaitheeswaran extracts botanical herbal cures and pre-colonial algebra formulas from brittle palm-leaf bundles.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADblAZPjHX6GqUzSI-zOC2yspgLwqkzZrOQU116ZOU1zVIdkeY14N2OVWQynO_Li1NxySuNmPARGJOfJw51J3CFuWUs1OZAY78tm3m9_OtsBnVVrnYGstKT5kvpNkLGFMPA_FDVosTPCoN5k6R7QqNpwxkSda9MjJUaaaOAlcvB9MlrMuMMYu2el3Oi-3uLv7ReZlFD4YfjZjf_MgJZyxGiVEetqQed1pqPYJRKX2yuG-kBQRh53vdeQ',
    fundRaised: '₹16.5L Digitization Fund',
    outcome: 'Over 4,200 folios digitally scanned in open archive',
  },
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    year: '2019',
    title: 'The First Expedition',
    description:
      'First mini-documentary filmed solo in rural Bundelkhand. Edited on a second-hand laptop; viewed by just 5,000 quiet believers.',
    icon: 'videocam',
    badge: 'Seed Phase',
  },
  {
    year: '2021',
    title: 'The Oxygen Langar',
    description:
      'The viral field dispatch on a gurdwara providing emergency oxygen cylinders. The community rally mobilized ₹40 Lakh in citizen medical relief.',
    icon: 'emergency',
    badge: '₹40L Mobilized',
  },
  {
    year: '2022',
    title: 'Continental Recognition',
    description:
      'Channel crosses 250,000 subscribers. Awarded the prestigious Asian Human Rights Digital Storytelling citation in Bangkok.',
    icon: 'military_tech',
    badge: '250K Subscribers',
  },
  {
    year: '2023',
    title: 'Nationwide Expedition',
    description:
      'Full-year overland voyage spanning 18 Indian states. Chronicled 80 uncelebrated changemakers from Ladakh to Nagaland to Kanyakumari.',
    icon: 'explore',
    badge: '18 States Explored',
  },
  {
    year: '2024',
    title: 'The Impact Fund',
    description:
      '850,000+ subscriber family and 46 Million views. Launching our independent grants arm to back our documentary subjects perpetually.',
    icon: 'volunteer_activism',
    badge: '850K • 46M Views',
  },
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can I suggest a person or community for a documentary?',
    answer:
      'Use our contact form or email stories@keepitreal.in. Please include a summary of their story, their location, and why their journey needs to be preserved on film.',
    note:
      'Our field research team reviews every submission. If the story aligns with our editorial charter of unsung resilience, we send a scout for preliminary consent and groundwork before any camera rolls.',
  },
  {
    id: 'faq-2',
    question: 'Can I screen a Keep It Real film at my university or community center?',
    answer:
      'Yes! We champion public and academic screenings. We grant free non-theatrical screening rights to accredited educational institutions, rural schools, and non-profit cultural spaces upon formal request.',
    note:
      'Contact press@keepitreal.in with your proposed venue, expected audience size, and screening dates so our team can provide high-resolution master copies and digital discussion guides.',
  },
  {
    id: 'faq-3',
    question: 'How do I ensure my donation goes directly to the featured craftsperson?',
    answer:
      'Keep It Real operates on zero-intermediary protocols. For every subject or artisan featured in our films, we assist them in opening direct zero-fee bank accounts, UPI credentials, or verified artisan trust funds.',
    note:
      'We never take a percentage or platform fee from contributions made to documentary subjects. Direct beneficiary details are permanently archived in the description of each release on YouTube and our portal.',
  },
];

export const WORK_FAQS: FAQItem[] = [
  {
    id: 'work-faq-1',
    question: 'How do you protect editorial independence in brand collaborations?',
    answer:
      'We operate with a strict separation between funding and story truth. Partners co-determine the high-level impact theme and protagonist community, but our directing team maintains final cut on pacing, authentic dialogue, and natural framing. No scripted corporate speeches or staged testimonials are ever permitted.',
  },
  {
    id: 'work-faq-2',
    question: 'What is the standard production timeline from brief to release?',
    answer:
      'An authentic documentary cannot be rushed. Our typical lifecycle spans 8 to 12 weeks: 3 weeks for ground research and ethics consent, 10 days of on-location cinematography, followed by 4–5 weeks of editing, sound design, regional translations, and impact rollouts.',
  },
  {
    id: 'work-faq-3',
    question: 'What does your protagonist vetting and consent process involve?',
    answer:
      'Protagonist dignity is sacred. We conduct vernacular field visits, ensure informed non-coercive consent in their native tongue, verify life facts with local community leaders, and guarantee that their security, dignity, and cultural sensitivities remain unthreatened by global public broadcast.',
  },
  {
    id: 'work-faq-4',
    question: 'Who owns the intellectual property and screening rights?',
    answer:
      'For commissioned stories, partners receive perpetual institutional distribution rights for their summits, donor showcases, and internal communications. Keep It Real archives the master in our public library to ensure accessibility for students, historians, and future generations.',
  },
  {
    id: 'work-faq-5',
    question: 'How does Keep It Real ensure 100% of viewer donations reach protagonists?',
    answer:
      'We never take a percentage, commission, or operational deduction from funds contributed to documentary subjects. We establish direct zero-fee bank accounts or audited trust escrows for each protagonist, and publish quarterly balance dispatches openly.',
  },
];

export const FAQS = WORK_FAQS;

