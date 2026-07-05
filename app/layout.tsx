import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス西新宿5丁目 | 西新宿5丁目駅3分 民泊 最大8名 4客室",
  description:
    "西新宿5丁目駅徒歩3分。30㎡×2室・35㎡×2室の計4客室で最大8名。Netflix・Nintendo Switch・キッチン・ソファー・ボタニスト・翻訳機完備。新宿観光・グループ旅行に最適。",
  keywords:
    "ぷらっとハウス西新宿5丁目, 西新宿5丁目 民泊, 西新宿 宿泊, 新宿 グループ宿泊, 西新宿5丁目駅 民泊, Nishi-Shinjuku accommodation, Tokyo group stay, 新宿 最大8名",
  openGraph: {
    title: "ぷらっとハウス西新宿5丁目 | 西新宿5丁目駅3分 最大8名",
    description:
      "西新宿5丁目駅3分。4客室・最大8名。Netflix・Switch・キッチン・ボタニスト・翻訳機完備。",
    url: "https://nishishinjuku5.plat-house.jp",
    siteName: "Plat House Nishi-Shinjuku 5",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://nishishinjuku5.plat-house.jp",
    languages: {
      "ja": "https://nishishinjuku5.plat-house.jp",
      "en": "https://nishishinjuku5.plat-house.jp/en",
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
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス西新宿5丁目",
          "url": "https://nishishinjuku5.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "本町3-22-9",
            "addressLocality": "渋谷区",
            "addressRegion": "東京都",
            "postalCode": "151-0071",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥15,000〜¥40,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "翻訳機", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
