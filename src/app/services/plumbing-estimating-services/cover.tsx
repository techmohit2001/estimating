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
        <strong className="font-bold">Estimating Buddies</strong> provides construction estimating
        services for a wide range of construction professionals. We support{' '}
        <strong className="font-bold">
          general contractors, subcontractors, builders, developers, project managers, and construction
          firms
        </strong>{' '}
        looking for accurate cost estimates and quantity takeoffs. Whether you are bidding on
        residential, commercial, industrial, or renovation projects, our estimating team delivers the
        reliable data needed to{' '}
        <strong className="font-bold">
          plan budgets, submit competitive bids, and manage project costs
        </strong>{' '}
        more effectively.
      </p>
    ),
  },

  {
    key: 'benefits',
    titleHighlight: 'Benefits of Professional',
    titleRest: 'Plumbing Estimating Services',
    body: (
      <>
        <p>
          Professional plumbing estimating helps contractors prepare accurate bids, control costs, and
          save valuable time. With reliable estimates, you can bid with confidence and improve project
          profitability.
        </p>
        <ul className="mt-5 list-disc space-y-3 pl-5">
          <li>Accurate material and labor calculations</li>
          <li>Reduced bidding errors and cost overruns</li>
          <li>Faster bid preparation and submission</li>
          <li>Better project budgeting and planning</li>
          <li>More time to focus on managing projects</li>
          <li>Increased chances of winning profitable bids</li>
        </ul>
      </>    ),
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
