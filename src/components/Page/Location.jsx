import React from 'react';
import { motion } from 'framer-motion';

import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const containerAnim = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 }
};

const textAnim = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: 0.2 }
};

const mapAnim = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, delay: 0.4 }
};

const LocationSection = () => {
  return (
    <section className="relative bg-[#1c1c1c] py-20" id="localizacao">
      <motion.div 
        {...containerAnim}
        className="mx-auto max-w-[1280px] px-6 md:px-12 flex flex-col md:flex-row gap-12"
      >
        
        {/* Informações de Texto */}
        <motion.div {...textAnim} className="w-full md:w-1/3 text-white space-y-8">
          <div>
            <h2 className="text-3xl font-black mb-4 font-display">Localização Privilegiada</h2>
            <p className="text-gray-400 font-body">
              Estamos no coração da Tijuca, próximo ao metrô e com fácil acesso para todas as regiões do Rio.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-16 w-16 flex-none items-center justify-center rounded bg-primary/20 text-primary">
                <FaMapLocationDot className='w-10 h-10'/>
              </div>
              <div>
                <h4 className="font-bold text-lg font-display">Unidade Saens Peña</h4>
                <p className="text-sm text-gray-400 mt-1 font-body">Rua Conde de Itaguaí, n 13 - Lj A - Tijuca, Rio de Janeiro - RJ, 20511-200</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 flex h-16 w-16 flex-none items-center justify-center rounded bg-primary/20 text-primary">
                <MdOutlineMapsHomeWork className='w-10 h-10'/>
              </div>
              <div>
                <h4 className="font-bold text-lg font-display">Horário de Atendimento</h4>
                <p className="text-sm text-gray-400 mt-1 font-body">Seg - Sex: 08:00 - 18:00<br />Sáb: 08:00 - 12:00</p>
              </div>
            </div>
            
            <div className="pt-4">
              <a  className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors font-body" href="https://maps.app.goo.gl/TMArhQFuk4Weccbq7"  target='blank'>
                <FaMapMarkerAlt className="w-6 h-6" />
                Ver rotas no Google Maps
              </a>
            </div>
          </div>
        </motion.div>

        {/* Mapa */}
        <motion.div 
          {...mapAnim} 
          className="w-full md:w-2/3 h-[400px] rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative bg-gray-900"
        >
         
          <iframe 
            title="Mapa de Localização"
            allowFullScreen="" 
            height="100%" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14698.512760339798!2d-43.243761943517036!3d-22.927080917850137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e14ddedbcab%3A0x3b85b4b038918ed5!2sAUTO%20ESCOLA%20TIJUCA!5e0!3m2!1spt-PT!2sbr!4v1773449159551!5m2!1spt-PT!2sbr" 
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) brightness(90%) contrast(90%)' }} 
            width="100%"
          ></iframe>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="relative flex h-12 w-12">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-12 w-12 bg-primary items-center justify-center text-white shadow-lg border-2 border-white">
                <span className="material-symbols-outlined">directions_car</span>
              </span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default LocationSection;