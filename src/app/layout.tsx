import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://andreas-nath.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andreas Natanael Irawan | Fullstack Developer Portfolio",
    template: "%s | Andreas Natanael Irawan",
  },
  description:
    "Portfolio of Andreas Natanael Irawan, an Information Systems graduate from Malang building web, mobile, POS, ERP, REST API, RBAC, dashboard, and workflow-driven operational systems.",
  keywords: [
    "Andreas Natanael Irawan",
    "Fullstack Developer",
    "Mobile Developer",
    "Software Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Flutter Developer",
    "Malang Indonesia",
    "ERP System",
    "POS System",
  ],
  authors: [{ name: "Andreas Natanael Irawan", url: siteUrl }],
  creator: "Andreas Natanael Irawan",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Andreas Natanael Irawan | Fullstack Developer Portfolio",
    description:
      "Information Systems graduate building practical web, mobile, POS, ERP, dashboard, and operational systems with Next.js, Laravel, Flutter, PostgreSQL, Docker, and RBAC workflows.",
    siteName: "Andreas Nath Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Andreas Natanael Irawan Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andreas Natanael Irawan | Fullstack Developer Portfolio",
    description:
      "Fullstack and mobile developer focused on practical web, POS, ERP, REST API, RBAC, dashboards, and operational systems.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F19",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
