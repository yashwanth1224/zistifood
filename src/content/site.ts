import type { IconName } from "@/components/icons";

export type Stat = { value: string; label: string; icon: IconName };
export type Feature = { title: string; icon: IconName; position: "tl" | "tr" | "ml" | "mr" | "bl" | "br" };
export type BrandCard = {
  name: string;
  tagline: string;
  body: string;
  href: string;
  tone: "red" | "yellow" | "purple" | "pink";
};
export type FooterColumn = { heading: string; links: { label: string; href: string }[] };
export type Social = { label: string; href: string; icon: IconName };
export type Store = { id: "google-play" | "app-store"; kicker: string; label: string; href: string };

export const meta = {
  title: "Zisti | India's #1 food delivery app",
  description:
    "Order food online from the best restaurants near you. Fast delivery, live tracking and great offers on the Zisti app.",
};

export const stores: Store[] = [
  { id: "google-play", kicker: "GET IT ON", label: "Google Play", href: "#" },
  { id: "app-store", kicker: "Download on the", label: "App Store", href: "#" },
];

export const hero = {
  titleLead: "India's #1",
  titleRest: "food delivery app",
  subtitle: "Experience fast & easy online ordering on the Zisti app",
  scrollLabel: "Scroll down",
};

export const valueProp = {
  heading: "Better food for more people",
  body: "For over a decade, we've enabled our customers to discover new tastes, delivered right to their doorstep",
  stats: [
    { value: "3,00,000+", label: "restaurants", icon: "restaurant" },
    { value: "800+", label: "cities", icon: "city" },
    { value: "3 billion+", label: "deliveries", icon: "delivery-bike" },
  ] satisfies Stat[],
};

export const appFeatures = {
  heading: "What's waiting for you on the app?",
  features: [
    { title: "Dining", icon: "dining", position: "tl" },
    { title: "Live Tracking", icon: "live-tracking", position: "ml" },
    { title: "Offers", icon: "offers", position: "bl" },
    { title: "Zisti Gold", icon: "gold", position: "tr" },
    { title: "Healthy", icon: "healthy", position: "mr" },
    { title: "Schedule Order", icon: "schedule", position: "br" },
  ] satisfies Feature[],
  screen: {
    locationLabel: "Home",
    address: "Koramangala, Bengaluru",
    search: "Search \"biryani\"",
    chips: ["All", "Pizza", "Burger", "Thali"],
    dishes: [
      { name: "Margherita Pizza", meta: "4.5 · 25 min", icon: "pizza", bg: "bg-tone-yellow/40" },
      { name: "Classic Burger", meta: "4.3 · 20 min", icon: "burger", bg: "bg-tone-pink" },
    ] satisfies { name: string; meta: string; icon: IconName; bg: string }[],
  },
};

export const ecosystem = {
  wordmark: "eternal",
  tagline: "Powering India's changing lifestyles",
  cta: "Check it out",
  brands: [
    {
      name: "Zisti",
      tagline: "Food delivery & dining",
      body: "Order from your favourite restaurants, delivered hot to your door.",
      href: "#",
      tone: "red",
    },
    {
      name: "Blinkit",
      tagline: "Groceries in minutes",
      body: "Everyday essentials and fresh produce at your door in minutes.",
      href: "#",
      tone: "yellow",
    },
    {
      name: "District",
      tagline: "Going out, sorted",
      body: "Book movies, events and dining experiences in one place.",
      href: "#",
      tone: "purple",
    },
    {
      name: "Hyperpure",
      tagline: "Supplies for restaurants",
      body: "Fresh ingredients and kitchen supplies for restaurant partners.",
      href: "#",
      tone: "pink",
    },
  ] satisfies BrandCard[],
};

export const download = {
  heading: "Download the app now!",
  body: "Experience seamless online ordering only on the Zisti app",
  qrCaption: "Scan the QR code to download the app",
};

export const footer = {
  columns: [
    [
      {
        heading: "Company",
        links: [
          { label: "Who We Are", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Report Fraud", href: "#" },
        ],
      },
      {
        heading: "Contact & Support",
        links: [
          { label: "📧 zistifooddelivery@gmail.com", href: "mailto:zistifooddelivery@gmail.com" },
          { label: "📞 +91 9449961496", href: "tel:+919449961496" },
        ],
      },
    ],
    [
      {
        heading: "For Restaurants",
        links: [
          { label: "Partner With Us", href: "mailto:zistifooddelivery@gmail.com?subject=Restaurant%20Partnership" },
          { label: "Apps For You", href: "#waitlist" },
        ],
      },
      {
        heading: "For Delivery Partners",
        links: [
          { label: "Ride with Zisti", href: "tel:+919449961496" },
          { label: "Partner Support", href: "mailto:zistifooddelivery@gmail.com" },
        ],
      },
    ],
    [
      {
        heading: "Learn More",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Security", href: "#" },
          { label: "Terms", href: "#" },
          { label: "Sitemap", href: "#" },
        ],
      },
    ],
  ] satisfies FooterColumn[][],
  socialHeading: "Social Links",
  socials: [
    { label: "Zisti on Instagram", href: "https://www.instagram.com/zisti.fooddelivery/", icon: "instagram" },
    { label: "Zisti on Facebook", href: "https://www.facebook.com/profile.php?id=6159572502722", icon: "facebook" },
    { label: "Zisti on YouTube", href: "#", icon: "youtube" },
    { label: "Zisti on X", href: "#", icon: "x" },
  ] satisfies Social[],
  copyright: "© 2026 Zisti Ltd. All rights reserved.",
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
