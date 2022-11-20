"use client";

import Image from "next/image";
import Link from "next/link";
import Placeholder from "/public/images/womenPower.png";
import Button from "/components/core/Button";

export default function Front(props) {
  return (
    <div>
      <h1 className="text-center">H.E.R. DAO x womenhack</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="grid gap-8 items-center justify-items-center">
          <p className="text-lg">
            Apply for a ticket for the womxn Conference and Hackathon in New
            York, March 2022. We are happy to announce that Web3Hubs provided us
            with 50 free tickets for our community.{" "}
          </p>
          <Link href="/apply">
            <a>
              <Button>Apply</Button>
            </a>
          </Link>
        </div>
        <Image src={Placeholder} alt="Picture of the author" />
      </div>
    </div>
  );
}
