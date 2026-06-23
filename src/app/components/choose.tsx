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

export default function Choose() {
  return (
    <section className="w-full bg-white px-4 pt-2 pb-8 sm:px-6 lg:px-10 lg:pt-3 lg:pb-10">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
              Why
              <span
                className="absolute left-0 top-full mt-1.5 h-[3px] w-full rounded-full"
                style={{ background: brandGradient }}
                aria-hidden
              />
            </span>{' '}
            Choose Us
          </h2>

          <div
            className={`${poppins.className} mt-6 text-[#303030]`}
            style={bodyTextStyle}
          >
            <p>
              We provide accurate and reliable construction estimating and quantity takeoff services
              designed to support contractors, builders, developers, and subcontractors in every
              stage of their project. Our focus is on delivering precise cost estimates that help you
              bid competitively, reduce risks, and avoid unexpected expenses during construction.
              With a team of experienced estimators, we ensure every detail is carefully reviewed and
              measured according to industry standards. We work on residential, commercial, and
              industrial projects, offering clear and well-structured reports that make budgeting and
              planning easier. We also understand the importance of time in the construction
              industry, so we prioritize fast turnaround without compromising accuracy. Our goal is to
              help you save time, improve bid quality, and increase your chances of winning more
              projects while maintaining full cost control.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
          <div className="absolute left-[4%] top-[-26px] h-[88%] w-[66%] rounded-tl-[14px] bg-black" />
          <div className="relative z-10 ml-auto h-[340px] w-[92%] overflow-hidden rounded-[14px] shadow-lg">
            <Image
              src="/home-choose.jpg"
              alt="Construction estimating professionals reviewing project plans"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 340px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
