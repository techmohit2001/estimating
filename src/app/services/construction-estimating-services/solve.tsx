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
            Reliable Construction Cost Estimating for Better Project Decisions
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
          Every successful project starts with a clear estimate. Contractors and project teams often
          work under tight bid deadlines, incomplete drawings, changing addenda, and rising material
          costs. Without a detailed estimate, it becomes difficult to price the project correctly,
          protect margins, and submit a competitive bid. Our construction cost estimating process is
          built to reduce these problems. We review your drawings, specifications, scope notes, and
          trade requirements before preparing the takeoff and cost breakdown. This helps you see
          what is included, what may need clarification, and where the major cost areas are. As a
          professional{' '}
          <strong className="font-bold">construction estimation company</strong>, we do not rely on
          unrealistic claims like &apos;100% accurate.&apos; Instead, we focus on a practical and
          reliable method: detailed drawing review, clean quantity takeoff, local pricing inputs
          where applicable, and final quality checks before delivery.
        </p>
      </div>
    </div>
  );
}
