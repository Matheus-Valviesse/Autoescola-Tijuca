import React from 'react';
import logoSvg from '../../assets/logo-simple.svg';

const Footer = () => {
  return (
    <footer className="bg-[#140d0d] px-6 py-16 text-white md:px-20 font-sans border-t border-[#2a1d1d]">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
        
        {/* Coluna 1: Logo e Sobre */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            {/* Logo Customizado */}
           <img 
              src={logoSvg} 
              alt="Logo Auto Escola" 
              className="h-14 w-auto object-contain" 
            />
            <div className="leading-tight">
              <h2 className="text-[22px] font-bold tracking-tight text-white">Autoescola</h2>
              <span className="text-[20px] font-black text-[#d32228]">Tijuca</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 font-normal leading-relaxed">
            Desde 1989 formando condutores com excelência e segurança. A melhor estrutura do Tijuca para você conquistar sua CNH.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="https://www.instagram.com/cfctijuca?igsh=aXk2aGwxY2w0ZHk2" target='blank' className="flex h-10 w-10 items-center justify-center rounded-full bg-[#241a1a] hover:bg-[#d32228] transition-colors group">
              {/* Ícone Instagram */}
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/autoemotoescolatijuca/?locale=pt_BR" target='blank' className="flex h-10 w-10 items-center justify-center rounded-full bg-[#241a1a] hover:bg-[#d32228] transition-colors group">
              {/* Ícone Facebook */}
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Coluna 2: Contato */}
        <div>
          <div className="border-b border-white/10 pb-3 mb-6">
            <h4 className="text-lg font-bold text-white">Contato</h4>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#d32228]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">Endereço</span>
                <span className="text-sm text-gray-400">Rua Conde de Itaguaí, n 13 - Lj A - Tijuca, Rio de Janeiro - RJ, 20511-200 </span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#d32228]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">Telefone</span>
                <span className="text-sm text-gray-400">(21) 3507-0785</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#d32228]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">E-mail</span>
                <span className="text-sm text-gray-400">autoescolameier@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna 3: Horário */}
        <div>
          <div className="border-b border-white/10 pb-3 mb-6">
            <h4 className="text-lg font-bold text-white">Horário</h4>
          </div>
          
          <ul className="text-sm text-gray-400">
            <li className="flex justify-between py-3 border-b border-white/5">
              <span>Segunda a Sexta</span>
              <span className="font-bold text-white">08:00 - 18:00</span>
            </li>
            <li className="flex justify-between py-3 border-b border-white/5">
              <span>Sábado</span>
              <span className="font-bold text-white">08:00 - 12:00</span>
            </li>
            <li className="flex justify-between py-3">
              <span>Domingo</span>
              <span className="font-bold text-[#d32228]">Fechado</span>
            </li>
          </ul>

          <div className="mt-6 border border-white/10 rounded-lg p-5 bg-white/[0.02]">
            <p className="text-sm text-gray-400 italic text-center">
              "Sua liberdade começa aqui. Agende sua aula hoje mesmo!"
            </p>
          </div>
        </div>

        {/* Coluna 4: Localização */}
        <div>
          <div className="border-b border-white/10 pb-3 mb-6">
            <h4 className="text-lg font-bold text-white">Localização</h4>
          </div>
          
          <div className="w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden border border-white/10">
            {/* Embedded Google Map (Apontando para o Tijuca) */}
            <iframe 
              title="Mapa de Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14698.512760339798!2d-43.243761943517036!3d-22.927080917850137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e14ddedbcab%3A0x3b85b4b038918ed5!2sAUTO%20ESCOLA%20TIJUCA!5e0!3m2!1spt-PT!2sbr!4v1773449159551!5m2!1spt-PT!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mx-auto max-w-[1200px] mt-16 pt-8 border-t border-white/5 flex justify-center items-center text-[13px] text-gray-500 font-medium">
        <p>© 2026 Autoescola Tijuca. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;