'use client';
import React from 'react';
import Image from 'next/image';
import { Cormorant_Garamond, Poppins } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic']
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
});

export default function Speed() {
  const highlights = [
    { key: 'accuracy', label: 'Accuracy', icon: '/service-choose2.png' },
    { key: 'transparency', label: 'Transparency', icon: '/service-choose3.png' },
    { key: 'speed', label: 'Speed', icon: '/service-choose4.png' },
    { key: 'client-support', label: 'Client Support', icon: '/service-choose5.png' },
    { key: 'scalability', label: 'Scalability', icon: '/service-choose6.png' },
    { key: 'expertise', label: 'Expertise', icon: '/service-choose7.png' }
  ] as const;

  return (
    <section className="w-full bg-white py-6">
      <div
        className="relative mx-auto w-full max-w-[1600px] overflow-hidden"
        style={{
          backgroundImage: "url('/service-choose1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 lg:px-0">
          <h2
            className={`${cormorantGaramond.className} text-white`}
            style={{
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '45px',
              lineHeight: '70px',
              letterSpacing: '0.02em'
            }}
          >
            Why Choose Us
          </h2>

          <div className="mt-1 h-[3px] w-[68px] bg-gradient-to-r from-[#2997FF] to-[#0068CB]" />

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {highlights.map((item) => {
              return (
                <div
                  key={item.key}
                  className="group relative flex h-[115px] flex-col items-center justify-center overflow-hidden px-2"
                >
                  <div
                    className="absolute inset-0 scale-0 bg-[#2997FF] transition-transform duration-300 ease-out group-hover:scale-100"
                  />
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={56}
                    height={56}
                    className="relative z-10 h-14 w-14 object-contain transition duration-200 group-hover:brightness-0 group-hover:invert"
                  />
                  <p
                    className={`${poppins.className} relative z-10 mt-2 text-center text-white`}
                    style={{ fontSize: '16px', lineHeight: '1.2', fontWeight: 400 }}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}