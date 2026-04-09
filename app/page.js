import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* 1. VİTRİN: AĞIR ARIZA ŞOVRUMU (Kırmızı & Siyah Agresif Tasarım) */}
      <header className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-4 text-center border-b-8 border-red-600">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Yalnızca <span className="text-red-500">Ağır Arızalarda</span> <br /> Kesin ve Garantili Çözüm
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300">
            Kombi, Klima ve Beyaz Eşyada; <strong className="text-white">Motor, Anakart, Kazan ve Kompresör</strong> arızalarına profesyonel müdahale ediyoruz. Ufak işlerle vakit kaybetmiyor, cihazınızın kalbini onarıyoruz.
          </p>
          <a 
            href="tel:+905555555555" 
            className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg text-2xl hover:bg-red-700 transition shadow-lg shadow-red-500/50"
          >
            Ağır Arıza Ustası Çağır
          </a>
          <p className="mt-4 text-sm text-gray-400">7/24 Nöbetçi V8 Motorlu Uzman Ekip</p>
        </div>
      </header>

      {/* 2. SÜZGEÇ: PASİF GELİR HAVUZU (Komisyonluk İşler İçin) */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Basit Arızalar ve Diğer Talepler İçin De Yanınızdayız!
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Basit su akıtmaları, filtre değişimleri, rutin bakımlar veya servis bölgemiz dışındaki talepleriniz için; kalitesini onayladığımız <strong className="text-gray-900">anlaşmalı uzman usta ağımızı</strong> adresinize anında yönlendiriyoruz.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-300 transition border border-gray-300">
            Arıza Kaydı Bırak
          </button>
          {/* ÖRNEK DİNAMİK LİNK YÖNLENDİRMESİ */}
          <Link 
            href="/beyaz-esya-servisi/umraniye?cihaz=kombi&ariza=pompa" 
            className="bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-900 transition"
          >
            Özel Servis Bölgelerimiz
          </Link>
        </div>
      </section>

      {/* 3. GÜVEN BÖLÜMÜ (Google Ads Kalite Puanı İçin Şart) */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-red-600 text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-2">Orijinal Yedek Parça</h3>
            <p className="text-gray-600">Değişen tüm ağır motor ve anakart parçalarında 1 yıl resmi garanti veriyoruz.</p>
          </div>
          <div className="p-6">
            <div className="text-red-600 text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold mb-2">Nokta Atışı Müdahale</h3>
            <p className="text-gray-600">Deneme yanılma yapmıyoruz. Arızayı cihazla tespit edip direkt kalbine iniyoruz.</p>
          </div>
          <div className="p-6">
            <div className="text-red-600 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">Şeffaf Fiyatlandırma</h3>
            <p className="text-gray-600">İşlem öncesi maliyeti netleştirir, sürpriz masraf çıkarmayız.</p>
          </div>
        </div>
      </section>

    </div>
  );
}