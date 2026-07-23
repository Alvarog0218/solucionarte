import React, { useState } from 'react';
import { MessageSquare, FileText, Code, Rocket, ArrowRight } from 'lucide-react';

export default function Process({ onOpenWhatsApp }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '1',
      title: 'Charla Diagnóstico',
      subtitle: 'Entendimiento profundo sin compromisos',
      icon: MessageSquare,
      summary: 'Nos tomamos un café virtual de 30 minutos para escuchar los retos de tu negocio y detectar dónde estás perdiendo tiempo y dinero.',
      deliverable: 'Mapeo de procesos y diagnóstico de cuellos de botella.',
      duration: '30 min (Sesión virtual 1-a-1)'
    },
    {
      number: '2',
      title: 'Propuesta & Alcance Claro',
      subtitle: 'Sin jerga técnica ni letras chicas',
      icon: FileText,
      summary: 'Te entregamos un plan sencillo en español, con el alcance exacto, los tiempos de entrega y un precio cerrado sin sorpresas.',
      deliverable: 'Documento de alcance, tiempos de entrega y cotización cerrada.',
      duration: 'Entrega en 24 a 48 horas'
    },
    {
      number: '3',
      title: 'Construcción & Avances Visibles',
      subtitle: 'Entregas por etapas funcionales',
      icon: Code,
      summary: 'Desarrollamos por etapas y te mostramos avances reales cada semana para validar juntos que todo funcione como imaginas.',
      deliverable: 'Demostraciones semanales y acceso a ambiente de pruebas.',
      duration: 'Sprints de 1 a 3 semanas'
    },
    {
      number: '4',
      title: 'Entrega, Capacitación & Soporte',
      subtitle: 'Puesta en marcha y soporte continuo',
      icon: Rocket,
      summary: 'Lanzamos tu solución, enseñamos a tu equipo a usarla con videos cortos y nos quedamos a tu lado asegurando que todo fluya perfecto.',
      deliverable: 'Manuales amigables, capacitación en video y garantía post-lanzamiento.',
      duration: 'Soporte prioritario post-entrega'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf9f7] overflow-hidden" id="proceso">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#d9e6da] text-[#0f5238] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#bfc9c1]/40">
            Metodología Transparente
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#1a1c1b] mb-4 tracking-tight">
            Así Construimos Tu Solución (en 4 Pasos)
          </h2>
          <p className="text-base md:text-lg text-[#556158]">
            Un proceso claro y sin sorpresas, diseñado para darte certidumbre y control en cada etapa del proyecto.
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
                    ? 'bg-white border-[#2d6a4f] shadow-lg scale-102'
                    : 'bg-[#f4f3f1]/70 border-[#bfc9c1]/30 hover:bg-white hover:border-[#bfc9c1]'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mb-4 transition-colors shadow-md ${
                    isActive ? 'bg-[#2d6a4f] text-white' : 'bg-[#0f5238]/10 text-[#0f5238]'
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
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E2ECE9] shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-[#d9e6da] text-[#0f5238] font-bold text-sm flex items-center justify-center">
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
              <div className="p-3.5 bg-[#faf9f7] rounded-xl border border-[#E2ECE9]">
                <span className="font-bold text-[#0f5238] block mb-1">Entregable Concreto:</span>
                <span className="text-[#556158]">{steps[activeStep].deliverable}</span>
              </div>
              <div className="p-3.5 bg-[#faf9f7] rounded-xl border border-[#E2ECE9]">
                <span className="font-bold text-[#0f5238] block mb-1">Tiempo Estimado:</span>
                <span className="text-[#556158]">{steps[activeStep].duration}</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto text-center shrink-0">
            <button
              onClick={() => onOpenWhatsApp(`Hola! Quisiera agendar el Paso 1: Charla Diagnóstico para mi proyecto`)}
              className="w-full md:w-auto bg-[#2d6a4f] hover:bg-[#0f5238] text-white px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
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
