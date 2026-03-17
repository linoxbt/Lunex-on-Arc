import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FAQ_RESPONSES: Record<string, string> = {
  swap: "**Swap** lets you exchange USDC ↔ EURC with near-zero slippage using our Curve-style StableSwap AMM. Go to the Swap page, pick your tokens, enter an amount, and confirm. You can also adjust slippage tolerance via the gear icon.",
  pool: "**Pool** lets you provide liquidity to the USDC/EURC pool and earn fees from every swap. You receive LP tokens representing your share. Navigate to Pool → Add Liquidity to get started.",
  yield: "**Yield Vaults** are ERC-4626 compliant vaults for USDC and EURC. Deposit tokens to receive share tokens (luneUSDC / luneEURC) that appreciate in value as the vault earns yield.",
  vault: "**Yield Vaults** are ERC-4626 compliant vaults for USDC and EURC. Deposit tokens to receive share tokens (luneUSDC / luneEURC) that appreciate in value as the vault earns yield.",
  bridge: "**Bridge** lets you transfer tokens from other chains to Arc Network using Squid Router or thirdweb Pay. Select your source chain and tokens, and the bridge handles the rest.",
  fee: "The StableSwap pool charges a small fee on each swap (visible on the swap page). This fee is distributed to liquidity providers.",
  testnet: "Lunex Finance is live on **Arc Network Testnet**. Get testnet USDC from faucet.circle.com, add Arc Testnet to your wallet (Chain ID: 5042002), and connect.",
  slippage: "Slippage tolerance determines the minimum amount you'll accept. Set it via the gear icon on the Swap page. Options: 0.1%, 0.5%, 1.0%, or custom. If price moves beyond your tolerance, the tx reverts.",
  lp: "LP tokens represent your proportional share of the liquidity pool. As swap fees accumulate, your LP tokens become redeemable for more of the underlying assets.",
  audit: "Lunex Finance is currently on testnet. A full security audit will be conducted before mainnet launch.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
    if (lower.includes(key)) return response;
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hey! 👋 I'm the Lunex assistant. Ask me about **Swap**, **Pool**, **Yield Vaults**, **Bridge**, fees, slippage, or anything about the protocol!";
  }
  if (lower.includes("how") && lower.includes("start")) {
    return "**Getting Started:**\n1. Install MetaMask\n2. Add Arc Testnet (Chain ID: 5042002, RPC: https://rpc.testnet.arc.network)\n3. Get testnet USDC from faucet.circle.com\n4. Connect your wallet on Lunex Finance\n5. Start swapping, providing liquidity, or depositing into vaults!";
  }
  return "I can help with questions about **Swap**, **Pool**, **Yield Vaults**, **Bridge**, fees, slippage, and more. Try asking something specific!";
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 I'm the Lunex assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: getResponse(userMsg.content) }]);
    }, 400);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] max-h-[480px] flex flex-col border border-border bg-background shadow-2xl rounded-lg overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary/5">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold tracking-wider uppercase text-foreground">Lunex Assistant</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Bot className="h-3 w-3 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[80%] text-sm px-3 py-2 rounded-lg leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}>
                    {msg.content.split("**").map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <User className="h-3 w-3 text-primary" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-border p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Lunex..."
                  className="flex-1 bg-muted text-foreground text-sm px-3 py-2 rounded-md border border-border focus:outline-none focus:border-primary placeholder:text-muted-foreground"
                />
                <Button type="submit" size="sm" className="h-9 w-9 p-0">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-4 sm:right-6 z-50 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Open chat assistant"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </>
  );
};

export default ChatBot;
