"use client";

import { useEffect, useState } from "react";
import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId: "alchemy api key",
  })
);

export default function Apply(props) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <p>tets</p>
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
