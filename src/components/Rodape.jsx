import Logo from './Logo.jsx';
import { IconeConversa } from './Icones.jsx';
import { WHATSAPP_EXIBICAO, linkWhats } from '../config.js';

const MSG = 'Olá! Vim pelo site Crochê de Pets e quero conversar sobre uma encomenda.';

export function Rodape() {
  return (
    <footer className="rodape bico">
      <div className="wrap rodape-in">
        <div className="rodape-marca">
          <Logo size={72} />
          <div>
            <p className="rodape-nome">Crochê de Pets</p>
            <p>Roupinhas e acessórios de crochê, feitos à mão e sob encomenda.</p>
          </div>
        </div>
        <div className="rodape-contato">
          <p>Encomendas pelo WhatsApp</p>
          <p className="rodape-num selecionavel">{WHATSAPP_EXIBICAO}</p>
          <a className="btn btn-rosa" href={linkWhats(MSG)} target="_blank" rel="noopener noreferrer">
            <IconeConversa /> Chamar a artesã
          </a>
        </div>
      </div>
      <div className="wrap">
        <p className="rodape-fim">© {new Date().getFullYear()} Crochê de Pets · Peças artesanais sob encomenda</p>
      </div>
    </footer>
  );
}

export function BotaoFlutuante() {
  return (
    <a className="flutuante" href={linkWhats(MSG)} target="_blank" rel="noopener noreferrer" aria-label="Chamar a artesã no WhatsApp">
      <IconeConversa size={26} />
    </a>
  );
}
