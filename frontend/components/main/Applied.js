"use client";

import Image from "next/image";
import Placeholder from "/public/images/womenTogehter.png";

export default function Front(props) {
  return (
    <div>
      <Image src={Placeholder} alt="Picture of the author" />
      <h1>Congrats</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            Womenhack NY 2023 was a huge success and we are so glad you could
            share this beautiful experience with us. If you hold the two
            requested POAPs, you will receive your staked tokens back.
          </p>
          <a
            href="https://linktr.ee/H.E.R.DAO"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linktree
          </a>
        </div>
      </div>
    </div>
  );
}
