import React, { useState } from 'react';
import { AlertTriangle, PackageSearch, Table, Globe, CheckCircle2, Calculator, Sparkles, MessageSquare } from 'lucide-react';

export default function DiagnosticMatrix({ onOpenWhatsApp }) {
  // Calculator state
  const [employees, setEmployees] = useState(4);
  const [hoursPerEmployee, setHoursPerEmployee] = useState(6);
  const [hourlyRate, setHourlyRate] = useState(12);

  // Calculations
  const weeklyHoursSaved = Math.round(employees * hoursPerEmployee * 0.85); // 85% automated
  const monthlySavings = Math.round(weeklyHoursSaved * 4 * hourlyRate);
  const yearlySavings = monthlySavings * 12;

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Caos en Atención por WhatsApp',
      problem: '¿Sientes que tu equipo pierde horas respondiendo las mismas preguntas en WhatsApp y que los clientes se van por no recibir atención inmediata?',
      solution: 'Asistentes de Atención & Ventas 24/7',
      impact: 'Responde preguntas, muestra tu catálogo y toma pedidos automáticos a cualquier hora.'
    },
    {
      icon: PackageSearch,
      title: 'Inventario y Cuentas Desordenadas',
      problem: '¿No sabes con certeza qué stock tienes disponible y las facturas o cobros pendientes se quedan traspapelados entre notas de papel o cuadernos?',
      solution: 'Control de Inventario & Pedidos a la Medida',
      impact: 'Stock y cuentas sincronizados automáticamente en una pantalla fácil de entender.'
    },
    {
      icon: Table,
      title: 'El Infierno de los Excels',
      problem: '¿Pasas entre 3 y 4 horas al día copiando datos de un lado a otro en múltiples tablas de Excel que se corrompen o fallan constantemente?',
      solution: 'Automatización de Procesos Operativos',
      impact: 'Conectamos tus aplicaciones para que la información fluya sola sin digitación manual.'
    },
    {
      icon: Globe,
      title: 'Sitio Web Desactualizado o Ineficaz',
      problem: '¿Tu página web se ve antigua, tarda en cargar en teléfonos móviles o parece un folleto estático que no te genera ninguna venta real?',
      solution: 'Webs de Alta Conversión y Carga Instantánea',
      impact: 'Páginas modernas y ultra-rápidas diseñadas para convertir visitas en clientes reales.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#E2ECE9]" id="diagnostico">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#d9e6da] text-[#0f5238] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#bfc9c1]/40">
            Diagnóstico de Eficiencia
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#1a1c1b] mb-4 tracking-tight">
            ¿Reconoces alguno de estos dolores en tu negocio?
          </h2>
          <p className="text-base md:text-lg text-[#556158]">
            Identificar el problema es el 50% de la solución. ¿Dónde sientes la mayor fricción operativa hoy?
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#faf9f7] p-7 rounded-2xl border border-[#E2ECE9] hover-lift flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="mb-5 flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold text-[#556158] uppercase tracking-wider bg-[#e9e8e6] px-2 py-0.5 rounded-md">
                      Fricción
                    </span>
                  </div>

                  <h3 className="font-['Outfit'] font-bold text-xl text-[#1a1c1b] mb-3 group-hover:text-[#0f5238] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#404943] leading-relaxed mb-6 italic">
                    "{item.problem}"
                  </p>
                </div>

                <div className="pt-5 border-t border-[#E2ECE9]">
                  <div className="flex items-center gap-2 text-[#0f5238] font-bold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#2d6a4f] shrink-0" />
                    <span>{item.solution}</span>
                  </div>
                  <p className="text-[12px] text-[#5b675e] pl-6 leading-normal">{item.impact}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive ROI Calculator Section */}
        <div className="bg-[#faf9f7] rounded-3xl p-8 md:p-12 border border-[#E2ECE9] shadow-sm" id="calculadora">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            
            {/* Calculator Controls */}
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 text-[#0f5238] font-bold text-sm mb-2">
                <Calculator className="w-5 h-5 text-[#2d6a4f]" />
                <span>Simulador Interactivo de Ahorro</span>
              </div>
              <h3 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-[#1a1c1b] mb-4">
                Calcula cuánto tiempo y dinero estás perdiendo
              </h3>
              <p className="text-sm text-[#556158] mb-8">
                Ajusta los valores de tu equipo para proyectar el impacto de la automatización en tu negocio:
              </p>

              <div className="space-y-6">
                {/* Control 1: Empleados */}
                <div>
                  <div className="flex justify-between items-center mb-2 text-sm font-semibold text-[#1a1c1b]">
                    <span>Personal dedicado a tareas repetitivas:</span>
                    <span className="font-bold text-[#0f5238] bg-[#d9e6da] px-3 py-1 rounded-lg">
                      {employees} personas
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#e3e2e0] rounded-lg appearance-none cursor-pointer accent-[#2d6a4f]"
                  />
                </div>

                {/* Control 2: Horas por semana */}
                <div>
                  <div className="flex justify-between items-center mb-2 text-sm font-semibold text-[#1a1c1b]">
                    <span>Horas perdidas/semana por persona:</span>
                    <span className="font-bold text-[#0f5238] bg-[#d9e6da] px-3 py-1 rounded-lg">
                      {hoursPerEmployee} hrs/semana
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    value={hoursPerEmployee}
                    onChange={(e) => setHoursPerEmployee(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#e3e2e0] rounded-lg appearance-none cursor-pointer accent-[#2d6a4f]"
                  />
                </div>

                {/* Control 3: Costo hora */}
                <div>
                  <div className="flex justify-between items-center mb-2 text-sm font-semibold text-[#1a1c1b]">
                    <span>Costo estimado por hora (USD):</span>
                    <span className="font-bold text-[#0f5238] bg-[#d9e6da] px-3 py-1 rounded-lg">
                      ${hourlyRate} USD/hr
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#e3e2e0] rounded-lg appearance-none cursor-pointer accent-[#2d6a4f]"
                  />
                </div>
              </div>
            </div>

            {/* Calculator Results Display */}
            <div className="w-full lg:w-96 bg-[#1A2E26] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between border border-[#2d6a4f]/50">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs font-bold text-[#b1f0ce] uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> Proyección Estimada
                  </span>
                  <span className="text-[11px] bg-white/10 text-white px-2 py-0.5 rounded-full">
                    85% Eficiencia
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-[#bfc9c1] uppercase font-bold tracking-wider mb-1">
                    Tiempo Recuperado
                  </p>
                  <p className="font-['Outfit'] text-4xl font-extrabold text-[#b1f0ce]">
                    {weeklyHoursSaved} hrs<span className="text-sm font-normal text-white/80">/semana</span>
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-xs text-[#bfc9c1] uppercase font-bold tracking-wider mb-1">
                    Ahorro Proyectado Anual
                  </p>
                  <p className="font-['Outfit'] text-4xl font-extrabold text-white">
                    ${yearlySavings.toLocaleString()} <span className="text-xs font-normal text-[#b1f0ce]">USD</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => onOpenWhatsApp(`Hola! Usé su calculadora: tengo ${employees} empleados perdiendo ${hoursPerEmployee}h/sem. Quiero recuperar estas ${weeklyHoursSaved}h semanales`)}
                className="w-full bg-[#2d6a4f] hover:bg-[#b1f0ce] hover:text-[#002114] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-98 cursor-pointer text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Recuperar estas {weeklyHoursSaved}h en WhatsApp
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
