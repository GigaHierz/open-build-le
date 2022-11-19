"use client";

import { useEffect, useState } from "react";
import Button from "/components/core/Button";
import Image from "next/image";
import Placeholder from "/public/images/bildschirm.png";

export default function Front(props) {
  function withdraw() {
    console.log("withdraw");
  }

  return (
    <div className="p-4 xl:p-16">
      <h2>Terms of Service</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image src={Placeholder} alt="Picture of the author" />
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
          <div className="flex gap-4">
            <Button onClick={() => withdraw()}>Agree and Continue</Button>
            <Button onClick={() => withdraw()}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
