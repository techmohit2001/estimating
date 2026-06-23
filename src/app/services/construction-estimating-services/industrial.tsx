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

const headingTextStyle = {
  fontSize: '16px',
  lineHeight: '1.4',
  fontWeight: 700,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const INDUSTRIES = [
  {
    key: 'residential',
    title: 'Residential Construction Estimating',
    iconUrl: '/about-industries4.png',
    body: 'Our residential construction estimating services support single-family homes, multifamily apartments, townhomes, duplexes, custom homes, and renovation projects. Residential projects often look simple from the outside, but small mistakes in quantities can quickly affect the budget. Materials such as concrete, lumber, drywall, flooring, roofing, finishes, doors, windows, plumbing, and electrical items need careful measurement. We prepare detailed takeoffs and cost estimates that help builders, homeowners, developers, and contractors understand the expected project cost before construction begins. Whether you are preparing a bid, checking a budget, or comparing design options, our residential estimating support gives you a clear cost direction. This helps reduce guesswork and improves decision-making during the early project stage.',
  },
  {
    key: 'commercial',
    title: 'Commercial Construction Estimating',
    iconUrl: '/about-industries1.png',
    body: 'Our commercial construction estimating services are built for offices, retail spaces, restaurants, hotels, schools, healthcare buildings, warehouses, mixed-use buildings, and tenant improvement projects. Commercial projects usually involve multiple trades, tighter schedules, and more detailed specifications, so the estimate must be organized and easy to review. We help general contractors, subcontractors, developers, architects, and project owners prepare clear trade-wise estimates for bidding and budgeting. Our team reviews architectural, structural, MEP, and finish-related scopes to prepare a complete cost breakdown. This makes it easier to compare subcontractor pricing, review project scope, and submit stronger bids. Commercial construction estimating requires accuracy, speed, and clarity, and our process is designed to support all three.',
  },
  {
    key: 'industrial',
    title: 'Industrial Construction Estimating',
    iconUrl: '/about-industries2.png',
    body: 'Industrial projects often involve larger scopes, specialized systems, heavy materials, equipment areas, and strict project requirements. Our construction cost estimating support helps with warehouses, manufacturing facilities, production units, storage buildings, industrial plants, utility spaces, and logistics-related buildings. These projects may include concrete, steel, sitework, roofing, mechanical systems, electrical systems, process-related spaces, and large-scale utility coordination. Our estimating team prepares detailed quantity takeoffs and cost breakdowns so contractors and project teams can understand the major cost drivers. A clear estimate helps reduce risk during bidding and supports better planning for procurement, labor, and project scheduling.',
  },
  {
    key: 'civil',
    title: 'Civil Construction Estimating',
    iconUrl: '/about-industries3.png',
    body: 'Our civil construction estimating services support sitework, earthwork, excavation, grading, utilities, drainage, concrete work, roads, paving, sidewalks, curbs, and infrastructure-related projects. Civil scopes need careful review because quantities are often connected to site conditions, drawings, levels, and utility layouts. We help contractors and developers prepare takeoffs for materials, labor, and equipment-related cost items based on available project documents. Civil estimating is important during the early planning stage because site-related costs can heavily impact the total project budget. With clear quantity takeoffs and organized cost reports, your team can review project feasibility, prepare bid pricing, and reduce uncertainty before fieldwork starts.',
  },
] as const;

function IndustryBlock({
  title,
  iconUrl,
  body,
}: {
  title: string;
  iconUrl: string;
  body: string;
}) {
  return (
    <article>
      <div className="flex items-center gap-3">
        <div
          className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#e6f4ff]"
          aria-hidden
        >
          <Image
            src={iconUrl}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
        </div>
        <h3
          className={`${poppins.className} text-[#1a1a1a]`}
          style={headingTextStyle}
        >
          {title}
        </h3>
      </div>
      <p
        className={`${poppins.className} mt-4 text-[#303030]`}
        style={bodyTextStyle}
      >
        {body}
      </p>
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
        <span className="relative inline-block">
          Industries
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        We Serve
      </h2>

      <div className="mt-8 space-y-8">
        {INDUSTRIES.map(({ key, title, iconUrl, body }) => (
          <IndustryBlock key={key} title={title} iconUrl={iconUrl} body={body} />
        ))}
      </div>
    </div>
  );
}
