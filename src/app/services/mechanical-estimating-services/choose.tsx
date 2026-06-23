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
          Why Choose Us for Mechanical Estimating Services?
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
          Our <strong className="font-bold">mechanical estimating services</strong> help contractors
          bid with confidence through accurate takeoffs, detailed cost estimates, fast turnaround
          times, competitive pricing, and clear reporting. With experience in residential,
          commercial, and industrial projects, we support{' '}
          <strong className="font-bold">HVAC, ductwork, piping, and MEP estimating</strong> needs
          while delivering practical estimates based on project drawings, specifications, and scope
          requirements.
        </p>
      </div>
    </section>
  );
}
