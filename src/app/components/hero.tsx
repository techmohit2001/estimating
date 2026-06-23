'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/home1.png')" }}
      />
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-[760px] text-white">
          <h1
            className="mb-6 text-[clamp(2rem,5.8vw,48px)] leading-[1.02] tracking-normal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Your Trusted
            Partner for <br />Construction Estimating
            <br />
            Services
          </h1>

          <p
            className="mb-10 max-w-[700px] text-[clamp(1rem,2.8vw,24px)] font-normal leading-[1.45]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Supporting contractors with fast, accurate, and professional estimating services for all project types.
          </p>

          <div className="flex w-full max-w-[360px] flex-nowrap items-center gap-2 sm:w-auto sm:max-w-none sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-transparent bg-blue-600 px-4 text-base font-medium text-white transition-colors duration-300 hover:bg-blue-500 sm:w-[170px] sm:flex-none sm:px-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>Get a Quote</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <button
              className="inline-flex h-12 flex-1 items-center justify-center rounded-xl border border-white/60 bg-white/10 px-4 text-base font-medium text-white transition-colors duration-300 hover:bg-white hover:text-gray-900 sm:w-[170px] sm:flex-none sm:px-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Call Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}