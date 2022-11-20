import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Placeholder from '/public/images/screenshot.png'
// import { ConnectKitButton } from "connectkit";
import { WagmiConfig, createClient } from 'wagmi'
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient
} from 'connectkit'
import Button from '/components/core/Button'
import { Contract } from 'ethers'

export default function Front (props) {
  function withdraw () {
    console.log('withdraw')
  }

  return (
    <div className='p-4 xl:p-16'>
      <h1>HER DAO</h1>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <p>lorem</p>
          <div className='flex gap-4'>
            {/* apply */}
            <ConnectKitButton />
            <Button onClick={() => withdraw()}>
              {' '}
              <Link href='/apply'>Apply</Link>
            </Button>
            <Button onClick={() => withdraw()}>Withdraw</Button>
          </div>
        </div>

        <Image src={Placeholder} alt='Picture of the author' />
      </div>
    </div>
  )
}

/* <WagmiConfig client={client}>
        <ConnectKitProvider>
          <p>tets</p>
          <ConnectKitButton />
        </ConnectKitProvider>
      </WagmiConfig> */
