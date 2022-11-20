"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/logo.png";
import { ConnectKitButton } from "connectkit";

export default function Header(props) {
  return (
    <header className="h-full flex justify-between">
      <Link href="/">
        <a>
          <Image src={Logo} alt="Logo of H.E.R. DAO" />
        </a>
      </Link>

      <div className="flex items-end gap-6 text-lg">
        <Link href="/about">
          <a className="py-2">about</a>
        </Link>
        <Link href="/apply">
          <a className="py-2">apply</a>
        </Link>
        <Link href="/reimburse">
          <a className="py-2">reimburse</a>
        </Link>
        <Link href="/faq">
          <a className="py-2">FAQ</a>
        </Link>
        <ConnectKitButton />
      </div>
    </header>
  );
}
