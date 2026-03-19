import { Construction } from "lucide-react";

const Bridge = () => {
  return (
    <div className="container max-w-lg mx-auto py-16">
      <h1 className="text-3xl font-bold uppercase tracking-tight mb-1">Bridge</h1>
      <p className="text-xs text-muted-foreground mb-8 tracking-wider">
        Bridge any token from any chain directly to Arc Network
      </p>

      <div className="border border-border bg-card flex flex-col items-center justify-center p-12 min-h-[400px] text-center space-y-6">
        <Construction className="h-16 w-16 text-muted-foreground" />
        <div className="space-y-2">
          <h2 className="text-xl font-bold uppercase tracking-tight">Coming Soon</h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            Cross-chain bridging to Arc Network is currently under development. Stay tuned for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bridge;
