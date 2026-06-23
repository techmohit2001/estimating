'use client';

import { Cormorant_Garamond, Poppins } from 'next/font/google';
import {
  FaBuilding,
  FaCity,
  FaCode,
  FaGears,
  FaGraduationCap,
  FaHandHoldingMedical,
  FaHotel,
  FaIndustry,
  FaLandmark,
  FaServer,
  FaStore,
  FaUtensils,
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
  { label: 'Residential buildings', icon: FaBuilding },
  { label: 'Multi-family apartments', icon: FaCity },
  { label: 'Commercial offices', icon: FaBuilding },
  { label: 'Retail spaces', icon: FaStore },
  { label: 'Restaurants', icon: FaUtensils },
  { label: 'Hotels', icon: FaHotel },
  { label: 'Schools & universities', icon: FaGraduationCap },
  { label: 'Healthcare facilities', icon: FaHandHoldingMedical },
  { label: 'Warehouses', icon: FaWarehouse },
  { label: 'Industrial buildings', icon: FaIndustry },
  { label: 'Manufacturing facilities', icon: FaGears },
  { label: 'Data centers', icon: FaServer },
  { label: 'Mixed-use developments', icon: FaCode },
  { label: 'Government & public projects', icon: FaLandmark },
] as const;

function ProjectTypeCard({ label, icon: Icon }: { label: string; icon: IconType }) {
  return (
    <article className="flex items-center gap-3 rounded-xl bg-[#f2f2f2] px-4 py-3.5 sm:gap-3.5 sm:px-5 sm:py-4">
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
          Project
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        Types We Estimate
      </h2>

      <p
        className={`${poppins.className} mt-6 max-w-4xl text-[#303030] sm:mt-7`}
        style={bodyTextStyle}
      >
        We provide mechanical estimating services for different types of construction projects,
        including:
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-8 lg:grid-cols-3 lg:gap-4">
        {PROJECT_TYPES.map(({ label, icon }) => (
          <ProjectTypeCard key={label} label={label} icon={icon} />
        ))}
      </div>

      <p
        className={`${poppins.className} mt-6 max-w-4xl text-[#303030] sm:mt-8`}
        style={bodyTextStyle}
      >
        Each project type has different mechanical requirements. Our team reviews the drawings and
        specifications according to the project scope so your estimate reflects the actual work
        involved.
      </p>
    </div>
  );
}
