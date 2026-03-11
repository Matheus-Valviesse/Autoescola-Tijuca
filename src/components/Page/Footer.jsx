import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1c0d0e] px-6 py-16 text-white md:px-20 border-t border-gray-900">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white">
              <span className="material-symbols-outlined text-2xl">directions_car</span>
            </div>
            <h2 className="text-xl font-black tracking-tight uppercase">Auto Escola Tijuca</h2>
          </div>
          <p className="text-sm text-gray-400 font-medium leading-relaxed">
            Referência em ensino de trânsito no Rio de Janeiro. Formando condutores conscientes e seguros desde 1995.
          </p>
        </div>
        
        <div>
          <h4 className="mb-6 font-bold text-white uppercase tracking-wider">Serviços</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs text-primary">chevron_right</span> Primeira Habilitação
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs text-primary">chevron_right</span> Adição de Categoria
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs text-primary">chevron_right</span> Renovação de CNH
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs text-primary">chevron_right</span> Aulas para Habilitados
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="mb-6 font-bold text-white uppercase tracking-wider">Links Úteis</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs text-primary">chevron_right</span> Simulado DETRAN
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs text-primary">chevron_right</span> Consulta de Pontos
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs text-primary">chevron_right</span> Tabela de Preços
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs text-primary">chevron_right</span> Portal do Aluno
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="mb-6 font-bold text-white uppercase tracking-wider">Redes Sociais</h4>
          <div className="flex gap-4">
            <a className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all group" href="#">
              <span className="material-symbols-outlined text-gray-300 group-hover:text-white">social_leaderboard</span>
            </a>
            <a className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all group" href="#">
              <span className="material-symbols-outlined text-gray-300 group-hover:text-white">photo_camera</span>
            </a>
            <a className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all group" href="#">
              <span className="material-symbols-outlined text-gray-300 group-hover:text-white">play_circle</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-[1200px] mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
        <div>© 2024 Auto Escola Tijuca. Todos os direitos reservados.</div>
        <div>CNPJ: 00.000.000/0001-00</div>
      </div>
    </footer>
  );
};

export default Footer;