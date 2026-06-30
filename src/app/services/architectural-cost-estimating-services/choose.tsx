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
          Why Choose Estimating Buddies?
        </h2>

        <span
          className="mt-3 block h-[3px] w-12 rounded-full sm:w-14"
          style={{ background: brandGradient }}
          aria-hidden
        />

        <p
          className={`${poppins.className} mt-6 text-[#303030]`}
          style={bodyTextStyle}
        >
          Choosing the right estimating partner matters because your project budget, bid accuracy,
          and profit margin depend on the quality of the estimate. At Estimating Buddies, we prepare
          architectural cost estimates with proper drawing review, clear scope understanding, and
          practical cost reporting. Our team carefully reviews architectural drawings, schedules,
          specifications, and project notes to make sure important items are measured, priced, and
          organized correctly. We understand how contractors, architects, builders, and developers
          use estimates for bidding, budgeting, procurement, and project planning. That is why our
          reports are easy to review and structured for real construction use. With accurate
          takeoffs, clear pricing, responsive communication, and reliable estimating support, we
          help you save time, reduce risk, and prepare stronger bids with more confidence.
        </p>
      </div>
    </section>
  );
}
