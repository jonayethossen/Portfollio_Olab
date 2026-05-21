import React from "react";
import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function TrainingCertification() {
  // ইমেজ থেকে নেওয়া নিখুঁত ডাটা স্ট্রাকচার
  const certifications = [
    {
      id: 1,
      title: "Web Design",
      institute: "OLAB,Dhaka",
    },
    {
      id: 2,
      title: "Web Development with Laravel",
      institute: "OLAB,Dhaka",
    },
    {
      id: 3,
      title: "Web Application Development",
      institute: "OLAB,Dhaka",
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
              Training Certification
            </h2>
            <hr className="border-gray-200" />
          </div>

          {/* ৩-কলামের স্টাইলিশ গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white border-2 border-amber-100/70 hover:border-amber-300 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              >
                {/* কার্ডের ওপরে হালকা গ্রেডিয়েন্ট গ্লো (হোভার ইফেক্ট) */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="mb-6">
                  {/* সার্টিফিকেশন নাম */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug mb-2 group-hover:text-amber-600 transition-colors duration-200">
                    {cert.title}
                  </h3>

                  {/* ইন্সটিটিউট ও লোকেশন */}
                  <p className="text-gray-400 text-sm md:text-base font-normal">
                    {cert.institute}
                  </p>
                </div>

                {/* অ্যাকশন বাটন */}
                <div className="pt-2">
                  <button className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-medium py-2 px-5 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base tracking-wide">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
