import React from "react";

const Reviews: React.FC = () => {
  const reviews = [
    { img: "/images/cliente1.jpeg" },
    { img: "/images/cliente2.jpeg" },
    { img: "/images/cliente3.jpeg" },
    { img: "/images/cliente4.jpeg" },
  ];

  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-red-600 mb-10">
          Opiniones Reales de Clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md border border-red-300 hover:shadow-lg transition"
            >
              <img
                src={review.img}
                alt={`Reseña ${index + 1}`}
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
