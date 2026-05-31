export const SITE = {
  name: "3D Fitness Club",
  shortName: "3D Fitness",
  tagline: "Forge Your Strongest Self",
  description:
    "Premium fitness club in Tohana — modern equipment, certified coaching, and a community that pushes you forward.",
  phone: "+91 99923 21011",
  phoneDigits: "919992321011",
  phoneDisplay: "099923 21011",
  whatsapp: "https://wa.me/919992321011",
  email: "info@3dfitnessclub.com",
  address: {
    line1: "22, 23, 24, New Parbhakar Colony",
    line2: "21, Tohana, Haryana 125120",
    full: "22, 23, 24, New Parbhakar Colony, 21, Tohana, Haryana 125120",
  },
  hours: [
    { day: "Mon – Sat", time: "5:00 AM – 10:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: {
    instagram: "https://www.instagram.com/3dfitnessclubtohana",
    youtube: "https://youtube.com/@ramdiyagill260?si=bzHcdTjMxQICCE5e",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=3D+Fitness+Club+Tohana+Haryana+125120&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=3D+Fitness+Club+Tohana+Haryana+125120",
};

export type Plan = {
  id: string;
  name: string;
  price: number;
  period: string;
  perks: string[];
  badge: string | null;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "1m",
    name: "1 Month",
    price: 2000,
    period: "month",
    perks: ["All equipment access", "Locker access", "Open gym hours"],
    badge: null,
  },
  {
    id: "3m",
    name: "3 Months",
    price: 5000,
    period: "3 months",
    perks: ["Everything in 1 Month", "Save ₹1,000", "Free fitness assessment"],
    badge: "Save ₹1,000",
  },
  {
    id: "6m",
    name: "6 Months",
    price: 9000,
    period: "6 months",
    perks: [
      "Everything in 3 Months",
      "Personal training session",
      "Diet consultation",
    ],
    badge: "Popular",
    featured: true,
  },
  {
    id: "1y",
    name: "1 Year",
    price: 15000,
    period: "year",
    perks: [
      "Everything in 6 Months",
      "Best value — save ₹9,000",
      "Priority support",
    ],
    badge: "Best Value",
  },
];

export const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
