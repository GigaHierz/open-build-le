"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "/components/core/Button";
import Checkbox from "../core/Checkbox";
import YoutubeEmbed from "/components/core/YoutubeEmbed";

export default function Apply(props) {
  const [privacyPolicy, setprivacyPolicy] = useState(false);
  const [terms, setTerms] = useState(false);

  return (
    <div>
      <h1>What do you need to do</h1>
      <p>
        We will ask you to deposit the value of the ticket (0.005ETH) using
        cryptocurrency tokens with us for the time of the conference. As these
        tickets were sponsored by Web3Hubs, we kindly ask you to participate in
        2 mandatory events. At each of these events, you will receive a POAP.
        Please make sure to get these POAPs as they are the preconditions for
        you to receive your staked tokens. Additionally, install the MetaMask
        APP if you haven’t done so yet.
      </p>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2>Who can apply</h2>
          <p>
            As these tickets are supposed to go to women and non-binary people,
            we will ask you some questions and share links to your social media
            platforms.
          </p>
        </div>
        <div>
          <h2>How to secure a ticket</h2>
          <p>
            In order to stake, you will need a wallet with USDCs (What’s this?).
            Please make sure to inform yourself how to store your private key.
            To get USDCs into your wallet, you will need to exchange FIAT
            (Dollar, EUR) to USDC. This can be done on any centralised exchange
            including Binance, Crypto.com, Coinbase,etc.
          </p>
        </div>
        <div>
          <h2>Why Crypto Currency</h2>
          <p>
            Smart contracts are a way to make a binding agreement that is
            written in code. Both parties are bound to the rules of the smart
            contract. In this case, we will reimburse you if you fulfill the
            agreement. Just show up to the mandatory events or we get to keep
            your staked tokens for our effort and in some cases, to reimburse
            the sponsor. What are smart contracts? Watch this video to learn
            more!
          </p>
        </div>
      </div>
      <div className="grid gap-4 px-12 py-4">
        <Checkbox
          name="BoxPolicy"
          label="I agree to the privacy policy"
          checked={privacyPolicy}
          onChange={() => setprivacyPolicy(!privacyPolicy)}
        ></Checkbox>
        <Checkbox
          name="BoxTerms"
          label="I have read and agree to the following terms and conditions"
          checked={terms}
          onChange={() => setTerms(!terms)}
        ></Checkbox>
      </div>
      <div className="flex justify-center gap-4">
        <Link href="/form">
          <a>
            <Button>Agree & Continue</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>Cancel</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
