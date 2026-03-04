"use client";

import { useState } from "react";
import { MapPin, Search, Filter, ChevronRight } from "lucide-react";
import { airports } from "@/data/mock-data";
import { pilotProfile } from "@/data/mock-data";

const filters = ["All", "Large", "Medium", "Small"];

export function MapScreen() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = airports.filter((apt) => {
    const matchesFilter =
      activeFilter === "All" ||
      apt.type.includes(activeFilter.toLowerCase());
    const matchesSearch =
      !searchQuery ||
      apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.icao.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full bg-[oklch(0.06_0.01_240)]">
      {/* Map Header */}
      <div className="px-3 pt-2 pb-1.5">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-sm font-semibold text-white/90">My Airport Map</h1>
            <p className="text-[10px] text-white/50">
              {pilotProfile.airportsVisited} airports visited
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-mono text-primary/80 bg-primary/10 px-1.5 py-0.5 rounded">
              {pilotProfile.statesVisited} states
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-2">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
          <input
            type="text"
            placeholder="Search airports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white/90 placeholder:text-white/25 focus:outline-none focus:border-primary/40 transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-1.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors ${
                activeFilter === f
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "bg-white/5 text-white/50 border border-white/8 hover:bg-white/8"
              }`}
            >
              {f}
            </button>
          ))}
          <button className="ml-auto flex items-center gap-1 px-2 py-1 rounded-full text-[10px] text-white/40 bg-white/5 border border-white/8">
            <Filter className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Map Visualization (simplified) */}
      <div className="flex-1 relative bg-[oklch(0.08_0.015_240)] mx-3 rounded-lg overflow-hidden border border-white/5 mb-2">
        {/* Grid overlay to simulate map */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }} />

        {/* Airport dots */}
        {filtered.slice(0, 8).map((apt, i) => {
          const x = 15 + ((apt.lng + 130) / 60) * 70;
          const y = 10 + ((50 - apt.lat) / 30) * 80;
          return (
            <div
              key={apt.id}
              className="absolute flex flex-col items-center group"
              style={{
                left: `${Math.max(5, Math.min(90, x))}%`,
                top: `${Math.max(5, Math.min(90, y))}%`,
                animationDelay: `${i * 80}ms`,
              }}
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-primary/80 border border-primary/40 shadow-[0_0_6px_rgba(100,150,255,0.3)] animate-pulse" />
              </div>
              <span className="text-[8px] font-mono text-white/60 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-1 rounded">
                {apt.icao}
              </span>
            </div>
          );
        })}

        {/* Map legend */}
        <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm rounded px-2 py-1 text-[9px] text-white/40">
          <MapPin className="w-3 h-3 inline text-primary/60 mr-1" />
          {filtered.length} airports shown
        </div>
      </div>

      {/* Recent Airports List */}
      <div className="px-3 pb-2">
        <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">
          Recent Visits
        </p>
        <div className="space-y-1">
          {filtered.slice(0, 3).map((apt) => (
            <div
              key={apt.id}
              className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-2 hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-[9px] font-mono font-bold text-primary">
                    {apt.iata || apt.icao.slice(1)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-white/80 truncate">
                    {apt.name}
                  </p>
                  <p className="text-[9px] text-white/40">
                    {apt.city}, {apt.state} · {apt.elevation}ft MSL
                  </p>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-white/20 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
