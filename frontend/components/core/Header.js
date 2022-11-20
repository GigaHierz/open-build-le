"use client";

import Link from "next/link";

export default function Header(props) {
  return (
    <header>
      <Image src={Logo} alt="Logo of H.E.R. DAO" />
      <Link href="/ab"></Link>
      <a>about</a>
      <a>apply</a>
      <a>reimburse</a>
      <a>FAQ</a>
    </header>
  );
}
