import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function SpecialSkills() {
  // ইমেজ থেকে নেওয়া ডাটা এবং হুবহু কালার কোড
  const skillsData = [
    { id: 1, name: "HTML", percentage: "75%", barColor: "bg-[#0d6efd]" }, // ব্রাইট ব্লু
    { id: 2, name: "CSS", percentage: "50%", barColor: "bg-[#198754]" }, // ডার্ক গ্রিন
    { id: 3, name: "JS", percentage: "30%", barColor: "bg-[#ffc107]" }, // ওয়ার্ম ইয়েলো
  ];

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* মেইন হোয়াইট কার্ড কন্টেইনার */}
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              Special Skills
            </h2>
            <hr className="border-gray-200" />
          </div>

          {/* প্রোগ্রেস বার লেআউট */}
          <div className="max-w-4xl mx-auto space-y-6 mt-10">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="grid grid-cols-12 items-center gap-4 group"
              >
                {/* স্কিল নেম (বাম পাশে) */}
                <div className="col-span-3 sm:col-span-2 text-left">
                  <span className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide block transition-colors duration-300 group-hover:text-blue-600">
                    {skill.name}
                  </span>
                </div>

                {/* প্রোগ্রেস ট্র্যাক ও বার (ডান পাশে) */}
                <div className="col-span-9 sm:col-span-10">
                  <div className="w-full bg-[#e9ecef] h-10 rounded-xl overflow-hidden shadow-inner flex items-center relative border border-gray-100">
                    <div
                      style={{ width: skill.percentage }}
                      className={`${skill.barColor} h-full rounded-xl flex items-center justify-center transition-all duration-1000 ease-out shadow-md relative group-hover:brightness-105`}
                    >
                      {/* শাইন ইফেক্ট (অতিরিক্ত স্টাইলিশ লুকের জন্য) */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* পার্সেন্টেজ টেক্সট */}
                      <span className="text-white font-bold text-sm md:text-base tracking-wider drop-shadow-sm">
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
