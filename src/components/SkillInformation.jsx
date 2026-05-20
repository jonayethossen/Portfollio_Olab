import React from "react";
import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function SkillInformation() {
  const skillsData = [
    { id: 1, name: "HTML", percentage: "75%", barColor: "bg-[#0d6efd]" }, // মডার্ন ব্লু
    { id: 2, name: "CSS", percentage: "50%", barColor: "bg-[#198754]" }, // মডার্ন গ্রিন
    { id: 3, name: "JS", percentage: "30%", barColor: "bg-[#ffc107]" }, // মডার্ন ইয়েলো/অ্যাম্বার
  ];

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* মেইন সাদা কার্ড কন্টেইনার */}
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-md border border-gray-100">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              Skill Information
            </h2>
            <hr className="border-gray-200" />
          </div>

          {/* প্রোগ্রেস বার লেআউট */}
          <div className="max-w-4xl mx-auto space-y-6 mt-10">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="grid grid-cols-12 items-center gap-4"
              >
                {/* স্কিল নেম (বাম পাশে) */}
                <div className="col-span-3 sm:col-span-2 text-left">
                  <span className="text-xl md:text-2xl font-semibold text-gray-800 tracking-wide block">
                    {skill.name}
                  </span>
                </div>

                {/* প্রোগ্রেস ট্র্যাক ও বার (ডান পাশে) */}
                <div className="col-span-9 sm:col-span-10">
                  <div className="w-full bg-[#e9ecef] h-10 rounded-lg overflow-hidden shadow-inner flex items-center relative">
                    <div
                      style={{ width: skill.percentage }}
                      className={`${skill.barColor} h-full rounded-lg flex items-center justify-center transition-all duration-1000 ease-out`}
                    >
                      {/* পার্সেন্টেজ টেক্সট বারের ভেতরে সেন্টারে দেখাবে */}
                      <span className="text-white font-medium text-sm md:text-base">
                        {skill.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
