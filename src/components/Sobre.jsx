const PASSOS = [
  ['Você conta a ideia', 'Pelo WhatsApp: qual pet, qual peça, cores e fotos de referência.'],
  ['Fios e medidas', 'A artesã confere as medidas, sugere fios e passa valor e prazo.'],
  ['Crochê à mão', 'A peça é feita ponto a ponto, só para o seu pet.'],
  ['Ajuste e entrega', 'Fotos da peça pronta, ajustes se precisar e envio ou retirada.'],
];

const FAQ = [
  ['Posso comprar direto pelo site?', 'Não. O site mostra as peças e monta seu pedido; tudo é combinado direto com a artesã pelo WhatsApp, onde ela passa valores, prazos e formas de pagamento.'],
  ['Vocês fazem roupa para qualquer animal?', 'Sim. Além de cachorros, gatos, mini porcos, aves e cavalos, dá para fazer peças para coelhos, porquinhos-da-índia e outros pets. Mande uma foto e as medidas.'],
  ['Posso mandar uma foto de referência?', 'Pode e deve. Foto de uma peça que você viu, de uma estampa ou do próprio pet ajuda muito.'],
  ['Como lavo a peça de crochê?', 'À mão, em água fria e sabão neutro. Não torça: aperte numa toalha e seque deitada, na sombra, para não deformar.'],
];

export default function Sobre() {
  return (
    <section className="secao" id="artesa">
      <div className="wrap">
        <div className="sobre-grid">
          <div>
            <p className="sobretitulo">A artesã</p>
            <h2>Uma mestre artesã, uma agulha e um pet de cada vez</h2>
            <p className="texto">
              Por trás da Crochê de Pets está uma artesã que transforma novelo em roupa sob medida. Cada
              peça começa na conversa com o tutor e termina com o pet quentinho, confortável e com a
              cara dele.
            </p>
            <p className="texto">
              Não existe tamanho P, M ou G por aqui. Existe o seu mini porco, o seu gato e o seu cavalo,
              com as medidas, as cores e o jeitinho de cada um.
            </p>
          </div>
          <ol className="passos" aria-label="Como funciona a encomenda">
            {PASSOS.map(([t, d], i) => (
              <li key={t}>
                <span className="passo-n">{i + 1}</span>
                <div>
                  <strong>{t}</strong>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="faq">
          <h3>Perguntas frequentes</h3>
          {FAQ.map(([q, r]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
