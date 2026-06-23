"use client";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqs = [
  {
    question: "What is construction estimating, and why is it important?",
    answer: "Precise quantity takeoff is the foundation of every successful project. We deliver detailed measurements and material breakdowns that remove guesswork and improve efficiency. Whether it's residential, commercial, or industrial work, our takeoffs help you plan better, reduce waste, and bid smarter."
  },
  {
    question: "What makes your estimates reliable for bidding?",
    answer: "Our estimates are based on current market rates, detailed material lists, and comprehensive labor analysis, ensuring competitive and accurate bids."
  },
  {
    question: "How long does a construction estimate usually take?",
    answer: "Turnaround depends on project size and drawing quality, but most estimates are delivered within 24-72 hours with a clear scope and detailed plans."
  },
  {
    question: "How does your estimating company stand out from others?",
    answer: "We combine advanced technology with experienced professionals to deliver accurate estimates with faster turnaround times and detailed breakdowns."
  },
  {
    question: "Do you offer outsourcing for estimating services?",
    answer: "Yes, we provide complete outsourcing solutions for estimating services, allowing you to focus on your core business operations."
  },
  {
    question: "We handle both large projects and smaller residential jobs.",
    answer: "From home renovations to large-scale commercial builds, our estimating process scales based on project complexity and timeline."
  },
  {
    question: "Can you handle multi-trade and complex projects?",
    answer: "Absolutely, we specialize in multi-trade projects and can coordinate estimates across different construction disciplines."
  },
  {
    question: "Do you provide certified professional estimator services?",
    answer: "Yes, our team includes certified professional estimators who ensure accuracy and compliance with industry standards."
  },
  {
    question: "What information do you need to start my estimate?",
    answer: "We typically need project plans, specifications, site conditions, and any special requirements to provide an accurate estimate."
  },
  {
    question: "How do you handle design changes during the estimating process?",
    answer: "We maintain flexible processes to accommodate design changes and provide updated estimates promptly to keep your project on track."
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