import React, { useState } from 'react';
import { Terminal, Globe, Zap, Brain, ArrowUpRight, Check, Code2 } from 'lucide-react';

export default function Capabilities({ onOpenWhatsApp }) {
  const [selectedCap, setSelectedCap] = useState(null);

  const capabilities = [
    {
      id: 'software',
      icon: Terminal,
      title: 'Software & Portales a la Medida',
      tagline: 'Sistemas propios adaptados 100% a tus reglas de negocio.',
      description: 'Páneles sencillos para gestionar clientes, cobros u operaciones sin licencias recurrentes.',
      features: [
        'ERPs y CRMs personalizados a tu flujo exacto',
        'Páneles intuitivos para tu personal',
        'Bases de datos optimizadas de alto rendimiento',
        'Propiedad intelectual 100% de tu empresa'
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker']
    },
    {
      id: 'web',
      icon: Globe,
      title: 'Webs de Alta Conversión',
      tagline: 'Sitios web de carga instantánea diseñados para captar clientes.',
      description: 'Páginas veloces adaptadas a móviles que convierten tráfico en chats de WhatsApp.',
      features: [
        'Carga instantánea (< 1 segundo) en móviles',
        'SEO técnico optimizado para motores de búsqueda',
        'Integración directa con WhatsApp y CRM',
        'Formularios dinámicos con validación inteligente'
      ],
      techStack: ['Vite', 'React', 'HTML5/CSS3', 'SEO Schema', 'Analytics']
    },
    {
      id: 'workflows',
      icon: Zap,
      title: 'Automatización de Procesos',
      tagline: 'Conectamos tus aplicaciones para eliminar tareas repetitivas.',
      description: 'Sincronizamos hojas de cálculo, correo, facturación y pagos para que operen sin ti.',
      features: [
        'Sincronización de inventario en tiempo real',
        'Envío automático de facturas PDF por WhatsApp',
        'Notificaciones automáticas de estado de pedido',
        'Conexión vía Webhooks y APIs REST'
      ],
      techStack: ['n8n', 'Zapier', 'Python', 'REST APIs', 'Webhooks']
    },
    {
      id: 'ia',
      icon: Brain,
      title: 'Agentes de IA & Chatbots 24/7',
      tagline: 'Inteligencia artificial entrenada con los datos de tu empresa.',
      description: 'Responde consultas, califica prospectos y toma pedidos automáticamente a cualquier hora.',
      features: [
        'Bots de atención entrenados con tu catálogo',
        'Extracción automática de datos desde facturas o PDFs',
        'Clasificación inteligente de prospectos',
        'Análisis predictivo de ventas y demanda'
      ],
      techStack: ['OpenAI API', 'LangChain', 'Python', 'Vector DB', 'WhatsApp API']
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#051316]" id="servicios">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block bg-[#0e3b44] text-[#bbf2fc] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#143941]">
              Nuestras Capacidades
            </span>
            <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#e6eff1] mb-4 tracking-tight">
              ¿Qué podemos construir para ti?
            </h2>
            <p className="text-base md:text-lg text-[#8fa3a7] leading-relaxed">
              Ingeniería de software moderna enfocada en el retorno de inversión de tu empresa.
            </p>
          </div>
        </div>

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedCap(item)}
                className="bg-[#0c242b] p-8 rounded-2xl border border-[#143941] hover:bg-[#0e3039] hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#0e3b44] rounded-xl flex items-center justify-center mb-6 text-[#bbf2fc] group-hover:bg-[#0097b2] group-hover:text-white transition-colors shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-['Outfit'] font-bold text-xl text-[#e6eff1] mb-3 group-hover:text-[#0097b2] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#8fa3a7] leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#143941] flex justify-between items-center text-xs font-bold text-[#0097b2]">
                  <span>Ver detalles y alcance</span>
                  <span className="text-[#8fa3a7] font-semibold">{item.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedCap && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCap(null)}
        >
          <div
            className="bg-[#0a2329] rounded-3xl max-w-2xl w-full p-6 md:p-8 border border-[#143941] shadow-2xl relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCap(null)}
              aria-label="Cerrar modal"
              className="absolute top-5 right-5 text-[#8fa3a7] hover:text-[#e6eff1] p-1.5 rounded-full bg-[#0c242b] hover:bg-[#0e3b44] transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0097b2] text-white flex items-center justify-center shadow-md">
                <selectedCap.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-['Outfit'] text-2xl font-bold text-[#e6eff1] leading-tight">
                  {selectedCap.title}
                </h3>
                <p className="text-xs text-[#8fa3a7] mt-1">{selectedCap.tagline}</p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mb-6">
              <h4 className="text-xs font-extrabold text-[#8fa3a7] uppercase tracking-wider mb-2">Descripción General</h4>
              <p className="text-sm text-[#8fa3a7] leading-relaxed">
                {selectedCap.description}
              </p>
            </div>

            {/* Features List */}
            <div className="mb-6">
              <h4 className="text-xs font-extrabold text-[#8fa3a7] uppercase tracking-wider mb-3">
                ¿Qué incluye esta solución?
              </h4>
              <div className="space-y-2">
                {selectedCap.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#1a1c1b]">
                    <div className="w-4 h-4 rounded-full bg-[#0e3b44] text-[#bbf2fc] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#e6eff1] leading-normal">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-8 pt-4 border-t border-[#143941]">
              <h4 className="text-xs font-extrabold text-[#8fa3a7] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-[#0097b2]" />
                Stack Tecnológico
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCap.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#0c242b] text-[#e6eff1] font-mono text-xs px-2.5 py-1 rounded-md border border-[#143941]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex gap-3 justify-end pt-4 border-t border-[#143941]">
              <button
                onClick={() => setSelectedCap(null)}
                className="px-5 py-2.5 rounded-xl border border-[#143941] text-xs font-bold text-[#8fa3a7] hover:bg-[#0c242b]"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  const cap = selectedCap;
                  setSelectedCap(null);
                  onOpenWhatsApp(`Hola! Me interesa la capacidad de ${cap.title}`);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#0097b2] text-white text-xs font-bold hover:bg-[#00768c] transition-colors shadow-md"
              >
                Cotizar este servicio en WhatsApp
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
