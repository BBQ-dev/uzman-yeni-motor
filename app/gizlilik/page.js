"use client";
import React from 'react';
import Link from 'next/link';

export default function Gizlilik() {
  return (
    <main className="w-full min-h-screen bg-slate-50 font-sans text-slate-900 pb-20 text-left">
      <div className="max-w-[600px] mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
        <header className="w-full bg-[#1E40AF] text-white p-6 rounded-b-[40px] shadow-lg text-left">
          <Link href="/" className="text-xs font-bold opacity-70 mb-2 block">← GERİ DÖN</Link>
          <h1 className="text-2xl font-black italic uppercase">Gizlilik ve Veri Güvenliği</h1>
        </header>

        <section className="p-8 leading-relaxed text-[11px] text-slate-600 space-y-4">
          <p className="font-bold text-slate-900 text-sm">Kişisel Verilerin Korunması</p>
          <p>
            Uzman Bölge Servisi olarak, müşterilerimizin kişisel verilerinin korunması bizim için esastır. Bize telefon veya WhatsApp üzerinden ilettiğiniz isim, telefon numarası ve adres gibi bilgiler sadece servis kaydınızın oluşturulması ve hizmetin sağlanması amacıyla kullanılır.
          </p>
          <p>
            Kişisel verileriniz asla üçüncü taraflarla paylaşılmaz ve reklam amacıyla satılmaz. KVKK kapsamında verileriniz üzerinde her zaman hak sahibi olduğunuzu hatırlatırız.
          </p>
          
          <p className="font-bold text-slate-900 text-sm">Çerez Politikası</p>
          <p>
            Sitemiz, Google Ads performansını ölçmek ve kullanıcı deneyimini iyileştirmek amacıyla standart çerezler kullanabilir. Bu veriler anonimdir ve kimliğinizi doğrudan açığa çıkarmaz.
          </p>

          <p className="font-bold text-slate-900 text-sm">Özel Servis Beyanı</p>
          <p>
            Bu web sitesinde yer alan tüm marka logoları ve isimleri, kullanıcıların servis ihtiyacını doğru ifade etmesi amacıyla kullanılan referans nitelikli bilgilerdir. Firmamız özel bir servis olup, hiçbir markanın resmi yetkili servisi değildir.
          </p>

          {/* --- YASAL ZIRH KUTUCUĞU --- */}
          <div className="mt-8 p-4 bg-slate-100 border border-slate-200 rounded-xl">
            <p className="font-bold text-slate-800 text-[12px] uppercase mb-2">Hizmet ve Sorumluluk Sınırlandırması</p>
            <p className="text-[10px] text-slate-500 leading-normal text-justify">
              uzmanbolgeservis.com.tr, servis talebinde bulunan kullanıcılar ile bağımsız hizmet sağlayıcılarını bir araya getiren bir platformdur. 
              Sistemimiz üzerinden yönlendirilen hizmetlerin bir kısmı, platformumuzdan bağımsız çalışan <strong>üçüncü taraf çözüm ortağı teknisyenler</strong> tarafından sunulmaktadır. 
              Fiilen verilen tamir, yedek parça değişimi ve işçilik hizmetlerinden doğabilecek her türlü, maddi veya hukuki sorumluluk; 
              hizmeti gerçekleştiren ilgili şahıs veya firmaya aittir. Platformumuz, bu bağımsız servislerin garanti süreçlerinden, 
              fiyatlandırmasından veya uygulama hatalarından sorumlu tutulamaz. Hizmet alan kullanıcılar bu bilgilendirmeyi kabul etmiş sayılır.
            </p>
          </div>
          {/* -------------------------- */}

        </section>
      </div>
    </main>
  );
}