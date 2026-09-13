export type PageRoute =
  | 'home'
  | 'featured-stories'
  | 'about'
  | 'impact-stats'
  | 'press-media'
  | 'work-with-us'
  | 'contact';

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
  fundRaised?: string;
  outcome?: string;
  isPinned?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  likes: string;
  replies: string;
  badge: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  note?: string;
}
