'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Cormorant_Garamond, Poppins } from 'next/font/google';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

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

const headingTextStyle = {
  fontSize: '16px',
  lineHeight: '1.4',
  fontWeight: 700,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const PROJECT_TYPES = [
  {
    key: 'commercial',
    title: 'Commercial Electrical Estimating',
    iconUrl: '/about-industries1.png',
    body:
      'Our commercial electrical estimating services help contractors prepare detailed cost breakdowns for offices, retail spaces, restaurants, hotels, schools, healthcare facilities, warehouses, tenant improvements, and mixed-use buildings. Commercial electrical projects often include lighting layouts, power plans, panel schedules, conduit runs, wiring, switchgear, fire alarm systems, data points, security rough-ins, and low-voltage scope. We review the project drawings, specifications, fixture schedules, panel schedules, and electrical notes to prepare clear quantity takeoffs and pricing support. A detailed commercial electrical estimate helps contractors compare supplier quotes, understand labor needs, reduce missed items, and submit stronger bids with more confidence.',
  },
  {
    key: 'industrial',
    title: 'Industrial Electrical Estimating',
    iconUrl: '/about-industries2.png',
    body:
      'Our industrial electrical estimating support is designed for manufacturing facilities, production units, industrial warehouses, plants, utility buildings, logistics centers, and equipment-heavy projects. Industrial electrical work often includes larger power loads, transformers, feeders, panels, grounding systems, cable trays, controls, equipment connections, and distribution systems. These projects need careful review because one missed equipment connection, feeder run, or power distribution item can affect the entire project budget. We prepare organized electrical takeoffs and cost reports that help contractors understand material quantities, labor scope, procurement needs, and major cost drivers before submitting the bid.',
  },
  {
    key: 'residential',
    title: 'Residential Electrical Estimating',
    iconUrl: '/about-industries4.png',
    body:
      'Our residential electrical estimating services support single-family homes, multifamily buildings, apartments, townhomes, duplexes, custom homes, remodels, and renovation projects. Residential electrical scopes may include lighting fixtures, switches, receptacles, wiring, panels, breakers, grounding, smoke detectors, appliance connections, service equipment, and low-voltage points. A clear residential electrical estimate helps builders, electrical contractors, remodelers, and developers plan materials, review labor needs, and control project costs before construction begins. With detailed quantity takeoffs and organized cost breakdowns, your team can reduce guesswork, avoid missed electrical items, and prepare cleaner bids.',
  },
] as const;

function AccordionItem({
  title,
  iconUrl,
  body,
  isOpen,
  onToggle,
}: {
  title: string;
  iconUrl: string;
  body: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="overflow-hidden rounded-xl bg-[#f2f2f2] px-4 py-4 sm:px-5 sm:py-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <div
          className="flex h-11 w-14 shrink-0 items-center justify-center rounded-lg bg-[#2997FF] sm:h-12 sm:w-[60px]"
          aria-hidden
        >
          <Image
            src={iconUrl}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain brightness-0 invert"
          />
        </div>

        <h3
          className={`${poppins.className} min-w-0 flex-1 text-[#1a1a1a]`}
          style={headingTextStyle}
        >
          {title}
        </h3>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? `Collapse ${title}` : `Expand ${title}`}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e6f4ff] text-[#2997FF] transition-colors hover:bg-[#cce7ff]"
        >
          {isOpen ? (
            <IoChevronUp className="size-4" aria-hidden />
          ) : (
            <IoChevronDown className="size-4" aria-hidden />
          )}
        </button>
      </div>

      {isOpen && (
        <p
          className={`${poppins.className} mt-4 text-[#303030] sm:mt-5`}
          style={bodyTextStyle}
        >
          {body}
        </p>
      )}
    </article>
  );
}

export default function Industrial() {
  const [openKey, setOpenKey] = useState<string | null>('commercial');

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
          Electrical
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        Estimating Services by Project Type
      </h2>

      <div className="mt-8 space-y-4">
        {PROJECT_TYPES.map(({ key, title, iconUrl, body }) => (
          <AccordionItem
            key={key}
            title={title}
            iconUrl={iconUrl}
            body={body}
            isOpen={openKey === key}
            onToggle={() => setOpenKey((current) => (current === key ? null : key))}
          />
        ))}
      </div>
    </div>
  );
}
