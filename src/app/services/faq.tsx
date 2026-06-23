"use client";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqs = [
  {
    question: "What are plumbing estimating services, and why do contractors need them?",
    answer: "Plumbing estimating services help contractors, builders, and project managers understand the expected cost of a plumbing project before work begins. These services usually include material calculations, labor projections, fixture counts, piping quantities, and overall budget planning based on drawings and specifications. Accurate plumbing estimating services make it easier to prepare competitive bids, control spending, and reduce the risk of missing important items in the scope. For residential, commercial, and industrial projects, a well-prepared estimate supports better decision-making and improves confidence during bidding, procurement, and project execution."
  },
  {
    question: "What is included in plumbing takeoff services and plumbing cost estimating services?",
    answer: "Plumbing takeoff services focus on measuring and listing all required plumbing components from project drawings, such as pipes, fittings, valves, fixtures, drains, hangers, and equipment connections. Once the takeoff is completed, plumbing cost estimating services use those quantities to calculate material costs, labor costs, and pricing based on the project scope. Together, plumbing estimating services provide a complete picture of what the plumbing work will require in terms of quantities, cost, and planning. This helps contractors avoid underbidding, improve material ordering, and submit more accurate estimates."
  },
  {
    question: "Why is construction estimating important?",
    answer: "Construction estimating is important because it helps project teams understand budget requirements, control costs, and reduce financial risk before work starts. A clear estimate improves planning, purchasing, and scheduling while supporting better bid decisions."
  },
  {
    question: "What is included in mechanical estimating?",
    answer: "Mechanical estimating usually includes quantity takeoff and cost analysis for HVAC systems, ductwork, piping, equipment, insulation, and related accessories. It combines material, labor, and productivity factors to build an accurate project cost projection."
  },
  {
    question: "What is quantity takeoff?",
    answer: "Quantity takeoff is the process of measuring and listing the exact quantities of materials and components required for a construction project from drawings and specifications. It forms the foundation for accurate pricing and budgeting."
  },
  {
    question: "What is included in electrical estimating?",
    answer: "Electrical estimating includes takeoff and pricing for conduits, wiring, panels, fixtures, devices, switchgear, and associated labor. It helps define the full electrical scope and expected cost for more accurate bidding."
  }
];

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFaqs = faqs.filter((_, index) => index % 2 !== 0);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div className="py-4 md:py-5 px-4 md:px-8 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-5 md:mb-6">
          <h1 
            className="text-[#1f1f1f]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "45px",
              letterSpacing: "0.02em",
              textAlign: "center",
              textTransform: "capitalize"
            }}
          >
            Frequently Asked Questions
          </h1>
          <div className="w-14 h-1 bg-[#2d9cff] rounded-full mx-auto mt-3" />
        </div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[leftColumnFaqs, rightColumnFaqs].map((columnFaqs, columnIndex) => (
            <div key={columnIndex} className="space-y-5">
              {columnFaqs.map((faq, innerIndex) => {
                const faqIndex = columnIndex === 0 ? innerIndex * 2 : innerIndex * 2 + 1;
                const isOpen = openIndexes.includes(faqIndex);

                return (
                  <div
                    key={`${faq.question}-${faqIndex}`}
                    className={`w-full rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e5e5e5] bg-white transition-all ${
                      isOpen ? "p-5" : "p-4"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(faqIndex)}
                      className="w-full text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span
                        className="font-medium text-[#4a4a4a] leading-relaxed"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "16px"
                        }}
                      >
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2d9cff] text-white flex items-center justify-center">
                        {isOpen ? <IoChevronUp className="w-3.5 h-3.5" /> : <IoChevronDown className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <p
                        className="mt-3 text-[#777] leading-relaxed"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "16px"
                        }}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}