import React, { useState, useEffect } from 'react';
import { PageRoute, Story } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { HomeScreen } from './components/screens/HomeScreen';
import { FeaturedStoriesScreen } from './components/screens/FeaturedStoriesScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { ImpactStatsScreen } from './components/screens/ImpactStatsScreen';
import { PressMediaScreen } from './components/screens/PressMediaScreen';
import { WorkWithUsScreen } from './components/screens/WorkWithUsScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { STORIES } from './data';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  // Scroll to top whenever route changes
  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWatchStory = (story: Story) => {
    setActiveStory(story);
  };

  const handleWatchLatest = () => {
    setActiveStory(STORIES[0]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#1c1b1b] font-['Inter'] selection:bg-[#b3401e] selection:text-white">
      {/* Universal Top Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onWatchLatest={handleWatchLatest}
      />

      {/* Screen Switcher */}
      <main className="flex-1 w-full">
        {currentRoute === 'home' && (
          <HomeScreen
            onWatchStory={handleWatchStory}
            onNavigate={handleNavigate}
          />
        )}
        {currentRoute === 'featured-stories' && (
          <FeaturedStoriesScreen onWatchStory={handleWatchStory} />
        )}
        {currentRoute === 'about' && (
          <AboutScreen onNavigate={handleNavigate} />
        )}
        {currentRoute === 'impact-stats' && (
          <ImpactStatsScreen onNavigate={handleNavigate} />
        )}
        {currentRoute === 'press' && (
          <PressMediaScreen onNavigate={handleNavigate} />
        )}
        {currentRoute === 'work-with-us' && (
          <WorkWithUsScreen onNavigate={handleNavigate} />
        )}
        {currentRoute === 'contact' && (
          <ContactScreen />
        )}
      </main>

      {/* Universal Documentary Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Full-Screen Cinema Video & Protagonist Support Modal */}
      <VideoModal
        isOpen={!!activeStory}
        story={activeStory}
        onClose={() => setActiveStory(null)}
      />
    </div>
  );
}

export default App;
