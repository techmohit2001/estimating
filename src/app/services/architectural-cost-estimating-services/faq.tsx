"use client";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const faqs = [
  {
    question: "What are architectural cost estimating services?",
    answer:
      "Architectural cost estimating services help contractors calculate the expected cost of architectural work before bidding or construction begins. These services include architectural quantity takeoff, material lists, labor breakdowns, marked-up drawings, and bid-ready cost reports for finishes, doors, windows, ceilings, flooring, millwork, partitions, and interior architectural components."
  },
  {
    question: "What is included in architectural cost estimating?",
    answer:
      "Architectural cost estimating may include material quantities, labor costs, finish takeoffs, door and window schedules, ceiling measurements, flooring areas, wall finishes, millwork, casework, partitions, and opening quantities. The final report helps contractors understand the full architectural scope before submitting a bid."
  },
  {
    question: "What is the difference between architectural takeoff services & architectural estimating?",
    answer:
      "Architectural takeoff services focus on measuring and listing architectural materials, quantities, and components from project drawings and specifications. This includes floor areas, wall finishes, ceiling areas, doors, windows, partitions, millwork, and other architectural items. Architectural estimating goes further by using those quantities to calculate material costs, labor pricing, equipment allowances, and overall architectural project budgets. Architectural takeoff is the measurement step, while architectural estimating turns those measurements into a complete cost picture for bidding, budgeting, and pre-construction planning."
  },
  {
    question: "Why should I hire an architectural estimating company?",
    answer:
      "Hiring an architectural estimating company helps you save time, reduce missed scope, and prepare better bids. Architectural estimating requires careful attention because one missed finish type, door schedule item, ceiling system, flooring area, or millwork component can affect the entire bid. Instead of spending hours measuring drawings manually, your team can focus on supplier pricing, labor strategy, project coordination, and bid submission while a professional estimator reviews drawings, measures quantities, and prepares cost breakdowns in a clear format."
  },
  {
    question: "Do you provide architectural quantity takeoff for all project types?",
    answer:
      "Yes, we provide architectural quantity takeoff for residential, commercial, industrial, and renovation project types. Our estimators review architectural drawings, finish schedules, door and window schedules, ceiling plans, flooring plans, and specifications to measure quantities for your project. Whether you need a small residential architectural takeoff or a large commercial architectural estimate, we can prepare organized quantity reports that support bidding, budgeting, and procurement."
  },
  {
    question: "What does an architectural estimator do?",
    answer:
      "An architectural estimator reviews project drawings, specifications, and architectural scope documents to measure quantities, identify material requirements, and calculate expected architectural costs. This includes reviewing floor plans, finish schedules, ceiling systems, door and window schedules, wall finishes, millwork, partitions, and casework. The estimator prepares organized takeoff sheets, material lists, labor breakdowns, and bid-ready cost reports that help contractors submit accurate architectural bids."
  },
  {
    question: "How much do architectural cost estimating services cost?",
    answer:
      "The cost of architectural cost estimating services depends on the project size, architectural scope, drawing complexity, and turnaround time. A small residential architectural estimate may cost less than a large commercial or industrial project because it usually has fewer drawings and architectural items. Projects requiring detailed architectural takeoff, revision review, or multiple finish systems often need more measurement and pricing time. The best way to get accurate pricing is to upload your plans and request a quote based on your exact project requirements."
  },
  {
    question: "Can architectural estimating help reduce missed bid items?",
    answer:
      "Yes, architectural estimating helps reduce missed bid items by thoroughly reviewing drawings, specifications, and architectural scope before bidding begins. A detailed architectural estimate identifies finishes, doors, windows, ceiling systems, flooring areas, wall finishes, millwork, partitions, and casework that can be easy to overlook during manual takeoff. This organized review helps contractors catch missing scope, understand the full architectural picture, and prepare stronger bid submissions with fewer surprises later."
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
    <div className="w-full pt-4 md:pt-5 pb-4 px-4 md:px-8 bg-[#f3f3f3]">
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
                        {isOpen ? <IoRemove className="w-3.5 h-3.5" /> : <IoAdd className="w-3.5 h-3.5" />}
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