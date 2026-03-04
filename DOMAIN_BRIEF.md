# Domain Knowledge Brief — Aviation Pilot Achievement Tracker (iOS)

## Sub-Domain Classification

**Independent GA pilot achievement and airport-visit tracking app for iOS** — targeting private pilots, student pilots through instrument-rated pilots, and aviation enthusiasts who track airports visited, achievements earned, and aviation milestones. Think: "Peakbagger.com for pilots." The product is NOT a flight planning tool (that's ForeFlight/Garmin Pilot) — it is a social + achievement layer on top of the pilot's flying life, similar to the discontinued AOPA Pilot Passport but deeper, mobile-native, and gamified.

User type: **General aviation (GA) pilots**, primarily flying single-engine piston aircraft (Cessna 172, Piper Cherokee, Beechcraft Bonanza), with some multi-engine and instrument-rated pilots. Fleet/commercial contexts are excluded.

---

## Job Analyst Vocabulary — Confirmed and Extended

### Confirmed Primary Entity Names

These are the words that must appear in every UI label — sidebar nav, table headers, KPI card titles, status badges, search placeholders.

- Primary record type: **"airport"** (not "location" or "venue") — identified by **ICAO code** (four-letter, e.g., KORD, KSFO) or FAA identifier (e.g., ORL, KFDK). GA pilots use ICAO codes in speech and app interfaces.
- Visit record: **"visit"** or **"check-in"** (not "trip" or "entry")
- User role: **"pilot"** (not "user" or "member")
- Aircraft: **"tail number"** or **"N-number"** (e.g., N5543C) — the unique identifier every FAA-registered aircraft has
- Flight: **"flight"** or **"leg"** (not "trip" or "journey")
- Distance unit: **"nautical miles (nm)"** — never "miles" or "km" in cockpit context
- Achievement system: **"badges"** or **"endorsements"** (not "trophies" or "medals")
- Flight time categories: **"PIC time"** (Pilot in Command), **"dual received"**, **"solo time"**, **"XC time"** (cross-country), **"night time"**, **"simulated instrument"**, **"actual IMC"**, **"hood time"**
- Runway: **"runway"** by heading number (e.g., "Runway 28L") — never just "strip"
- Fuel type: **"100LL"** (avgas, for piston aircraft) and **"Jet-A"** (turbines) — never "gasoline" or "gas"
- Weather: **"VFR"** (Visual Flight Rules) and **"IFR"** (Instrument Flight Rules) — determines what conditions the pilot can legally fly in

### Expanded KPI Vocabulary

| KPI Name | What It Measures | Typical Format |
|---|---|---|
| Total Airports Visited | Count of unique ICAO-identified airports with confirmed visit | count (e.g., "147") |
| States Flown To | Unique US states with at least one airport visit | count of 50 (e.g., "23 / 50") |
| Countries Visited | Unique countries — relevant once pilots cross borders | count |
| Total PIC Hours | Pilot-in-command flight hours (from logbook) | decimal hours (e.g., "412.3h") |
| Total Landings | Cumulative landing count across all flights | count |
| Night Landings | Landings logged after official sunset | count |
| Instrument Approaches | IFR approaches flown (tracked for currency) | count |
| Aircraft Types Flown | Unique aircraft makes/models | count |
| Longest Flight (nm) | Single-leg maximum nautical mile distance | nautical miles |
| Total Distance Flown | Cumulative nautical miles across all flights | nautical miles (e.g., "14,320 nm") |
| Fuel Burned | Total avgas or Jet-A consumed across all flights | gallons |
| Rarest Airport | Airport with fewest total visits in system | qualitative label |
| Grass Strips Visited | Count of turf-runway airports — a badge category | count |
| Class B Airports | Visits to major commercial airports — high-prestige badge | count |
| Fly-in Events Attended | Airshow / EAA / fly-in events checked in at | count |

### Status Label Vocabulary

- **Airport visit states**: `Visited`, `Wishlist`, `Planned`, `Never Been`
- **Badge progress states**: `Locked`, `In Progress`, `Earned`, `Tier 1`, `Tier 2`, `Tier 3`
- **Flight conditions at time of visit**: `VFR`, `MVFR` (Marginal VFR), `IFR`, `LIFR` (Low IFR)
- **Airport types**: `Towered`, `Non-Towered`, `Uncontrolled`, `Private`, `Grass Strip`, `Seaplane Base`, `Heliport`, `International`
- **Airspace classes**: `Class A`, `Class B`, `Class C`, `Class D`, `Class E`, `Class G` (uncontrolled)
- **Fuel service**: `Self-Serve`, `Full-Serve`, `No Fuel`, `100LL Only`, `Jet-A Available`

### Workflow and Action Vocabulary

- Primary actions: **"check in"**, **"log visit"**, **"add to wishlist"**, **"earn badge"**, **"link flight"**
- Secondary actions: **"add photo"**, **"rate airport"**, **"write review"**, **"share"**, **"export logbook"**
- Logbook actions: **"log flight"**, **"enter PIC time"**, **"record approach"**, **"add endorsement"**
- Discovery actions: **"explore airports"**, **"find nearby"**, **"browse by state"**, **"filter by type"**

### Sidebar Navigation Candidates

This is a mobile iOS app — navigation is a bottom tab bar (5 tabs max), not a sidebar. Tab structure:

1. **Map** — main interactive airport map (home screen)
2. **My Airports** — visited airports list and stats
3. **Badges** — achievement collection, progress tracking
4. **Logbook** — flight hours and currency tracking
5. **Profile** — subscription tier, settings, pilot profile

---

## Design Context — Visual Language of This Industry

### What "Premium" Looks Like in This Domain

Aviation software has two dominant visual traditions. **Professional EFB (Electronic Flight Bag)** tools like ForeFlight and Garmin Pilot use a dark-by-default or dual-mode interface with high data density, tabular layouts, and a strong preference for muted blues and aviation-gray palettes — because pilots use these tools in bright cockpits and at night, so contrast and legibility are non-negotiable. Map-centric design is the core paradigm: the sectional aeronautical chart or basemap occupies 60–70% of the screen, with data panels that slide in from the bottom.

**Consumer-leaning aviation apps** (like what MyAirportMap appears to be) occupy a newer design space that bridges aviation professionalism with gamification and social features. The closest analogues are Peakbagger (mountain summits), Untappd (craft beer check-ins), and Strava — but with an aviation identity layer. These apps use bolder accent colors, progress rings, map integration, and achievement iconography that feels aspirational rather than utilitarian.

The design challenge for MyAirportMap is to feel "serious enough for pilots" (who are skeptical of cartoonish apps) while being "engaging enough to drive daily use" (which requires the gamification layer to feel rewarding, not tacky). The sweet spot is: **dark-premium with warm amber/gold accent** — echoing cockpit instrument panels, which are historically black with amber or white illuminated displays.

### Real-World Apps Clients Would Recognize as "Premium"

1. **ForeFlight** — The gold standard of GA aviation apps. Dark/light dual mode, map-centric, sectional chart overlay, weather layers, logbook, flight planning. Practitioners consider it the category-defining product. Visual language: precise, data-dense, utilitarian blue-gray palette, monospace data labels. Used by ~80% of serious GA pilots.

2. **LogTen Pro (now LogTen)** — The definitive iOS pilot logbook. Dark interface, circular radar charts for hour distributions, customizable column layouts. Visual language: dark premium, clean type hierarchy, color-coded hour categories, watch integration. Trusted by 160,000+ pilots. The app most GA pilots use alongside ForeFlight.

3. **AOPA Pilot Passport** (now sunset, but still referenced) — The closest competitive predecessor to MyAirportMap. Airport check-ins, badge collection, state completion tracking, photo uploads. GA pilots who remember it will immediately understand MyAirportMap's value proposition. Its sunset in 2024 created a direct market gap.

### Aesthetic Validation

- **Job Analyst's direction**: iOS mobile app, map-centric, achievement/gamification layer
- **Domain validation**: Confirmed. The aviation pilot achievement tracker space sits between ForeFlight's utilitarian precision and LogTen's dark premium logbook aesthetic. Dark backgrounds are strongly expected — pilots associate dark UI with night-flying professionalism. Accent color should lean **amber/gold** (cockpit instrument glow) or **aviation blue** (sky, charts). Avoid green (medical/ATC context) and red (emergency/warning — never use as a primary accent in aviation UI).
- **Suggested aesthetic**: **Dark Premium** with amber-gold accent (`oklch(0.75 0.18 75)` range). This evokes cockpit instrument panels, reads as "serious aviation tool," and differentiates from ForeFlight's clinical blue.

### Format Validation

- **Job Analyst chose**: `mobile-app-preview`
- **Domain validation**: Confirmed. MyAirportMap is an iOS app. The demo should show a phone mockup with multiple navigable screens. The app is inherently visual and map-driven, so showing the interface in a phone frame immediately communicates the product.
- **Format-specific design notes**: Bottom tab bar (5 items) is the iOS standard for this type of app. Home screen should be the interactive map with visited airports pinned. Stats/achievements should be accessible within 2 taps. Reference apps for mobile pattern: **Strava** (achievement tracking, dark option), **Peakbagger** (summit logging, map-centric), **Untappd** (location-based check-ins with badges).

### Density and Layout Expectations

**Standard to compact density.** Aviation apps prioritize legibility in varying lighting conditions (bright cockpit, dark night), so font sizes are slightly larger than typical SaaS dashboards. Data labels use monospace or tabular numeric fonts (ForeFlight uses SF Mono variants for altimeter/frequency displays).

**Map-heavy, card-supplemental**: The map is primary — about 60-70% of visible screen area on the main screen. Airport info appears as bottom sheets (card that slides up from bottom). Lists use compact rows with ICAO code prominently displayed. Achievement/badge screens use large card grid (2-column on iPhone, 3-column on iPad).

---

## Entity Names (10+ realistic names)

### Airports (with real ICAO codes, names, locations)

| ICAO | FAA ID | Airport Name | Location | Elevation | Runway |
|---|---|---|---|---|---|
| KSFO | SFO | San Francisco International | San Francisco, CA | 13 ft MSL | 28L/10R (11,870 ft) |
| KORD | ORD | Chicago O'Hare International | Chicago, IL | 672 ft MSL | 10C/28C (13,000 ft) |
| KFDK | FDK | Frederick Municipal Airport | Frederick, MD | 303 ft MSL | 23/5 (5,220 ft) |
| KOSH | OSH | Wittman Regional Airport | Oshkosh, WI | 808 ft MSL | 18/36 (8,002 ft) |
| KLXV | LXV | Lake County Airport (Leadville) | Leadville, CO | 9,927 ft MSL | 16/34 (6,400 ft) |
| KSMO | SMO | Santa Monica Municipal | Santa Monica, CA | 177 ft MSL | 21/3 (4,977 ft) |
| KHEF | HEF | Manassas Regional Airport | Manassas, VA | 192 ft MSL | 34L/16R (8,500 ft) |
| KPWK | PWK | Chicago Executive Airport | Wheeling, IL | 647 ft MSL | 16/34 (5,001 ft) |
| 3AU | 3AU | Gaston's Airport | Lakeview, AR | 392 ft MSL | 17/35 (3,200 ft turf) |
| KGON | GON | Groton-New London Airport | Groton, CT | 10 ft MSL | 5/23 (4,000 ft) |
| KMTV | MTV | Blue Ridge Airport | Martinsville, VA | 941 ft MSL | 18/36 (3,990 ft) |
| KBKF | BKF | Buckley Space Force Base | Aurora, CO | 5,663 ft MSL | 32/14 (11,002 ft) |
| SEDNA | SDX | Sedona Airport | Sedona, AZ | 4,830 ft MSL | 3/21 (5,132 ft) |
| KFIN | FIN | Flagler Executive Airport | Palm Coast, FL | 33 ft MSL | 11/29 (5,000 ft) |
| U60 | U60 | Big Creek Airport | Big Creek, ID | 5,756 ft MSL | 14/32 (2,700 ft) |

### Pilot Names (realistic GA pilot demographics — mix of backgrounds, ages)

- James Whitfield (retired airline captain, ATP-rated, now flies Bonanza for fun)
- Sarah Okonkwo (instrument-rated private pilot, 340h TT, flies Cessna 172)
- Marcus Delgado (student pilot, 45h, working toward private certificate)
- Elena Vasquez (commercial pilot, CFI, 1,200h TT, teaches at local FBO)
- Robert "Bud" Tremblay (VFR private pilot only, 67 years old, 820h TT over 30 years)
- Priya Nair (instrument-rated pilot, 280h TT, recently passed IPC)
- Tyler Kowalski (sport pilot, flies Light Sport Aircraft only, 110h)
- Diane Hutchinson (multi-engine rated, 890h TT, considering ATP written)
- Aaron Fitch (private pilot, 195h TT, flies club Piper Arrow)
- Ng Wai-Lin (student pilot transitioning from gliders, 60h powered)

### Aircraft (real makes/models flown in GA)

| Tail Number | Make/Model | Year | Type | Engine |
|---|---|---|---|---|
| N5543C | Cessna 172S Skyhawk | 2018 | Single-engine piston | Lycoming IO-360-L2A |
| N2387P | Piper PA-28-181 Archer III | 2003 | Single-engine piston | Lycoming O-360-A4M |
| N8841T | Beechcraft A36 Bonanza | 1998 | Single-engine piston | Continental IO-550-BB |
| N443DC | Cirrus SR22 G5 | 2016 | Single-engine piston | Continental IO-550-N |
| N7721R | Cessna 182T Skylane | 2007 | Single-engine piston | Lycoming IO-540-AB1A5 |
| N90JP | Piper PA-44-180 Seminole | 2001 | Multi-engine piston | Lycoming O-360-E1A6D (x2) |
| N61TW | Diamond DA40 G1000 | 2011 | Single-engine piston | Lycoming IO-360-M1A |
| N334LB | Cessna 182RG Skylane | 1979 | Single-engine retractable | Continental O-470-U |

---

## Realistic Metric Ranges

| Metric | Low | Typical | High | Notes |
|--------|-----|---------|------|-------|
| Total airports visited (private pilot, 3 yrs) | 8 | 35–70 | 200+ | Depends heavily on how much the pilot actively explores vs. flies home/work routes |
| Total flight hours (private pilot) | 40 (checkride minimum) | 150–400 | 1,500+ (ATP threshold) | Most recreational pilots fly 50-100h/year |
| Airports per year (active recreational pilot) | 3 | 15–30 | 80+ | Fly-in enthusiasts visit many airports |
| States visited (active private pilot) | 1 | 8–18 | 50 | "All 50 States" is a lifetime achievement |
| Flight hours per year (GA recreational) | 20 | 50–100 | 300 | FAA data: average GA pilot flies ~65h/year |
| Cross-country distance per leg | 50 nm (minimum XC) | 150–400 nm | 1,500+ nm (transcontinental) | XC minimum is 50nm straight-line for most certificates |
| Field elevation (sea level airports) | -3 ft (Salton Sea) | 300–900 ft | 9,927 ft (Leadville, KLXV) | Density altitude performance critical above 5,000 ft |
| Runway length (GA airports) | 2,000 ft (grass strips) | 4,000–6,000 ft | 13,000+ ft (major commercial) | Minimum ~2,500 ft for typical piston single |
| Fuel price per gallon (100LL avgas) | $4.80 | $6.00–$7.50 | $9.00+ | Regional variation; FBO markup vs. self-serve |
| Annual aviation app subscription | $79 (Garmin Pilot Standard) | $120–$240 | $360 (ForeFlight Performance Plus) | Based on current 2025 pricing |
| Pilot logbook entries (typical private pilot, 5 yrs) | 40 | 200–600 | 5,000+ | Each flight = one logbook entry |
| Badge count (active app user, 2 yrs) | 3 | 12–25 | 50+ | Depends on diversity of flying |

---

## Industry Terminology Glossary

| Term | Definition | Usage Context |
|------|-----------|---------------|
| ICAO Code | Four-letter airport identifier used globally (K prefix for US). e.g., KORD | Primary airport identifier in all pilot-facing tools |
| FAA Identifier | Three-letter US domestic airport code (may differ from ICAO IATA). e.g., ORD | Used in ATC communications; some GA airports have no IATA code |
| TFR | Temporary Flight Restriction — airspace you can't enter without clearance | Appears in NOTAMs; relevant for airport access |
| METAR | Meteorological Aerodrome Report — real-time weather at an airport | Weather display at each airport detail card |
| TAF | Terminal Aerodrome Forecast — 24-30 hour weather prediction | Future visit planning |
| NOTAM | Notice to Airmen — temporary changes affecting flight safety | Airport status warnings |
| FBO | Fixed Base Operator — private aviation company on airport offering fuel, hangars, tie-downs, crew cars | Airport services layer; pilots look up FBO before visiting |
| Pattern Altitude | Standard traffic circuit altitude above airport (typically 1,000 ft AGL) | Operational context; shown in airport detail |
| AGL / MSL | Above Ground Level / Mean Sea Level — two ways to express altitude | Elevation shown as MSL; terrain clearance as AGL |
| VFR / IFR | Visual/Instrument Flight Rules — two regulatory environments | Visit conditions tagging; badge categories |
| Sectional Chart | FAA aeronautical navigation chart, the visual map every VFR pilot uses | Map layer context; MyAirportMap may overlay on sectional |
| Class B/C/D/E/G Airspace | Regulated airspace classes around airports — B is most complex (major commercial) | Airport categorization and badge context |
| N-Number | FAA aircraft registration identifier (starts with N in US). e.g., N5543C | Unique aircraft identifier for logbook entries |
| PIC | Pilot in Command — the legal and operational authority on the flight | Flight hours sub-category in logbook |
| XC | Cross-Country — flight to airport beyond minimum distance, required for certificates | Hours category; badge for XC destinations |
| Currency | FAA requirements to legally carry passengers (3 takeoffs/landings in 90 days) | App could track currency status per pilot |
| Fly-in | Community aviation event at an airport (EAA AirVenture is the largest) | Badge category; event check-ins |
| Backcountry | Remote airports with challenging approaches, often grass/gravel strips | Badge category for adventurous pilots |
| Density Altitude | Effective altitude at high-elevation/hot airports; degrades aircraft performance | Operational context for high-elevation airport badges |
| Logbook | Official record of all pilot flights; paper or digital (LogTen Pro, ForeFlight) | Primary source of hours data |
| Touch-and-Go | Landing followed immediately by takeoff — counts as a landing for currency | Landing count tracking nuance |
| Endorsement | CFI authorization for specific operations (solo, cross-country, etc.) | Badge type; milestone marker |

---

## Common Workflows

### Workflow 1: Airport Check-In After Landing

1. Pilot lands at new airport
2. Opens MyAirportMap on iPhone while taxiing to parking
3. App detects location (GPS) and suggests airport match — pilot confirms ICAO code
4. Tap "Check In" — visit logged with timestamp, weather conditions (auto-pulled from METAR API if available), aircraft tail number
5. Optional: add photo, rating (1-5 stars), notes ("Great grass strip, FBO had free coffee")
6. App evaluates which badges this visit contributes to (state completion, airport type, count milestones)
7. Push notification: "Badge unlocked: Blue Ridge Visitor — 50 mountain airports visited!"
8. Visit appears in profile, on map as a pin, and in My Airports list

### Workflow 2: Subscription Upgrade (Paywall)

1. Free user reaches limit (e.g., 10 airports logged, or tries to use stats export)
2. App presents StoreKit subscription sheet with two tiers
3. **Free tier** features listed: basic check-ins, map view, limited badges
4. **Pro tier** features highlighted: unlimited check-ins, advanced stats, export to ForeFlight/LogTen, weather at time of visit, leaderboards, rarer badges
5. User selects annual vs. monthly billing toggle
6. Apple payment sheet appears — native StoreKit flow
7. Subscription activates — user returned to app with Pro features unlocked

### Workflow 3: Badge Discovery and Planning

1. User opens Badges tab — sees grid of locked/earned/in-progress badges
2. Taps locked "50 States Aviator" badge — sees progress (23/50 states visited)
3. Map view shows visited states highlighted; remaining states shown as targets
4. User taps unvisited state → map zooms, shows airports in that state
5. Taps an airport → views details (runway info, FBO, elevation, user photos/reviews)
6. Taps "Add to Wishlist" → airport marked with wishlist pin on map
7. User can export wishlist as a flight plan (Pro feature)

---

## Common Edge Cases

1. **Airport with no ICAO code** — private strips and some grass runways use only FAA identifiers (e.g., "3AU" not "K3AU"). App must handle non-ICAO codes gracefully.
2. **Airport closure** — airports can close temporarily (NOTAM) or permanently (decommissioned). Visits to closed airports should be preserved as historical records.
3. **Duplicate visits** — pilot visits same airport multiple times. App tracks total visits per airport and date of first visit (most meaningful for map coloring).
4. **Zero-hour new user** — fresh install with no visits. Empty map state must be engaging (show nearby airports as targets, not a blank screen).
5. **International visit** — pilot flies to Canada or Mexico. ICAO codes have different prefixes (CY for Canada, MM for Mexico). App must handle non-K prefix airports.
6. **GPS failure** — pilot can't auto-detect airport. Manual search by ICAO code or airport name must be reliable.
7. **Shared aircraft** — multiple pilots flying same tail number (flying club scenario). App should track pilot's visits, not aircraft visits.
8. **Pilot with 1,500+ hours** — ATP-level pilot might have 500+ airports visited. Performance, pagination, and map clustering matter.
9. **Fly-in event airports** — EAA AirVenture at KOSH draws 10,000+ aircraft in one week. The airport is extraordinarily popular during one week per year; algorithms showing "rare" airports must exclude event-week spikes.
10. **Premium lapsed subscription** — Pro user whose subscription expired; app must gracefully lock Pro features without deleting their data.

---

## What Would Impress a Domain Expert

1. **Using ICAO codes as primary identifiers, not airport names** — Pilots say "I landed at KOSH" not "I landed at Wittman Regional." Any aviation app that uses full airport names as primary identifiers immediately signals it was built by someone who doesn't fly.

2. **Density altitude on high-elevation airport cards** — Leadville (KLXV) at 9,927 ft MSL is famous for being the highest public-use airport in North America. A pilot checking in there expects to see density altitude data — the effective performance altitude which on a hot summer day could be 12,000+ ft. This is an insider data point that instantly signals aviation knowledge.

3. **Currency tracking edge in logbook** — FAA requires 3 takeoffs/landings in preceding 90 days to carry passengers. A badge or notification for "You're current through [date]" shows understanding of regulatory context, not just fun gamification.

4. **EAA AirVenture / Sun 'n Fun awareness** — The two largest GA fly-ins (EAA AirVenture at KOSH in July, Sun 'n Fun at KLAL in April) are on every serious GA pilot's bucket list. Showing these as "Featured Event Airports" or having a dedicated badge for visiting these during the event is an insider signal.

