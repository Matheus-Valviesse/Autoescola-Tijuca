import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from "react-icons/fa";

const containerAnim = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6 }
};

const cardAnim = (index) => ({
  initial: { opacity: 0, scale: 0.9, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: -20 },
  transition: { duration: 0.3, delay: index * 0.05 }
});

const PricingCard = ({ title, price, features, isFeatured, index }) => (
  <motion.div 
    {...cardAnim(index)}
    className={`flex flex-col min-h-[500px] rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl ${
      isFeatured 
        ? 'border-2 border-primary bg-white shadow-lg relative' 
        : 'border border-gray-200 bg-white shadow-sm'
    }`}
  >
    {isFeatured && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        Mais Procurado
      </div>
    )}
    
    <div className="mb-6">
      <h3 className="text-2xl font-black text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">Plano completo para sua aprovação</p>
    </div>

    <div className="mb-8">
      <span className="text-4xl font-black text-gray-900">R$ {price}</span>
      <span className="text-gray-400 text-sm block mt-1">/ à vista ou 12x no cartão</span>
    </div>

    <ul className="space-y-3 mb-8 flex-1">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
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
);

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('1ª Habilitação Carro (B)');

  const categories = ['1ª Habilitação Carro (B)', '1ª Habilitação Moto (A)', 'Carro e Moto (AB)', 'Adição (A ou B)'];

  // Dados fictícios estruturados (prontos para receber da API do Sheets depois)
  const pricingData = {
    '1ª Habilitação Carro (B)': [
      { title: 'Bronze', price: '1.200', features: ['20 Aulas Práticas', 'Material Didático Básico', 'Taxas Iniciais do Detran'], isFeatured: false },
      { title: 'Prata', price: '1.450', features: ['20 Aulas Práticas', 'Curso Teórico Online', 'Simulador (5 aulas)', 'Taxas Iniciais do Detran'], isFeatured: true },
      { title: 'Ouro', price: '1.800', features: ['20 Aulas Práticas (Carro VIP)', 'Curso Teórico Híbrido', 'Simulador Ilimitado', '1 Reprovação Inclusa (Re-teste)'], isFeatured: false },
    ],
    '1ª Habilitação Moto (A)': [
      { title: 'Bronze', price: '900', features: ['20 Aulas Práticas Básicas', 'Capacete Emprestado', 'Taxas Iniciais'], isFeatured: false },
      { title: 'Prata', price: '1.100', features: ['20 Aulas Práticas', 'Curso Teórico Online', 'Taxas Iniciais'], isFeatured: true },
      { title: 'Ouro', price: '1.400', features: ['20 Aulas Práticas (Moto Nova)', 'Curso Teórico Presencial', '1 Reprovação Inclusa'], isFeatured: false },
    ],
    'Carro e Moto (AB)': [
      { title: 'Bronze', price: '2.000', features: ['40 Aulas Práticas (20A / 20B)', 'Material Didático', 'Taxas Iniciais'], isFeatured: false },
      { title: 'Prata', price: '2.400', features: ['40 Aulas Práticas (20A / 20B)', 'Curso Teórico Online', 'Simulador (Carro)'], isFeatured: true },
      { title: 'Ouro', price: '2.900', features: ['40 Aulas Práticas VIP', 'Curso Teórico Presencial', 'Simulador Ilimitado', '1 Reprovação Inclusa'], isFeatured: false },
    ],
    'Adição (A ou B)': [
       { title: 'Bronze', price: '800', features: ['15 Aulas Práticas', 'Taxas Inclusas', 'Agendamento Padrão'], isFeatured: false },
       { title: 'Prata', price: '1.000', features: ['15 Aulas Práticas', 'Taxas Inclusas', 'Prioridade no Agendamento'], isFeatured: true },
       { title: 'Ouro', price: '1.300', features: ['15 Aulas Práticas VIP', 'Taxas Inclusas', 'Garantia de Re-teste'], isFeatured: false }
    ]
  };

  return (
    <section className="px-6 py-24 md:px-20 relative bg-white overflow-hidden" id="precos">
      <motion.div {...containerAnim} className="mx-auto max-w-[1280px] relative z-10">
        
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-4">Planos e Preços</h2>
          <p className="text-gray-500 text-lg">Selecione o serviço desejado e escolha o pacote que melhor atende suas necessidades.</p>
        </div>

        {/* Botões de Categoria (Tabs) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Cards Animados */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          <AnimatePresence mode="wait">
            {pricingData[activeCategory].map((plan, index) => (
              <PricingCard key={`${activeCategory}-${plan.title}`} {...plan} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Pricing;