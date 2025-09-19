import "./globals.css";
import localFont from "next/font/local";
import { Chivo_Mono } from "next/font/google";

const uncutSans = localFont({
  src: [
    {
      path: "../../public/fonts/UncutSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-uncut-sans",
  display: "swap",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chivo-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={uncutSans.variable}>
      <body>{children}</body>
    </html>
  );
}
