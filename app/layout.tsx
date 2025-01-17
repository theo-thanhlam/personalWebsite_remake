import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theo Lam",
  description: "Theo Thanh Lam's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "relative flex h-full min-h-screen flex-col pt-[2rem] pb-[6rem] sm:pt-[4rem] sm:pb-[8rem]"
        }
      >
        {children}
      </body>
    </html>
  );
}
