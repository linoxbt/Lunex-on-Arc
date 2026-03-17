const sections = [
  {
    title: "What is Lunex Finance",
    content: `Lunex Finance is a decentralised exchange protocol built on Arc Network. It uses a Curve-style StableSwap AMM optimised for stablecoin pairs (USDC/EURC), providing near-zero slippage swaps.

The protocol also offers ERC-4626 yield vaults where users can deposit stablecoins and earn yield automatically.

Lunex Finance is currently live on Arc Network Testnet.`,
  },
  {
    title: "Getting Started",
    content: `1. Install MetaMask or any compatible Web3 wallet

2. Add Arc Network Testnet to your wallet:
   • Network Name: Arc Testnet
   • Chain ID: 5042002
   • RPC URL: https://rpc.testnet.arc.network
   • Explorer: https://testnet.arcscan.app
   • Currency: USDC

3. Get testnet tokens from faucet.circle.com

4. Click "Connect" in the top right corner of Lunex Finance

5. Start swapping, providing liquidity, or depositing into vaults`,
  },
  {
    title: "Swap",
    content: `The Swap page lets you exchange USDC for EURC and vice versa with minimal slippage.

How to swap:
1. Select the token you want to sell (From)
2. Enter the amount
3. The output amount is calculated automatically using live onchain pricing
4. Review the exchange rate, price impact, and minimum received
5. Click "Approve" if needed, then "Swap"

Slippage tolerance:
Click the gear icon to set your slippage tolerance (0.1%, 0.5%, 1.0%, or custom). This determines the minimum amount you'll accept. If the price moves beyond your tolerance, the transaction will revert.

Price impact:
• Green (< 0.1%): Excellent, minimal impact
• Yellow (0.1–1%): Moderate, acceptable for most trades
• Red (> 1%): High impact, consider reducing trade size`,
  },
  {
    title: "Pool",
    content: `The Pool page lets you provide liquidity to the USDC/EURC StableSwap pool and earn fees from every swap.

Adding liquidity:
1. Navigate to Pool → Add Liquidity
2. Enter USDC and/or EURC amounts (you can add one or both)
3. Approve each token if prompted
4. Click "Add Liquidity"
5. You'll receive LP tokens representing your share of the pool

Removing liquidity:
1. Navigate to Pool → Remove Liquidity
2. Select the percentage of your LP tokens to remove
3. Choose withdrawal mode: Both tokens, USDC only, or EURC only
4. Approve your LP tokens if needed
5. Click "Remove Liquidity"

LP tokens represent your proportional share of the pool. As fees accumulate from swaps, your LP tokens become worth more of the underlying assets.`,
  },
  {
    title: "Yield Vaults",
    content: `Lunex Finance offers ERC-4626 yield vaults for both USDC and EURC.

How vaults work:
• When you deposit USDC into the USDC vault, you receive luneUSDC share tokens
• When you deposit EURC into the EURC vault, you receive luneEURC share tokens
• Share tokens represent your claim on the vault's underlying assets
• As the vault generates yield, each share becomes worth more of the underlying token

Depositing:
1. Go to Yield → select a vault
2. Enter the amount of USDC or EURC to deposit
3. Approve the token if needed
4. Click "Deposit"

Withdrawing:
1. Go to Yield → select a vault → Withdraw tab
2. Enter the amount of underlying tokens you want to withdraw
3. Click "Withdraw" — your shares will be redeemed automatically

Share price:
The share price shows how much underlying token each share is worth. A share price of 1.05 means each share is worth 1.05 of the underlying token.`,
  },
  {
    title: "Bridge",
    content: `The Bridge page lets you transfer tokens from other chains to Arc Network.

Squid Bridge:
• Cross-chain swaps and bridging powered by Squid Router
• Swap any token on any supported chain and receive tokens on Arc Network
• Supports a wide range of source chains and tokens

Quick Fund:
• Simple wallet funding via thirdweb Pay
• Top up your Arc wallet quickly from another chain
• Select Arc Network as the destination

Both options handle the cross-chain complexity for you — just select your source and destination tokens.`,
  },
  {
    title: "FAQ",
    content: `Q: Is Lunex Finance audited?
A: Lunex Finance is currently on testnet. A full audit will be conducted before mainnet launch.

Q: What fees does the protocol charge?
A: The StableSwap pool charges a small fee on each swap, visible on the swap page. This fee goes to liquidity providers.

Q: Can I lose money providing liquidity?
A: While the StableSwap design minimises impermanent loss for pegged assets, there is always risk when providing liquidity. DYOR.

Q: What is the APY on vaults?
A: APY is not currently displayed as the protocol is on testnet. It will be calculated and displayed based on actual vault performance.

Q: How do I get testnet tokens?
A: Visit faucet.circle.com to get testnet USDC.

Q: Where can I see my transaction history?
A: Each page (Swap, Pool, Yield) shows your recent transaction history at the bottom. The Dashboard shows all recent activity.`,
  },
];

const Docs = () => (
  <div className="page-fade-in container max-w-3xl mx-auto py-16">
    <h1 className="text-3xl font-bold uppercase tracking-tight mb-2">Documentation</h1>
    <p className="text-sm text-muted-foreground mb-10 tracking-wider">
      Lunex Finance — User Guide
    </p>

    {sections.map((s) => (
      <div key={s.title} className="mb-8 border border-border bg-card p-6">
        <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-primary">{s.title}</h2>
        <pre className="text-sm text-foreground whitespace-pre-wrap leading-relaxed font-sans">{s.content}</pre>
      </div>
    ))}
  </div>
);

export default Docs;
