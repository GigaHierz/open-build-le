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
import Logo from '/public/images/logo.png'
import CoinsImage from '/public/images/coins.png'
import { utils } from 'ethers'

export default function Reimburse (props) {
  const {
    config,
    error: prepareError,
    isError: isPrepareError
  } = usePrepareContractWrite({
    addressOrName: '0xb190182D59351b9E525c73097f24646438D85D63',
    contractInterface: [
      {
        inputs: [],
        name: 'withdraw',

        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ],
    functionName: 'withdraw'
  })
  console.log(config)

  const { data, error, isError, write } = useContractWrite(config)
  console.log(1, write)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  })

  return (
    <div className='p-4 xl:p-16'>
      <header>
        <Image src={Logo} alt='Logo of H.E.R. DAO' />
        <a>about</a>
        <a>apply</a>
        <a>reimburse</a>
        <a>FAQ</a>
      </header>
      <h2>Terms of Service</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <div className='flex gap-4'>
            <Button disabled={!write || isLoading} onClick={() => write()}>
              Reimburse
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
