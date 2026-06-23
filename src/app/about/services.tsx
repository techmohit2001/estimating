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
  weight: ['400', '600', '700'],
});

/** Har card ke liye apna icon URL yahan daalen (public folder: /file.png ya full URL) */
const PROCESS_STEPS = [
  {
    title: 'Share Your Drawings',
    description:
      'You send us your plans, blueprints, specifications, scope notes, or project files.',
    iconUrl: '/about-services1.png',
  },
  {
    title: 'Scope Review',
    description:
      'Our team reviews the project documents to understand the trade, size, complexity, and estimating requirements.',
    iconUrl: '/about-services2.png',
  },
  {
    title: 'Quantity Takeoff',
    description:
      'We measure and calculate material quantities using reliable takeoff methods and estimating software.',
    iconUrl: '/about-services3.png',
  },
  {
    title: 'Cost Estimation',
    description:
      'We prepare a detailed estimate with material costs, labor costs, equipment needs, & scope-based breakdowns.',
    iconUrl: '/about-services4.png',
  },
  {
    title: 'Quality Check',
    description:
      'Before delivery, we review the estimate to reduce missing items, calculation errors, and unclear details.',
    iconUrl: '/about-services5.png',
  },
  {
    title: 'Final Delivery',
    description:
      'You receive a professional estimate that can be used for bidding, budgeting, purchasing, or project planning.',
    iconUrl: '/about-services6.png',
  },
] as const;

function ProcessCard({
  title,
  description,
  iconUrl,
}: {
  title: string;
  description: string;
  iconUrl: string;
}) {
  return (
    <article className="group cursor-pointer rounded-2xl bg-[#f7f7f7] p-6 transition-colors duration-300 hover:bg-[#2997FF] sm:p-7">
      {iconUrl ? (
        <div className="relative mb-5 h-8 w-8 shrink-0">
          <Image
            src={iconUrl}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert"
            aria-hidden
          />
        </div>
      ) : (
        <div className="mb-5 h-8 w-8 shrink-0" aria-hidden />
      )}
      <h3
        className={`${poppins.className} mb-3 font-semibold text-[#1a1a1a] transition-colors duration-300 group-hover:text-white`}
        style={{ fontSize: '18px', lineHeight: 1.3 }}
      >
        {title}
      </h3>
      <p
        className={`${poppins.className} text-[#666666] transition-colors duration-300 group-hover:text-white`}
        style={{ fontSize: '16px', lineHeight: 1.6, fontWeight: 400 }}
      >
        {description}
      </p>
    </article>
  );
}

export default function Services() {
  return (
    <section className="w-full bg-white px-4 pt-2 pb-10 sm:px-6 sm:pt-3 sm:pb-12 lg:px-10 lg:pt-4 lg:pb-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <h2
          className={`${cormorantGaramond.className} mb-3 text-[#1a1a1a]`}
          style={{
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '45px',
            lineHeight: 1.1,
          }}
        >
          Our Process
        </h2>

        <div className="mb-4 h-[3px] w-12 rounded-full bg-[#2997FF]" />

        <p
          className={`${poppins.className} mb-8 max-w-3xl text-[#666666] sm:mb-10`}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Our estimating process is simple, organized, and built around your project needs.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {PROCESS_STEPS.map(({ title, description, iconUrl }) => (
            <ProcessCard
              key={title}
              title={title}
              description={description}
              iconUrl={iconUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
