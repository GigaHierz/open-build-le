"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "/components/core/Button";
import Checkbox from "../core/Checkbox";
import Logo from "/public/images/logo.png";
import YoutubeEmbed from "/components/core/YoutubeEmbed";

export default function Apply(props) {
  const [privacyPolicy, setprivacyPolicy] = useState(false);
  const [terms, setTerms] = useState(false);

  function withdraw() {
    console.log("withdraw");
  }

  return (
    <div className="p-4 xl:p-16 bg-grey">
      <header>
        <Image src={Logo} alt="Logo of H.E.R. DAO" />
        <a>about</a>
        <a>apply</a>
        <a>reimburse</a>
        <a>FAQ</a>
      </header>

      <h2>What do you need to do</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            We will ask you to deposit the value of the ticket (0.005ETH) using
            cryptocurrency tokens with us for the time of the conference. As
            these tickets were sponsored by Web3Hubs, we kindly ask you to
            participate in 2 mandatory events. At each of these events, you will
            receive a POAP. Please make sure to get these POAPs as they are the
            preconditions for you to receive your staked tokens. Additionally,
            install the MetaMask APP if you haven’t done so yet.
          </p>
          <h2>Who can apply</h2>
          <p>
            As these tickets are supposed to go to women and non-binary people,
            we will ask you some questions and share links to your social media
            platforms.
          </p>
          <a href>Read the FAQ to find out more</a>
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
          <div className="flex gap-4">
            <Button disabled={!terms || !privacyPolicy}>
              <Link disabled={!terms || !privacyPolicy} href="/form">
                Agree & Continue
              </Link>
            </Button>
            <Button onClick={() => withdraw()}>
              <Link href="/">Cancel</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
