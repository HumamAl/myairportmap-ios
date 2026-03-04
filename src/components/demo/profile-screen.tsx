"use client";

import { pilotProfile, airports, achievements, flightLog } from "@/data/mock-data";
import { Plane, MapPin, Globe, Award, Clock, ChevronRight } from "lucide-react";

const stats = [
  {
    label: "Flight Hours",
    value: pilotProfile.totalHours.toLocaleString(),
    icon: Clock,
  },
  {
    label: "Airports",
    value: pilotProfile.airportsVisited.toString(),
    icon: MapPin,
  },
  {
    label: "States",
    value: pilotProfile.statesVisited.toString(),
    icon: Globe,
  },
  {
    label: "Aircraft",
    value: pilotProfile.aircraftTypesFlown.toString(),
    icon: Plane,
  },
];

export function ProfileScreen() {
  const unlockedCount = achievements.filter((a) => a.unlockedAt).length;
  const recentFlights = flightLog.slice(0, 3);
  const recentAirports = airports.slice(0, 3);

  return (
    <div className="flex flex-col h-full bg-[oklch(0.06_0.01_240)] overflow-y-auto">
      {/* Profile Header */}
      <div className="px-3 pt-3 pb-2 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center mx-auto mb-2">
          <span className="text-lg font-bold text-primary">
            {pilotProfile.avatarInitials}
          </span>
        </div>
        <h1 className="text-sm font-semibold text-white/90">{pilotProfile.name}</h1>
        <p className="text-[10px] text-white/50">@{pilotProfile.username}</p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <span className="text-[9px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
            {pilotProfile.rating}
          </span>
          <span className="text-[9px] text-white/40">
            Member since {new Date(pilotProfile.memberSince).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-1.5 px-3 mb-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-2 flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-3.5 h-3.5 text-primary/70" />
            </div>
            <div>
              <p className="text-sm font-bold text-white/90 font-mono">{value}</p>
              <p className="text-[9px] text-white/40">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Summary */}
      <div className="px-3 mb-3">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider">
            Achievements
          </p>
          <span className="text-[9px] text-white/30">
            {unlockedCount}/{achievements.length}
          </span>
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-lg p-2.5">
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-primary/60" />
            <div className="flex-1">
              <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary/50 transition-all"
                  style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-[9px] font-mono text-primary/60">
              {Math.round((unlockedCount / achievements.length) * 100)}%
            </span>
          </div>
          <div className="flex gap-1 mt-2">
            {achievements.slice(0, 6).map((a) => (
              <span
                key={a.id}
                className={`text-sm ${!a.unlockedAt ? "grayscale opacity-40" : ""}`}
              >
                {a.icon}
              </span>
            ))}
            {achievements.length > 6 && (
              <span className="text-[9px] text-white/30 flex items-center">
                +{achievements.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="px-3 mb-3">
        <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">
          Subscription
        </p>
        <div className="bg-white/[0.03] border border-white/5 rounded-lg p-2.5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium text-white/80">
              MyAirportMap Plus
            </p>
            <p className="text-[9px] text-white/40">
              via {pilotProfile.subscriptionSource === "storekit" ? "App Store" : "Stripe"} · Renews Mar 4
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-white/20" />
        </div>
      </div>

      {/* Recent Flights */}
      <div className="px-3 pb-4">
        <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">
          Recent Flights
        </p>
        <div className="space-y-1">
          {recentFlights.map((flt) => (
            <div
              key={flt.id}
              className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-2"
            >
              <div className="flex items-center gap-2">
                <div className="text-[9px] font-mono text-primary/60">
                  {flt.departure}
                </div>
                <Plane className="w-3 h-3 text-white/20 rotate-90" />
                <div className="text-[9px] font-mono text-primary/60">
                  {flt.arrival}
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-white/60">{flt.aircraftType}</p>
                <p className="text-[8px] text-white/30">{flt.duration}h · {flt.conditions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
