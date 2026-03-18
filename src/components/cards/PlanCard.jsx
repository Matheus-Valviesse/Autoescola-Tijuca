import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from "react-icons/fa";

const cardAnim = (index) => ({
  initial: { opacity: 0, scale: 0.9, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: -20 },
  transition: { duration: 0.3, delay: index * 0.05 }
});



const PlanCard = ({ title, price, installments, features, isFeatured, index }) => {
  return (
  <motion.div 
    {...cardAnim(index)}
    className={`flex flex-col min-h-[480px] rounded-2xl p-4 xl:p-6 transition-all hover:-translate-y-2 hover:shadow-xl ${
      isFeatured 
        ? 'border-2 border-primary bg-white shadow-lg relative' 
        : 'border border-gray-200 bg-white shadow-sm'
    }`}
  >
   {isFeatured && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap z-10">
        Mais Procurado
      </div>
    )}
    
    <div className="mb-6">
      <h3 className="text-2xl font-black text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">Plano completo para sua aprovação</p>
    </div>

    <div className="mb-8">
      <span className="text-3xl lg:text-4xl font-black text-gray-900">R$ {price}</span>
      <span className="text-gray-400 text-xs block mt-1">/ à vista</span>
      {installments && (
        <span className="text-primary font-bold text-xs block mt-1">ou {installments}</span>
      )}
    </div>

    <ul className="space-y-3 mb-8 flex-1">
     {features && Array.isArray(features) && features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
          <span className={`material-symbols-outlined text-base shrink-0 ${isFeatured ? 'text-primary' : 'text-green-500'}`}>
            <FaCheck />
          </span>
          {feature}
        </li>
      ))}
    </ul>

    <button className={`w-full mt-auto py-4 rounded-xl font-bold transition-all ${
      isFeatured 
        ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-red-700' 
        : 'border border-gray-200 text-gray-900 hover:bg-gray-50'
    }`}>
      Escolher Plano
    </button>
  </motion.div>
  )
}

export default PlanCard
