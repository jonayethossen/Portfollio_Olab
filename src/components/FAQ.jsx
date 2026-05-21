import { useState } from "react";
import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      id: 1,
      question: "Question 1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id autem qui quasi ipsam, eveniet repellendus unde aliquid, provident nihil facere mollitia aspernatur.",
    },
    {
      id: 2,
      question: "Question 2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id autem qui quasi ipsam, eveniet repellendus unde aliquid, provident nihil facere mollitia aspernatur.",
    },
    {
      id: 3,
      question: "Question 3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id autem qui quasi ipsam, eveniet repellendus unde aliquid, provident nihil facere mollitia aspernatur.",
    },
    {
      id: 4,
      question: "Question 4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id autem qui quasi ipsam, eveniet repellendus unde aliquid, provident nihil facere mollitia aspernatur.",
    },
    {
      id: 5,
      question: "Question 5",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id autem qui quasi ipsam, eveniet repellendus unde aliquid, provident nihil facere mollitia aspernatur.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* মেইন সাদা কার্ড কন্টেইনার */}
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-md border border-gray-100">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              FAQ
            </h2>
            <hr className="border-gray-200" />
          </div>

          {/* অ্যাকর্ডিয়ন লেআউট কন্টেইনার */}
          <div className="border border-gray-200 rounded-xl overflow-hidden mt-8 max-w-4xl mx-auto divide-y divide-gray-200">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className="bg-white transition-colors duration-200"
                >
                  {/* কোশ্চেন বার (ক্লিকেবল) */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-800 hover:bg-gray-50/80 transition-colors focus:outline-none group"
                  >
                    <span className="text-base md:text-lg group-hover:text-blue-600 transition-colors duration-200">
                      {item.question}
                    </span>

                    {/* আইকন: ছবিতে থাকা ডাউন অ্যারো আইকন এরিয়া */}
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180 text-blue-600" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* অ্যানিমেটেড অ্যানসার প্যানেল */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[200px] border-t border-gray-100"
                        : "max-h-0"
                    }`}
                  >
                    <div className="p-5 text-gray-600 text-sm md:text-base leading-relaxed bg-[#fafafa]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
