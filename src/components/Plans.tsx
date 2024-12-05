import React, { useState } from "react";

const Plans: React.FC = () => {
  const [deviceOption, setDeviceOption] = useState<"one" | "two">("one");

  const plans = {
    one: [
      { duration: "1 Mes", oldPrice: "€14.99", price: "€9.99", features: ["+36.000 Canales en vivo", "+150.000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte VIP gratuito 24/7","Tecnología anticongelante."] },
      { duration: "3 Meses", oldPrice: "€29.99", price: "€24.99", features: ["+36.000 Canales en vivo", "+150.000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte VIP gratuito 24/7","Tecnología anticongelante."] },
      { duration: "6 Meses", oldPrice: "€44.99", price: "€39.99", features: ["+36.000 Canales en vivo", "+150.0000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte VIP gratuito 24/7","Tecnología anticongelante."] },
      { duration: "12 Meses", oldPrice: "€69.99", price: "€64.99", features: ["+36.000 Canales en vivo", "+150.0000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte VIP gratuito 24/7","Tecnología anticongelante."] },
    ],
    two: [
      { duration: "1 Mes", oldPrice: "€22.99", price: "€17.99", features: ["+36.000 Canales en vivo", "+150.000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte VIP gratuito 24/7","Tecnología anticongelante."] },
      { duration: "3 Meses", oldPrice: "€49.99", price: "€44.99", features: ["+36.000 Canales en vivo", "+150.000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte VIP gratuito 24/7","Tecnología anticongelante."] },
      { duration: "6 Meses", oldPrice: "€79.99", price: "€74.99", features: ["+36.000 Canales en vivo", "+150.000Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte VIP gratuito 24/7","Tecnología anticongelante."] },
      { duration: "12 Meses", oldPrice: "€124.99", price: "€119.99", features: ["+36.000 Canales en vivo", "+150.0000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte VIP gratuito 24/7","Tecnología anticongelante."] },
    ],
  };

  return (
    <section id="plans" className="py-16 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Nuestros planes</h2>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setDeviceOption("one")}
            className={`py-2 px-4 rounded-l-lg ${
              deviceOption === "one" ? "bg-primary text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Un dispositivo
          </button>
          <button
            onClick={() => setDeviceOption("two")}
            className={`py-2 px-4 rounded-r-lg ${
              deviceOption === "two" ? "bg-primary text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Dos dispositivos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans[deviceOption].map((plan, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg mx-auto sm:w-4/5 lg:w-auto"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
              <p className="text-gray-500 line-through">{plan.oldPrice}</p>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <div className="flex justify-center">
                <a
                  href={`https://wa.me/34624063991?text=Hola,%20estoy%20interesado%20en%20el%20plan%20de%20${plan.duration}%20por%20${plan.price}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white py-3 px-8 rounded-full text-lg shadow-lg hover:bg-red-600 transition-all"
                >
                  Comprar IPTV
                </a>
              </div>
              <ul className="mt-4 text-left space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
