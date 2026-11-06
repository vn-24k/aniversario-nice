import React from 'react';
import { AmbientCanvas } from './components/AmbientCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LetterSection } from './components/LetterSection';
import { VirtuesSection } from './components/VirtuesSection';
import { GallerySection } from './components/GallerySection';
import { CelebrationSection } from './components/CelebrationSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToMessage = () => {
    const el = document.getElementById('bencaos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToLetter = () => {
    const el = document.getElementById('carta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08050a] text-stone-100 overflow-x-hidden selection:bg-amber-400/30 selection:text-amber-100 font-sans">
      
      {/* 1. Ambient Golden Starlight Particles */}
      <AmbientCanvas />

      {/* 2. Top Navigation Pill */}
      <Navbar onMessageClick={handleScrollToMessage} />

      {/* 3. Main Emotional Narrative Track */}
      <main className="relative z-20">
        <HeroSection
          onCelebrateClick={handleScrollToMessage}
          onExploreClick={handleScrollToLetter}
        />

        <LetterSection />

        <VirtuesSection />

        <GallerySection />

        <CelebrationSection />
      </main>

      {/* 4. Family Love Footer */}
      <Footer />

    </div>
  );
}
