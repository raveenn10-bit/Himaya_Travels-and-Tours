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
  metadataBase: new URL("https://himayatoursandtravels.com"),
  title: {
    default: "Himaya Tours & Travels | Best Sri Lanka Private Driver & Luxury Tours",
    template: "%s | Himaya Tours & Travels Sri Lanka",
  },
  description:
    "Official website of Himaya Tours & Travels Sri Lanka (Harsha). Book licensed private driver-guides, Colombo airport transfers, custom round tours, and pristine luxury fleet across Sigiriya, Ella, Galle Fort & Yala.",
  keywords: [
    "Himaya Tours & Travels",
    "himayatoursandtravels.com",
    "Himaya Travels Galle",
    "Sri Lanka private driver",
    "hire driver Sri Lanka",
    "Sri Lanka private chauffeur",
    "Sri Lanka tour driver Harsha",
    "Colombo airport transfer to Galle",
    "Sri Lanka custom tour packages",
    "Galle Fort day tour",
    "Sigiriya private tour",
    "Ella scenic train chauffeur",
    "Yala safari private transport",
    "Sri Lanka luxury travel agency",
    "best private driver Sri Lanka",
    "Toyota KDH van rental Sri Lanka driver",
  ],
  authors: [{ name: "Himaya Tours & Travels", url: "https://himayatoursandtravels.com" }],
  creator: "Himaya Tours & Travels",
  publisher: "Himaya Tours & Travels",
  alternates: {
    canonical: "https://himayatoursandtravels.com",
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
  icons: {
    icon: "/logo.PNG",
    shortcut: "/logo.PNG",
    apple: "/logo.PNG",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himayatoursandtravels.com",
    title: "Himaya Tours & Travels | #1 Sri Lanka Private Driver & Luxury Expeditions",
    description:
      "Explore Sri Lanka in ultimate comfort with certified private chauffeurs, custom multi-day itineraries, and spotless luxury fleet from $45/day.",
    images: [
      {
        url: "/logo.PNG",
        width: 800,
        height: 800,
        alt: "Himaya Tours & Travels Official Logo",
      },
    ],
    siteName: "Himaya Tours & Travels",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himaya Tours & Travels | Best Sri Lanka Private Driver & Tours",
    description:
      "Book your private driver and bespoke Sri Lanka expedition with Himaya Tours & Travels. 24/7 VIP Concierge.",
    images: ["/logo.PNG"],
  },
  category: "Travel & Tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://himayatoursandtravels.com/#travelagency",
        name: "Himaya Tours & Travels",
        alternateName: ["Himaya Travels", "Himaya Tours Sri Lanka"],
        url: "https://himayatoursandtravels.com",
        logo: "https://himayatoursandtravels.com/logo.PNG",
        image: "https://himayatoursandtravels.com/Assets/Sigiriya%20rock%20fortress%20Lion%20Rock%20Ceylon.jpg",
        description:
          "Official licensed private driver and luxury tour guide service in Sri Lanka. Offering Colombo airport meet & greet transfers, custom round tours, Sigiriya, Ella, Galle Fort excursions, and pristine maintained fleet.",
        telephone: ["+94771882633", "+94767885107"],
        email: "dulankawya444@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "171.Udugama Road, Makuluwa",
          addressLocality: "Galle",
          postalCode: "80000",
          addressCountry: "LK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.0535,
          longitude: 80.221,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        sameAs: [
          "https://wa.me/94767885107",
          "https://www.facebook.com/share/1JefL6vGhr/?mibextid=wwXIfr",
        ],
        areaServed: {
          "@type": "Country",
          name: "Sri Lanka",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "148",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://himayatoursandtravels.com/#website",
        url: "https://himayatoursandtravels.com",
        name: "Himaya Tours & Travels",
        description: "Official Sri Lanka Luxury Private Chauffeur & Custom Tour Agency",
        publisher: {
          "@id": "https://himayatoursandtravels.com/#travelagency",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://himayatoursandtravels.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I book a private driver in Sri Lanka with Himaya Tours & Travels?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can book directly via WhatsApp (+94 76 788 5107) or through our interactive booking deck on himayatoursandtravels.com. We confirm your itinerary and driver within minutes.",
            },
          },
          {
            "@type": "Question",
            name: "What is included in the daily chauffeur rate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our daily chauffeur rates include a modern air-conditioned vehicle, dedicated English-speaking driver-guide, fuel, express highway tolls, vehicle parking fees, and chauffeur meals/lodging with zero hidden charges.",
            },
          },
          {
            "@type": "Question",
            name: "Does Himaya Tours provide Colombo airport (CMB) pickups?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide 24/7 flight-tracked airport meet-and-greet services inside the arrival lobby at Bandaranaike International Airport (CMB) and direct highway transfers to Galle, Mirissa, Kandy, or Colombo.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${cinzel.variable} scroll-smooth`}
    >
      <head>
        <link rel="canonical" href="https://himayatoursandtravels.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
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