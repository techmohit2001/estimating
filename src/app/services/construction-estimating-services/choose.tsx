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
          Why Choose Our Construction Estimating Company?
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
          Choosing the right construction estimating company can help you save time, reduce risk,
          and improve bid preparation. Instead of spending hours measuring drawings manually, your
          team can focus on vendor pricing, client communication, project planning, and bid
          strategy. Our estimates are designed to be clear, detailed, and practical. We help you
          reduce missed quantities, understand cost items, review trade scope, and prepare stronger
          bid submissions. Whether you need commercial construction estimating, residential
          construction estimating, building estimating services, or pre construction estimating
          services, our team can support your project with organized estimating documents.
        </p>
      </div>
    </section>
  );
}
