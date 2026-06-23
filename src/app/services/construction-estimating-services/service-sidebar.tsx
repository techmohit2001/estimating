'use client';

import Link from 'next/link';
import { Poppins } from 'next/font/google';
import {
  FaBuilding,
  FaEnvelope,
  FaFaucetDrip,
  FaHelmetSafety,
  FaPhone,
  FaPlugCircleBolt,
  FaRulerCombined,
  FaScrewdriverWrench,
} from 'react-icons/fa6';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const SERVICES = [
  {
    label: 'Plumbing Estimating',
    href: '/services/plumbing-services',
    icon: FaFaucetDrip,
    active: false,
  },
  {
    label: 'Construction Estimating',
    href: '/services/construction-services',
    icon: FaHelmetSafety,
    active: true,
  },
  {
    label: 'Mechanical Estimating',
    href: '/services',
    icon: FaScrewdriverWrench,
    active: false,
  },
  {
    label: 'Architectural Cost Estimating',
    href: '/services',
    icon: FaBuilding,
    active: false,
  },
  {
    label: 'Quantity Takeoff',
    href: '/services',
    icon: FaRulerCombined,
    active: false,
  },
  {
    label: 'Electrical Estimating',
    href: '/services',
    icon: FaPlugCircleBolt,
    active: false,
  },
] as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

export default function ServiceSidebar() {
  return (
    <div className="flex flex-col gap-2 pb-2 lg:pb-5">
      <div className="overflow-hidden rounded-lg bg-[#ececec] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="px-3 pb-3 pt-3 sm:px-3.5 sm:pb-3 sm:pt-3.5">
          <h3
            className={`${poppins.className} text-[13px] font-bold uppercase tracking-wide text-[#111] sm:text-[14px]`}
          >
            Our Services
          </h3>
          <span
            className="mt-1.5 block h-[3px] w-8 rounded-full sm:mt-2 sm:w-8"
            style={{ background: brandGradient }}
            aria-hidden
          />
          <nav className="mt-2 overflow-hidden rounded-sm bg-black sm:mt-2.5">
            <ul>
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                const row = (
                  <span
                    className={`flex w-full items-center gap-2 px-3 py-2.5 transition-colors sm:gap-2.5 sm:px-3 sm:py-2.5 ${
                      service.active ? 'text-white' : 'text-white hover:bg-[#1a1a1a]'
                    }`}
                    style={service.active ? { background: brandGradient } : undefined}
                  >
                    <Icon
                      className={`shrink-0 text-[15px] sm:text-[16px] ${
                        service.active ? 'text-white' : 'text-[#2997FF]'
                      }`}
                      aria-hidden
                    />
                    <span
                      className={`${poppins.className} text-[13px] font-normal leading-snug sm:text-[14px]`}
                    >
                      {service.label}
                    </span>
                  </span>
                );

                return (
                  <li key={service.label}>
                    {service.active ? (
                      row
                    ) : (
                      <Link href={service.href} className="block">
                        {row}
                      </Link>
                    )}
                    {index < SERVICES.length - 1 && (
                      <div className="mx-3 border-t border-[#333]" aria-hidden />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
        <div className="px-3 py-2 sm:px-4 sm:py-2" style={{ background: brandGradient }}>
          <p
            className={`${poppins.className} text-center text-[13px] font-bold text-white sm:text-[14px]`}
          >
            Call Us Today
          </p>
        </div>
        <div
          className={`${poppins.className} space-y-2 bg-black px-3 py-3 sm:space-y-2.5 sm:px-4 sm:py-3`}
        >
          <a
            href="tel:+15128281066"
            className="flex items-center gap-2.5 text-[13px] text-white transition-opacity hover:opacity-80 sm:gap-3 sm:text-[14px]"
          >
            <FaPhone className="shrink-0 text-[15px] text-[#2997FF] sm:text-[16px]" aria-hidden />
            +1 512-828-1066
          </a>
          <a
            href="mailto:info@estimatingbuddies.com"
            className="flex items-center gap-2.5 text-[13px] text-white transition-opacity hover:opacity-80 sm:gap-3 sm:text-[14px]"
          >
            <FaEnvelope className="shrink-0 text-[15px] text-[#2997FF] sm:text-[16px]" aria-hidden />
            info@estimatingbuddies.com
          </a>
        </div>
      </div>
    </div>
  );
}
