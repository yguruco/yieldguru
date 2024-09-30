import { http, createConfig } from '@wagmi/vue'
import { base, mainnet, celoAlfajores } from '@wagmi/vue/chains'
import { injected, metaMask, safe, walletConnect } from '@wagmi/vue/connectors'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    // injected(),
    // walletConnect({ projectId }),
    metaMask(),
    // safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})