import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { baseSepolia, sepolia, celoAlfajores } from "@reown/appkit/networks";



// 1. Get projectId
const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID;

// 2. Set the networks
const networks = [baseSepolia, sepolia, celoAlfajores];

const metadata = {
  name: "EarthFi",
  description: "Official Website of EarthFi",
  url: "https://www.earthfi.xyz",
  icons: ["/EarthFi.png"],
};


createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#F29F05',
    '--w3m-border-radius-master': "1px"
  },
  features: {
    analytics: true, 
    legalCheckbox: true
  },
  
});
