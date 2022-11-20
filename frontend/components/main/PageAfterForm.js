'use client'

import { useEffect, useState } from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount
} from 'wagmi'

import Button from '/components/core/Button'
import Image from 'next/image'
import CoinsImage from '/public/images/coins.png'
import { ethers } from 'hardhat'

export default function Front (props) {
  const { address } = useAccount()
  const {
    config,
    error: prepareError,
    isError: isPrepareError
  } = usePrepareContractWrite({
    addressOrName: '0xb190182D59351b9E525c73097f24646438D85D63',
    contractInterface: [
      {
        inputs: [],
        name: 'applyForTicket',

        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string'
          }
        ],
        stateMutability: 'payable',
        type: 'function'
      }
    ],
    functionName: 'applyForTicket',
    overrides: { from: address, value: ethers.utils.parseEther(0.02) }
  })
  console.log(config)

  const { data, error, isError, write } = useContractWrite(config)
  console.log(write)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  })

  return (
    <div className='p-4 xl:p-16'>
      <h2>Terms of Service</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Image src={CoinsImage} alt='coins' />
          <p>
            Please make sure to read these instructions carefully. After
            agreeing to this, you will be promoted to stake 300$ worth of USDC.
            You will only be able to get these Tokens back if you have attended
            all mandatory events. You will be able to prove that you received
            these, by collecting POAPs at these events. These POAPs have to be
            in the same wallet, that you staked your Tokens with. We won’t be
            able to reimburse you if you don’t have these POAPs, as you are now
            interacting with a smart contract. This means that the conditions of
            the contract are written into the blockchain and are immutable. With
            signing this transaction, you agree to all conditions for receiving
            a conference Ticket to the womenhack NY 2023. We can’t wait to see
            you there!
          </p>
          <div className='flex gap-4'>
            <Button disabled={!write || isLoading} onClick={() => write()}>
              Agree and Continue
            </Button>
            <Button onClick={() => withdraw()}>Cancel</Button>
          </div>
          {(isPrepareError || isError) && (
            <div>Error: {(prepareError || error)?.message}</div>
          )}
        </div>
      </div>
    </div>
  )
}
