"use client";

export function UpgradeScreen() {
  return (
    <div className="px-3 py-3">
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4 space-y-3">
        {/* Heading */}
        <div>
          <h1 className="text-xl font-black text-white/90">Upgrade</h1>
          <p className="text-[10px] text-primary/60 mt-1">
            Unlock achievements and public sharing features.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-white/[0.08] border border-white/[0.12] rounded-md text-[10px] font-medium text-white/80 hover:bg-white/[0.12] transition-colors">
            Join Now
          </button>
          <button className="text-[10px] text-white/50 underline underline-offset-2">
            Terms
          </button>
        </div>

        <p className="text-[9px] text-white/40">
          Promo code <span className="font-bold text-white/70">NEWUSER12</span>{" "}
          is entered during Stripe checkout.
        </p>

        {/* Pricing cards */}
        <div className="grid grid-cols-2 gap-2">
          {/* Membership card */}
          <div className="bg-white/[0.03] border border-white/[0.10] rounded-lg p-3 space-y-1.5">
            <div className="flex items-center gap-1">
              <span className="text-sm">💳</span>
              <span className="text-[11px] font-semibold text-white/80">
                Membership
              </span>
            </div>
            <div>
              <span className="text-2xl font-black text-white/90">$22</span>
              <p className="text-[9px] text-white/40">per year</p>
            </div>
            <p className="text-[9px] text-white/50">
              Use code{" "}
              <span className="font-bold text-white/70">NEWUSER12</span> for $10
              off your 1st year.
            </p>
            <p className="text-[10px] font-medium text-white/70">
              First year becomes <span className="font-bold">$12</span>.
            </p>
            <div className="pt-1 space-y-1">
              <p className="text-[8px] text-primary/50">
                Renews at $22/year unless canceled.
              </p>
              <p className="text-[8px] text-primary/50">
                Check SPAM email folders for verification codes.
              </p>
            </div>
          </div>

          {/* Promo code card */}
          <div className="bg-white/[0.03] border border-white/[0.10] rounded-lg p-3 space-y-1.5">
            <div className="flex items-center gap-1">
              <span className="text-sm">🎫</span>
              <span className="text-[11px] font-semibold text-white/80">
                Promo code
              </span>
            </div>
            <p className="text-[10px] text-white/70">
              <span className="font-bold">NEWUSER12</span> — $10 off your first year.
            </p>
            <p className="text-[9px] text-primary/50 mt-2">
              Tap Join Now and enter the code during Stripe checkout.
            </p>
          </div>
        </div>

        {/* Tip */}
        <p className="text-[8px] text-primary/40 text-center pt-1">
          Tip: swipe left/right for pricing and promo info.
        </p>

        {/* StoreKit note - this is the iOS wrapper value prop */}
        <div className="border-t border-white/[0.06] pt-3 mt-1">
          <p className="text-[9px] text-white/30 leading-relaxed">
            <span className="text-primary/60 font-medium">iOS App Store version:</span>{" "}
            This subscription will be available via Apple StoreKit 2 in the native iOS app, with receipts synced to your MyAirportMap account.
          </p>
        </div>
      </div>
    </div>
  );
}
