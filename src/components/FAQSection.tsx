"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    question: "What is QueryDesk?",
    answer:
      "QueryDesk is an AI-powered customer support platform that helps businesses handle customer conversations using their own business information and knowledge base.",
    category: "GENERAL",
  },
  {
    question: "How does the AI chatbot work?",
    answer:
      "The chatbot uses the business information provided in QueryDesk to understand customer questions and generate relevant responses, helping businesses simplify customer support.",
    category: "AI CHATBOT",
  },
  {
    question: "Can I use my own business data?",
    answer:
      "Absolutely! You can add your business name, support email and knowledge base through your dashboard. This information helps the chatbot understand your business.",
    category: "KNOWLEDGE BASE",
  },
  {
    question: "How can I integrate QueryDesk into my website?",
    answer:
      "QueryDesk provides an embed code for your chatbot. Copy the generated script and add it to your website so visitors can interact with your AI assistant.",
    category: "INTEGRATION",
  },
  {
    question: "Can I update my business information later?",
    answer:
      "Yes! You can revisit your dashboard, update your business details and modify your knowledge base whenever your business information changes.",
    category: "DASHBOARD",
  },
  {
    question: "What happens if the chatbot doesn't know an answer?",
    answer:
      "The chatbot depends on the information available in your knowledge base. Keeping your business information clear and updated helps it provide more relevant responses.",
    category: "SUPPORT",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white py-24 md:py-32 px-6 overflow-hidden scroll-mt-16 transition-colors duration-300"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-300/30 dark:bg-zinc-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-xs font-semibold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-7">
            <span className="w-1.5 h-1.5 bg-zinc-900 dark:bg-white rounded-full" />
            QUERYDESK SUPPORT
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Got questions?
            <br />
            <span className="text-zinc-500 dark:text-zinc-500">
              We've got answers.
            </span>
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-7 mt-6">
            Everything you need to know about QueryDesk and how our AI-powered
            customer support works.
          </p>
        </motion.div>

        {/* FAQ Container */}
        <div className="max-w-4xl mx-auto">
          {/* FAQ Top Label */}
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-5 mb-2">
            <span className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <span className="text-xs text-zinc-500 dark:text-zinc-500">
              01 — 06
            </span>
          </div>

          {/* Accordion */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  className={`border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300 ${
                    isOpen ? "bg-zinc-100 dark:bg-white/[0.035]" : ""
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-5 py-6 md:py-7 px-3 md:px-5 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-center gap-5 md:gap-7">
                      <span
                        className={`text-xs font-mono transition-colors ${
                          isOpen
                            ? "text-zinc-900 dark:text-white"
                            : "text-zinc-400 dark:text-zinc-600"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <div>
                        <span
                          className={`block text-[10px] tracking-[0.15em] mb-2 ${
                            isOpen
                              ? "text-zinc-500 dark:text-zinc-300"
                              : "text-zinc-400 dark:text-zinc-600"
                          }`}
                        >
                          {faq.category}
                        </span>

                        <span
                          className={`text-sm md:text-base font-semibold transition-colors ${
                            isOpen
                              ? "text-zinc-900 dark:text-white"
                              : "text-zinc-700 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>
                    </div>

                    {/* Plus / Minus Icon */}
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white rotate-180"
                          : "border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 group-hover:border-zinc-500 dark:group-hover:border-zinc-400 group-hover:text-black dark:group-hover:text-white"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          className={isOpen ? "hidden" : ""}
                        />
                        <path
                          d="M5 12h14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          className={!isOpen ? "hidden" : ""}
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Animated Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 md:pl-20 pr-8 md:pr-16 pb-7">
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-7 max-w-2xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
