import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import bgHero from '../../assets/fundo-hero.jpg';

const containerAnim = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

const titleAnim = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.2, type: "spring", bounce: 0.3 }
};

const textAnim = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.4 }
};

const btnWrapperAnim = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay: 0.6, type: "spring", bounce: 0.5 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

const Hero = () => {
  return (
    <section className="relative px-0 py-0 md:px-0">
      <motion.div 
        {...containerAnim}
        className="relative w-full"
      >
        <div 
          className="relative overflow-hidden bg-cover bg-center min-h-[600px] md:min-h-[700px] flex items-center px-6 md:px-20" 
          style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.1) 100%), url(${bgHero})` }}
        >
          <div className="mx-auto max-w-[1200px] w-full">
            <div className="max-w-[700px] space-y-8">
              <motion.h1 
                {...titleAnim}
                className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white tracking-tighter uppercase drop-shadow-lg"
              >
                Sua Habilitação <br /> na Tijuca com <br /> 
                <span className="text-primary">Segurança</span> e <span className="text-primary">Agilidade</span>
              </motion.h1>
              
              <motion.p 
                {...textAnim}
                className="text-lg md:text-xl font-medium text-white/90 leading-relaxed max-w-[600px] drop-shadow-md"
              >
                A auto escola líder em aprovação no Rio de Janeiro. Método exclusivo e instrutores pacientes para você dirigir de verdade.
              </motion.p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div {...btnWrapperAnim}>
                  <Button className="px-10 py-5 text-lg font-black shadow-xl uppercase tracking-wide">
                    COMEÇAR AGORA
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;