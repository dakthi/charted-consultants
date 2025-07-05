"use client";

import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqData.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-gray-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-600">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqData = [
  {
    question: "What exactly does Charted do?",
    answer:
      "We help small, owner-led businesses modernise their operations, clean up workflows, and prepare for long-term continuity — whether that means scaling, stepping back, or eventually selling.",
  },
  {
    question: "Do you build software?",
    answer:
      "We don’t sell software, but we do build custom tools where it helps — booking systems, dashboards, CRMs, SOPs. You own what we build, and there are no lock-ins or subscriptions unless you choose one.",
  },
  {
    question: "How are you different from agencies or consultants?",
    answer:
      "We’re embedded operators — not consultants who disappear after a deck. We work closely with owners and teams, fix real issues, and structure everything for long-term use and low dependency.",
  },
  {
    question: "Can you help me prepare for sale or succession?",
    answer:
      "Yes. We specialise in making businesses transferable — reducing founder dependency, documenting key knowledge, and setting up systems that work with or without you. We also explore acquisitions ourselves, if it’s the right fit.",
  },
  {
    question: "Where are you based and who do you work with?",
    answer:
      "We’re based between Brighton and London, but work with independent businesses across the UK and beyond. Our clients are often local service providers — like salons, trades, wellness, hospitality, and legacy service firms.",
  },
];
