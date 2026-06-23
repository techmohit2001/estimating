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
  weight: ['200', '400'],
});

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
    <article className="group flex flex-col items-center justify-center rounded-xl border border-white bg-[#0a0a0a] px-5 py-6 transition-all duration-300 hover:border-[#2997FF] hover:bg-[#2997FF]/10 hover:shadow-[0_0_24px_rgba(41,151,255,0.2)] sm:py-7">
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
    <section className="w-full bg-black px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-14 lg:px-10 lg:pt-10 lg:pb-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <h2
          className={`${cormorantGaramond.className} text-center text-white`}
          style={{
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '45px',
            lineHeight: 1.1,
          }}
        >
          Software We Use
        </h2>

        <div className="mx-auto mt-4 h-[3px] w-10 rounded-full bg-[#2997FF]" />

        <p
          className={`${poppins.className} mx-auto mt-4 max-w-5xl text-center text-white`}
          style={{
            fontSize: '16px',
            lineHeight: 1.6,
            fontWeight: 200,
          }}
        >
          To improve accuracy and efficiency, we use modern estimating and takeoff tools commonly
          used in the construction industry. These tools help us measure drawings, organize
          quantities, review project documents, and prepare clear cost reports.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {SOFTWARE_TOOLS.map(({ name, logoUrl }) => (
            <SoftwareCard key={name} name={name} logoUrl={logoUrl} />
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-[#1f1f1f] px-6 py-6 sm:mt-10 sm:px-8 sm:py-7">
          <p
            className={`${poppins.className} text-center text-white`}
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              fontWeight: 200,
            }}
          >
            By combining software accuracy with human review, we deliver estimates that are
            practical, reliable, and easy to understand.
          </p>
        </div>
      </div>
    </section>
  );
}
