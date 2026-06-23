'use client';

import Image from 'next/image';
import { Cormorant_Garamond, Poppins } from 'next/font/google';

/** Logo image path — apni logo file ka path yahan update karein (public folder se, e.g. /icons/your-logo.png) */
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
  'Sanitary Waste Piping',
  'Storm Drainage',
  'Fixtures & Trim',
  'Valves & Specialty Items',
  'Gas Piping',
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

export default function Residential() {
  return (
    <div className="w-full pt-2 pb-8 lg:pt-3 lg:pb-10">
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.1',
          textTransform: 'capitalize',
        }}
      >
        <span className="relative mt-1 inline-block">
        What Are Plumbing Estimating Services?
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
        Plumbing estimating services involve calculating the expected cost of plumbing work in a construction project. This includes measuring pipe lengths, 
        counting fittings and valves, reviewing fixture schedules, identifying equipment, calculating material quantities, estimating labor, and preparing a 
        complete cost report. A plumbing estimate may include domestic water piping, sanitary waste, vent piping, storm drainage, gas piping, condensate drains, 
        floor drains, roof drains, cleanouts, pumps, water heaters, backflow preventers, fixtures, hangers, supports, insulation, and specialty plumbing items. 
        The final scope depends on the project drawings and specifications. Professional plumbing estimating helps reduce guesswork. Instead of relying on rough 
        measurements or last-minute pricing, you get a clear estimate based on project documents. This helps contractors submit stronger bids, reduce missed items, 
        and improve cost control before construction starts.
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
