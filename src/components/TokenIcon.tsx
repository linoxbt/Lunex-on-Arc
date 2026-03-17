interface TokenIconProps {
  symbol: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = { sm: "h-6 w-6 text-[10px]", md: "h-8 w-8 text-xs", lg: "h-10 w-10 text-sm" };

const tokenConfig: Record<string, { bg: string; fg: string; label: string }> = {
  USDC: { bg: "bg-[hsl(217,89%,48%)]", fg: "text-white", label: "$" },
  EURC: { bg: "bg-[hsl(220,13%,18%)]", fg: "text-white", label: "€" },
};

export const TokenIcon = ({ symbol, size = "md", className = "" }: TokenIconProps) => {
  const config = tokenConfig[symbol] || { bg: "bg-muted", fg: "text-foreground", label: symbol[0] };
  return (
    <div className={`${sizeMap[size]} ${config.bg} ${config.fg} rounded-full flex items-center justify-center font-bold ${className}`}>
      {config.label}
    </div>
  );
};
