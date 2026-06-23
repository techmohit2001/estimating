'use client';
import React from 'react';

export default function Expertise() {
  const handleGetQuoteClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section
      className="w-full bg-black px-6 py-8 lg:px-10 lg:py-10"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[560px]">
          <h3
            className="text-white text-[34px] lg:text-[45px] font-[700] italic leading-[100%] tracking-[0%]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Get Accurate Estimates Without Slowing Down Your Bids
          </h3>
        </div>

        <div className="max-w-[360px] lg:mr-10">
          <p className="text-[#D2D2D2] text-[16px] font-[400] leading-[140%]">
            Talk to our estimating experts and get fast, reliable takeoffs for
            your next project.
          </p>
          <button
            type="button"
            onClick={handleGetQuoteClick}
            className="mt-6 h-[52px] w-[190px] rounded-[12px] bg-[#2E8FFF] text-white text-[16px] font-[500] transition-colors duration-200 hover:bg-white hover:text-black"
          >
            Get An Estimate ↗
          </button>
        </div>
      </div>
    </section>
  );
}