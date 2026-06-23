'use client';

import Image from 'next/image';
import { Cormorant_Garamond, Poppins } from 'next/font/google';

const SERVICE_CARD_ICON = '/services-plumbing1.png';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const SERVICES = [
  'Water Supply Piping',
  'Sanitary & Vent Takeoff',
  'Storm Drain Takeoff',
  'Fixtures & Trim Counts',
  'Valves & Specialty Items',
  'Equipment & Connections',
] as const;

const cardTextStyle = {
  fontSize: '16px',
  lineHeight: '1.4',
  fontWeight: 400,
} as const;

function ServiceCard({ title }: { title: string }) {
  return (
    <article className="flex h-[72px] overflow-hidden rounded-md border border-[#e5e5e5] sm:h-[76px]">
      <div
        className="flex w-[68px] shrink-0 items-center justify-center bg-[#2997FF] sm:w-[72px]"
        aria-hidden
      >
        <Image
          src={SERVICE_CARD_ICON}
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
        />
      </div>
      <div
        className={`${poppins.className} flex flex-1 items-center bg-[#e0e0e0] px-4`}
      >
        <p className="text-[#333333]" style={cardTextStyle}>
          {title}
        </p>
      </div>
    </article>
  );
}

export default function Industrial() {
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
        <span className="relative mt-1 inline-block">
        Plumbing Takeoff Services
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.5em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>
      </h2>

      <div
        className={`${poppins.className} mt-5 space-y-4 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
        A strong plumbing estimate starts with a detailed plumbing takeoff. Plumbing takeoff is the process of measuring and counting all plumbing items shown 
        in the project drawings. This includes pipe lengths, fittings, valves, fixtures, drains, vents, cleanouts, supports, hangers, equipment, and accessories. 
        We review the project documents carefully and organize the takeoff by system wherever possible. This makes it easier to review domestic water, sanitary waste, 
        vent piping, storm drainage, gas piping, and equipment separately. A clean takeoff helps contractors price the scope more accurately and avoid confusion 
        during bid preparation. A detailed plumbing takeoff also supports material procurement. When quantities are clear, contractors can request supplier 
        pricing, compare vendors, and reduce the risk of ordering too much or too little material.
      </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {SERVICES.map((title) => (
          <ServiceCard key={title} title={title} />
        ))}
      </div>
    </div>
  );
}
