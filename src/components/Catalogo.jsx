import { useState } from 'react';
import { PetIcon, Textura } from './Icones.jsx';
import { PETS, PRODUTOS, fio, pet } from '../data/produtos.js';
import { linkWhats } from '../config.js';

function ProdutoCard({ p, onPersonalizar }) {
  const qualquer = p.pets.includes('todos');
  const cores = p.fios.map((id) => fio(id).cor);
  const para = qualquer ? 'Qualquer pet' : p.pets.map((id) => pet(id).plural).join(' · ');
  const msg = `Olá! Vi a peça "${p.nome}" no site Crochê de Pets e quero saber mais sobre ela.`;

  return (
    <article className="card">
      <div className="card-foto">
        {p.foto ? (
          <img src={p.foto} alt={`${p.nome} de crochê`} loading="lazy" />
        ) : (
          <>
            <Textura cores={cores} />
            <span className="card-pet">
              <PetIcon pet={qualquer ? 'outros' : p.pets[0]} size={44} />
            </span>
          </>
        )}
        {p.selo && <span className="selo">{p.selo}</span>}
      </div>
      <div className="card-corpo">
        <p className="card-para">{para}</p>
        <h3>{p.nome}</h3>
        <p className="card-desc">{p.desc}</p>
        <div className="card-fios">
          {p.fios.map((id) => (
            <span key={id} className="fio-bolinha" style={{ '--fio': fio(id).cor }} title={fio(id).nome} />
          ))}
          <span className="fio-txt">ou as cores que você quiser</span>
        </div>
        <div className="card-acoes">
          <button type="button" className="btn btn-rosa btn-pq" onClick={() => onPersonalizar(p)}>
            Personalizar
          </button>
          <a className="btn btn-linha btn-pq" href={linkWhats(msg)} target="_blank" rel="noopener noreferrer">
            Perguntar
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Catalogo({ onPersonalizar }) {
  const [filtro, setFiltro] = useState('todos');
  const lista = PRODUTOS.filter(
    (p) => filtro === 'todos' || p.pets.includes('todos') || p.pets.includes(filtro)
  );

  return (
    <section className="secao" id="pecas">
      <div className="wrap">
        <div className="secao-topo">
          <p className="sobretitulo">Vitrine do ateliê</p>
          <h2>Peças que saem das agulhas</h2>
          <p className="secao-desc">
            Nada aqui é de prateleira: cada peça é refeita nas medidas do seu pet. Use a vitrine como
            ponto de partida e mude o que quiser.
          </p>
        </div>

        <div className="filtros" role="group" aria-label="Filtrar peças por pet">
          <button type="button" className="chip" aria-pressed={filtro === 'todos'} onClick={() => setFiltro('todos')}>
            Todos
          </button>
          {PETS.map((p) => (
            <button
              type="button"
              key={p.id}
              className="chip"
              aria-pressed={filtro === p.id}
              onClick={() => setFiltro(p.id)}
            >
              <PetIcon pet={p.id} size={20} />
              {p.plural}
            </button>
          ))}
        </div>

        <div className="grade">
          {lista.map((p) => (
            <ProdutoCard key={p.id} p={p} onPersonalizar={onPersonalizar} />
          ))}
        </div>

        <p className="nota-vitrine">
          Não achou o que imaginou? Peças sob encomenda são a especialidade da casa:{' '}
          <a href="#encomenda">conte sua ideia</a>.
        </p>
      </div>
    </section>
  );
}
