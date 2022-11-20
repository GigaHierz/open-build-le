"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Placeholder from "/public/images/womenPower.png";
import Logo from "/public/images/logo.png";
// import { ConnectKitButton } from "connectkit";
import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import Button from "/components/core/Button";
import { Contract } from "ethers";

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId: "alchemy api key",
  })
);

export default function Front(props) {
  function withdraw() {
    console.log("withdraw");
  }

  return (
    <div className="p-4 xl:p-16 bg-grey">
      <header>
        <Image src={Logo} alt="Logo of H.E.R. DAO" />
      </header>
      <h1>H.E.R. DAO x womenhack</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            Apply for a ticket for the womxn Conference and Hackathon in New
            York, March 2022. We are happy to announce that Web3Hubs provided us
            with 50 free tickets for our community.{" "}
          </p>
          <div className="flex gap-4">
            {/* apply */}
            <ConnectKitButton />
            <Button onClick={() => withdraw()}>Apply</Button>
          </div>
        </div>
        <Image src={Placeholder} alt="Picture of the author" />
      </div>
    </div>
  );
}

/* <WagmiConfig client={client}>
        <ConnectKitProvider>
          <p>tets</p>
          <ConnectKitButton />
        </ConnectKitProvider>
      </WagmiConfig> */
