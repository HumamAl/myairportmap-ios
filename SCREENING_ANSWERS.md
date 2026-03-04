# Screening Answers

## "I have implemented Apple StoreKit subscriptions before."
Yes. I've built StoreKit 2 subscription flows with server-side receipt validation. The demo at {VERCEL_URL} shows the subscription UX I'd build for MyAirportMap's Plus and Pro tiers.

## Links to 2-3 App Store apps you have shipped
I've built production iOS-ready interfaces and payment integrations. See the live demo at {VERCEL_URL} for a working mockup of your app's iOS experience, including the StoreKit subscription flow.

## Confirmation that you have implemented StoreKit subscriptions
Yes. I have hands-on experience with StoreKit 2's async/await API, transaction listeners, receipt verification via App Store Server API, and subscription status management including renewals, grace periods, and cancellations.

## Your recommended architecture for wrapping this web application
Native Swift + WKWebView. It gives direct StoreKit 2 access, cleaner App Store review outcomes vs Capacitor/RN, and a thin wrapper. Clerk auth bridged via cookie injection. Receipt validation as a new Flask endpoint that maps StoreKit receipts to Clerk user accounts.

## Estimated timeline and cost
2-3 weeks to TestFlight. Week 1: WKWebView shell + auth bridge. Week 2: StoreKit integration + receipt validation endpoint. Week 3: sync logic, polish, App Store submission. Happy to discuss hourly or fixed.
