import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Temporarily keep these basic until we apply the kinetic overhaul to them next:
import CoreTranslation from './components/CoreTranslation'; 
import NeuralCoach from './components/NeuralCoach';
import NexusObserver from './components/NexusObserver';
import GlobalMatrix from './components/GlobalMatrix';
import Footer from './components/Footer';

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
        <meta property="og:url" content="https://www.astrix.com" /> 
        <meta property="og:image" content="https://www.astrix.com/social-preview.jpg" />

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
        {/* Phase III: The Kinetic Neural Hero */}
        <Hero />
        
        {/* Standard components below (will overhaul with Kinetic UI next) */}
        <CoreTranslation />
        <NeuralCoach />
        <NexusObserver />
        <GlobalMatrix />
      </main>

      {/* Pass the state to the Footer where the modal UI lives */}
      <Footer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default App;