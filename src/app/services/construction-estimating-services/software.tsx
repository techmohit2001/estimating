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
  { name: 'Bluebeam Revu', logoUrl: '/home-software2.png' },
  { name: 'PlanSwift', logoUrl: '/home-software1.png' },
  { name: 'On-Screen Takeoff', logoUrl: '/home-software5.png' },
  { name: 'RSMeans Data', logoUrl: '/home-software6.png' },
  { name: 'Trimble Estimation', logoUrl: '/home-software4.png' },
  { name: 'Accubid', logoUrl: '/home-software3.png' },
] as const;

function SoftwareCard({ name, logoUrl }: { name: string; logoUrl: string }) {
  return (
    <article className="group flex flex-col items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-5 py-6 transition-colors duration-300 hover:border-[#2997FF] sm:py-7">
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
            Software we use
            <span
              className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
              style={{ background: brandGradient }}
              aria-hidden
            />
          </span>
        </h2>

        <p
          className={`${poppins.className} mt-6 max-w-5xl text-white`}
          style={bodyTextStyle}
        >
          Our estimating workflow can include tools such as Bluebeam, PlanSwift, RSMeans, Trimble,
          On-Screen Takeoff, FastPIPE, and FastDUCT, depending on the project scope and trade
          requirements. These tools help improve measurement, organization, and reporting during the
          estimating process. However, software alone does not make a good estimate. The real value
          comes from experienced drawing review, proper scope understanding, clean quantity takeoff,
          and practical cost breakdown. Our construction estimating company combines digital tools
          with a structured estimating method to deliver reports that are useful for real project
          decisions.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {SOFTWARE_TOOLS.map(({ name, logoUrl }) => (
            <SoftwareCard key={name} name={name} logoUrl={logoUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
