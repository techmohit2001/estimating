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
            Reliable Construction Quantity Takeoff for Better Bids
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
          Accurate quantities are the foundation of every construction estimate. If the quantities
          are wrong, the final bid, vendor pricing, procurement plan, and project budget can also
          become unreliable. Contractors often lose valuable time reviewing large drawing sets,
          checking revisions, measuring items manually, and trying to meet tight bid deadlines. Our{' '}
          <strong className="font-bold">construction quantity takeoff</strong> support helps reduce
          that pressure by giving your team clean and organized quantity data. We review drawings,
          specifications, schedules, addenda, and scope notes to prepare takeoff reports that are
          easy to read and use. This helps contractors price work faster, request vendor quotes with
          confidence, and avoid missing important scope items. As a professional takeoff service
          company, we focus on drawing review, proper measurement, scope clarity, and internal
          checks before delivery. We do not make unrealistic claims. Our process is built around
          careful takeoff methods, trade understanding, and practical construction knowledge.
        </p>
      </div>
    </div>
  );
}
