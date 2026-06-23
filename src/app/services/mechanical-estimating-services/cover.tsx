'use client';

import { Cormorant_Garamond, Poppins } from 'next/font/google';
import { FaCheck } from 'react-icons/fa6';

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

const itemTextStyle = {
  fontSize: '16px',
  lineHeight: '1.5',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const SYSTEMS_COLUMN_1 = [
  'HVAC systems',
  'Exhaust systems',
  'Chilled water piping',
  'Condenser water piping',
  'Gas piping',
  'Process piping',
  'Valves & accessories',
  'Pipe insulation',
  'Hangers & supports',
  'Grilles, registers, & diffusers',
] as const;

const SYSTEMS_COLUMN_2 = [
  'Ductwork systems',
  'Ventilation systems',
  'Hot water piping',
  'Steam piping',
  'Hydronic piping',
  'Pipe fittings',
  'Duct insulation',
  'Mechanical equipment',
  'Dampers & louvers',
  'Pumps, boilers, chillers, & fans',
] as const;

function ChecklistItem({ title }: { title: string }) {
  return (
    <li className={`${poppins.className} flex items-center gap-3`}>
      <span
        className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#2997FF] text-white"
        aria-hidden
      >
        <FaCheck className="text-[10px]" />
      </span>
      <span className="text-[#333333]" style={itemTextStyle}>
        {title}
      </span>
    </li>
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
          lineHeight: '1.1',
        }}
      >
        <span className="relative inline-block">
          Mechanical
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        Systems We Estimate
      </h2>

      <div
        className={`${poppins.className} mt-5 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
          Our estimates may include a wide range of mechanical systems and components, such as:
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-12">
        <ul className="space-y-3.5">
          {SYSTEMS_COLUMN_1.map((title) => (
            <ChecklistItem key={title} title={title} />
          ))}
        </ul>
        <ul className="space-y-3.5">
          {SYSTEMS_COLUMN_2.map((title) => (
            <ChecklistItem key={title} title={title} />
          ))}
        </ul>
      </div>

      <div
        className={`${poppins.className} mt-8 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
          This detailed coverage helps contractors prepare a complete mechanical bid instead of
          relying on rough assumptions.
        </p>
      </div>
    </div>
  );
}
