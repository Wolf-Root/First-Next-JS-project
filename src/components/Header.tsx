"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "blog",
    href: "/blog",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 bg-white dark:bg-gray-900 z-50 shadow-md border-b border-gray-500">
      <div className="container mx-auto flex items-center justify-between py-2 px-2 md:px-0">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Logo" width={50} height={50} />
        </Link>

        {/* Desktop NavLinks */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-xl font-semibold">
            {navigation.map(({ href, name }, index) => (
              <li
                key={index}
                className={`duration-300 ${
                  pathname === href
                    ? "text-lime-400"
                    : "text-lime-200 hover:text-lime-400"
                }`}
              >
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobail Mneu Open & Close */}
        <button
          className="md:hidden text-2xl py-2 px-4 bg-gray-900/50 rounded-md border border-white text-white cursor-pointer duration-300 hover:bg-gray-900/90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CgClose /> : <CgMenu />}
        </button>
      </div>

      {/* Mobail NavLinks */}
      {isOpen && (
        <nav className="md:hidden fixed top-16 bg-white dark:bg-gray-900 w-full z-40">
          <ul className="flex flex-col items-center gap-2 text-xl font-semibold py-4">
            {navigation.map(({ href, name }, index) => (
              <li key={index} className="w-[90%]">
                <Link
                  href={href}
                  className={`p-2 rounded-md w-full flex items-center justify-center ${
                    pathname === href
                      ? "text-lime-400 bg-white/25"
                      : "duration-300 text-green-700 hover:text-lime-400 hover:bg-gray-950/50"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
