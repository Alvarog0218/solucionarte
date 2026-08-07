import React from 'react';
import { Zap, Shield, Workflow, Flame, MessageSquare } from 'lucide-react';

export default function Portfolio({ onOpenWhatsApp }) {
  const projects = [
    {
      title: 'Ultra',
      category: 'Alto Rendimiento',
      icon: Zap,
      description: 'Plataforma web de alta velocidad optimizada para procesamiento masivo de datos en tiempo real, garantizando tiempos de carga inferiores a 1 segundo.',
      technologies: ['React', 'Next.js', 'Go', 'Redis', 'GraphQL'],
      stats: 'Tiempos de carga reducidos en 80%'
    },
    {
      title: 'Darrum',
      category: 'Software Empresarial',
      icon: Shield,
      description: 'Sistema ERP personalizado para la gestión integral de inventarios, facturación electrónica y control administrativo de operaciones complejas.',
      technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      stats: 'Control de inventario 100% preciso'
    },
    {
      title: 'Automatización y Ambos',
      category: 'Integración & Flujos',
      icon: Workflow,
      description: 'Sistema híbrido de automatización de procesos que conecta flujos de trabajo en la nube con bases de datos heredadas (on-premise), unificando la operación.',
      technologies: ['Python', 'n8n', 'Webhooks', 'REST APIs', 'SQL Server'],
      stats: 'Eficiencia operativa aumentada en 65%'
    },
    {
      title: 'Lit',
      category: 'Desarrollo Web Ágil',
      icon: Flame,
      description: 'Aplicación web progresiva ultra-ligera y modular construida bajo estándares web modernos para máxima portabilidad y óptimo rendimiento móvil.',
      technologies: ['Lit HTML', 'Web Components', 'Vite', 'Service Workers'],
      stats: 'Consumo de datos móviles reducido en 70%'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf9f7]" id="portafolio">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#e0f7fc] text-[#00768c] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#e2f4f7]">
            Casos de Éxito
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#1a1c1b] mb-4 tracking-tight">
            Nuestros Trabajos Realizados
          </h2>
          <p className="text-base md:text-lg text-[#556158] leading-relaxed">
            Soluciones de software personalizadas y flujos automatizados diseñados a la medida para alcanzar la máxima eficiencia.
          </p>
        </div>

        {/* 4-Project Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-3xl border border-[#e2f4f7] hover:border-[#0097b2]/40 p-6 md:p-8 hover-lift shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category and Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-[#00768c] bg-[#e0f7fc] px-3 py-1 rounded-lg">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#e0f7fc] text-[#0097b2] flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-['Outfit'] text-xl font-bold text-[#1a1c1b] mb-3 leading-tight hover:text-[#00768c] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#556158] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Stats Badge */}
                  <div className="bg-[#faf9f7] rounded-xl p-3 mb-5 border border-[#e2f4f7]/60 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0097b2]"></span>
                    <span className="text-xs font-bold text-[#1a1c1b]">
                      Impacto: <span className="text-[#00768c]">{project.stats}</span>
                    </span>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="bg-[#f4f3f1] text-[#4d6569] font-mono text-[10px] px-2 py-0.5 rounded border border-[#bfc9c1]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA button for this project */}
                  <button
                    onClick={() => onOpenWhatsApp(`Hola AP Desarrollo 👋🏼\nMe interesa un proyecto similar a: "${project.title}"`)}
                    className="w-full bg-[#faf9f7] hover:bg-[#0097b2] text-[#00768c] hover:text-white border border-[#0097b2]/20 hover:border-[#0097b2] py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Quiero uno similar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
