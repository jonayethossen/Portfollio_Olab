import Container from "./Container";

export default function Location() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4342.782377695774!2d90.35978190675388!3d23.753436136713837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5a9024664d%3A0x50c2d4fb288ff156!2sGovernment%20Graphic%20Arts%20Institute!5e0!3m2!1sen!2sbd!4v1779346919924!5m2!1sen!2sbd";

  const googleMapsAppUrl =
    "https://maps.google.com/?q=Lalmatia,Dhaka,Bangladesh";

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-md border border-gray-100">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
              Location
            </h2>
            <hr className="border-gray-200" />
          </div>

          {/* ম্যাপ কন্টেইনার (রিলেটিভ পজিশন সহ) */}
          <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-8 group">
            {/* লাইভ ইন্টারেক্টিভ গুগল আইফ্রেম ম্যাপ */}
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-0 grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>

            {/* টপ-লেফট কোণায় স্টাইলিশ ফ্লোটিং 'Open in Maps' বাটন */}
            <a
              href={googleMapsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-gray-200/80 hover:border-cyan-500 text-gray-700 hover:text-cyan-600 font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 flex items-center gap-2 text-sm md:text-base hover:shadow-cyan-100 hover:-translate-y-0.5"
            >
              <span>Open in Maps</span>
              {/* এক্সটার্নাল লিংক আইকন */}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            {/* ম্যাপের নিচে প্রিমিয়াম ওভারলে গ্লো বর্ডার ইফেক্ট */}
            <div className="absolute inset-0 pointer-events-none rounded-xl border-2 border-transparent group-hover:border-cyan-500/20 transition-all duration-300" />
          </div>
        </div>
      </Container>
    </section>
  );
}
