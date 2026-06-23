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
            What Are Electrical Estimating Services?
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
          <strong className="font-bold">Electrical estimating services</strong> help contractors
          calculate the expected cost of electrical work before bidding or construction begins.
          These services include reviewing electrical drawings, measuring quantities, preparing
          material lists, adding labor considerations, and creating organized cost reports. A proper
          electrical estimate may include lighting fixtures, switches, receptacles, conduit, wire,
          cable, panels, breakers, transformers, switchgear, feeders, grounding, supports,
          low-voltage systems, fire alarm components, data systems, and equipment connections. The
          purpose of <strong className="font-bold">electrical cost estimating</strong> is simple:
          help contractors understand the complete electrical scope before submitting a bid. Instead
          of relying on rough assumptions, your team gets a clear breakdown of quantities,
          materials, and cost areas that need attention. Electrical estimating also works closely
          with quantity takeoff services because every strong estimate starts with clear measured
          quantities. Once the electrical materials are counted and organized, the estimate becomes
          easier to price, review, and use for bid preparation.
        </p>
      </div>
    </div>
  );
}
