"use client";

import { useState } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { LoungeScreen } from "@/components/demo/lounge-screen";
import { MapScreen } from "@/components/demo/map-screen";
import { AchievementsScreen } from "@/components/demo/achievements-screen";
import { UpgradeScreen } from "@/components/demo/upgrade-screen";
import { pilotProfile } from "@/data/mock-data";

const navTabs = [
  { id: "lounge", label: "Pilot's Lounge" },
  { id: "map", label: "Map" },
  { id: "achievements", label: "Achievements" },
] as const;

type Screen = (typeof navTabs)[number]["id"] | "upgrade" | "profile";

export default function DemoPage() {
  const [activeScreen, setActiveScreen] = useState<Screen>("lounge");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[oklch(0.07_0.01_240)]">
      {/* ── Top Nav Bar (matches real app) ── */}
      <div className="shrink-0 border-b border-white/[0.06]">
        {/* Logo row */}
        <div className="flex items-center justify-between px-3 pt-1.5 pb-1">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[oklch(0.65_0.25_340)]" />
            <span className="text-[11px] font-bold text-white/90 tracking-tight">
              {pilotProfile.username}&apos;s MyAirportMap
            </span>
          </div>
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-[10px] text-white/60 hover:bg-white/[0.10] transition-colors"
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-[7px] font-bold text-white">
                {pilotProfile.avatarInitials}
              </div>
              {menuOpen ? (
                <X className="w-3 h-3" />
              ) : (
                <Menu className="w-3 h-3" />
              )}
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute right-0 top-full mt-1 w-40 bg-[oklch(0.12_0.01_240)] border border-white/[0.10] rounded-lg shadow-xl z-50 py-1 text-[10px]">
                <div className="px-3 py-1.5 border-b border-white/[0.06]">
                  <span className="text-white/40">Trial</span>
                </div>
                <div className="px-3 pt-2 pb-1">
                  <span className="text-[9px] text-white/30 uppercase tracking-wider">
                    Navigate
                  </span>
                </div>
                {navTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveScreen(tab.id);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-1.5 text-white/70 hover:bg-white/[0.05] transition-colors"
                  >
                    {tab.label}
                  </button>
                ))}
                <div className="px-3 pt-2 pb-1 border-t border-white/[0.06] mt-1">
                  <span className="text-[9px] text-white/30 uppercase tracking-wider">
                    Account
                  </span>
                </div>
                <button
                  onClick={() => {
                    setActiveScreen("upgrade");
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-1.5 text-white/70 hover:bg-white/[0.05] transition-colors"
                >
                  Upgrade
                </button>
                <button className="block w-full text-left px-3 py-1.5 text-red-400/70 hover:bg-white/[0.05] transition-colors">
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Nav pills */}
        <div className="flex items-center justify-center gap-1 px-2 pb-1.5">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveScreen(tab.id);
                setMenuOpen(false);
              }}
              className={`px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors border ${
                activeScreen === tab.id
                  ? "bg-white/[0.10] border-white/[0.15] text-white/90"
                  : "border-white/[0.08] text-white/50 hover:bg-white/[0.06]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Screen Content ── */}
      <div className="flex-1 overflow-y-auto">
        {activeScreen === "lounge" && <LoungeScreen />}
        {activeScreen === "map" && <MapScreen />}
        {activeScreen === "achievements" && <AchievementsScreen />}
        {activeScreen === "upgrade" && <UpgradeScreen />}
      </div>

      {/* Click overlay to close menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