5. **Grass strip / backcountry as a prestige category** — In GA culture, landing at remote backcountry strips (Big Creek U60 in Idaho, fly-in grass strips in the Rockies) is a mark of skill and adventure. The equivalent of mountain summiting's "14er" culture. Having a dedicated "Backcountry Pioneer" badge tier that tracks grass/gravel/backcountry airports specifically will resonate deeply with this community.

---

## Common Systems & Tools Used

| App / System | Category | Usage Notes |
|---|---|---|
| **ForeFlight** | EFB (Electronic Flight Bag) | Flight planning, weather, charts, logbook — used by ~80% of serious GA pilots. MyAirportMap could integrate or offer ForeFlight export. |
| **Garmin Pilot** | EFB alternative to ForeFlight | Second most popular; Garmin hardware integration. $79.99/year base tier. |
| **LogTen Pro (LogTen)** | Digital pilot logbook | Industry standard for hour tracking. 160,000+ pilots. Dark UI, detailed reports. |
| **CloudAhoy** | Flight debriefing/analysis | Post-flight GPS track replay, analytics. |
| **AOPA Pilot Passport** | Airport visit tracking (SUNSET 2024) | Closest predecessor to MyAirportMap. Its shutdown in July 2024 created direct market gap. |
| **SkyVector** | VFR chart planning (web) | Free sectional chart viewer; popular for pre-flight route drawing. |
| **aviationweather.gov** | METAR/TAF/NOTAM data | FAA's official weather data source; aviation apps integrate its API. |
| **FlightAware** | Flight tracking | Pilots use it to track their own flights, see route history. |
| **AirNav** | Airport database and fuel prices | Pilots look up FBO fuel prices before trips. |
| **FltPlan Go** | Free EFB app | Budget alternative to ForeFlight; popular with student pilots. |

