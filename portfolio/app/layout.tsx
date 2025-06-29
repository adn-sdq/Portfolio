import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adn-memos.com'),
  title: "Adnan Memos — Portfolio",
  description:
    "Multi-Disciplinary Interactive Developer & Designer — Designing Systems / Crafting Stories — based in RUH | HYD",
  keywords: [
    "Adnan Memos",
    "Portfolio",
    "UI/UX Designer", 
    "Fullstack Developer",
    "Frontend Developer",
    "Next.js",
    "Interactive Design",
    "Web Development",
    "Saudi Arabia",
    "India",
    "Riyadh",
    "Hyderabad"
  ],
  authors: [{ name: "Adnan Memos" }],
  creator: "Adnan Memos",
  publisher: "Adnan Memos",
  alternates: {
    canonical: 'https://adn-memos.com',
  },
  openGraph: {
    title: "Adnan Memos — Interactive Developer & Designer",
    description: "Multi-Disciplinary Interactive Developer & Designer specializing in visual interface design and development. Based in RUH | HYD",
    url: "https://adn-memos.com",
    siteName: "Adnan Memos Portfolio",
    images: [
      {
        url: "/image-1.png",
        width: 1200,
        height: 630,
        alt: "Adnan Memos - Interactive Developer & Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan Memos — Interactive Developer & Designer",
    description: "Multi-Disciplinary Interactive Developer & Designer specializing in visual interface design and development.",
    images: ["/image-1.png"],
    creator: "@adn_memos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "abed08e18da4854b", // Google Search Console verification
  },
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/Logo-2.svg",
  },
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  other: {
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Adnan Memos',
    url: 'https://adn-memos.com',
    jobTitle: 'Interactive Developer & Designer',
    description: 'Multi-Disciplinary Interactive Developer & Designer specializing in visual interface design and development.',
    image: 'https://adn-memos.com/image-1.png',
    sameAs: [
      'https://www.instagram.com/adn.memos/',
      'https://dribbble.com/adn_memos',
      'https://www.behance.net/adn-memos',
      'https://github.com/Adnan-Memos',
      'https://www.linkedin.com/in/adn-memos/'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressCountry: 'Saudi Arabia'
    },
    knowsAbout: [
      'Web Development',
      'UI/UX Design',
      'Next.js',
      'React',
      'TypeScript',
      'Interactive Design',
      'Frontend Development',
      'Fullstack Development'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Interactive Developer & Designer',
      occupationLocation: {
        '@type': 'City',  
        name: 'Riyadh, Saudi Arabia'
      },
      skills: ['Next.js', 'React', 'TypeScript', 'UI/UX Design', 'Supabase', 'PostgreSQL', 'Docker', 'Figma', 'Adobe Creative Suite'],
      experienceRequirements: 'Multi-disciplinary expertise in design and development'
    },
    nationality: 'Indian',
    homeLocation: {
      '@type': 'Place',
      name: 'Saudi Arabia'
    }
  };

  return (
    <html lang="en">
      <body
        className={`${interSans.variable} antialiased relative w-screen h-screen`}
      >
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
        >
          Skip to main content
        </a>
        
        {/* Background & custom cursor */}
        <AnimatedBackground />
        <div className="hidden md:block">
          <CustomCursor />
        </div>
        {/* Main content */}
        <main id="main-content" className="relative px-4 md:px-8 py-3 md:py-4 z-10">
          {children}
        </main>

        {/* Analytics & performance insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
