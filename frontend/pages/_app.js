import '../styles/globals.css'

import { WagmiConfig, createClient, chain } from 'wagmi'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'

const client = createClient(
  getDefaultClient({
    appName: 'ConnectKit Next.js demo',
    //infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    alchemyId: 'RMikw8e80aHE2Ywu-uV1XgzPE2lhdfGU',
    chains: [chain.mainnet, chain.polygon, chain.optimism, chain.goerli]
  })
)

export default function MyApp ({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