---

## Geographic / Cultural Considerations

- **US-centric but internationally aware**: Most GA pilots fly within the continental US (CONUS). Alaska and Hawaii pilots are a distinct segment (challenging terrain/weather). US territories (Puerto Rico, USVI) use K-prefix variants.
- **FAA regulatory context**: FAA is the governing authority for all flight operations, certificates, aircraft registration. Regulatory references (Part 61, Part 91) are familiar shorthand.
- **ICAO vs. FAA ID conflict**: US airports with IATA codes have three-letter codes (ORD, SFO). Their ICAO code is K + FAA ID (KORD, KSFO). GA airports often have no IATA code and use only FAA identifiers — some have fewer than 3 characters.
- **Fuel measurement**: US aviation uses **gallons** for fuel and **nautical miles** for distance. Altitude in **feet** (not meters). Speed in **knots**.
- **Regional GA clusters**: Southeast US (Florida, Carolinas) has highest GA density. Midwest (Iowa, Kansas, Illinois) has many small GA airports. Pacific Northwest has backcountry/bush flying culture. California has many airports but regulatory complexity. Mountain West (Colorado, Idaho) is the hub of backcountry flying culture.
- **Weather time**: Aviation uses **Zulu (UTC) time** for all weather reports and NOTAMs. A METAR timestamp "2356Z" means 2356 UTC. Pilots are fluent in UTC; UI should display both local and Zulu for weather data.

