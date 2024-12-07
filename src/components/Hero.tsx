import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="bg-cover bg-center h-screen relative flex items-center justify-center"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      {/* Filtro oscuro */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-white text-center max-w-3xl px-6 md:px-12 lg:px-20">
        {/* Contenedor del logo */}



        {/* Título principal con animación */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-8 mb-6 drop-shadow-lg">
          <TypeAnimation
            sequence={[
              "El Mejor Proveedor de Suscripción IPTV España", // Texto 1
              2000, // Tiempo de espera (ms)
              "Disfruta de más de 65.000 canales en vivo!", // Texto 2
              2000, // Tiempo de espera (ms)
              "Más de 150.000 películas y series en 4K", // Texto 3
              2000, // Tiempo de espera (ms)
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        {/* Subtítulo descriptivo */}
        <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
          En <span className="font-bold text-primary">Wolfnet IPTV España</span>, imagina tener a tu alcance más de <span className="font-bold text-primary">65.000 canales en vivo</span>, junto con una increíble colección de más de <span className="font-bold text-primary">150.000 películas</span> y series. Todo esto sin bloqueos y en calidad 4K, FHD, HD y SD, adaptable a todos tus dispositivos.
        </p>

        {/* Botón de llamada a la acción */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/34624063991?text=Hola,%20estoy%20interesado%20en%20comprar%20IPTV" // Reemplaza "123456789" con tu número de WhatsApp
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer" // Asegura seguridad adicional
            className="bg-primary text-white py-3 px-8 rounded-full text-lg shadow-lg hover:bg-red-600 transition-all"
          >
            Comprar IPTV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
