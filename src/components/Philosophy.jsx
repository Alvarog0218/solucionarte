import React from 'react';
import { HeartHandshake, Code2, Target, Sparkles } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Empatía Estratégica',
      description: 'Analizamos tu operación real antes de escribir una sola línea de código.'
    },
    {
      icon: Code2,
      title: 'Código con Propósito',
      description: 'Desarrollamos soluciones enfocadas exclusivamente en tu retorno de inversión.'
    },
    {
      icon: Target,
      title: 'Soluciones Orgánicas',
      description: 'Herramientas intuitivas que tu equipo adopta desde el primer día sin curva de aprendizaje.'
    }
  ];

  return (
    <section className="py-12 md:py-16 px-5 md:px-8" id="filosofia">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Main Banner Box */}
        <div className="bg-[#e0f7fc]/60 rounded-3xl p-8 md:p-16 border border-[#bbf2fc] relative overflow-hidden shadow-xs">
          
          {/* Decorative Top Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1.5 bg-gradient-to-r from-transparent via-[#0097b2] to-transparent rounded-full"></div>

          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00768c] uppercase tracking-wider bg-white/80 px-3.5 py-1 rounded-full mb-4 border border-[#bfc9c1]/50">
              <Sparkles className="w-3.5 h-3.5 text-[#0097b2]" />
              Nuestra Filosofía de Trabajo
            </span>

            <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#00768c] mb-6 tracking-tight">
              Primero Entendemos Tu Negocio, Luego Desarrollamos
            </h2>

            <div className="text-base md:text-lg text-[#374b42] leading-relaxed mb-10 font-normal space-y-4 max-w-2xl mx-auto">
              <p>
                El software convencional te obliga a pagar licencias infladas por herramientas que no usas. En <strong className="font-bold text-[#00768c]">AP Desarrollo</strong> diseñamos activos digitales hechos 100% a la medida de tu operación. <strong className="font-bold text-[#00768c]">Empatía primero, código después.</strong>
              </p>
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6 border-t border-[#bfc9c1]/40">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-[#e2f4f7] hover-lift text-left shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0097b2] text-white flex items-center justify-center mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Outfit'] font-bold text-lg text-[#1a1c1b] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#556158] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
