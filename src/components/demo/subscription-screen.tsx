"use client";

import { useState } from "react";
import { Check, Crown, Star, Shield } from "lucide-react";
import { subscriptionPlans } from "@/data/mock-data";

export function SubscriptionScreen() {
  const [selectedPlan, setSelectedPlan] = useState("plan_plus_monthly");
  const [billingPeriod, setBillingPeriod] = useState<"month" | "year">("month");

  const visiblePlans = subscriptionPlans.filter(
    (p) => p.period === billingPeriod || p.price === 0
  );

  return (
    <div className="flex flex-col h-full bg-[oklch(0.06_0.01_240)] overflow-y-auto">
      <div className="px-3 pt-2 pb-1.5">
        <h1 className="text-sm font-semibold text-white/90 mb-0.5">
          MyAirportMap Plans
        </h1>
        <p className="text-[10px] text-white/50 mb-2">
          Unlock the full aviation experience
        </p>

        {/* Billing toggle */}
        <div className="flex bg-white/5 border border-white/8 rounded-lg p-0.5 mb-3">
          <button
            onClick={() => setBillingPeriod("month")}
            className={`flex-1 py-1.5 rounded-md text-[10px] font-medium transition-colors ${
              billingPeriod === "month"
                ? "bg-primary/15 text-primary"
                : "text-white/40"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod("year")}
            className={`flex-1 py-1.5 rounded-md text-[10px] font-medium transition-colors relative ${
              billingPeriod === "year"
                ? "bg-primary/15 text-primary"
                : "text-white/40"
            }`}
          >
            Annual
            <span className="absolute -top-1.5 -right-1 text-[7px] bg-green-500/20 text-green-400 px-1 rounded-full">
              -33%
            </span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="flex-1 px-3 pb-3 space-y-2">
        {visiblePlans.map((plan) => {
          const isSelected = selectedPlan === plan.id;
          const isFree = plan.price === 0;
          const PlanIcon = isFree ? Star : plan.name === "Pro" ? Crown : Shield;

          return (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full text-left rounded-xl p-3 border transition-all ${
                isSelected
                  ? "bg-primary/8 border-primary/30 shadow-[0_0_12px_rgba(100,150,255,0.1)]"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? "bg-primary/20" : "bg-white/5"
                    }`}
                  >
                    <PlanIcon
                      className={`w-3.5 h-3.5 ${
                        isSelected ? "text-primary" : "text-white/40"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-white/90">
                      {plan.name}
                    </p>
                    {plan.recommended && (
                      <span className="text-[8px] bg-primary/15 text-primary/80 px-1.5 py-0.5 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  {isFree ? (
                    <p className="text-sm font-bold text-white/70">Free</p>
                  ) : (
                    <>
                      <p className="text-sm font-bold text-white/90">
                        ${plan.price}
                      </p>
                      <p className="text-[8px] text-white/40">
                        /{plan.period}
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <Check
                      className={`w-3 h-3 shrink-0 ${
                        isSelected ? "text-primary/70" : "text-white/20"
                      }`}
                    />
                    <span className="text-[10px] text-white/60">{feature}</span>
                  </div>
                ))}
              </div>
            </button>
          );
        })}

        {/* Subscribe button */}
        <button className="w-full py-2.5 rounded-xl bg-primary/90 text-white text-xs font-semibold hover:bg-primary transition-colors mt-2">
          {selectedPlan === "plan_free"
            ? "Continue with Free"
            : "Subscribe via App Store"}
        </button>

        {/* Restore + fine print */}
        <div className="text-center space-y-1 pt-1">
          <button className="text-[9px] text-primary/50 hover:text-primary/70 transition-colors">
            Restore Purchases
          </button>
          <p className="text-[8px] text-white/25 leading-relaxed">
            Payment charged to your Apple ID. Subscription auto-renews unless
            cancelled 24 hours before the current period ends.
          </p>
        </div>
      </div>
    </div>
  );
}
