import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const ui = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ui",
});

const cn = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cn",
});

export const metadata: Metadata = {
  title: "秦子雯 · Personal Universe",
  description: "ART MARKET · BRAND · CONTENT · AIGC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={`${display.variable} ${ui.variable} ${cn.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
