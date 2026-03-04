import type { Profile, PortfolioProject } from "@/lib/types";

export const profile: Profile = {
  name: "Humam",
  tagline: "Full-stack developer who builds iOS wrappers and payment integrations that actually ship to the App Store",
  bio: "I build production apps that bridge web and native — from WKWebView wrappers with StoreKit subscriptions to full SaaS platforms with complex payment flows. My approach: understand your existing architecture, build something that works with it (not against it), and ship to TestFlight fast.",
  approach: [
    {
      title: "Audit Your Web App",
      description: "Review MyAirportMap's Flask routes, Clerk auth flow, and Stripe subscription logic to map the integration surface",
    },
    {
      title: "Build the iOS Shell",
      description: "WKWebView wrapper with native auth bridge, StoreKit 2 subscriptions, and receipt validation endpoint on your Flask backend",
    },
    {
      title: "TestFlight in Week 1",
      description: "Get a working build on TestFlight early so you can test the real subscription flow on device before App Store submission",
    },
    {
      title: "Submit & Handle Review",
      description: "Prepare App Store assets, submit for review, and iterate on any feedback — targeting first-pass approval",
    },
  ],
  skillCategories: [
    {
      name: "iOS / Mobile",
      skills: [
        "Swift",
        "WKWebView",
        "StoreKit 2",
        "UIKit",
        "TestFlight",
        "App Store Connect",
      ],
    },
    {
      name: "Web & Backend",
      skills: [
        "Python / Flask",
        "PostgreSQL",
        "Stripe API",
        "Clerk Auth",
        "REST APIs",
        "Receipt Validation",
      ],
    },
    {
      name: "Frontend",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
  ],
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "sports-vision",
    title: "Sports Vision MVP",
    description: "AR-style scan UI with detection overlays and confidence scores — delivered as a browser-based MVP simulating an iOS experience",
    tech: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    relevance: "Built a web demo that simulates native iOS AR/LiDAR scanning UX — similar approach to this WebView wrapper project",
    outcome: "Browser-based MVP that demonstrated the full iOS experience before native development began",
  },
  {
    id: "payment-monitor",
    title: "PayGuard — Transaction Monitor",
    description: "Transaction monitoring dashboard with real-time flagging, multi-account linking, and alert system",
    tech: ["Next.js", "TypeScript", "Stripe", "Recharts"],
    relevance: "Payment system integration with multi-source transaction tracking — relevant to Stripe + StoreKit sync challenge",
    outcome: "Compliance monitoring dashboard handling dual payment source reconciliation",
    liveUrl: "https://payment-monitor.vercel.app",
  },
  {
    id: "creator-marketplace",
    title: "Creator Economy Platform",
    description: "Livestreaming platform with Stripe Connect split payments — viewer tips to creator payouts",
    tech: ["Next.js", "TypeScript", "Stripe Connect"],
    relevance: "End-to-end payment flow with Stripe Connect — subscription management, webhook handling, and payout tracking",
    outcome: "Full payment pipeline from purchase to payout via Stripe Connect integration",
  },
  {
    id: "fleet-saas",
    title: "Fleet Maintenance SaaS",
    description: "6-module SaaS with asset tracking, work orders, maintenance scheduling, and analytics",
    tech: ["Next.js", "TypeScript", "Recharts", "shadcn/ui"],
    relevance: "Multi-module SaaS platform — similar complexity to managing subscriptions across web and iOS",
    outcome: "Production-ready SaaS covering the full maintenance lifecycle",
  },
];
