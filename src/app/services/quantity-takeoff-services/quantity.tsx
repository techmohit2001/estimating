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
            What Are Quantity Takeoff Services?
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
          Quantity takeoff services involve measuring and listing the materials, items, and
          quantities needed for a construction project. This may include square footage, linear
          footage, cubic yards, item counts, assemblies, fixtures, finishes, piping, ductwork,
          wiring, equipment, sitework quantities, and other construction materials based on the
          project scope. In simple words, a quantity takeoff answers one important question: how
          much material is needed for the project? Once quantities are measured, contractors can
          use them for vendor pricing, bid preparation, construction budgeting, material ordering,
          and procurement planning. Our{' '}
          <strong className="font-bold">construction material takeoff</strong> process helps reduce
          guesswork. Instead of preparing bids from assumptions, your team receives organized
          material quantities based on actual drawings and project documents. This is especially
          useful when the drawing set is large, deadlines are tight, or multiple trades are
          involved.
        </p>
      </div>
    </div>
  );
}