---

## Data Architect Notes

- **Primary entity**: `Airport` — fields: `icaoCode` (4-letter string, PK), `faaId` (3-letter or alphanumeric), `name`, `city`, `state`, `elevation_ft`, `runways[]`, `type` (towered/non-towered/private), `surfaceType` (paved/turf/gravel), `fuel` (100LL/Jet-A/none), `hasControlTower`, `airspaceClass`
- **Secondary entity**: `Visit` — fields: `id`, `airportIcao` (FK), `pilotId`, `date`, `aircraft` (tail number), `conditions` (VFR/IFR/MVFR), `rating` (1-5), `notes`, `photos[]`
- **Badge entity**: `Badge` — fields: `id`, `name`, `description`, `category` (state/count/type/event/distance), `tier` (bronze/silver/gold), `criteria`, `earnedDate` (nullable), `progress` (0-100)
- **Pilot/Profile entity**: `Pilot` — fields: `id`, `name`, `certificates[]` (PPL/IR/CPL/ATP), `homeAirport` (ICAO), `totalHours`, `totalLandings`, `totalAirports`, `totalStates`, `subscriptionTier`
- **Logbook entry**: `LogEntry` — fields: `id`, `date`, `fromIcao`, `toIcao`, `aircraft`, `tailNumber`, `picHours`, `dualHours`, `nightHours`, `xcHours`, `actualImc`, `simulatedImc`, `landings`, `nightLandings`, `approaches`, `remarks`

