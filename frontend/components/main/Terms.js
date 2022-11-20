"use client";

<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
>>>>>>> f552074f00d8050ab839cbf819b8d3809ac2726e
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
} from "wagmi";
<<<<<<< HEAD

import Button from "/components/core/Button";
import Image from "next/image";
import Logo from "/public/images/logo.png";
import CoinsImage from "/public/images/coins.png";
import { utils } from "ethers";

=======
import Button from "/components/core/Button";
import Image from "next/image";
import CoinsImage from "/public/images/coins.png";
import { utils } from "ethers";
import Link from "next/link";

>>>>>>> f552074f00d8050ab839cbf819b8d3809ac2726e
export default function Terms(props) {
  const { address } = useAccount();
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
<<<<<<< HEAD
    addressOrName: "0xb190182D59351b9E525c73097f24646438D85D63",
=======
    addressOrName: "0xae5c8A495486fC0E14c6833f5772018976c5cD9a",
>>>>>>> f552074f00d8050ab839cbf819b8d3809ac2726e
    contractInterface: [
      {
        inputs: [],
        name: "applyForTicket",

        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
    ],
    functionName: "applyForTicket",
<<<<<<< HEAD
    overrides: { from: address, value: utils.parseEther("0.02") },
  });
  console.log(config);

  const { data, error, isError, write } = useContractWrite(config);
  console.log(1, write);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  console.log({ address });

  return (
    <div className="p-4 xl:p-16">
      <header>
        <Image src={Logo} alt="Logo of H.E.R. DAO" />
        <a>about</a>
        <a>apply</a>
        <a>reimburse</a>
        <a>FAQ</a>
      </header>
      <h2>Terms of Service</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image src={CoinsImage} alt="coins" />
          <p>
            Please make sure to read these instructions carefully. After
            agreeing to this, you will be promoted to stake 0.005ETH. You will
            only be able to get these Tokens back if you have attended all
            mandatory events. You will be able to prove that you received these,
            by collecting POAPs at these events. These POAPs have to be in the
            same wallet, that you staked your Tokens with. We won’t be able to
            reimburse you if you don’t have these POAPs, as you are now
            interacting with a smart contract. This means that the conditions of
            the contract are written into the blockchain and are immutable. With
            signing this transaction, you agree to all conditions for receiving
            a conference Ticket to the womenhack NY 2023. We can’t wait to see
            you there!
          </p>
          <div className="flex gap-4">
=======
    overrides: { from: address, value: utils.parseEther("0.01") },
  });
  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div className="grid place-items-center ">
      <div className="grid max-w-screen-lg justify-items-center gap-8">
        <h1>Terms of Service</h1>
        <Image
          src={CoinsImage}
          alt="coins"
          width={300}
          height={200}
          objectFit="contain"
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
        <div className="flex gap-4">
          {!isSuccess && !isLoading && (
>>>>>>> f552074f00d8050ab839cbf819b8d3809ac2726e
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
            <Link href="/success">
              <a>
                <Button>Continue</Button>
              </a>
            </Link>
          )}
          <Link href="/">
            <a>
              <Button>Cancel</Button>
            </a>
          </Link>
        </div>
        {/* TODO: pop-up for error message  */}
        {(isPrepareError || isError) && (
          <div>Error: {(prepareError || error)?.message}</div>
        )}
      </div>
    </div>
  );
}
