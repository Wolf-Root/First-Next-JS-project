export default function Home() {
  return (
    <section className="min-h-screen bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[578px] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-lime-300 to-lime-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[1155px]"
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <p className="relative rounded-full px-3 py-1 text-sm text-black ring-1 ring-lime-600 duration-300 hover:ring-lime-900/20 hover:bg-lime-500/20">
              Hello
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Data to enrich your online business
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://nextjs.org/"
                className="rounded-md bg-lime-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs duration-300 hover:bg-lime-800/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
              >
                Get started
              </a>
              <a
                href="https://nextjs.org/docs"
                className="text-sm font-semibold text-lime-800 duration-300 hover:text-green-700"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[578px] -translate-x-1/2 bg-gradient-to-tr from-lime-300 to-lime-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[1155px]"
          />
        </div>
      </div>
    </section>
  );
}
