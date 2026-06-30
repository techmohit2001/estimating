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

const brandGradient =
  'linear-gradient(90deg, #2997FF 0%, #0068CB 100%), linear-gradient(0deg, #2997FF, #2997FF)';

function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2
        className={`${cormorantGaramond.className} text-[#1a1a1a]`}
        style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '45px',
          lineHeight: '1.15',
          textTransform: 'capitalize',
        }}
      >
        {title}
      </h2>
      <span
        className="mt-2 block h-[3px] w-14 rounded-full"
        style={{ background: brandGradient }}
        aria-hidden
      />
    </div>
  );
}

const SECTIONS = [
  {
    title: 'Labor Cost Estimating',
    body:
      'Labor cost can strongly affect the final project price. Architectural work often involves installation, finishing, fixing, painting, cutting, fitting, and coordination with other trades. A good estimate should show both material and labor cost so the client can understand the complete price picture. Our estimating team reviews the scope and calculates labor based on project size, construction type, installation complexity, and the level of detail available in the documents. Labor estimating may include installation work for flooring, drywall, ceilings, doors, windows, partitions, finishes, millwork, painting, and interior elements. By separating material and labor costs, we make the estimate easier to review, compare, and update.',
  },
  {
    title: 'Architectural Design Cost Estimating',
    body:
      'Design decisions directly affect construction cost. A small change in flooring type, ceiling design, wall finish, window style, door hardware, or interior detail can increase or reduce the budget. Our architectural design cost estimating service helps architects, developers, and owners understand how design choices impact cost before final approval. This service is useful during concept design, schematic design, design development, value engineering, and budget planning. It helps the project team compare material options, review finish selections, and make practical decisions without losing control of the budget. For example, if a client wants to compare two ceiling systems or two flooring materials, an architectural design estimate helps them understand the cost difference clearly. This makes the design process more practical and cost-aware.',
  },
  {
    title: 'Building Cost Estimating Services for Architectural Scope',
    body:
      'Architectural estimating is a key part of complete building cost estimating services because architectural elements shape the appearance, usability, and interior quality of the building. These items also connect with several other trades during construction. Wall layouts may affect mechanical routing. Ceiling designs may affect lighting and HVAC coordination. Door and opening schedules may affect access, safety, and installation sequencing. Finish selections may affect procurement and project timeline. This is why architectural estimates should not be prepared in isolation. A well-organized architectural estimate helps the full project budget become more accurate and easier to manage.',
  },
] as const;

export default function Commercial() {
  return (
    <div className="w-full pb-8 lg:pb-10">
      {SECTIONS.map(({ title, body }, index) => (
        <div key={title} className={index > 0 ? 'mt-10 sm:mt-12' : undefined}>
          <SectionHeading title={title} />
          <p
            className={`${poppins.className} mt-6 text-[#303030]`}
            style={bodyTextStyle}
          >
            {body}
          </p>
        </div>
      ))}
    </div>
  );
}
