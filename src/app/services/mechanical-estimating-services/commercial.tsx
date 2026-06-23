'use client';

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

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const benefitTitleStyle = {
  fontSize: '16px',
  lineHeight: '1.4',
  fontWeight: 700,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const BENEFITS = [
  {
    title: 'Accurate Bids',
    description:
      'A detailed estimate helps you submit more accurate bids by identifying required materials, labor, equipment, and scope items. This reduces the chances of underpricing or missing important components.',
  },
  {
    title: 'Reduced Risk',
    description:
      'Mechanical systems include many small but important items such as fittings, valves, supports, dampers, insulation, and accessories. Missing these items can create cost overruns. Our estimating process helps reduce that risk through careful drawing review and quantity takeoff.',
  },
  {
    title: 'Time Savings',
    description:
      'Manual estimating takes hours, especially when the project includes complex HVAC, ductwork, and piping systems. Our team handles the takeoff and estimate preparation so you can focus on bidding, vendor coordination, and project planning.',
  },
  {
    title: 'Improved Profitability',
    description:
      'Better estimates help protect your profit margin. When you know your material quantities, labor scope, and equipment costs clearly, you can price the job more confidently and avoid unnecessary losses.',
  },
  {
    title: 'Better Scope Clarity',
    description:
      'A clean estimate makes it easier to understand what is included in the bid. It also helps identify missing information, unclear notes, and items that may need clarification before final pricing.',
  },
  {
    title: 'Faster Bid Preparation',
    description:
      'Bid deadlines are often tight. With professional mechanical estimating support, contractors can prepare and submit bids faster without depending only on internal resources.',
  },
  {
    title: 'Stronger Vendor Comparison',
    description:
      'When your quantities are organized, you can request supplier quotes more easily and compare vendor pricing with better accuracy. This supports smarter purchasing and better cost control.',
  },
] as const;

function BenefitIcon() {
  return (
    <span
      className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e6f4ff] sm:size-6"
      aria-hidden
    >
      <span className="size-2 rounded-full bg-[#2997FF] sm:size-2.5" />
    </span>
  );
}

function BenefitItem({ title, description }: { title: string; description: string }) {
  return (
    <article className="flex gap-3 sm:gap-4">
      <BenefitIcon />
      <div className="min-w-0">
        <h3
          className={`${poppins.className} text-[#1a1a1a]`}
          style={benefitTitleStyle}
        >
          {title}
        </h3>
        <p
          className={`${poppins.className} mt-2 text-[#303030]`}
          style={bodyTextStyle}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default function Commercial() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.15',
        }}
      >
        <span className="relative inline-block">
          Benefits
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        of Our Mechanical Estimating Services
      </h2>

      <p
        className={`${poppins.className} mt-6 max-w-4xl text-[#303030] sm:mt-7`}
        style={bodyTextStyle}
      >
        Mechanical estimating is not just about counting materials. It directly affects bidding
        success, cost control, and project profitability. When your estimate is clear and detailed,
        your team can make better decisions before the project begins.
      </p>

      <div className="mt-8 space-y-6 sm:mt-9 sm:space-y-7">
        {BENEFITS.map((benefit) => (
          <BenefitItem
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
}
