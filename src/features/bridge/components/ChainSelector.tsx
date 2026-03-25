import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRIDGE_CHAINS, type BridgeChainKey } from "../config/bridgeConfig";

interface ChainSelectorProps {
  fromChain: BridgeChainKey;
  toChain: BridgeChainKey;
  onSwap: () => void;
  disabled?: boolean;
}

export function ChainSelector({ fromChain, toChain, onSwap, disabled }: ChainSelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 border border-border bg-card p-3 text-center">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">From</p>
        <p className="text-sm font-semibold text-foreground">{BRIDGE_CHAINS[fromChain].label}</p>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="shrink-0 h-9 w-9 border-border"
        onClick={onSwap}
        disabled={disabled}
      >
        <ArrowRightLeft className="h-4 w-4" />
      </Button>

      <div className="flex-1 border border-border bg-card p-3 text-center">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">To</p>
        <p className="text-sm font-semibold text-foreground">{BRIDGE_CHAINS[toChain].label}</p>
      </div>
    </div>
  );
}