**Status label exact strings** (use verbatim):
- Airport type: `"Towered"`, `"Non-Towered"`, `"Private"`, `"Grass Strip"`, `"Seaplane Base"`
- Badge states: `"Earned"`, `"In Progress"`, `"Locked"`
- Conditions at visit: `"VFR"`, `"MVFR"`, `"IFR"`, `"LIFR"`
- Subscription tiers: `"Explorer"` (free), `"Aviator"` (pro — pick a domain-resonant name)

**Edge cases to include as specific records**:
- At least 2 airports with non-K prefix (international or private)
- One visit at KOSH (EAA AirVenture context)
- One high-elevation airport visit (KLXV — Leadville)
- One grass strip airport (3AU or similar)
- One badge at 0% progress (locked), one at ~60% (in progress), one at 100% (earned)
- One logbook entry with actual IMC time
- One wishlist airport not yet visited

**Metric ranges for mock data**:
- `totalHours`: ranges from 45 (student) to 1,340 (experienced) across pilot profiles
- `totalAirports`: 8–147 across profiles
- `totalStates`: 1–31 across profiles
- Airport elevation: include range from near sea-level (13 ft, KSFO) to high altitude (9,927 ft, KLXV)
- Runway length: 2,700 ft (backcountry) to 11,870 ft (major commercial)
- Rating (visit): most cluster at 3-5 stars; include one 2-star with complaint note

