"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import Logo from "/public/images/logo.png";

const links = [
  {
    name: "Dashboard",
    url: "/",
  },
  {
    name: "Kunden",
    url: "/customers",
  },
];

export default function Sidebar(props) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-between w-52 bg-blue-gradient">
      <div>
        {/* <div className="my-6 ml-3">
          <Image src={Logo} alt="Logo" width={160} height={100} priority />
        </div> */}
        {links.map((link) => (
          <Link
            className={`flex items-center px-4 py-2 gap-2 text-white hover:bg-white hover:bg-opacity-20 ${
              pathname === link.url ||
              (link.url !== "/" && pathname?.includes(link.url))
                ? "bg-white bg-opacity-20"
                : ""
            }`}
            href={link.url}
            key={link.url}
          >
            <Image
              src={link.icon}
              alt={link.name}
              width={32}
              height={32}
              priority
            />
            <p className="text-md">{link.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
