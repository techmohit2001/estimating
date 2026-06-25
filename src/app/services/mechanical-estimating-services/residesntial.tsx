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

export default function Residential() {
  return (
    <div className="w-full pt-2 pb-8 lg:pt-3 lg:pb-10">
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.1',
        }}
      >
        <span className="relative inline-block">
          Who
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        We Serve
      </h2>

      <p
        className={`${poppins.className} mt-6 max-w-4xl text-[#303030] sm:mt-7`}
        style={bodyTextStyle}
      >
        Our mechanical estimating services support mechanical contractors, subcontractors, general
        contractors, engineers, developers, builders, and construction companies involved in
        residential, commercial, and industrial projects. We provide accurate estimates for HVAC
        systems, ductwork, piping, insulation, and mechanical equipment, helping clients prepare
        competitive bids, review project budgets, compare pricing, plan procurement, and make
        informed decisions throughout the construction process. Whether you need support during
        bidding, budgeting, value engineering, or project planning, our estimates deliver the
        clarity and confidence needed to move projects forward efficiently.
      </p>
    </div>
  );
}
