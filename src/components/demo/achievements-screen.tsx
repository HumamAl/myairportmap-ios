"use client";

import { useState } from "react";
import { achievements } from "@/data/mock-data";

const categories = [
  { id: "all", label: "All" },
  { id: "airports", label: "Airports" },
  { id: "flights", label: "Flights" },
  { id: "milestones", label: "Milestones" },
];

export function AchievementsScreen() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = achievements.filter(
    (a) => activeCategory === "all" || a.category === activeCategory
  );

  const unlocked = filtered.filter((a) => a.unlockedAt !== null);
  const locked = filtered.filter((a) => a.unlockedAt === null);

  return (
    <div className="flex flex-col h-full bg-[oklch(0.06_0.01_240)]">
      <div className="px-3 pt-2 pb-1.5">
        <h1 className="text-sm font-semibold text-white/90 mb-0.5">Achievements</h1>
        <p className="text-[10px] text-white/50 mb-2">
          {achievements.filter((a) => a.unlockedAt).length} of {achievements.length} unlocked
        </p>

        {/* Category tabs */}
        <div className="flex gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "bg-white/5 text-white/50 border border-white/8 hover:bg-white/8"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-2 space-y-3">
        {/* Unlocked */}
        {unlocked.length > 0 && (
          <div>
            <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">
              Earned
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {unlocked.map((ach, i) => (
                <div
                  key={ach.id}
                  className="bg-white/[0.04] border border-white/8 rounded-lg p-2.5 hover:bg-white/[0.06] transition-colors"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="text-xl mb-1">{ach.icon}</div>
                  <p className="text-[11px] font-medium text-white/80 leading-tight">
                    {ach.title}
                  </p>
                  <p className="text-[9px] text-white/40 mt-0.5 leading-snug">
                    {ach.description}
                  </p>
                  <div className="mt-1.5 w-full h-1 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary/60 transition-all duration-700"
                      style={{ width: `${ach.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Locked */}
        {locked.length > 0 && (
          <div>
            <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">
              In Progress
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {locked.map((ach) => (
                <div
                  key={ach.id}
                  className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 opacity-70"
                >
                  <div className="text-xl mb-1 grayscale opacity-50">{ach.icon}</div>
                  <p className="text-[11px] font-medium text-white/50 leading-tight">
                    {ach.title}
                  </p>
                  <p className="text-[9px] text-white/30 mt-0.5 leading-snug">
                    {ach.requirement}
                  </p>
                  <div className="mt-1.5 w-full h-1 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary/30 transition-all duration-700"
                      style={{ width: `${ach.progress}%` }}
                    />
                  </div>
                  <p className="text-[8px] text-primary/50 font-mono mt-1">
                    {ach.progress}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
