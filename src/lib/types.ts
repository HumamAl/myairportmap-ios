import type { LucideIcon } from "lucide-react";

// Sidebar navigation
export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

// Challenge visualization types
export type VisualizationType =
  | "flow"
  | "before-after"
  | "metrics"
  | "architecture"
  | "risk-matrix"
  | "timeline"
  | "dual-kpi"
  | "tech-stack"
  | "decision-flow";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  visualizationType: VisualizationType;
  outcome?: string;
}

// Proposal types
export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  approach: { title: string; description: string }[];
  skillCategories: { name: string; skills: string[] }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  relevance?: string;
  outcome?: string;
  liveUrl?: string;
}

// Screen definition for frame-based demo formats
export interface DemoScreen {
  id: string;
  label: string;
  icon?: LucideIcon;
  href: string;
}

// Conversion element variant types
export type ConversionVariant = "sidebar" | "inline" | "floating" | "banner";

// ── Aviation Domain Types ────────────────────────────────────────────────

export interface Airport {
  id: string;
  icao: string;
  iata: string;
  name: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  elevation: number; // feet MSL
  runways: number;
  type: "large_airport" | "medium_airport" | "small_airport" | "heliport";
  visitedAt: string; // ISO date
  notes?: string;
}

export interface PilotProfile {
  id: string;
  name: string;
  username: string;
  avatarInitials: string;
  rating: "Student" | "PPL" | "CPL" | "ATP" | "CFI";
  totalHours: number;
  airportsVisited: number;
  statesVisited: number;
  countriesVisited: number;
  aircraftTypesFlown: number;
  memberSince: string;
  subscriptionTier: "free" | "plus" | "pro";
  subscriptionSource: "stripe" | "storekit" | "none";
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji
  unlockedAt: string | null; // null = locked
  category: "airports" | "flights" | "ratings" | "milestones";
  progress: number; // 0-100
  requirement: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  period: "month" | "year";
  storeKitProductId: string;
  features: string[];
  recommended?: boolean;
}

export interface StoreKitTransaction {
  id: string;
  productId: string;
  purchaseDate: string;
  expiresDate: string;
  status: "active" | "expired" | "revoked" | "grace_period" | "billing_retry";
  environment: "production" | "sandbox";
  originalTransactionId: string;
}

export interface FlightLogEntry {
  id: string;
  date: string;
  departure: string; // ICAO
  arrival: string; // ICAO
  aircraftType: string;
  duration: number; // hours
  distance: number; // nm
  conditions: "VFR" | "IFR" | "SVFR";
}

export interface MonthlyActivity {
  month: string;
  flights: number;
  airports: number;
  hours: number;
}
