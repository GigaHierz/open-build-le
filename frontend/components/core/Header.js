"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/logo.png";

export default function Header(props) {
  return (
    <header className="h-full flex justify-between">
      <Image src={Logo} alt="Logo of H.E.R. DAO" />

      <div className="flex items-end gap-6 text-lg">
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/apply">
          <a>apply</a>
        </Link>
        <Link href="/reimburse">
          <a>reimburse</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
      </div>
    </header>
  );
}
