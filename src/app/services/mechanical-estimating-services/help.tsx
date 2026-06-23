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
      'We include material quantities and cost-related details for ductwork, piping, fittings, valves, insulation, dampers, diffusers, grilles, registers, supports, hangers, equipment, and other mechanical components. Material costs help contractors understand what needs to be purchased and how the project budget may be affected.',
  },
  {
    number: '02',
    title: 'Labor Costs',
    description:
      'Labor is a major part of mechanical cost estimating. We help organize labor-related scope so contractors can understand installation effort, project complexity, crew requirements, and cost impact. Labor assumptions may vary depending on the project type, system complexity, location, productivity, and installation conditions.',
  },
  {
    number: '03',
    title: 'Equipment Costs',
    description:
      'Mechanical systems often require major equipment such as AHUs, RTUs, pumps, chillers, boilers, exhaust fans, VAV boxes, fan coil units, unit heaters, and cooling towers. We identify equipment items from schedules and drawings so contractors can request vendor pricing or include budget pricing where needed.',
  },
  {
    number: '04',
    title: 'Quantity Takeoffs',
    description:
      'Our mechanical takeoff services include detailed quantity extraction from drawings. We calculate pipe lengths, duct lengths, fittings, valves, insulation, dampers, equipment counts, accessories, and other project-specific items. These takeoffs can also be combined with broader quantity takeoff services when you need multiple trades estimated together.',
  },
  {
    number: '05',
    title: 'Bid Summaries',
    description:
      'We prepare clear bid summaries that help contractors review the total estimated cost, major cost categories, material quantities, and trade-specific scope. A well-organized bid summary makes it easier to submit pricing, compare bids, and review scope before final submission.',
  },
  {
    number: '06',
    title: 'Scope Notes',
    description:
      'We can include scope notes, assumptions, exclusions, and clarification points where needed. This is helpful when drawings are incomplete, specifications are unclear, or certain items require confirmation before pricing.',
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

export default function Help() {
  return (
    <div className="w-full pb-8 lg:pb-10">
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
        Included in Our Mechanical Estimate?
      </h2>

      <p
        className={`${poppins.className} mt-6 max-w-4xl text-[#666666] sm:mt-7`}
        style={bodyTextStyle}
      >
        A mechanical estimate should be easy to review, easy to price, and useful for bid
        preparation. We organize your estimate so your team can understand the scope clearly and
        make faster decisions. Depending on the project requirements, your mechanical estimate may
        include the following:
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
