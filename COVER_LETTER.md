# Cover Letter

I have implemented Apple StoreKit subscriptions before.

Your dual-payment challenge is the interesting part here — keeping Stripe web subscriptions and StoreKit iOS subscriptions pointing at the same Clerk user account without conflicts. I built a working demo of the iOS experience: https://myairportmap-ios.vercel.app

The demo shows the full flow — airport map, achievements, flight log, and the StoreKit subscription screen with your Plus/Pro tiers. Tap through it on your phone.

For the architecture, I'd go native Swift + WKWebView over Capacitor. It gives you direct StoreKit 2 access, cleaner App Store review outcomes, and a thinner wrapper. I can have a TestFlight build running your actual web app within the first week.

Quick question — are your Stripe subscription tiers (pricing, features) already finalized, or is there flexibility in how they map to StoreKit products?

Two options: want to start with a 30-min call to walk through your Flask auth flow, or should I just audit the codebase and send you the integration plan?

P.S. I noticed your demo map at myairportmap.com — the Oshkosh pin is a nice touch.

— Humam
