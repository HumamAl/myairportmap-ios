# Creative Brief — MyAirportMap iOS

```json
{
  "aesthetic": "dark-premium",
  "demoFormat": "mobile-app-preview",
  "domain": "aviation / pilot tools (consumer-facing achievement tracker)",
  "mood": "adventurous, precise, achievement-driven, sky-native",
  "colorDirection": "deep navy-to-midnight blue primary on near-black surface — oklch(0.52 0.18 240) — inspired by MyAirportMap's 'Bravo Blue' brand identity (#005589) and the dark aeronautical chart conventions used by ForeFlight's night mode and FlightAware's map engine. Aviation apps universally treat dark blue as the domain color; the near-black background mimics cockpit displays and night-mode sectional charts. Accent: luminous sky cyan oklch(0.72 0.15 210) for visited airport markers and achievement badges — the color of airspace overlays on IFR charts.",
  "typography": "Geist Sans body for clean readability at small screen sizes — matches the professional-but-approachable register of this consumer aviation tool. Geist Mono for ICAO airport codes, coordinates, and flight stats (altitude, distance, count) — monospace is the universal data convention in aviation: avionics, ATC communications, and every pilot logbook app uses it for identifiers and numeric data. No font override needed; Geist's geometric precision reads as 'technical and trustworthy' without requiring a custom import.",
  "radiusProfile": "medium (0.75rem on cards, 1rem on achievement badges, 1.5rem on bottom sheet modals) — MyAirportMap's own website uses 30px rounded corners on feature frames, signaling a consumer-friendly product rather than a hardcore avionics tool. CloudAhoy and LogTen both use moderate-to-generous rounding. ForeFlight uses tighter radii for its more professional audience; since this is a personal achievement app, staying warmer than ForeFlight but tighter than a wellness app is the right balance.",
  "densityProfile": "standard — this is a personal achievement and visualization app, not a dispatch console. Competitors like LogTen use generous spacing for readability. The phone screen constrains density naturally; each screen (map, profile, achievements, subscription) should breathe without wasting space. Reference: denser than Calm, more spacious than Garmin Pilot's flight planning views.",
  "motionCharacter": "smooth (200-300ms ease-in-out) — aviation achievement apps benefit from satisfying transitions: badge unlock animations, map pin drops, counter increments feel earned. ForeFlight uses measured transitions; Garmin Pilot's avionics-mirror approach is more instant. Since this is a personal achievements app (not a cockpit tool), transitions can be slightly more expressive than pure ops tools — but never theatrical. Screen-to-screen transitions mirror iOS native conventions.",
  "formatRationale": "The deliverable is a WKWebView iOS wrapper with StoreKit 2 subscriptions — literally a phone app. Mobile-app-preview is the only format that immediately signals 'I built your iOS app'. A phone frame showing the actual screen flow (map view -> airport detail -> achievements -> subscription paywall) tells the client exactly what they'll receive. Dashboard or browser frame would look like a web project, not an iOS project.",
  "competitorReferences": [
    "ForeFlight Mobile EFB — supports both dark and light themes (dark for night ops / cockpit use). Aeronautical map in dark mode uses midnight blue backgrounds with amber/cyan overlays. UI is map-centric with information layered contextually. Professional, function-first density. Sets the premium expectation for aviation iOS apps.",
    "FlightAware iOS — explicitly described as 'pretty dark and low-contrast' by their own engineering team. Map-centered UX, dark background for legibility in bright cockpit environments. Prioritizes scanability of flight data over decorative styling. Confirms that dark is the credibility signal in pilot-facing aviation tools.",
    "Garmin Pilot — uses avionics-inspired icon-driven UI, now with optional bottom tab bar. Night mode added for cockpit use. The tab bar convention (matching native iOS) shows how serious aviation apps have moved toward native iOS patterns for usability.",
    "LogTen Pro (Coradine) — professional pilot logbook app. Light/serif-influenced design with monospace for flight hour data. Standard density, clean hierarchy. Shows that achievement/tracking apps for pilots can be professional without being dark.",
    "MyAirportMap web (app.myairportmap.com) — client's own product. Light theme marketing site but requires auth; brand colors: Bravo Blue (#005589 primary), magenta accent (#E20074), white/soft-gray backgrounds, rounded 30px corner radius, mobile-first framing on the marketing homepage. The iOS app should preserve this brand identity but shifted darker for night-flying credibility."
  ],
  "brandSignals": "MyAirportMap's marketing site uses Bravo Blue (#005589) as the primary brand color with a magenta (#E20074) accent for pricing highlights. Typography is sans-serif (Segoe UI / Roboto system stack), modern and clean. The homepage uses a phone-window hero, explicitly positioning the product as mobile-first. Design mood is professional yet approachable — not hardcore avionics, not casual consumer. The rounded 30px feature frames and clean layouts signal a consumer product built for pilots who appreciate polish. The brand does NOT look like a cockpit tool — it looks like a premium lifestyle app for the aviation community.",
  "creativeRationale": "Studied ForeFlight, FlightAware, Garmin Pilot, and LogTen — the apps pilots actually use alongside a tool like MyAirportMap. ForeFlight's dark aeronautical map and FlightAware's explicitly 'dark and low-contrast' engineering decision confirm that dark-mode is the credibility signal in aviation: it mimics cockpit displays, reduces glare in bright environments, and signals 'we built this for pilots, not tourists'. MyAirportMap's own brand uses Bravo Blue (#005589) — translating this into a dark-premium oklch navy palette preserves brand identity while achieving the aviation-grade visual register. The achievement and gamification layer (visited airports, badges, milestones) benefits from a dark canvas where luminous cyan accent markers and badge glows feel earned and celebratory — analogous to how achievement screens work in fitness apps like Garmin Connect, but with an aviation-native blue palette instead of wellness greens. Bright light-mode treatment would make this look like a tourist travel app rather than a serious pilot community product."
}
```

