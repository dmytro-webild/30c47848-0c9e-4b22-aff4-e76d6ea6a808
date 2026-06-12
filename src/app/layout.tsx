import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'রন্ধন শালা | স্বাদ ও প্রকৃতির এক অপূর্ব মেলবন্ধন',
  description: 'কোলাহলমুক্ত ও মনোরম প্রাকৃতিক পরিবেশে আধুনিক ও সুস্বাদু খাবারের আসল স্বাদ নিন একমাত্র রন্ধন শালা-য়। আমাদের বিশেষ মেন্যু দেখুন এবং আপনার পরবর্তী খাবারের জন্য টেবিল রিজার্ভ করুন।',
  openGraph: {
    "title": "রন্ধন শালা | স্বাদ ও প্রকৃতির এক অপূর্ব মেলবন্ধন",
    "description": "কোলাহলমুক্ত ও মনোরম প্রাকৃতিক পরিবেশে আধুনিক ও সুস্বাদু খাবারের আসল স্বাদ নিন একমাত্র রন্ধন শালা-য়। আমাদের বিশেষ মেন্যু দেখুন এবং আপনার পরবর্তী খাবারের জন্য টেবিল রিজার্ভ করুন।",
    "url": "/",
    "siteName": "রন্ধন শালা",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/table-texture-looking-out-men-bar_23-2147701331.jpg",
        "alt": "Restaurant ambiance with dimmed lighting"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "রন্ধন শালা | স্বাদ ও প্রকৃতির এক অপূর্ব মেলবন্ধন",
    "description": "কোলাহলমুক্ত ও মনোরম প্রাকৃতিক পরিবেশে আধুনিক ও সুস্বাদু খাবারের আসল স্বাদ নিন একমাত্র রন্ধন শালা-য়। আমাদের বিশেষ মেন্যু দেখুন এবং আপনার পরবর্তী খাবারের জন্য টেবিল রিজার্ভ করুন।",
    "images": [
      "http://img.b2bpic.net/free-photo/table-texture-looking-out-men-bar_23-2147701331.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
