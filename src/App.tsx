import React, { useRef } from 'react';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { FluidCanvas } from './components/FluidCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LegacySection } from './components/LegacySection';
import { VirtuesSection } from './components/VirtuesSection';
import { GallerySection } from './components/GallerySection';
import { CelebrationAltar } from './components/CelebrationAltar';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToCelebration = () => {
    const el = document.getElementById('mensagens');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToLegacy = () => {
    const el = document.getElementById('legado');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05040a] text-slate-100 overflow-x-hidden selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      
      {/* 1. Real WebGL Starfield Physics from Arsenal Starfield-Scroll-Animation */}
      <StarfieldCanvas />

      {/* 2. Real WebGL Fluid Distortion Shader from Arsenal LandoNorris-Effect */}
      <FluidCanvas />

      {/* 3. Subtle Reference Template Vertical Guide Lines */}
      <div className="vertical-grid-lines">
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
      </div>

      {/* 4. Top Navigation Bar */}
      <Navbar onCelebrarClick={handleScrollToCelebration} />

      {/* 5. Main Content Tracks */}
      <main className="relative z-20">
        <HeroSection
          onTributeClick={handleScrollToCelebration}
          onExploreClick={handleScrollToLegacy}
        />

        <LegacySection onTributeClick={handleScrollToCelebration} />

        <VirtuesSection />

        <GallerySection />

        <CelebrationAltar />
      </main>

      {/* 6. Authorial Studio Footer */}
      <Footer />

    </div>
  );
}
