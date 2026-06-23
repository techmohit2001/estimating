"use client";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const faqs = [
  {
    question: "What are construction estimating services?",
    answer:
      "Construction estimating services help contractors, builders, developers, architects, and project owners calculate the expected cost of a construction project before work begins. These services include quantity takeoffs, material cost breakdowns, labor estimates, marked-up drawings, and bid-ready reports. A professional construction estimating company reviews your drawings, specifications, and scope documents to prepare a clear estimate that supports bidding, budgeting, and pre construction planning."
  },
  {
    question: "How much do construction estimating services cost?",
    answer:
      "The cost of construction estimating services depends on the project size, trade scope, drawing complexity, and turnaround time. A small residential estimate may cost less than a large commercial or industrial project because it usually has fewer drawings and trade items. Commercial construction estimating and multi-trade estimates often require more time because they include detailed quantity takeoffs, labor pricing, material breakdowns, and scope review. The best way to get accurate pricing is to upload your plans and request a quote based on your exact project requirements."
  },
  {
    question: "What is included in construction cost estimating?",
    answer:
      "Construction cost estimating includes detailed quantity takeoffs, material pricing, labor cost calculations, equipment allowances, and organized cost breakdowns based on your project drawings and specifications. Our construction estimating services typically cover scope review, trade-wise quantity measurement, marked-up drawings, Excel estimate sheets, and bid-ready reports. This gives contractors, builders, and project owners a clear view of expected project costs before construction begins."
  },
  {
    question: "Why should I hire a construction estimating company?",
    answer:
      "Hiring a construction estimating company helps you save time, reduce risk, and improve bid preparation. Instead of spending hours measuring drawings manually, your team can focus on vendor pricing, client communication, project planning, and bid strategy. A professional estimator helps reduce missed quantities, review trade scope, understand cost items, and prepare stronger bid submissions with clear, detailed, and practical estimating documents."
  },
  {
    question: "Do you provide residential construction estimating?",
    answer:
      "Yes, we provide residential construction estimating services for single-family homes, multifamily apartments, townhomes, duplexes, custom homes, and renovation projects. Our residential estimating includes detailed takeoffs and cost estimates for materials such as concrete, lumber, drywall, flooring, roofing, finishes, doors, windows, plumbing, and electrical items. Whether you are preparing a bid, checking a budget, or comparing design options, our residential construction estimating support helps you understand expected project costs before work begins."
  },
  {
    question: "Do you provide commercial construction estimating?",
    answer:
      "Yes, we provide commercial construction estimating services for offices, retail spaces, restaurants, hotels, schools, healthcare buildings, warehouses, mixed-use buildings, and tenant improvement projects. Our commercial estimates include trade-wise quantity takeoffs, labor pricing, material breakdowns, and organized cost reports based on architectural, structural, MEP, and finish-related scopes. This helps general contractors, subcontractors, developers, and project owners prepare clear estimates for bidding and budgeting."
  },
  {
    question: "What is the difference between construction estimating services and quantity takeoff services?",
    answer:
      "Quantity takeoff services focus on measuring and listing the exact materials, quantities, and components required from project drawings and specifications. Construction estimating services go further by using those quantities to calculate material costs, labor pricing, equipment allowances, and overall project budgets. Quantity takeoff is the measurement step, while construction estimating turns those measurements into a complete cost picture for bidding, budgeting, and pre construction planning."
  },
  {
    question: "How fast can I get a construction estimate?",
    answer:
      "Turnaround time depends on project size, drawing complexity, trade scope, and document quality. Small residential estimates can often be completed faster, while large commercial or multi-trade projects may require more review time. Most construction estimates are delivered within 24 to 72 hours after we receive complete project documents. If you need a faster deadline, share your plans and turnaround requirements so we can confirm a realistic delivery schedule."
  }
];

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

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