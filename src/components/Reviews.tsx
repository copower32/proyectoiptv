import React from "react";


  const Reviews: React.FC = () => {
    const reviews = [
      {
        name: "María G.",
        role: "Profesora, Madrid",
        text: "Estoy realmente impresionada con el servicio de IPTV. La calidad de la transmisión es excepcional, siempre fluida y clara. Lo que más valoro es la atención al cliente; siempre son rápidos, amables y resuelven cualquier duda o problema de inmediato. ¡Definitivamente recomiendo este servicio!",
        avatar: "https://i.pravatar.cc/100?img=1",
      },
      {
        name: "Paola M.",
        role: "Ingeniera, Barcelona",
        text: "El servicio de IPTV supera mis expectativas. La calidad de imagen es de primera y lo que realmente destaca es la atención al cliente, que siempre está disponible para resolver cualquier pregunta o inquietud. Además, el precio es muy competitivo. ¡Totalmente satisfecho con mi elección!",
        avatar: "https://i.pravatar.cc/100?img=2",
      },
      {
        name: "Marlon A.",
        role: "Estudiante, Sevilla",
        text: "Excelente servicio, con una amplia variedad de canales y una calidad impresionante. La atención al cliente es superrápida y siempre me han ayudado a resolver cualquier duda de manera eficiente. Es un servicio que definitivamente recomiendo a todos, especialmente por su relación calidad-precio.",
        avatar: "https://i.pravatar.cc/100?img=3",
      },
    ];

  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-red-600 mb-6">
          Clientes Satisfechos
        </h2>
        <p className="text-center text-sm text-gray-500 mb-8">
          ★★★★★ rated excellent on <span className="font-bold">Trustpilot</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-red-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
