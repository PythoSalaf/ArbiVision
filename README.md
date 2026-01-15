# ArbiVision

**ArbiVision** is a powerful, real-time **Arbitrum ecosystem analytics dashboard** that gives users deep insights into the Arbitrum blockchain (Ethereum Layer 2).  

It combines:
- Chain-wide metrics & trends  
- DeFi protocol performance tracking  
- Personal wallet transaction history analyzer  
- Built-in Arbitrum testnet token faucet  

All in one clean, modern, and responsive interface.

🌐 **Live Demo**: [https://arbivision.vercel.app/](https://arbivision.vercel.app/)

📦 **GitHub Repository**: [https://github.com/PythoSalaf/ArbiVision](https://github.com/PythoSalaf/ArbiVision)

## ✨ Key Features

- **Arbitrum Chain Overview**  
  Real-time & historical metrics: TVL, TPS, daily active users, gas prices, transaction volume, bridge flows, ecosystem growth trends.

- **Wallet Analyzer** (Core Feature)  
  - Paste **any Arbitrum wallet address** (or connect your own wallet)  
  - View full **transaction history** with decoded details (transfers, contract interactions, values, fees, timestamps)  
  - See current **token balances**  
  - Activity summaries, timelines & visual charts

- **DeFi Protocol Tracker**  
  Monitor leading Arbitrum protocols (Uniswap V3, GMX, Aave, Camelot, Radiant, etc.) with:  
  - TVL changes  
  - 24h trading volume  
  - Fees generated  
  - User activity metrics

- **Arbitrum Testnet Faucet**  
  Request testnet ETH/ARB tokens directly from the dashboard — perfect for developers building & testing on Arbitrum Sepolia.

- **Beautiful Visualizations**  
  Interactive charts (line graphs for trends, bar charts for comparisons, heatmaps for wallet activity) built with modern charting libraries.

- **Multi-API Reliability**  
  Aggregates high-quality data from multiple best-in-class providers for accuracy, speed, and redundancy.

## 🛠 Tech Stack

- **Frontend**: React + Vite  
- **Styling**: Tailwind CSS + shadcn/ui  
- **Data Sources**:
  - [Dune Analytics](https://dune.com) – advanced queries & dashboards  
  - [Chainbase](https://chainbase.com) – enriched on-chain data  
  - [Covalent](https://www.covalenthq.com) – unified transaction indexing & decoding  
  - [Mobula](https://mobula.io) – real-time token prices & market data  
- **Deployment**: Vercel (automatic CI/CD, global CDN)  
- **Other Tools**: TanStack Query / SWR (data fetching & caching), Recharts or Chart.js (visualizations)

## Project Structure (Highlights)
src/
├── feature/                        # Feature-based organization
│   ├── chain-metrics/              # Chain overview & stats
│   ├── wallet-analyzer/            # Wallet input + tx history + balances
│   ├── protocols/                  # DeFi protocol cards & metrics
│   ├── faucet/                     # Testnet token claim UI & logic
│   └── ...                         # Other features (tx feed, visualizations, etc.)
├── components/                     # Global UI components
├── ultils/                            # Utilities,                        
└── App.tsx / main.tsx              # Application entry points


## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18  
- pnpm (recommended) or npm

### Installation

```bash
git clone https://github.com/PythoSalaf/ArbiVision.git
cd ArbiVision

pnpm install
# or
npm install

## **Environment Variables**
### Create .env.local in the root:

**VITE_DUNE_API_KEY=your_dune_key
VITE_CHAINBASE_API_KEY=your_chainbase_key
VITE_COVALENT_API_KEY=your_covalent_key
VITE_MOBULA_API_KEY=your_mobula_key**





