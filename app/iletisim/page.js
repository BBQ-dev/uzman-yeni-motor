"use client";
import React from 'react';
import Link from 'next/link';

export default function Iletisim() {
  const siteTel = "05369327587";
  const whatsappLink = `https://wa.me/9${siteTel}`;

  return (
    <main className="w-full min-h-screen bg-slate-100 font-sans text-slate-900 pb-20 text-left">
      <div className="max-w-[600px] mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
        
        {/* Header - Kurumsal Gradyan */}
        <header className="w-full bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] text-white p-8 rounded-b-[50px] shadow-xl">
          <Link href="/" className="text-[10px] font-bold opacity-80 tracking-widest mb-4 block uppercase">
            ← ANA SAYFAYA DÖN
          </Link>
          <h1 className="text-3xl font-black italic uppercase leading-none tracking-tighter">
            İLETİŞİM <br/> 
            <span className="text-blue-300 text-lg not-italic font-medium">Hızlı Servis Destek Hattı</span>
          </h1>
        </header>

        <section className="p-8 space-y-4">
          
          {/* Acil Arama Kartı */}
          <div className="bg-blue-600 p-6 rounded-[32px] shadow-lg text-white flex items-center justify-between group transition-all hover:bg-blue-700">
            <div className="text-left">
              <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">Hemen Arayın</p>
              <a href={`tel:${siteTel}`} className="text-2xl font-black italic tracking-tighter">
                {siteTel}
              </a>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <span className="text-2xl">📞</span>
            </div>
          </div>

         

          {/* Bilgi Kartları Grubu */}
          <div className="grid grid-cols-1 gap-4 mt-6">
            
            {/* Konum / Hizmet Bölgesi */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4">
              <div className="bg-white p-2 rounded-xl shadow-sm text-xl">📍</div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hizmet Bölgemiz</p>
                <p className="text-sm font-bold text-slate-800">TÜM İSTANBUL GENELİ</p>
                <p className="text-[11px] text-slate-500 font-medium leading-tight mt-1">
                  Donanımlı mobil servis araçlarımızla semt fark etmeksizin 30-60 dakika içerisinde adresinizdeyiz.
                </p>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4">
              <div className="bg-white p-2 rounded-xl shadow-sm text-xl">⏰</div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Çalışma Saatleri</p>
                <p className="text-sm font-bold text-slate-800">07:00 — 23:00</p>
                <p className="text-[11px] text-green-600 font-bold italic mt-1 uppercase">
                  HAFTANIN 7 GÜNÜ KESİNTİSİZ TAMİR DESTEK
                </p>
              </div>
            </div>

            {/* Şirket Statüsü */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4">
              <div className="bg-white p-2 rounded-xl shadow-sm text-xl">🛡️</div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Servis Statüsü</p>
                <p className="text-sm font-bold text-slate-800 tracking-tight">PROFESYONEL ÖZEL SERVİS MERKEZ</p>
                <p className="text-[10px] text-slate-500 font-medium mt-1 leading-tight uppercase">
                  TÜM MARKA VE MODELLERDE GARANTİLİ YEDEK PARÇA DESTEĞİ.
                </p>
              </div>
            </div>

          </div>

          {/* Alt Not */}
          <div className="mt-6 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight leading-relaxed">
              Arıza tespiti ve randevu işlemleri için <br/> çağrı merkezimizle iletişime geçebilirsiniz.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}

