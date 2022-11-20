"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "/components/core/Button";
import Checkbox from "../core/Checkbox";
import Logo from "/public/images/logo.png";
import YoutubeEmbed from "/components/core/YoutubeEmbed";

export default function Front(props) {
  const [privacyPolicy, setprivacyPolicy] = useState(false);
  const [terms, setTerms] = useState(false);

  function withdraw() {
    console.log("withdraw");
  }

  return (
    <div className="p-4 xl:p-16 bg-grey">
      <header>
        <Image src={Logo} alt="Logo of H.E.R. DAO" />
      </header>

      <h2>What do you need to do</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            We will ask you to deposit the value of the ticket ($300) using
            cryptocurrency tokens with us for the time of the conference. As
            these tickets were sponsored by Web3Hubs, we kindly ask you to
            participate in 2 mandatory events. At each of these events, you will
            receive a POAP. Please make sure to get these POAPs as they are the
            preconditions for you to receive your staked tokens. Additionally,
            install the APP if you haven’t done so yet.
          </p>
          <h2>Who can apply</h2>
          <p>
            As these tickets are supposed to go to women and non-binary people,
            we will ask you some questions and share links to your social media
            platforms.
          </p>
          <h2>How to secure a ticket</h2>
          <p>
            In order to stake, you will need a wallet with USDCs (What’s this?).
            Please make sure to inform yourself how to store your private key.
            To get USDCs into your wallet, you will need to exchange FIAT
            (Dollar, EUR) to USDC. This can be done on any centralised exchange
            including Binance, Crypto.com, Coinbase,etc.
          </p>
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
          <div className="">
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
          <div className="App">
            <h1>Youtube Embed</h1>
            <YoutubeEmbed youtubeId="ZE2HxTmxfrI" />
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
