import { useState, useMemo } from "react";
import { ChevronDown, ChevronRight, Search } from "lucide-react";

interface DocSection {
  title: string;
  content: string;
}

interface DocCategory {
  category: string;
  sections: DocSection[];
}

const docs: DocCategory[] = [
  {
    category: "Overview",
    sections: [
      {
        title: "What is Lunex Finance",
        content: `Lunex Finance is a decentralised exchange (DEX) protocol built on Arc Network. It combines a Curve-style StableSwap Automated Market Maker (AMM) optimised for stablecoin pairs with ERC-4626 yield vaults, providing users with efficient swapping and passive yield generation.

Key features:
• Near-zero slippage swaps between USDC and EURC
• ERC-4626 compliant yield vaults with auto-compounding
• On-chain transparency: all operations are verifiable on the Arc Testnet explorer
• Cross-chain bridging via Squid Router and thirdweb Pay

Lunex Finance is currently live on Arc Network Testnet (Chain ID: 5042002).`,
      },
      {
        title: "Getting Started",
        content: `1. Install MetaMask or any compatible Web3 wallet (Rabby, Coinbase Wallet, etc.)

2. Add Arc Network Testnet to your wallet:
   • Network Name: Arc Testnet
   • Chain ID: 5042002
   • RPC URL: https://rpc.testnet.arc.network
   • Block Explorer: https://testnet.arcscan.app
   • Native Currency: USDC

3. Get testnet tokens from faucet.circle.com

4. Visit Lunex Finance and click "Connect" in the top navigation bar

5. Start using Swap, Pool, Yield, or Bridge features`,
      },
    ],
  },
  {
    category: "Swap",
    sections: [
      {
        title: "How Swapping Works",
        content: `The Swap feature lets you exchange USDC for EURC and vice versa using the StableSwap invariant, a bonding curve specifically designed for assets that should trade at or near 1:1.

How to swap:
1. Select the token you want to sell (From) and the token you want to receive (To)
2. Enter the amount. The output is calculated automatically using live on-chain pricing
3. Review the exchange rate, price impact, and minimum received
4. Click "Approve" to grant the contract permission to spend your tokens (first time only)
5. Click "Swap" to execute the trade

The swap is atomic: either the full trade succeeds or it reverts entirely. There is no partial fill risk.`,
      },
      {
        title: "Slippage Tolerance",
        content: `Slippage tolerance is the maximum price deviation you're willing to accept between the quoted output and the actual execution amount.

Setting slippage:
• Click the gear icon on the Swap page
• Choose from presets: 0.1%, 0.5%, 1.0%
• Or enter a custom value

How it works:
The protocol calculates a "minimum received" amount based on your slippage setting. If the actual output falls below this threshold (due to other trades executing first), the transaction automatically reverts.

Recommendations:
• 0.1%: Best for stable pairs with low volatility (recommended for USDC/EURC)
• 0.5%: Good default for moderate activity periods
• 1.0%: Use during high-traffic periods when prices may shift quickly`,
      },
      {
        title: "Price Impact",
        content: `Price impact measures how much your trade moves the pool's exchange rate relative to the current spot price.

Impact levels:
• Green (< 0.1%): Excellent. Virtually no impact on the pool price.
• Yellow (0.1% to 1.0%): Moderate. Acceptable for most trade sizes.
• Red (> 1.0%): High. Consider splitting your trade into smaller amounts.

The StableSwap curve is specifically designed to minimise price impact for pegged assets. For the USDC/EURC pair, most trades under $50,000 will have negligible impact.

Price impact is different from slippage: impact is deterministic and based on trade size, while slippage accounts for price changes between quote and execution.`,
      },
    ],
  },
  {
    category: "Liquidity Pool",
    sections: [
      {
        title: "Providing Liquidity",
        content: `The Pool feature allows you to deposit USDC and/or EURC into the StableSwap pool. In return, you receive LP (Liquidity Provider) tokens that represent your proportional share of the pool.

Adding liquidity:
1. Navigate to Pool > Add Liquidity
2. Enter the amount of USDC and/or EURC you want to deposit (single-sided or dual-sided)
3. Approve each token if this is your first interaction
4. Click "Add Liquidity" to mint LP tokens

Why provide liquidity:
• Earn a share of swap fees from every trade through the pool
• LP tokens appreciate in value as fees accumulate
• You can withdraw at any time. There is no lock-up period`,
      },
      {
        title: "Removing Liquidity",
        content: `You can withdraw your deposited assets at any time by burning your LP tokens.

How to remove:
1. Navigate to Pool > Remove Liquidity
2. Select the percentage of your LP position to withdraw (25%, 50%, 75%, or 100%)
3. Choose a withdrawal mode:
   • Both tokens: Receive USDC and EURC proportionally
   • USDC only: Withdraw entirely as USDC
   • EURC only: Withdraw entirely as EURC
4. Approve your LP tokens if needed
5. Click "Remove Liquidity"

Single-sided withdrawals may incur slightly higher slippage as the pool rebalances to accommodate the asymmetric removal.`,
      },
      {
        title: "LP Tokens & Fee Accrual",
        content: `LP tokens are standard ERC-20 tokens that represent your ownership share of the pool.

How fees work:
• Each swap through the pool charges a 0.4% fee
• Fees are added directly to the pool's reserves
• This increases the value of each LP token over time
• You don't need to claim fees. They are automatically reflected in your LP token value

Example: If you deposit $1,000 and fees accumulate to increase the pool by 1%, your LP tokens are now redeemable for $1,010 worth of underlying assets.

LP tokens can also be transferred or used in other DeFi protocols (composability).`,
      },
    ],
  },
  {
    category: "Yield Vaults",
    sections: [
      {
        title: "ERC-4626 Vault Design",
        content: `Lunex yield vaults follow the ERC-4626 Tokenised Vault Standard, which provides a standardised interface for yield-bearing vaults.

Available vaults:
• USDC Vault: Deposits USDC, receives luneUSDC shares
• EURC Vault: Deposits EURC, receives luneEURC shares

How it works:
1. You deposit underlying tokens (USDC or EURC) into the vault
2. The vault mints share tokens (luneUSDC or luneEURC) proportional to your deposit
3. The vault's strategy generates yield on the deposited assets
4. As yield accrues, the share price increases. Each share becomes redeemable for more underlying tokens
5. When you withdraw, shares are burned and you receive the underlying tokens plus accumulated yield`,
      },
      {
        title: "Depositing & Withdrawing",
        content: `Depositing:
1. Go to Yield > select a vault (USDC or EURC)
2. Enter the amount you want to deposit
3. Approve the token contract (first time only)
4. Click "Deposit". You'll receive share tokens in your wallet

Withdrawing:
1. Go to Yield > select the vault > switch to the Withdraw tab
2. Enter the amount of underlying tokens you want to receive
3. Click "Withdraw". Your shares will be burned and you receive the underlying tokens

There is no withdrawal fee or lock-up period. Withdrawals are instant and atomic.`,
      },
      {
        title: "Share Price & Yield Calculation",
        content: `The share price indicates how much underlying token each share is worth.

Formula: Share Price = Total Assets in Vault / Total Shares Outstanding

Example:
• At launch, share price = 1.0000 (1 share = 1 USDC)
• After yield accrues, share price = 1.0500 (1 share = 1.05 USDC)
• If you hold 1,000 shares, they're now worth 1,050 USDC

The share price only increases. It never decreases under normal operation. This is because the vault's strategy adds yield to the total assets without minting new shares.

APY will be displayed on the vault detail page once sufficient on-chain data is available (mainnet).`,
      },
    ],
  },
  {
    category: "Bridge",
    sections: [
      {
        title: "Cross-Chain Bridging",
        content: `The Bridge page enables you to transfer tokens from other blockchain networks to Arc Network.

Squid Router:
• Powered by Axelar's cross-chain messaging protocol
• Supports swapping any token on any supported chain directly to tokens on Arc Network
• Handles routing, bridging, and destination-chain swaps in a single transaction
• Supports chains like Ethereum, Polygon, Arbitrum, Optimism, BNB Chain, and more

Quick Fund (thirdweb Pay):
• Simplified wallet funding for users who want to top up their Arc wallet quickly
• Select Arc Network as the destination
• Supports fiat on-ramp and cross-chain transfers

Both options abstract away the complexity of cross-chain operations. You select source/destination tokens and the protocol handles the rest.`,
      },
    ],
  },
  {
    category: "Technical Architecture",
    sections: [
      {
        title: "StableSwap AMM (Curve Model)",
        content: `Lunex Finance uses a Curve-style StableSwap invariant for its AMM. The StableSwap invariant combines the constant-product formula (x·y = k, used by Uniswap) with the constant-sum formula (x + y = k) to create a hybrid curve.

The invariant equation:
A·n^n·∑xi + D = A·D·n^n + D^(n+1) / (n^n·∏xi)

Where:
• A = amplification coefficient (controls curve shape)
• n = number of tokens (2 for USDC/EURC)
• D = total deposits invariant
• xi = individual token balances

A higher amplification coefficient (A) makes the curve flatter around the peg, meaning trades near 1:1 have virtually zero slippage. As trades deviate from the peg, the curve steepens to protect the pool from extreme imbalance.

This design is optimal for stablecoin pairs because both assets are expected to maintain a near-1:1 exchange rate.`,
      },
      {
        title: "Smart Contracts",
        content: `Lunex Finance is composed of four core smart contracts deployed on Arc Network Testnet:

1. StableSwapPool: The AMM pool contract handling swaps, liquidity addition/removal, and fee calculation. Implements the StableSwap invariant with configurable amplification coefficient.

2. USDC Vault (ERC-4626): A tokenised vault for USDC deposits. Mints luneUSDC share tokens. Implements the full ERC-4626 standard including deposit(), withdraw(), redeem(), convertToAssets(), and convertToShares().

3. EURC Vault (ERC-4626): Same architecture as the USDC vault but for EURC deposits. Mints luneEURC share tokens.

4. LP Token (ERC-20): Standard ERC-20 token minted when users provide liquidity. Represents proportional pool ownership.

All contracts are verified on the Arc Testnet explorer (https://testnet.arcscan.app). Contract addresses are configured in the app and can be inspected in the source code.`,
      },
      {
        title: "ERC-4626 Standard",
        content: `ERC-4626 is an Ethereum standard for tokenised yield-bearing vaults. It provides a unified API that all vaults implement, making them composable with other DeFi protocols.

Key functions:
• deposit(assets, receiver): Deposit underlying tokens, receive shares
• withdraw(assets, receiver, owner): Burn shares to receive a specific amount of underlying
• redeem(shares, receiver, owner): Burn a specific number of shares
• convertToAssets(shares): Preview how many underlying tokens shares are worth
• convertToShares(assets): Preview how many shares a deposit would mint
• totalAssets(): Total underlying tokens held by the vault
• previewDeposit(assets) / previewWithdraw(assets): Simulate operations

Benefits of ERC-4626:
• Composability: Any protocol can integrate with the vault using the standard interface
• Transparency: Share price and vault state are fully on-chain
• Security: Standardised implementations reduce smart contract risk`,
      },
      {
        title: "Network & Gas",
        content: `Arc Network is an EVM-compatible Layer 2 network designed for high-throughput, low-cost transactions.

Network details:
• Chain ID: 5042002 (Testnet)
• RPC: https://rpc.testnet.arc.network
• Explorer: https://testnet.arcscan.app
• Gas token: USDC (native gas)

Gas costs on Arc Testnet are minimal. Typical operations:
• Swap: ~0.001 USDC
• Add Liquidity: ~0.002 USDC
• Vault Deposit: ~0.001 USDC
• Token Approval: ~0.0005 USDC

All gas fees are paid in USDC, which simplifies the user experience. No need to hold a separate gas token.`,
      },
      {
        title: "Security Considerations",
        content: `Lunex Finance is currently deployed on testnet. The following security measures are in place or planned:

Current:
• All contracts are verified on the block explorer
• Standard OpenZeppelin libraries used for ERC-20 and ERC-4626 implementations
• Reentrancy guards on all state-changing functions
• Access control on admin-only functions

Planned for Mainnet:
• Full third-party smart contract audit
• Bug bounty program
• Time-locked admin functions (timelock controller)
• Multi-sig wallet for protocol governance
• Emergency pause functionality

Users should be aware that testnet contracts may be updated or redeployed without notice. Do not use real funds on testnet.`,
      },
    ],
  },
  {
    category: "FAQ",
    sections: [
      {
        title: "Frequently Asked Questions",
        content: `Q: Is Lunex Finance audited?
A: Lunex Finance is on testnet. A full third-party audit will be completed before mainnet launch.

Q: What fees does the protocol charge?
A: The StableSwap pool charges a 0.4% fee on each swap. This fee goes entirely to liquidity providers. There are no protocol-level fees at this time.

Q: Can I lose money providing liquidity?
A: While the StableSwap curve minimises impermanent loss for pegged assets, risk always exists. If one stablecoin depegs, LP positions may become imbalanced. Always do your own research.

Q: What is the APY on yield vaults?
A: APY is not currently displayed on testnet. On mainnet, APY will be calculated from actual vault performance and displayed on each vault's detail page.

Q: How do I get testnet tokens?
A: Visit faucet.circle.com to receive testnet USDC. You can then swap USDC for EURC on Lunex.

Q: Where can I see my transactions?
A: Each page (Swap, Pool, Yield) displays your recent transaction history. The Dashboard shows all recent activity across features.

Q: Is there a token or governance system?
A: Not at this time. Governance and tokenomics are being explored for future development.

Q: Which wallets are supported?
A: Any EVM-compatible wallet including MetaMask, Rabby, Coinbase Wallet, WalletConnect-compatible wallets, and more.`,
      },
    ],
  },
];

