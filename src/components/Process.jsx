import React, { useState } from 'react';
import { MessageSquare, FileText, Code, Rocket, ArrowRight } from 'lucide-react';

export default function Process({ onOpenWhatsApp }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '1',
      title: 'Charla Diagnóstico',
      subtitle: 'Sesión virtual de 30 minutos',
      icon: MessageSquare,
      summary: 'Analizamos tu operación sin compromiso para detectar dónde pierdes tiempo y dinero.',
      deliverable: 'Diagnóstico y mapeo de cuellos de botella.',
      duration: '30 min (Sesión virtual 1-a-1)'
    },
    {
      number: '2',
      title: 'Propuesta & Alcance Claro',
      subtitle: 'Entrega en 24 a 48 horas',
      icon: FileText,
      summary: 'Recibes un plan transparente con el alcance exacto, plazos y precio cerrado sin sorpresas.',
      deliverable: 'Documento de alcance y cotización fija.',
      duration: 'Entrega en 24 a 48 horas'
    },
    {
      number: '3',
      title: 'Construcción & Avances',
      subtitle: 'Entregas semanales funcionales',
      icon: Code,
      summary: 'Desarrollamos por etapas y te mostramos avances semanales para validar cada avance.',
      deliverable: 'Demostraciones semanales y pruebas.',
      duration: 'Sprints de 1 a 3 semanas'
    },
    {
      number: '4',
      title: 'Entrega & Soporte',
      subtitle: 'Puesta en marcha garantizada',
      icon: Rocket,
      summary: 'Lanzamos tu solución, capacitamos a tu equipo y te acompañamos post-lanzamiento.',
      deliverable: 'Capacitación en video y garantía post-entrega.',
      duration: 'Soporte prioritario post-entrega'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf9f7] overflow-hidden" id="proceso">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#e0f7fc] text-[#00768c] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#bfc9c1]/40">
            Metodología Transparente
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#1a1c1b] mb-4 tracking-tight">
            Tu Solución en 4 Pasos Clave
          </h2>
          <p className="text-base md:text-lg text-[#556158]">
            Proceso transparente diseñado para darte control total en cada etapa del proyecto.
          </p>
        </div>

        {/* Desktop Step Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative mb-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[36px] left-[12%] w-[76%] h-[2px] bg-[#bfc9c1]/50 -z-0"></div>

          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 flex flex-col items-center text-center p-6 rounded-2xl transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-white border-[#0097b2] shadow-lg scale-102'
                    : 'bg-[#f4f3f1]/70 border-[#bfc9c1]/30 hover:bg-white hover:border-[#bfc9c1]'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mb-4 transition-colors shadow-md ${
                    isActive ? 'bg-[#0097b2] text-white' : 'bg-[#00768c]/10 text-[#00768c]'
                  }`}
                >
                  {step.number}
                </div>

                <h3 className="font-['Outfit'] font-bold text-lg text-[#1a1c1b] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-[#556158] mb-3">{step.subtitle}</p>

                <p className="text-xs text-[#404943] leading-relaxed">
                  {step.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detailed View Card */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#e2f4f7] shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-[#e0f7fc] text-[#00768c] font-bold text-sm flex items-center justify-center">
                {steps[activeStep].number}
              </span>
              <h4 className="font-['Outfit'] text-2xl font-bold text-[#1a1c1b]">
                Paso {steps[activeStep].number}: {steps[activeStep].title}
              </h4>
            </div>

            <p className="text-sm text-[#404943] mb-6 leading-relaxed font-medium">
              {steps[activeStep].summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-[#faf9f7] rounded-xl border border-[#e2f4f7]">
                <span className="font-bold text-[#00768c] block mb-1">Entregable Concreto:</span>
                <span className="text-[#556158]">{steps[activeStep].deliverable}</span>
              </div>
              <div className="p-3.5 bg-[#faf9f7] rounded-xl border border-[#e2f4f7]">
                <span className="font-bold text-[#00768c] block mb-1">Tiempo Estimado:</span>
                <span className="text-[#556158]">{steps[activeStep].duration}</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto text-center shrink-0">
            <button
              onClick={() => onOpenWhatsApp(`Hola! Quisiera agendar el Paso 1: Charla Diagnóstico para mi proyecto`)}
              className="w-full md:w-auto bg-[#0097b2] hover:bg-[#00768c] text-white px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <span>Agendar Diagnóstico Gratuito</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
