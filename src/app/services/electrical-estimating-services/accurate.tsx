'use client';

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
      <div className="grid grid-cols-1 gap-6">
        <div className="order-1">
          <div>
            <h2
              className={`${cormorantGaramond.className} text-[#1a1a1a]`}
              style={{
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '45px',
                lineHeight: 1.2,
                letterSpacing: '0.02em',
              }}
            >
              Electrical Estimating Services for 
              Contractors, Builders &amp;
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
            Get detailed electrical estimating services prepared from your electrical drawings, specifications, schedules, addenda, and scope documents. 
            We help electrical contractors, general contractors, builders, developers, architects, engineering firms, and project owners prepare clear 
            electrical takeoffs, cost breakdowns, and bid-ready reports for better project planning. Electrical work is one of the most detailed scopes 
            in construction. A missed conduit run, fixture count, wiring length, panel item, switchgear detail, or low-voltage point can affect the final 
            bid and project budget. That is why our electrical cost estimating process focuses on proper drawing review, accurate quantity measurement, 
            material breakdown, labor scope, and organized estimate delivery. Whether you are bidding on a residential, commercial, industrial, or 
            renovation project, our team helps you understand the electrical scope before pricing the job. From lighting and power systems to panels, 
            conduit, wiring, devices, grounding, fire alarm, data, and low-voltage systems, we prepare estimates that support cleaner bids and better 
            cost decisions.
            </p>
          </div>
        </div>

        {/* Mobile sidebar — desktop version lives in page.tsx (sticky) */}
        <aside className="order-2 lg:hidden">
          <ServiceSidebar />
        </aside>

        {/* Slim stats bar */}
        <div className="order-3 mt-3 -ml-2 w-full max-w-2xl sm:mt-4 sm:-ml-3 sm:max-w-3xl lg:mt-4 lg:-ml-4 lg:max-w-4xl">
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
