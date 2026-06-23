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
  'Insulation',
  'Millwork',
  'Finishes',
  'Plumbing',
  'Mechanical',
  'Electrical',
  'HVAC',
  'Excavation',
  'Sitework',
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
          We provide construction estimating services across multiple trades and CSI divisions. Our
          trade coverage includes{' '}
          <strong className="font-bold">
            concrete, masonry, drywall, flooring, painting, roofing, steel, lumber, doors, windows,
            insulation, millwork, finishes, plumbing, mechanical, electrical, HVAC, excavation,
            sitework, and general construction materials.
          </strong>
        </p>
        <p>
          This trade-wise estimating approach helps contractors review the project in a cleaner way.
          Instead of mixing all items into one unclear cost sheet, we organize quantities and costs
          by scope wherever possible. This makes it easier to identify missing items, check
          subcontractor pricing, and prepare a more complete bid package. For mechanical scope
          planning, our team can also support contractors with{' '}
          <strong className="font-bold">HVAC estimating services</strong> for ductwork, equipment,
          air distribution, and related system quantities.
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
