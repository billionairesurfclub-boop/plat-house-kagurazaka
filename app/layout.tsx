import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス神楽坂 | 神楽坂駅1分 80㎡1LDK 最大10名 民泊",
  description:
    "神楽坂駅（東京メトロ東西線）徒歩1分。80㎡の広々とした1LDKで最大10名。Netflix・Nintendo Switch・キッチン・浴槽・ソファー・ボタニスト完備。グループ・ファミリー旅行に最適。",
  keywords:
    "ぷらっとハウス神楽坂, 神楽坂 民泊, 神楽坂 宿泊, 神楽坂駅 民泊, 新宿区 グループ宿泊, Kagurazaka accommodation, Tokyo group stay, 神楽坂 最大10名",
  openGraph: {
    title: "ぷらっとハウス神楽坂 | 神楽坂駅1分 80㎡1LDK 最大10名",
    description:
      "神楽坂駅1分。80㎡の1LDKで最大10名。Netflix・Switch・キッチン・浴槽・ボタニスト完備。",
    url: "https://kagurazaka.plat-house.jp",
    siteName: "Plat House Kagurazaka",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://kagurazaka.plat-house.jp",
    languages: {
      "ja": "https://kagurazaka.plat-house.jp",
      "en": "https://kagurazaka.plat-house.jp/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9QD6HLVGB7" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9QD6HLVGB7');
        `}</Script>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス神楽坂",
          "url": "https://kagurazaka.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "矢来町１０８",
            "addressLocality": "新宿区",
            "addressRegion": "東京都",
            "postalCode": "162-0065",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥35,000〜¥70,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "浴槽", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
