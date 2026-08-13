import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Mail, MessageSquare, Send, Sparkles } from 'lucide-react';

export default function Contacto() {
  const { handleOpenWhatsApp } = useOutletContext();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMsg = `Hola AP Desarrollo, mi nombre es ${formData.name} (${formData.email}). Mensaje: ${formData.message}`;
    handleOpenWhatsApp(whatsappMsg);
  };

  return (
    <section className="py-24 max-w-[1280px] mx-auto px-5 md:px-8 relative min-h-[70vh]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#0097b2] text-xs font-bold uppercase tracking-widest bg-[#0e3b44] px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Hablemos
        </span>
        <h1 className="font-['Outfit'] text-4xl md:text-5xl font-extrabold text-[#e6eff1] leading-tight">
          Inicia tu Transformación Digital
        </h1>
        <p className="text-[#8fa3a7] text-md mt-4">
          Cuéntanos sobre tu proyecto o proceso ineficiente y diseñaremos una solución a tu medida.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-[#0a2329]/50 border border-[#143941] p-8 rounded-3xl backdrop-blur-xs">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-[#8fa3a7] uppercase tracking-wider mb-2">Nombre Completo</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#051316] border border-[#143941] rounded-xl px-4 py-3 text-sm text-[#e6eff1] focus:outline-hidden focus:border-[#0097b2] transition-colors"
              placeholder="Ej. Juan Pérez"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#8fa3a7] uppercase tracking-wider mb-2">Correo Electrónico</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#051316] border border-[#143941] rounded-xl px-4 py-3 text-sm text-[#e6eff1] focus:outline-hidden focus:border-[#0097b2] transition-colors"
              placeholder="Ej. juan@empresa.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#8fa3a7] uppercase tracking-wider mb-2">¿Cómo podemos ayudarte?</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#051316] border border-[#143941] rounded-xl px-4 py-3 text-sm text-[#e6eff1] focus:outline-hidden focus:border-[#0097b2] transition-colors resize-none"
              placeholder="Describe brevemente el proceso que deseas automatizar o el software que necesitas..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0097b2] hover:bg-[#00768c] text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Enviar Consulta vía WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
