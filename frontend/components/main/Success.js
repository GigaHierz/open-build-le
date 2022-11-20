"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "/components/core/Button";
import Placeholder from "/public/images/humansAndTickets.png";

export default function Front(props) {
  return (
    <div className="grid place-items-center ">
      <div className="grid max-w-screen-lg justify-items-center gap-8">
        <Image
          src={Placeholder}
          alt="Picture of the author"
          width={400}
          height={300}
          objectFit="contain"
        />
        <h1>Success</h1>
        <div className="grid justify-items-center gap-4">
          <p>
            Your staked tokens have been received. Your code for the conference
            ticket is _________. Please Copy the Code and save it. Click below
            to redeem your code. We look forward to seeing you at the conference
          </p>
          <Link href="https://www.web3hubs.org">
            <a target="_blank">
              <Button>conference ticket</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
