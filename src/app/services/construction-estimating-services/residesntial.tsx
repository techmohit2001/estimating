'use client';

import Image from 'next/image';
import { Cormorant_Garamond, Poppins } from 'next/font/google';

const SERVICE_CARD_ICON = '/services-commercial-residential.png';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const DELIVERABLES = [
  'Quantity takeoff sheets',
  'Material & labor cost breakdown',
  'Marked-up drawings',
  'Excel estimate sheet',
  'CSI trade-wise cost breakdown',
  'Bid support report',
  'Scope review notes',
  'Budget estimate support',
  'Change order estimate support',
] as const;

const cardTextStyle = {
  fontSize: '16px',
  lineHeight: '1.4',
  fontWeight: 400,
} as const;

function DeliverableCard({ title }: { title: string }) {
  return (
    <article className="flex h-[72px] overflow-hidden rounded-md border border-[#e5e5e5] sm:h-[76px]">
      <div
        className="flex w-[68px] shrink-0 items-center justify-center bg-[#2997FF] sm:w-[72px]"
        aria-hidden
      >
        <Image
          src={SERVICE_CARD_ICON}
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
        />
      </div>
      <div
        className={`${poppins.className} flex flex-1 items-center bg-[#e0e0e0] px-4`}
      >
        <p className="text-[#333333]" style={cardTextStyle}>
          {title}
        </p>
      </div>
    </article>
  );
}

export default function Residential() {
  return (
    <div className="w-full pt-2 pb-8 lg:pt-3 lg:pb-10">
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.1',
          textTransform: 'capitalize',
        }}
      >
        <span className="relative inline-block">
          What
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        You Receive with Our
        <br />
        Construction Estimating
        <br />
        Services
      </h2>

      <div
        className={`${poppins.className} mt-5 space-y-4 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
          When you work with us, you receive more than a basic price list. Our estimating
          deliverables are organized so your team can review quantities, understand scope, and make
          faster pricing decisions. The goal is to give you a clear estimate that supports bidding,
          budgeting, procurement, and project planning. You can receive:
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {DELIVERABLES.map((title) => (
          <DeliverableCard key={title} title={title} />
        ))}
      </div>

      <div
        className={`${poppins.className} mt-8 space-y-4 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
          Each estimate is prepared in a format that is easy to read and share with your internal
          team, vendors, subcontractors, or project stakeholders. Marked-up drawings help you
          verify measured areas and quantities, while Excel sheets make it easier to review,
          adjust, or update pricing. This gives you better control over the estimating process
          instead of working with unclear or scattered information.
        </p>
      </div>
    </div>
  );
}
