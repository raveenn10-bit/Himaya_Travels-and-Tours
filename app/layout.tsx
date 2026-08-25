import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/smooth-scroll";
import { AudioProvider } from "@/components/audio-player";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#103322",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://himayatravels.com"),
  title: "Himaya Tours & Travels | Bespoke Luxury Journeys & Chauffeur Services Sri Lanka",
  description:
    "Embark on an immersive Sri Lankan expedition with Himaya Tours & Travels. Premium private driver-guides, curated itineraries, and an elite luxury fleet from Galle, Colombo & Kandy.",
  keywords: [
    "Sri Lanka private driver",
    "Himaya Tours & Travels",
    "Himaya Travels Galle",
    "Sri Lanka luxury chauffeur",
    "Sri Lanka custom tours",
    "Colombo airport transfer",
    "Galle day trip",
    "Kandy city tour",
    "hire driver Sri Lanka",
    "premium tour packages Sri Lanka",
    "luxury travel Sri Lanka",
    "elite transport Sri Lanka",
  ],
  authors: [{ name: "Himaya Tours & Travels" }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.PNG",
    apple: "/logo.PNG",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Himaya Tours & Travels | Immersive Bespoke Journeys & Chauffeurs in Sri Lanka",
    description:
      "Experience Sri Lanka in ultimate comfort. Elite Mercedes fleets, high-roof cruiser vans, and certified driver-guides starting from $45/day.",
    images: ["/logo.PNG"],
    siteName: "Himaya Tours & Travels",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himaya Tours & Travels | Bespoke Sri Lanka Chauffeurs & Private Travel",
    description:
      "Explore ancient kingdoms and misty highlands with Himaya Tours & Travels. Custom multi-day itineraries and premium 24/7 service.",
    images: ["/logo.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Himaya Tours & Travels",
    description:
      "Elite private driver & custom luxury tour guide service in Sri Lanka. Premium cars, high-roof cruiser vans, and specialty event coaches for elite airport transfers, custom round tours, and tailored day trips.",
    url: "https://himayatravels.com",
    telephone: "+94771882633",
    email: "dulankawya444@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "171.Udugama Road, Makuluwa",
      addressLocality: "Galle",
      postalCode: "80000",
      addressCountry: "LK",
    },
    priceRange: "$$$",
    image: "/logo.PNG",
    sameAs: [
      "https://wa.me/94767885107",
      "https://www.facebook.com/share/1JefL6vGhr/?mibextid=wwXIfr"
    ],
    areaServed: "Sri Lanka",
    offers: [
      {
        "@type": "Offer",
        name: "VIP Sri Lanka Airport Transfer",
        price: "45.00",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Custom Luxury Multi-Day Expedition",
        price: "65.00",
        priceCurrency: "USD",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${cinzel.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#F4EFE6] text-[#121614] overflow-x-hidden selection:bg-[#A7C4A0] selection:text-[#103322] font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#103322] text-white rounded-md"
        >
          Skip to Content
        </a>
        <AudioProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </AudioProvider>
      </body>
    </html>
  );
}