import React from "react";
import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

// আপনার এসেট ফোল্ডার থেকে বায়োগ্রাফির অবতার ইমেজটি এখানে ইমপোর্ট করুন
import avatarImg from "../assets/logo.jpg";

export default function PersonalBiography() {
  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* মেইন সাদা কার্ড কন্টেইনার */}
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              Personal Biography
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
                  alt="Personal Biography Avatar"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* ডান পাশে: বিস্তারিত জীবনবৃত্তান্ত (Biography Text) */}
            <div className="md:col-span-2 text-center md:text-left">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal text-justify">
                Jonayet Hossen Moman is a dynamic and forward-thinking
                Full-Stack MERN Stack Developer and a certified IT Support
                Trainer based in Bangladesh. With a deep-rooted passion for
                technology and education, he specializes in building robust web
                applications and empowering the next generation of IT
                professionals. Currently pursuing his Diploma in Computer
                Science and Technology (CST), Jonayet has rapidly bridged the
                gap between academic theory and cutting-edge industry practices.
                His technical expertise spans across the entire modern web
                ecosystem, with a core focus on MongoDB, Express.js, React.js,
                and Node.js. He is widely recognized for his ability to craft
                pixel-perfect, highly responsive user interfaces using Tailwind
                CSS and DaisyUI, ensuring seamless user experiences across all
                devices.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
