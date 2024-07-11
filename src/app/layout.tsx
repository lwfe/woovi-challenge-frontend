import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Woovi Frontend Challenge",
  description: "This is the Woovi Frontend Challenge :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
