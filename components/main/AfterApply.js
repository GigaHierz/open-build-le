"use client";

import { useEffect, useState } from "react";
import Button from "/components/core/Button";

export default function Front(props) {
  function withdraw() {
    console.log("withdraw");
  }

  return (
    <div className="p-4 xl:p-16">
      <h2>Terms and conditions</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            We will also ask you to stake the value of the Ticket (300$) with us
            for the time of the conference. As these Tickets were sponsored by
            Web3Hubs, we kindly ask you to participate in 2 mandatory events. At
            each of these events, you will receive a POAP{" "}
            <a>(https://poap.xyz)</a>. Please make sure to get these POAPs as
            they are the preconditions for you to receive your staked tokens.
            Also install the APP if you haven’t done so yet.
          </p>
          <h2>Who can apply</h2>
          <p>
            As these tickets are supposed to go to women and non-binary people,
            we will ask you some questions and to share your socials.
          </p>
          <h2>How to secure a ticket</h2>
          <p>
            In order to stake, you will need a Wallet with USDCs (on Ethereum).
            We recommend getting a MetaMask wallet. <a>https://metamask.io</a>.
            Please make sure to inform yourself how to safe keep your private
            key. To get USDCs into your Wallet, you will need to exchange FIAT
            (Dollar, EUR) to USDC. This can be done on any centralised exchange
            like Binance, Crypto.com, Coinbase, …
          </p>
          <div className="">
            <input type="checkbox" />
            <p>
              I agree to the <a>privacy policy</a>
            </p>
            <input type="checkbox" />
            <p>I have read and agree to the following terms and conditions</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => withdraw()}>Agree and Continue</Button>
            <Button onClick={() => withdraw()}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
