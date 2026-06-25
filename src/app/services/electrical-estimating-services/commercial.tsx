'use client';

import { Cormorant_Garamond, Poppins } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const bodyTextStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontWeight: 400,
} as const;

const BENEFITS = [
  'Accurate quantity takeoffs for lighting, power, conduit, wiring, and equipment',
  'Reduced risk of missed fixtures, cable lengths, and system components',
  'Faster bid preparation and supplier quote requests',
  'Better labor planning and cost evaluation',
  'Support for design revisions and addenda updates',
  'Improved scope review for complex electrical projects',
  'Clear organization of power distribution, lighting controls, fire alarm, data, and security systems',
] as const;

export default function Commercial() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      <div className="w-full">
        <div>
          <h2
            className={`${cormorantGaramond.className} text-[#111]`}
            style={{
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '45px',
              lineHeight: '1.15',
              textTransform: 'capitalize',
            }}
          >
            Benefits of Our Electrical Estimating Services
          </h2>
          <span
            className="mt-2 block h-1 w-14 rounded-sm bg-[#2997FF]"
            aria-hidden
          />
        </div>

        <div
          className={`${poppins.className} mt-6 space-y-5 text-[#303030]`}
          style={bodyTextStyle}
        >
          <p>
            A detailed electrical estimate helps contractors improve bid accuracy, reduce costly
            omissions, and save valuable time during the bidding process. Electrical plans often
            include multiple systems spread across several drawings, making it easy to overlook
            important quantities. Our{' '}
            <strong className="font-bold">electrical takeoff services</strong> provide a clear
            breakdown of materials and components before pricing begins, helping your team stay
            organized and confident.
          </p>
          <ul className="list-disc space-y-3 pl-5">
            {BENEFITS.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <p>
            With reliable{' '}
            <strong className="font-bold">electrical estimating</strong> support, contractors can
            prepare competitive bids, manage project costs more effectively, and make informed
            decisions throughout the bidding and planning stages.
          </p>
        </div>
      </div>
    </div>
  );
}
