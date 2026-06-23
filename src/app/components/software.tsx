'use client';
import React from 'react';
import Image from 'next/image';

export default function Software() {
  const softwareTools = [
    {
      id: 1,
      name: 'PlanSwift',
      logoUrl: '/home-software1.png',
    },
    {
      id: 2,
      name: 'Bluebeam',
      logoUrl: '/home-software2.png',
    },
    {
      id: 3,
      name: 'Xactimate',
      logoUrl: '/home-software3.png',
    },
    {
      id: 4,
      name: 'Trimble',
      logoUrl: '/home-software4.png',
    },
    {
      id: 5,
      name: 'On-Screen Takeoff',
      logoUrl: '/home-software5.png',
    },
    {
      id: 6,
      name: 'RSMeans',
      logoUrl: '/home-software6.png',
    },
  ];

  return (
    <section className="w-full bg-white px-4 pt-4 pb-10 sm:px-6 sm:pt-5 sm:pb-10 lg:px-10 lg:pt-6 lg:pb-12">
      <div className="mx-auto max-w-[1240px]">
        <h2
          className="text-[36px] leading-none text-[#0f0f0f] sm:text-[45px]"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 600 }}
        >
          Software We Use
        </h2>
        <div className="mt-[10px] h-[3px] w-[68px] rounded bg-gradient-to-r from-[#2997FF] to-[#0068CB]" />

        <div className="mt-6 grid grid-cols-2 justify-items-center gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {softwareTools.map((tool) => (
            <div
              key={tool.id}
              className="flex h-[84px] w-full max-w-[168px] items-center justify-center rounded-[8px] border border-[#c8c8c8] bg-white px-3 shadow-[0_2px_8px_rgba(0,0,0,0.22)] transition-transform duration-200 hover:-translate-y-[1px]"
            >
              <Image
                src={tool.logoUrl}
                alt={tool.name}
                width={150}
                height={48}
                className="max-h-[38px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}