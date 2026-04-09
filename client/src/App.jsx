// THE FIX: Import Suspense and lazy here
import React, { useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// THE FIX: Removed the standard imports and ONLY use lazy loading for these
const CoreTranslation = lazy(() => import('./components/CoreTranslation'));
const NeuralCoach = lazy(() => import('./components/NeuralCoach'));
const NexusObserver = lazy(() => import('./components/NexusObserver'));
const GlobalMatrix = lazy(() => import('./components/GlobalMatrix'));

function App() {
  // State to manage the VIP Waitlist Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#9F4DFF] selection:text-white">
      
      {/* --- THE SEO BRAIN --- */}
      <Helmet>
        <title>Astrix | Real-Time AI Translation & Cognitive Chat Platform</title>
        <meta name="description" content="Experience borderless communication. Astrix is a next-generation chat platform featuring native AI translation, real-time tone coaching, and a global social matrix." />
        <meta name="keywords" content="AI chat, real-time translation messaging, AI communication coach, language translation app, global social network" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Astrix | Communicate Beyond Words" />
        <meta property="og:description" content="The world's most sophisticated social platform with native AI translation and cognitive coaching." />
        {/* Remember to update this URL once your domain is linked! */}
        <meta property="og:url" content="https://www.astrixnetwork.com" /> 
        <meta property="og:image" content="https://www.astrixnetwork.com/social-preview.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Astrix | Real-Time AI Translation Chat" />
        <meta name="twitter:description" content="Experience borderless communication with native AI translation and real-time tone coaching." />
      </Helmet>
      {/* ---------------------- */}

      {/* Phase I: Activated Kinetic Noise Layer */}
      <div className="neural-noise"></div>

      {/* Pass the state setter so the button in Navbar works */}
      <Navbar setIsModalOpen={setIsModalOpen} />
      
      <main className="flex flex-col items-center w-full">
        {/* Phase III: The Kinetic Neural Hero (Loads instantly) */}
        <Hero />
        
        {/* Lazy Loaded Components */}
        <Suspense fallback={<div className="h-screen w-full bg-[#050505] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#9F4DFF] border-t-transparent rounded-full animate-spin"></div></div>}>
          <CoreTranslation />
          <NeuralCoach />
          <NexusObserver />
          <GlobalMatrix />
        </Suspense>
      </main>

      {/* Pass the state to the Footer where the modal UI lives */}
      <Footer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default App;