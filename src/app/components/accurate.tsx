'use client';

import { useState } from 'react';
import { Cormorant_Garamond, Poppins } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic']
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400']
});

const TAB_CONTENT = [
  {
    key: 'accurate',
    tabLabel: 'Accurate Bid',
    heading: 'Accurate Bid Preparation',
    description:
      'Our estimating specialists prepare detailed and dependable cost estimates by carefully reviewing project drawings, specifications, labor requirements, and material quantities. Whether you need Construction Estimating, Quantity Takeoff, or trade-specific pricing support, our process helps reduce missed scope items and improves bidding confidence.',
    points: [
      { icon: '✎', text: 'Review Drawings & Specifications' },
      { icon: '⌗', text: 'Detailed Cost Breakdowns' },
      { icon: '⌕', text: 'Reduce Scope Gaps' },
      { icon: '↗', text: 'Improve Bid Confidence' }
    ]
  },
  {
    key: 'industry',
    tabLabel: 'Industry Expertise',
    heading: 'Trade-Specific Estimating Expertise',
    description:
      'We provide specialized estimating support across multiple trades and construction disciplines. Our team handles Plumbing Estimating, Mechanical Estimating, Electrical Estimating, and Architectural Cost Estimating with a practical understanding of project scope, materials, and execution requirements. This industry-focused approach helps clients receive estimates that are not just fast, but usable in real bidding and planning situations.',
    points: [
      { icon: '◉', text: 'Plumbing Estimating Support' },
      { icon: '⚙', text: 'Mechanical & Electrical Estimates' },
      { icon: '△', text: 'Architectural Cost Analysis' },
      { icon: '▣', text: 'Multi-Sector Project Experience' }
    ]
  },
  {
    key: 'planning',
    tabLabel: 'Reliable Planning',
    heading: 'Reliable Planning & Cost Control',
    description:
      'Strong projects start with strong numbers. Our Quantity Takeoff and estimating services help clients plan budgets, compare costs, allocate resources, and prepare for execution with greater clarity. By combining Construction Estimating with well-structured quantity reviews, we support better decision-making before the project moves to the field.',
    points: [
      { icon: '▤', text: 'Budget Planning Support' },
      { icon: '◫', text: ' Quantity-Based Cost Control' },
      { icon: '✦', text: 'Better Preconstruction Decisions' },
      { icon: '◷', text: 'Clearer Resource Forecasting' }
    ]
  }
] as const;

