import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

import clientAvatar from "../assets/logo.jpg";

export default function ClientFeedback() {
  const feedbacks = [
    {
      id: 1,
      name: "Client 1",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, atque doloribus eveniet alias autem amet repudiandae error corporis minima ipsum?",
      avatar: clientAvatar,
    },
    {
      id: 2,
      name: "Client 2",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, atque doloribus eveniet alias autem amet repudiandae error corporis minima ipsum?",
      avatar: clientAvatar,
    },
    {
      id: 3,
      name: "Client 3",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, atque doloribus eveniet alias autem amet repudiandae error corporis minima ipsum?",
      avatar: clientAvatar,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* সেকশন মেইন টাইটেল */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
            Client Feedback
          </h2>
        </div>

        {/* ফিডব্যাক কার্ড গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0 max-w-6xl mx-auto">
          {feedbacks.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/60 shadow-md flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* ১. টপ পার্ট: বড় করে ক্লায়েন্ট অবতার/ইমেজ */}
              <div className="w-full pt-8 pb-6 flex justify-center bg-white">
                <div className="w-36 h-36 overflow-hidden rounded-full border border-gray-100 bg-gray-50 p-1">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* ২. মিডল পার্ট: হালকা পিঙ্ক ব্যাকগ্রাউন্ডের নাম এরিয়া */}
              <div className="bg-[#fce2e6] py-3 text-center border-b border-t border-gray-200/40">
                <h3 className="text-xl font-bold text-gray-800 tracking-wide">
                  {item.name}
                </h3>
              </div>

              {/* ৩. বটম পার্ট: ক্লায়েন্টের কমেন্ট বা ফিডব্যাক টেক্সট */}
              <div className="p-6 flex-grow bg-white text-center">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
