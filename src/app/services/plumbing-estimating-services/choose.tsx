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
            At Estimating Buddies, we provide accurate plumbing estimating services that help contractors prepare reliable bids and make informed decisions. Our team focuses on detailed quantity takeoffs, timely delivery, and clear reporting to support successful residential and commercial projects. With practical industry experience and dependable estimating support, we help you save time and bid with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
