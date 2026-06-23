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

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const SOFTWARE_TOOLS = [
  { name: 'Bluebeam Revu', logoUrl: '/home-software2.png', highlighted: true },
  { name: 'PlanSwift', logoUrl: '/home-software1.png' },
  { name: 'Trimble Estimation', logoUrl: '/home-software4.png' },
  { name: 'FastPIPE', logoUrl: '/home-software3.png' },
  { name: 'Excel', logoUrl: '/services-quantity-software1.png' },
] as const;

function SoftwareCard({
  name,
  logoUrl,
  highlighted = false,
}: {
  name: string;
  logoUrl: string;
  highlighted?: boolean;
}) {
  return (
    <article
      className={`group flex flex-col items-center justify-center rounded-xl border bg-[#0a0a0a] px-5 py-6 transition-colors duration-300 sm:py-7 ${
        highlighted
          ? 'border-[#2997FF]'
          : 'border-[#2a2a2a] hover:border-[#2997FF]'
      }`}
    >
      <div className="mb-3 flex size-[52px] shrink-0 items-center justify-center rounded-lg bg-white p-2">
        <Image
          src={logoUrl}
          alt={name}
          width={40}
          height={40}
          className="max-h-9 w-auto object-contain"
        />
      </div>
      <h3
        className={`${poppins.className} text-center font-semibold text-white`}
        style={{ fontSize: '18px', lineHeight: 1.3 }}
      >
        {name}
      </h3>
    </article>
  );
}

const CARD_GRID_CLASS = [
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-start-2 lg:col-span-2',
  'lg:col-span-2',
] as const;

export default function Software() {
  return (
    <section className="w-full pb-8 lg:pb-10">
      <div className="overflow-hidden rounded-2xl bg-black px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <h2
          className={`${cormorantGaramond.className} text-white`}
          style={{
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '45px',
            lineHeight: '1.1',
          }}
        >
          <span className="relative inline-block">
            Software
            <span
              className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
              style={{ background: brandGradient }}
              aria-hidden
            />
          </span>{' '}
          we use
        </h2>

        <p
          className={`${poppins.className} mt-6 max-w-3xl text-[#d1d1d1]`}
          style={bodyTextStyle}
        >
          We use professional estimating and takeoff tools to improve speed, organization, and
          accuracy. The software may vary depending on the project type, drawing format, trade scope,
          and client requirement.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-6 lg:gap-6">
          {SOFTWARE_TOOLS.map((tool, index) => (
            <div key={tool.name} className={CARD_GRID_CLASS[index]}>
              <SoftwareCard
                name={tool.name}
                logoUrl={tool.logoUrl}
                highlighted={'highlighted' in tool ? tool.highlighted : false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
