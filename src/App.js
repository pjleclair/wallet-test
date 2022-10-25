import '@rainbow-me/rainbowkit/styles.css';
import Header from './Header'

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

function App() {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Header />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