export default function Accurate() {
  const [activeTab, setActiveTab] = useState(0);
  const activeContent = TAB_CONTENT[activeTab];

  return (
    <section className="relative w-full overflow-hidden bg-white pt-8 pb-14 lg:pt-10 lg:pb-16">
      <div className="pointer-events-none absolute right-0 top-[84px] hidden h-[350px] w-[48px] rounded-l-2xl bg-gradient-to-b from-[#2997FF] to-[#2997FF] lg:block" />
      <div className="pointer-events-none absolute bottom-[28px] left-0 hidden h-[412px] w-[56px] rounded-r-2xl bg-gradient-to-r from-[#2997FF] to-[#2997FF] lg:block" />
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[58px] w-[386px] rounded-tr-2xl bg-gradient-to-r from-[#2997FF] to-[#2997FF] lg:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-6 sm:px-10 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:px-16">
        <div className="max-w-[650px] text-[#1f1f1f]">
          <h2
            className={`${cormorantGaramond.className}`}
            style={{
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'clamp(28px,5vw,45px)',
              lineHeight: '70px',
              letterSpacing: '0.02em',
              textTransform: 'capitalize'
            }}
          >
            Our Estimating Expertise
          </h2>
          <div className="mb-6  h-[3px] w-[68px] rounded bg-gradient-to-r from-[#2997FF] to-[#0068CB]" />

          <div
            className={`${poppins.className} space-y-5 text-[#303030]`}
            style={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '1.35',
              letterSpacing: '0'
            }}
          >
            <p>
              <span className="font-semibold">Founded in 2025</span>, we are a dedicated
              <span className="font-semibold"> construction estimating company </span>
              serving construction professionals across the USA and selected projects in Canada
              with accurate, reliable, and timely estimating support.
              We work with <span className="font-semibold">general contractors</span>,
              <span className="font-semibold"> architects</span>,
              <span className="font-semibold"> wall contractors</span>,
              <span className="font-semibold"> plumbing contractors</span>,
              <span className="font-semibold"> MEP contractors</span>, and other industry
              professionals who need dependable numbers for better bidding and planning.  Using industry-standard software such as 
              <span className="font-semibold"> Plan Swift, Bluebeam, Xactimate, Trimble, Acavid, On-Screen Takeoff, and RS Means</span>, we deliver 
              efficient and dependable estimating solutions.
            </p>
            <p>
            We provide Plumbing Estimating, Construction Estimating, Mechanical Estimating, Architectural Cost Estimating, Quantity Takeoff, 
            and Electrical Estimating for <span className="font-semibold">commercial, Industrial, civil, and residential projects.</span>  Our focus is to deliver precise estimates 
            and takeoffs that save time, reduce uncertainty, and support smarter project decisions.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-[#e1e1e1] p-3 shadow-[0_4px_16px_rgba(0,0,0,0.14)]">
          <div className={`${poppins.className} mb-3 grid grid-cols-3 gap-2 text-[16px]`}>
            {TAB_CONTENT.map((tab, index) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`rounded-t-xl rounded-b-none px-3 py-4 font-medium transition-colors duration-200 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-[#2997FF] to-[#0068CB] text-white'
                    : 'bg-[#d5d5d5] text-[#2b2b2b]'
                }`}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-[#d9d9d9] bg-[#f8f8f8] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
            <h3
              className={`${cormorantGaramond.className} mb-4 text-[#111]`}
              style={{
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '40px',
                lineHeight: '1.1',
                letterSpacing: '0.01em'
              }}
            >
              {activeContent.heading}
            </h3>
            <p className={`${poppins.className} mb-6 text-[16px] leading-relaxed text-[#222]`}>
              {activeContent.key === 'accurate' ? (
                <>
                  Our estimating specialists prepare detailed and dependable cost estimates by
                  carefully reviewing project drawings, specifications, labor requirements, and
                  material quantities. Whether you need
                  <span className="font-semibold"> Construction Estimating</span>,
                  <span className="font-semibold"> Quantity Takeoff</span>, or trade-specific
                  pricing support, our process helps reduce missed scope items and improves
                  bidding confidence.
                </>
              ) : activeContent.key === 'industry' ? (
                <>
                  We provide specialized estimating support across multiple trades and
                  construction disciplines. Our team handles
                  <span className="font-semibold"> Plumbing Estimating</span>,
                  <span className="font-semibold"> Mechanical Estimating</span>,
                  <span className="font-semibold"> Electrical Estimating</span>, and
                  <span className="font-semibold"> Architectural Cost Estimating</span> with a
                  practical understanding of project scope, materials, and execution requirements.
                  This industry-focused approach helps clients receive estimates that are not just
                  fast, but usable in real bidding and planning situations.
                </>
              ) : activeContent.key === 'planning' ? (
                <>
                  Strong projects start with strong numbers. Our
                  <span className="font-semibold"> Quantity Takeoff</span> and estimating services
                  help clients plan budgets, compare costs, allocate resources, and prepare for
                  execution with greater clarity. By combining
                  <span className="font-semibold"> Construction Estimating</span> with
                  well-structured quantity reviews, we support better decision-making before the
                  project moves to the field.
                </>
              ) : (
                'No description available'
              )}
            </p>

            <div className={`${poppins.className} grid grid-cols-2 gap-4 text-[16px] text-[#2a2a2a]`}>
              {activeContent.points.map((point) => (
                <div key={point.text} className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#2997FF] to-[#0068CB] text-[20px] text-white">
                    {point.icon}
                  </span>
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}