import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppModal from '../components/WhatsAppModal';

export default function AppLayout() {
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
    <div className="min-h-screen text-[#f3f4f6] font-body selection:bg-[#0097b2] selection:text-white bg-noise bg-geometric relative overflow-hidden">
      {/* Moving logo relief watermark background */}
      <div className="absolute inset-0 bg-logo-texture animate-float-bg pointer-events-none z-0"></div>
      
      {/* Navigation */}
      <Navbar onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Main Content */}
      <main className="relative z-10 pt-[100px] md:pt-[140px]">
        <Outlet context={{ handleOpenWhatsApp }} />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Botón flotante de WhatsApp estático fijo en la parte inferior derecha */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => handleOpenWhatsApp('Consulta general desde el botón flotante')}
          className="bg-[#0097b2] hover:bg-[#00768c] text-white p-4 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group"
          aria-label="Contactar por WhatsApp"
        >
          <MessageSquare className="w-6 h-6 text-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs md:text-sm font-bold ml-0 group-hover:ml-2">
            Hablemos por WhatsApp
          </span>
        </button>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        initialMessage={whatsAppInitialMessage}
      />
    </div>
  );
}
