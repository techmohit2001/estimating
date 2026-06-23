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

export default function Help() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.15',
          textTransform: 'capitalize',
        }}
      >
        <span className="relative inline-block">
          Who
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        We Help
      </h2>

      <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,360px)_minmax(0,1fr)] xl:gap-12">
        <div className="relative mx-auto h-[300px] w-full max-w-[300px] overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] sm:h-[340px] sm:max-w-[320px] lg:mx-0 lg:h-[400px] lg:max-w-none">
          <Image
            src="/services-construction-services.jpg"
            alt="Construction professionals reviewing blueprints and project plans"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 300px, 360px"
          />
        </div>

        <div
          className={`${poppins.className} space-y-5 text-[#303030]`}
          style={bodyTextStyle}
        >
          <p>
            Our construction estimating services are designed for professionals who need clear
            numbers before making project decisions. We support general contractors who are bidding
            multiple projects and need fast, organized estimates to meet deadlines. We also help
            subcontractors who need trade-specific quantity takeoffs and cost breakdowns for{' '}
            <strong className="font-bold">
              plumbing, electrical, HVAC, drywall, concrete, roofing,
            </strong>{' '}
            and other scopes.
          </p>
          <p>
            Builders and developers use our building estimating services to understand project
            budgets before construction starts. Architects and engineering firms can use our
            estimates during early design or pre construction planning to compare options, control
            cost expectations, and support client discussions. Lenders, owners, and project
            managers can also use our estimating reports to review budgets before approvals,
            funding, or procurement.
          </p>
        </div>
      </div>
    </div>
  );
}
