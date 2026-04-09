"use client";
import React from 'react';
import Link from 'next/link';

export default function Hakkimizda() {
  return (
    <main className="w-full min-h-screen bg-slate-100 font-sans text-slate-900 pb-20 text-left">
      <div className="max-w-[600px] mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
        
        {/* Üst Header - Daha Derin ve Karizmatik */}
        <header className="w-full bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] text-white p-8 rounded-b-[50px] shadow-xl">
          <Link href="/" className="text-[10px] font-bold opacity-80 tracking-widest mb-4 block uppercase">
            ← ANA SAYFAYA DÖN
          </Link>
          <h1 className="text-3xl font-black italic uppercase leading-none tracking-tighter">
            UZMAN BÖLGE SERVİSİ <br/> 
            <span className="text-blue-300 text-lg not-italic font-medium">Kurumsal Tamir Çözümleri</span>
          </h1>
        </header>

        <section className="p-8 space-y-8">
          
          {/* Vizyon Metni - Ağır Arıza Vurgusu */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-800 border-l-4 border-blue-600 pl-3 uppercase italic">
              Biz Kimiz?
            </h2>
            <p className="text-[13px] text-slate-600 leading-relaxed font-medium text-justify">
              Uzman Bölge Servis <strong>"Profesyonel"</strong> uzmanlığı sunan bir tamir merkezidir. 15 yılı aşkın sahadaki tecrübemizle, basit çözümler yerine; <strong>Anakart tamiri, Kompresör değişimi ve Sistem revizyonu</strong> gibi yüksek mühendislik gerektiren işlemlereisim, sadece bir onarım birimi değil; beyaz eşya, kombi ve klima teknolojilerinde odaklanıyoruz.
            </p>
          </div>

          {/* İstatistik / Güven Kutuları */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
              <span className="block text-2xl font-black text-blue-700">15+</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Yıllık Tecrübe</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
              <span className="block text-2xl font-black text-blue-700">%100</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Orijinal Parça</span>
            </div>
          </div>

          {/* Hizmet Standartları - İkonlu Görünüm */}
          <div className="bg-[#1E40AF] p-6 rounded-[32px] shadow-inner text-white">
            <h3 className="text-sm font-black mb-4 uppercase tracking-wider text-blue-200">Hizmet Standartlarımız</h3>
            <ul className="space-y-3 text-[12px] font-bold italic">
              <li className="flex items-center gap-3">
                <span className="bg-blue-500/30 p-1 rounded-full text-white text-[10px]">✔</span> 
                1 YIL YAZILI PARÇA VE İŞÇİLİK GARANTİSİ
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-blue-500/30 p-1 rounded-full text-white text-[10px]">✔</span> 
                PROFESYONEL ANAKART ONARIM MERKEZİ
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-blue-500/30 p-1 rounded-full text-white text-[10px]">✔</span> 
                AYNI GÜN MOBİL EKİP YÖNLENDİRMESİ
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-blue-500/30 p-1 rounded-full text-white text-[10px]">✔</span> 
                ŞEFFAF VE ONAYLI FİYATLANDIRMA
              </li>
            </ul>
          </div>

          {/* Uzmanlık Vurgusu */}
          <div className="pt-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 leading-relaxed italic text-center font-semibold uppercase">
              "Basit işlerin ameleliğini değil, karmaşık arızaların ustalığını yapıyoruz."
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}