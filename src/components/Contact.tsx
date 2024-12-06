import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto text-center max-w-lg"> {/* Limitar el ancho máximo */}
        {/* Título de la sección */}
        <h2 className="text-3xl font-semibold mb-6 text-red-600">Contáctanos</h2>

        {/* Texto descriptivo */}
        <p className="text-lg mb-6">
          ¿Tienes preguntas, inquietudes o deseas saber más sobre nuestros servicios? 
          <span className="text-red-600"> ¡Estamos aquí para ayudarte!</span> Escríbenos directamente a nuestro WhatsApp 
          y obtén respuestas rápidas y personalizadas.
        </p>

        {/* Icono de WhatsApp */}
        <div className="flex justify-center items-center mt-6">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-red-600 text-5xl"  // Tamaño y color del ícono
          />
        </div>

        {/* Botón de WhatsApp */}
        <div className="mt-8">
          <a
            href="https://wa.me/34624063991?text=Hola,%20tengo%20una%20consulta%20sobre%20IPTV" // Cambia 123456789 por tu número de WhatsApp empresarial
            target="_blank" // Abrir en nueva pestaña
            rel="noopener noreferrer" // Seguridad adicional
            className="bg-red-600 text-white py-3 px-8 rounded-full text-lg shadow-lg hover:bg-red-700 transition-all"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
