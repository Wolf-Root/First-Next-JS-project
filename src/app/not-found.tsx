import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <section className="bg-white dark:bg-gray-900 z-10 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h1 className="mb-2 !text-7xl font-bold leading-none text-lime-400 md:!text-9xl">
                404
              </h1>
              <h2 className="mb-3 !text-2xl font-semibold leading-tight text-white">
                Oops! That page can’t be found
              </h2>
              <p className="mb-8 text-lg text-white">
                The page you are looking for it maybe deleted
              </p>
              <Link
                href="/"
                className="inline-block rounded-lg border border-lime-400 px-8 py-3 text-center text-base font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-black"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
