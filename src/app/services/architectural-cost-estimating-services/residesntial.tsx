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
  weight: ['400', '600'],
});

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

export default function Residential() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-12">
        <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[300px] lg:h-full lg:min-h-0">
          <Image
            src="/services-cost-residential.png"
            alt="Construction professionals reviewing an architectural scale model at a building site"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <h2
            className={`${cormorantGaramond.className} text-[#1a1a1a]`}
            style={{
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '45px',
              lineHeight: '1.15',
            }}
          >
            <span className="relative inline-block">
              Material
              
            
            Cost <br />Estimating
            <span
                className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
                style={{ background: brandGradient }}
                aria-hidden
              />
              </span>{' '}
          </h2>

          <p
            className={`${poppins.className} mt-6 text-[#303030]`}
            style={bodyTextStyle}
          >
            Material cost is one of the most important parts of architectural estimating.
            Different materials, brands, finishes, and product selections can change the total
            project cost. For example, a basic flooring system and a premium flooring system may
            cover the same area but create a very different budget. We calculate the required
            material quantities and organize the costs in a clear format. This may include
            flooring materials, wall finishes, ceiling systems, doors, windows, frames, hardware,
            millwork, insulation, trims, panels, fixtures, and other architectural items. If the
            drawings include finish schedules or material specifications, we review those details
            carefully. If something is unclear, we mention assumptions or notes in the estimate
            so the client can review it properly.
          </p>
        </div>
      </div>
    </div>
  );
}
