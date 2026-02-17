import { useState } from "react";
import ScrollReveal from "./shared/ScrollReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the profit split?",
      answer:
        "Quber Funded split is structured based on performance. Traders keep a significant percentage of generated profits, with higher scaling tiers unlocking improved payout ratios over time.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden charges. The only upfront cost is your selected funded plan. There are no recurring platform fees or surprise deductions beyond standard trading complexities.",
    },
    {
      question: "Can I hold positions overnight and over weekends?",
      answer:
        "Yes. Swing trading and holding positions overnight is permitted, provided all risk parameters and maximum drawdown limits are respected.",
    },
    {
      question: "What happens if I breach the rules?",
      answer:
        "If your account violates the defined risk limits, it will be closed in line with our policy. You may reapply for a new funded account at any time. (Since you don't want heavy challenge for language, I softened it to rule breach.)",
    },
    {
      question: "What instruments can I trade?",
      answer:
        "Funded traders can access a wide range of instruments including Forex pairs, indices, commodities, and selected crypto markets, depending on the account tier.",
    },
    {
      question: "How do payouts work?",
      answer:
        "Profits can be withdrawn based on the payout schedule outlined in your funded plan. Once eligibility criteria are met, withdrawals are processed promptly.",
    },
    {
      question: "Is there a maximum position size?",
      answer:
        "Yes. Position sizing limits are defined to maintain structured risk management. Maximum lot exposure depends on your funded account size.",
    },
  ];

  return (
    <section id="faqs" className="bg-[#06090f] text-white py-20">
      <div className="max-w-[88rem] mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <ScrollReveal direction="fade" delay={0}>
            <p className="text-blue-500 text-sm font-semibold mb-2">
              Popular questions
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className="text-gray-400 mt-2">
              We accept 100+ currencies around the world
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} direction="up" delay={300 + index * 50}>
              <div className="bg-[#FFFFFF0D] rounded-xl overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900/50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className="text-blue-500 text-2xl cursor-pointer">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-400">{faq.answer}</div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
