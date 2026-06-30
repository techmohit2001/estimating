'use client';

import Image from 'next/image';
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

export default function Quantity() {
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
            <span className="relative inline-block">
              Why
              <span
                className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
                style={{ background: brandGradient }}
                aria-hidden
              />
            </span>{' '}
            Architectural Cost Estimating Matters
          </h2>
        </div>

        <p
          className={`${poppins.className} mt-6 text-[#303030]`}
          style={bodyTextStyle}
        >
          Architectural drawings contain many details across different sheets. The scope may be
          shown in floor plans, elevations, sections, reflected ceiling plans, room finish schedules,
          specifications, and general notes. If these details are not reviewed carefully, important
          items can be missed during bidding.{' '}
          <strong className="font-bold">Accurate architectural cost estimating</strong> helps
          contractors prepare more complete bids, helps architects understand design-cost impact,
          and helps owners plan budgets with better clarity. It also helps reduce disputes during
          construction because the scope is properly reviewed before pricing. A detailed estimate
          is useful because it helps you understand material quantities, labor requirements, finish
          costs, and possible budget risks before work starts. It also supports value engineering
          when the project team wants to compare different material options or reduce cost without
          affecting the main design intent. In simple words, architectural estimating gives you cost
          clarity before construction starts.
        </p>

        <div className="relative mt-8 aspect-[25/9] w-full overflow-hidden rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:mt-10">
          <Image
            src="/services-cost-quantity.png"
            alt="Construction professionals reviewing architectural blueprints and cost data at a building site"
            fill
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
        </div>
      </div>
    </div>
  );
}
