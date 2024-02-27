import { http, createConfig, cookieStorage, createStorage } from 'wagmi';
import { mainnet, sepolia, base } from 'wagmi/chains';

export const config = createConfig({
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  chains: [mainnet, sepolia, base],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [base.id]: http(),
  },
});
