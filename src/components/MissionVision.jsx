import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function MissionVision() {
  const data = [
    {
      id: 1,
      title: "Mission",
      text: "To build innovative, scalable, and user-centric web solutions that empower businesses and individuals to thrive in the digital era. By leveraging the power of modern technologies like the MERN stack, I aim to deliver clean, efficient, and secure code that solves real-world problems. Simultaneously, I am dedicated to sharing knowledge and training the next generation of IT professionals to bridge the gap between education and industry demands.",
      headerBg: "bg-[#d3e2ff]", // হালকা ব্লু হেডার ব্যাকগ্রাউন্ড
      titleColor: "text-[#1e3a8a]",
    },
    {
      id: 2,
      title: "Vision", // ইমেজে বানান 'Vission' থাকলেও স্ট্যান্ডার্ড 'Vision' রাখা হয়েছে, প্রয়োজন হলে পরিবর্তন করতে পারেন
      text: "To become a leading full-stack engineer and tech educator, driving digital transformation through cutting-edge web applications. I envision creating a seamless ecosystem where robust technology meets elegant design, inspiring future tech enthusiasts, and establishing high standards of excellence in both software development and technical training.",
      headerBg: "bg-[#fce2e6]", // হালকা পিঙ্ক/রেড হেডার ব্যাকগ্রাউন্ড
      titleColor: "text-[#9f1239]",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* মেইন সাদা কার্ড কন্টেইনার */}
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md border border-gray-100">
          {/* সেকশন মেইন হেডিং */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              Mission & Vision
            </h2>
            <hr className="border-gray-200" />
          </div>

          {/* মিশন এবং ভিশন কার্ড দুটির গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {data.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white flex flex-col transition-all duration-300 hover:shadow-md"
              >
                {/* কার্ডের হেডার পার্ট (যেখানে টাইটেল থাকবে) */}
                <div
                  className={`py-5 text-center font-bold text-3xl ${item.headerBg} ${item.titleColor} border-b border-gray-200`}
                >
                  {item.title}
                </div>

                {/* কার্ডের বডি পার্ট (যেখানে ডেসক্রিপশন থাকবে) */}
                <div className="p-6 flex-grow">
                  <p className="text-gray-600 text-base leading-relaxed text-justify">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
