"use client";
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // <-- Kuyruk okuyucu çipi buraya taktık

export default function Page({ params }) {const { semt: rawSemt } = React.use(params);
  
  // -- 1. V8 MOTORUN BEYNİ: ÇİFT KUYRUK OKUYUCU --
  const searchParams = useSearchParams();
  const cihazKuyrugu = searchParams.get('cihaz'); 
  const arizaKuyrugu = searchParams.get('ariza'); 
  
  const dictionary = { 
    'adalar': 'ADALAR', 'arnavutkoy': 'ARNAVUTKÖY', 'atasehir': 'ATAŞEHİR', 
    'avcilar': 'AVCILAR', 'bagcilar': 'BAĞCILAR', 'bahcelievler': 'BAHÇELİEVLER', 
    'bakirkoy': 'BAKIRKÖY', 'basaksehir': 'BAŞAKŞEHİR', 'bayrampasa': 'BAYRAMPAŞA', 
    'besiktas': 'BEŞİKTAŞ', 'beykoz': 'BEYKOZ', 'beylikduzu': 'BEYLİKDÜZÜ', 
    'beyoglu': 'BEYOĞLU', 'buyukcekmece': 'BÜYÜKÇEKMECE', 'catalca': 'ÇATALCA', 
    'cekmekoy': 'ÇEKMEKÖY', 'esenler': 'ESENLER', 'esenyurt': 'ESENYURT', 
    'eyupsultan': 'EYÜPSULTAN', 'fatih': 'FATİH', 'gaziosmanpasa': 'GAZİOSMANPAŞA', 
    'gungoren': 'GÜNGÖREN', 'kadikoy': 'KADIKÖY', 'kagithane': 'KAĞITHANE', 
    'kartal': 'KARTAL', 'kucukcekmece': 'KÜÇÜKÇEKMECE', 'maltepe': 'MALTEPE', 
    'pendik': 'PENDİK', 'sancaktepe': 'SANCAKTEPE', 'sariyer': 'SARIYER', 
    'silivri': 'SİLİVRİ', 'sultanbeyli': 'SULTANBEYLİ', 'sultangazi': 'SULTANGAZİ', 
    'sile': 'ŞİLE', 'sisli': 'ŞİŞLİ', 'tuzla': 'TUZLA', 
    'umraniye': 'ÜMRANİYE', 'uskudar': 'ÜSKÜDAR', 'zeytinburnu': 'ZEYTİNBURNU'
  };
  
  const decodedSemt = decodeURIComponent(rawSemt).toLowerCase();
  const location = dictionary[decodedSemt] || decodedSemt.toUpperCase();
  const siteTel = "05369327587"; 

  // -- 2. CİHAZ VE AĞIR SANAYİ ŞALTERLERİ --
  let cihazAdi = "BEYAZ EŞYA VE KOMBİ"; 
  if (cihazKuyrugu === 'camasir') cihazAdi = "ÇAMAŞIR MAKİNESİ";
  if (cihazKuyrugu === 'buzdolabi') cihazAdi = "BUZDOLABI";
  if (cihazKuyrugu === 'bulasik') cihazAdi = "BULAŞIK MAKİNESİ";
  if (cihazKuyrugu === 'kombi') cihazAdi = "KOMBİ";
  if (cihazKuyrugu === 'klima') cihazAdi = "KLİMA";
  if (cihazKuyrugu === 'dondurucu') cihazAdi = "DERİN DONDURUCU";
  if (cihazKuyrugu === 'fırın') cihazAdi = "FIRIN";

  let anaTabela = `${location} ${cihazAdi} SERVİSİ`; 

  if (cihazKuyrugu === 'camasir') {
    if (arizaKuyrugu === 'kazan') anaTabela = `${location} ÇAMAŞIR MAKİNESİ KAZAN & RULMAN REVİZYONU`;
    if (arizaKuyrugu === 'kart') anaTabela = `${location} ÇAMAŞIR MAKİNESİ ANAKART TAMİRİ`;
    if (arizaKuyrugu === 'motor') anaTabela = `${location} ÇAMAŞIR MAKİNESİ MOTOR DEĞİŞİMİ`;
    if (arizaKuyrugu === 'govde') anaTabela = `${location} ÇAMAŞIR MAKİNESİ GÖVDESİ YENİLEME`;
  }
  if (cihazKuyrugu === 'buzdolabi') {
    if (arizaKuyrugu === 'motor') anaTabela = `${location} BUZDOLABI MOTOR (KOMPRESÖR) DEĞİŞİMİ`;
    if (arizaKuyrugu === 'kart') anaTabela = `${location} BUZDOLABI ANAKART TAMİRİ`;
    if (arizaKuyrugu === 'gaz') anaTabela = `${location} BUZDOLABI GAZ BASMA SERVİSİ`;
  }
  if (cihazKuyrugu === 'kombi') {
    if (arizaKuyrugu === 'kart') anaTabela = `${location} KOMBİ ANAKART TAMİR MERKEZİ`;
    if (arizaKuyrugu === 'eşanjör') anaTabela = `${location} KOMBİ EŞANJÖR TAMİR MERKEZİ`;
    if (arizaKuyrugu === 'pompa') anaTabela = `${location} KOMBİ POMPA TAMİR MERKEZİ`;
    if (arizaKuyrugu === 'demirdokum') anaTabela = `${location} DEMİRDÖKÜM KOMBİ SERVİSİ`;
  }
  if (cihazKuyrugu === 'klima') {
    if (arizaKuyrugu === 'motor') anaTabela = `${location} KLİMA DIŞ ÜNİTE (KOMPRESÖR) DEĞİŞİMİ`;
    if (arizaKuyrugu === 'gazdolumu') anaTabela = `${location} KLİMA GAZ DOLUMU SERVİSİ`;
    if (arizaKuyrugu === 'kart') anaTabela = `${location} KLİMA KART TAMİR SERVİSİ`;
    if (arizaKuyrugu === 'bakım') anaTabela = `${location} KLİMA BAKIM SERVİSİ`;
  }
  
  if (cihazKuyrugu === 'bulasik') {
    if (arizaKuyrugu === 'kart') anaTabela = `${location} BULAŞIK MAKİNESİ ANAKART TAMİR MERKEZİ`;
    if (arizaKuyrugu === 'rezistans') anaTabela = `${location} BULAŞIK MAKİNESİ ISITICI DEĞİŞİMİ`;
    if (arizaKuyrugu === 'pompa') anaTabela = `${location} BULAŞIK MAKİNESİ POMPA TAMİR SERVİSİ`;
}
if (cihazKuyrugu === 'dondurucu') {
    if (arizaKuyrugu === 'kart') anaTabela = `${location} DERİN DONDURUCU KART(İNVERTER) TAMİR SERVİSİ`;
    if (arizaKuyrugu === 'motor') anaTabela = `${location} DERİN DONDURUCU MOTOR DEĞİŞİM SERVİSİ`;
    if (arizaKuyrugu === 'gaz') anaTabela = `${location} DERİN DONDURUCU GAZ KAÇAĞI TESPİTİ & ŞARJI`;
}

if (cihazKuyrugu === 'firin') {
    if (arizaKuyrugu === 'resiztans') anaTabela = `${location} FIRIN RESİZTANS TAMİR SERVİSİ`;
    if (arizaKuyrugu === 'kart') anaTabela = `${location} FIRIN KART TAMİR SERVİSİ`;
    if (arizaKuyrugu === 'arıza') anaTabela = `${location} FIRIN ARIZA SERVİSİ`;
}
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
              <span className="text-[10px] font-bold text-blue-200 uppercase">{location} BÖLGESİ AKTİF</span>
            </div>
          </div>
          <a 
            href={`tel:${siteTel}`} 
            aria-label={`${location} Bosch Siemens Profilo Çamaşır Makinesi ve Buzdolabı Acil Tamir Ustası İçin Hemen Ara`}
            className="bg-white text-[#1E40AF] px-4 py-1.5 rounded-xl font-black text-[10px] shadow-md uppercase"
          >
            ARA
          </a>
        </header>




        {/* -- 2. ANA GÖRSEL -- */}
        <div className="px-5 pt-5">
          <div className="w-full h-44 bg-slate-100 rounded-[30px] overflow-hidden relative shadow-lg border border-slate-100">
             <img src="/usta.webp" alt="Usta" className="w-full h-full object-cover opacity-85" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>

{/* 2. DEMİRDÖKÜM ÖZEL (Alt-Üst Terazisi Sıfırlanmış Versiyon) */}
{(arizaKuyrugu === 'demirdokum' || arizaKuyrugu === 'demirdöküm') && (
  <div className="bg-sky-50 px-3 py-4 rounded-xl shadow-sm border border-sky-100 mb-3 relative overflow-hidden flex flex-col justify-center items-start min-h-[70px]">
    {/* justify-center: İçeriği dikeyde tam merkeze çiviler.
       min-h: Kutunun dikey terazisini koruması için sabit alan bırakır.
    */}
    
    <div className="flex items-center justify-start w-full gap-2 m-0 p-0">
      <img 
        src="/demirdokum-logo.webp" 
        alt="Demirdöküm Kombi Tamiri - Bağımsız Özel Servis" 
        className="h-9 w-auto object-contain shrink-0" 
      />

      <span className="bg-white border border-blue-100 text-[#1E40AF] px-1.5 py-[1px] rounded-md font-black text-[5px] uppercase tracking-tighter shadow-sm inline-flex items-center translate-y-[1.5px]">
        {/* translate-y-[1.5px] ile logo fontuyla göz hizasını eşitledik */}
        BAĞIMSIZ ÖZEL SERVİS
      </span>
    </div>
    
  </div>
)}

        {/* -- 3. BAŞLIK VE ROZETLER (BURASI ARTIK DİNAMİK) -- */}
        <section className="px-6 mt-4 text-center">
          <h1 className="text-xl font-black text-[#1E40AF] leading-tight italic uppercase mb-2">
            {anaTabela}
          </h1>
          <div className="flex justify-center items-center gap-2">
            <div className="bg-white border border-slate-100 inline-flex px-3 py-1.5 rounded-lg shadow-sm items-center gap-1.5 text-[10px] font-bold text-green-600">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              AÇIK (07:00-23:00)
            </div>
            <div className="bg-[#FFF9E6] border border-[#FFD966]/30 inline-flex px-3 py-1.5 rounded-lg shadow-sm items-center gap-1 text-[10px] font-bold text-[#B48A00]">
              <span>📍 757M YAKINDA</span>
            </div>
          </div>
        </section>




          {/* -- 4. TEKNİSYEN MÜSAİTLİK -- */}
<section className="px-6 mt-6">
  <div className="bg-green-50 border border-green-100 p-4 rounded-3xl flex items-center gap-4">
    
    <div className="w-14 h-14 bg-white rounded-full flex-shrink-0 border-2 border-green-200 shadow-sm overflow-hidden relative">
      <img 
        src="/teknisyen.webp" 
        alt="Uzman Teknisyen" 
        className="w-full h-full object-cover"
        onError={(e) => { 
          e.target.style.display = 'none'; 
          e.target.parentElement.innerHTML = '<span class="flex items-center justify-center w-full h-full text-2xl">👨‍🔧</span>'; 
        }} 
      />
    </div>

    <div className="flex flex-col leading-tight uppercase font-bold text-left">
      <span className="text-green-700 text-xs">TEKNİSYENİMİZ MÜSAİT!</span>
      <span className="text-green-600 text-[10px] italic">MOTOR, KAZAN VE KART ARIZASI UZMANI</span>
      <span className="text-[9px] text-slate-500 mt-1">⭐ %97 MEMNUNİYET • ✅ GARANTİLİ PARÇA</span>
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





        {/* -- 6. HİZMET KARTLARI (Klima ve Kombi Eklenmiş, Kompakt Versiyon) -- */}
<section className="px-6 py-8 bg-slate-50/80 border-y border-slate-100 text-left mt-8">
  <h2 className="text-[11px] font-black text-[#1E40AF] uppercase italic mb-4 leading-tight">
    {location} GENELİ TÜM ARIZALARDA UZMAN MÜDAHALE
  </h2>
  
  {/* Grid yapısını 3'lüye çektik ki sayfa uzamasın */}
  <div className="grid grid-cols-3 gap-2">
    
    {/* Kart Taslağı - Bu yapıdan 6 tane olacak */}
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
        {/* TIKLAMA EFEKTİ BURADA: 'active:scale-95' kullanıcı dokunduğunda kartın içine çökmesini sağlar */}
        
        {/* Sol Üstte Küçük Canlı Işığı */}
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

        

        {/* -- 7. MÜŞTERİ YORUMLARI -- */}
        <section className="mt-8 px-6 pb-4">
          {/* -- AKILLI SEO VE ARIZA CEVAPLARI (CİHAZA ÖZEL) -- */}
        
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
                "Buzdolabı motoru için geldiler, aynı gün içinde halledip garantisini verdiler. Çok temiz iş."
              </p>
            </div>
            <div className="bg-white p-5 rounded-[30px] border border-slate-100 min-w-[280px] shadow-sm text-left">
              <div className="flex justify-between mb-2 items-center">
                <span className="font-bold text-[11px] uppercase text-slate-800">Sedat Ş.</span>
                <span className="text-yellow-400 text-[10px]">★★★★★</span>
              </div>
              <p className="text-[10px] text-slate-600 italic font-medium leading-relaxed uppercase">
                "Ustalar çok ilgiliydi, Kombi arızasını aynı gün giderdiler. Hem hızlı hem de profesyonel hizmet aldım."
              </p>
            </div>
            <div className="bg-white p-5 rounded-[30px] border border-slate-100 min-w-[280px] shadow-sm text-left">
              <div className="flex justify-between mb-2 items-center">
                <span className="font-bold text-[11px] uppercase text-slate-800">Mustafa K.</span>
                <span className="text-yellow-400 text-[10px]">★★★★★</span>
              </div>
              <p className="text-[10px] text-slate-600 italic font-medium leading-relaxed uppercase">
                "Klimam arızalıydı, aradım aynı gün gelip tamir ettiler. Hem hızlı hem de temiz çalıştılar, garanti vermeleri de ayrı güven verdi."
              </p>
            </div>
            <div className="bg-white p-5 rounded-[30px] border border-slate-100 min-w-[280px] shadow-sm text-left">
              <div className="flex justify-between mb-2 items-center">
                <span className="font-bold text-[11px] uppercase text-slate-800">Murat Z.</span>
                <span className="text-yellow-400 text-[10px]">★★★★★</span>
              </div>
              <p className="text-[10px] text-slate-600 italic font-medium leading-relaxed uppercase">
                "Çamaşır makinesi kazan dönmüyordu, ustalar çok hızlıydı. Fiyatları da piyasaya göre gayet makul."
              </p>
            </div>
            <div className="bg-white p-5 rounded-[30px] border border-slate-100 min-w-[280px] shadow-sm text-left">
              <div className="flex justify-between mb-2 items-center">
                <span className="font-bold text-[11px] uppercase text-slate-800">Fatma D.</span>
                <span className="text-yellow-400 text-[10px]">★★★★★</span>
              </div>
              <p className="text-[10px] text-slate-600 italic font-medium leading-relaxed uppercase">
                "Bulaşık makinesi su sızdırıyordu, parçayı hemen değiştirdiler. Çok kibar ve dürüst esnaflar."
              </p>
            </div>
          </div>
        </section>
        <section className="px-6 py-8 bg-slate-50 border-y border-slate-100 text-left">
          <h2 className="text-[12px] font-black text-[#1E40AF] uppercase italic mb-6">
            {location} {cihazAdi} UZMANI CEVAPLIYOR
          </h2>
          
          <div className="space-y-6">




            {/* --- KOMBİ ANA BÖLÜMÜ --- */}
{cihazKuyrugu === 'kombi' && (
  <div className="grid grid-cols-1 gap-3">
    
    {/* AKILLI ŞALTER: Demirdöküm mü yoksa Genel mi? */}
    {(arizaKuyrugu === 'demirdokum' || arizaKuyrugu === 'demirdöküm') ? (
      
      // 1. SENARYO: DEMİRDÖKÜM ÖZEL (STANDART BEYAZ TASARIM)
      <>
        <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
          <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Demirdöküm Kombi Servisi ve Hızlı Destek</h3>
          <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
            {location} GENELİNDE DEMİRDÖKÜM NİTROMİX, ATRON, ADEMİX VE NEVA MODELLERİ İÇİN <strong>PROFESYONEL GÜVENİLİR SERVİS</strong> HİZMETİ VE 1 YIL GARANTİLİ TAMİR.
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
          <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Demirdöküm Anakart Tamiri</h3>
          <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
            VOLTAJ KAYNAKLI <strong>DEMİRDÖKÜM KART ARIZALARI</strong> VE NİTROMİX ANAKART TAMİRİ İLE YÜKSEK MALİYETLİ PARÇA DEĞİŞİMLERİNE EKONOMİK ÇÖZÜMLER.
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
          <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Demirdöküm Üç Yollu Vana ve Pompa Revizyonu</h3>
          <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
            <strong>DEMİRDÖKÜM ÜÇ YOLLU VANA TAMİRİ</strong> VE SESLİ ÇALIŞAN SİRKÜLASYON POMPASI DEĞİŞİMİ. {location} BÖLGESİNDE DONANIMLI MOBİL EKİPLER.
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
          <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Nitromix F1 / Atrom F4 / Neva F5 Hata Çözümleri</h3>
          <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
            <strong>DEMİRDÖKÜM F1 AŞIRI ISINMA</strong> VE F4 ATEŞLEME HATALARINDA; NTC SENSÖR DEĞİŞİMİ VE FAN MOTORU REVİZYONU İLE KESİN ÇÖZÜM.
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
          <h3 className="text-[10px] font-black text-slate-800 uppercase italic">HİZMET VERDİĞİMİZ DEMİRDÖKÜM KOMBİ MODELLERİ</h3>
          <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
            <strong>DEMİRDÖKÜM ARIZA SERVİSİ</strong> ADEMİX,ADEN,ATROMİX,ATRON CONDENSE,ATRON,İSOMİX,KALİSTO,NEPTO,NEVA,
            NİTROMİX,NİTRON CONDENSE,NİTRON,NİTRON PUS.
          </p>
        </div>
      </>

    ) : (
      
      // 2. SENARYO: GENEL KOMBİ (STANDART BEYAZ TASARIM)
      <>
        <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
          <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Kombi Sıcak Su Vermiyor veya Ateşleme Yapmıyor?</h3>
          <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
            {location} KOMBİ ANAKART TAMİRİ, BAKIMI VE SENSÖR DEĞİŞİMİ. TÜM MARKALARDA 1 YIL GARANTİLİ YERİNDE GÜVENİLİR SERVİS.
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
          <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Kombi Sesli Çalışıyor veya Petekler Isınmıyor mu?</h3>
          <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
            KOMBİ DEVİRDAİM POMPASI DEĞİŞİMİ VE ÜÇ YOLLU VANA REVİZYONU. {location} BÖLGESİNDE ANA EŞANJÖR KİREÇ TEMİZLİĞİ VE NET ÇÖZÜM.
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
          <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Kombi Fan Motoru ve Prosestat Arızaları</h3>
          <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
            FAN MOTORU TAMİRİ, PROSESTAT ARIZASI VE ATEŞLEME TRAFOSU ONARIMI. PROFESYONEL SERVİSİMİZDE SADECE ORİJİNAL YEDEK PARÇA KULLANILIR.
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
          <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Kombi Su Akıtıyor veya Bar Sürekli Düşüyor mu?</h3>
          <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
            GENLEŞME TANKI HAVA BASIMI, EMNİYET VENTİLİ DEĞİŞİMİ VE DOLDURMA MUSLUĞU KAÇAKLARI. {location} ACİL TAMİR DESTEK EKİBİ.
          </p>
        </div>
      </>
    )}

  </div>
)}






{/* Sadece KLİMA linkinde gözükecek - 4 Çeşit SEO Bloğu */}
{cihazKuyrugu === 'klima' && (
  <div className="grid grid-cols-1 gap-3">
    {/* 1. GAZ DOLUMU & KAÇAK TESPİTİ (Yazın En Çok Giden İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Klima soğutmuyor, gazı mı bitti (R410A / R32 Gaz Dolumu)?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        {location} KLİMA GAZ ŞARJI, VAKUMLAMA VE AZOTLA KAÇAK TESPİTİ. R410A, R32 VE R22 GAZ BASIMI SONRASI PERFORMANS ÖLÇÜMÜ ÜCRETSİZ YAPILIR. 
      </p>
    </div>

    {/* 2. KOMPRESÖR & KAPASİTÖR (Ağır Arıza) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Klima dış ünite çalışmıyor veya devreye girmiyor mu?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        {location} KLİMA KOMPRESÖR DEĞİŞİMİ, KAPASİTÖR (KONDANSATÖR) VE TERMİK ARIZALARI. DIŞ ÜNİTE FAN MOTORU REVİZYONU VE DÖRT YOLLU VANA TAMİRİ.
      </p>
    </div>

    {/* 3. İNVERTER KART & ELEKTRONİK (Kaymaklı İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Klima ışıkları yanıp sönüyor ve komut almıyor (Kart Tamiri)?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        KLİMA İNVERTER ANAKART TAMİRİ, SİNYALİZASYON HATASI VE BESLEME KARTI ONARIMI. {location} GARANTİLİ ELEKTRONİK KART REVİZYON MERKEZİ.
      </p>
    </div>

    {/* 4. BAKIM & DRENAJ (Amelelik Ama Temiz İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Klima iç ünite su akıtıyor veya kötü koku mu geliyor?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        İLAÇLI ANTİBAKTERİYEL KLİMA BAKIMI, DRENAJ HATTI TEMİZLİĞİ VE FİLTRE DEĞİŞİMİ. {location} KLİMA MONTAJ-DEMONTAJ VE YER DEĞİŞİMİ HİZMETİ.
      </p>
    </div>
  </div>
)}
            {/* Sadece ÇAMAŞIR MAKİNESİ linkinde gözükecek - 4 Çeşit SEO Bloğu */}
{cihazKuyrugu === 'camasir' && (
  <div className="grid grid-cols-1 gap-3">
    {/* 1. KAZAN & RULMAN (Ağır İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Çamaşır makinesi sıkmada uçak gibi ses çıkarıyor?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        {location} ÇAMAŞIR MAKİNESİ KAZAN RULMAN DEĞİŞİMİ VE TAMİRİ. KAZAN DÜŞMESİ, AMORTİSÖR ARIZASI VE TAMBÖR REVİZYONU YERİNDE VEYA ATÖLYEMİZDE YAPILIR.
      </p>
    </div>

    {/* 2. ANAKART & ELEKTRONİK (Kaymaklı İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Makine ışıkları yanıyor ama çalışmıyor (Kart Tamiri)</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        {location} ÇAMAŞIR MAKİNESİ ANAKART TAMİRİ, BEYİN REVİZYONU VE EKRAN KARTI ONARIMI. KAPI KİLİDİ (KİLİTLEME) VE DİJİTAL SİSTEM ARIZALARI GARANTİLİDİR.
      </p>
    </div>

    {/* 3. MOTOR & KÖMÜR (Net İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Makine su alıyor ama yıkamaya geçmiyor (Motor)</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        MOTOR KÖMÜR DEĞİŞİMİ, KOLLEKTÖR TAŞLAMA VE MOTOR TAKO ARIZASI ÇÖZÜMLERİ. {location} MOTOR DEĞİŞİM FİYATI VE  DESTEK İÇİN HEMEN ARAYIN.
      </p>
    </div>

    {/* 4. POMPA & SU BOŞALTMA (Amelelikten Kurtaran İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Çamaşır makinesi suyu boşaltmıyor ve ses yapıyor?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        TAHLİYE POMPASI DEĞİŞİMİ, TIKANIKLIK GİDERME VE REZİSTANS (ISITMA) ARIZALARI. {location} ACİL SERVİS EKİPLERİMİZ 1 SAATTE ADRESİNİZDE.
      </p>
    </div>
  </div>
)}
            

            {/* Sadece BUZDOLABI linkinde gözükecek - 4 Çeşit SEO Bloğu */}
{cihazKuyrugu === 'buzdolabi' && (
  <div className="grid grid-cols-1 gap-3">
    {/* 1. MOTOR & KOMPRESÖR */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Buzdolabı motor (kompresör) kalkış yapmıyor?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        {location} BUZDOLABI MOTOR DEĞİŞİMİ VE İNVERTER KOMPRESÖR REVİZYONU YAPIYORUZ. R600 GAZ ŞARJI, TERMİK VE RÖLE ARIZALARI YERİNDE ONARILIR.
      </p>
    </div>

    {/* 2. KART & BEYİN */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Buzdolabı dijital ekran kartı ve beyin tamiri</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        BUZDOLABI ANAKART TAMİRİ, EKRAN GİDİP GELMESİ VE BESLEME KARTI ARIZALARINDA {location} ATÖLYEMİZDE GARANTİLİ ELEKTRONİK ONARIM SAĞLIYORUZ.
      </p>
    </div>

    {/* 3. GAZ KAÇAĞI & SOĞUTMA */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Dolap altı soğutuyor üstü soğutmuyor (Gaz Kaçağı)</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        GÖVDE İÇİ GAZ KAÇAĞI, DIŞ KONDANSER UYGULAMASI VE DRAYER DEĞİŞİMİ İLE SOĞUTMA PERFORMANSINI ARTIRIYORUZ. VAKUMLAMA VE GAZ DOLUMU YAPILIR.
      </p>
    </div>

    {/* 4. DEFROST & SENSÖR */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">No-frost buzlanma ve karlanma arızası çözümü</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        BİYOMETAL SENSÖR, REZİSTANS VE DEFROST ZAMANLAYICI DEĞİŞİMİ İLE KARLANMA SORUNUNU KÖKTEN ÇÖZÜYORUZ. {location} ACİL SERVİS.
      </p>
    </div>
  </div>
)}

{/* Sadece DERİN DONDURUCU linkinde gözükecek - 4 Çeşit SEO Bloğu */}
{cihazKuyrugu === 'dondurucu' && (
  <div className="grid grid-cols-1 gap-3">
    {/* 1. MOTOR & KOMPRESÖR */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50 text-left">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Dondurucu motoru (kompresör) çok ısınıyor ve duruyor mu?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        {location} DERİN DONDURUCU MOTOR DEĞİŞİMİ VE KOMPRESÖR KİLİTLENMESİ REVİZYONU YAPIYORUZ. R600A GAZ ŞARJI, ŞOKLAMA VE TERMİK ARIZALARI YERİNDE ONARILIR.
      </p>
    </div>

    {/* 2. KART & ELEKTRONİK */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50 text-left">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Dondurucu dijital panel kartı ve beyin revizyonu</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        DERİN DONDURUCU ANAKART TAMİRİ, {location} MERKEZİMİZDE GARANTİLİ ELEKTRONİK ONARIM SAĞLIYORUZ.
      </p>
    </div>

    {/* 3. GAZ KAÇAĞI & SOĞUTMA */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50 text-left">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Dondurucu gıdaları eritiyor ve soğutma yapmıyor?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        GÖVDE İÇİ GAZ KAÇAĞI TESPİTİ, VAKUMLAMA VE ORİJİNAL GAZ DOLUMU İLE SOĞUTMA PERFORMANSINI ARTIRIYORUZ. {location} ACİL ARIZA SERVİSİ.
      </p>
    </div>

    {/* 4. SENSÖR & TERMOSTAT */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50 text-left">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Kırmızı ışık (Alarm) uyarısı ve karlanma sorunu</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        TERMOSTAT ARIZALARI, SENSÖR DEĞİŞİMİ VE SİSTEM TIKANIKLIĞI GİDERİLEREK KARLANMA SORUNUNU KÖKTEN ÇÖZÜYORUZ. GIDALARINIZ BOZULMADAN {location} ACİL MÜDAHALE.
      </p>
    </div>
  </div>
)}



{/* Sadece BULAŞIK MAKİNESİ linkinde gözükecek - 4 Çeşit SEO Bloğu */}
{cihazKuyrugu === 'bulasik' && (
  <div className="grid grid-cols-1 gap-3">
    {/* 1. ISITMA POMPASI & MOTOR (En Karlı İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Bulaşık makinesi suyu ısıtmıyor ve kurutmuyor mu?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        {location} BULAŞIK MAKİNESİ ISITMA POMPASI DEĞİŞİMİ VE YIKAMA MOTORU REVİZYONU. REZİSTANS ARIZASI, SİRKÜLASYON POMPASI VE MOTOR TAKO ONARIMI GARANTİLİDİR.
      </p>
    </div>

    {/* 2. ANAKART & BEYİN (Elektronik İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Makine programda takılıyor veya ışıklar yanıp sönüyor?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        {location} BULAŞIK MAKİNESİ ANAKART TAMİRİ VE BEYİN REVİZYONU. DİJİTAL EKRAN HATALARI, PROGRAM İPTALİ VE BESLEME KARTI ARIZALARI YERİNDE ÇÖZÜLÜR.
      </p>
    </div>

    {/* 3. TEMİZLİK & FISKİYE (Performans İşi) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Bulaşıklar kirli çıkıyor ve makine sesli çalışıyor?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        FISKİYE TEMİZLİĞİ, VENTİL DEĞİŞİMİ VE SU DAĞITICI MOTORU (DİSTRİBÜTÖR) ARIZALARI. {location}  SERVİSİMİZDE ORİJİNAL YEDEK PARÇA KULLANILIR.
      </p>
    </div>

    {/* 4. SU BOŞALTMA & TAŞMA (Acil İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Bulaşık makinesi su boşaltmıyor veya altına su kaçırıyor?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        TAHLİYE POMPASI DEĞİŞİMİ, ŞAMANDIRA (TAŞMA) ARIZASI VE HORTUM KAÇAKLARI. {location} ACİL BULAŞIK MAKİNESİ TAMİRCİSİ 1 SAATTE KAPINIZDA.
      </p>
    </div>
  </div>
)}

{/* Sadece FIRIN linkinde gözükecek - 4 Çeşit SEO Bloğu */}
{cihazKuyrugu === 'firin' && (
  <div className="grid grid-cols-1 gap-3">
    
    {/* 1. REZİSTANS & ISINMA ARIZALARI (Net İş) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50 text-left">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Fırın altı pişirmiyor veya sigorta mı attırıyor?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        {location} FIRIN REZİSTANS DEĞİŞİMİ, ALT-ÜST ISITICI ONARIMI VE TERMOSTAT ARIZALARI. SİGORTA ATTIRAN KAÇAKLARDA VE ISI KAYIPLARINDA ORİJİNAL PARÇA İLE 1 YIL GARANTİLİ ÇÖZÜM.
      </p>
    </div>

    {/* 2. ANAKART & DİJİTAL SAAT (Kaymaklı İş - Yüksek Marj) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50 text-left">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Fırın ekranı gelmiyor veya ayar tutmuyor (Kart Tamiri)?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        {location} FIRIN ANAKART TAMİRİ, DİJİTAL SAAT REVİZYONU VE DOKUNMATİK PANEL ONARIMI. ELEKTRONİK BEYİN ARIZALARINDA YÜKSEK MALİYETLİ DEĞİŞİM YERİNE EKONOMİK VE GARANTİLİ TAMİR MERKEZİ.
      </p>
    </div>

    {/* 3. FAN MOTORU & TURBO (Ağır Arıza) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50 text-left">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Fırın sesli çalışıyor veya turbo fanı dönmüyor mu?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        FIRIN FAN MOTORU DEĞİŞİMİ, PERVANE SES ARIZALARI VE SOĞUTMA FANI REVİZYONU. {location} BÖLGESİNDE YÜKSEK DEVİRLİ VE SESLİ ÇALIŞAN TURBO FIRINLARDA YERİNDE ACİL MÜDAHALE.
      </p>
    </div>

    {/* 4. ANKASTRE & ŞALTER (Profesyonel Hizmet) */}
    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-50 text-left">
      <h3 className="text-[10px] font-black text-slate-800 uppercase italic">Ankastre fırın elektrik almıyor veya kendi kendine kapanıyor?</h3>
      <p className="text-[9px] text-slate-500 mt-1 leading-tight font-bold uppercase">
        ANKASTRE FIRIN ŞALTER DEĞİŞİMİ, KOMÜTATÖR ARIZALARI VE KABLO TESİSATI YENİLEME. {location} GENELİNDE TÜM MARKALARDA YETKİLİ SERVİS KALİTESİNDE BAĞIMSIZ ÖZEL SERVİS DESTEĞİ.
      </p>
    </div>

  </div>
)}
            
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

      

   {/* -- 9 & 10. KURUMSAL VE FOOTER BİRLEŞİK -- */}
<footer className="mt-8 bg-slate-50 border-t border-slate-200 px-6 pt-10 pb-1 text-center">
  
  {/* KURUMSAL BİLGİ BLOĞU (Botlar Bayılır) */}
  <div className="flex flex-col gap-8 mb-10 text-left max-w-md mx-auto">
    </div>
    

  {/* SENİN MEVCUT LİNKLERİN */}
  <div className="flex justify-center gap-6 mb-6 uppercase font-bold text-[10px] text-slate-400">
    <Link href="/hakkimizda" className="hover:text-[#1E40AF]">HAKKIMIZDA</Link>
    <Link href="/gizlilik" className="hover:text-[#1E40AF]">GİZLİLİK</Link>
    <Link href="/iletisim" className="hover:text-[#1E40AF]">İLETİŞİM</Link>
  </div>

  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em] mb-4">© 2026 UZMAN BÖLGE SERVİS</p>

  {/* İŞTE O HAYALET YAZI (Butonun tam arkasında kalacak yer) */}
  <div className="mt-10">
    <p className="text-[5px] text-[#f2f2f2] leading-none select-none pointer-events-none tracking-tight inline-block">
      İşletme Yetkilisi: Emircan Küçükoğlu — Belge No: 2018964612dmWL37081299257
    </p>
  </div>
</footer>

        {/* -- 11. SABİT BUTONLAR (WhatsApp ve Arama) -- */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] p-4 z-[100] bg-gradient-to-t from-white via-white/80 to-transparent">
          
          

          <a 
            href={`tel:${siteTel}`} 
            aria-label={`Acil ${location} Beyaz Eşya Tamircisi Çağırmak İçin Tıklayın`}
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

        {/* -- 12. JSON-LD (SEO) -- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": `Uzman Bölge Servis - ${location} Beyaz Eşya Servisi`,
              "image": "https://uzmanbolgeservis.com.tr/usta.webp",
              "telephone": siteTel,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": location,
                "addressRegion": "İstanbul",
                "addressCountry": "TR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "21389"
              },
              "description": `${location} garantili beyaz eşya servisi ve buzdolabı servisi. En yakın bulaşık makinesi tamircisi, buzdolabı motor değişimi, alt kısım soğutmuyor arızası ve çamaşır makinesi su akıtıyor sorunları için aynı gün acil müdahale.`,
              "areaServed": location,
              "knowsAbout": ["Buzdolabı Tamiri", "Çamaşır Makinesi Tamiri", "Bulaşık Makinesi Tamiri", "Motor Değişimi", "Kart Tamiri"],
              "keywords": "bulaşık makinesi tamircisi, Beyaz Eşya Servisi, Buzdolabı Tamiri, buzdolabı motor değişimi, çamaşır makinesi tamircisi, buzdolabı gaz dolumu, acil tamir ustası, bosch, arçelik, beko, altus, profilo, vestel, siemens garantili özel servis",
              "priceRange": "₺₺"
            })
          }}
        />

      </div>
    </main>
  );
}
