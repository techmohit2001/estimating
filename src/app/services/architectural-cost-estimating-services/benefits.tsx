'use client';

import { Cormorant_Garamond, Poppins } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

export default function Benefits() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.15',
          textTransform: 'capitalize',
        }}
      >
        <span className="relative inline-block">
          Benefits
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        of Professional Architectural Cost Estimating
      </h2>

      <p
        className={`${poppins.className} mt-6 text-[#303030]`}
        style={bodyTextStyle}
      >
        Professional architectural estimating gives you more control over your budget and bidding
        process. Instead of relying on rough assumptions, you get a detailed estimate based on
        drawings, quantities, and scope review. It helps contractors save time during bid
        preparation and reduces the risk of missing important items. It helps builders and
        developers plan budgets more realistically. It helps architects make better design-cost
        decisions. It also helps owners understand where the money will be spent before
        construction begins. The main benefits include better cost clarity, improved bid accuracy,
        reduced budget risk, faster preconstruction planning, and better control over materials and
        labor.
      </p>
    </div>
  );
}
