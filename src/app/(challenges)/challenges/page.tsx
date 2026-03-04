"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Smartphone, CreditCard, RefreshCw, Shield, CheckCircle } from "lucide-react";
import { ChallengeCard } from "@/components/challenges/challenge-card";
import { FlowDiagram } from "@/components/challenges/flow-diagram";
import { challenges, executiveSummary } from "@/data/challenges";
import { APP_CONFIG } from "@/lib/config";

function ArchitectureDiagram() {
  const layers = [
    { label: "iOS App (Swift)", sub: "WKWebView + StoreKit 2", active: true },
    { label: "JavaScript Bridge", sub: "WKScriptMessageHandler", active: false },
    { label: "MyAirportMap Web", sub: "Flask + Clerk + Jinja", active: false },
    { label: "Flask Backend", sub: "PostgreSQL + Receipt Validation", active: true },
  ];

  return (
    <div className="space-y-2">
      {layers.map((layer, i) => (
        <div key={layer.label}>
          <div
            className={`rounded-lg border px-4 py-2.5 ${
              layer.active
                ? "bg-primary/5 border-primary/30"
                : "bg-card border-border/40"
            }`}
          >
            <p className={`text-sm font-medium ${layer.active ? "text-primary" : ""}`}>
              {layer.label}
            </p>
            <p className="text-xs text-muted-foreground">{layer.sub}</p>
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-center py-1">
              <div className="w-px h-4 bg-border/40" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function StoreKitFlow() {
  return (
    <FlowDiagram
      steps={[
        { label: "User taps Subscribe", icon: Smartphone, description: "In-app purchase sheet" },
        { label: "StoreKit 2 Purchase", icon: CreditCard, description: "Apple handles payment", highlight: true },
        { label: "Receipt → Backend", icon: Shield, description: "Server-side verification" },
        { label: "Activate Subscription", icon: CheckCircle, description: "Clerk user updated", highlight: true },
      ]}
    />
  );
}

function DualSyncFlow() {
  return (
    <FlowDiagram
      steps={[
        { label: "StoreKit Receipt", icon: Smartphone, description: "iOS purchase event" },
        { label: "Verify with Apple", icon: Shield, description: "App Store Server API", highlight: true },
        { label: "Map to Clerk User", icon: RefreshCw, description: "Match by user token" },
        { label: "Update Backend", icon: CheckCircle, description: "Single subscription record", highlight: true },
      ]}
    />
  );
}

function ReviewTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { week: "Week 1", label: "iOS Shell + Auth Bridge", tasks: ["WKWebView setup", "Clerk cookie injection", "JavaScript bridge", "TestFlight config"], icon: Smartphone },
    { week: "Week 2", label: "StoreKit + Receipt Validation", tasks: ["Product configuration", "Purchase flow", "Receipt verification endpoint", "Sandbox testing"], icon: CreditCard },
    { week: "Week 3", label: "Sync + Polish", tasks: ["Dual payment sync logic", "Edge case handling", "UI polish", "Beta testing"], icon: RefreshCw },
    { week: "Week 4", label: "App Store Submission", tasks: ["Privacy labels", "Screenshots & metadata", "Review submission", "Feedback iteration"], icon: Shield },
  ];

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`flex-1 py-2 px-2 rounded-lg border text-center transition-all ${
              activeStep === i
                ? "bg-primary/10 border-primary/30 text-primary"
                : "bg-card border-border/40 text-muted-foreground hover:border-border"
            }`}
          >
            <p className="text-[10px] font-medium">{step.week}</p>
          </button>
        ))}
      </div>
      <div className="bg-card border border-border/40 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          {(() => {
            const Icon = steps[activeStep].icon;
            return <Icon className="w-4 h-4 text-primary" />;
          })()}
          <h4 className="text-sm font-medium">{steps[activeStep].label}</h4>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {steps[activeStep].tasks.map((task, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle className="w-3 h-3 text-primary/50 shrink-0" />
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const visualizations: Record<string, React.ReactNode> = {
  "challenge-1": <ArchitectureDiagram />,
  "challenge-2": <StoreKitFlow />,
  "challenge-3": <DualSyncFlow />,
  "challenge-4": <ReviewTimeline />,
};

export default function ChallengesPage() {
  return (
    <div
      className="min-h-[calc(100vh-var(--tab-bar-height))] bg-background"
      style={{ padding: "var(--content-padding, 1.5rem)" }}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Executive Summary */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to demo
          </Link>
          <h1 className="text-2xl font-bold mb-2">My Approach</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {executiveSummary}
          </p>
        </div>

        {/* Challenge Cards */}
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            outcome={challenge.outcome}
          >
            {visualizations[challenge.id]}
          </ChallengeCard>
        ))}

        {/* CTA Closer */}
        <div className="border border-primary/20 rounded-lg p-6 bg-gradient-to-r from-primary/5 to-transparent">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold">
                Ready to bring {APP_CONFIG.projectName} to the App Store?
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Built this demo based on your job post. Let&apos;s discuss the implementation.
              </p>
            </div>
            <Link
              href="/proposal"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
            >
              Work With Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
