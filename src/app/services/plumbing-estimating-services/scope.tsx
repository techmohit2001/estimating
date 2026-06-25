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

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const ICON_POINTS = [
  { x: 10, y: 68 },
  { x: 30, y: 32 },
  { x: 50, y: 68 },
  { x: 70, y: 32 },
  { x: 90, y: 68 },
] as const;

const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Document Review',
    description:
      'We review your plumbing drawings, specifications, fixture schedules, riser diagrams, details, and addenda to understand the complete project scope.',
    iconSrc: '/services-commercial-scope1.png',
    position: 'bottom' as const,
    cardClass: 'w-[158%] max-w-[390px]',
  },
  {
    number: 2,
    title: 'Scope Identification',
    description:
      'Our team identifies all plumbing systems, materials, quantities, equipment, and possible missing information before starting the takeoff.',
    iconSrc: '/services-commercial-scope2.png',
    position: 'top' as const,
    cardClass: 'w-[155%] max-w-[380px]',
  },
  {
    number: 3,
    title: 'Plumbing Quantity Takeoff',
    description:
      'We measure pipe runs, count fittings, identify valves, review fixtures, calculate equipment quantities, and organize all required plumbing items.',
    iconSrc: '/services-commercial-scope3.png',
    position: 'bottom' as const,
    cardClass: 'w-[172%] max-w-[420px] -ml-[36%]',
  },
  {
    number: 4,
    title: 'Cost Estimation',
    description:
      'We prepare a clear estimate with material costs, labor costs, equipment pricing, and complete plumbing scope details based on the measured quantities.',
    iconSrc: '/services-commercial-scope4.png',
    position: 'top' as const,
    cardClass: 'w-[155%] max-w-[380px] -ml-[55%]',
  },
  {
    number: 5,
    title: 'Final Estimate Delivery',
    description:
      'After quality checking for missing items, scope gaps, calculation issues, and formatting errors, we deliver the final estimate with quantities, costs, bid summary, assumptions, exclusions, and notes.',
    iconSrc: '/services-commercial-scope5.png',
    position: 'bottom' as const,
    cardClass: 'w-[158%] max-w-[390px] -ml-[58%]',
  },
] as const;

function ProcessIcon({
  src,
  alt,
  compact = false,
}: {
  src: string;
  alt: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`relative z-20 inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-black ${
        compact
          ? 'size-11 shadow-[0_0_0_6px_#fff,0_4px_18px_rgba(0,0,0,0.22)] sm:size-[58px] sm:shadow-[0_0_0_8px_#fff,0_4px_18px_rgba(0,0,0,0.22)]'
          : 'size-[58px] shadow-[0_0_0_8px_#fff,0_4px_18px_rgba(0,0,0,0.22)]'
      }`}
      aria-hidden
    >
      <Image
        src={src}
        alt={alt}
        width={30}
        height={30}
        className={`object-contain ${
          compact ? 'h-6 w-6 sm:h-[30px] sm:w-[30px]' : 'h-[30px] w-[30px]'
        }`}
      />
    </span>
  );
}

function CurvedLeftBorder() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 12 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M 9 0 Q 1 0 1 6 L 1 94 Q 1 100 9 100"
        fill="none"
        stroke="#2997FF"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function ConnectorLine() {
  return (
    <span
      className="mx-auto block h-5 w-px shrink-0 bg-[#d4d4d4]"
      aria-hidden
    />
  );
}

