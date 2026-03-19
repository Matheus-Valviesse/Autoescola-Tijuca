import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";

const FloatingWhatsApp = () => {
  
  const phoneNumber = "5521964626002"; 
  const defaultMessage = "Olá! Gostaria de tirar algumas dúvidas sobre a Auto Escola Tijuca.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center justify-center group">
      
      {/* Efeito de radar (ping) piscando atrás do botão */}
      <div className="absolute h-16 w-16 rounded-full bg-[#25D366] opacity-75 animate-ping"></div>
      
      {/* Botão principal do WhatsApp */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-120 hover:shadow-[#25D366]/50"
        aria-label="Fale conosco no WhatsApp"
      >
        <FaWhatsapp className='w-10 h-10' />

        <span className="absolute right-20 top-1/2 -translate-y-1/2 scale-0 rounded bg-gray-900 px-3 py-2 text-xs font-bold text-white transition-all group-hover:scale-100 whitespace-nowrap hidden md:block">
          Fale com um consultor
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;