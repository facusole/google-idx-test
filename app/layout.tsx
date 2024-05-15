import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DMsans = DM_Sans({ subsets: ["latin"], weight: ['300', '500', '600'] });

export const metadata: Metadata = {
  title: "GoogleIDX section slider ",
  description: "This project was created using the new GoogleIDX. The developer experience can be better, but overall it's a great tool to keep an eye on, since with some tweaks and great features this could be a great way for developers to work everywhere they need.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DMsans.className}>{children}</body>
    </html>
  );
}
