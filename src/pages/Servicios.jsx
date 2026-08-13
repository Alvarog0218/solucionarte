import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Terminal, Globe, Zap, Brain, Check, Code2, ArrowDown } from 'lucide-react';

export default function Servicios() {
  const { handleOpenWhatsApp } = useOutletContext();

  const services = [
    {
      id: 'software',
      icon: Terminal,
      title: 'Software & Portales a la Medida',
      tagline: 'Sistemas propios adaptados 100% a tus reglas de negocio.',
      description: 'Desarrollamos páneles y herramientas personalizadas para gestionar clientes, cobros u operaciones sin depender de licencias recurrentes o softwares genéricos que no se adaptan a tu negocio.',
      extendedDescription: 'Nuestro servicio de desarrollo de software a medida está diseñado para modelar tus flujos exactos de trabajo. Diseñamos bases de datos relacionales robustas, APIs seguras y páneles administrativos ágiles para que tu equipo opere sin fricciones.',
      features: [
        'ERPs y CRMs personalizados a tu flujo operativo exacto',
        'Páneles de control intuitivos optimizados para tu personal',
        'Bases de datos relacionales de alto rendimiento (PostgreSQL / Redis)',
        'Arquitectura en la nube escalable y contenerizada (Docker, AWS)',
        'Propiedad intelectual y código fuente 100% transferido a tu empresa'
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS'],
      bgGradient: 'from-[#0e3b44]/20 to-transparent'
    },
    {
      id: 'web',
      icon: Globe,
      title: 'Webs de Alta Conversión',
      tagline: 'Sitios web de carga instantánea diseñados para captar clientes.',
      description: 'Páginas web veloces, optimizadas para dispositivos móviles, estructuradas de forma persuasiva para convertir visitas en chats de WhatsApp y clientes potenciales.',
      extendedDescription: 'La velocidad de carga y la experiencia de usuario móvil definen el éxito de tu presencia digital. Construimos sitios optimizando cada kilobyte para garantizar cargas inferiores a un segundo, integrando analítica avanzada para entender el comportamiento del cliente.',
      features: [
        'Carga ultra-rápida (puntuación >95 en Lighthouse) en móviles',
        'SEO técnico estructurado y schemas optimizados para Google',
        'Integración nativa con WhatsApp, CRMs y píxeles de seguimiento',
        'Formularios dinámicos interactivos con validación inteligente en tiempo real',
        'Diseño moderno a medida (sin plantillas pesadas de WordPress)'
      ],
      techStack: ['Vite', 'React', 'HTML5/CSS3', 'SEO Schema', 'Google Analytics', 'Tailwind CSS'],
      bgGradient: 'from-[#082a30]/20 to-transparent'
    },
    {
      id: 'workflows',
      icon: Zap,
      title: 'Automatización de Procesos',
      tagline: 'Conectamos tus aplicaciones para eliminar tareas repetitivas.',
      description: 'Sincronizamos tus hojas de cálculo, correos electrónicos, pasarelas de pago y sistemas de facturación para que toda tu empresa opere automáticamente y sin errores.',
      extendedDescription: 'Erradica el trabajo manual repetitivo. Conectamos tus herramientas favoritas mediante integraciones API y webhooks seguros. Tus datos fluirán solos y de forma segura entre tus aplicaciones las 24 horas del día.',
      features: [
        'Sincronización de inventario y stock en tiempo real entre múltiples canales',
        'Generación y envío automático de facturas en PDF por WhatsApp o correo',
        'Alertas automatizadas del estado de pedidos o retrasos a tu equipo',
        'Conexión segura de plataformas a través de APIs REST y Webhooks estables',
        'Reducción de hasta un 90% en tiempos de digitación manual de datos'
      ],
      techStack: ['n8n', 'Zapier', 'Python', 'REST APIs', 'Webhooks', 'Node.js'],
      bgGradient: 'from-[#0e3b44]/20 to-transparent'
    },
    {
      id: 'ia',
      icon: Brain,
      title: 'Agentes de IA & Chatbots 24/7',
      tagline: 'Inteligencia artificial entrenada con los datos de tu empresa.',
      description: 'Implementamos agentes inteligentes capaces de responder consultas, calificar prospectos y procesar pedidos en cualquier momento de forma autónoma.',
      extendedDescription: 'Transforma la atención al cliente de tu negocio. Entrenamos modelos de IA con tu propio catálogo de productos, políticas internas y preguntas frecuentes para que interactúen de forma natural y efectiva con tus usuarios a través de WhatsApp u otros canales.',
      features: [
        'Bots conversacionales entrenados exclusivamente con el catálogo de tu negocio',
        'Extracción y procesamiento automatizado de datos desde PDFs o facturas',
        'Calificación e inicio de flujos comerciales con prospectos de alto interés',
        'Modelos de análisis predictivo de ventas y comportamiento del mercado',
        'Integración directa con APIs de OpenAI, LangChain y bases vectoriales'
      ],
      techStack: ['OpenAI API', 'LangChain', 'Python', 'Vector DB', 'WhatsApp Business API'],
      bgGradient: 'from-[#082a30]/20 to-transparent'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Intro Hero Section */}
      <section className="pt-24 pb-16 max-w-[1280px] mx-auto px-5 md:px-8 text-center relative z-10">
        <span className="inline-block bg-[#0e3b44] text-[#bbf2fc] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#143941]">
          Servicios Especializados
        </span>
        <h1 className="font-['Outfit'] text-4xl md:text-6xl font-extrabold text-[#e6eff1] mb-6 tracking-tight leading-tight">
          Ingeniería de Software que <br className="hidden md:inline" />
          <span className="text-[#0097b2]">Acelera tu Crecimiento</span>
        </h1>
        <p className="text-md md:text-lg text-[#8fa3a7] max-w-3xl mx-auto leading-relaxed mb-8">
          No vendemos horas de desarrollo, entregamos activos digitales diseñados estratégicamente para aumentar la eficiencia operativa y las ventas de tu negocio.
        </p>
        
        {/* Quick jump menu */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-[#0c242b] hover:bg-[#0097b2]/20 border border-[#143941] hover:border-[#0097b2]/40 text-[#bbf2fc] px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Icon className="w-4 h-4 text-[#0097b2]" />
                {s.title}
              </a>
            );
          })}
        </div>

        <div className="animate-bounce flex justify-center text-[#8fa3a7]">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* Expanded Sections for each Service */}
      <div className="space-y-24 pb-24">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 border-t border-b border-[#143941]/40 bg-gradient-to-b ${service.bgGradient}`}
            >
              <div className="max-w-[1280px] mx-auto px-5 md:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
                  
                  {/* Left Column (Main description) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="w-14 h-14 bg-[#0e3b44] border border-[#143941] text-[#0097b2] rounded-2xl flex items-center justify-center mb-6 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h2 className="font-['Outfit'] text-3xl md:text-4xl font-extrabold text-[#e6eff1] mb-4 tracking-tight">
                      {service.title}
                    </h2>
                    
                    <p className="text-md text-[#bbf2fc] font-semibold mb-5 leading-relaxed">
                      {service.tagline}
                    </p>

                    <p className="text-sm md:text-base text-[#8fa3a7] leading-relaxed mb-6">
                      {service.extendedDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="pt-4 border-t border-[#143941]/60">
                      <span className="text-[11px] font-extrabold text-[#8fa3a7] uppercase tracking-wider mb-3 block flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-[#0097b2]" /> Tecnologías y herramientas empleadas
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-[#0c242b]/60 text-[#e6eff1] font-mono text-[11px] px-3 py-1 rounded-lg border border-[#143941]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Features & CTA) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} bg-[#0c242b]/40 border border-[#143941] p-8 rounded-3xl backdrop-blur-xs`}>
                    <h3 className="font-['Outfit'] text-lg font-bold text-[#e6eff1] mb-6 border-b border-[#143941]/60 pb-3">
                      ¿Qué incluye y qué logras con esto?
                    </h3>

                    <div className="space-y-4 mb-8">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#0e3b44] text-[#bbf2fc] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <p className="text-sm text-[#8fa3a7] leading-normal">{feat}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleOpenWhatsApp(`Hola AP Desarrollo! Me interesa cotizar detalles sobre: "${service.title}"`)}
                      className="w-full bg-[#0097b2] hover:bg-[#00768c] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer flex justify-center items-center gap-2"
                    >
                      Cotizar {service.title}
                    </button>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
