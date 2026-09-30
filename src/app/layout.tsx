import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import FilmGrain from "@/components/FilmGrain";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bodySans = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AEL Chauffeurs | Signature Executive Chauffeur Service",
  description:
    "AEL Chauffeurs deliver white-glove executive travel across the UK — airport transfers, corporate events, chauffeur tours and weddings in a fleet of Mercedes-Benz S-Class, V-Class and E-Class vehicles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displaySerif.variable} ${bodySans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)] font-body">
        <ScrollProgress />
        <FilmGrain />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
