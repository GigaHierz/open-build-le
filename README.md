# Salad

this is an open Source dApp - decentralized application for Bootcamps, NGOs to prove that recipients of scholarships fulfill their part of the deal.
For example H.E.R. DAO, a women and non.binary focused developer and builder DAO often gets tickets provided by conferences to distribute to women and non-binary people. The organisation sponsoring the tickets often expects something in return, like attending a talk or workshop. To incentivise people to fulfil this requirement, we ask them to stake Tokens in the value of the Ticket with us. If they fulfil all requirements, they will get their tokens back.

- Find the page [here](https://open-build-le.vercel.app/apply)

- Find the presentation [here] (https://www.canva.com/design/DAFSeTyfRoY/wBh7r-KSsWZAgQvxZCaeTQ/view?utm_content=DAFSeTyfRoY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1)

- Find the video [here](https://www.loom.com/share/5ea3fbb1231a46f8828f277951269559)

## Team

- [Sebi](https://github.com/Sebi900): FE
- [Daniel](https://github.com/tw1t611): Full Stack
- [Lena](https://github.com/GigaHierz): Smart Contract, PM
- [Anh](https://github.com/apb235): Design, UI/UX

## Problem

H.E.R. DAO, women and non-binary-focused developer and builder DAO get tickets provided by conferences to distribute to women and non-binary people. The organization sponsoring the tickets expects something in return, like the ticket recipients attending a talk or workshop.
This is difficult to keep track of

## Solution

Upon applying for a ticket, the user has to stake the value of the ticket in the Contract. During the conference the user will be abel to receive a POAP (Proof of Attendance).
When coming back to the website we will do an API request to the POAP API to check if the user has the POAP of the mandatory event. Only then they will be able to withdraw their staked tokens.

## UI/UX

Design Template can be found [here](https://www.figma.com/file/tbdJMwOTmi8aPJUeIIdIwh/Open-Build?node-id=29%3A147&t=5twIBFmh6msElRUx-0)

## Smart Contract

The Smart Contract can be used as a template. As parameter, it takes a list of PromoCodes, the value of the ticket, and the address of the POAP event.

## Tech used

Frontend is build with React, Tailwind, Next.js, Wagmi and deployed on Vercel.
Smart Contract is written in Solidity and deployed on [Goerli Testnet](https://goerli.etherscan.io/address/0xae5c8A495486fC0E14c6833f5772018976c5cD9a)
