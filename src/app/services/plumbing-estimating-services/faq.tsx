"use client";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqs = [
  {
    question: "Why should I outsource plumbing estimating services?",
    answer: "Outsourcing plumbing estimating services helps contractors save time, reduce overhead costs, and improve bid accuracy. Professional estimators handle quantity takeoffs and cost calculations, allowing your team to focus on project execution and business growth. Accurate estimates also help you submit competitive bids and increase your chances of winning profitable projects."
  },
  {
    question: "What is included in a plumbing quantity takeoff?",
    answer: "A plumbing quantity takeoff provides a detailed breakdown of all materials required for a project. This typically includes pipes, fittings, valves, fixtures, cleanouts, supports, insulation, pumps, water heaters, and drainage components. By identifying the exact quantities needed, plumbing contractors can improve procurement planning, reduce material waste, and create more accurate project budgets and bid proposals."
  },
  {
    question: "How accurate are your plumbing estimating services?",
    answer: "Our plumbing estimates are prepared by experienced estimators who carefully review project plans, specifications, and scope requirements. We use industry-standard estimating methods and current cost data to deliver reliable estimates. While actual costs may vary based on market conditions and project changes, our goal is to provide highly accurate estimates that help contractors bid competitively and confidently."
  },
  {
    question: "Who can benefit from professional plumbing estimating services?",
    answer: "Plumbing contractors, subcontractors, general contractors, builders, developers, and construction management firms can all benefit from professional plumbing estimating services. Whether you are bidding on a residential home, apartment complex, office building, healthcare facility, or industrial project, accurate estimates help save time, improve profitability, and increase bidding efficiency."
  },
  {
    question: "What types of plumbing projects do you estimate?",
    answer: "We provide plumbing estimating services for a wide range of construction projects, including residential, commercial, institutional, and industrial developments. Our experience covers single-family homes, multi-family housing, schools, hospitals, hotels, retail centers, warehouses, manufacturing facilities, and mixed-use developments. We can handle projects of varying sizes and complexity levels."
  },
  {
    question: "How quickly can you deliver a plumbing estimate?",
    answer: "The turnaround time depends on the size, scope, and complexity of the project. Smaller residential projects can often be completed within 24 to 48 hours, while larger commercial or industrial projects may require additional time for detailed review. We work closely with contractors to meet bidding deadlines and provide estimates within the agreed timeframe whenever possible."
  },
  {
    question: "What information do you need to prepare a plumbing estimate?",
    answer: "To prepare an accurate plumbing estimate, we typically require construction drawings, plumbing plans, specifications, bid documents, and any project-specific requirements. Additional information such as material preferences, project location, and scope clarifications can further improve estimate accuracy. Once we review the documents, we can provide a detailed cost estimate and quantity takeoff tailored to the project."
  },
  {
    question: "How can plumbing estimating services help contractors win more bids?",
    answer: "Accurate plumbing estimating services allow contractors to submit competitive and well-informed bids without spending countless hours performing calculations in-house. Reliable estimates reduce the risk of underbidding, which can affect profitability, and overbidding, which can reduce bid competitiveness. By improving pricing accuracy and bid turnaround times, contractors can pursue more opportunities and increase their chances of securing profitable projects."
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