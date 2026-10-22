import Logo from './Logo.jsx';
import { PetIcon } from './Icones.jsx';
import { PETS } from '../data/produtos.js';

const PROMESSAS = [
  'Feito à mão, ponto a ponto',
  'Sob medida para o seu pet',
  'Cores e detalhes do seu jeito',
  'Conversa direta com a artesã',
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div className="hero-txt">
          <p className="sobretitulo">Ateliê de crochê para animais de estimação</p>
          <h1>
            Roupinha de crochê feita à mão para o seu pet, <em>do jeitinho dele.</em>
          </h1>
          <p className="lead">
            Suéteres, coletes, bandanas, toucas e acessórios sob medida para cachorros, gatos, mini
            porcos, aves, cavalos e qualquer bichinho da família. Você escolhe as cores, os detalhes e
            até o nome bordado.
          </p>
          <div className="acoes">
            <a className="btn btn-rosa" href="#encomenda">Montar minha encomenda</a>
            <a className="btn btn-linha" href="#pecas">Ver as peças</a>
          </div>
          <ul className="pets-linha" aria-label="Pets atendidos">
            {PETS.map((p) => (
              <li key={p.id}>
                <PetIcon pet={p.id} size={22} />
                {p.plural}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-arte">
          <Logo size="100%" className="logo-grande" />
          <p className="etiqueta">feito à mão · sob medida</p>
        </div>
      </div>
      <div className="wrap">
        <ul className="promessas">
          {PROMESSAS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
