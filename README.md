# Welcome to Lunex Finance

# WHAT IS LUNEX FINANCE
Lunex Finance is a decentralised exchange protocol built on Arc Network. It uses a Curve-style StableSwap AMM optimised for stablecoin pairs (USDC/EURC), providing near-zero slippage swaps.

The protocol also offers ERC-4626 yield vaults where users can deposit stablecoins and earn yield automatically.

Lunex Finance is currently live on Arc Network Testnet.
GETTING STARTED
1. Install MetaMask or any compatible Web3 wallet

2. Add Arc Network Testnet to your wallet:
   • Network Name: Arc Testnet
   • Chain ID: 5042002
   • RPC URL: https://rpc.testnet.arc.network
   • Explorer: https://testnet.arcscan.app
   • Currency: USDC

3. Get testnet tokens from faucet.circle.com

4. Click "Connect" in the top right corner of Lunex Finance

5. Start swapping, providing liquidity, or depositing into vaults
SWAP
The Swap page lets you exchange USDC for EURC and vice versa with minimal slippage.

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
• Red (> 1%): High impact, consider reducing trade size
POOL
The Pool page lets you provide liquidity to the USDC/EURC StableSwap pool and earn fees from every swap.

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

LP tokens represent your proportional share of the pool. As fees accumulate from swaps, your LP tokens become worth more of the underlying assets.
YIELD VAULTS
Lunex Finance offers ERC-4626 yield vaults for both USDC and EURC.

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
The share price shows how much underlying token each share is worth. A share price of 1.05 means each share is worth 1.05 of the underlying token.
BRIDGE
The Bridge page lets you transfer tokens from other chains to Arc Network.

Squid Bridge:
• Cross-chain swaps and bridging powered by Squid Router
• Swap any token on any supported chain and receive tokens on Arc Network
• Supports a wide range of source chains and tokens

Quick Fund:
• Simple wallet funding via thirdweb Pay
• Top up your Arc wallet quickly from another chain
• Select Arc Network as the destination

Both options handle the cross-chain complexity for you — just select your source and destination tokens.
