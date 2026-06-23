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

export default function Solve() {
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
            What Is Mechanical Estimating?
          </h2>
          <span
            className="mt-2 block h-1 w-14 rounded-sm bg-[#2997FF]"
            aria-hidden
          />
        </div>

        <p
          className={`${poppins.className} mt-6 text-[#303030]`}
          style={bodyTextStyle}
        >
          Mechanical estimating is the process of calculating the material quantities, labor costs,
          equipment costs, and total expected cost for mechanical systems in a construction project.
          These systems may include HVAC, ductwork, chilled water piping, hot water piping, gas
          piping, steam piping, exhaust systems, ventilation, insulation, mechanical equipment,
          and related accessories. A mechanical estimate helps contractors understand what the
          project will cost before they submit a bid. It also helps them review the scope, compare
          supplier pricing, check subcontractor quotes, and avoid underbidding or overpricing.
          Mechanical estimating is important because mechanical systems are usually technical,
          detailed, and connected with other trades. For example, HVAC work may affect electrical
          loads, ceiling layouts, duct routing, fire safety coordination, plumbing connections,
          and equipment placement. Without a proper estimate, contractors may miss important items
          such as hangers, supports, dampers, valves, insulation, sleeves, fittings, or equipment
          accessories. A professional mechanical estimate gives you a better view of the complete
          scope. It helps you know what materials are required, how much labor may be needed, what
          equipment must be included, and where the cost risks may appear.
        </p>
      </div>
    </div>
  );
}
