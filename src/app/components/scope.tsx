'use client';

import { Cormorant_Garamond, Poppins } from 'next/font/google';
import type { ReactNode } from 'react';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const ICON_WRAPPER =
  'relative inline-flex h-[96px] w-[96px] items-center justify-center sm:h-[112px] sm:w-[112px] lg:h-[120px] lg:w-[120px]';

const STROKE = '#2d2d2d';
const SW = 1.4;

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-[#2997FF] text-white shadow-sm sm:size-8">
      {children}
    </span>
  );
}

function ProjectReviewIcon() {
  return (
    <span className={ICON_WRAPPER}>
      <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden>
        {/* scroll curls */}
        <path
          d="M24 20 C18 20 16 24 16 28 C16 32 18 34 20 34"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinecap="round"
        />
        <path
          d="M24 60 C18 60 16 56 16 52 C16 48 18 46 20 46"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinecap="round"
        />
        {/* paper body */}
        <path
          d="M24 16 H50 C54 16 56 18 56 22 V58 C56 62 54 64 50 64 H24 C22 64 20 62 20 58 V22 C20 18 22 16 24 16 Z"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
        {/* checklist rows */}
        <rect x="28" y="26" width="5" height="5" rx="0.5" fill="none" stroke={STROKE} strokeWidth={SW} />
        <path d="M37 28.5 H50" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        <rect x="28" y="36" width="5" height="5" rx="0.5" fill="none" stroke={STROKE} strokeWidth={SW} />
        <path d="M37 38.5 H50" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        <rect x="28" y="46" width="5" height="5" rx="0.5" fill="none" stroke={STROKE} strokeWidth={SW} />
        <path d="M37 48.5 H48" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        <path d="M28 56 H50" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      </svg>
      <IconBadge>
        <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden>
          <path
            d="M2.5 6 L5 8.5 L9.5 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconBadge>
    </span>
  );
}

function QuantityTakeoffIcon() {
  return (
    <span className={ICON_WRAPPER}>
      <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden>
        {/* blueprint / drawing plane */}
        <path
          d="M10 54 L70 54 L62 66 L2 66 Z"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
        <path d="M18 57 H58" stroke={STROKE} strokeWidth={1} strokeLinecap="round" opacity="0.45" />
        <path d="M14 61 H54" stroke={STROKE} strokeWidth={1} strokeLinecap="round" opacity="0.45" />
        <path d="M22 63 H50" stroke={STROKE} strokeWidth={1} strokeLinecap="round" opacity="0.45" />
        {/* dimension marks */}
        <path d="M16 50 L16 54 M24 50 L24 54 M56 50 L56 54 M64 50 L64 54" stroke={STROKE} strokeWidth={1} strokeLinecap="round" />
        <path d="M16 50 H64" stroke={STROKE} strokeWidth={1} strokeLinecap="round" strokeDasharray="2 2" />
        {/* 3D material box */}
        <path
          d="M28 30 L44 22 L60 30 L44 38 Z"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
        <path
          d="M28 30 L28 46 L44 54 L44 38 Z"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
        <path
          d="M44 38 L60 30 L60 46 L44 54 Z"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
        {/* inner edges for wireframe depth */}
        <path d="M28 30 L44 38 L60 30" stroke={STROKE} strokeWidth={1} opacity="0.35" />
        <path d="M44 38 L44 54" stroke={STROKE} strokeWidth={1} opacity="0.35" />
      </svg>
      <IconBadge>
        <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden>
          <circle cx="5" cy="5" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7.2 7.2 L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </IconBadge>
    </span>
  );
}

