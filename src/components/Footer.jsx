import React, { useState } from 'react';
import { MessageSquare, Globe, ArrowUp, Shield, FileText } from 'lucide-react';

export default function Footer({ onOpenWhatsApp }) {
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-transparent border-t border-[#143941] pt-16 pb-10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            
            {/* Left Bio */}
            <div className="max-w-md">
              <span className="font-['Outfit'] text-[#0097b2] text-2xl font-bold mb-3 block tracking-tight">
                AP Desarrollo
              </span>
              <p className="text-[#8fa3a7] text-sm leading-relaxed">
                Transformamos procesos manuales en activos digitales que trabajan por ti 24/7. Sin complicaciones, sin jerga técnica, solo resultados medibles.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full border border-[#143941] flex items-center justify-center text-[#bbf2fc] hover:bg-[#0097b2] hover:text-[#001e24] transition-all shadow-2xs cursor-pointer"
                title="Volver arriba"
              >
                <ArrowUp className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenWhatsApp('Contacto directo desde el pie de página')}
                className="bg-[#0097b2] hover:bg-[#00768c] text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Contacto Directo
              </button>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#143941] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8fa3a7]">
            <p>© 2026 AP Desarrollo. Todos los derechos reservados.</p>
            
            <div className="flex items-center gap-6 font-medium">
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-[#0097b2] underline decoration-transparent hover:decoration-[#0097b2] transition-all cursor-pointer"
              >
                Política de Privacidad
              </button>

              <button
                onClick={() => setModalType('terms')}
                className="hover:text-[#0097b2] underline decoration-transparent hover:decoration-[#0097b2] transition-all cursor-pointer"
              >
                Términos del Servicio
              </button>

              <a
                href="#servicios"
                className="hover:text-[#0097b2] underline decoration-transparent hover:decoration-[#0097b2] transition-all"
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
            className="bg-[#0a2329] rounded-3xl max-w-xl w-full p-6 md:p-8 border border-[#143941] shadow-2xl relative animate-in fade-in zoom-in duration-200 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0e3b44] text-[#bbf2fc] flex items-center justify-center">
                {modalType === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <h3 className="font-['Outfit'] text-2xl font-bold text-[#e6eff1]">
                {modalType === 'privacy' ? 'Política de Privacidad' : 'Términos del Servicio'}
              </h3>
            </div>

            <div className="text-xs text-[#8fa3a7] space-y-3 leading-relaxed mb-6">
              {modalType === 'privacy' ? (
                <>
                  <p>
                    En <strong>AP Desarrollo</strong> nos tomamos la privacidad y confidencialidad de tu negocio con máxima seriedad.
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
                    Términos generales para la contratación de desarrollos de software y automatización con <strong>AP Desarrollo</strong>:
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
                className="px-6 py-2.5 rounded-xl bg-[#0097b2] text-white text-xs font-bold hover:bg-[#00768c] transition-colors cursor-pointer"
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
