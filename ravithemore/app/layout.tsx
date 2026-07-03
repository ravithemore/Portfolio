import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/app/Provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ravithemore.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ravi Damor - Software Engineer & Backend Developer",
    template: "%s – Ravi Damor",
  },
  description: "Software Engineer specializing in Java, Spring Boot, microservices, and distributed systems. Exploring AI, ML, and open-source.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Ravi Damor - Software Engineer & Creator",
    description:
      "Software Engineer specializing in Java, Spring Boot, microservices, and distributed systems. Exploring AI, ML, and open-source.",
    url: siteUrl,
    siteName: "Ravi Damor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Damor - Software Engineer & Backend Developer",
    description:
      "Software Engineer specializing in Java, Spring Boot, microservices, and distributed systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex realtive flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
