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
            alt="Project team reviewing electrical drawings and blueprints"
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
            Our <strong className="font-bold">electrical estimating services</strong> are designed
            for contractors and project teams that need clear numbers before submitting a bid or
            approving a budget. We support electrical contractors who need trade-specific estimates
            for power, lighting, conduit, wiring, devices, panels, switchgear, feeders, grounding,
            and low-voltage systems. General contractors use our reports to compare subcontractor
            pricing, review electrical scope coverage, and prepare complete bid packages. Builders
            and developers use our estimates to understand electrical costs before construction
            starts. Engineering firms, architects, owners, and project managers can also use these
            reports during early planning, budget review, and value engineering discussions.
          </p>
          <p>
            An experienced electrical estimator helps project teams save time by reviewing drawings
            carefully, measuring quantities accurately, and organizing electrical scope in a usable
            format. This makes it easier to price the work, request supplier quotes, and reduce
            missed items before bid submission.
          </p>
        </div>
      </div>
    </div>
  );
}
