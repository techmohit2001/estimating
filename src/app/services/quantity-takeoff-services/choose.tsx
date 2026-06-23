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
          Why Choose Our Takeoff Service Company?
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
          Choosing the right takeoff service company helps you save time, reduce manual work, and
          improve bid preparation. Instead of spending hours measuring every drawing internally,
          your team can focus on pricing strategy, vendor coordination, client communication, and
          project planning. We focus on organized reporting, trade-wise breakdowns, marked-up
          drawings, and clear quantity summaries. This helps your team review quantities faster,
          compare vendor quotes, prepare cost estimates, and reduce avoidable omissions. Whether
          you need a full project takeoff or a single-trade{' '}
          <strong className="font-bold">construction material takeoff</strong>, we can support your
          team with clear and practical deliverables.
        </p>

        <p
          className={`${poppins.className} mt-4 text-[#303030]`}
          style={bodyTextStyle}
        >
          Our <strong className="font-bold">material takeoff services</strong> are useful for
          bidding, budgeting, procurement, change order review, and pre-construction planning. You
          get quantity data that is easy to understand and ready to use.
        </p>
      </div>
    </section>
  );
}
