import React, { useState, useEffect } from 'react';
import { Bot, CheckCircle2, Bell, Zap, Clock, ShieldCheck, RefreshCw, Layers, ArrowUpRight, Cpu } from 'lucide-react';

export default function DashboardWidget() {
  const [automationActive, setAutomationActive] = useState(true);
  const [activeTab, setActiveTab] = useState('summary'); // 'summary' | 'live-feed' | 'roi'
  const [processedCount, setProcessedCount] = useState(148);
  const [latestEvent, setLatestEvent] = useState({
    title: 'Pedido WhatsApp #3042 procesado',
    detail: 'IA identificó productos y generó la orden en el ERP',
    time: 'Hace 5 segundos',
    status: 'Éxito'
  });

  // Simulate periodic live events if automation is active
  useEffect(() => {
    if (!automationActive) return;

    const mockEvents = [
      { title: 'Consulta de stock atendida', detail: 'Bot respondió disponibilidad de 12 ítems en 1.2s', time: 'Justo ahora', status: 'Éxito' },
      { title: 'Factura enviada automáticamente', detail: 'Cliente ref: #8820 recibió PDF en WhatsApp', time: 'Justo ahora', status: 'Éxito' },
      { title: 'Sincronización con Excel / Base de datos', detail: '14 registros de ventas actualizados sin intervención', time: 'Justo ahora', status: 'Éxito' },
      { title: 'Lead calificado en CRM', detail: 'Cliente solicitó cotización formal de software', time: 'Justo ahora', status: 'Éxito' },
    ];

    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % mockEvents.length;
      setLatestEvent(mockEvents[idx]);
      setProcessedCount((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, [automationActive]);

  return (
    <div className="w-full max-w-xl mx-auto relative">
      {/* Glow ambient background elements */}
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#bbf2fc] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#e0f7fc] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      {/* Main Container Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-[#e2f4f7] overflow-hidden relative z-10 hover-lift">
        
        {/* macOS Window Title Bar */}
        <div className="bg-[#e9e8e6]/80 px-4 py-3 border-b border-[#bfc9c1]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block"></span>
            </div>
            <span className="text-xs font-semibold text-[#556158] ml-2 font-mono">
              ap-desarrollo-engine v2.4
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[11px] font-medium text-[#0097b2] bg-[#e0f7fc] px-2 py-0.5 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097b2] animate-ping"></span>
              En Ejecución
            </span>
          </div>
        </div>

        {/* Header content */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-['Outfit'] text-[#00768c] text-xl font-bold flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#0097b2]" />
                Panel de Control Inteligente
              </h3>
              <p className="text-xs text-[#556158] mt-0.5">Visibilidad en tiempo real de tus automatizaciones</p>
            </div>
            <button className="p-2 rounded-lg bg-[#f4f3f1] text-[#556158] hover:text-[#00768c] transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#0097b2]"></span>
            </button>
          </div>

          {/* Interactive Automation Status Bar */}
          <div className="p-4 bg-[#faf9f7] rounded-xl border border-[#e2f4f7] mb-5 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3.5">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                automationActive ? 'bg-[#0097b2] text-white shadow-sm' : 'bg-[#e9e8e6] text-[#556158]'
              }`}>
                <Bot className={`w-5 h-5 ${automationActive ? 'animate-bounce-short' : ''}`} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1c1b]">
                  {automationActive ? 'Automatización de Pedidos & FAQ' : 'Modo Manual (Pausado)'}
                </p>
                <p className="text-xs text-[#556158] flex items-center gap-1">
                  <span>Estado:</span>
                  <span className={`font-semibold ${automationActive ? 'text-[#00768c]' : 'text-amber-700'}`}>
                    {automationActive ? 'Activa 24/7 sin descanso' : 'Inactiva (Requiere atención manual)'}
                  </span>
                </p>
              </div>
            </div>

            {/* Toggle switch */}
            <button
              onClick={() => setAutomationActive(!automationActive)}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-hidden cursor-pointer ${
                automationActive ? 'bg-[#0097b2]' : 'bg-[#bfc9c1]'
              }`}
              title="Haz clic para probar pausar o reanudar"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  automationActive ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-[#e2f4f7] mb-5 gap-4 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('summary')}
              className={`pb-2 transition-colors cursor-pointer border-b-2 ${
                activeTab === 'summary' ? 'border-[#00768c] text-[#00768c]' : 'border-transparent text-[#556158] hover:text-[#1a1c1b]'
              }`}
            >
              Métricas Principales
            </button>
            <button
              onClick={() => setActiveTab('live-feed')}
              className={`pb-2 transition-colors cursor-pointer border-b-2 flex items-center gap-1.5 ${
                activeTab === 'live-feed' ? 'border-[#00768c] text-[#00768c]' : 'border-transparent text-[#556158] hover:text-[#1a1c1b]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              En Vivo (Eventos)
            </button>
          </div>

          {/* Tab 1: Summary Metrics */}
          {activeTab === 'summary' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f4f3f1] rounded-xl p-3.5 border border-[#e2f4f7]/60 hover:bg-[#e0f7fc]/30 transition-colors">
                  <div className="flex items-center justify-between text-[#556158] mb-1">
                    <span className="text-[11px] uppercase font-bold tracking-wider">Eficiencia</span>
                    <Zap className="w-3.5 h-3.5 text-[#0097b2]" />
                  </div>
                  <p className="text-2xl font-extrabold text-[#1a1c1b] font-['Outfit']">+85%</p>
                  <p className="text-[11px] text-[#4d6569] mt-1">Sin retrasos en respuesta</p>
                </div>

                <div className="bg-[#f4f3f1] rounded-xl p-3.5 border border-[#e2f4f7]/60 hover:bg-[#e0f7fc]/30 transition-colors">
                  <div className="flex items-center justify-between text-[#556158] mb-1">
                    <span className="text-[11px] uppercase font-bold tracking-wider">Tiempo Ahorrado</span>
                    <Clock className="w-3.5 h-3.5 text-[#0097b2]" />
                  </div>
                  <p className="text-2xl font-extrabold text-[#1a1c1b] font-['Outfit']">
                    14h<span className="text-xs font-normal text-[#556158]">/sem</span>
                  </p>
                  <p className="text-[11px] text-[#4d6569] mt-1">Por cada colaborador</p>
                </div>
              </div>

              {/* Realtime Action Card */}
              <div className="p-3.5 bg-[#e0f7fc]/40 rounded-xl border border-[#bfc9c1]/50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0097b2] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-[#1a1c1b]">Última Tarea Automática ({latestEvent.time})</p>
                  <p className="text-[#404943] mt-0.5">{latestEvent.title}: {latestEvent.detail}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Live Feed */}
          {activeTab === 'live-feed' && (
            <div className="space-y-2.5">
              <div className="p-3 bg-[#faf9f7] rounded-lg border border-[#e2f4f7] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="font-bold text-[#1a1c1b]">Total Operaciones Atendidas:</span>
                </div>
                <span className="font-mono font-bold text-[#00768c] bg-[#e0f7fc] px-2 py-0.5 rounded-md text-xs">
                  {processedCount} solicitudes
                </span>
              </div>

              <div className="text-xs text-[#556158] space-y-2">
                <div className="p-2.5 bg-white border border-[#e2f4f7] rounded-lg flex items-center gap-2 shadow-2xs">
                  <span className="text-emerald-600 font-bold">✓ 10:04 AM</span>
                  <span className="text-[#1a1c1b]">Mensaje WhatsApp recibido → Parsed & Respondió Bot</span>
                </div>
                <div className="p-2.5 bg-white border border-[#e2f4f7] rounded-lg flex items-center gap-2 shadow-2xs">
                  <span className="text-emerald-600 font-bold">✓ 10:02 AM</span>
                  <span className="text-[#1a1c1b]">Orden #2841 enviada a Google Sheets & CRM</span>
                </div>
                <div className="p-2.5 bg-white border border-[#e2f4f7] rounded-lg flex items-center gap-2 shadow-2xs">
                  <span className="text-emerald-600 font-bold">✓ 09:58 AM</span>
                  <span className="text-[#1a1c1b]">Recordatorio de pago enviado a 5 clientes</span>
                </div>
              </div>
            </div>
          )}

          {/* Footer note inside widget */}
          <div className="mt-5 pt-4 border-t border-[#e2f4f7] flex items-center justify-between text-[11px] text-[#556158]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0097b2]" />
              Seguridad de Grado Empresarial
            </span>
            <span className="font-medium text-[#0097b2] hover:underline cursor-pointer flex items-center gap-0.5">
              Sin licencias mensuales infladas
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
