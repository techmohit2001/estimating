'use client';

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

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const HIGHLIGHTS = [
  'Dedicated plumbing estimators with hands-on experience across USA.',
  'Fast turnaround on detailed takeoffs, bid estimates, and material quantities for residential, commercial, and industrial scopes.',
  'Location-based, up-to-date pricing for material, labor, and equipment to help you bid with confidence.',
] as const;

export default function Choose() {
  return (
    <section className="w-full pt-2 pb-8 lg:pt-3 lg:pb-10">
      <div className="rounded-[18px] bg-[#f8f9fa] px-6 pb-10 pt-6 sm:px-10 sm:pb-12 sm:pt-8 lg:px-14 lg:pb-14 lg:pt-10">
        <h2
          className={`${cormorantGaramond.className} text-[#1a1a1a]`}
          style={{
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '45px',
            lineHeight: '1.15',
          }}
        >
          <span className="relative inline-block">
            Why
            <span
              className="absolute left-0 top-full mt-1.5 h-[3px] w-full rounded-full"
              style={{ background: brandGradient }}
              aria-hidden
            />
          </span>{' '}
          Choose Estimating Buddies?
        </h2>

        <div
          className={`${poppins.className} mt-6 space-y-5 text-[#303030]`}
          style={bodyTextStyle}
        >
          <p>
        Choosing the right estimating partner matters because your bid depends on the quality of your
        estimate. At Estimating Buddies, we prepare plumbing estimates with careful drawing review,
        clear quantity takeoff, practical cost breakdowns, and organized reporting. We understand
        plumbing drawings and know how to convert project documents into usable estimating reports.
        Our team focuses on clear communication, accurate quantities, and reliable support for
        residential and commercial projects. Clients choose us because we help save time, reduce
        risk, and improve bidding confidence. Whether you need plumbing estimating services,
        mechanical estimating services, architectural cost estimating, or full estimating support from
        a USA estimating company, we are ready to help.
        </p>

          <p className="!mt-6 font-semibold text-[#1a1a1a]">Our key business highlights:</p>
          <ul className="list-disc space-y-3 pl-5">
            {HIGHLIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
