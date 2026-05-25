import type { Metadata, Viewport } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diegoosorio.dev"),
  title: {
    default: "Diego Osorio | Ingeniero de Software & DevOps",
    template: "%s | Diego Osorio",
  },
  description:
    "Portafolio de Diego Alberto Osorio Lopez — Full Stack & Cloud Engineer especializado en AWS, CI/CD, React Native y arquitecturas SaaS multitenant con IA generativa.",
  keywords: [
    "DevOps",
    "Full Stack",
    "AWS",
    "React Native",
    "Next.js",
    "NestJS",
    "CI/CD",
    "Diego Osorio",
    "Ingeniero de Software",
    "Cloud Engineer",
  ],
  authors: [{ name: "Diego Alberto Osorio Lopez" }],
  creator: "Diego Alberto Osorio Lopez",
  openGraph: {
    title: "Diego Osorio | Software & DevOps Engineer",
    description:
      "Especialista en SDLC, serverless AWS, CI/CD y desarrollo móvil con IA Generativa.",
    type: "website",
    locale: "es_MX",
    siteName: "Diego Osorio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Osorio | Software & DevOps Engineer",
    description:
      "Especialista en SDLC, serverless AWS, CI/CD y desarrollo móvil con IA Generativa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}
