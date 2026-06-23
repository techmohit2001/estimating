'use client';

import type { ReactNode } from 'react';
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

const SECTIONS = [
  {
    key: 'intro',
    titleHighlight: 'Plumbing',
    titleRest: 'Estimating Services',
    body: (
      <p>
        Plumbing costs add up fast when items get missed-pipe sizes, fittings, fixtures, valves,
        supports, specialties, and equipment. Our{' '}
        <strong className="font-bold">plumbing estimating services</strong> turn your drawings and
        specs into clear quantities and organized pricing support, so you can bid and plan with fewer
        surprises.
      </p>
    ),
  },
  {
    key: 'takeoff',
    titleHighlight: 'Plumbing',
    titleRest: 'Quantity Takeoff',
    body: (
      <p>
        Our <strong className="font-bold">plumbing quantity takeoff</strong> provides a detailed
        breakdown of plumbing materials required for the project. We quantify pipes by size and
        length, fittings, valves, fixtures, drains, vents, cleanouts, carriers, hangers, sleeves,
        insulation, and specialty items. If information is missing, we list assumptions clearly so
        your team can confirm before final pricing.
      </p>
    ),
  },
  {
    key: 'material-labor',
    titleHighlight: 'Material',
    titleRest: 'and Labor Cost Estimating',
    body: (
      <p>
        We organize <strong className="font-bold">material costs</strong> in a practical format so
        you can review and compare supplier pricing quickly (pipe types, fixtures, valves,
        equipment, insulation, and accessories). We also estimate{' '}
        <strong className="font-bold">labor</strong> based on the scope and installation complexity
        shown in the documents, and separate material/labor where needed to make bid adjustments
        easier.
      </p>
    ),
  },
  {
    key: 'bid',
    titleHighlight: 'Plumbing',
    titleRest: 'Bid Estimates',
    body: (
      <p>
        Our <strong className="font-bold">plumbing bid estimates</strong> are built for real bid
        submissions-clean quantities, cost structure, and scope notes so you can review coverage fast
        and reduce missed items before you submit.
      </p>
    ),
  },
  {
    key: 'included',
    titleHighlight: "What's Included in Our",
    titleRest: 'Plumbing Estimate',
    body: (
      <ul className="list-disc space-y-3 pl-5">
        <li>Pipe lengths by size, fittings, valves, and accessories</li>
        <li>Fixtures, drains, vents, cleanouts, and carriers</li>
        <li>Equipment like water heaters, pumps, backflow (if shown)</li>
        <li>Supports, sleeves, insulation, and specialties</li>
        <li>Scope notes, assumptions, exclusions, and clarifications</li>
      </ul>
    ),
  },
  {
    key: 'who-we-serve',
    titleHighlight: 'Who',
    titleRest: 'We Serve',
    body: (
      <p>
        We support{' '}
        <strong className="font-bold">
          plumbing contractors, general contractors, builders, and developers
        </strong>{' '}
        with estimating for projects across the <strong className="font-bold">USA and Canada</strong>.
      </p>
    ),
  },
  {
    key: 'process',
    titleHighlight: 'Our Plumbing',
    titleRest: 'Estimating Process',
    body: (
      <ol className="list-decimal space-y-4 pl-5">
        <li>
          <strong className="font-bold">Document Review:</strong> We review your plumbing drawings,
          specifications, fixture schedules, riser diagrams, details, and addenda to understand the
          complete project scope.
        </li>
        <li>
          <strong className="font-bold">Scope Identification:</strong> Our team identifies all plumbing
          systems, materials, quantities, equipment, and possible missing information before starting
          the takeoff.
        </li>
        <li>
          <strong className="font-bold">Plumbing Quantity Takeoff:</strong> We measure pipe runs,
          count fittings, identify valves, review fixtures, calculate equipment quantities, and
          organize all required plumbing items.
        </li>
        <li>
          <strong className="font-bold">Cost Estimation:</strong> We prepare a clear estimate with
          material costs, labor costs, equipment pricing, and complete plumbing scope details based on
          the measured quantities.
        </li>
        <li>
          <strong className="font-bold">Final Estimate Delivery:</strong> After quality checking for
          missing items, scope gaps, calculation issues, and formatting errors, we deliver the final
          estimate with quantities, costs, bid summary, assumptions, exclusions, and notes.
        </li>
      </ol>
    ),
  },
  {
    key: 'benefits',
    titleHighlight: 'Benefits of Professional',
    titleRest: 'Plumbing Estimating Services',
    body: (
      <p>
        Professional plumbing estimating helps contractors save time, reduce bid errors, and prepare
        more reliable proposals. Instead of spending hours manually measuring drawings, your team can
        focus on client communication, project planning, supplier coordination, and bid strategy. A
        detailed estimate gives you better cost clarity before submitting the bid. It helps identify
        material quantities, labor requirements, equipment needs, and possible missing scope. This
        reduces the risk of underpricing, overpricing, and last-minute bid confusion. For growing
        plumbing contractors and general contractors, outsourcing estimating work can also improve
        productivity. You can bid on more projects while keeping your internal team focused on active
        jobs.
      </p>
    ),
  },
] as const;

function SectionHeading({
  titleHighlight,
  titleRest,
}: {
  titleHighlight: string;
  titleRest: string;
}) {
  return (
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
        {titleHighlight}
        <span
          className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
          style={{ background: brandGradient }}
          aria-hidden
        />
      </span>{' '}
      {titleRest}
    </h2>
  );
}

function ContentBlock({
  titleHighlight,
  titleRest,
  body,
}: {
  titleHighlight: string;
  titleRest: string;
  body: ReactNode;
}) {
  return (
    <article>
      <SectionHeading titleHighlight={titleHighlight} titleRest={titleRest} />
      <div
        className={`${poppins.className} mt-5 text-[#303030]`}
        style={bodyTextStyle}
      >
        {body}
      </div>
    </article>
  );
}

export default function Cover() {
  return (
    <div className="w-full pt-2 pb-8 lg:pt-3 lg:pb-10">
      <div className="space-y-8">
        {SECTIONS.map((section) => (
          <ContentBlock
            key={section.key}
            titleHighlight={section.titleHighlight}
            titleRest={section.titleRest}
            body={section.body}
          />
        ))}
      </div>
    </div>
  );
}
