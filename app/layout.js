// app/layout.js
import "./globals.css";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBar from "@/components/PromoBar";

const headingFont = Noto_Serif({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Noto_Sans({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "Ανθοπωλείο",
  description:
    "Ανεξάρτητο ανθοπωλείο με ανθοσυνθέσεις, μπουκέτα και στολισμούς εκδηλώσεων.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="el"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="min-h-screen">
        {/* Πάνω από το header */}
        <PromoBar />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
