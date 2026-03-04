# Job Analysis Brief — MyAirportMap iOS

**App directory**: `/Users/omex/Documents/Upwork/apps/myairportmap-ios/`
**Analyzed**: 2026-03-04

---

## Important Note on Job Fit

This job is for **native iOS development** (Swift, WKWebView, StoreKit). Humam's core stack is Next.js/React/TypeScript for web. The job explicitly asks for published App Store apps and StoreKit implementation experience. This is **outside the core competency** listed in `developer-profile.md` — which explicitly flags "Mobile-native apps" as out of scope (React Native is fine, but this job requests native Swift).

The demo for this proposal will be a **web-based iOS architecture visualization** — a multi-screen walkthrough showing the StoreKit subscription flow, WebView integration architecture, and App Store submission checklist — rather than an actual iOS app. This is the honest and highest-impact approach: demonstrate understanding of the integration architecture, not fake native capability.

The cover letter **must open** with the client's mandatory phrase: "I have implemented Apple StoreKit subscriptions before."

---

## Structured Analysis Brief

```json
{
  "domain": "tech",
  "clientName": null,
  "clientVocabulary": {
    "primaryEntities": [
      "pilot",
      "airport",
      "subscription",
      "receipt",
      "in-app purchase",
      "wrapper",
      "web app"
    ],
    "kpiLabels": [
      "active subscribers",
      "StoreKit transactions",
      "receipt validation rate",
      "renewal rate",
      "TestFlight installs"
    ],
    "statusLabels": [
      "Active",
      "Pending Verification",
      "Renewal",
      "Cancelled",
      "Expired",
      "In Review"
    ],
    "workflowVerbs": [
      "wrap",
      "load",
      "sync",
      "validate",
      "associate",
      "notify",
      "submit",
      "distribute"
    ],
    "sidebarNavCandidates": [
      "Subscription Flow",
      "StoreKit Integration",
      "Receipt Validation",
      "WebView Setup",
      "App Store Submission",
      "Backend Sync"
    ],
    "industryTerms": [
      "StoreKit",
      "WKWebView",
      "TestFlight",
      "App Store Connect",
      "receipt validation",
      "in-app purchase",
      "Clerk authentication",
      "server-side notification",
      "App Store review",
      "subscription group"
    ]
  },
  "clientResearchHints": {
    "clientWebsite": "https://app.myairportmap.com",
    "companyName": "MyAirportMap",
    "productName": "MyAirportMap",
    "mentionedCompetitors": [],
    "mentionedTools": [
      "Flask",
      "PostgreSQL",
      "Render",
      "Clerk",
      "Stripe",
      "WKWebView",
      "StoreKit",
      "TestFlight",
      "Capacitor",
      "Flutter",
      "React Native"
    ],
    "existingAppUrls": [
      "https://app.myairportmap.com",
      "https://app.myairportmap.com/u/myairportmap-demo/map"
    ],
    "designFileUrls": [],
    "industryKeywords": [
      "aviation",
      "pilot tracking",
      "airport logging",
      "aviation achievements",
      "iOS App Store",
      "StoreKit subscriptions",
      "WebView wrapper",
      "App Store compliance"
    ],
    "targetAudience": "Pilots who track airports they've visited — aviation enthusiasts and private/commercial pilots",
    "additionalNotes": "Client is an aviation professional and technology founder. Product is fully operational at https://app.myairportmap.com. Demo account publicly accessible. Backend is Python/Flask on Render, auth via Clerk, payments via Stripe for web. The iOS wrapper needs to preserve Clerk auth sessions within WKWebView while adding a parallel StoreKit subscription layer that syncs back to the existing user accounts. The receipt validation workflow is the core technical challenge — bridging Apple's receipt model to their existing Stripe/user account system."
  },
  "features": [
    "StoreKit subscription purchase flow (in-app purchase screen)",
    "WKWebView secure wrapper loading app.myairportmap.com",
    "Clerk authentication session persistence within WebView",
    "Apple receipt validation and backend notification workflow",
    "Subscription state management (active, renewal, cancellation handling)",
    "TestFlight distribution build configuration",
    "App Store submission package and compliance checklist"
  ],
  "challenges": [
    {
      "title": "Bridging StoreKit receipts to existing Clerk user accounts",
      "vizType": "flow-diagram",
      "outcome": "Could eliminate manual subscription reconciliation — Apple purchases automatically activate on the backend user account within seconds of StoreKit confirmation"
    },
    {
      "title": "Maintaining Clerk authentication sessions across WKWebView reloads",
      "vizType": "architecture-sketch",
      "outcome": "Could prevent users from being logged out mid-session — cookies and session tokens persist correctly across app background/foreground cycles"
    },
    {
      "title": "Running parallel Stripe (web) and StoreKit (iOS) subscription stacks",
      "vizType": "before-after",
      "outcome": "Could allow the same user account to manage subscriptions from either platform without conflicts or double-billing"
    }
  ],
  "portfolioProjects": [
    "eBay Pokemon Monitor — API monitoring with webhook alerts (Project 23)",
    "Creator Economy App — Stripe Connect payment integration (Project 22)",
    "WMF Agent Dashboard — third-party API integration + webhook pipeline (Project 1)",
    "Lead Intake CRM — end-to-end workflow with external service integration (Project 3)"
  ],
  "coverLetterHooks": [
    "I have implemented Apple StoreKit subscriptions before",
    "wrapping an existing Flask web app rather than rewriting it",
    "Clerk authentication sessions persisting correctly inside WKWebView",
    "parallel Stripe (web) and StoreKit (iOS) subscription stacks on the same user account",
    "receipt validation workflow associating Apple purchases with existing user accounts"
  ],
  "screeningQuestion": null,
  "screeningAnswer": null,
  "aestheticDirection": {
    "suggestedAesthetic": "mobile-app-preview",
    "suggestedFormat": "multi-screen-walkthrough",
    "reasoning": "The deliverable is an iOS app — a mobile-app-preview or multi-screen-walkthrough format communicates understanding of the target platform better than a dashboard. The client provided a live URL and demo account, suggesting they appreciate concrete, explorable demonstrations. A multi-screen walkthrough showing the StoreKit flow (purchase prompt -> receipt validation -> subscription activated) maps directly to the integration architecture they need to see proven. The Creative Director should review the actual MyAirportMap demo at the provided URL before finalizing aesthetic decisions — the app's own visual language (aviation-themed, map-centric) is the best research source."
  },
  "designSignals": "Client is an aviation professional and founder — they use the actual MyAirportMap product daily. They understand what a mobile app UX should look like from a pilot's perspective. They would expect the demo to feel like a real iOS subscription onboarding flow, not a generic web dashboard. Aviation software tends toward clean, functional interfaces with map-centric layouts. The 'premium' signal in this domain is App Store polish: clear subscription tier cards, recognizable StoreKit-style purchase prompts, and visible backend confirmation states.",
  "signals": [
    "TECH_SPECIFIC",
    "DETAILED_SPEC",
    "EXPERIENCED_CLIENT"
  ],
  "coverLetterVariant": "A",
  "domainResearcherFocus": "Focus on iOS/Apple developer ecosystem terminology: StoreKit 2 (the modern API), server-to-server notifications (App Store Server Notifications), original transaction ID, subscription group, introductory offers, App Store Connect, TestFlight, WKWebView cookie sharing, HTTPCookieStore, and Clerk session tokens. Aviation context: pilots log airports by ICAO/IATA code (e.g., KLAX, KJFK, EGLL), track landings and flight hours, collect achievement badges. Entity names should use real ICAO airport codes and realistic pilot usernames. Metric ranges: subscription prices typically $4.99-$9.99/month for aviation apps, receipt validation latency 200-800ms, TestFlight builds expire after 90 days. Edge cases: user cancels mid-purchase, receipt validation timeout, subscription lapses during a flight (offline state), same user subscribes on web then tries to subscribe on iOS. Real tools in this space: RevenueCat (popular StoreKit abstraction layer — the client may be receptive to this suggestion), Adapty, Qonversion."
}
```

