import React from 'react';
import { AlertTriangle, PackageSearch, Table, Globe, CheckCircle2 } from 'lucide-react';

export default function DiagnosticMatrix({ onOpenWhatsApp }) {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Caos en Atención por WhatsApp',
      problem: 'Perdemos ventas porque tardamos horas en responder consultas repetitivas en WhatsApp.',
      solution: 'Asistentes de Atención 24/7',
      impact: 'Responde dudas, muestra tu catálogo y toma pedidos automáticos a cualquier hora.'
    },
    {
      icon: PackageSearch,
      title: 'Inventario y Cuentas Desordenadas',
      problem: 'No sabemos el stock real y los cobros pendientes se quedan traspapelados en notas.',
      solution: 'Control de Inventario y Pedidos',
      impact: 'Stock y cuentas por cobrar sincronizados automáticamente en una sola pantalla.'
    },
    {
      icon: Table,
      title: 'El Infierno de los Excels',
      problem: 'Mi equipo pierde horas copiando datos manualmente entre hojas de Excel que fallan.',
      solution: 'Automatización Operativa',
      impact: 'Conectamos tus programas para que la información fluya sin digitación manual.'
    },
    {
      icon: Globe,
      title: 'Sitio Web Ineficaz',
      problem: 'Nuestra web es lenta, luce antigua y no genera prospectos ni ventas reales.',
      solution: 'Webs de Alta Conversión',
      impact: 'Sitios ultra-rápidos optimizados para convertir visitantes en clientes reales.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent border-y border-[#143941]" id="diagnostico">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#0e3b44] text-[#bbf2fc] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#143941]">
            Diagnóstico de Eficiencia
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#e6eff1] mb-4 tracking-tight">
            ¿Reconoces estas dificultades en tu negocio?
          </h2>
          <p className="text-base md:text-lg text-[#8fa3a7]">
            Identifica la fricción que frena el crecimiento de tu empresa hoy.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#0c242b] p-7 rounded-2xl border border-[#143941] hover-lift flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="mb-5 flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold text-[#8fa3a7] uppercase tracking-wider bg-[#0e3b44] px-2 py-0.5 rounded-md">
                      Fricción
                    </span>
                  </div>
 
                  <h3 className="font-['Outfit'] font-bold text-xl text-[#e6eff1] mb-3 group-hover:text-[#0097b2] transition-colors">
                    {item.title}
                  </h3>
 
                  <p className="text-sm text-[#8fa3a7] leading-relaxed mb-6 italic">
                    "{item.problem}"
                  </p>
                </div>
 
                <div className="pt-5 border-t border-[#143941]">
                  <div className="flex items-center gap-2 text-[#0097b2] font-bold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#0097b2] shrink-0" />
                    <span>{item.solution}</span>
                  </div>
                  <p className="text-[12px] text-[#8fa3a7] pl-6 leading-normal">{item.impact}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