---

## Layout Builder Notes

- **Density**: Compact-to-standard. ForeFlight and LogTen Pro use compact density with ~14pt minimum text for cockpit legibility. Don't go spacious — aviation pilots use tools that maximize information on screen.
- **Dark background**: The primary aesthetic should be **dark** (`oklch(0.10 0.015 255)` navy-black range). Aviation practitioners strongly associate dark backgrounds with professionalism and night-flying utility.
- **Accent color**: **Amber-gold** (`oklch(0.75 0.18 75)`) for primary interactive elements, earned badges, and key metrics. This evokes cockpit instrument panels (amber/white on black). Blue is acceptable as a secondary accent (sky, charts).
- **Status colors**: Use semantic colors consistently — green for VFR/safe, amber for MVFR/caution, red for IFR/warning, magenta for Special VFR — these are the exact colors pilots see on weather maps.
- **Bottom tab bar**: 5-tab bottom navigation (iOS convention). Tab labels should be aviation-domain specific: Map, My Airports, Badges, Logbook, Profile.
- **Map as primary surface**: The map occupies the full screen on the main tab. Airport pins use color coding by visit status (visited = amber, wishlist = blue, unvisited = gray).
- **Typography**: SF Pro (system default on iOS) is appropriate; data values (hours, coordinates, elevations) should use tabular numbers (`font-variant-numeric: tabular-nums`).

