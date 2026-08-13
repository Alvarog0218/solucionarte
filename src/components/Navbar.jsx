import React, { useState } from 'react';
import { MessageSquare, Menu, X, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ onOpenWhatsApp }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      {/* Logo flotante superior izquierdo (solo en pantallas grandes) */}
      <div className="hidden md:block fixed top-4 left-8 z-50">
        <Link to="/" className="hover:opacity-90 transition-opacity flex items-center relative group">
          <div className="absolute inset-y-4 inset-x-2 bg-[#e0f7fc]/10 rounded-2xl blur-md pointer-events-none group-hover:bg-[#e0f7fc]/15 transition-all duration-300"></div>
          <img src="/logo.png" alt="AP Desarrollo" className="h-[90px] md:h-[110px] w-auto object-contain relative z-10" />
        </Link>
      </div>

      {/* Barra de navegación principal */}
      <nav className="fixed z-50 transition-all duration-300
        /* Mobile: Cabecera completa tradicional */
        top-0 left-0 w-full h-[100px] bg-[#051316]/30 backdrop-blur-md border-b border-[#143941]/10 px-5 flex items-center justify-between
        /* Web: Cápsula flotante arriba a la derecha */
        md:top-6 md:right-8 md:left-auto md:w-auto md:h-auto md:rounded-2xl md:border md:border-[#143941]/25 md:bg-[#051316]/30 md:backdrop-blur-md md:px-8 md:py-4 md:shadow-lg"
      >
        {/* Logo Móvil (oculto en pantallas grandes) */}
        <div className="flex items-center gap-3 md:hidden">
          <Link to="/" className="hover:opacity-90 transition-opacity flex items-center relative">
            <img src="/logo.png" alt="AP Desarrollo" className="h-[100px] w-auto object-contain" />
          </Link>
        </div>

        {/* Enlaces de Navegación de Escritorio */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[#8fa3a7] text-base font-semibold hover:text-[#0097b2] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Botón de Menú Móvil (oculto en pantallas grandes) */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="p-2 text-[#0097b2] hover:bg-[#0e3b44]/50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menú colapsable móvil */}
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
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['Outfit'] text-lg font-semibold text-[#e6eff1] hover:text-[#0097b2] py-2 px-3 hover:bg-[#0e3b44]/30 rounded-lg transition-colors flex justify-between items-center"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#8fa3a7]" />
                </Link>
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
