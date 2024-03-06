import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UiProvider } from "./providers";
import Nav from "@/components/Navbar/navbar";
import Foot from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theo Lam",
  description: "Welcome to Theo Lam personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiProvider>
          <div className="container-default">
            <div className="wrapper">
              <Nav />
              {children}

              <Foot />
            </div>
          </div>
        </UiProvider>
      </body>
    </html>
  );
}
