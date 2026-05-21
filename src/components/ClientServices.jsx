import Container from "./Container";
import clientAvatar from "../assets/logo.jpg";

export default function ClientServices() {
  const clients = [
    {
      id: 1,
      name: "Client 1",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, atque doloribus eveniet alias autem amet repudiandae error corporis minima ipsum?",
      avatar: clientAvatar,
    },
    {
      id: 2,
      name: "Client 2",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, atque doloribus eveniet alias autem amet repudiandae error corporis minima ipsum?",
      avatar: clientAvatar,
    },
    {
      id: 3,
      name: "Client 3",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, atque doloribus eveniet alias autem amet repudiandae error corporis minima ipsum?",
      avatar: clientAvatar,
    },
    {
      id: 4,
      name: "Client 4",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, atque doloribus eveniet alias autem amet repudiandae error corporis minima ipsum?",
      avatar: clientAvatar,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight mb-6">
            Client
          </h2>
          <hr className="border-gray-200 max-w-5xl mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 max-w-7xl mx-auto mt-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/60 shadow-md flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-full pt-8 pb-6 flex justify-center bg-white">
                <div className="w-32 h-32 overflow-hidden rounded-full border border-gray-100 bg-gray-50 p-1">
                  <img
                    src={client.avatar}
                    alt={client.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <div className="bg-[#dcf3fd] py-3 text-center border-b border-t border-gray-200/40">
                <h3 className="text-xl font-bold text-gray-800 tracking-wide">
                  {client.name}
                </h3>
              </div>

              <div className="p-5 flex-grow bg-white text-center">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify md:text-center">
                  {client.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
