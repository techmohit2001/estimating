'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('services-plumbing-services.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-center justify-center px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[900px] text-center text-white">
          <p
            className="mb-4 text-[16px] font-semibold text-[#2997FF]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, textAlign: 'center' }}
          >
            Construction Estimating Services
          </p>

          <h1
            className="mb-6 text-[48px] font-bold leading-[1.1] tracking-normal"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 200,
              fontSize: '48px',
              textAlign: 'center',
            }}
          >
            Accurate Estimates. Better Bids. Smarter Project Decisions.
          </h1>

          <div className="mx-auto mb-4 h-[3px] w-12 rounded-full bg-[#2997FF]" />

          <p
            className="mx-auto mb-10 max-w-[720px] text-[16px] font-normal leading-[1.5]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 200,
              fontSize: '18px',
              textAlign: 'center',
            }}
          >
            Reliable construction estimating and quantity takeoff services for <br /> contractors,
            builders, developers, and homeowners across the <br /> USA and Canada.
          </p>

          <div className="mx-auto flex w-full max-w-[360px] flex-nowrap items-center justify-center gap-2 sm:w-auto sm:max-w-none sm:gap-4">
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
