import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });
const merriWeather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Truffle",
  description: "Truffle blog app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${merriWeather.className} max-w-[1280px] m-auto`}>
        <Theme>
          <Header />
          <div className="relative">{children}</div>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
