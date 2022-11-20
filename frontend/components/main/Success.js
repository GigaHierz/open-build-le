"use client";

import Button from "/components/core/Button";
import Image from "next/image";
import Placeholder from "/public/images/humansAndTickets.png";

export default function Front(props) {
  return (
    <div>
      <Image src={Placeholder} alt="Picture of the author" />
      <h1>Success</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            Your staked tokens have been received. Your code for the conference
            ticket is _________. Click below to redeem your code. We look
            forward to seeing you at the conference
          </p>
          <Button>Get your conference ticket</Button>
        </div>
      </div>
    </div>
  );
}
