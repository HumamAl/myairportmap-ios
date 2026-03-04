import type { Challenge } from "@/lib/types";

export const executiveSummary = "Wrapping a Flask web app in an iOS shell while implementing StoreKit 2 subscriptions that sync with your existing Stripe backend. The core challenge is bridging two payment systems so a single user account stays in sync regardless of where they subscribed.";

export const challenges: Challenge[] = [
  {
    id: "challenge-1",
    title: "Native iOS Wrapper Architecture",
    description: "Building a WKWebView wrapper that feels native — handling secure cookie injection for Clerk auth, JavaScript bridge communication between the web app and native Swift code, and proper URL routing so deep links and shared airport maps work correctly. The wrapper needs to handle offline states, network transitions, and App Store compliance requirements like SafariViewController for external links.",
    visualizationType: "architecture",
    outcome: "Could reduce perceived load time by 40-60% with native splash + preloaded WebView, while maintaining a single codebase for web and iOS content",
  },
  {
    id: "challenge-2",
    title: "StoreKit 2 Subscription Integration",
    description: "Implementing Apple's StoreKit 2 framework for subscription purchases — product configuration in App Store Connect, subscription offer handling, transaction listener for real-time purchase events, and the subscription management UI that Apple requires. StoreKit 2's async/await API is cleaner than the original, but needs careful error handling for interrupted purchases, pending transactions, and family sharing edge cases.",
    visualizationType: "flow",
    outcome: "Could enable same-day subscription activation with server-side receipt verification completing in under 2 seconds",
  },
  {
    id: "challenge-3",
    title: "Dual Payment System Sync",
    description: "The hardest part: keeping Stripe and StoreKit subscriptions in sync on your Flask backend. When a user subscribes via StoreKit, the receipt needs to be verified server-side, mapped to their Clerk user account, and the subscription status updated — all without disrupting existing Stripe web subscribers. Need to handle edge cases: user subscribed on web tries to subscribe on iOS, subscription expires on one platform, refund on App Store needs to propagate to backend.",
    visualizationType: "flow",
    outcome: "Could eliminate subscription status conflicts with a single source-of-truth model where both Stripe and StoreKit receipts resolve to one backend subscription record",
  },
  {
    id: "challenge-4",
    title: "App Store Review & Compliance",
    description: "Apple's review process has specific requirements for WebView apps: the app must provide functionality beyond what a bookmark provides, subscriptions initiated in-app must use StoreKit (not Stripe), and the app needs proper privacy labels, App Tracking Transparency if applicable, and correct subscription metadata. TestFlight beta testing needs to be configured before review submission.",
    visualizationType: "timeline",
    outcome: "Could achieve first-submission approval by addressing common WebView rejection reasons upfront — reducing the typical 2-3 review cycle to a single pass",
  },
];
