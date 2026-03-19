import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoStar } from "react-icons/io5";
import reviewsData from '../../data/comments.json';
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";

const ReviewsData = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  
  const totalPages = reviewsData && reviewsData.length > 0 
    ? Math.ceil(reviewsData.length / itemsPerPage) 
    : 1;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextPage();
    }, 20000);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const currentReviews = reviewsData 
    ? reviewsData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : [];

  return (
    <section id="depoimentos" className=" bg-white  px-6 py-20 md:px-20 border-t border-gray-100 dark:border-[#3a1a1d]">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Cabeçalho do Google */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-8">
          <div>
            <h2 className="text-3xl font-black text-[#1c0d0e]  uppercase">O que dizem no Google</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">Transparência é nosso compromisso. Veja as avaliações reais.</p>
          </div>
          
          <div className="flex items-center gap-4 bg-gray-50 dark:bg-[#230f11] px-6 py-4 rounded-xl border border-gray-200 dark:border-[#3a1a1d]">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-[#1c0d0e] dark:text-white">4.7</span>
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <IoStar/>
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="font-bold text-[#1c0d0e] dark:text-white">Excelência</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Baseado em 500+ reviews</span>
            </div>
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
              <svg className="w-full h-full" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" fill="#EA4335"></path>
                <path d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" fill="#4285F4"></path>
                <path d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" fill="#FBBC05"></path>
                <path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" fill="#34A853"></path>
                <path d="M0 0h48v48H0z" fill="none"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Barra de Progresso e Controles */}
        <div className="flex items-center justify-between mb-6">
          <div className="h-1 flex-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mr-6">
            <motion.div
              key={currentPage}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 20, ease: "linear" }}
              className="h-full bg-primary"
            />
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={prevPage}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#1c0d0e] hover:bg-primary hover:border-primary hover:text-white transition-colors"
            >
              <IoIosArrowBack className='w-full'/>
            </button>
            <button 
              onClick={nextPage}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#1c0d0e] hover:bg-primary hover:border-primary hover:text-white transition-colors"
            >
              <IoIosArrowForward className='w-full'/>
            </button>
          </div>
        </div>

        {/* Grid de Comentários */}
        <div className="overflow-hidden py-2">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {currentReviews.map((review, index) => (
                <div key={index} className="bg-gray-50  p-6 rounded-xl border border-gray-200  flex flex-col min-h-[220px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden shrink-0">
                      <img 
                        className="w-full h-full object-cover" 
                        alt={`Foto de ${review.nome}`} 
                        src={review.foto || `https://ui-avatars.com/api/?name=${review.nome}&background=random`} 
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1c0d0e]  line-clamp-1">{review.nome}</h4>
                      <div className="flex text-yellow-400 text-xs">
                        {[...Array(5)].map((_, i) => (
                          <IoStar/>
                        ))}
                      </div>
                    </div>
                    <span className="ml-auto text-xs text-gray-400 shrink-0">{review.tempo}</span>
                  </div>
                  <p className="text-sm text-gray-600  italic flex-1">"{review.comentario}"</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ReviewsData;