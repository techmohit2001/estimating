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
            Benefits of Electrical Takeoff Services
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
            A detailed electrical estimate helps contractors save time, reduce missed items, and
            prepare stronger bids. Electrical drawings can be complex, especially when lighting,
            power, panels, equipment connections, and low-voltage systems are spread across
            multiple sheets. Our{' '}
            <strong className="font-bold">electrical takeoff services</strong> help your team measure
            quantities clearly before pricing the job. This reduces the risk of missed fixtures,
            incorrect wiring lengths, incomplete conduit takeoffs, and overlooked equipment
            connections. With a clear{' '}
            <strong className="font-bold">electrical quantity takeoff</strong>, contractors can
            request supplier quotes, review labor needs, compare scope, and prepare bid pricing more
            efficiently. This is useful for tight bid deadlines, design changes, addenda updates,
            and projects with multiple electrical systems. A reliable{' '}
            <strong className="font-bold">electrical estimating</strong> company also helps your team
            stay organized when the project includes complex power distribution, lighting control,
            fire alarm, data, security, and equipment coordination.
          </p>
        </div>
      </div>
    </div>
  );
}
