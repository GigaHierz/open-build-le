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
    addressOrName: '0xae5c8A495486fC0E14c6833f5772018976c5cD9a',
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
      <h2>Get Reimbursed</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <p>
            Womenhack NY 2023 was a huge success and we are so glad you could
            share this beautiful experience with us. If you hold the two
            requested POAPs, you will receive your staked tokens back.
          </p>
          <p>
            If you hold the two requested POAPs, you will receive your staked
            tokens back.{' '}
          </p>
          <div className='flex gap-4'>
            <Button disabled={!write || isLoading} onClick={() => write()}>
              Reimburse
            </Button>

            {/* TODO: pop-up for error message  */}
            {(isPrepareError || isError) && (
              <div>
                {' '}
                {(prepareError || error)?.message?.includes(
                  'You already got reimbursed'
                )
                  ? 'You already got reimbursed'
                  : error?.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
