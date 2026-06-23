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
  weight: ['400'],
});

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

export default function Commercial() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <h2
            className={`${cormorantGaramond.className} text-[#1a1a1a]`}
            style={{
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '45px',
              lineHeight: '1.1',
            }}
          >
            Why Plumbing Estimating Matters
          </h2>
          <span
            className="mt-2 block h-[3px] w-14 rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />

          <div
            className={`${poppins.className} mt-5 text-[16px] space-y-4 text-[#303030]`}
            style={bodyTextStyle}
          >
            <p>
            Plumbing systems are detailed and often spread across multiple drawings. A pipe route may be shown on one sheet, equipment details may be listed on another, and fixture requirements may be explained in a schedule or specification section. If these details are not reviewed properly, important items can be missed during bidding. A missed valve, fitting, fixture, cleanout, drain, or equipment item may look small, but it can affect the bid price and profit margin. This is why accurate plumbing estimating is important for contractors who want to submit competitive and complete bids.
            </p>
            <p>
            A detailed plumbing estimate helps you understand the material scope, labor requirement, equipment cost, and possible budget risks before work begins. It also helps with supplier comparison, subcontractor review, material ordering, and project planning. For busy contractors, outsourcing estimating work saves time and helps them bid on more projects without reducing quality.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center md:mt-30 md:justify-end lg:mt-34">
          <div className="relative h-[380px] w-full max-w-[520px] overflow-hidden rounded-[15px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:h-[460px] md:max-w-none md:h-[520px]">
            <Image
              src="/services-plumbing-services.jpg"
              alt="Commercial plumber working on pipes under a sink"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
