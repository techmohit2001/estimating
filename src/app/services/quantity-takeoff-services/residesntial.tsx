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
  'Detailed quantity takeoff sheets',
  'Material quantity summary',
  'Trade-wise takeoff breakdown',
  'Marked-up drawings',
  'Excel-based takeoff report',
  'CSI division-wise quantity breakdown',
  'Scope review notes',
  'Addenda & revision-based takeoff updates',
  'Area, length, volume, & count-based measurements',
  'Material list for vendor pricing & procurement',
] as const;

const cardTextStyle = {
  fontSize: '16px',
  lineHeight: '1.4',
  fontWeight: 400,
} as const;

function DeliverableCard({ title }: { title: string }) {
  return (
    <article className="flex min-h-[72px] overflow-hidden rounded-md border border-[#e8e8e8] sm:min-h-[76px]">
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
        className={`${poppins.className} flex flex-1 items-center bg-[#f8f9fa] px-4 py-3`}
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
        Quantity Takeoff Services
      </h2>

      <div
        className={`${poppins.className} mt-5 space-y-4 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
          When you work with our takeoff team, you receive more than a basic material list. We
          prepare organized takeoff documents that are easy to review, share, and use for
          estimating or procurement. The goal is to give your team clean quantity data that
          supports real project decisions. You can receive:
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {DELIVERABLES.map((title) => (
          <DeliverableCard key={title} title={title} />
        ))}
      </div>

      <div
        className={`${poppins.className} mt-8 space-y-4 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
          Each report is prepared in a format that helps contractors, subcontractors, builders,
          and project managers review scope quickly. Marked-up drawings help verify measured areas,
          while Excel sheets make it easier to sort, edit, and use quantities for pricing.
        </p>
      </div>
    </div>
  );
}
