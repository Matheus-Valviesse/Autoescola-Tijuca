import React from 'react';
import { motion } from 'framer-motion';
import { IoStar } from "react-icons/io5";

const containerAnim = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 }
};

const itemAnim = (index) => ({
  initial: { opacity: 0, scale: 0.5, y: 50 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true },
  transition: { type: "spring", stiffness: 100, damping: 12, delay: index * 0.15 },
  whileHover: { scale: 1.1 }
});

const StatItem = ({ value, label, icon, index }) => (
  <motion.div {...itemAnim(index)} className="flex flex-col items-center space-y-2 cursor-default">
    <div className="flex items-center gap-1">
      <span className="text-3xl md:text-4xl font-black text-primary">{value}</span>
      {icon && <span className="material-symbols-outlined text-yellow-400 text-3xl">{icon}</span>}
    </div>
    <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-300">{label}</span>
  </motion.div>
);

const Stats = () => {
  return (
    <section className="bg-black text-white py-12 px-6 border-b-4 border-primary overflow-hidden">
      <motion.div 
        {...containerAnim} 
        className="mx-auto max-w-[1200px] grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <StatItem value="+5.000" label="Alunos Habilitados" index={0} />
        <StatItem value="20" label="Anos de História" index={1} />
        <StatItem value="95%" label="Índice de Aprovação" index={2} />
        <StatItem value="4.7" label="Google Score" icon={<IoStar />} index={3} />
      </motion.div>
    </section>
  );
};

export default Stats;