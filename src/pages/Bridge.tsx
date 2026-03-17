import { useState } from "react";

const squidConfig = {
  integratorId: "lunex-finance-c94617a0-14db-4985-bf24-26e0f8e1631d",
  apiUrl: "https://v2.api.squidrouter.com",
  priceImpactWarnings: { warning: 3, critical: 5 },
  initialAssets: {
    from: { address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", chainId: "1" },
    to: { address: "0x3600000000000000000000000000000000000000", chainId: "5042002" },
  },
  theme: {
    baseUrl: "https://widget.squidrouter.com",
    borderRadius: { "button-lg-primary": "0px", "button-lg-secondary": "0px", container: "0px", input: "0px", "menu-sm": "0px", "menu-lg": "0px" },
    fontSize: { caption: "12px", "body-small": "14px", "body-medium": "14px", "body-large": "16px", heading: "20px" },
    color: {
      "grey-100": "#0A0A0A", "grey-200": "#141414", "grey-300": "#1A1A1A", "grey-400": "#262626", "grey-500": "#404040", "grey-600": "#808080", "grey-700": "#B3B3B3", "grey-800": "#F2F2F2", "grey-900": "#FFFFFF",
      "royal-300": "#00b8d4", "royal-500": "#00acc1", "status-positive": "#4db6ac", "status-negative": "#ef5350", "status-partial": "#ff9800", "animation-bg": "#0A0A0A",
    },
  },
};

const squidWidgetUrl = `https://widget.squidrouter.com/iframe?config=${encodeURIComponent(JSON.stringify(squidConfig))}`;

const Bridge = () => {
  const [tab, setTab] = useState<"bridge" | "fund">("bridge");

  return (
    <div className="container max-w-lg mx-auto py-16">
      <h1 className="text-3xl font-bold uppercase tracking-tight mb-1">Bridge</h1>
      <p className="text-xs text-muted-foreground mb-8 tracking-wider">
        Bridge any token from any chain directly to Arc Network
      </p>

      <div className="flex gap-px bg-border mb-6">
        <button onClick={() => setTab("bridge")} className={`flex-1 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors ${tab === "bridge" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}>
          Squid Bridge
        </button>
        <button onClick={() => setTab("fund")} className={`flex-1 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors ${tab === "fund" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}>
          Quick Fund
        </button>
      </div>

      <div className="border border-border bg-card">
        {tab === "bridge" && (
          <div className="min-h-[680px]">
            <iframe
              title="Squid Bridge Widget"
              src={squidWidgetUrl}
              width="100%"
              height="680"
              style={{ border: "none" }}
              allow="clipboard-write"
            />
          </div>
        )}
        {tab === "fund" && (
          <div className="flex flex-col items-center justify-center p-8 min-h-[400px] text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Use the thirdweb Pay widget to quickly fund your Arc Network wallet from any chain.
            </p>
            <a
              href="https://thirdweb.com/pay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors"
            >
              Open thirdweb Pay
            </a>
            <p className="text-xs text-muted-foreground">
              Select Arc Network (Chain ID: 5042002) as the destination chain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bridge;
