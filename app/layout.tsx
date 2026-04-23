import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maggie Yang | AI Product Manager",
  description:
    "Wanyu (Maggie) Yang — AI Product Manager. Former Huawei AI PM. MBA from UBC Sauder. Building the future of intelligent products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-[#020817] text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
