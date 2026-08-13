import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import DiagnosticMatrix from '../components/DiagnosticMatrix';
import Capabilities from '../components/Capabilities';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import CTASection from '../components/CTASection';

export default function Inicio() {
  const { handleOpenWhatsApp } = useOutletContext();

  return (
    <>
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
    </>
  );
}