function ProcessStepCard({
  number,
  title,
  description,
  cardClass = 'w-full',
}: {
  number: number;
  title: string;
  description: string;
  cardClass?: string;
}) {
  return (
    <article className={`flex shrink-0 items-stretch ${cardClass}`}>
      <div className="relative w-3 shrink-0">
        <CurvedLeftBorder />
      </div>
      <div className="min-w-0 flex-1">
        <div className="bg-[#2997FF] px-3 py-2 sm:py-2.5">
          <h3
            className={`${poppins.className} text-[13px] font-bold leading-snug text-white sm:text-[14px]`}
          >
            {number}. {title}
          </h3>
        </div>
        <p
          className={`${poppins.className} bg-white px-3 py-2.5 text-[14px] leading-[1.55] text-[#4a4a4a] sm:py-3 sm:text-[16px] sm:leading-[1.6]`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

function ZigzagPath() {
  const pathD = [
    `M -3 ${ICON_POINTS[0].y}`,
    ...ICON_POINTS.map((p) => `L ${p.x} ${p.y}`),
    `L 103 ${ICON_POINTS[ICON_POINTS.length - 1].y}`,
  ].join(' ');

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d={pathD}
        fill="none"
        stroke="#d0d0d0"
        strokeWidth="0.4"
        strokeDasharray="2.2 2.2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Scope() {
  return (
    <div className="w-full pt-2 pb-8 lg:pt-3 lg:pb-10">
      <h2
        className={`${cormorantGaramond.className} relative pb-4 text-[28px] leading-[1.15] text-[#1a1a1a] sm:text-[36px] lg:pb-0 lg:text-[45px] lg:leading-[1.1]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
        }}
      >
        <span className="relative inline-block">
          Our
          <span
            className="absolute left-0 top-full mt-1 hidden h-[3px] w-[1.15em] rounded-full lg:block"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        Plumbing Estimating Process
        <span
          className="absolute bottom-0 left-0 h-[3px] w-[1.15em] rounded-full lg:hidden"
          style={{ background: brandGradient }}
          aria-hidden
        />
      </h2>

      {/* Desktop — reference design */}
      <div className="relative mt-12 hidden overflow-visible lg:grid lg:grid-cols-5 lg:gap-x-1 xl:mt-14 xl:gap-x-2">
        {/* Row 1: 2 cards upar + connector */}
        {PROCESS_STEPS.map((step) => (
          <div
            key={`top-${step.number}`}
            className="flex min-h-[175px] flex-col items-center justify-end overflow-visible"
          >
            {step.position === 'top' && (
              <>
                <ProcessStepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  cardClass={step.cardClass}
                />
                <ConnectorLine />
              </>
            )}
          </div>
        ))}

        {/* Row 2: straight zigzag + icons */}
        <div className="relative col-span-5 grid h-[100px] grid-cols-5 gap-x-1 xl:gap-x-2">
          <ZigzagPath />

          {PROCESS_STEPS.map((step) => {
            const isTop = step.position === 'top';

            return (
              <div
                key={`icon-${step.number}`}
                className={`relative z-10 flex justify-center ${
                  isTop ? 'items-start' : 'items-end'
                }`}
              >
                <ProcessIcon src={step.iconSrc} alt={step.title} />
              </div>
            );
          })}
        </div>

        {/* Row 3: connector + 3 cards neeche */}
        {PROCESS_STEPS.map((step) => (
          <div
            key={`bottom-${step.number}`}
            className="flex min-h-[175px] flex-col items-start justify-start overflow-visible"
          >
            {step.position === 'bottom' && (
              <>
                <ConnectorLine />
                <ProcessStepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  cardClass={step.cardClass}
                />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Mobile / tablet */}
      <div className="relative mt-6 space-y-6 overflow-x-hidden sm:mt-8 sm:space-y-7 lg:hidden">
        {PROCESS_STEPS.map((step, index) => {
          const isLast = index === PROCESS_STEPS.length - 1;

          return (
            <div key={step.number} className="relative flex gap-3 sm:gap-4">
              {!isLast && (
                <span
                  className="absolute left-[22px] top-[52px] bottom-[-8px] w-px bg-[#d4d4d4] sm:left-[29px] sm:top-14 sm:bottom-[-12px]"
                  aria-hidden
                />
              )}
              <div className="flex w-11 shrink-0 flex-col items-center pt-0.5 sm:w-[58px] sm:pt-1">
                <ProcessIcon src={step.iconSrc} alt={step.title} compact />
              </div>
              <div className="min-w-0 flex-1">
                <ProcessStepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  cardClass="w-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
