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
    <div className="px-3 py-3 space-y-3">
      {/* Page heading */}
      <div>
        <h1 className="text-base font-bold text-white/90">Achievements</h1>
        <p className="text-[9px] text-white/40 mt-0.5">
          {achievements.filter((a) => a.unlockedAt).length} of{" "}
          {achievements.length} unlocked
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="flex gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors border ${
              activeCategory === cat.id
                ? "bg-white/[0.10] border-white/[0.15] text-white/90"
                : "border-white/[0.08] text-white/50 hover:bg-white/[0.06]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Unlocked achievements */}
      {unlocked.length > 0 && (
        <div>
          <p className="text-[9px] font-medium text-white/30 uppercase tracking-wider mb-2">
            Earned
          </p>
          <div className="space-y-1.5">
            {unlocked.map((ach) => (
              <div
                key={ach.id}
                className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 hover:bg-white/[0.05] transition-colors"
              >
                <span className="text-lg shrink-0">{ach.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-white/80">
                    {ach.title}
                  </p>
                  <p className="text-[9px] text-white/40">
                    {ach.description}
                  </p>
                </div>
                <span className="text-[8px] text-white/25 shrink-0">
                  {new Date(ach.unlockedAt!).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Locked achievements */}
      {locked.length > 0 && (
        <div>
          <p className="text-[9px] font-medium text-white/30 uppercase tracking-wider mb-2">
            In Progress
          </p>
          <div className="space-y-1.5">
            {locked.map((ach) => (
              <div
                key={ach.id}
                className="flex items-center gap-2.5 bg-white/[0.02] border border-white/[0.06] rounded-lg px-3 py-2.5 opacity-70"
              >
                <span className="text-lg shrink-0 grayscale opacity-50">
                  {ach.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-white/50">
                    {ach.title}
                  </p>
                  <p className="text-[9px] text-white/30">
                    {ach.requirement}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex-1 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary/40 transition-all duration-700"
                        style={{ width: `${ach.progress}%` }}
                      />
                    </div>
                    <span className="text-[8px] font-mono text-white/30">
                      {ach.progress}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
