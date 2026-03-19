import React, {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

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

const mobileMenuAnim = {
  initial: { opacity: 0, x: "100%" }, 
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
  transition: { type: "spring", bounce: 0, duration: 0.4 }
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = "5521964626002"; 
  const defaultMessage = "Olá! Gostaria de tirar algumas dúvidas sobre a Auto Escola Tijuca.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const navLinks = ['Início', 'Preços', 'Localização', 'Depoimentos'];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); 
    const element = document.getElementById(targetId);
    setIsMobileMenuOpen(false);
    if (element) {
    
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return (
    <>
      <motion.header 
        {...headerAnim}
        className="fixed top-0 left-0 z-[60] w-full border-b border-solid border-[#f4e6e7] bg-white px-4 md:px-20 py-4 shadow-sm"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          
          <div className="flex items-center gap-3">
            <motion.img 
              {...logoAnim}
              src={logoImg} 
              alt="Logo Auto Escola" 
              className="h-12 md:h-16 w-auto object-contain" 
            />
          </div>

          <nav className="hidden md:flex flex-1 justify-center gap-8">
            {navLinks.map((item, index) => {
              const targetId = item.toLowerCase().replace('ç', 'c').replace('í', 'i').replace('ã', 'a');
              
              return (
                <motion.a 
                  {...navItemAnim(index)}
                  key={item} 
                  href={`#${targetId}`} 
                  onClick={(e) => handleSmoothScroll(e, targetId)} 
                  className="text-sm font-bold text-[#1c0d0e] transition-colors uppercase tracking-wide cursor-pointer hover:text-primary"
                >
                  {item}
                </motion.a>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
      
            <motion.div {...btnAnim} className="hidden md:flex">
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href={whatsappUrl}  
                className='cursor-pointer bg-[#25d366] text-white flex px-4 py-2 rounded-2xl gap-2 text-[18px] items-center font-bold hover:bg-[#1ebd59] transition-colors shadow-md'
              >
                <FaWhatsapp className='w-6 h-6' /> WhatsApp
              </a>
            </motion.div>

            {/* Ícone Hambúrguer (Aparece SÓ no mobile) */}
            <button 
              className="md:hidden text-[#1c0d0e] p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>

        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[70] md:hidden backdrop-blur-sm"
            />


            <motion.div 
              {...mobileMenuAnim}
              className="fixed top-0 right-0 h-screen w-[280px] bg-white z-[80] md:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="font-black uppercase text-lg text-gray-900">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-gray-100 hover:bg-red-100 hover:text-primary rounded-full transition-colors text-gray-600"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-6 overflow-y-auto">
                {navLinks.map((item) => {
                  const targetId = item.toLowerCase().replace('ç', 'c').replace('í', 'i').replace('ã', 'a');
                  
                  return (
                    <a 
                      key={item} 
                      href={`#${targetId}`} 
                      onClick={(e) => handleSmoothScroll(e, targetId)} 
                      className="text-lg font-bold text-gray-800 hover:text-primary transition-colors uppercase border-b border-gray-50 pb-4"
                    >
                      {item}
                    </a>
                  );
                })}

                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href={whatsappUrl}  
                  className='mt-4 w-full cursor-pointer bg-[#25d366] text-white flex justify-center py-4 rounded-xl gap-2 text-lg items-center font-black hover:bg-[#1ebd59] transition-colors shadow-lg shadow-[#25d366]/30'
                >
                  <FaWhatsapp className='w-6 h-6' /> Fale Conosco
                </a>
              </nav>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;