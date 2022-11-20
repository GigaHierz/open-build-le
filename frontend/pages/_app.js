import '../styles/globals.css'

import { WagmiConfig, createClient, chain } from 'wagmi'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import Layout from '/components/layout'

const client = createClient(
  getDefaultClient({
    appName: 'Salad',
    //infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    alchemyId: 'RMikw8e80aHE2Ywu-uV1XgzPE2lhdfGU',
    chains: [chain.mainnet, chain.polygon, chain.optimism, chain.goerli]
  })
)

export default function MyApp ({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
