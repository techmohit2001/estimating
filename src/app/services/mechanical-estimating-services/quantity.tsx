'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
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

const sectionHeadingStyle = {
  fontSize: '18px',
  lineHeight: '1.4',
  fontWeight: 700,
} as const;

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

const SERVICE_SECTIONS = [
  {
    key: 'hvac',
    title: 'HVAC Estimating Services',
    body: (
      <>
        Our <strong className="font-bold">HVAC estimating services</strong> help contractors calculate
        the cost of heating, ventilation, and air conditioning systems. HVAC work often includes
        several components, and every small item can impact the final bid. We review HVAC drawings,
        equipment schedules, specifications, and notes to prepare a detailed estimate. Our HVAC
        estimates may include rooftop units, air handling units, fan coil units, exhaust fans, VAV
        boxes, diffusers, grilles, registers, louvers, dampers, ductwork, insulation, hangers,
        supports, and accessories. We prepare HVAC estimates for offices, schools, hospitals,
        restaurants, retail buildings, warehouses, apartments, hotels, industrial facilities, and
        residential projects. A clear HVAC estimate helps contractors understand material quantities,
        labor needs, equipment costs, and installation scope before bidding.
      </>
    ),
  },
  {
    key: 'ductwork',
    title: 'Ductwork Estimating',
    body: (
      <>
        Ductwork is a major part of many mechanical projects. It includes sheet metal ducts, fittings,
        transitions, elbows, branches, offsets, dampers, hangers, supports, access doors, insulation,
        and accessories. Our <strong className="font-bold">ductwork estimating service</strong> helps
        contractors calculate these quantities accurately from project drawings. We measure rectangular
        duct, round duct, spiral duct, flexible duct, duct fittings, volume dampers, fire dampers,
        smoke dampers, turning vanes, duct insulation, and other related components. We also review
        duct sizes, routing, system layout, and installation notes to prepare a more complete
        estimate. A detailed ductwork estimate helps contractors avoid missed items, control sheet
        metal costs, and prepare a stronger bid for HVAC-related work.
      </>
    ),
  },
  {
    key: 'piping',
    title: 'Piping Estimating',
    body: (
      <>
        Mechanical piping can be complex, especially in commercial and industrial projects. Our{' '}
        <strong className="font-bold">piping estimating</strong> service helps contractors calculate
        pipe lengths, fittings, valves, supports, insulation, equipment connections, and related
        accessories. We prepare piping estimates for chilled water, hot water, condenser water, steam,
        gas, hydronic systems, compressed air, process piping, and other mechanical piping scopes
        based on project requirements. Our estimators review pipe sizes, materials, routing,
        specifications, valve schedules, insulation notes, and mechanical equipment connections. This
        helps create a clear piping takeoff that supports better pricing and scope control.
      </>
    ),
  },
  {
    key: 'plumbing-mechanical',
    title: 'Plumbing-Related Mechanical Scope',
    body: (
      <>
        Some projects have overlapping mechanical and plumbing scopes. In such cases, our team helps
        identify items that may connect with plumbing systems, equipment drainage, condensate lines,
        gas piping, water connections, or mechanical room piping. When your project requires separate
        plumbing pricing, you can also connect this service with our{' '}
        <strong className="font-bold">plumbing estimating</strong> services for a more complete MEP
        estimate. This helps contractors review plumbing and mechanical scope in a cleaner way without
        mixing responsibilities or missing related items.
      </>
    ),
  },
  {
    key: 'insulation',
    title: 'Insulation Estimating',
    body: (
      <>
        Mechanical insulation affects energy performance, code compliance, condensation control, and
        system efficiency. Our insulation estimating includes duct insulation, pipe insulation,
        equipment insulation, jackets, vapor barriers, and other related materials based on the
        drawings and specifications. We review insulation thickness, material type, system
        requirements, and project notes to calculate quantities properly. This is especially useful for
        HVAC, chilled water, hot water, steam, and industrial piping systems where insulation can
        become a major cost item.
      </>
    ),
  },
  {
    key: 'equipment',
    title: 'Mechanical Equipment Takeoffs',
    body: (
      <>
        Mechanical equipment can carry a major portion of the project cost. We prepare detailed
        equipment takeoffs for items such as rooftop units, air handling units, fan coil units,
        chillers, boilers, pumps, exhaust fans, cooling towers, VAV boxes, unit heaters, and other
        project-specific equipment. We review equipment schedules, mechanical drawings,
        specifications, and notes to identify required quantities and scope. This helps contractors
        confirm what equipment is included in the bid and what may need supplier pricing or separate
        vendor quotes.
      </>
    ),
  },
  {
    key: 'industrial',
    title: 'Industrial Mechanical Estimating',
    body: (
      <>
        Our <strong className="font-bold">industrial mechanical estimating</strong> service supports
        contractors working on manufacturing plants, warehouses, processing facilities, utility
        buildings, data centers, energy facilities, and other industrial projects. Industrial projects
        often include larger mechanical systems, process piping, heavy equipment, complex ventilation,
        exhaust systems, pump systems, supports, specialty valves, and strict specification
        requirements. These projects need careful review because missed scope can create major cost
        issues. We help contractors prepare detailed industrial estimates that include piping,
        ductwork, equipment, insulation, labor, accessories, and project-specific mechanical
        requirements.
      </>
    ),
  },
] as const;

function ServiceBlock({ title, body }: { title: string; body: ReactNode }) {
  return (
    <article>
      <h3
        className={`${poppins.className} text-[#1a1a1a]`}
        style={sectionHeadingStyle}
      >
        {title}
      </h3>
      <p
        className={`${poppins.className} mt-3 text-[#303030]`}
        style={bodyTextStyle}
      >
        {body}
      </p>
    </article>
  );
}

export default function Quantity() {
  return (
    <div className="w-full pb-8 lg:pb-10">
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
          Scope
          <span
            className="absolute left-0 top-full mt-1 h-[3px] w-[1.15em] rounded-full"
            style={{ background: brandGradient }}
            aria-hidden
          />
        </span>{' '}
        of our Mechanical Estimating services
      </h2>

      <p
        className={`${poppins.className} mt-6 text-[#303030]`}
        style={bodyTextStyle}
      >
        We provide complete mechanical estimating support for contractors bidding on residential,
        commercial, industrial, and mixed-use projects. Our team works with project drawings and
        specifications to identify mechanical items, measure quantities, organize scope, and prepare
        cost summaries. Our estimating services cover different mechanical trades and systems,
        including HVAC, ductwork, piping, insulation, plumbing-related mechanical scope, and
        equipment takeoffs.
      </p>

      <div className="relative mt-8 aspect-[25/9] w-full overflow-hidden rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:mt-10">
        <Image
          src="/services-mechanical-quantity.png"
          alt="Vernier caliper measuring a ball bearing on engineering blueprints"
          fill
          className="object-cover"
          sizes="(max-width: 1400px) 100vw, 1400px"
        />
      </div>

      <div className="mt-8 space-y-8 sm:mt-10">
        {SERVICE_SECTIONS.map(({ key, title, body }) => (
          <ServiceBlock key={key} title={title} body={body} />
        ))}
      </div>
    </div>
  );
}
