'use client'

import { useEffect, useState } from 'react'
import Button from '/components/core/Button'
import Image from 'next/image'
import Logo from '/public/images/logo.png'
import Placeholder from '/public/images/humansAndTickets.png'

export default function Front (props) {
  function withdraw () {
    console.log('withdraw')
  }

  return (
    <div className='p-4 xl:p-16 bg-grey'>
      <header>
        <Image src={Logo} alt='Logo of H.E.R. DAO' />
        <a>about</a>
        <a>apply</a>
        <a>reimburse</a>
        <a>FAQ</a>
      </header>
      <Image src={Placeholder} alt='Picture of the author' />
      <h2>Success</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <p>
            Your staked tokens have been received. Your code for the conference
            ticket is _________. Please Copy the Code and save it. Click below
            to redeem your code. We look forward to seeing you at the conference
          </p>
          <Button>
            <a href='https://www.web3hubs.org' target='_blank'></a>Get your
            conference ticket
          </Button>
        </div>
      </div>
    </div>
  )
}
