'use client';

import { Cormorant_Garamond, Poppins } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

export default function Commercial() {
  return (
    <div className="w-full pb-8 lg:pb-10">
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
          Benefits
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        of Our Construction Estimating Services
      </h2>

      <div
        className={`${poppins.className} mt-5 space-y-4 text-[#303030]`}
        style={bodyTextStyle}
      >
        <p>
          A well-prepared estimate helps you bid smarter and avoid costly surprises during
          construction. Our construction estimation services give you a clearer view of material
          quantities, labor requirements, trade scope, and project cost structure before you commit
          to pricing. With our estimating support, you can save time on manual takeoffs, reduce
          missed quantities, and review your scope more confidently. Contractors can use our
          estimates to prepare competitive bids without rushing through drawings at the last
          minute. Builders and developers can use our cost reports to plan budgets, compare design
          options, and make better financial decisions.
        </p>
        <p>
          Our pre construction estimating services also help identify scope gaps early. This is
          important because missing items during the bid stage can create change orders, disputes,
          and margin pressure later. By reviewing drawings and quantities carefully before
          construction starts, your team gets a stronger base for budgeting, procurement, and
          project execution.
        </p>
      </div>
    </div>
  );
}
