import React from "react";
import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

// আপনার এসেট ফোল্ডার থেকে প্রোফাইল বা অবতার ইমেজটি এখানে ইমপোর্ট করুন
import avatarImg from "../assets/logo.jpg";

export default function AboutMe() {
  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* মেইন কার্ড কন্টেইনার */}
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              About Me
            </h2>
            <hr className="border-gray-200" />
          </div>

          {/* কন্টেন্ট গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mt-10">
            {/* বাম পাশে: প্রোফাইল অবতার/ইমেজ */}
            <div className="flex justify-center md:col-span-1">
              <div className="w-48 h-48 md:w-full md:h-auto max-w-[240px] aspect-square rounded-2xl overflow-hidden bg-gray-50 p-2 border border-gray-100 shadow-inner">
                <img
                  src={avatarImg}
                  alt="Profile Avatar"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* ডান পাশে: বিস্তারিত বিবরণ (Description Text) */}
            <div className="md:col-span-2 text-center md:text-left">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal text-justify">
                Hello! I am Jonayet Hossen Moman, a passionate MERN Stack
                Developer and IT Support Specialist. I love building dynamic,
                robust, and highly responsive web applications. Turning complex
                problems into simple, beautiful, and scalable digital solutions
                is what drives me. With a solid foundation in Computer Science
                and Technology, I have honed my skills in cutting-edge web
                technologies to deliver seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
