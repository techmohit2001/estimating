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
          Why Choose Our Electrical Estimating Company?
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
          At Estimating Buddies, we help contractors save time, reduce missed scope, and prepare
          accurate electrical bids with confidence. Our team reviews drawings, performs detailed
          quantity takeoffs, and organizes material and cost data in a clear, easy-to-use format.
          Whether you need{' '}
          <strong className="font-bold">
            commercial, residential, or industrial electrical estimating services
          </strong>
          , we provide reliable estimating support that helps streamline bidding and project
          planning. With a strong understanding of overall construction costs, we ensure electrical
          estimates align with the broader project budget, helping you make informed decisions and
          submit competitive bids.
        </p>
      </div>
    </section>
  );
}
