import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const date = new Date();

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-500">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex flex-col gap-2 items-center">
              <Image
                src="/logo.png"
                className="me-3"
                alt="Logo"
                width={50}
                height={50}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Wolf Root
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </p>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://nextjs.org/"
                    className="hover:underline"
                  >
                    Next Js
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://react.dev/"
                    className="hover:underline"
                  >
                    React Js
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </p>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://github.com/Wolf-Root"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://x.com/wolf_R00T"
                    className="hover:underline"
                  >
                    x.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </p>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href={"/PrivacyAndPolicy"} className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href={"TermsAndConditions"} className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* copyright */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {date.getFullYear()}{" "}
            <a
              target="_blank"
              href="https://github.com/Wolf-Root"
              className="hover:underline"
            >
              Wolf Root
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaDiscord />
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
