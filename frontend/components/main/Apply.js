'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import Button from '/components/core/Button'
import Checkbox from '../core/Checkbox'

export default function Apply (props) {
  const [privacyPolicy, setprivacyPolicy] = useState(false)
  const [terms, setTerms] = useState(false)

  function withdraw () {
    console.log('withdraw')
  }

  return (
    <div className='p-4 xl:p-16'>
      <h2>Terms and conditions</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <p>
            We will also ask you to stake the value of the Ticket (0.01ETH) with
            us for the time of the conference. As these Tickets were sponsored
            by Web3Hubs, we kindly ask you to participate in 2 mandatory events.
            At each of these events, you will receive a POAP{' '}
            <a>(https://poap.xyz)</a>. Please make sure to get these POAPs as
            they are the preconditions for you to receive your staked tokens.
            Also install the APP if you haven’t done so yet.
          </p>
          <h2>Who can apply</h2>
          <p>
            As these tickets are supposed to go to women and non-binary people,
            we will ask you some questions and to share your socials.
          </p>
          <h2>How to secure a ticket</h2>
          <p>
            In order to stake, you will need a Wallet with USDCs (on Ethereum).
            We recommend getting a MetaMask wallet. <a>https://metamask.io</a>.
            Please make sure to inform yourself how to safe keep your private
            key. To get USDCs into your Wallet, you will need to exchange FIAT
            (Dollar, EUR) to USDC. This can be done on any centralised exchange
            like Binance, Crypto.com, Coinbase, …
          </p>
          <div className=''>
            <Checkbox
              name='BoxPolicy'
              label='I agree to the privacy policy'
              checked={privacyPolicy}
              onChange={() => setprivacyPolicy(!privacyPolicy)}
            ></Checkbox>
            <Checkbox
              name='BoxTerms'
              label='I have read and agree to the following terms and conditions'
              checked={terms}
              onChange={() => setTerms(!terms)}
            ></Checkbox>
          </div>
          <div className='flex gap-4'>
            <Button disabled={!terms || !privacyPolicy}>
              <Link disabled={!terms || !privacyPolicy} href='/form'>
                Agree & Continue
              </Link>
            </Button>
            <Button onClick={() => withdraw()}>
              <Link href='/'>Cancel</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
