import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlanCard from '../cards/PlanCard';

const containerAnim = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6 }
};

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('1ª Habilitação Carro (B)');
  const [pricingData, setPricingData] = useState({});
  const [loading, setLoading] = useState(true);

  const categories = [
    '1ª Habilitação Carro (B)', 
    '1ª Habilitação Moto (A)',
    'Carro e Moto (AB)',
    'Adição de Carro (B)', 
    'Adição de Moto (A)'];

  useEffect(() => {
      const fetchPricing = async () => {
        try {
          const url = import.meta.env.VITE_API_PLANILHA;
          const response = await fetch(url);
          const rawData = await response.json();

          const categoryMap = {
            'cat-b': '1ª Habilitação Carro (B)',
            'cat-a': '1ª Habilitação Moto (A)',
            'cat-ab': 'Carro e Moto (AB)',
            'add-b': 'Adição de Carro (B)',
            'add-a': 'Adição de Moto (A)'
          };

          const formattedData = {
            '1ª Habilitação Carro (B)': [],
            '1ª Habilitação Moto (A)': [],
            'Carro e Moto (AB)': [],
            'Adição de Carro (B)': [],
            'Adição de Moto (A)': []
          };

          rawData.forEach(item => {
            const catName = categoryMap[item.id_categoria];

            if (catName) {
              formattedData[catName].push({
                title: item.nome_plano,
                price: item.preco_a_vista, 
                installments: item.qtd_parcelas,
                
              features: item.beneficios 
                ? item.beneficios.split('|').map(beneficio => beneficio.trim()).filter(Boolean)
                : [`Total a prazo: R$ ${item.preco_parcelado}`],
                
                isFeatured: item.destaque == 'V'
              });
            }
          });

          setPricingData(formattedData);
          setLoading(false);

        } catch (error) {
          console.error("Erro ao buscar dados da planilha:", error);
          setLoading(false);
        }
      };

      fetchPricing();
    }, []);

  return (
    <section className="px-6 py-24 md:px-10 relative bg-white" id="precos">
      <motion.div {...containerAnim} className="mx-auto max-w-[1400px] relative z-10">
        
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-4">Planos e Preços</h2>
          <p className="text-gray-500 text-lg">Selecione o serviço desejado e escolha o pacote que melhor atende suas necessidades.</p>
        </div>

        {/* Mostra um indicador de carregamento enquanto busca do Google Sheets */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <span className="ml-4 text-gray-500 font-bold">Buscando planos atualizados...</span>
          </div>
        ) : (
          <>

        {/* Botões de Categoria (Tabs) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories?.map((category) => (
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
        <div className="w-full mx-auto overflow-hidden px-2 py-4">
          <AnimatePresence mode="wait">
            <motion.div 
                  key={activeCategory}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 items-stretch"
                >
                  {pricingData[activeCategory] && pricingData[activeCategory].map((plan, index) => (
                    <PlanCard key={`${activeCategory}-${plan.title}`} {...plan} index={index}/>
                  ))}
              </motion.div>
            </AnimatePresence>
        </div>
      </>
        )}
        </motion.div>
    </section>
  );
};

export default Pricing;