---

## Demo Screen Builder Notes

**Primary screens to showcase in phone mockup**:

1. **Map Screen (Home)**: Full-screen interactive map with airport pins color-coded by visit status. Amber pins for visited, blue for wishlist, gray for unvisited. Stat bar at top or bottom showing "147 airports • 23 states". A recently visited airport bottom sheet slides up.

2. **My Airports Screen**: List view of visited airports sorted by most recent. Each row: ICAO code (bold, monospace), airport name, date visited, state, conditions badge (VFR/IFR), star rating. Pull-to-refresh animation. Search bar at top.

3. **Badges Screen**: 2-column grid of badge cards. Earned badges: full color with amber glow. In-progress: partially filled progress ring. Locked: monochrome/dim. Featured sections: "50 States Challenge" (large hero card with state map filled), "Type Explorer" (different aircraft types), "Fly-in Legends" (event airports).

4. **Subscription Paywall (StoreKit sheet)**: Native iOS presentation. Free tier vs. Aviator tier comparison. Price display: monthly ($4.99/mo) and annual ($39.99/yr — "Save 33%"). Feature bullet points using aviation vocabulary. "Most Popular" badge on annual. Apple Pay button.

**Most important single metric (hero)**: **"Airports Visited" count** — large, bold, displayed on map as a persistent overlay and as the first stat on My Airports. This is the core value proposition and the number pilots brag about.

