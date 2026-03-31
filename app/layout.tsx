import type { Metadata } from "next";
import { Poppins, Open_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./_components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gulf Business Solutions (GBS) | BIM Consulting | KSA AEC Innovation",
  description:
    "Gulf Business Solutions (GBS) — ISO certified BIM consulting firm. Delivering lifecycle BIM, digital twins, and strategic AEC solutions across Saudi Arabia and the GCC.",
  keywords:
    "BIM consulting KSA, Saudi Arabia BIM, Digital Twin Saudi, Autodesk Silver Partner KSA, Revit services Riyadh, BIM ROI calculator, Clash detection services",
  authors: [{ name: "GBS Technical Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  alternates: {
    canonical: "https://gulfbusinesssolutions.com",
  },
  openGraph: {
    title: "GBS | Building the Future with BIM",
    description: "ISO certified BIM consulting and lifecycle solutions for Saudi Arabia's AEC sector.",
    url: "https://gulfbusinesssolutions.com",
    siteName: "Gulf Business Solutions",
    locale: "en_SA",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gulf Business Solutions (GBS)",
  "url": "https://gulfbusinesssolutions.com",
  "logo": "https://gulfbusinesssolutions.com/logo.png",
  "description": "ISO certified BIM consulting firm specializing in AEC digital transformation in Saudi Arabia.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SA"
  },
  "certification": [
    "ISO 9001:2015",
    "ISO/IEC 27001:2022"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${openSans.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full"
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
