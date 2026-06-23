'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
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
    title: 'Residential Quantity Takeoff Services',
    iconUrl: '/about-industries4.png',
    body: (
      <>
        Our residential{' '}
        <strong className="font-bold">quantity takeoff services</strong> support single-family homes,
        duplexes, townhomes, apartments, multifamily buildings, custom homes, remodels, and
        renovation projects. Residential projects may look simple, but material quantities can
        become detailed when multiple floors, roof types, wall assemblies, finishes, and MEP systems
        are involved. We prepare takeoffs for concrete, lumber, drywall, roofing, flooring, tiles,
        paint, doors, windows, insulation, cabinetry, plumbing fixtures, HVAC materials, and
        electrical items. Builders, remodelers, residential contractors, and developers can use
        these reports to price work, order materials, and control project budgets. A proper
        residential material takeoff helps reduce waste and supports better procurement planning.
        Instead of using rough square-foot assumptions, your team gets measured quantities from the
        actual drawings. This helps improve bid preparation and reduces avoidable confusion before
        construction starts.
      </>
    ),
  },
  {
    key: 'commercial',
    title: 'Commercial Quantity Takeoff Services',
    iconUrl: '/about-industries1.png',
    body: (
      <>
        Our commercial{' '}
        <strong className="font-bold">construction quantity takeoff services</strong> are built for
        offices, retail spaces, restaurants, hotels, schools, healthcare buildings, warehouses,
        tenant improvements, and mixed-use developments. Commercial projects usually involve larger
        drawing sets, multiple trades, detailed schedules, and strict bid deadlines. We review
        architectural, structural, MEP, civil, and finish drawings to prepare clear quantity
        reports. Contractors can use these reports to prepare bids, compare subcontractor pricing,
        request vendor quotes, and check scope coverage before submitting proposals. Commercial
        takeoffs may include concrete, masonry, steel, drywall, ceilings, flooring, millwork,
        roofing, doors, windows, mechanical systems, plumbing fixtures, electrical materials, and
        sitework. A detailed commercial material takeoff gives estimators a cleaner base for
        pricing and helps reduce missed quantities in complex projects.
      </>
    ),
  },
  {
    key: 'industrial',
    title: 'Industrial Quantity Takeoff Services',
    iconUrl: '/about-industries2.png',
    body: (
      <>
        Industrial projects require careful takeoff because they often include large structures, heavy
        materials, specialized systems, utility areas, equipment spaces, and strict project
        requirements. Our <strong className="font-bold">material takeoff services</strong> support
        warehouses, manufacturing facilities, production units, storage buildings, logistics centers,
        industrial plants, and utility-based buildings. These projects may include large concrete
        quantities, structural steel, roofing systems, wall panels, mechanical equipment, electrical
        systems, piping, drainage, sitework, and specialty materials. A small quantity error on an
        industrial project can affect procurement, budget planning, and construction scheduling.
        Our takeoff reports help contractors and project managers understand material requirements
        before pricing or purchasing. With organized quantities and marked-up drawings, your team
        can review project scope more clearly and plan resources with better control. For HVAC,
        ductwork, piping, equipment, insulation, valves, fittings, and supports,{' '}
        <strong className="font-bold">mechanical estimating services</strong> can help teams build a
        stronger cost breakdown after the takeoff stage.
      </>
    ),
  },
  {
    key: 'civil',
    title: 'Civil Construction Quantity Takeoff',
    iconUrl: '/about-industries3.png',
    body: (
      <>
        Our civil{' '}
        <strong className="font-bold">construction quantity takeoff services</strong> support
        sitework, earthwork, excavation, grading, backfill, roads, paving, curbs, sidewalks,
        drainage, utilities, concrete flatwork, and infrastructure-related scopes. Civil takeoffs
        need careful attention because quantities are often affected by site conditions, levels,
        grading plans, and utility layouts. We help contractors, developers, and civil project teams
        prepare quantity reports for bidding, budgeting, and planning. Civil takeoff items may
        include cut and fill quantities, trenching, aggregate base, asphalt, concrete, storm
        drainage, sanitary lines, water lines, and other site materials. A detailed civil takeoff
        helps reduce uncertainty before fieldwork begins. It supports better vendor pricing, labor
        planning, equipment planning, and bid preparation. This is especially useful when
        site-related costs form a major part of the overall construction budget.
      </>
    ),
  },
] as const;

function IndustryBlock({
  title,
  iconUrl,
  body,
}: {
  title: string;
  iconUrl: string;
  body: ReactNode;
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
