import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Movico | Movie Genre Survey Research",
  description: "A comprehensive survey research project analyzing movie-watching preferences and behaviors. Discover insights about cinema experiences, genre preferences, and viewing habits.",
  keywords: ["movie survey", "cinema research", "genre preferences", "film analysis", "movie data"],
  authors: [{ name: "AyaNexus" }],
  openGraph: {
    title: "Movico | Movie Genre Survey Research",
    description: "Comprehensive research analyzing movie-watching preferences and behaviors",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-darker text-white`}
      >
        <div className="film-grain" />
        {children}
      </body>
    </html>
  );
}
