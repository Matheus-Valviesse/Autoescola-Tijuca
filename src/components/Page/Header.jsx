import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import logoImg from '../../assets/logo.png';

const headerAnim = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { type: "spring", stiffness: 100, damping: 20 }
};

const logoAnim = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { duration: 0.6, delay: 0.2, type: "spring", bounce: 0.5 }
};

const navItemAnim = (index) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay: 0.3 + (index * 0.1) },
  whileHover: { scale: 1.1, color: "#e50615" }
});

const btnAnim = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.6, type: "spring" },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

const Header = () => {
  return (
    <motion.header 
      {...headerAnim}
      className="sticky top-0 z-50 w-full border-b border-solid border-[#f4e6e7] bg-white px-6 md:px-20 py-4 shadow-sm"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        
        <div className="flex items-center gap-3">
          <motion.img 
            {...logoAnim}
            src={logoImg} 
            alt="Logo Auto Escola" 
            className="h-16 w-auto object-contain" 
          />
        </div>

        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {['Início', 'Preços', 'Depoimentos', 'Localização'].map((item, index) => (
            <motion.a 
              {...navItemAnim(index)}
              key={item} 
              href={`#${item.toLowerCase().replace('ç', 'c').replace('í', 'i')}`} 
              className="text-sm font-bold text-[#1c0d0e] transition-colors uppercase tracking-wide"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.div 
          {...btnAnim}
          className="flex items-center gap-3"
        >
          <Button variant="whatsapp">
            WhatsApp
          </Button>
        </motion.div>

      </div>
    </motion.header>
  );
};

export default Header;