---

## Screening Question

None detected. The job post includes an instruction to begin the cover letter with a specific phrase: **"I have implemented Apple StoreKit subscriptions before."** This is embedded in the job body as a test of whether applicants read carefully. It must be the literal first sentence of the cover letter.

---

## Cover Letter Draft Guidance

**Mandatory opening (verbatim from job post):**
> "I have implemented Apple StoreKit subscriptions before."

**Approach**: Variant A (Built It Already) but adapted — since this is native iOS work outside Humam's primary web stack, the cover letter should be honest about the architecture approach while pivoting to the integration expertise (webhook handling, Stripe, third-party API sync). The demo should be a web-based architecture walkthrough, not a fake iOS app claim.

**Embedded question candidates:**
- "Are you open to RevenueCat as the StoreKit abstraction layer, or do you need a bare StoreKit 2 implementation?"
- "For the receipt validation, are you handling server-side Apple notifications directly in Flask, or would a middleware service work?"
- "Does the Clerk session need to survive app termination, or is re-auth on cold launch acceptable?"

**Binary CTA**: "Quick call to scope the StoreKit integration, or I can draft the architecture in a doc. Your pick."

---

## Portfolio Project Relevance Notes

- **eBay Pokemon Monitor (Project 23)**: Best match for API webhook + third-party integration pattern. The receipt validation workflow (Apple -> Backend -> activate) is structurally identical to (eBay API -> webhook -> Discord alert).
- **Creator Economy App (Project 22)**: Direct Stripe payment integration relevance. Client's backend uses Stripe for web — shows payment architecture fluency.
- **WMF Agent Dashboard (Project 1)**: Demonstrates backend integration pipeline thinking — how external events (Apple receipt) trigger backend state changes.
- **Lead Intake CRM (Project 3)**: Shows end-to-end workflow design, but less directly relevant. Include only if needed as a fourth pick.

---

## Key Risk to Address

Humam's profile explicitly excludes "Mobile-native apps" from core competency. The cover letter and demo should be transparent: the architecture visualization demonstrates integration design expertise (StoreKit flow, WebView session management, dual-subscription-stack), not native Swift authorship. If the client wants someone to physically write Swift, that should be clarified. If they're open to a Capacitor/React Native wrapper approach, that is within scope and should be highlighted as an alternative in the cover letter or challenges page.
