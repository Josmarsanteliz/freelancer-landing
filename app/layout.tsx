import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GeometricBackground from "@/components/GeometricBackground";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { ContactModalProvider } from "@/components/ContactModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Josmar Santeliz — Desarrollador de Software Freelance",
  description:
    "Landings, webs corporativas y aplicaciones full-stack con Next.js, TypeScript y Supabase.",
  openGraph: {
    title: "Josmar Santeliz — Desarrollador de Software Freelance",
    description:
      "Landings, webs corporativas y apps full-stack con Next.js, TypeScript y Supabase.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <ContactModalProvider>
            <GeometricBackground />
            <Navbar />
            <main className="flex-1">{props.children}</main>
            <Footer />
          </ContactModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
