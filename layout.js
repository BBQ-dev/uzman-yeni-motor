import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// -- SEO AYARLARI (Arama Motoru İçin) --
export const metadata = {
  title: "Uzman Bölge Servis | Profesyonel Beyaz Eşya Servisi",
  description: "İstanbul geneli buzdolabı, çamaşır ve bulaşık makinesi arızalarında %100 garantili, hızlı ve güvenilir özel servis hizmeti.",
  keywords: "beyaz eşya servisi, hızlı servis, buzdolabı tamiri, kombi servis servis, çamaşır makinesi tamircisi, acil usta",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico", 
  },
};

// -- MOBİL GÖRÜNÜM AYARLARI (Next.js 14 Yeni Kuralı) --
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col m-0 p-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

