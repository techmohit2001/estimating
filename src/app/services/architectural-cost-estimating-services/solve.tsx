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
            What Is Architectural Cost Estimating?
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
          Architectural cost estimating is the process of calculating the expected cost of
          architectural building elements based on drawings, design documents, specifications, and
          project scope. It includes quantity takeoff, material pricing, labor calculation, finish
          review, and cost report preparation. A professional architectural estimate helps answer
          important project questions. How much flooring is required? What is the cost of doors and
          windows? Which finish items affect the budget most? Are all wall types, ceiling systems,
          and interior details included? Is the bid complete enough to submit with confidence? This
          is why architectural estimating is an important part of complete cost estimating services.
          If architectural items are missed in the estimate, the final project budget can change
          quickly. A small missed detail in a finish schedule, elevation note, or door hardware
          requirement can affect the contractor&apos;s bid and profit margin.
        </p>
      </div>
    </div>
  );
}
