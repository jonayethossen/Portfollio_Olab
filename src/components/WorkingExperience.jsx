import React from "react";
import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function WorkingExperience() {
  // ইমেজ থেকে নেওয়া নিখুঁত ডাটা স্ট্রাকচার
  const experienceData = [
    {
      id: 1,
      role: "Web Design Developer",
      company: "Opshora IT,Dhaka",
      duration: "2024-present",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Opshora IT,Dhaka",
      duration: "2023-2024",
    },
    {
      id: 3,
      role: "Freelance",
      company: "Fiverr",
      duration: "2023-present",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* মেইন সাদা কার্ড কন্টেইনার */}
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-md border border-gray-100">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              Working Experience
            </h2>
            <hr className="border-gray-200" />
          </div>

          {/* ৩-কলামের স্টাইলিশ গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="bg-white border-2 border-amber-100/70 hover:border-amber-300 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              >
                {/* কার্ডের ওপরে হালকা গ্রেডিয়েন্ট ইন্ডিকেটর লাইন (হোভার ইফেক্ট) */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* জব রোল/টাইটেল */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug mb-2 group-hover:text-amber-600 transition-colors duration-200">
                    {exp.role}
                  </h3>

                  {/* কোম্পানি বা প্লাটফর্ম নেম */}
                  <p className="text-gray-400 text-sm md:text-base font-normal mb-6">
                    {exp.company}
                  </p>
                </div>

                {/* কাজের সময়কাল (Duration) */}
                <div className="text-sm md:text-base text-gray-600 font-medium border-t border-gray-100 pt-4 mt-auto flex items-center gap-1.5">
                  <span className="text-gray-400 font-normal">Duration:</span>
                  <span className="text-gray-800 font-semibold">
                    {/* present টেক্সটটিকে ইমেজের মতো সেমি-বোল্ড করার জন্য আলাদা স্প্লিট হ্যান্ডেল */}
                    {exp.duration.includes("present") ? (
                      <>
                        {exp.duration.split("-")[0]}-
                        <span className="font-bold text-gray-900">present</span>
                      </>
                    ) : (
                      exp.duration
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
