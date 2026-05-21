import Container from "./Container";
import apiImg from "../assets/API Development.jpg";
import fullStackImg from "../assets/Full-Stack Web Development.jpg";
import responsiveImg from "../assets/Responsive Web Design.jpg";
import uiImg from "../assets/UIUX Design.jpg";

export default function AllService() {
  const servicesData = [
    {
      id: 1,
      title: "Service 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non id fugit vero accusamus impedit! Laudantium quae itaque esse dolorum voluptate.",
      image: apiImg,
    },
    {
      id: 2,
      title: "Service 2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non id fugit vero accusamus impedit! Laudantium quae itaque esse dolorum voluptate.",
      image: fullStackImg,
    },
    {
      id: 3,
      title: "Service 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non id fugit vero accusamus impedit! Laudantium quae itaque esse dolorum voluptate.",
      image: responsiveImg,
    },
    {
      id: 4,
      title: "Service 4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non id fugit vero accusamus impedit! Laudantium quae itaque esse dolorum voluptate.",
      image: uiImg,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* সেকশন মেইন টাইটেল */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
            All Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 max-w-7xl mx-auto">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-sm flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#dcf3fd] py-3 text-center border-b border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between text-center">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <button className="w-full bg-[#00c5f2] hover:bg-[#00b2dc] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
