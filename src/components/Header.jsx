import Logo from './Logo.jsx';
import { IconeConversa } from './Icones.jsx';
import { linkWhats } from '../config.js';

export default function Header() {
  return (
    <header className="topo">
      <div className="wrap topo-in">
        <a className="marca" href="#inicio" aria-label="Crochê de Pets, voltar ao início">
          <Logo size={46} />
          <span className="marca-nome">Crochê <small>de</small> Pets</span>
        </a>
        <nav className="menu" aria-label="Seções do site">
          <a href="#pecas">Peças</a>
          <a href="#encomenda">Encomenda</a>
          <a href="#medidas">Como medir</a>
          <a href="#artesa">A artesã</a>
        </nav>
        <a
          className="btn btn-wa btn-pq"
          href={linkWhats('Olá! Vim pelo site Crochê de Pets e quero conversar sobre uma encomenda.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconeConversa size={18} /> WhatsApp
        </a>
      </div>
    </header>
  );
}
