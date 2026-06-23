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

const rowDescriptionStyle = {
  fontSize: '16px',
  lineHeight: '1.45',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const CLIENTS = [
  {
    number: '01',
    title: 'Mechanical Contractors',
    description:
      'Mechanical contractors use our estimates to prepare bids for HVAC, ductwork, piping, insulation, and equipment installation. We help them save time on manual takeoffs and review quantities before pricing.',
    imageUrl: '/services-mechanical-residential1.png',
    imageAlt: 'Mechanical contractors working on industrial piping and equipment',
  },
  {
    number: '02',
    title: 'Subcontractors',
    description:
      'Subcontractors often work under tight bid deadlines. Our estimating support helps them quickly understand the project scope, prepare pricing, and submit bids with better confidence.',
    imageUrl: '/services-mechanical-residential2.png',
    imageAlt: 'Subcontractor reviewing blueprints and documents at a desk',
  },
  {
    number: '03',
    title: 'General Contractors',
    description:
      'General contractors need clear mechanical estimates to compare subcontractor pricing, review MEP scope, check budgets, and avoid missing items during bid review. Our estimates help GCs understand mechanical costs at a practical level.',
    imageUrl: '/services-mechanical-residential3.png',
    imageAlt: 'General contractors reviewing project plans together in an office',
  },
  {
    number: '04',
    title: 'Engineers',
    description:
      'Engineers may need quantity and cost support during design review, budgeting, value engineering, or project planning. We help organize mechanical quantities and cost categories in a structured format.',
    imageUrl: '/services-mechanical-residential4.png',
    imageAlt: 'Engineer reviewing technical documents and cost spreadsheets',
  },
  {
    number: '05',
    title: 'Developers',
    description:
      'Developers need cost clarity before starting or approving a project. Our mechanical estimates help developers understand budget requirements for HVAC, piping, equipment, and related systems.',
    imageUrl: '/services-mechanical-residential5.png',
    imageAlt: 'Developers reviewing a 3D building model on a large screen',
  },
  {
    number: '06',
    title: 'Builders & Construction Companies',
    description:
      'Builders and construction companies use our estimates to plan budgets, compare vendor quotes, manage procurement, and prepare bids for residential, commercial, and industrial projects.',
    imageUrl: '/services-mechanical-residential6.png',
    imageAlt: 'Construction team reviewing technical diagrams on a site office monitor',
  },
] as const;

function ServeRow({
  number,
  title,
  description,
  imageUrl,
  imageAlt,
}: {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}) {
  return (
    <article className="flex flex-col gap-5 py-8 sm:flex-row sm:items-start sm:gap-6 lg:gap-8">
      <div className="relative h-[88px] w-[100px] shrink-0 overflow-hidden rounded-xl sm:h-[96px] sm:w-[108px] lg:h-[100px] lg:w-[112px]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100px, 112px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span
            className={`${poppins.className} text-[15px] font-semibold text-[#c8c8c8] sm:text-[16px]`}
            aria-hidden
          >
            {number}
          </span>
          <h3
            className={`${poppins.className} text-[#1a1a1a]`}
            style={{ fontSize: '17px', lineHeight: 1.35, fontWeight: 700 }}
          >
            {title}
          </h3>
        </div>
        <p
          className={`${poppins.className} mt-2 text-[#666666] sm:mt-2.5`}
          style={rowDescriptionStyle}
        >
          {description}
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
        }}
      >
        <span className="relative inline-block">
          Who
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        We Serve
      </h2>

      <p
        className={`${poppins.className} mt-6 max-w-4xl text-[#303030] sm:mt-7`}
        style={bodyTextStyle}
      >
        Our mechanical estimating services are designed for construction professionals who need fast,
        clear, and reliable estimates for bidding, budgeting, and project planning.
      </p>

      <div className="mt-2 divide-y divide-[#e8e8e8] border-t border-[#e8e8e8]">
        {CLIENTS.map((client) => (
          <ServeRow key={client.number} {...client} />
        ))}
      </div>
    </div>
  );
}
