"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

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
             <img src="/teknisyen.webp" alt="Uzman Usta" className="w-full h-full object-cover opacity-85" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* -- 3. BAŞLIK VE ROZETLER -- */}
        <section className="px-6 mt-4 text-center">
          <h1 className="text-xl font-black text-[#1E40AF] leading-tight italic uppercase mb-2">
            BEYAZ EŞYA , KLİMA , KOMBİ UZMAN SERVİSİ
          </h1>
          <div className="flex justify-center items-center gap-2">
            <div className="bg-white border border-slate-100 inline-flex px-3 py-1.5 rounded-lg shadow-sm items-center gap-1.5 text-[10px] font-bold text-green-600">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
               AÇIK (07:00-23:00)
            </div>
            <div className="bg-[#FFF9E6] border border-[#FFD966]/30 inline-flex px-3 py-1.5 rounded-lg shadow-sm items-center gap-1 text-[10px] font-bold text-[#B48A00]">
              <span> 785 M Yakında</span>
            </div>
          </div>
        </section>

      {/* -- 4. TEKNİSYEN MÜSAİTLİK -- */}
        <section className="px-6 mt-6">
          <div className="bg-green-50 border border-green-100 p-4 rounded-3xl flex items-center gap-4">
            
            {/* Ustamızın Resmi (usta.webp tam oturtuldu) */}
            <div className="w-14 h-14 bg-white rounded-full flex-shrink-0 border-2 border-green-200 shadow-sm overflow-hidden">
               <img src="/usta.webp" alt="Uzman Teknisyen" className="w-full h-full object-cover" />
            </div>

            {/* Yeni Tasarımdaki V8 Motorlu Metinler */}
            <div className="flex flex-col leading-tight uppercase font-bold text-left">
              <span className="text-green-700 text-xs">TEKNİSYENİMİZ MÜSAİT!</span>
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
           Çekmeköy,Ümraniye,Sancaktepe Bölge Servisi
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
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                <div className="text-lg mb-1">{hizmet.icon}</div>
                <h3 className="text-[9px] font-black text-slate-800 uppercase leading-none mb-1">{hizmet.title}</h3>
                <p className="text-[7px] text-slate-400 font-bold leading-tight uppercase">{hizmet.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* -- AĞIR ARIZA VİTRİNİ VE SÜZGEÇ -- */}
        <section className="px-6 py-8 bg-white border-b border-slate-100 text-left">
          <h2 className="text-[12px] font-black text-[#1E40AF] uppercase italic mb-6">
            NEDEN BİZİ TERCİH ETMELİSİNİZ?
          </h2>
          <div className="grid grid-cols-1 gap-3">
            
            <div className="bg-slate-50 p-3 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Sektörde Lideriz</h3>
              <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
                MOTOR, ANAKART, KOMPRESÖR VE KAZAN GİBİ UZMANLIK İSTEYEN AĞIR ARIZALARDA CİHAZINIZI KÖKTEN ONARIYOR, PARÇA DEĞİŞİMLERİNE 1 YIL GARANTİ VERİYORUZ.
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Şeffaf Fiyat ve Yerinde Tamir</h3>
              <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
                DENEME YANILMA YAPMIYORUZ! ARIZAYI NOKTA ATIŞI TESPİT EDİYOR, MALİYETİ ÖNCEDEN SÖYLÜYOR VE ONARIMI GÖZÜNÜZÜN ÖNÜNDE YAPIYORUZ.
              </p>
            </div>

            <div className="bg-green-50 p-3 rounded-xl shadow-sm border border-green-200">
              <h3 className="text-[10px] font-black text-green-800 uppercase italic">Basit Arızalar İçin Çözüm Ağımız</h3>
              <p className="text-[9px] text-green-700 mt-1 leading-tight font-bold uppercase">
                BASİT SU AKITMALARI, BAKIMLAR VEYA UZAK BÖLGELERDEKİ TALEPLERİNİZ İÇİN SİZİ ASLA MAĞDUR ETMİYOR, GÜVENDİĞİMİZ ANLAŞMALI MOBİL USTALARIMIZI ADRESİNİZE YÖNLENDİRİYORUZ.
              </p>
            </div>

          </div>
        </section>

        {/* -- 7. MÜŞTERİ YORUMLARI -- */}
        <section className="mt-8 px-6 pb-4">
          <div className="flex items-center gap-2 mb-4 text-left border-b border-slate-100 pb-2">
            <img src="/google.webp" alt="G" className="w-5 h-5 object-contain" onError={(e) => e.target.src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.png"} />
            <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">MÜŞTERİ DEĞERLENDİRMELERİ</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            <div className="bg-white p-5 rounded-[30px] border border-slate-100 min-w-[280px] shadow-sm text-left">
              <div className="flex justify-between mb-2 items-center">
                <span className="font-bold text-[11px] uppercase text-slate-800">Selin Y.</span>
                <span className="text-yellow-400 text-[10px]">★★★★★</span>
              </div>
              <p className="text-[10px] text-slate-600 italic font-medium leading-relaxed uppercase">
                Buzdolabı motoru için geldiler, aynı gün içinde halledip garantisini verdiler. Çok temiz iş.
              </p>
            </div>
            <div className="bg-white p-5 rounded-[30px] border border-slate-100 min-w-[280px] shadow-sm text-left">
              <div className="flex justify-between mb-2 items-center">
                <span className="font-bold text-[11px] uppercase text-slate-800">Sedat Ş.</span>
                <span className="text-yellow-400 text-[10px]">★★★★★</span>
              </div>
              <p className="text-[10px] text-slate-600 italic font-medium leading-relaxed uppercase">
                Ustalar çok ilgiliydi, Kombi arızasını aynı gün giderdiler. Hem hızlı hem de profesyonel hizmet aldım.
              </p>
            </div>
            <div className="bg-white p-5 rounded-[30px] border border-slate-100 min-w-[280px] shadow-sm text-left">
              <div className="flex justify-between mb-2 items-center">
                <span className="font-bold text-[11px] uppercase text-slate-800">Murat Z.</span>
                <span className="text-yellow-400 text-[10px]">★★★★★</span>
              </div>
              <p className="text-[10px] text-slate-600 italic font-medium leading-relaxed uppercase">
                Çamaşır makinesi kazan dönmüyordu, ustalar çok hızlıydı. Fiyatları da piyasaya göre gayet makul.
              </p>
            </div>
          </div>
        </section>

        {/* -- 8. GECE MAVİSİ YASAL UYARI -- */}
        <section className="mx-6 mt-8 p-5 bg-[#0F172A] rounded-[30px] border-b-4 border-blue-600 shadow-xl text-left">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-blue-400">
               <span className="text-lg">⚖️</span>
               <span className="text-[10px] font-black uppercase tracking-widest">YASAL BİLGİLENDİRME</span>
            </div>
            <p className="text-[10px] text-slate-300 leading-relaxed font-medium">
              Kuruluşumuz, İstanbul genelinde faaliyet gösteren 
              <strong className="text-white"> tam bağımsız bir özel servis merkezidir. </strong> 
              İsimleri geçen markaların resmi temsilcisi ya da yetkili bayisi konumunda değiliz. 
            </p>
          </div>
        </section>

        {/* -- 9. FOOTER -- */}
        <footer className="mt-8 bg-slate-50 border-t border-slate-200 px-6 pt-10 pb-1 text-center">
          <div className="flex justify-center gap-6 mb-6 uppercase font-bold text-[10px] text-slate-400">
            <Link href="/hakkimizda" className="hover:text-[#1E40AF]">HAKKIMIZDA</Link>
            <Link href="/gizlilik" className="hover:text-[#1E40AF]">GİZLİLİK</Link>
            <Link href="/iletisim" className="hover:text-[#1E40AF]">İLETİŞİM</Link>
          </div>
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em] mb-4">© 2026 UZMAN BÖLGE SERVİS</p>
          <div className="mt-10">
            <p className="text-[5px] text-[#f2f2f2] leading-none select-none pointer-events-none tracking-tight inline-block">
              İşletme Yetkilisi: Emircan Küçükoğlu — Belge No: 2018964612dmWL37081299257
            </p>
          </div>
        </footer>

        {/* -- 10. SABİT BUTON (Arama) -- */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] p-4 z-[100] bg-gradient-to-t from-white via-white/80 to-transparent">
          <a 
            href={`tel:${siteTel}`} 
            aria-label={`Acil Tamir Ustası Çağırmak İçin Tıklayın`}
            className="w-full bg-[#1E40AF] text-white p-4 rounded-[25px] flex items-center justify-between shadow-2xl active:scale-95 transition-all border-b-8 border-blue-900"
          >
             <div className="flex items-center gap-3 text-left leading-none uppercase">
                <div className="bg-white/20 p-5 rounded-full text-xl">📞</div>
                <div>
                  <span className="text-lg font-black tracking-tighter block">0536 932 75 87</span>
                  <span className="text-[8px] font-bold text-blue-100 mt-1 uppercase">TIKLA, HEMEN USTAYA BAĞLAN</span>
                </div>
             </div>
             <span className="text-xl opacity-40">❯</span>
          </a>
        </div>

      </div>
    </main>
  );
}
