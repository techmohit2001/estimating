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

const cardBodyStyle = {
  fontSize: '15px',
  lineHeight: '1.65',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const INCLUDED_ITEMS = [
  {
    number: '01',
    title: 'Material Costs',
    description:
      'We include material quantities and cost details for flooring, ceilings, walls, finishes, doors, windows, drywall, trims, panels, millwork, and other architectural items. This helps contractors understand what needs to be priced before bidding or procurement.',
  },
  {
    number: '02',
    title: 'Labor Costs',
    description:
      'We prepare labor cost estimates based on the project scope, installation requirements, finish details, and construction complexity. This helps you review expected labor expenses clearly before submitting the final bid.',
  },
  {
    number: '03',
    title: 'Quantity Takeoffs',
    description:
      'Our architectural quantity takeoffs cover flooring areas, ceiling areas, wall finishes, doors, windows, frames, hardware, partitions, insulation, trims, panels, millwork, and casework. The takeoff gives you a clear material breakdown from the drawings.',
  },
  {
    number: '04',
    title: 'Openings & Interior Items',
    description:
      'We review door schedules, window schedules, frames, hardware, millwork, casework, and interior construction items carefully so important architectural details are not missed during estimating.',
  },
  {
    number: '05',
    title: 'Bid Summaries',
    description:
      'We prepare clean bid summaries that show the total estimated cost, major scope items, material costs, labor costs, and important pricing details. This makes the estimate easier to review before proposal submission.',
  },
  {
    number: '06',
    title: 'Scope Notes',
    description:
      'We provide clear scope notes, assumptions, exclusions, and clarifications to ensure complete transparency. Any missing or unclear information in the drawings is clearly highlighted for review. Our reports are organized, easy to understand, and help support informed project decisions.',
  },
] as const;

function IncludedCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="group rounded-2xl border border-[#e5e5e5] bg-white px-6 py-6 transition-all duration-300 ease-out hover:border-[#2997FF] hover:bg-[#f0f7ff] sm:px-7 sm:py-7">
      <div className="flex items-center gap-3 sm:gap-4">
        <span
          className={`${poppins.className} inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2997FF] text-[13px] font-bold text-white sm:size-11 sm:text-[14px]`}
          aria-hidden
        >
          {number}
        </span>
        <h3
          className={`${poppins.className} text-[#1a1a1a]`}
          style={{ fontSize: '17px', lineHeight: 1.3, fontWeight: 700 }}
        >
          {title}
        </h3>
      </div>
      <p
        className={`${poppins.className} mt-4 text-[#666666] sm:mt-5`}
        style={cardBodyStyle}
      >
        {description}
      </p>
    </article>
  );
}

export default function Cover() {
  return (
    <div className="w-full pt-2 pb-8 lg:pt-3 lg:pb-10">
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.15',
        }}
      >
        <span className="relative inline-block">
          What&apos;s
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        Included in Our Architectural Estimate?
      </h2>

      <p
        className={`${poppins.className} mt-6 max-w-4xl text-[#666666] sm:mt-7`}
        style={bodyTextStyle}
      >
        Every project is different, so the final estimate depends on the drawings, specifications,
        and required scope. However, our architectural cost estimate usually includes the major items
        needed for bidding and budgeting. A typical architectural estimate may include:
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-6 xl:gap-7">
        {INCLUDED_ITEMS.map((item) => (
          <IncludedCard
            key={item.number}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
