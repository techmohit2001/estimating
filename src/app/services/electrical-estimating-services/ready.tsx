'use client';

import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

// Background image URL — yahan apna image path paste karein (e.g. '/your-image.jpg')
const BACKGROUND_IMAGE_URL = '/services-ready.jpg';

export default function Ready() {
  return (
    <section className="w-full pt-0 pb-10 lg:pb-12">
      <div
        className="relative mx-auto w-full overflow-hidden"
        style={{
          ...(BACKGROUND_IMAGE_URL && {
            backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }),
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden />

        <div
          className={`${poppins.className} relative z-10 flex flex-col items-center justify-center px-6 pt-10 pb-20 text-center sm:px-10 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-32`}
        >
          <h2
            className="text-white"
            style={{
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0',
              textAlign: 'center',
            }}
          >
            Ready to move your project forward?
          </h2>

          <p
            className="mt-4 max-w-[720px] text-white"
            style={{
              fontWeight: 100,
              fontSize: '14px',
              lineHeight: '1.5',
              letterSpacing: '0',
              textAlign: 'center',
            }}
          >
            Contact us today for accurate Construction Estimating, Quantity Takeoff, and Plumbing
            Estimating services.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center bg-[#2E8FFF] px-10 py-5 text-white transition-colors duration-200 hover:bg-[#1a7ae6]"
            style={{
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '1',
              textAlign: 'center',
            }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
