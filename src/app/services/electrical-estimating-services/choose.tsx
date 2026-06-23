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

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

export default function Choose() {
  return (
    <section className="w-full pt-2 pb-8 lg:pt-3 lg:pb-10">
      <div className="rounded-[18px] bg-[#f8f9fa] px-6 pb-10 pt-6 sm:px-10 sm:pb-12 sm:pt-8 lg:px-14 lg:pb-14 lg:pt-10">
        <h2
          className={`${cormorantGaramond.className} text-[#1a1a1a]`}
          style={{
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '45px',
            lineHeight: '1.15',
          }}
        >
          Why Choose Our Electrical Estimating Company?
        </h2>

        <span
          className="mt-3 block h-[3px] w-12 rounded-full sm:w-14"
          style={{ background: brandGradient }}
          aria-hidden
        />

        <p
          className={`${poppins.className} mt-6 text-[#303030]`}
          style={bodyTextStyle}
        >
          Choosing the right <strong className="font-bold">electrical estimating</strong> company
          can help you save time, reduce missed scope, and prepare better bids. Electrical estimating
          requires careful attention because one missed circuit, panel item, fixture type, equipment
          connection, or conduit run can affect the entire bid. We help contractors review drawings,
          measure quantities, organize material lists, and prepare cost breakdowns in a clear format.
          This allows your team to focus on supplier pricing, labor strategy, project coordination,
          and bid submission instead of spending hours measuring drawings manually. Our estimates are
          built for practical use. Whether you need{' '}
          <strong className="font-bold">
            commercial electrical estimating, industrial electrical estimating, residential
            electrical estimating, or complete electrical takeoff services
          </strong>
          , our team can support your project with organized estimating documents. As a trusted
          construction estimation company, we also understand how electrical work connects with other
          trades during project budgeting. That broader construction perspective helps contractors
          review electrical scope within the full project cost instead of treating it as an isolated
          number.
        </p>
      </div>
    </section>
  );
}
