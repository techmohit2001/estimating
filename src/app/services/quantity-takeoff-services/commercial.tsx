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

export default function Commercial() {
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
            Benefits of Our Material Takeoff Services
          </h2>
          <span
            className="mt-2 block h-1 w-14 rounded-sm bg-[#2997FF]"
            aria-hidden
          />
        </div>

        <div
          className={`${poppins.className} mt-6 space-y-5 text-[#303030]`}
          style={bodyTextStyle}
        >
          <p>
            A detailed{' '}
            <strong className="font-bold">construction material takeoff</strong> helps reduce the
            risk of missed materials, over-ordering, under-ordering, and budget confusion.
            Contractors often work under pressure, and manual quantity measurement can become
            time-consuming when drawings are large or multiple trades are involved. With our{' '}
            <strong className="font-bold">quantity takeoff services</strong>, your team can prepare
            bids faster, review scope more clearly, and request vendor quotes with better material
            data. This helps improve pricing accuracy, procurement planning, and bid preparation.
          </p>
          <p>
            Our takeoff support also helps during pre-construction planning. Developers and builders
            can understand material requirements earlier, while subcontractors can use
            trade-specific takeoffs to price their scope with more confidence. A clean takeoff
            report helps reduce confusion between drawings, specifications, and actual project
            needs. For contractors who need complete cost reports after quantity measurement,{' '}
            <strong className="font-bold">construction estimating services</strong> can help convert
            takeoff quantities into material costs, labor costs, equipment costs, and bid-ready
            estimate sheets.
          </p>
        </div>
      </div>
    </div>
  );
}
