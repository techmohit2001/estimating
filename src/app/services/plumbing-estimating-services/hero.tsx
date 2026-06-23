'use client';

import Image from 'next/image';
import { Cormorant_Garamond } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[380px] h-[58vh] sm:min-h-[500px] sm:h-[min(80vh,720px)]">
      <Image
        src="/services-plumbing-services.png"
        alt="Plumber working on pipes"
        fill
        priority
        className="object-cover object-[82%_center] sm:object-[72%_center] lg:object-[68%_center]"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-black [clip-path:polygon(0_0,72%_0,58%_100%,0_100%)] sm:[clip-path:polygon(0_0,58%_0,42%_100%,0_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-center px-4 sm:px-10 lg:px-16">
        <div className="max-w-[240px] ml-3 mt-6 sm:max-w-[520px] sm:ml-14 sm:mt-14 lg:ml-20 lg:mt-16 lg:max-w-[720px]">
          <p
            className="mb-0 text-[10px] font-medium uppercase tracking-[0.18em] text-[#2997FF] sm:text-[16px] sm:tracking-[0.22em] md:text-[18px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Services
          </p>

          <h1
            className={`${cormorantGaramond.className} -mt-0.5 text-[28px] font-normal leading-[26px] tracking-normal sm:-mt-2 sm:text-[60px] sm:leading-[55px] lg:text-[85px] lg:leading-[85px]`}
          >
            <span className="text-[#2997FF]">Plumbing</span>
            <br />
            <span className="text-white">Estimating</span>
            <br />
            <span className="text-white">Services</span>
          </h1>

          <div className="mt-2.5 h-[2px] w-10 rounded-full bg-[#2997FF] sm:mt-5 sm:h-[3px] sm:w-14" />

          <p
            className="mt-3 max-w-[220px] text-[12px] font-normal leading-[1.5] text-white sm:mt-6 sm:max-w-[400px] sm:text-[clamp(0.875rem,1.8vw,20px)] sm:leading-[1.55]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Save time before bid day with precise plumbing cost estimating services.
          </p>
        </div>
      </div>
    </section>
  );
}
