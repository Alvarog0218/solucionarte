import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import DiagnosticMatrix from './components/DiagnosticMatrix';
import Capabilities from './components/Capabilities';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppModal from './components/WhatsAppModal';

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppInitialMessage, setWhatsAppInitialMessage] = useState('');

  const handleOpenWhatsApp = (message = '') => {
    setWhatsAppInitialMessage(message);
    setIsWhatsAppModalOpen(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.pageX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.pageY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#051316] text-[#e6eff1] font-body selection:bg-[#0097b2] selection:text-white bg-noise bg-geometric relative overflow-hidden">
      {/* Moving logo relief watermark background */}
      <div className="absolute inset-0 bg-logo-texture animate-float-bg pointer-events-none z-0"></div>
      
      {/* Navigation */}
      <Navbar onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Main Content */}
      <main>
        {/* Hero Section with Interactive Widget */}
        <Hero onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Philosophy Section */}
        <Philosophy />

        {/* Diagnostic Matrix + Interactive ROI Calculator */}
        <DiagnosticMatrix onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Capabilities Catalog */}
        <Capabilities onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Portfolio Section */}
        <Portfolio onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Development Process */}
        <Process onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Final CTA Section */}
        <CTASection onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        initialMessage={whatsAppInitialMessage}
      />
    </div>
  );
}
