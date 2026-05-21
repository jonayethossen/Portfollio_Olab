import React, { useState } from "react";
import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function ContactForm() {
  // ফর্ম ডাটা ম্যানেজ করার জন্য স্টেট
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "", // ছবিতে 'Addres' লেখা থাকলেও স্ট্যান্ডার্ড স্পেলিং ব্যবহার করা হয়েছে
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // এখানে আপনার সাবমিট হ্যান্ডলার লজিক যোগ করতে পারেন
  };

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* মেইন সাদা কার্ড কন্টেইনার */}
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-md border border-gray-100">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              Contact Form
            </h2>
            <hr className="border-gray-200" />
          </div>

          {/* ফর্ম বডি */}
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto space-y-6 mt-8"
          >
            {/* রো ১: Name এবং Email (পাশাপাশি দুই কলাম) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="grid grid-cols-12 items-center gap-2">
                <label className="col-span-3 sm:col-span-2 text-sm md:text-base font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="col-span-9 sm:col-span-10 border border-gray-200 rounded-lg h-11 px-4 text-gray-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all duration-200 shadow-sm"
                />
              </div>

              <div className="grid grid-cols-12 items-center gap-2">
                <label className="col-span-3 sm:col-span-2 text-sm md:text-base font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="col-span-9 sm:col-span-10 border border-gray-200 rounded-lg h-11 px-4 text-gray-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all duration-200 shadow-sm"
                />
              </div>
            </div>

            {/* রো ২: Phone এবং Address (পাশাপাশি দুই কলাম) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="grid grid-cols-12 items-center gap-2">
                <label className="col-span-3 sm:col-span-2 text-sm md:text-base font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="col-span-9 sm:col-span-10 border border-gray-200 rounded-lg h-11 px-4 text-gray-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all duration-200 shadow-sm"
                />
              </div>

              <div className="grid grid-cols-12 items-center gap-2">
                <label className="col-span-3 sm:col-span-2 text-sm md:text-base font-medium text-gray-700">
                  Addres
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="col-span-9 sm:col-span-10 border border-gray-200 rounded-lg h-11 px-4 text-gray-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all duration-200 shadow-sm"
                />
              </div>
            </div>

            {/* রো ৩: Full-width Message এরিয়া */}
            <div className="grid grid-cols-12 gap-2 items-start">
              <label className="col-span-12 sm:col-span-1 text-sm md:text-base font-medium text-gray-700 pt-2 sm:w-16">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="col-span-12 sm:col-span-11 border border-gray-200 rounded-lg p-4 text-gray-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all duration-200 shadow-sm resize-none"
              ></textarea>
            </div>

            {/* সাবমিট বাটন পার্ট */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#00c2e8] hover:bg-[#00adc0] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-base tracking-wider capitalize"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
