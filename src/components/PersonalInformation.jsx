import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function PersonalInformation() {
  const infoLeft = [
    { label: "Name", value: "Jonayet Hossen ", isLink: false },
    { label: "E-mail", value: "jonayethossen8921@gmail.com", isLink: false }, // ইমেজে ইমেইলের জায়গায় নামটিই দেওয়া আছে
    { label: "Phone Number", value: "01877778921", isLink: false },
    { label: "Location", value: "Mohammadpur,Dhaka-1207", isLink: false },
  ];

  const infoRight = [
    {
      label: "Website",
      value: "https://github.com/jonayethossen",
      isLink: true,
    },
    {
      label: "Linkedin",
      value: "https://www.linkedin.com/jonayethossen",
      isLink: true,
    },
    {
      label: "GitHub",
      value: "https://github.com/jonayethossen",
      isLink: true,
    },
    { label: "Freelance", value: "https://www.fiverr.com/", isLink: true },
  ];

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-md border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              Personal Information
            </h2>
            <hr className="border-gray-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 mt-8 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2"></div>

            <div className="divide-y divide-gray-200/80">
              {infoLeft.map((item, index) => (
                <div
                  key={index}
                  className="py-3.5 flex items-center text-base md:text-lg"
                >
                  <span className="font-bold text-gray-800 min-w-[140px] block">
                    {item.label}:
                  </span>
                  <span className="text-gray-600 font-normal">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="divide-y divide-gray-200/80 md:pl-4">
              {infoRight.map((item, index) => (
                <div
                  key={index}
                  className="py-3.5 flex items-center text-base md:text-lg"
                >
                  <span className="font-bold text-gray-800 min-w-27.5 block">
                    {item.label}:
                  </span>
                  <a
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors break-all font-normal"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
