import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Sparkles, Target, Eye, ShieldCheck, Award, Heart, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Nosotros() {
  const { handleOpenWhatsApp } = useOutletContext();

  const values = [
    {
      title: 'Innovación Constante',
      desc: 'Buscamos permanentemente nuevas tecnologías y metodologías para ofrecer soluciones avanzadas.'
    },
    {
      title: 'Compromiso & Calidad',
      desc: 'Nos apasiona entregar código limpio, escalable y libre de errores dentro de los tiempos acordados.'
    },
    {
      title: 'Transparencia Absoluta',
      desc: 'Mantenemos una comunicación clara y directa, garantizando la transferencia total de propiedad del código.'
    },
    {
      title: 'Orientación a Resultados',
      desc: 'Diseñamos software con un único norte: generar un retorno de inversión real y medible en tu operación.'
    }
  ];

  return (
    <section className="py-24 max-w-[1280px] mx-auto px-5 md:px-8 relative min-h-[80vh]">
      {/* Page Hero */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <span className="text-[#0097b2] text-xs font-bold uppercase tracking-widest bg-[#0e3b44] px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Sobre Nosotros
        </span>
        <h1 className="font-['Outfit'] text-4xl md:text-5xl font-extrabold text-[#e6eff1] leading-tight">
          Creadores de Activos Digitales de Alto Rendimiento
        </h1>
        <p className="text-[#8fa3a7] text-md md:text-lg mt-4 leading-relaxed">
          Un equipo enfocado en erradicar la ineficiencia operativa mediante software a la medida y automatizaciones robustas.
        </p>
      </div>

      {/* Section: Nuestra Filosofía */}
      <div className="mb-12 border-t border-[#143941]/40 pt-16">
        <div className="max-w-2xl mb-8">
          <h2 className="font-['Outfit'] text-3xl font-bold text-[#e6eff1] mb-3">
            Nuestra Filosofía
          </h2>
          <p className="text-[#8fa3a7] text-sm leading-relaxed">
            Nuestra filosofía y bases corporativas están diseñadas para orientar cada uno de nuestros desarrollos hacia la excelencia técnica y operativa.
          </p>
        </div>
      </div>

      {/* Grid: Mision, Vision, Politica de Calidad */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {/* Misión */}
        <div className="bg-[#0a2329]/40 border border-[#143941] p-8 rounded-3xl backdrop-blur-xs flex flex-col justify-between hover:border-[#0097b2]/40 transition-colors duration-300">
          <div>
            <div className="w-12 h-12 bg-[#0e3b44] rounded-2xl flex items-center justify-center text-[#0097b2] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-['Outfit'] text-2xl font-bold text-[#e6eff1] mb-4">Misión</h2>
            <p className="text-[#8fa3a7] text-sm leading-relaxed">
              Transformar y optimizar la operación de nuestros clientes a través de ingeniería de software a medida y flujos automatizados de alto rendimiento, eliminando ineficiencias y empoderando el crecimiento empresarial.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="bg-[#0a2329]/40 border border-[#143941] p-8 rounded-3xl backdrop-blur-xs flex flex-col justify-between hover:border-[#0097b2]/40 transition-colors duration-300">
          <div>
            <div className="w-12 h-12 bg-[#0e3b44] rounded-2xl flex items-center justify-center text-[#0097b2] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-['Outfit'] text-2xl font-bold text-[#e6eff1] mb-4">Visión</h2>
            <p className="text-[#8fa3a7] text-sm leading-relaxed">
              Consolidarnos para el año 2030 como el socio tecnológico estratégico líder en automatización y desarrollo web de alto impacto en la región, siendo reconocidos por nuestra excelencia de código y garantía post-entrega.
            </p>
          </div>
        </div>

        {/* Política de Calidad */}
        <div className="bg-[#0a2329]/40 border border-[#143941] p-8 rounded-3xl backdrop-blur-xs flex flex-col justify-between hover:border-[#0097b2]/40 transition-colors duration-300">
          <div>
            <div className="w-12 h-12 bg-[#0e3b44] rounded-2xl flex items-center justify-center text-[#0097b2] mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="font-['Outfit'] text-2xl font-bold text-[#e6eff1] mb-4">Política de Calidad</h2>
            <p className="text-[#8fa3a7] text-sm leading-relaxed">
              Nos comprometemos a entregar soluciones robustas y seguras bajo metodologías ágiles de ingeniería, garantizando soporte técnico permanente y la mejora continua en cada fase del ciclo de vida del software.
            </p>
          </div>
        </div>
      </div>

      {/* Valores Corporativos */}
      <div className="bg-[#0a2329]/30 border border-[#143941] rounded-3xl p-8 md:p-12 backdrop-blur-xs">
        <div className="max-w-2xl mb-12">
          <span className="text-[#0097b2] text-xs font-bold uppercase tracking-wider block mb-2">Principios Fundacionales</span>
          <h3 className="font-['Outfit'] text-3xl font-bold text-[#e6eff1]">Nuestros Valores</h3>
          <p className="text-sm text-[#8fa3a7] mt-2">
            La cultura interna de AP Desarrollo se rige bajo pilares innegociables que moldean nuestra interacción y el software que entregamos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-[#0e3b44] text-[#0097b2] flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-['Outfit'] font-bold text-lg text-[#e6eff1] mb-1">{v.title}</h4>
                <p className="text-xs md:text-sm text-[#8fa3a7] leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
