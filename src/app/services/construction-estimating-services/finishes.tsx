'use client';

import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
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

const brandBlue = '#2997FF';

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const SERVICES = [
  {
    key: 'drywall',
    title: 'Drywall Estimating',
    body: 'Our drywall estimating support helps contractors measure gypsum boards, partitions, ceilings, metal framing, insulation, taping, finishing, corner beads, and related materials from project drawings. A detailed drywall estimate helps reduce missed wall areas, incorrect board counts, and unclear labor scope before bid submission. This is useful for general contractors, drywall subcontractors, builders, and tenant improvement projects where interior wall systems directly affect project cost.',
  },
  {
    key: 'flooring',
    title: 'Flooring Estimating',
    body: 'Our flooring estimating support helps contractors measure carpet, tile, vinyl, hardwood, laminate, epoxy, and other floor finishes from project drawings and specifications. A detailed flooring estimate helps reduce missed areas, incorrect material quantities, and unclear installation scope before bid submission. This is useful for general contractors, flooring subcontractors, builders, and commercial or residential projects where finish selections directly affect project cost.',
  },
  {
    key: 'painting',
    title: 'Painting Estimating',
    body: 'Our painting estimating support helps contractors measure interior and exterior paint areas, prep work, primer coats, finish coats, ceiling painting, wall painting, specialty coatings, and related labor from project drawings. A detailed painting estimate helps reduce missed surfaces, incorrect gallon counts, and unclear prep scope before bid submission. This is useful for general contractors, painting subcontractors, builders, and renovation projects where finish quality directly affects project cost.',
  },
  {
    key: 'interior',
    title: 'Interior Estimating Services',
    body: 'Our interior estimating services cover a broader range of finish-related scopes including ceilings, walls, trim, doors, hardware, millwork, and specialty interior items from project documents. A complete interior estimate helps reduce missed scope items, unclear trade boundaries, and budget gaps before bid submission. This is useful for general contractors, interior subcontractors, designers, and tenant improvement projects where coordinated interior scopes directly affect project cost.',
  },
] as const;

function DoubleChevron({ expanded }: { expanded: boolean }) {
  const Icon = expanded ? IoChevronUp : IoChevronDown;

  return (
    <span className="flex shrink-0 flex-col items-center leading-none text-white" aria-hidden>
      <Icon className="h-3.5 w-3.5" />
      <Icon className="-mt-1 h-3.5 w-3.5" />
    </span>
  );
}

function AccordionCard({
  title,
  body,
  isOpen,
  onToggle,
}: {
  title: string;
  body: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="overflow-hidden rounded-xl">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-white ${
          isOpen ? 'rounded-t-xl' : 'rounded-xl'
        }`}
        style={{ background: brandBlue }}
      >
        <span
          className={`${poppins.className} font-semibold`}
          style={{ fontSize: '16px', lineHeight: '1.4' }}
        >
          {title}
        </span>
        <DoubleChevron expanded={isOpen} />
      </button>

      {isOpen && (
        <div
          className={`${poppins.className} rounded-b-xl bg-[#1a1a1a] px-5 py-4 text-white`}
          style={bodyTextStyle}
        >
          {body}
        </div>
      )}
    </article>
  );
}

export default function Finishes() {
  const [openKeys, setOpenKeys] = useState<string[]>(['drywall']);

  const toggle = (key: string) => {
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

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
          Interior &
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        Finishes Estimating Services
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {SERVICES.map(({ key, title, body }) => (
          <AccordionCard
            key={key}
            title={title}
            body={body}
            isOpen={openKeys.includes(key)}
            onToggle={() => toggle(key)}
          />
        ))}
      </div>
    </div>
  );
}
