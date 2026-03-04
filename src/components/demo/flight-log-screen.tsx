"use client";

import { useState } from "react";
import { flightLog, airports } from "@/data/mock-data";
import { Plane, Clock, Ruler, Eye } from "lucide-react";

const conditionBadge: Record<string, string> = {
  VFR: "text-green-400 bg-green-400/10 border-green-400/20",
  IFR: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  SVFR: "text-orange-400 bg-orange-400/10 border-orange-400/20",
};

function getAirportName(icao: string): string {
  const apt = airports.find((a) => a.icao === icao);
  return apt ? apt.name : icao;
}

export function FlightLogScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const totalHours = flightLog.reduce((sum, f) => sum + f.duration, 0);
  const totalDistance = flightLog.reduce((sum, f) => sum + f.distance, 0);
  const uniqueAircraft = new Set(flightLog.map((f) => f.aircraftType)).size;

  return (
    <div className="flex flex-col h-full bg-[oklch(0.06_0.01_240)]">
      {/* Header stats */}
      <div className="px-3 pt-2 pb-1.5">
        <h1 className="text-sm font-semibold text-white/90 mb-2">Flight Log</h1>

        <div className="grid grid-cols-3 gap-1.5 mb-2">
          <div className="bg-white/[0.03] border border-white/5 rounded-lg px-2 py-1.5 text-center">
            <p className="text-xs font-bold text-white/90 font-mono">
              {totalHours.toFixed(1)}
            </p>
            <p className="text-[8px] text-white/40">Total Hrs</p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-lg px-2 py-1.5 text-center">
            <p className="text-xs font-bold text-white/90 font-mono">
              {totalDistance.toLocaleString()}
            </p>
            <p className="text-[8px] text-white/40">Total NM</p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-lg px-2 py-1.5 text-center">
            <p className="text-xs font-bold text-white/90 font-mono">
              {uniqueAircraft}
            </p>
            <p className="text-[8px] text-white/40">Aircraft</p>
          </div>
        </div>
      </div>

      {/* Flight entries */}
      <div className="flex-1 overflow-y-auto px-3 pb-2 space-y-1.5">
        {flightLog.map((flt) => {
          const isExpanded = expandedId === flt.id;
          const isSameAirport = flt.departure === flt.arrival;

          return (
            <button
              key={flt.id}
              onClick={() => setExpandedId(isExpanded ? null : flt.id)}
              className={`w-full text-left bg-white/[0.03] border rounded-lg transition-all ${
                isExpanded
                  ? "border-primary/20 bg-white/[0.05]"
                  : "border-white/5 hover:bg-white/[0.04]"
              }`}
            >
              <div className="px-2.5 py-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-primary/70 font-medium">
                      {flt.departure}
                    </span>
                    {!isSameAirport && (
                      <>
                        <Plane className="w-3 h-3 text-white/20 rotate-90" />
                        <span className="text-[10px] font-mono text-primary/70 font-medium">
                          {flt.arrival}
                        </span>
                      </>
                    )}
                    {isSameAirport && (
                      <span className="text-[8px] text-white/30 bg-white/5 px-1.5 rounded">
                        Local
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full border ${conditionBadge[flt.conditions]}`}
                  >
                    {flt.conditions}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[9px] text-white/40">
                  <span>{new Date(flt.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                  <span className="flex items-center gap-0.5">
                    <Clock className="w-2.5 h-2.5" />
                    {flt.duration}h
                  </span>
                  {flt.distance > 0 && (
                    <span className="flex items-center gap-0.5">
                      <Ruler className="w-2.5 h-2.5" />
                      {flt.distance}nm
                    </span>
                  )}
                  <span className="ml-auto">{flt.aircraftType}</span>
                </div>

                {isExpanded && (
                  <div className="mt-2 pt-2 border-t border-white/5 space-y-1">
                    <div className="flex items-start gap-1.5">
                      <Eye className="w-3 h-3 text-white/20 mt-0.5" />
                      <div className="text-[9px] text-white/50">
                        <p>
                          <span className="text-white/70">From:</span>{" "}
                          {getAirportName(flt.departure)}
                        </p>
                        {!isSameAirport && (
                          <p>
                            <span className="text-white/70">To:</span>{" "}
                            {getAirportName(flt.arrival)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
