'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Cormorant_Garamond, Poppins } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.15',
        }}
      >
        {title}
      </h2>
      <span
        className="mt-2 block h-[3px] w-14 rounded-full"
        style={{ background: brandGradient }}
        aria-hidden
      />
    </div>
  );
}

export default function Industrial() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      <SectionHeading title="Construction Cost Estimating Services for Better Bids" />

      <div className="mt-6 grid grid-cols-1 items-start gap-8 lg:mt-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        <p
          className={`${poppins.className} text-[#303030]`}
          style={bodyTextStyle}
        >
          Our architectural estimating support also works as part of complete construction cost
          estimating services. Contractors and builders need accurate architectural numbers to
          prepare bids, compare subcontractor pricing, and review project feasibility. A detailed
          architectural estimate helps general contractors check whether the bid includes all
          required finishes, openings, walls, ceilings, flooring, and interior details. It also
          helps subcontractors prepare better pricing for their specific scopes. As a professional
          construction estimating company, we understand that every bid needs clarity. Missed scope
          can reduce profit. Overpricing can make the bid less competitive. Our estimate helps
          balance accuracy, detail, and practical cost planning.
        </p>

        <div className="relative mx-auto h-[280px] w-full max-w-[520px] overflow-hidden rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] sm:h-[320px] lg:mx-0 lg:ml-auto lg:h-[360px] lg:max-w-none">
          <Image
            src="/services-plumbing-services.jpg"
            alt="Plumber working on pipes under a sink with a pipe wrench"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mt-10 sm:mt-12">
        <SectionHeading title="Coordination with Mechanical & Electrical Estimating" />

        <p
          className={`${poppins.className} mt-6 text-[#303030]`}
          style={bodyTextStyle}
        >
          Architectural work often connects with MEP scopes. For example, ceiling layouts may affect
          HVAC diffusers, lighting fixtures, access panels, and fire protection devices. Wall
          openings may affect ductwork, conduit routing, plumbing lines, and equipment placement.
          Interior layouts may also affect mechanical rooms, shafts, service areas, kitchens,
          bathrooms, and utility spaces. That is why architectural estimating becomes stronger when
          it is connected with related trade estimates. Along with architectural estimating, we also
          support{' '}
          <Link
            href="/services/mechanical-estimating-services"
            className="font-bold text-[#2997FF] transition-opacity hover:opacity-80"
          >
            Mechanical Estimating Services
          </Link>{' '}
          for HVAC, ductwork, piping, equipment, and mechanical systems. This helps contractors
          review how mechanical work interacts with ceilings, openings, equipment areas, and
          architectural layouts. We also provide{' '}
          <Link
            href="/services/electrical-estimating-services"
            className="font-bold text-[#2997FF] transition-opacity hover:opacity-80"
          >
            Electrical Estimating Services
          </Link>{' '}
          for lighting, power, conduits, panels, devices, low-voltage systems, and electrical
          fixtures. This is useful when architectural ceiling plans, wall layouts, and interior
          finishes need to be checked with electrical scope. This coordination helps reduce scope
          gaps and gives contractors a better understanding of the complete project cost.
        </p>
      </div>
    </div>
  );
}
