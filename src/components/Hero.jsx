import React from 'react';
import { MessageSquare, ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Zap, Clock } from 'lucide-react';
import DashboardWidget from './DashboardWidget';

export default function Hero({ onOpenWhatsApp }) {
  return (
    <section className="py-12 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#faf9f7] via-[#faf9f7] to-[#f4f3f1]/40">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#d9e6da]/30 to-[#b1f0ce]/20 blur-3xl rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Hero Copy */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 bg-[#d9e6da] text-[#2d6a4f] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6 border border-[#bfc9c1]/50 shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#0f5238]" />
              <span>Desarrollo &amp; Automatización a la Medida</span>
            </div>

            {/* Headline (H1) */}
            <h1 className="font-['Outfit'] text-[38px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[1.12] font-bold text-[#1a1c1b] tracking-tight mb-6">
              Software y Automatización{' '}
              <span className="text-[#0f5238]">
                a la Medida de tu Negocio.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#556158] max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Optimizamos tus procesos operativos para devolverte horas libres cada semana. Sin licencias mensuales ni plantillas rígidas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={() => onOpenWhatsApp('Hola! Quisiera contarles sobre los retos de mi negocio')}
                className="w-full sm:w-auto bg-[#2d6a4f] hover:bg-[#0f5238] text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-[#a8e7c5]" />
                Cuéntame tu reto en WhatsApp
              </button>

              <a
                href="#filosofia"
                className="w-full sm:w-auto px-7 py-4 text-[#0f5238] hover:text-[#2d6a4f] font-bold text-base flex items-center justify-center gap-2 transition-colors hover:underline decoration-2 underline-offset-8"
              >
                <span>Ver lo que podemos hacer</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>

            {/* Micro-copy de Confianza */}
            <div className="pt-6 border-t border-[#E2ECE9] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#556158]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2d6a4f]" />
                <span>Sin compromisos</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#2d6a4f]" />
                <span>Respuesta en menos de 15 min</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2d6a4f]" />
                <span>100% Código propio sin mensualidades</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Interactive Widget */}
          <div className="flex-1 w-full">
            <DashboardWidget />
          </div>

        </div>
      </div>
    </section>
  );
}