---

## Research Notes

### Client Product (MyAirportMap)
- URL: https://app.myairportmap.com (requires Clerk auth)
- Demo: https://app.myairportmap.com/u/myairportmap-demo/map (requires auth)
- Marketing: https://myairportmap.com — light theme, Bravo Blue (#005589) primary, magenta accent (#E20074)
- Round 30px feature frames, mobile-first homepage, professional but approachable
- Features: map of visited airports, achievements/badges, pilot milestones, profile
- Tech: WKWebView iOS wrapper, StoreKit 2, Flask backend, Clerk auth
- Job: Build native iOS wrapper with in-app subscription (StoreKit 2)

### Competitor Research
- **ForeFlight**: Industry-leading EFB app, dark/light theme toggle, dark preferred for cockpit, aeronautical chart-centric UI, blue palette
- **FlightAware**: "Pretty dark and low-contrast" (confirmed by engineering blog), map-centric, dark for legibility
- **Garmin Pilot**: Avionics-mirroring icon UI + tab bar option, night mode, professional tone
- **CloudAhoy**: Light theme, 3D flight visualization, moderate density
- **LogTen Pro**: Professional logbook, serif + mono type, standard density, light/clean

### Domain Conventions (Aviation iOS Apps)
- Dark mode is the professional signal (night operations, cockpit glare reduction)
- Blue is the universal aviation color (sky, aeronautical charts, airspace overlays)
- Monospace for all identifiers: ICAO codes (KLAX, EGLL), coordinates, altitudes, distances
- Map-centric composition — the map is the hero, not a supporting element
- Bottom tab navigation preferred (iOS native convention, Garmin Pilot confirmed)
- Achievement/badge systems exist in aviation (AOPA Pilot Passport, MyFlightbook gamification)

### Design Decision Justifications
- **Dark-premium over SaaS-modern**: Aviation credibility demands dark. Light-theme would look like a general travel app.
- **Navy blue over purple/teal**: Bravo Blue brand identity + aviation chart conventions both point to blue family
- **Geist Mono for data**: Aviation apps universally use monospace for ICAO codes, nav data, flight hours
- **Medium radius**: Balances MyAirportMap's own 30px consumer-friendly rounding with professional aviation restraint
- **Smooth 200-300ms motion**: Achievement unlocks and badge animations should feel satisfying; not instant (too cold), not slow (too consumer)
