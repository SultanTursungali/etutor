"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "How can I get a refund?",
    answer:
      "Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.",
  },
  {
    question: "Do you offer discounts for students?",
    answer:
      "Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.",
  },
  {
    question: "Do you offer special pricing for big teams?",
    answer:
      "Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.",
  },
  {
    question: "What is the difference between a seat and a user?",
    answer:
      "Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.",
  },
];

interface FaqAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqAccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: FaqAccordionItemProps) => {
  return (
    <div
      className={`faq-accordion-item border-b ${isOpen ? "bg-orange/5" : ""}`}
    >
      <button
        className="faq-accordion-header w-full flex justify-between items-center text-left p-6"
        onClick={onClick}
      >
        <h4
          className={`text-lg font-bold ${
            isOpen ? "text-orange" : "text-primary"
          }`}
        >
          {question}
        </h4>
        <span className="faq-accordion-header-icon">
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 12.75H6"
                stroke="#F16126"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.75V18.75"
                stroke="#1D2026"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 12.75H6"
                stroke="#1D2026"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-secondary transition-all duration-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="accordion-wrap-faq border rounded-lg overflow-hidden shadow-sm">
            {faqData.map((item, index) => (
              <FaqAccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>

          <div className="faq-right hidden lg:block">
            <Image
              src="/assets/images/faq-thumb.png"
              alt="FAQ"
              width={540}
              height={520}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
