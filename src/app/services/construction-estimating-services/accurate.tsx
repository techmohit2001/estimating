'use client';

import Image from 'next/image';
import { Cormorant_Garamond, Poppins } from 'next/font/google';
import {
  FaClock,
  FaHandshake,
  FaUserCheck,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import ServiceSidebar from './service-sidebar';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const STATS = [
  {
    icon: FaHandshake,
    value: '100%',
    label: 'Quality Commitment',
  },
  {
    icon: FaUserCheck,
    value: '98%',
    label: 'Client Satisfaction',
  },
  {
    icon: FaClock,
    value: '24-48hr',
    label: 'Turnaround Time',
  },
] as const;

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

/** Stats trust-bar only — keep compact (do not bump padding/icon sizes here) */
function OutlinedIconBox({ icon: Icon }: { icon: IconType }) {
  return (
    <span
      className="inline-flex size-[28px] shrink-0 items-center justify-center rounded border border-[#2997FF] text-[#2997FF] sm:size-[36px]"
      aria-hidden
    >
      <Icon className="text-[12px] sm:text-[15px]" />
    </span>
  );
}

export default function Accurate() {
  return (
    <div className="w-full py-10 lg:py-14">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(200px,260px)] lg:items-start lg:gap-5 xl:gap-8">
        {/* Main content */}
        <div className="order-1 lg:order-none">
          <div>
            <h2
              className={`${cormorantGaramond.className} text-[#1a1a1a]`}
              style={{
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '45px',
                lineHeight: 1.2,
                letterSpacing: '0.02em',
                textTransform: 'capitalize',
              }}
            >
              Construction Estimating Services
              <br />
              For Contractors, Builders &amp;
              <br />
              Developers
            </h2>
            <span
              className="mt-3 block h-[3px] w-11 rounded-full"
              style={{ background: brandGradient }}
              aria-hidden
            />
          </div>

          <div
            className={`${poppins.className} mt-5 space-y-4 text-[#303030]`}
            style={bodyTextStyle}
          >
            <p>
            Get detailed construction estimating services prepared from your project drawings, specifications, and scope documents. We help general contractors, subcontractors, builders, developers, architects, lenders, and engineering firms prepare clear quantity takeoffs, construction cost estimating reports, and bid-ready estimates for better project planning. In construction, a small estimating mistake can lead to missed materials, weak bids, budget gaps, and profit loss. That is why our construction estimation services focus on clear scope review, accurate quantity measurement, material and labor breakdowns, and organized estimate delivery. Whether you are bidding on a residential, commercial, industrial, or civil project, our team helps you understand the real cost picture before work begins.
            </p>
          </div>
        </div>

        {/* Featured image */}
        <div className="order-3 flex items-start justify-center lg:order-none lg:pt-2">
          <div className="relative h-[260px] w-full max-w-[340px] overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:h-[320px] lg:h-[380px] lg:max-w-none">
            <Image
              src="/services-construction-services.jpg"
              alt="Construction professionals reviewing blueprints"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 340px"
            />
          </div>
        </div>

        {/* Mobile sidebar — desktop version lives in page.tsx (sticky) */}
        <aside className="order-2 lg:hidden">
          <ServiceSidebar />
        </aside>

        {/* Slim stats bar */}
        <div className="order-4 mt-3 -ml-2 w-full max-w-2xl sm:mt-4 sm:-ml-3 sm:max-w-3xl lg:order-none lg:col-span-2 lg:mt-4 lg:-ml-4 lg:max-w-4xl">
          <div className="flex w-full flex-col divide-y divide-[#333] overflow-hidden rounded-lg bg-black shadow-[0_2px_12px_rgba(0,0,0,0.1)] sm:flex-row sm:divide-x sm:divide-y-0">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`${poppins.className} flex flex-1 flex-col items-center justify-center gap-2 px-3 py-3 sm:flex-row sm:gap-2.5 sm:px-4 sm:py-3.5`}
                >
                  <OutlinedIconBox icon={Icon} />
                  <div className="text-center sm:text-left">
                    <p className="text-[12px] font-semibold leading-tight text-white sm:text-[18px]">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/75 sm:text-[12px]">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
