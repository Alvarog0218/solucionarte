import React from 'react';
import { HeartHandshake, Code2, Target, Sparkles } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Empatía Estratégica',
      description: 'Analizamos tus procesos operativos, dolor por dolor, antes de redactar cualquier especificación técnica.'
    },
    {
      icon: Code2,
      title: 'Código con Propósito',
      description: 'Construimos lo que realmente te genera retorno de inversión. Cero complejidad artificial ni licencias mensuales infladas.'
    },
    {
      icon: Target,
      title: 'Soluciones Orgánicas',
      description: 'Herramientas tan sencillas e intuitivas que tu equipo las adoptará desde el primer día sin resistencia.'
    }
  ];

  return (
    <section className="py-12 md:py-16 px-5 md:px-8" id="filosofia">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Main Banner Box */}
        <div className="bg-[#d9e6da]/60 rounded-3xl p-8 md:p-16 border border-[#b1f0ce] relative overflow-hidden shadow-xs">
          
          {/* Decorative Top Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1.5 bg-gradient-to-r from-transparent via-[#2d6a4f] to-transparent rounded-full"></div>

          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f5238] uppercase tracking-wider bg-white/80 px-3.5 py-1 rounded-full mb-4 border border-[#bfc9c1]/50">
              <Sparkles className="w-3.5 h-3.5 text-[#2d6a4f]" />
              Nuestra Filosofía de Trabajo
            </span>

            <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#0f5238] mb-6 tracking-tight">
              Primero Escuchar, Luego Desarrollar
            </h2>

            <div className="text-base md:text-lg text-[#374b42] leading-relaxed mb-10 font-normal space-y-4">
              <p>
                La mayoría de los proyectos de software fracasan por la misma razón: las agencias intentan encajar tu negocio en una plantilla preconcebida o te hablan en un idioma técnico incomprensible. Al final, terminas pagando licencias mensuales por herramientas infladas que solo usas al 10%.
              </p>
              <p>
                En <strong className="font-bold text-[#0f5238]">Solucionarte</strong> creemos en un camino diferente. Nos tomamos el tiempo de entender tu negocio desde adentro —tus rutinas, los errores humanos recurrentes y tus metas de ventas— para diseñar activos digitales que realmente alivian tu carga operativa.{' '}
                <strong className="font-bold text-[#0f5238]">Empatía primero, código después.</strong>
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
                  className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-[#E2ECE9] hover-lift text-left shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2d6a4f] text-white flex items-center justify-center mb-4 shadow-xs">
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
