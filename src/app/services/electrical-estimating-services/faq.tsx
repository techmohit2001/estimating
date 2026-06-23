"use client";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const faqs = [
  {
    question: "What are electrical estimating services?",
    answer:
      "Electrical estimating services help contractors calculate the expected cost of electrical work before bidding or construction begins. These services include electrical quantity takeoff, material lists, labor breakdowns, marked-up drawings, and bid-ready cost reports for lighting, power, conduit, wiring, panels, switchgear, and low-voltage systems."
  },
  {
    question: "What is included in electrical cost estimating?",
    answer:
      "Electrical cost estimating may include material quantities, labor costs, fixture counts, device counts, conduit and wire measurements, panels, switchgear, transformers, grounding, fire alarm, data systems, and equipment connections. The final report helps contractors understand the full electrical scope before submitting a bid."
  },
  {
    question: "What is the difference between electrical takeoff services & electrical estimating?",
    answer:
      "Electrical takeoff services focus on measuring and listing electrical materials, quantities, and components from project drawings and specifications. This includes fixture counts, device counts, conduit runs, wire lengths, panels, switchgear, and other electrical items. Electrical estimating goes further by using those quantities to calculate material costs, labor pricing, equipment allowances, and overall electrical project budgets. Electrical takeoff is the measurement step, while electrical estimating turns those measurements into a complete cost picture for bidding, budgeting, and pre-construction planning."
  },
  {
    question: "Why should I hire an electrical estimating company?",
    answer:
      "Hiring an electrical estimating company helps you save time, reduce missed scope, and prepare better bids. Electrical estimating requires careful attention because one missed circuit, panel item, fixture type, equipment connection, or conduit run can affect the entire bid. Instead of spending hours measuring drawings manually, your team can focus on supplier pricing, labor strategy, project coordination, and bid submission while a professional estimator reviews drawings, measures quantities, and prepares cost breakdowns in a clear format."
  },
  {
    question: "Do you provide electrical quantity takeoff for all project types?",
    answer:
      "Yes, we provide electrical quantity takeoff for residential, commercial, industrial, and renovation project types. Our estimators review electrical drawings, one-line diagrams, panel schedules, lighting plans, power plans, and specifications to measure quantities for your project. Whether you need a small residential electrical takeoff or a large commercial electrical estimate, we can prepare organized quantity reports that support bidding, budgeting, and procurement."
  },
  {
    question: "What does an Electrical estimator do?",
    answer:
      "An electrical estimator reviews project drawings, specifications, and electrical scope documents to measure quantities, identify material requirements, and calculate expected electrical costs. This includes reviewing lighting plans, power distribution, conduit and wire runs, panels, switchgear, transformers, grounding, fire alarm, data systems, and equipment connections. The estimator prepares organized takeoff sheets, material lists, labor breakdowns, and bid-ready cost reports that help contractors submit accurate electrical bids."
  },
  {
    question: "How much do electrical estimating services cost?",
    answer:
      "The cost of electrical estimating services depends on the project size, electrical scope, drawing complexity, and turnaround time. A small residential electrical estimate may cost less than a large commercial or industrial project because it usually has fewer drawings and electrical items. Projects requiring detailed electrical takeoff, revision review, or multiple systems often need more measurement and pricing time. The best way to get accurate pricing is to upload your plans and request a quote based on your exact project requirements."
  },
  {
    question: "Can electrical estimating help reduce missed bid items?",
    answer:
      "Yes, electrical estimating helps reduce missed bid items by thoroughly reviewing drawings, specifications, and electrical scope before bidding begins. A detailed electrical estimate identifies fixtures, devices, conduit runs, wire lengths, panels, switchgear, equipment connections, and low-voltage systems that can be easy to overlook during manual takeoff. This organized review helps contractors catch missing scope, understand the full electrical picture, and prepare stronger bid submissions with fewer surprises later."
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