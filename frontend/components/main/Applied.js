'use client'

import { useEffect, useState } from 'react'
import Button from '/components/core/Button'
import Image from 'next/image'
import Logo from '/public/images/logo.png'
import Placeholder from '/public/images/womenTogehter.png'

export default function Congrats (props) {
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
      <h2>Congrats</h2>
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
          <a
            href='https://linktr.ee/H.E.R.DAO'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linktree
          </a>
        </div>
      </div>
    </div>
  )
}
