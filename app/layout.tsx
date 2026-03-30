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
  title: "Gulf Business Solutions (GBS) | BIM Consulting | Your Digital Innovation Partner",
  description:
    "Gulf Business Solutions (GBS) — the KSA entity of CNS — is an ISO 9001:2015, ISO/IEC 20000-1:2018 & ISO/IEC 27001:2022 certified BIM consulting firm. Delivering lifecycle BIM solutions for AEC projects across Saudi Arabia, GCC and beyond.",
  keywords:
    "BIM consulting, Autodesk Silver Partner, Gulf Business Solutions, GBS, CNS, Saudi Arabia, KSA, Building Information Modeling, Revit, Navisworks, Civil 3D, Engineering on Demand, CAD BIM services, WorkEngin workstations",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
