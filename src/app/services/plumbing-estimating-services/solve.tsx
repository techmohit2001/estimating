'use client';

import { Cormorant_Garamond, Poppins } from 'next/font/google';
import {
  FaGear,
  FaHandHoldingDollar,
  FaUserGear,
  FaUsersGear,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const bodyPoppins: React.CSSProperties = {
  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
};

/** Poppins body copy at 18px (card text, banner, kicker uses same family) */
const poppins18: React.CSSProperties = {
  ...bodyPoppins,
  fontSize: '16px',
  lineHeight: '1.45',
  fontWeight: 400,
};

const CARDS = [
  {
    key: 'consultancy',
    title: 'Need Accurate Plumbing Takeoffs?',
    body: 'Get detailed plumbing takeoff support for pipes, fittings, valves, fixtures, drains, vents, and equipment. We help you understand the complete material scope before you price the job.',
    Icon: FaUserGear,
  },
  {
    key: 'time',
    title: "Short on Time for Bid Preparation?",
    body: 'Our team prepares clear plumbing quantity takeoffs and cost estimates so you can focus on running projects, managing clients, and submitting bids on time.',
    Icon: FaGear,
  },
  {
    key: 'bidding',
    title: 'Not Confident in Your Plumbing Bid?',
    body: 'We prepare organized plumbing bid estimates with material, labor, scope notes, and exclusions, helping you submit competitive proposals with better cost clarity.',
    Icon: FaHandHoldingDollar,
  },
] as const;

function FeatureCard({
  title,
  body,
  Icon,
}: {
  title: string;
  body: string;
  Icon: IconType;
}) {
  return (
    <article
      className={`${poppins.className} flex flex-col rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-5`}
    >
      <div
        className="mb-3 flex size-12 shrink-0 items-center justify-center rounded-full bg-[#E8F4FF] text-[#0068CB] sm:size-14"
        aria-hidden
      >
        <Icon className="text-xl sm:text-2xl" />
      </div>
      <h3
        className="font-bold text-black"
        style={{ ...bodyPoppins, fontSize: '18px', lineHeight: '1.4', fontWeight: 700 }}
      >
        {title}
      </h3>
      <p className="mt-3 text-[#5c5c5c]" style={poppins18}>
        {body}
      </p>
    </article>
  );
}

export default function Solve() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      {/* Left column only — right sidebar is sticky in page.tsx */}
      <div className="w-full">
          <p
            className={`${poppins.className} text-[13px] font-semibold uppercase tracking-[0.12em] text-[#2997FF] sm:text-sm`}
          >
            How we can help you
          </p>

          <div className="mt-1">
            <h2
              className={`${cormorantGaramond.className} capitalize text-[#111]`}
              style={
                {
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: '45px',
                  lineHeight: '1.15',
                  textTransform: 'capitalize',
                  leadingTrim: 'none',
                } as React.CSSProperties
              }
            >
              We Solve Estimation Challenges
              <br />
              So You Can Win More.
            </h2>
            <span className="mt-2 h-1 w-14 rounded-sm bg-[#2997FF]" aria-hidden />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3">
            {CARDS.map(({ key, title, body, Icon }) => (
              <FeatureCard key={key} title={title} body={body} Icon={Icon} />
            ))}
          </div>

          <div
            className={`${poppins.className} relative mt-10 flex flex-col gap-6 overflow-hidden rounded-2xl bg-[#f4f4f4] p-6 pl-5 sm:mt-14 sm:flex-row sm:items-center sm:gap-8 sm:p-8 sm:pl-8 lg:gap-10`}
          >
            <div
              className="pointer-events-none absolute bottom-0 left-0 top-0 w-1.5 bg-[#2997FF] sm:w-2"
              aria-hidden
            />
            <div
              className="flex shrink-0 items-center justify-center text-black sm:pl-2"
              aria-hidden
            >
              <FaUsersGear className="h-16 w-16 sm:h-[72px] sm:w-[72px]" />
            </div>
            <div className="min-w-0">
              <h3
                className="font-bold text-black"
                style={{ ...bodyPoppins, fontSize: '18px', lineHeight: '1.4', fontWeight: 700 }}
              >
                We&apos;ve Got You Covered.
              </h3>
              <p className="mt-2 text-[#5c5c5c]" style={poppins18}>
              Our team prepares accurate plumbing takeoffs and cost estimates for residential and commercial projects. From pipes, fittings, valves, fixtures, 
              drains, vents, and equipment, we calculate every required item with clear material and labor breakdowns. We help plumbing contractors save time, 
              reduce bid errors, and submit competitive plumbing bid estimates with confidence.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}
