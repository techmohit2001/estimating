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

export default function Solve() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      <div className="w-full">
        <div>
          <h2
            className={`${cormorantGaramond.className} text-[#111]`}
            style={{
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '45px',
              lineHeight: '1.15',
              textTransform: 'capitalize',
            }}
          >
            Reliable Electrical Cost Estimating for Better Bids
          </h2>
          <span
            className="mt-2 block h-1 w-14 rounded-sm bg-[#2997FF]"
            aria-hidden
          />
        </div>

        <p
          className={`${poppins.className} mt-6 text-[#303030]`}
          style={bodyTextStyle}
        >
          A strong electrical bid starts with a clear understanding of the drawings. Electrical
          plans often include lighting layouts, power plans, panel schedules, single-line diagrams,
          riser diagrams, fixture schedules, equipment connections, and specification notes. If
          these details are not reviewed properly, contractors can miss important materials, labor
          scope, and project requirements. Our electrical estimating services help reduce these risks
          by turning your electrical drawings into organized quantities and cost reports. We review
          your plans, specifications, schedules, addenda, and scope notes before preparing the
          takeoff and estimate. This helps you see what is included, what needs clarification, and
          where the major electrical cost areas are. As a professional electrical estimating
          company, we do not rely on unrealistic claims. Our approach is based on careful drawing
          review, detailed electrical quantity takeoff, practical cost breakdowns, and final
          quality checks before delivery. The goal is to give contractors clear estimating data they
          can use for bidding, budgeting, supplier pricing, and procurement.
        </p>
      </div>
    </div>
  );
}
