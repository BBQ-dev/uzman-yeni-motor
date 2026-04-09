"use client";
import React from 'react';
import Link from 'next/link';

export default function Home() {
  const location = "İSTANBUL";
  const siteTel = "05369327587"; 

  return (
    <main className="w-full min-h-screen bg-slate-200 font-sans text-slate-900 pb-32">
      <div className="max-w-[600px] mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden rounded-t-[40px] border border-blue-100/30 text-left">
        
        {/* -- 1. HEADER -- */}
        <header className="w-full bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white p-5 flex justify-between items-center sticky top-0 z-50 shadow-xl rounded-b-[40px] border-b-4 border-blue-900">
          <div className="flex flex-col leading-none text-left">
            <span className="text-lg font-black tracking-tighter italic uppercase">UZMAN BÖLGE SERVİS</span>
            
            <div className="flex items-center gap-1.5 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-blue-200 uppercase">{location} GENELİ AKTİF MERKEZ</span>
            </div>
          </div>
          <a 
            href={`tel:${siteTel}`} 
            aria-label={`Acil Tamir Ustası İçin Hemen Ara`}
            className="bg-white text-[#1E40AF] px-4 py-1.5 rounded-xl font-black text-[10px] shadow-md uppercase"
          >
            ARA
          </a>
        </header>

        {/* -- 2. ANA GÖRSEL -- */}
        <div className="px-5 pt-5">
          <div className="w-full h-44 bg-slate-100 rounded-[30px] overflow-hidden relative shadow-lg border border-slate-100">
             <img src="/usta.webp" alt="Uzman Usta" className="w-full h-full object-cover opacity-85" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* -- 3. BAŞLIK VE ROZETLER -- */}
        <section className="px-6 mt-4 text-center">
          <h1 className="text-xl font-black text-[#1E40AF] leading-tight italic uppercase mb-2">
            SADECE AĞIR ARIZALARDA KESİN VE GARANTİLİ ÇÖZÜM
          </h1>
          <div className="flex justify-center items-center gap-2">
            <div className="bg-white border border-slate-100 inline-flex px-3 py-1.5 rounded-lg shadow-sm items-center gap-1.5 text-[10px] font-bold text-green-600">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              NÖBETÇİ USTA AÇIK (07:00-23:00)
            </div>
            <div className="bg-[#FFF9E6] border border-[#FFD966]/30 inline-flex px-3 py-1.5 rounded-lg shadow-sm items-center gap-1 text-[10px] font-bold text-[#B48A00]">
              <span>🛡️ 1 YIL GARANTİ</span>
            </div>
          </div>
        </section>

        {/* -- 4. TEKNİSYEN MÜSAİTLİK -- */}
        <section className="px-6 mt-6">
          <div className="bg-green-50 border border-green-100 p-4 rounded-3xl flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm border border-green-200">👨‍🔧</div>
            <div className="flex flex-col leading-tight uppercase font-bold text-left">
              <span className="text-green-700 text-xs">V8 MOTORLU EKİBİMİZ MÜSAİT!</span>
              <span className="text-green-600 text-[10px] italic">MOTOR, KAZAN VE KART ARIZASI UZMANI</span>
              <span className="text-[9px] text-slate-500 mt-1">⭐ %97 MEMNUNİYET • ✅ ORİJİNAL PARÇA</span>
            </div>
          </div>
        </section>

        {/* -- 5. RAKAMLARLA GÜVEN BÖLÜMÜ -- */}
        <section className="px-6 mt-8">
          <div className="bg-[#1E40AF] rounded-[35px] p-6 shadow-xl flex justify-between items-center text-white border-b-4 border-blue-900">
            <div className="flex flex-col items-center flex-1 border-r border-blue-400/30">
              <span className="text-xl font-black italic">19.311</span>
              <span className="text-[8px] font-bold text-blue-200 uppercase tracking-tighter text-center">Mutlu<br/>Müşteri</span>
            </div>
            <div className="flex flex-col items-center flex-1 border-r border-blue-400/30">
              <span className="text-xl font-black italic">7/24</span>
              <span className="text-[8px] font-bold text-blue-200 uppercase tracking-tighter text-center">Kesintisiz<br/>Destek</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-xl font-black italic">+17 Yıl</span>
              <span className="text-[8px] font-bold text-blue-200 uppercase tracking-tighter text-center">Sektörel<br/>Tecrübe</span>
            </div>
          </div>
        </section>

        {/* -- 6. HİZMET KARTLARI (Birebir Aynı Tasarım) -- */}
        <section className="px-6 py-8 bg-slate-50/80 border-y border-slate-100 text-left mt-8">
          <h2 className="text-[11px] font-black text-[#1E40AF] uppercase italic mb-4 leading-tight">
            İSTANBUL GENELİ TÜM ARIZALARDA UZMAN MÜDAHALE
          </h2>
          
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: "❄️", title: "Buzdolabı", desc: "Motor & Gaz" },
              { icon: "👕", title: "Çamaşır", desc: "Kazan & Kart" },
              { icon: "🍽️", title: "Bulaşık", desc: "Isıtma & Pompa" },
              { icon: "♨️", title: "Kombi", desc: "Anakart & Bakım" },
              { icon: "🌬️", title: "Klima", desc: "Gaz & Kompresör" },
              { icon: "🥘", title: "Fırın", desc: "Rezistans" },
            ].map((hizmet, index) => (
              <div 
                key={index}
                className="bg-white p-2 border border-slate-100 rounded-xl shadow-sm active:scale-95 transition-transform duration-100 cursor-default group relative overflow-hidden"
              >
                <span className="absolute top-1 right-1 flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg
