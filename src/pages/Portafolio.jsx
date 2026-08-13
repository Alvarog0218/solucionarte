import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Zap, Shield, Workflow, MessageSquare, ExternalLink, Sparkles, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Portafolio() {
  const { handleOpenWhatsApp } = useOutletContext();
  const [selectedFrame, setSelectedFrame] = useState(0);

  const projects = [
    {
      id: 'ultra',
      title: 'Ultra - Plataforma de Alto Rendimiento',
      category: 'Alto Rendimiento / Web Apps',
      icon: Zap,
      stats: 'Tiempos de carga reducidos en 80%',
      statsSubtitle: 'Velocidad de carga inferior a 1 segundo bajo alta demanda.',
      description: 'Plataforma web de alta velocidad optimizada para procesamiento masivo de datos en tiempo real, garantizando rendimiento excepcional y escalabilidad.',
      extendedDescription: 'Desarrollamos una arquitectura orientada a microservicios que procesa grandes volúmenes de datos transaccionales sin degradar la experiencia de usuario. Implementamos estrategias de almacenamiento en caché en memoria y optimización de renderizado del lado del servidor para garantizar velocidad récord a nivel global.',
      challenge: 'El cliente experimentaba caídas constantes del sistema y tiempos de carga superiores a 8 segundos durante horas pico, lo que resultaba en altas tasas de abandono de usuarios.',
      solution: 'Reescribimos la base de código utilizando Next.js y Go, integramos Redis para almacenamiento en caché de consultas frecuentes y estructuramos un flujo de datos asíncrono optimizado mediante GraphQL.',
      technologies: ['React', 'Next.js', 'Go', 'Redis', 'GraphQL', 'Vercel'],
      liveUrl: 'https://ultra-web-5kig.vercel.app/',
      backgroundImage: '/ultra_bg.jpg'
    },
    {
      id: 'darrum',
      title: 'Darrum - ERP Corporativo de Gestión',
      category: 'Software Empresarial / ERP',
      icon: Shield,
      stats: 'Control de inventario 100% preciso',
      statsSubtitle: 'Eliminación absoluta de discrepancias y reportes manuales.',
      description: 'Sistema ERP personalizado para la gestión integral de inventarios, facturación electrónica y control administrativo de operaciones preliminares.',
      extendedDescription: 'Diseñamos un sistema ERP a la medida para centralizar todas las operaciones clave de la empresa. La plataforma integra desde la recepción de materias primas hasta el despacho final del producto, automatizando la facturación y los asientos contables en tiempo real.',
      challenge: 'Manejo manual de inventario en hojas de cálculo propensas a errores, retrasos en la facturación y falta de visibilidad en tiempo real de los márgenes de utilidad por proyecto.',
      solution: 'Desarrollamos una base de datos PostgreSQL robusta en AWS, diseñamos un backend con Node.js y TypeScript, y creamos una interfaz ágil protegida por robustos roles y permisos de seguridad.',
      technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind'],
      liveUrl: 'https://darrum.vercel.app/',
      backgroundImage: '/darrum_bg.jpg'
    },
    {
      id: 'ambos-lit',
      title: 'Ambos y Lit - Ecosistema de Arquitectura',
      category: 'Automatización & Web Ágil',
      icon: Workflow,
      stats: 'Eficiencia y velocidad combinadas',
      statsSubtitle: 'Consolidación de identidad corporativa con rendimiento móvil impecable.',
      description: 'Sistemas híbridos de automatización de flujos y aplicaciones web ultra-ligeras integradas, optimizando la operación y el rendimiento móvil.',
      extendedDescription: 'Creamos un ecosistema digital doble para dos marcas de arquitectura aliadas. El proyecto incluye la integración de flujos de trabajo automatizados en la parte posterior (backend) para notificar al equipo sobre nuevos leads y la sincronización de sus portafolios de diseño.',
      challenge: 'Dos marcas complementarias requerían presencia digital rápida que cargara de forma óptima en dispositivos móviles sin duplicar los costos de mantenimiento administrativo.',
      solution: 'Implementamos flujos automatizados con n8n que conectan los portafolios web estáticos basados en Vite con bases de datos centralizadas, permitiendo actualizaciones rápidas e instantáneas.',
      technologies: ['Python', 'n8n', 'Vite', 'Web Components', 'REST APIs', 'Cloudflare'],
      backgroundFrames: [
        'https://amboss-arquitectura.vercel.app/',
        'https://liit-arquitectura.vercel.app/'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Intro Hero */}
      <section className="pt-24 pb-16 max-w-[1280px] mx-auto px-5 md:px-8 text-center relative z-10">
        <span className="inline-block bg-[#0e3b44] text-[#bbf2fc] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#143941]">
          Casos de Estudio
        </span>
        <h1 className="font-['Outfit'] text-4xl md:text-6xl font-extrabold text-[#e6eff1] mb-6 tracking-tight leading-tight">
          Nuestros <span className="text-[#0097b2]">Casos de Éxito</span>
        </h1>
        <p className="text-md md:text-lg text-[#8fa3a7] max-w-3xl mx-auto leading-relaxed mb-8">
          Proyectos reales que han transformado digitalmente la operación y comercialización de nuestros clientes con resultados medibles.
        </p>

        {/* Quick jump menu */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="bg-[#0c242b] hover:bg-[#0097b2]/20 border border-[#143941] hover:border-[#0097b2]/40 text-[#bbf2fc] px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Icon className="w-4 h-4 text-[#0097b2]" />
                {p.title.split(' - ')[0]}
              </a>
            );
          })}
        </div>
      </section>

      {/* Expanded Sections for each Project */}
      <div className="space-y-24 pb-24">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const isEven = index % 2 === 0;
          const liveUrl = project.backgroundFrames 
            ? project.backgroundFrames[selectedFrame] 
            : project.liveUrl;

          return (
            <section
              key={project.id}
              id={project.id}
              className={`py-20 border-t border-b border-[#143941]/40 bg-gradient-to-b ${
                isEven ? 'from-[#0e3b44]/20 to-transparent' : 'from-[#082a30]/20 to-transparent'
              }`}
            >
              <div className="max-w-[1280px] mx-auto px-5 md:px-8">
                
                {/* Statistics Banner */}
                <div className="bg-[#0a2329]/60 border border-[#143941] rounded-3xl p-6 md:p-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 backdrop-blur-xs">
                  <div>
                    <span className="text-[#0097b2] text-xs font-extrabold uppercase tracking-wider block mb-1">
                      Impacto y Retorno
                    </span>
                    <h3 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-[#e6eff1]">
                      {project.stats}
                    </h3>
                    <p className="text-sm text-[#8fa3a7] mt-1">{project.statsSubtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleOpenWhatsApp(`Hola AP Desarrollo! Me interesa cotizar una solución similar a: "${project.title}"`)}
                      className="bg-[#0097b2] hover:bg-[#00768c] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4" /> Cotizar Similar
                    </button>
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0c242b] hover:bg-[#0e3b44] text-[#bbf2fc] border border-[#143941] px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-4 h-4" /> Visitar Proyecto
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  {/* Left Side (Project overview) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0e3b44] text-[#0097b2] rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-[#bbf2fc] bg-[#0e3b44] px-3 py-1 rounded-lg">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="font-['Outfit'] text-3xl font-extrabold text-[#e6eff1] tracking-tight">
                      {project.title}
                    </h2>

                    <p className="text-sm md:text-base text-[#8fa3a7] leading-relaxed">
                      {project.extendedDescription}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-[#143941]/40">
                      <div>
                        <h4 className="text-xs font-extrabold text-[#0097b2] uppercase tracking-wider mb-2">El Desafío</h4>
                        <p className="text-xs text-[#8fa3a7] leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-[#0097b2] uppercase tracking-wider mb-2">La Solución</h4>
                        <p className="text-xs text-[#8fa3a7] leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-4 border-t border-[#143941]/40">
                      <span className="text-xs font-bold text-[#e6eff1] block mb-2">Stack Tecnológico</span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-[#0c242b] text-[#e6eff1] font-mono text-xs px-2.5 py-1 rounded-md border border-[#143941]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side (Visual interactive frames / previews) */}
                  <div className="lg:col-span-5 bg-[#0c242b]/40 border border-[#143941] p-6 rounded-3xl backdrop-blur-xs relative overflow-hidden group">
                    <h4 className="text-xs font-extrabold text-[#8fa3a7] uppercase tracking-wider mb-4">
                      {project.backgroundFrames ? 'Vistas previas del proyecto' : 'Vista previa del proyecto'}
                    </h4>
                    
                    {project.backgroundFrames ? (
                      <div className="grid grid-cols-1 gap-6">
                        {project.backgroundFrames.map((frameUrl, idx) => {
                          const name = idx === 0 ? 'Amboss Arquitectura' : 'Liit Arquitectura';
                          return (
                            <div key={idx} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-[#bbf2fc]">{name}</span>
                                <a 
                                  href={frameUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[11px] text-[#0097b2] hover:underline flex items-center gap-1 font-bold"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  <span>Abrir sitio</span>
                                </a>
                              </div>
                              <div className="relative aspect-video w-full rounded-2xl border border-[#143941] overflow-hidden bg-[#051316]">
                                <iframe
                                  src={frameUrl}
                                  className="w-full h-full border-none bg-transparent"
                                  title={`${name} Live Preview`}
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      /* Interactive Frame Wrapper showing cover image or live iframe */
                      <div className="relative aspect-video w-full rounded-2xl border border-[#143941] overflow-hidden bg-[#051316] group/preview">
                        {project.id === 'ultra' || project.id === 'darrum' ? (
                          <div className="w-full h-full relative">
                            <iframe
                              src={project.liveUrl}
                              className="w-full h-full border-none bg-transparent"
                              title={`${project.title} Live Preview`}
                              loading="lazy"
                            />
                            {/* Discreto overlay de enlace en la esquina superior derecha */}
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="absolute top-3 right-3 bg-[#0c242b]/90 hover:bg-[#0097b2] border border-[#143941] text-[#e6eff1] p-2 rounded-xl transition-all shadow-md flex items-center gap-1.5 text-xs font-bold"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Abrir</span>
                            </a>
                          </div>
                        ) : project.backgroundImage ? (
                          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                            <img
                              src={project.backgroundImage}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/preview:scale-105"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#051316]/75 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                              <ExternalLink className="w-8 h-8 text-[#0097b2]" />
                              <span className="text-xs text-[#e6eff1] font-bold">Visitar Sitio Web</span>
                            </div>
                          </a>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#071d22] text-[#8fa3a7] text-xs">
                            <a
                              href={liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col items-center gap-2 hover:text-[#0097b2] transition-colors"
                            >
                              <ExternalLink className="w-8 h-8 text-[#0097b2]" />
                              <span>Abrir sitio interactivo</span>
                            </a>
                          </div>
                        )}
                      </div>
                    )}
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
