"use client";

import Link from "next/link";
import Button from "/components/core/Button";
import Image from "next/image";
import Placeholder from "/public/images/womenTogehter.png";

export default function Applied(props) {
  return (
    <div className="grid place-items-center">
      <Image src={Placeholder} alt="Picture of the author" />
      <h1>Congrats</h1>
      <div className="grid justify-center max-w-screen-md gap-4 text-center mb-8">
        <div>
          <p>
            Womenhack NY 2023 was a huge success and we are so glad you could
            share this beautiful experience with us. If you hold the two
            requested POAPs, you will receive your staked tokens back.
          </p>
          <p className="mt-8">
            If you hold the two requested POAPs, you will receive your staked
            tokens back.{" "}
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
      <Link href="/reimburse">
        <a>
          <Button>Reimburse</Button>
        </a>
      </Link>
    </div>
  );
}
