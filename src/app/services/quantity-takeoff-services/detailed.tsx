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
  weight: ['400', '700'],
});

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

export default function Detailed() {
  return (
    <div className="w-full pt-2 pb-8 lg:pt-3 lg:pb-10">
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.15',
        }}
      >
        Get Detailed Quantity Takeoff Services for Your Next Project
      </h2>

      <span
        className="mt-3 block h-[3px] w-12 rounded-full sm:w-14"
        style={{ background: brandGradient }}
        aria-hidden
      />

      <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        <p
          className={`${poppins.className} text-[#303030]`}
          style={bodyTextStyle}
        >
          If you need reliable{' '}
          <strong className="font-bold">quantity takeoff services</strong>, send us your drawings
          and scope documents. We will review your files and prepare a clear quantity report that
          helps with bidding, budgeting, procurement, and construction planning. Our{' '}
          <strong className="font-bold">construction quantity takeoff</strong> and{' '}
          <strong className="font-bold">construction material takeoff</strong> support helps
          contractors, subcontractors, builders, developers, architects, and engineering firms
          reduce guesswork and make better project decisions. From{' '}
          <strong className="font-bold">blueprint takeoff services</strong> to trade-wise material
          summaries, we help turn your drawings into organized construction data.
        </p>

        <div className="relative mx-auto h-[280px] w-full max-w-[520px] overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] sm:h-[320px] lg:mx-0 lg:ml-auto lg:h-[340px] lg:max-w-none">
          <Image
            src="/services-construction-services.jpg"
            alt="Construction professionals reviewing blueprints and project plans"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
