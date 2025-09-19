import "./globals.css";
import localFont from "next/font/local";

const uncutSans = localFont({
  src: [
    {
      path: "../../public/fonts/UncutSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--uncut-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