**Chart type**: For logbook hours distribution, use a **radar/spider chart** (LogTen Pro uses this exact pattern — it's the "Radar page" they prominently feature). For state completion, use a **US states choropleth map** (colored states = visited, gray = not yet). For monthly flight activity, use a **vertical bar chart** (months as categories, flight hours as values).

**Domain-specific panel that would impress a practitioner**: An **"Airport Weather Card"** that shows the current METAR for a selected airport in decoded plain English plus the raw METAR string (pilots want both). Format: "KSFO 031856Z 28012KT 10SM FEW020 16/08 A2993" with decoded: "Wind 280° at 12 knots, Visibility 10 miles, Few clouds at 2,000 ft, Temp 16°C, Altimeter 29.93". Including the raw METAR string alongside decoded text signals deep aviation domain knowledge.

**Subscription tier naming** (domain-resonant, not generic):
- Free tier: **"Explorer"** — suggests discovery phase
- Paid tier: **"Aviator"** — the title a pilot earns; aspirational but earned

**Pricing recommendation for demo**:
- Explorer (Free): Check in at up to 10 airports, basic map, 5 badges
- Aviator: $4.99/month or $39.99/year (Save 33%) — Unlimited airports, all badges, weather data, logbook sync, leaderboards, export to ForeFlight
