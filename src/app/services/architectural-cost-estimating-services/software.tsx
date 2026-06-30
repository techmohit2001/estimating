'use client';

import { Cormorant_Garamond, Poppins } from 'next/font/google';
import {
  FaBuilding,
  FaCity,
  FaHandHoldingMedical,
  FaHotel,
  FaHouse,
  FaScrewdriverWrench,
  FaStore,
  FaWarehouse,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';

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

const cardLabelStyle = {
  fontSize: '16px',
  lineHeight: '1.4',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const PROJECT_TYPES = [
  { label: 'Custom Homes & Villas', icon: FaHouse },
  { label: 'Apartments / Multi-Family Buildings', icon: FaCity },
  { label: 'Residential Additions & Remodeling', icon: FaScrewdriverWrench },
  { label: 'Commercial Offices', icon: FaBuilding },
  { label: 'Retail & Restaurants', icon: FaStore },
  { label: 'Hotels', icon: FaHotel },
  { label: 'Healthcare Spaces', icon: FaHandHoldingMedical },
  { label: 'Warehouses & Tenant Improvements', icon: FaWarehouse },
] as const;

function SectionHeading({ title, underlineWord }: { title: string; underlineWord: string }) {
  const parts = title.split(underlineWord);
  const hasUnderline = parts.length === 2;

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
      {hasUnderline ? (
        <>
          <span className="relative inline-block">
            {underlineWord}
            <span
              className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
              style={{ background: brandGradient }}
              aria-hidden
            />
          </span>
          {parts[1]}
        </>
      ) : (
        title
      )}
    </h2>
  );
}

function ProjectTypeCard({ label, icon: Icon }: { label: string; icon: IconType }) {
  return (
    <article className="flex items-center gap-3 rounded-xl border border-[#e8e8e8] bg-[#f8f9fa] px-4 py-3.5 sm:gap-3.5 sm:px-5 sm:py-4">
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#e6f4ff] sm:size-11"
        aria-hidden
      >
        <Icon className="text-lg text-[#2997FF] sm:text-xl" />
      </div>
      <p className={`${poppins.className} text-[#1a1a1a]`} style={cardLabelStyle}>
        {label}
      </p>
    </article>
  );
}

export default function Software() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      <SectionHeading title="Project Types We Estimate" underlineWord="Project" />

      <p
        className={`${poppins.className} mt-6 max-w-5xl text-[#303030] sm:mt-7`}
        style={bodyTextStyle}
      >
        We provide architectural estimating services for different project types &amp; building
        categories. Each project has different cost drivers, so we review the drawings according to
        the actual scope instead of using one general method for every project. We provide
        architectural estimating services for different types of construction projects, including:
      </p>

      <p
        className={`${poppins.className} mt-5 max-w-5xl font-bold text-[#303030] sm:mt-6`}
        style={{ ...bodyTextStyle, fontWeight: 700 }}
      >
        Here are the most important / most common project types to keep (drop the rest):
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-8">
        {PROJECT_TYPES.map(({ label, icon }) => (
          <ProjectTypeCard key={label} label={label} icon={icon} />
        ))}
      </div>

      <div className="mt-10 sm:mt-12">
        <SectionHeading title="Who We Serve" underlineWord="Who" />

        <p
          className={`${poppins.className} mt-6 max-w-5xl text-[#303030] sm:mt-7`}
          style={bodyTextStyle}
        >
          Our architectural cost estimating services are built for construction professionals and
          project stakeholders who need clear cost information before making decisions. We work with
          general contractors who need bid-ready estimates and scope breakdowns. We support
          subcontractors who need accurate takeoffs and pricing support for architectural trade
          packages. We help architects and designers understand the cost impact of their design
          decisions. We also assist builders, developers, homeowners, and property owners who need
          budget clarity before construction starts. Every client uses an estimate differently. Some
          need it for bidding. Some need it for budget approval. Some need it for design comparison.
          Some need it for subcontractor review. That is why we prepare architectural estimates in a
          practical format that fits real project needs.
        </p>
      </div>
    </div>
  );
}
