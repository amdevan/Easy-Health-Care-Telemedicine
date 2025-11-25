import React from 'react';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import Benefits from './components/Benefits';
import SpecializedPrograms from './components/SpecializedPrograms';
import TechPlatform from './components/TechPlatform';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import CTA from './components/CTA';
import AIChatBot from './components/AIChatBot';

function App() {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-teal-100 selection:text-teal-900">
      <main>
        <Hero />
        <Overview />
        <Features />
        <Benefits />
        <SpecializedPrograms />
        <TechPlatform />
        <HowItWorks />
        <Impact />
        <CTA />
      </main>
      <AIChatBot />
    </div>
  );
}

export default App;