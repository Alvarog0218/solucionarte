import React, { useState } from 'react';
import { MessageSquare, Sparkles, Check } from 'lucide-react';

export default function CTASection({ onOpenWhatsApp }) {
  const [selectedOption, setSelectedOption] = useState('⚡ Automatizar tareas repetitivas en Excel o WhatsApp');

  const options = [
    '⚡ Automatizar tareas repetitivas en Excel o WhatsApp',
    '💻 Desarrollar un software a la medida de mi empresa',
    '🌐 Crear o modernizar mi sitio web de alta conversión',
    '🔍 Diagnosticar la eficiencia operativa de mi negocio'
  ];

  const handleStart = () => {
    onOpenWhatsApp(`Hola! Quisiera conversar sobre: ${selectedOption}`);
  };

  return (
    <section className="py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#1A2E26] rounded-3xl p-8 md:p-20 text-center relative overflow-hidden shadow-2xl border border-[#2d6a4f]/40">
          
          {/* Background Decor Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2d6a4f] rounded-full blur-[140px] opacity-30 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#b1f0ce] rounded-full blur-[140px] opacity-15 pointer-events-none"></div>

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 bg-white/10 text-[#b1f0ce] border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 relative z-10">
            <Sparkles className="w-4 h-4 text-[#b1f0ce]" />
            Atención Personalizada Sin Compromiso
          </span>

          {/* Headline */}
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 relative z-10 tracking-tight">
            ¿Listo para automatizar tu negocio?
          </h2>

          <p className="text-sm md:text-lg text-[#b1f0ce] mb-8 max-w-2xl mx-auto relative z-10 font-bold">
            Selecciona tu objetivo y conversemos directamente en WhatsApp:
          </p>

          {/* Option Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10 max-w-3xl mx-auto">
            {options.map((opt) => {
              const isSelected = selectedOption === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setSelectedOption(opt)}
                  className={`px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-[#b1f0ce] text-[#002114] border-[#b1f0ce] font-bold shadow-lg scale-102'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 text-[#002114]" />}
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Main CTA Button */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleStart}
              className="inline-flex items-center gap-3 bg-[#2d6a4f] hover:bg-[#b1f0ce] hover:text-[#002114] text-white px-10 py-5 rounded-2xl font-bold text-base md:text-lg transition-all duration-200 shadow-2xl hover:scale-105 active:scale-98 cursor-pointer"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Iniciar Diagnóstico en WhatsApp</span>
            </button>
          </div>

          <p className="text-xs text-[#bfc9c1] mt-6 relative z-10">
            Respuesta promedio: &lt; 15 minutos • Sin presiones ni llamadas molestas
          </p>

        </div>
      </div>
    </section>
  );
}
