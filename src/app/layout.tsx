/*Purpose: font setup, metadata, rootlayout*/

/* imports md from nextjs, helps ensure type checking and structure */ 
import type { Metadata } from "next";
/*imports custom fonts from google */
import { Geist, Geist_Mono } from "next/font/google";
/*imports globals ss*/
import "./globals.css";

/*imported and configured for use*/
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* creates metadata for app: includes title and description. helpful for search engine. */
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/*wraps all other pages or components*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
