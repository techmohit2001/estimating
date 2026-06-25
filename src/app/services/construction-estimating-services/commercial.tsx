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

const BENEFITS = [
  'Improve bid accuracy and competitiveness',
  'Reduce costly estimating errors',
  'Save time on manual calculations',
  'Gain better control over project budgets',
  'Identify material, labor, and equipment costs early',
  'Increase bidding capacity and productivity',
  'Make informed project planning decisions',
  'Improve profitability and reduce risk of cost overruns',
] as const;

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
          Accurate construction estimates help contractors, builders, and developers make informed
          decisions before submitting bids. Our estimating services provide detailed cost
          breakdowns, quantity takeoffs, and pricing insights that improve project planning and
          reduce financial risk. With reliable estimates, you can focus on winning projects while
          maintaining profitability.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          {BENEFITS.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
