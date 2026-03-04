"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { airports, pilotProfile } from "@/data/mock-data";

type MapType = "street" | "plain";
type LayerFilter = "first-visit" | "all-visits" | "not-visited";

export function MapScreen() {
  const [mapType, setMapType] = useState<MapType>("plain");
  const [layers, setLayers] = useState<Set<LayerFilter>>(
    new Set(["first-visit"])
  );
  const [showLegend, setShowLegend] = useState(true);

  const toggleLayer = (layer: LayerFilter) => {
    setLayers((prev) => {
      const next = new Set(prev);
      if (next.has(layer)) next.delete(layer);
      else next.add(layer);
      return next;
    });
  };

  const showPins = layers.has("first-visit") || layers.has("all-visits");

  return (
    <div className="relative h-full bg-[oklch(0.92_0.005_220)]">
      {/* Map background - simplified US map visualization */}
      <div className="absolute inset-0">
        {/* Grid lines for map effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              mapType === "plain"
                ? `
              linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
            `
                : `
              linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize:
              mapType === "plain" ? "25px 25px" : "20px 20px",
          }}
        />

        {/* City labels (simplified) */}
        {[
          { name: "SEATTLE", x: 12, y: 12 },
          { name: "SAN FRANCISCO", x: 6, y: 38 },
          { name: "LOS ANGELES", x: 10, y: 52 },
          { name: "DENVER", x: 32, y: 38 },
          { name: "CHICAGO", x: 58, y: 22 },
          { name: "NEW YORK", x: 80, y: 24 },
          { name: "MIAMI", x: 76, y: 72 },
          { name: "HOUSTON", x: 50, y: 68 },
          { name: "PHOENIX", x: 22, y: 55 },
          { name: "LAS VEGAS", x: 18, y: 45 },
        ].map((city) => (
          <span
            key={city.name}
            className="absolute text-[7px] font-medium text-black/30 tracking-wider"
            style={{ left: `${city.x}%`, top: `${city.y}%` }}
          >
            {city.name}
          </span>
        ))}

        {/* Airport pins */}
        {showPins &&
          airports.map((apt, i) => {
            const x = 8 + ((apt.lng + 130) / 60) * 78;
            const y = 5 + ((52 - apt.lat) / 35) * 85;
            const isTowered = apt.type === "large_airport" || apt.type === "medium_airport";
            return (
              <div
                key={apt.id}
                className="absolute group"
                style={{
                  left: `${Math.max(3, Math.min(95, x))}%`,
                  top: `${Math.max(3, Math.min(92, y))}%`,
                  animationDelay: `${i * 50}ms`,
                }}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isTowered
                      ? "bg-[oklch(0.55_0.20_280)]"
                      : "bg-[oklch(0.60_0.15_280)]"
                  }`}
                />
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[6px] font-mono text-black/40 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 px-0.5 rounded whitespace-nowrap">
                  {apt.icao}
                </span>
              </div>
            );
          })}
      </div>

      {/* Layer controls (top-right) */}
      <div className="absolute top-2 right-2 bg-white rounded-lg shadow-md border border-black/10 p-2 text-[9px] space-y-1.5 z-10">
        <div className="space-y-1">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="mapType"
              checked={mapType === "street"}
              onChange={() => setMapType("street")}
              className="w-3 h-3 accent-primary"
            />
            <span className="text-black/70">Street Map</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="mapType"
              checked={mapType === "plain"}
              onChange={() => setMapType("plain")}
              className="w-3 h-3 accent-primary"
            />
            <span className="text-black/70">Plain Map</span>
          </label>
        </div>
        <div className="border-t border-black/10 pt-1.5 space-y-1">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={layers.has("first-visit")}
              onChange={() => toggleLayer("first-visit")}
              className="w-3 h-3 accent-primary rounded"
            />
            <span className="text-black/70">First Visit per Airport</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={layers.has("all-visits")}
              onChange={() => toggleLayer("all-visits")}
              className="w-3 h-3 accent-primary rounded"
            />
            <span className="text-black/70">All Visits</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={layers.has("not-visited")}
              onChange={() => toggleLayer("not-visited")}
              className="w-3 h-3 accent-primary rounded"
            />
            <span className="text-black/70">Airports not visited</span>
          </label>
        </div>
      </div>

      {/* Legend popup (bottom-right) */}
      {showLegend && (
        <div className="absolute bottom-2 right-2 bg-white rounded-lg shadow-md border border-black/10 p-2.5 text-[9px] z-10 max-w-[160px]">
          <button
            onClick={() => setShowLegend(false)}
            className="absolute top-1 right-1 text-black/30 hover:text-black/60"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-black/70 leading-relaxed pr-3">
            <span className="font-semibold text-primary">{pilotProfile.username}</span> has logged flights to the pinned airports.
          </p>
          <div className="mt-1.5 space-y-0.5">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[oklch(0.55_0.20_280)]" />
              <span className="text-black/60">Towered visit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[oklch(0.60_0.15_280)]" />
              <span className="text-black/60">Non-towered visit</span>
            </div>
          </div>
          <p className="text-[8px] text-black/40 mt-1.5">
            Tip: Use the layer selector to toggle First vs All.
          </p>
        </div>
      )}
    </div>
  );
}
