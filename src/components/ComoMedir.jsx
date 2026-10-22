const MEDIDAS = [
  ['A', 'Pescoço', 'Contorne a base do pescoço, onde fica a coleira.'],
  ['B', 'Tórax', 'A parte mais larga do peito, logo atrás das patas da frente.'],
  ['C', 'Dorso', 'Da base do pescoço até o começo do rabo, pelas costas.'],
];

const OUTROS = [
  ['Mini porcos', 'As mesmas três medidas. Mande também a idade: porquinho cresce rápido e a artesã deixa folga.'],
  ['Cavalos', 'Para a touca: da testa até atrás das orelhas, a distância entre as orelhas e a altura de cada orelha.'],
  ['Aves', 'Diga a espécie e mande uma foto da ave perto de uma régua. A peça é ajustada pelo tamanho.'],
];

function Marca({ x, y, letra }) {
  return (
    <g>
      <circle cx={x} cy={y} r="13" fill="var(--pink)" />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--on-pink)" fontFamily="var(--f-body)">{letra}</text>
    </g>
  );
}

export default function ComoMedir() {
  return (
    <section className="secao" id="medidas">
      <div className="wrap medir-grid">
        <div className="medir-desenho">
          <svg viewBox="0 0 330 220" role="img" aria-label="Desenho de um cachorro de perfil com as três medidas: pescoço, tórax e dorso">
            <g stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="var(--surface)">
              <path d="M252 104 C 276 92, 286 70, 280 54" fill="none" />
              <rect x="206" y="128" width="17" height="60" rx="8.5" />
              <rect x="230" y="126" width="17" height="62" rx="8.5" />
              <rect x="108" y="128" width="17" height="60" rx="8.5" />
              <rect x="132" y="130" width="17" height="58" rx="8.5" />
              <ellipse cx="172" cy="112" rx="86" ry="38" />
              <ellipse cx="96" cy="92" rx="22" ry="28" transform="rotate(-25 96 92)" />
              <circle cx="72" cy="70" r="29" />
              <ellipse cx="46" cy="81" rx="19" ry="12" />
              <path d="M78 43 C 98 42, 102 74, 90 86 C 84 76, 80 60, 78 43 Z" fill="var(--pink-soft)" />
            </g>
            <circle cx="30" cy="77" r="4.5" fill="var(--ink)" />
            <circle cx="64" cy="64" r="3" fill="var(--ink)" />

            <g fill="none" stroke="var(--pink)" strokeWidth="3" strokeDasharray="6 5">
              <ellipse cx="101" cy="94" rx="9" ry="27" transform="rotate(-25 101 94)" />
              <ellipse cx="156" cy="112" rx="10" ry="40" />
            </g>
            <g stroke="var(--pink)" strokeWidth="3" strokeLinecap="round">
              <path d="M112 62 L252 68" />
              <path d="M112 54 L112 70 M252 60 L252 76" />
            </g>
            <Marca x="84" y="132" letra="A" />
            <Marca x="178" y="172" letra="B" />
            <Marca x="182" y="48" letra="C" />
            <text x="165" y="212" textAnchor="middle" fontSize="13" fill="var(--muted)" fontFamily="var(--f-body)">fita métrica de costura, com um dedo de folga</text>
          </svg>
        </div>

        <div className="medir-txt">
          <p className="sobretitulo">Guia de medidas</p>
          <h2>Três medidas e a roupinha veste certinho</h2>
          <ol className="lista-medidas">
            {MEDIDAS.map(([l, nome, txt]) => (
              <li key={l}>
                <span className="letra">{l}</span>
                <div>
                  <strong>{nome}</strong>
                  <p>{txt}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="dica">
            Meça com o pet em pé e calmo, sem apertar a fita. Na dúvida entre dois números, mande o
            maior.
          </p>
          <div className="outros-pets">
            {OUTROS.map(([t, d]) => (
              <div key={t}>
                <strong>{t}</strong>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
