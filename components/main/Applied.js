"use client";

import { useEffect, useState } from "react";
import Button from "/components/core/Button";
import Image from "next/image";
import Placeholder from "/public/images/screenshot.png";

export default function Front(props) {
  function withdraw() {
    console.log("withdraw");
  }

  return (
    <div className="p-4 xl:p-16">
      <h2>Congrats</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            Hey! Womenhack NY 2023 was a huge success and we are so glad you
            could share this beautiful experience with us. If you hold the two
            requested POAPs, you will receive your staked tokens back.
          </p>
          <Image src={Placeholder} alt="Picture of the author" />
          <div className="flex gap-40">
            <Button onClick={() => withdraw()}>Instagram</Button>
            <Button onClick={() => withdraw()}>Twitter</Button>
            <Button onClick={() => withdraw()}>Homepage</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
