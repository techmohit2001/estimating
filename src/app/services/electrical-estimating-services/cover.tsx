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
  weight: ['400', '600', '700'],
});

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

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
          Electrical
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        Scope We Estimate
      </h2>

      <p
        className={`${poppins.className} mt-6 max-w-5xl text-[#303030]`}
        style={bodyTextStyle}
      >
        Our <strong className="font-bold">electrical estimating services</strong> cover a wide range
        of electrical systems and project requirements. Depending on your drawings and
        specifications, we can prepare takeoffs and estimates for lighting, power, distribution,
        low-voltage, fire alarm, and site electrical scope. We estimate lighting fixtures, lighting
        controls, switches, receptacles, devices, conduit, wire, cable, raceways, panels, breakers,
        distribution boards, switchgear, transformers, feeders, branch circuits, grounding, bonding,
        fire alarm systems, data, telecom, security rough-ins, access control rough-ins, cable tray,
        supports, equipment connections, generators, backup power scope, exterior lighting, and site
        electrical work. This organized approach helps contractors review the project more clearly.
        Instead of working from scattered drawing notes, your team receives structured quantities
        and cost information that supports better bidding, procurement, and project planning.
      </p>

      <div className="relative mt-8 aspect-[25/9] w-full overflow-hidden rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:mt-10">
        <Image
          src="/services-electrical-cover.png"
          alt="Electrical testing equipment and wiring schematics"
          fill
          className="object-cover"
          sizes="(max-width: 1400px) 100vw, 1400px"
        />
      </div>
    </div>
  );
}
