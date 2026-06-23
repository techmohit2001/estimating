'use client';

import Image from 'next/image';
import { Cormorant_Garamond } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black min-h-[500px] h-[60vh] sm:min-h-[500px] sm:h-[min(80vh,720px)]">
      <div
        className="absolute inset-0 [clip-path:polygon(65%_0,100%_0,100%_100%,65%_100%)] sm:[clip-path:polygon(68%_0,100%_0,100%_100%,42%_100%)]"
        aria-hidden
      >
        <Image
          src="/services-quantity-home.png"
          alt="Construction professionals reviewing blueprints on site"
          fill
          priority
          className="scale-110 object-cover object-[44%_38%] sm:object-[40%_34%] lg:object-[36%_30%]"
          sizes="(max-width: 640px) 87vw, 55vw"
        />
      </div>

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
            <span className="text-[#2997FF]">Quantity Takeoff</span>
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
