import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // можно указать нужные веса
});


export const metadata: Metadata = {
  title: "GardEva",
  description: "Сайт гардероб",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