function CostEstimationIcon() {
  return (
    <span className={ICON_WRAPPER}>
      <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden>
        {/* cost estimate document */}
        <rect
          x="20"
          y="16"
          width="40"
          height="50"
          rx="2"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
        />
        <rect x="20" y="16" width="40" height="11" rx="2" fill={STROKE} />
        {/* dollar symbol on document */}
        <circle cx="40" cy="40" r="11" fill="none" stroke={STROKE} strokeWidth={SW} />
        <path
          d="M40 33.5 V46.5 M36 36.5 C36 35 37.2 34 40 34 C43.2 34 45 35.4 45 37.5 C45 39.6 43 40.5 40 41 C37 41.5 35 42.8 35 45 C35 47.2 37 48.5 40 48.5"
          fill="none"
          stroke={STROKE}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
        <path d="M26 54 H50" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        <path d="M26 60 H42" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        <path d="M48 58 L52 62 M52 58 L48 62" stroke={STROKE} strokeWidth={1.3} strokeLinecap="round" />
      </svg>
      <IconBadge>
        <svg viewBox="0 0 12 12" className="h-4 w-4" aria-hidden>
          <text
            x="6"
            y="8.8"
            textAnchor="middle"
            fontSize="8.5"
            fontWeight="700"
            fill="currentColor"
            fontFamily="Arial, sans-serif"
          >
            $
          </text>
        </svg>
      </IconBadge>
    </span>
  );
}

function FinalDeliveryIcon() {
  return (
    <span className={ICON_WRAPPER}>
      <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden>
        {/* isometric box - top */}
        <path
          d="M22 34 L40 24 L58 34 L40 44 Z"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
        {/* left face */}
        <path
          d="M22 34 L22 54 L40 64 L40 44 Z"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
        {/* right face */}
        <path
          d="M40 44 L58 34 L58 54 L40 64 Z"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
        {/* tape / label lines */}
        <path d="M46 38 L54 42" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        <path d="M44 48 L54 54" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        <path d="M44 52 L52 57" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      </svg>
      <IconBadge>
        <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden>
          <path
            d="M2.5 6 H9.5 M6.5 3.5 L9.5 6 L6.5 8.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconBadge>
    </span>
  );
}

const STEP_ICONS = {
  review: ProjectReviewIcon,
  takeoff: QuantityTakeoffIcon,
  cost: CostEstimationIcon,
  delivery: FinalDeliveryIcon,
} as const;

const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Project Review',
    description:
      'We start by reviewing drawings, specifications, and all project documents to fully understand the scope, requirements, and key details of the job.',
    iconKey: 'review' as const,
  },
  {
    number: 2,
    title: 'Quantity Takeoff',
    description:
      'Our estimators perform detailed quantity takeoffs, measuring all materials and components required for accurate cost calculation.',
    iconKey: 'takeoff' as const,
  },
  {
    number: 3,
    title: 'Cost Estimation',
    description:
      'We apply updated labor and material pricing to prepare precise and competitive cost estimates tailored to your project.',
    iconKey: 'cost' as const,
  },
  {
    number: 4,
    title: 'Final Delivery',
    description:
      'You receive a well-structured estimate report that is easy to use for bidding, budgeting, procurement, and project planning.',
    iconKey: 'delivery' as const,
  },
] as const;

export default function Scope() {
  return (
    <section className="w-full bg-white px-4 pt-2 pb-10 sm:px-6 lg:px-10 lg:pt-3 lg:pb-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2
          className={`${cormorantGaramond.className} text-[28px] leading-[1.15] text-[#1a1a1a] sm:text-[36px] lg:text-[45px] lg:leading-[1.1]`}
          style={{
            fontWeight: 700,
            fontStyle: 'italic',
          }}
        >
          <span className="relative inline-block">
            Our
            <span
              className="absolute left-0 top-full mt-1.5 h-[3px] w-full rounded-full"
              style={{ background: brandGradient }}
              aria-hidden
            />
          </span>{' '}
          Estimating Process
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-14 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {PROCESS_STEPS.map((step) => {
            const Icon = STEP_ICONS[step.iconKey];

            return (
            <article key={step.number} className="flex flex-col items-center text-center">
              <div className="mb-5 flex justify-center sm:mb-6">
                <Icon />
              </div>
              <h3
                className={`${poppins.className} text-[15px] font-bold uppercase tracking-wide text-[#2997FF] sm:text-[16px]`}
              >
                {step.number}. {step.title}
              </h3>
              <p
                className={`${poppins.className} mt-3 max-w-[260px] text-[14px] leading-[1.65] text-[#777777] sm:text-[15px] sm:leading-[1.7]`}
              >
                {step.description}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
