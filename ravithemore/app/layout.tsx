import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/app/Provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: once the custom domain is purchased and pointed at Vercel, change this
// to the new domain (e.g. "https://ravidamor.dev") instead of the vercel.app URL.
const siteUrl = "https://ravithemore.vercel.app";

const siteDescription =
  "Full-stack engineer building production systems with Java, Spring Boot, and Angular, plus ML and AI-powered tools. Experience spans backend architecture, machine learning, and product development from idea to deployment.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ravi Damor - Full-Stack Engineer & Creator",
    template: "%s – Ravi Damor",
  },
  description: siteDescription,
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Ravi Damor - Full-Stack Engineer & Creator",
    description: siteDescription,
    url: siteUrl,
    siteName: "Ravi Damor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Damor - Full-Stack Engineer & Creator",
    description: siteDescription,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ravi Damor",
              "url": siteUrl,
              "sameAs": [
                "https://github.com/ravithemore",
                "https://www.linkedin.com/in/ravithemore",
                "https://x.com/ravithemor"
              ],
              "jobTitle": "Full-Stack Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Tata Consultancy Services"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "VIT Bhopal University"
              },
              "description": siteDescription
            })
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
