import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "Teste Legaplan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
