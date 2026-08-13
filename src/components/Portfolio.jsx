import React from 'react';
import { Zap, Shield, Workflow, Flame, MessageSquare, ExternalLink } from 'lucide-react';

export default function Portfolio({ onOpenWhatsApp }) {
  const [selectedFrame, setSelectedFrame] = React.useState(0);

  const projects = [
    {
      title: 'Ultra',
      category: 'Alto Rendimiento',
      icon: Zap,
      description: 'Plataforma web de alta velocidad optimizada para procesamiento masivo de datos en tiempo real, garantizando tiempos de carga inferiores a 1 segundo.',
      technologies: ['React', 'Next.js', 'Go', 'Redis', 'GraphQL'],
      stats: 'Tiempos de carga reducidos en 80%',
      backgroundImage: '/ultra_bg.jpg',
      liveUrl: 'https://ultra-web-5kig.vercel.app/'
    },
    {
      title: 'Darrum',
      category: 'Software Empresarial',
      icon: Shield,
      description: 'Sistema ERP personalizado para la gestión integral de inventarios, facturación electrónica y control administrativo de operaciones preliminares.',
      technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      stats: 'Control de inventario 100% preciso',
      backgroundImage: '/darrum_bg.jpg',
      liveUrl: 'https://darrum.vercel.app/'
    },
    {
      title: 'Ambos y Lit',
      category: 'Automatización & Web Ágil',
      icon: Workflow,
      description: 'Sistemas híbridos de automatización de flujos y aplicaciones web ultra-ligeras integradas, optimizando la operación y el rendimiento móvil.',
      technologies: ['Python', 'n8n', 'Vite', 'Web Components', 'REST APIs'],
      stats: 'Eficiencia y velocidad combinadas',
      backgroundFrames: [
        'https://amboss-arquitectura.vercel.app/',
        'https://liit-arquitectura.vercel.app/'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent" id="portafolio">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#0e3b44] text-[#bbf2fc] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#143941]">
            Casos de Éxito
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#e6eff1] mb-4 tracking-tight">
            Nuestros Trabajos Realizados
          </h2>
          <p className="text-base md:text-lg text-[#8fa3a7] leading-relaxed">
            Soluciones de software personalizadas y flujos automatizados diseñados a la medida para alcanzar la máxima eficiencia.
          </p>
        </div>

        {/* Project Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const liveUrl = project.backgroundFrames 
              ? project.backgroundFrames[selectedFrame] 
              : project.liveUrl;

            return (
              <div 
                key={index} 
                className="bg-[#0c242b] rounded-2xl md:rounded-3xl border border-[#143941] hover:border-[#0097b2]/40 p-4 md:p-6 hover-lift shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between w-full relative overflow-hidden group"
              >
                {/* Split-screen background iframes */}
                {project.backgroundFrames && (
                  <>
                    <div className="absolute inset-0 grid grid-cols-2 opacity-65 group-hover:opacity-85 pointer-events-none overflow-hidden transition-all duration-500 z-0 blur-[6px]">
                      <div className={`w-full h-full overflow-hidden border-r border-[#143941]/40 transition-opacity duration-300 ${selectedFrame === 0 ? 'opacity-100' : 'opacity-25'}`}>
                        <iframe 
                          src={project.backgroundFrames[0]} 
                          className="w-[300%] h-[300%] border-none scale-[0.333] origin-top-left" 
                          title="Amboss Frame"
                          scrolling="no"
                        />
                      </div>
                      <div className={`w-full h-full overflow-hidden transition-opacity duration-300 ${selectedFrame === 1 ? 'opacity-100' : 'opacity-25'}`}>
                        <iframe 
                          src={project.backgroundFrames[1]} 
                          className="w-[300%] h-[300%] border-none scale-[0.333] origin-top-left" 
                          title="Liit Frame"
                          scrolling="no"
                        />
                      </div>
                    </div>
                    {/* Visual protection layer */}
                    <div className="absolute inset-0 bg-[#051316]/65 group-hover:bg-[#051316]/45 transition-colors duration-500 pointer-events-none z-5" />
                  </>
                )}

                {/* Single background iframe for projects with liveUrl */}
                {project.liveUrl && (
                  <>
                    <div className="absolute inset-0 opacity-45 group-hover:opacity-65 pointer-events-none overflow-hidden transition-all duration-500 z-0 blur-[6px]">
                      <iframe 
                        src={project.liveUrl} 
                        className="w-[300%] h-[300%] border-none scale-[0.333] origin-top-left" 
                        title={`${project.title} Frame`}
                        scrolling="no"
                      />
                    </div>
                    {/* Visual protection layer */}
                    <div className="absolute inset-0 bg-[#051316]/65 group-hover:bg-[#051316]/45 transition-colors duration-500 pointer-events-none z-5" />
                  </>
                )}

                <div className="relative z-10 flex flex-col justify-between h-full w-full">
                  <div>
                    {/* Category and Icon */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-bold text-[#bbf2fc] bg-[#0e3b44] px-3 py-1 rounded-lg">
                        {project.category}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#0e3b44] text-[#0097b2] flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-['Outfit'] text-xl font-bold text-[#e6eff1] mb-3 leading-tight hover:text-[#0097b2] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#8fa3a7] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Page Selector for Ambos y Lit */}
                    {project.backgroundFrames && (
                      <div className="flex bg-[#051316] p-1 rounded-xl border border-[#143941] mb-5 gap-1">
                        <button
                          onClick={() => setSelectedFrame(0)}
                          className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                            selectedFrame === 0 
                              ? 'bg-[#0097b2] text-white shadow-2xs' 
                              : 'text-[#8fa3a7] hover:bg-[#0c242b]/80'
                          }`}
                        >
                          Ver Amboss primero
                        </button>
                        <button
                          onClick={() => setSelectedFrame(1)}
                          className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                            selectedFrame === 1 
                              ? 'bg-[#0097b2] text-white shadow-2xs' 
                              : 'text-[#8fa3a7] hover:bg-[#0c242b]/80'
                          }`}
                        >
                          Ver Liit primero
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Stats Badge */}
                    <div className="bg-[#051316] rounded-xl p-3 mb-5 border border-[#143941]/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0097b2]"></span>
                      <span className="text-xs font-bold text-[#e6eff1]">
                        Impacto: <span className="text-[#0097b2]">{project.stats}</span>
                      </span>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-[#0e3b44] text-[#bbf2fc] font-mono text-[10px] px-2 py-0.5 rounded border border-[#143941]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons side-by-side */}
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <button
                        onClick={() => onOpenWhatsApp(`Hola AP Desarrollo 👋🏼\nMe gustaría cotizar un proyecto similar a: "${project.title}"`)}
                        className="w-full bg-[#0c242b] hover:bg-[#0097b2] text-[#bbf2fc] hover:text-white border border-[#0097b2]/20 hover:border-[#0097b2] py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Cotizar
                      </button>
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#0c242b] hover:bg-[#0097b2] text-[#bbf2fc] hover:text-white border border-[#0097b2]/20 hover:border-[#0097b2] py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Ver sitio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
