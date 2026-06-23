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

      <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,260px)_minmax(0,1fr)] xl:gap-12">
        <div className="relative mx-auto h-[320px] w-full max-w-[240px] overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] sm:h-[360px] sm:max-w-[260px] lg:mx-0 lg:h-[420px] lg:max-w-[240px] xl:max-w-[260px]">
          <Image
            src="/services-construction-services.jpg"
            alt="Construction professionals reviewing blueprints and project plans"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 240px, 260px"
          />
        </div>

        <div
          className={`${poppins.className} space-y-5 text-[#303030]`}
          style={bodyTextStyle}
        >
          <p>
            Our <strong className="font-bold">material takeoff services</strong> are designed for
            construction professionals who need clear quantity data before pricing a project. We
            support general contractors bidding on residential, commercial, industrial, and civil
            projects. A detailed takeoff helps them check subcontractor pricing, request vendor
            quotes, and reduce missed scope during bid preparation.
          </p>
          <p>
            We also help subcontractors who need trade-specific takeoffs for concrete, masonry,
            drywall, roofing, flooring, plumbing, mechanical, electrical, HVAC, steel, lumber,
            finishes, and sitework. Builders and developers use our reports to understand material
            needs before budgeting or purchasing. Architects, engineers, and owners can also use
            takeoff reports during early planning to review project scope more clearly. Our{' '}
            <strong className="font-bold">blueprint takeoff services</strong> are useful when your
            team needs to convert drawings into measurable material data. Whether you are bidding a
            new project, reviewing a budget, ordering materials, or checking project feasibility,
            we help turn plans into organized quantity reports.
          </p>
        </div>
      </div>
    </div>
  );
}
