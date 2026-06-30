'use client';

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

function SectionHeading({
  underlineWord,
  rest,
}: {
  underlineWord: string;
  rest: string;
}) {
  return (
    <h2
      className={`${cormorantGaramond.className} text-[#1a1a1a]`}
      style={{
        fontWeight: 700,
        fontStyle: 'italic',
        fontSize: '45px',
        lineHeight: '1.15',
        textTransform: 'capitalize',
      }}
    >
      <span className="relative inline-block">
        {underlineWord}
        <span
          className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
          style={{ background: brandGradient }}
          aria-hidden
        />
      </span>{' '}
      {rest}
    </h2>
  );
}

export default function Help() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      <SectionHeading
        underlineWord="Our"
        rest="Architectural Cost Estimating Services"
      />

      <p
        className={`${poppins.className} mt-6 text-[#303030]`}
        style={bodyTextStyle}
      >
        Our architectural estimating services are designed for real construction use. We do not
        prepare a basic list of random numbers. We review the project documents, calculate
        quantities, organize costs, and prepare a report that can support bidding, budgeting, and
        internal review. We estimate architectural scopes for residential, commercial, industrial,
        hospitality, healthcare, education, retail, and mixed-use projects. Our team can support
        early-stage budget estimates, design development estimates, bid estimates, renovation
        estimates, and construction cost estimates. Our architectural estimating support includes
        material cost estimates, labor cost estimates, finish takeoffs, opening schedules, ceiling
        takeoffs, flooring takeoffs, wall finish quantities, millwork estimates, and bid summaries.
        Each estimate is prepared according to the drawings and project requirements.
      </p>

      <div className="mt-10 sm:mt-12">
        <SectionHeading underlineWord="Architectural" rest="Quantity Takeoff" />

        <p
          className={`${poppins.className} mt-6 text-[#303030]`}
          style={bodyTextStyle}
        >
          A strong estimate starts with a detailed quantity takeoff. In architectural estimating,
          quantity takeoff means measuring, counting, and organizing all architectural items shown in
          the drawings. This includes floor areas, wall finishes, ceiling areas, doors, windows,
          frames, partitions, trims, casework, panels, and other architectural components. Our
          process connects directly with our{' '}
          <Link
            href="/services/quantity-takeoff-services"
            className="font-bold text-[#2997FF] transition-opacity hover:opacity-80"
          >
            Quantity Takeoff Services
          </Link>
          , where we measure project quantities in a structured and trade-wise format. For
          architectural scopes, this helps contractors and builders understand exactly what needs to
          be priced before submitting a bid. We review architectural plans, reflected ceiling plans,
          elevations, sections, room finish schedules, door schedules, window schedules, and
          specifications. Based on these documents, we calculate quantities clearly so the pricing
          stage becomes more reliable. A proper quantity takeoff reduces the risk of missing scope
          and helps create a stronger cost estimate.
        </p>
      </div>
    </div>
  );
}