const CollapsibleSection = ({ section }: { section: DocSection }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="text-sm font-semibold tracking-wider uppercase text-foreground">{section.title}</span>
        {open ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0">
          <pre className="text-sm text-foreground whitespace-pre-wrap leading-relaxed font-sans">{section.content}</pre>
        </div>
      )}
    </div>
  );
};

const Docs = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return docs;
    const q = search.toLowerCase();
    return docs
      .map((cat) => ({
        ...cat,
        sections: cat.sections.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.content.toLowerCase().includes(q) ||
            cat.category.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.sections.length > 0);
  }, [search]);

  return (
    <div className="page-fade-in container max-w-3xl mx-auto py-16">
      <h1 className="text-3xl font-bold uppercase tracking-tight mb-2">Documentation</h1>
      <p className="text-sm text-muted-foreground mb-6 tracking-wider">
        Lunex Finance: Complete User & Technical Guide
      </p>

      <div className="relative mb-10">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search documentation..."
          className="w-full pl-10 pr-4 py-3 text-sm border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-8">No results found for "{search}"</p>
      )}

      {filtered.map((cat) => (
        <div key={cat.category} className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3 px-1">{cat.category}</h2>
          <div className="space-y-1">
            {cat.sections.map((s) => (
              <CollapsibleSection key={s.title} section={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Docs;
