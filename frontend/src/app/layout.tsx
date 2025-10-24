import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMapsScript from "@/components/GoogleMapsScript";
import RecaptchaScript from "@/components/RecaptchaScript";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
});

// Bengali font support
const bengaliFont = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bengali Society of Melbourne | BSM | Durga Puja Melbourne 2025 | বাংলা সমাজ মেলবোর্ন",
  description: "Bengali Society of Melbourne (BSM) - Melbourne's premier Bengali cultural organization since 2012. Experience authentic Durgotsav (Durga Puja), Kalipuja, Saraswati Puja, Pohela Boishakh and Bengali festivals in Victoria. Join Melbourne's largest Bengali community for cultural events, volunteering, and heritage preservation.",
  keywords: "Bengali Society Melbourne, BSM, Durgotsav Melbourne, Durga Puja Melbourne 2025, বাংলা সমাজ মেলবোর্ন, দুর্গোৎসব, Bengali community Melbourne, Durgotsav Melbourne, Kalipuja Melbourne, Saraswati Puja Melbourne, Pohela Boishakh Melbourne, Bengali cultural events Victoria, Bengali festivals Australia, Melbourne Durga Puja, BSM Durgotsav, Bengali community Victoria, multicultural Melbourne, Indian festivals Melbourne, Point Cook Bengali community",
  authors: [{ name: "Bengali Society of Melbourne" }],
  creator: "Bengali Society of Melbourne",
  publisher: "Bengali Society of Melbourne",
  robots: "index, follow",
  openGraph: {
    title: "Bengali Society of Melbourne | BSM | Bengali Cultural Community",
    description: "Melbourne's premier Bengali cultural organization since 2012. Join us for traditional festivals, community events and cultural preservation in Victoria.",
    url: "https://bsm.org.au",
    siteName: "Bengali Society of Melbourne",
    images: [
      {
        url: "/bsm-logo.png",
        width: 1200,
        height: 630,
        alt: "Bengali Society of Melbourne - BSM Logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengali Society of Melbourne | BSM Bengali Community",
    description: "Melbourne's premier Bengali cultural organization. Traditional festivals, community events and cultural preservation.",
    creator: "@BSMMelbourne",
    images: ["/bsm-logo.png"],
  },
  icons: {
    icon: '/bsm-logo.png',
    shortcut: '/bsm-logo.png',
    apple: '/bsm-logo.png',
  },
  metadataBase: new URL('https://bsm.org.au'),
  alternates: {
    canonical: "https://bsm.org.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className={`${inter.className} ${bengaliFont.variable} antialiased`}>
        <Providers>
          <GoogleMapsScript />
          <RecaptchaScript />
          <Header />
          <main className="pt-16 sm:pt-20 min-h-screen" role="main">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
