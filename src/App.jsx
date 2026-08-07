import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1c1b] font-body selection:bg-[#bbf2fc] selection:text-[#001e24]">
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
