import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function Education() {
  // ইমেজ থেকে নেওয়া নিখুঁত ডেটা স্ট্রাকচার
  const educationData = [
    {
      id: 1,
      degree: "B.Sc. in Computer Science",
      institute: "Bangladesh University, Dhaka",
      year: "2018-2022",
    },
    {
      id: 2,
      degree: "Diploma in Engineering",
      institute: "Dhaka Mohila Polytechnic, Dhaka",
      year: "2018-2022",
    },
    {
      id: 3,
      degree: "SSC",
      institute: "Khilbarirtek Islamia High School, Dhaka",
      year: "2018-2022",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* মেইন সাদা কার্ড কন্টেইনার */}
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-md border border-gray-100">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              Education
            </h2>
            <hr className="border-gray-200" />
          </div>

          {/* স্টাইলিশ ৩-কলামের গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {educationData.map((item) => (
              <div
                key={item.id}
                className="bg-white border-2 border-red-100/60 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-red-300 hover:-translate-y-1 group"
              >
                {/* কার্ডের ভেতরের ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* ডিগ্রী টাইটেল */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-600 transition-colors duration-300">
                    {item.degree}
                  </h3>

                  {/* ইন্সটিটিউট নেম */}
                  <p className="text-gray-500 text-sm md:text-base font-medium mb-6">
                    {item.institute}
                  </p>
                </div>

                {/* পাসিং ইয়ার পার্ট */}
                <div className="text-sm md:text-base text-gray-700 font-medium border-t border-gray-100 pt-4 mt-auto">
                  <span className="font-bold text-gray-900">Year:</span>{" "}
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
