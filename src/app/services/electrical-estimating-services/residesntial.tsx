'use client';

import Link from 'next/link';
import { Cormorant_Garamond, Poppins } from 'next/font/google';
import { FaCheck } from 'react-icons/fa6';

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

const itemTextStyle = {
  fontSize: '16px',
  lineHeight: '1.5',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const DELIVERABLES_COLUMN_1 = [
  'Electrical quantity takeoff sheets',
  'Marked-up electrical drawings',
  'Lighting fixture counts',
  'Conduit & wire quantity takeoff',
  'Low-voltage & data system takeoff',
  'Scope notes & clarification items',
  'Change order estimate support',
] as const;

const DELIVERABLES_COLUMN_2 = [
  'Material & labor cost breakdown',
  'Excel estimate sheet',
  'Switch, receptacle, & device counts',
  'Panel & switchgear scope review',
  'Fire alarm system takeoff',
  'Bid support report',
] as const;

function ChecklistItem({ title }: { title: string }) {
  return (
    <li className={`${poppins.className} flex items-center gap-3`}>
      <span
        className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#2997FF] text-white"
        aria-hidden
      >
        <FaCheck className="text-[10px]" />
      </span>
      <span className="text-[#333333]" style={itemTextStyle}>
        {title}
      </span>
    </li>
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
        What You Receive with Our Electrical Estimating{' '}
        <span className="relative inline-block">
          Services
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>
      </h2>

      <div
        className={`${poppins.className} mt-5 space-y-4 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
          When you work with our electrical estimating team, you receive more than a basic material
          list. We prepare organized estimate files that help your team review scope, price
          materials, check labor needs, and prepare bid submissions with more confidence. You can
          receive:
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-12">
        <ul className="space-y-3.5">
          {DELIVERABLES_COLUMN_1.map((title) => (
            <ChecklistItem key={title} title={title} />
          ))}
        </ul>
        <ul className="space-y-3.5">
          {DELIVERABLES_COLUMN_2.map((title) => (
            <ChecklistItem key={title} title={title} />
          ))}
        </ul>
      </div>

      <div
        className={`${poppins.className} mt-8 space-y-4 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
          Each estimate is prepared in a format that is easy to review and share with your internal
          team, suppliers, subcontractors, or project stakeholders. Marked-up drawings help verify
          measured quantities, while Excel files make it easier to review, adjust, and use the
          estimate for pricing. For project teams that need broader budget support beyond electrical
          scope, building cost estimating services
          can help connect electrical costs with architectural, structural, mechanical, plumbing,
          civil, and finish-related project costs.
        </p>
      </div>
    </div>
  );
}
