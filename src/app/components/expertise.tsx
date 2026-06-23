'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Expertise() {
  const router = useRouter();

  const handleGetQuoteClick = () => {
    router.push('/contact');
  };

  return (
    <section
      className="w-full bg-black px-6 py-8 lg:px-10 lg:py-10"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3
            className="text-white text-[18px] font-[600] leading-[1.2]"
          >
            Ready to move your project forward?
          </h3>
          <p
            className="mt-3 text-[#B8B8B8] text-[16px] font-[400] leading-[1.4] max-w-3xl"
          >
            Contact us today for accurate Construction Estimating, Quantity
            Takeoff, and Plumbing Estimating services.
          </p>
        </div>

        <button
          type="button"
          onClick={handleGetQuoteClick}
          className="h-[48px] w-[145px] lg:h-[56px] lg:w-[200px] lg:mr-28 rounded-[12px] bg-[#2E8FFF] text-white text-[16px] font-[600] transition-colors duration-200 hover:bg-white hover:text-black"
        >
          Get a Quote
        </button>
      </div>
    </section>
  );
}