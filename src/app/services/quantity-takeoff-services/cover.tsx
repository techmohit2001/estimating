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

const TRADES = [
  'Concrete',
  'Masonry',
  'Drywall',
  'Flooring',
  'Painting',
  'Concrete',
  'Roofing',
  'Steel',
  'Lumber',
  'Doors',
  'Windows',
  'Millwork',
  'Finishes',
  'Plumbing',
  'Mechanical',
  'HVAC',
  'Electrical',
  'Sitework',
  'Excavation',
  'Excavation',
  'Paving',
  'Drainage',
  'General Construction Materials',
] as const;

export default function Cover() {
  return (
    <div className="w-full pt-2 pb-8 lg:pt-3 lg:pb-10">
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.1',
        }}
      >
        <span className="relative inline-block">
          Trades
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        We Cover
      </h2>

      <div
        className={`${poppins.className} mt-6 space-y-4 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
          Our <strong className="font-bold">quantity takeoff services</strong> cover multiple trades
          and CSI divisions. We prepare takeoffs for concrete, masonry, drywall, insulation,
          flooring, painting, roofing, steel, lumber, doors, windows, millwork, finishes, plumbing,
          mechanical, HVAC, electrical, sitework, excavation, paving, drainage, and general
          construction materials. This trade-wise approach makes your takeoff report easier to review
          and use. Instead of receiving mixed or unclear quantities, your team gets organized
          information by trade, material type, or scope. This helps contractors identify missing
          items, request vendor quotes, check subcontractor proposals, and prepare more complete
          construction estimates.
        </p>
        <p>
          Our <strong className="font-bold">blueprint takeoff services</strong> are especially helpful
          when your team needs to measure different trades from large drawing sets. We convert plans
          into practical quantity data so estimators, project managers, procurement teams, and vendors
          can work from the same material information. For plumbing{' '}
          <strong className="font-bold">scopes, plumbing estimating services</strong> can support pipe
          quantities, fixtures, valves, fittings, drains, water supply lines, gas lines, sleeves,
          hangers, and labor pricing after the material takeoff is completed.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
        {TRADES.map((trade, index) => (
          <span
            key={`${trade}-${index}`}
            className={`${poppins.className} rounded-md border border-[#d9d9d9] bg-[#f7f7f7] px-4 py-2 text-[14px] font-normal leading-snug text-[#666666] transition-colors hover:border-[#2997FF] hover:bg-[#e8f4ff] hover:text-[#2997FF] sm:px-[18px] sm:py-2.5 sm:text-[15px]`}
          >
            {trade}
          </span>
        ))}
      </div>
    </div>
  );
}
