'use client'

import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount
} from 'wagmi'
import Button from '/components/core/Button'
import Image from 'next/image'
import CoinsImage from '/public/images/coins.png'
import { utils } from 'ethers'
import Link from 'next/link'

export default function Terms (props) {
  const { address } = useAccount()
  const {
    config,
    error: prepareError,
    isError: isPrepareError
  } = usePrepareContractWrite({
    addressOrName: '0xae5c8A495486fC0E14c6833f5772018976c5cD9a',
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
    overrides: { from: address, value: utils.parseEther('0.01') }
  })
  const { data, error, isError, write } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  })

  return (
    <div className='grid place-items-center '>
      <div className='grid max-w-screen-lg justify-items-center gap-8'>
        <h1>Terms of Service</h1>
        <Image
          src={CoinsImage}
          alt='coins'
          width={300}
          height={200}
          objectFit='contain'
        />
        <p>
          Please make sure to read these instructions carefully. After agreeing
          to this, you will be promoted to stake 0.01ETH. You will only be able
          to get these Tokens back if you have attended all mandatory events.
          You will be able to prove that you received these, by collecting POAPs
          at these events. These POAPs have to be in the same wallet, that you
          staked your Tokens with. We won’t be able to reimburse you if you
          don’t have these POAPs, as you are now interacting with a smart
          contract. This means that the conditions of the contract are written
          into the blockchain and are immutable. With signing this transaction,
          you agree to all conditions for receiving a conference Ticket to the
          womenhack NY 2023. We can’t wait to see you there!
        </p>
        <div className='flex gap-4'>
          {!isSuccess && !isLoading && (
            <Button disabled={!write || isLoading} onClick={() => write()}>
              Agree
            </Button>
          )}
          {!isSuccess && isLoading && (
            <Button disabled={!write || isLoading} onClick={() => write()}>
              Loading
            </Button>
          )}
          {isSuccess && (
            <Link href='/success'>
              <a>
                <Button>Continue</Button>
              </a>
            </Link>
          )}
          <Link href='/'>
            <a>
              <Button>Cancel</Button>
            </a>
          </Link>
        </div>
        {/* TODO: pop-up for error message  */}
        {(prepareError || error)?.message?.includes(
          'You already bought a ticket'
        )
          ? 'You already bought a ticket. There is only one Ticket per person.'
          : ''}
      </div>
    </div>
  )
}
