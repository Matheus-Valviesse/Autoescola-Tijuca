import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "font-bold rounded-lg transition-all shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-red-700 px-6 py-2.5",
    secondary: "bg-black text-white hover:bg-gray-800 px-6 py-2.5",
    outline: "border-2 border-secondary dark:border-white text-secondary dark:text-white hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-black py-4 px-8 w-full uppercase",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebd59] px-5 py-2.5 text-sm hidden sm:flex",
    white: "bg-white text-primary hover:bg-gray-100 py-4 px-8 uppercase"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;