'use client'

import { useState } from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction
} from 'wagmi'
import { getAddressesForEvent } from '../../services/poap-service'

import Button from '/components/core/Button'

export default function Reimburse (props) {
  const [eligibleState, setEligibleState] = useState(false)

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
  const { data: readData, isLoading: readLoading } = useContractRead({
    address: '0xae5c8A495486fC0E14c6833f5772018976c5cD9a',
    contractInterface: {
      inputs: [],
      name: 'getPoapCollections',

      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      type: 'function'
    },
    functionName: 'getPoapCollections',
    args: []
  })
  const {
    data: writeData,
    error: writeError,
    isError: writeIsError,
    write
  } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  })

  // check if scholars has participated in mandatory events.
  // if they have only participated in a part of the mandatory events they will only get that percentage reimbursed
  const checkEligibility = address => {
    let eventsParticipated = []
    // function to check if address holds required POAPs
    readData.length < 2
      ? setEligibleState(getAddressesForEvent(readData[0]).filter(address))
      : (eventsParticipated = readData.map(eventId =>
          getAddressesForEvent(eventId).filter(address)
        ))

    eventsParticipated.length
      ? write(
          eventsParticipated.length / eventsParticipated.filter(v => v === true)
        )
      : eligibleState && write(1)
  }

  return (
    <div>
      <h1 className='text-center'>Get your Stake back</h1>
      <div className='grid grid-cols-2 gap-8'>
        <p>
          Womenhack NY 2023 was a huge success and we are so glad you could
          share this beautiful experience with us. If you hold the two requested
          POAPs, you will receive your staked tokens back.
        </p>
        <p>
          If you hold the two requested POAPs, you will receive your staked
          tokens back.{' '}
        </p>
      </div>
      <div className='flex justify-center mt-8'>
        <Button
          disabled={!write || isLoading}
          onClick={() => checkEligibility()}
        >
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
  )
}
