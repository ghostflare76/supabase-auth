import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

// Pacifico 폰트 로드
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "TranslateX - 언어 번역 서비스",
  description: "TranslateX는 다양한 언어 번역 서비스를 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pacifico.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
