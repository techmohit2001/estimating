'use client';

import Image from 'next/image';
import { Cormorant_Garamond, Poppins } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

/** Har card ke liye apna icon URL yahan daalen (public folder: /file.png ya full URL) */
const INDUSTRY_CARDS = [
  { label: 'Commercial', iconUrl: '/about-industries1.png' },
  { label: 'Industrial', iconUrl: '/about-industries2.png' },
  { label: 'Civil', iconUrl: '/about-industries3.png' },
  { label: 'Residential', iconUrl: '/about-industries4.png' },
] as const;

function IndustryCard({ label, iconUrl }: { label: string; iconUrl: string }) {
  return (
    <article className="flex cursor-pointer flex-col items-center rounded-xl border border-[#e8e8e8] bg-[#f5f5f5] px-5 py-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#b8d9f5] hover:bg-[#e6f4ff] hover:shadow-md sm:px-6 sm:py-5">
      <div
        className="mb-3 flex size-11 items-center justify-center rounded-lg bg-[#e6f4ff]"
        aria-hidden
      >
        {iconUrl ? (
          <Image
            src={iconUrl}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
        ) : null}
      </div>
      <h3
        className={`${poppins.className} font-semibold text-[#1a1a1a]`}
        style={{ fontSize: '16px', lineHeight: 1.3 }}
      >
        {label}
      </h3>
    </article>
  );
}

export default function Industries() {
  return (
    <section className="w-full bg-white px-4 pt-2 pb-10 sm:px-6 sm:pt-3 sm:pb-12 lg:px-10 lg:pt-4 lg:pb-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <h2
          className={`${cormorantGaramond.className} mb-3 text-[#1a1a1a]`}
          style={{
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '45px',
            lineHeight: 1.1,
          }}
        >
          Industries We Serve
        </h2>

        <div className="mb-6 h-[3px] w-12 rounded-full bg-[#2997FF] sm:mb-8" />

        <p
          className={`${poppins.className} mb-5 w-full text-[#666666] sm:mb-6`}
          style={{
            fontSize: '16px',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Estimating Buddies supports a wide range of clients in the construction industry. We work
          with{' '}
          <span className="font-semibold text-[#333333]">
            general contractors, subcontractors, builders, developers, architects, engineering
            firms, lenders, and homeowners.
          </span>{' '}
          Our services are useful for residential homes, multi-family buildings, office spaces,
          retail projects, restaurants, warehouses, renovations, and commercial developments.
        </p>

        <p
          className={`${poppins.className} mb-8 w-full text-[#666666] sm:mb-10`}
          style={{
            fontSize: '16px',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Whether you are bidding on a new project, checking construction costs, comparing
          subcontractor pricing, or planning material purchases, our estimating team helps you make
          informed decisions with confidence.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {INDUSTRY_CARDS.map(({ label, iconUrl }) => (
            <IndustryCard key={label} label={label} iconUrl={iconUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
