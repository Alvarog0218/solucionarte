import React, { useState } from 'react';
import { MessageSquare, Menu, X, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenWhatsApp }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Filosofía', href: '#filosofia' },
    { name: 'Diagnóstico', href: '#diagnostico' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Proceso', href: '#proceso' },
  ];

  return (
    <>
      <nav className="bg-[#051316]/85 backdrop-blur-md sticky top-0 z-50 w-full border-b border-[#143941] shadow-xs h-[100px] md:h-[140px]">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-5 md:px-8 h-full py-0">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <a href="#" className="hover:opacity-90 transition-opacity flex items-center">
              <img src="/logo.png" alt="AP Desarrollo" className="h-[100px] md:h-[140px] max-w-[280px] md:max-w-[400px] w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#8fa3a7] text-sm font-medium hover:text-[#0097b2] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenWhatsApp('Consulta general desde el menú')}
              className="bg-[#0097b2] hover:bg-[#00768c] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-97 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Hablemos por WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
              className="md:hidden p-2 text-[#0097b2] hover:bg-[#0e3b44]/50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-[100px] right-0 left-0 bg-[#051316] border-b border-[#143941] p-6 shadow-xl flex flex-col gap-5 animate-in slide-in-from-top duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-3 border-b border-[#143941]">
              <span className="text-xs font-bold text-[#8fa3a7] uppercase tracking-wider">Navegación</span>
              <span className="inline-flex bg-[#0e3b44] text-[#bbf2fc] px-2.5 py-0.5 rounded-full text-xs font-semibold items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0097b2] animate-pulse"></span>
                En línea
              </span>
            </div>
            
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['Outfit'] text-lg font-semibold text-[#e6eff1] hover:text-[#0097b2] py-2 px-3 hover:bg-[#0e3b44]/30 rounded-lg transition-colors flex justify-between items-center"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#8fa3a7]" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#143941]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp('Consulta desde menú móvil');
                }}
                className="w-full bg-[#0097b2] text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                Iniciar Chat por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
