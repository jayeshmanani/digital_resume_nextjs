import { Outfit, Roboto_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata = {
  title: "Jayesh Manani | Cyber Security Analyst",
  description: "Portfolio of Jayesh Manani, a Cyber Security Analyst and Cloud Security Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${robotoMono.variable}`}>
      <body
        className="bg-bg text-text selection:bg-primary/30 selection:text-primary"
        suppressHydrationWarning
      >
        <div className="fixed inset-0 z-[9999] pointer-events-none scanlines opacity-20"></div>
        {children}
      </body>
    </html>
  );
}
