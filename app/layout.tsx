import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GDG ÉTS — Hub & Arène",
    template: "%s · GDG ÉTS",
  },
  description:
    "Le hub de la communauté GDG ÉTS : ateliers, conférences, articles, événements et arène de programmation compétitive.",
  openGraph: {
    title: "GDG ÉTS — Hub & Arène",
    description:
      "Ateliers, conférences, articles, événements et arène de programmation compétitive de GDG ÉTS.",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
