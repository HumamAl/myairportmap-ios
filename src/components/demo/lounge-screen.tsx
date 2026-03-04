"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { pilotProfile, airports, loungeUsers } from "@/data/mock-data";

export function LoungeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pilotSearch, setPilotSearch] = useState("");

  const recentVisits = airports
    .sort((a, b) => new Date(b.visitedAt).getTime() - new Date(a.visitedAt).getTime())
    .filter((apt) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        apt.name.toLowerCase().includes(q) ||
        apt.icao.toLowerCase().includes(q) ||
        apt.city.toLowerCase().includes(q)
      );
    });

  return (
    <div className="px-3 py-3 space-y-3">
      {/* Page heading */}
      <div>
        <h1 className="text-base font-bold text-white/90">
          Pilot&apos;s Lounge{" "}
          <span className="text-[10px] font-normal text-white/40">
            @{pilotProfile.username}
          </span>
        </h1>
        <p className="text-[9px] text-white/40 mt-0.5">
          Private dashboard. Uploads/edits live in Manage.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-1.5">
        <button className="px-2.5 py-1.5 bg-white/[0.06] border border-white/[0.10] rounded-md text-[9px] font-medium text-white/70 hover:bg-white/[0.10] transition-colors">
          Manage (Enter/Upload) Visits
        </button>
        <button className="px-2.5 py-1.5 bg-white/[0.06] border border-white/[0.10] rounded-md text-[9px] font-medium text-white/70 hover:bg-white/[0.10] transition-colors">
          Download my_visits.csv
        </button>
        <button className="px-2.5 py-1.5 bg-white/[0.06] border border-white/[0.10] rounded-md text-[9px] font-medium text-white/70 hover:bg-white/[0.10] transition-colors">
          Share
        </button>
      </div>

      {/* Visit search */}
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20" />
        <input
          type="text"
          placeholder="Search: airport, date, callsign, notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg pl-7 pr-3 py-2 text-[10px] text-white/80 placeholder:text-white/25 focus:outline-none focus:border-white/[0.15] transition-colors"
        />
      </div>

      {/* Pilot's Lounge table */}
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg overflow-hidden">
        <div className="px-3 pt-2.5 pb-1.5">
          <h2 className="text-[11px] font-semibold text-white/80">
            Currently in the MyAirportMap Pilot&apos;s Lounge
          </h2>
          <p className="text-[8px] text-white/30 mt-0.5">
            Opt-in pilots only · Four seats in the lounge · One user departs every 6 hours · Sequence is random
          </p>
        </div>

        {/* Table header */}
        <div className="flex items-center px-3 py-1 border-t border-white/[0.06]">
          <span className="text-[8px] font-medium text-white/30 uppercase tracking-wider flex-1">
            Username
          </span>
          <span className="text-[8px] font-medium text-white/30 uppercase tracking-wider w-14 text-center">
            Airports
          </span>
          <span className="text-[8px] font-medium text-white/30 uppercase tracking-wider w-8 text-center">
            Map
          </span>
        </div>

        {/* User rows */}
        {loungeUsers.map((user) => (
          <div
            key={user.username}
            className="flex items-center px-3 py-2 border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center text-[7px] font-bold text-white/60 shrink-0">
                {user.username[0].toUpperCase()}
              </div>
              <span className="text-[10px] text-primary/80 font-medium truncate">
                @{user.username}
              </span>
            </div>
            <span className="text-[10px] text-white/60 font-mono bg-white/[0.04] px-2 py-0.5 rounded w-14 text-center">
              {user.airports}
            </span>
            <span className="text-[10px] text-primary/60 w-8 text-center cursor-pointer hover:text-primary/80">
              Map
            </span>
          </div>
        ))}
      </div>

      {/* Find a pilot */}
      <div>
        <h2 className="text-[11px] font-semibold text-white/80 mb-1.5">
          Find a pilot
        </h2>
        <input
          type="text"
          placeholder="Search handle (min 3 characters)"
          value={pilotSearch}
          onChange={(e) => setPilotSearch(e.target.value)}
          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-[10px] text-white/80 placeholder:text-white/25 focus:outline-none focus:border-white/[0.15] transition-colors"
        />
        <p className="text-[8px] text-white/30 mt-1">
          Type at least 3 characters to search.
        </p>
      </div>

      {/* Milestones & Recent Achievements */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-2.5">
          <h3 className="text-[10px] font-semibold text-white/80 mb-1">
            Milestones
          </h3>
          <p className="text-[8px] text-white/30">
            Highlights shared in the MyAirportMap Lounge.
          </p>
          <p className="text-[8px] text-primary/50 mt-1.5">
            No milestones yet.
          </p>
        </div>
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-2.5">
          <h3 className="text-[10px] font-semibold text-white/80 mb-1">
            Recent Achievements
          </h3>
          <p className="text-[8px] text-white/30">
            States · Runway 360 · Ratings (shared only).
          </p>
          <p className="text-[8px] text-primary/50 mt-1.5">
            No achievements yet.
          </p>
        </div>
      </div>

      {/* Recent visit list (bonus - shows search working) */}
      {searchQuery && (
        <div>
          <p className="text-[9px] text-white/30 uppercase tracking-wider mb-1.5">
            {recentVisits.length} results
          </p>
          <div className="space-y-1">
            {recentVisits.slice(0, 5).map((apt) => (
              <div
                key={apt.id}
                className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-lg px-2.5 py-1.5"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-medium text-white/70 truncate">
                    {apt.icao} · {apt.name}
                  </p>
                  <p className="text-[8px] text-white/30">
                    {apt.city}, {apt.state} · {new Date(apt.visitedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
