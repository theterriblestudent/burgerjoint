import type { Metadata } from "next";
import Navbar from "@components/navbar"
import { Asap_Condensed } from "next/font/google";
import "@styles/globals.css";

const asap_condensed = Asap_Condensed({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-asap",
});
 
export const metadata: Metadata = {
  title: "BurgerJoint",
  description: "Fast food website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={asap_condensed.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
