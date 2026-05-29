import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 rounded-xl shadow-md border border-red-300 hover:shadow-lg transition">
                <img
                  src={review.img}
                  alt={`Reseña ${index + 1}`}
                  className="rounded-lg shadow-md w-full h-80 object-cover object-top"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
