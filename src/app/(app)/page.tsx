"use client";

import { useState } from "react";
import { Map, Trophy, User, CreditCard, Plane } from "lucide-react";
import { ScreenNavigator } from "@/components/interactions/screen-navigator";
import { MapScreen } from "@/components/demo/map-screen";
import { AchievementsScreen } from "@/components/demo/achievements-screen";
import { ProfileScreen } from "@/components/demo/profile-screen";
import { SubscriptionScreen } from "@/components/demo/subscription-screen";
import { FlightLogScreen } from "@/components/demo/flight-log-screen";

const screens = [
  { id: "map", label: "Map", icon: <Map className="w-5 h-5" /> },
  { id: "log", label: "Log", icon: <Plane className="w-5 h-5" /> },
  { id: "achievements", label: "Badges", icon: <Trophy className="w-5 h-5" /> },
  { id: "subscribe", label: "Plans", icon: <CreditCard className="w-5 h-5" /> },
  { id: "profile", label: "Profile", icon: <User className="w-5 h-5" /> },
];

export default function DemoPage() {
  const [activeScreen, setActiveScreen] = useState("map");

  return (
    <ScreenNavigator
      screens={screens}
      activeScreen={activeScreen}
      onScreenChange={setActiveScreen}
      variant="bottom-tabs"
      transition="fade"
    >
      {activeScreen === "map" && <MapScreen />}
      {activeScreen === "log" && <FlightLogScreen />}
      {activeScreen === "achievements" && <AchievementsScreen />}
      {activeScreen === "subscribe" && <SubscriptionScreen />}
      {activeScreen === "profile" && <ProfileScreen />}
    </ScreenNavigator>
  );
}
