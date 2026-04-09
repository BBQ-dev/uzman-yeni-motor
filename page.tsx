export default async function KombiPage({ params }) {
  const resolvedParams = await params;
  const hamSemt = resolvedParams.semt;
  const semtIsimleri = { 'umraniye': 'Ümraniye', 'cekmekoy': 'Çekmeköy', 'atasehir': 'Ataşehir', 'sancaktepe': 'Sancaktepe' };
  const semt = semtIsimleri[hamSemt] || hamSemt;

  return (
    <main className="w-full min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Klima Menüsü Tasarımı (Teal Renk) */}
      <div className="w-full bg-[#0A2E6E] text-white p-5 flex justify-between items-center border-b border-teal-400 shadow-md">
        <div className="flex flex-col uppercase italic leading-none">
          <span className="text-xl font-black tracking-tighter">İSTANBUL SERVİSİM</span>
          <div className="flex items-center gap-2 text-[10px] font-bold text-teal-300 mt-1 uppercase tracking-widest italic">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span> {semt} BÖLGESİ AKTİF
          </div>
        </div>
        <a href="tel:05515057833" className="bg-teal-400 text-[#0A2E6E] px-5 py-2 rounded-full font-black text-xs shadow-md active:scale-95 transition-all uppercase">ARA</a>
      </div>

      <div className="w-full py-16 px-8 text-center bg-white border-b border-gray-100">
        <h1 className="text-4xl font-black text-[#0A2E6E] leading-tight mb-4 normal-case">
          <span className="text-teal-600 underline decoration-teal-400 decoration-2">{semt}</span> <br/> 
          KOMBİ SERVİSİ
        </h1>
        <p className="text-gray-500 text-xs font-bold mb-8 uppercase tracking-[0.2em] italic">Petek Temizliği • Arıza • Bakım</p>
        <div className="inline-block bg-[#0A2E6E] text-white px-10 py-4 rounded-2xl text-sm font-black tracking-widest shadow-2xl uppercase">HIZLI KAPINIZDAYIZ</div>
      </div>

      <div className="mx-6 p-8 bg-white border-4 border-gray-50 rounded-[3rem] shadow-sm mt-[-20px] relative z-10">
        <p className="text-sm leading-relaxed text-slate-600 font-medium">
          İstanbul Servisim, {semt} genelinde kombi arıza ve bakımı yapan 
          <span className="text-[#0A2E6E] font-black underline decoration-teal-400 decoration-2"> bağımsız bir teknik servis </span> 
          kuruluşudur. 1 Yıl garantili orijinal parça desteği sunarız.
        </p>
      </div>

      <div className="px-6 py-12">
        <a href="tel:05515057833" className="block w-full bg-[#0A2E6E] text-white text-center py-7 rounded-[2.5rem] font-black text-2xl shadow-xl active:scale-95 transition-all uppercase tracking-tighter border-b-8 border-[#082255]">KOMBİ USTASINI ARA</a>
      </div>
    </main>
  );
}