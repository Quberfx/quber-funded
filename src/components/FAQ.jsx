import { useState } from "react";
import ScrollReveal from "./shared/ScrollReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Quber Funded?",
      answer:
        "Quber Funded is a proprietary trading platform where traders can access funded trading accounts and earn profit by following strict risk management rules.",
    },
    {
      question: "Is Quber Funded connected to any broker?",
      answer:
        "Yes. Quber Funded is a sister company of Quber Capital (Quberx). While both operate independently, trading accounts under Quber Funded are executed through Quberx brokerage infrastructure.",
    },
    {
      question: "Do I need to complete a challenge?",
      answer:
        "Quber Funded offers instant funded account options. No long evaluation phases.",
    },
    {
      question: "What markets can I trade?",
      answer:
        "You can trade Forex, Commodities, Indices & Crypto with 300+ instruments.",
    },
    {
      question: "What are the Drawdown limits?",
      answer:
        "Maximum Daily Drawdown limit - 5%. Maximum Overall Drawdown limit - 10%. Breaking rules may result in account suspension.",
    },
    {
      question: "What is the profit split?",
      answer: "Traders receive up to 70% of the profits.",
    },
    {
      question: "When can I withdraw profits?",
      answer:
        "Minimum withdrawal should be 1% of total profits. All payouts are processed to the assigned account/wallet only.",
    },
    {
      question: "Is news trading allowed?",
      answer:
        "No, trading is not allowed 5 min before major news & 5 min after major news.",
    },
    {
      question: "What happens if I break a rule?",
      answer:
        "If any risk parameter is violated, the funded account will be terminated without refund.",
    },
    {
      question: "Is Quber Funded legally compliant?",
      answer:
        "Quber Funded operates under structured proprietary trading model. Traders must follow their local country regulations.",
    },
    {
      question: "Can I hold trades overnight or over weekend?",
      answer:
        "Definitely Yes. You can hold trades overnight as well as weekend.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "Crypto, Card, Bank Transfer, etc.",
    },
    {
      question: "Is there any refund policy?",
      answer: "All purchases are final. No refunds once account is activated.",
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
