import type { Metadata } from "next";
import "./globals.css";
import "@/app/fonts/lufga-webfont/style.css"

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
