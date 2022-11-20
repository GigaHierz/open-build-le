"use client";

import YoutubeEmbed from "/components/core/YoutubeEmbed";

export default function FAQ(props) {
  return (
    <div className="grid justify-items-center">
      <h1>FAQ</h1>
      <div className="grid gap-4 justify-items-center">
        <div>
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

          <div className="grid justify-items-center">
            <h1>Youtube Embed</h1>
            <YoutubeEmbed youtubeId="ZE2HxTmxfrI" />
          </div>
          <div className="grid justify-items-center">
            <h2>How long will it take to create your first wallet?</h2>
            <p>It will take about 45 minutes to 1 hour to do this.</p>
            <h2>Which browser can I just for this</h2>
            <p>
              Google Chrome is the best if you choose a browser. Otherwise,
              install the MetaMask
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
