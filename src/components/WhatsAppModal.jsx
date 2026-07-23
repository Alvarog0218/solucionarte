import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WhatsAppModal({ isOpen, onClose, initialMessage }) {
  const [phoneNumber, setPhoneNumber] = useState('573000000000'); // Default demo number
  const [customMsg, setCustomMsg] = useState('');
  const [contactName, setContactName] = useState('');
  const [projectType, setProjectType] = useState('Automatización / IA');

  useEffect(() => {
    if (initialMessage) {
      setCustomMsg(initialMessage);
    } else {
      setCustomMsg('Hola! Quisiera información sobre sus servicios de software y automatización.');
    }
  }, [initialMessage, isOpen]);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    
    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Ignore if confetti fails
    }

    const fullMessage = `Hola Solucionarte 👋🏼\nMi nombre es: ${contactName || 'Un visitante del sitio web'}\nTipo de proyecto: ${projectType}\n\nMensaje: ${customMsg}`;
    const encodedText = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 border border-[#E2ECE9] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#556158] hover:text-[#1a1c1b] p-1.5 rounded-full bg-[#f4f3f1] hover:bg-[#e9e8e6] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#2d6a4f] text-white flex items-center justify-center shadow-md">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#1a1c1b] leading-tight">
              Hablar con Solucionarte
            </h3>
            <p className="text-xs text-[#2d6a4f] font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              En línea ahora mismo en WhatsApp
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          
          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold text-[#1a1c1b] uppercase tracking-wider mb-1.5">
              Tu Nombre (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ej: Carlos Mendoza"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#bfc9c1] text-sm text-[#1a1c1b] focus:outline-hidden focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/20 transition-all bg-[#faf9f7]"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-xs font-bold text-[#1a1c1b] uppercase tracking-wider mb-1.5">
              Área de Interés
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#bfc9c1] text-sm text-[#1a1c1b] focus:outline-hidden focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/20 transition-all bg-[#faf9f7]"
            >
              <option value="Automatización / IA">⚡ Automatización de Procesos e IA</option>
              <option value="Software a Medida">💻 Desarrollo de Software a Medida</option>
              <option value="Desarrollo Web">🌐 Sitio Web de Alta Conversión</option>
              <option value="Diagnóstico General">🔍 Diagnóstico de Eficiencia Operativa</option>
            </select>
          </div>

          {/* Custom Message */}
          <div>
            <label className="block text-xs font-bold text-[#1a1c1b] uppercase tracking-wider mb-1.5">
              Detalle del mensaje
            </label>
            <textarea
              rows={3}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#bfc9c1] text-sm text-[#1a1c1b] focus:outline-hidden focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/20 transition-all bg-[#faf9f7] resize-none"
              required
            />
          </div>

          {/* Security Note */}
          <div className="p-3 bg-[#d9e6da]/40 rounded-xl border border-[#bfc9c1]/40 flex items-center gap-2 text-xs text-[#5b675e]">
            <ShieldCheck className="w-4 h-4 text-[#2d6a4f] shrink-0" />
            <span>Respuesta directa sin intermediarios ni bots molestos.</span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-[#bfc9c1] text-xs font-bold text-[#556158] hover:bg-[#f4f3f1] transition-colors cursor-pointer"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#2d6a4f] hover:bg-[#0f5238] text-white text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <span>Abrir en WhatsApp</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
