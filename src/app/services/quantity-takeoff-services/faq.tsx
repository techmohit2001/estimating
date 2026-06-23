"use client";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const faqs = [
  {
    question: "What are quantity takeoff services?",
    answer:
      "Quantity takeoff services involve measuring materials, items, and quantities from construction drawings, blueprints, and specifications. This includes areas, lengths, volumes, counts, assemblies, fixtures, finishes, and trade-specific materials. Contractors use these takeoff reports to prepare bids, request vendor pricing, plan procurement, and reduce missed quantities before construction starts."
  },
  {
    question: "What is included in material takeoff services?",
    answer:
      "Material takeoff services usually include detailed material quantity sheets, marked-up drawings, Excel takeoff reports, trade-wise quantity breakdowns, scope notes, and material summaries. Depending on the project, the report may include concrete, drywall, roofing, flooring, steel, lumber, plumbing, HVAC, electrical, doors, windows, finishes, and sitework materials. The goal is to give your team a clear list of what materials are required and how much is needed."
  },
  {
    question: "How much do quantity takeoff services cost?",
    answer:
      "The cost of quantity takeoff services depends on the project size, trade scope, drawing complexity, and turnaround time. A small residential takeoff may cost less than a large commercial or multi-trade project because it usually has fewer drawings and material items. Projects requiring detailed blueprint takeoff, revision review, or multiple trades often need more measurement time. The best way to get accurate pricing is to upload your plans and request a quote based on your exact project requirements."
  },
  {
    question: "Why is construction quantity takeoff important?",
    answer:
      "A detailed construction quantity takeoff helps reduce the risk of missed materials, over-ordering, under-ordering, and budget confusion. Contractors often work under pressure, and manual quantity measurement can become time-consuming when drawings are large or multiple trades are involved. With accurate quantity takeoff services, your team can prepare bids faster, review scope more clearly, and request vendor quotes with better material data."
  },
  {
    question: "What is the difference between construction material takeoff and construction estimating?",
    answer:
      "Construction material takeoff focuses on measuring and listing the exact materials, quantities, and components required from project drawings and specifications. Construction estimating goes further by using those quantities to calculate material costs, labor pricing, equipment allowances, and overall project budgets. Material takeoff is the measurement step, while construction estimating turns those measurements into a complete cost picture for bidding, budgeting, and pre-construction planning."
  },
  {
    question: "Do you provide blueprint takeoff services?",
    answer:
      "Yes, we provide blueprint takeoff services for residential, commercial, industrial, and civil projects. Our estimators review architectural, structural, MEP, and finish-related drawings to measure materials and quantities from your plans. Blueprint takeoff is especially helpful when your team needs to convert large drawing sets into organized, trade-wise material data for bidding, budgeting, procurement, and construction planning."
  },
  {
    question: "What trades are covered in your construction material takeoff?",
    answer:
      "Our construction material takeoff covers multiple trades and CSI divisions, including concrete, masonry, drywall, insulation, flooring, painting, roofing, steel, lumber, doors, windows, millwork, finishes, plumbing, mechanical, HVAC, electrical, sitework, excavation, paving, drainage, and general construction materials. This trade-wise approach makes your takeoff report easier to review, compare quotes, and use during bid preparation."
  },
  {
    question: "Why should I hire a takeoff service company?",
    answer:
      "Hiring a takeoff service company helps you save time, reduce manual work, and improve bid preparation. Instead of spending hours measuring every drawing internally, your team can focus on pricing strategy, vendor coordination, client communication, and project planning. A professional takeoff team helps reduce missed quantities, organize trade-wise breakdowns, and deliver clear quantity reports that support bidding, budgeting, and procurement."
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