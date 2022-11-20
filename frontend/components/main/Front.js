"use client";

import Image from "next/image";
import Link from "next/link";
import Placeholder from "/public/images/womenPower.png";
import Button from "/components/core/Button";

export default function Front(props) {
  return (
    <div>
      <h1>H.E.R. DAO x womenhack</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            Apply for a ticket for the womxn Conference and Hackathon in New
            York, March 2022. We are happy to announce that Web3Hubs provided us
            with 50 free tickets for our community.{" "}
          </p>
          <div className="flex gap-4">
            <Link href="/apply">
              <a>
                <Button>Apply</Button>
              </a>
            </Link>
          </div>
        </div>
        <Image src={Placeholder} alt="Picture of the author" />
      </div>
    </div>
  );
}
