import React, { useState } from 'react';
import { MessageSquare, Globe, ArrowUp, Shield, FileText } from 'lucide-react';

export default function Footer({ onOpenWhatsApp }) {
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#f4f3f1] border-t border-[#E2ECE9] pt-16 pb-10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            
            {/* Left Bio */}
            <div className="max-w-md">
              <span className="font-['Outfit'] text-[#0f5238] text-2xl font-bold mb-3 block tracking-tight">
                Solucionarte
              </span>
              <p className="text-[#556158] text-sm leading-relaxed">
                Transformamos procesos manuales en activos digitales que trabajan por ti 24/7. Sin complicaciones, sin jerga técnica, solo resultados medibles.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full border border-[#bfc9c1] flex items-center justify-center text-[#0f5238] hover:bg-[#2d6a4f] hover:text-white transition-all shadow-2xs cursor-pointer"
                title="Volver arriba"
              >
                <ArrowUp className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenWhatsApp('Contacto directo desde el pie de página')}
                className="bg-[#2d6a4f] hover:bg-[#0f5238] text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Contacto Directo
              </button>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#bfc9c1]/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#556158]">
            <p>© 2026 Solucionarte. Todos los derechos reservados.</p>
            
            <div className="flex items-center gap-6 font-medium">
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-[#0f5238] underline decoration-transparent hover:decoration-[#0f5238] transition-all cursor-pointer"
              >
                Política de Privacidad
              </button>

              <button
                onClick={() => setModalType('terms')}
                className="hover:text-[#0f5238] underline decoration-transparent hover:decoration-[#0f5238] transition-all cursor-pointer"
              >
                Términos del Servicio
              </button>

              <a
                href="#servicios"
                className="hover:text-[#0f5238] underline decoration-transparent hover:decoration-[#0f5238] transition-all"
              >
                Proyectos
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Info Modal */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 border border-[#E2ECE9] shadow-2xl relative animate-in fade-in zoom-in duration-200 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#d9e6da] text-[#0f5238] flex items-center justify-center">
                {modalType === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <h3 className="font-['Outfit'] text-2xl font-bold text-[#1a1c1b]">
                {modalType === 'privacy' ? 'Política de Privacidad' : 'Términos del Servicio'}
              </h3>
            </div>

            <div className="text-xs text-[#404943] space-y-3 leading-relaxed mb-6">
              {modalType === 'privacy' ? (
                <>
                  <p>
                    En <strong>Solucionarte</strong> nos tomamos la privacidad y confidencialidad de tu negocio con máxima seriedad.
                  </p>
                  <p>
                    <strong>1. Uso de Datos:</strong> La información provista en nuestros formularios o conversaciones de WhatsApp es utilizada exclusivamente para diagnosticar tus requerimientos de software y enviarte propuestas comerciales.
                  </p>
                  <p>
                    <strong>2. Confidencialidad Operativa:</strong> Firmamos acuerdos de confidencialidad (NDA) antes de acceder a cualquier base de datos, flujo de trabajo o información sensible de tu empresa.
                  </p>
                  <p>
                    <strong>3. Propiedad de Datos:</strong> Todos los datos generados por las herramientas que desarrollamos para ti son de tu propiedad exclusiva.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Términos generales para la contratación de desarrollos de software y automatización con <strong>Solucionarte</strong>:
                  </p>
                  <p>
                    <strong>1. Cotizaciones Cerradas:</strong> Garantizamos precios fijos sin costos ocultos sobre los alcances pactados en el Documento de Especificaciones.
                  </p>
                  <p>
                    <strong>2. Garantía de Código:</strong> Todo desarrollo incluye un período de garantía post-lanzamiento para corregir cualquier inconsistencia de código sin costo adicional.
                  </p>
                  <p>
                    <strong>3. Propiedad Intelectual:</strong> Al finalizar el pago del proyecto, el código fuente y las licencias son transferidos 100% a tu empresa.
                  </p>
                </>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-6 py-2.5 rounded-xl bg-[#2d6a4f] text-white text-xs font-bold hover:bg-[#0f5238] transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
