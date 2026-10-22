import { useRef, useState } from 'react';
import { IconeConversa, PetIcon } from './Icones.jsx';
import { FIOS, PETS, PRODUTOS, fio, pet } from '../data/produtos.js';
import { WHATSAPP_EXIBICAO, linkWhats } from '../config.js';

export const PEDIDO_INICIAL = {
  pet: 'cachorro',
  qualPet: '',
  nomePet: '',
  peca: 'sueter-tranca',
  fios: ['rosa', 'mostarda'],
  pescoco: '',
  torax: '',
  dorso: '',
  semMedidas: false,
  bordar: false,
  obs: '',
};

export function montarMensagem(pd) {
  const peca = pd.peca === 'outra' ? 'uma ideia minha (explico nos detalhes)' : PRODUTOS.find((p) => p.id === pd.peca)?.nome;
  let petTxt = pd.pet === 'outros' ? pd.qualPet.trim() || 'outro pet' : pet(pd.pet).nome;
  if (pd.nomePet.trim()) petTxt += ` (nome: ${pd.nomePet.trim()})`;
  const cores = pd.fios.map((id) => fio(id).nome);

  const linhas = ['Olá! Vim pelo site Crochê de Pets e quero fazer uma encomenda.', ''];
  linhas.push(`• Peça: ${peca}`);
  linhas.push(`• Pet: ${petTxt}`);
  linhas.push(`• Cores: ${cores.length ? cores.join(', ') : 'quero sugestões'}`);

  if (pd.semMedidas) {
    linhas.push('• Medidas: preciso de ajuda para medir');
  } else {
    const m = [];
    if (pd.pescoco) m.push(`pescoço ${pd.pescoco} cm`);
    if (pd.torax) m.push(`tórax ${pd.torax} cm`);
    if (pd.dorso) m.push(`dorso ${pd.dorso} cm`);
    linhas.push(`• Medidas: ${m.length ? m.join(' · ') : 'ainda vou medir'}`);
  }
  if (pd.bordar) linhas.push(`• Bordar o nome: ${pd.nomePet.trim() || 'sim, combino o nome'}`);
  if (pd.obs.trim()) linhas.push(`• Detalhes: ${pd.obs.trim()}`);
  return linhas.join('\n');
}

export default function Encomenda({ pedido, setPedido }) {
  const [copiado, setCopiado] = useState('');
  const previaRef = useRef(null);
  const mensagem = montarMensagem(pedido);
  const muda = (campo) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setPedido((p) => ({ ...p, [campo]: v }));
  };
  const alternaFio = (id) =>
    setPedido((p) => ({ ...p, fios: p.fios.includes(id) ? p.fios.filter((f) => f !== id) : [...p.fios, id] }));

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(mensagem);
      setCopiado('Mensagem copiada.');
    } catch {
      const r = document.createRange();
      r.selectNodeContents(previaRef.current);
      const s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      setCopiado('Texto selecionado: use Copiar do seu aparelho.');
    }
  };

  return (
    <section className="secao faixa bico" id="encomenda">
      <div className="wrap">
        <div className="secao-topo">
          <p className="sobretitulo">Monte sua encomenda</p>
          <h2>Conte como você imagina e a artesã faz</h2>
          <p className="secao-desc">
            Preencha o que souber. O site monta a mensagem e abre o WhatsApp da artesã para vocês
            combinarem valor, prazo e os últimos detalhes.
          </p>
        </div>

        <div className="encomenda-grid">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <legend>Para qual pet?</legend>
              <div className="chips">
                {PETS.map((p) => (
                  <button
                    type="button"
                    key={p.id}
                    className="chip"
                    aria-pressed={pedido.pet === p.id}
                    onClick={() => setPedido((s) => ({ ...s, pet: p.id }))}
                  >
                    <PetIcon pet={p.id} size={20} />
                    {p.nome}
                  </button>
                ))}
              </div>
              {pedido.pet === 'outros' && (
                <label className="campo">
                  <span>Qual bichinho?</span>
                  <input id="qual-pet" type="text" placeholder="Ex.: coelho, porquinho-da-índia, cabrito" value={pedido.qualPet} onChange={muda('qualPet')} />
                </label>
              )}
              <label className="campo">
                <span>Nome do pet</span>
                <input id="nome-pet" type="text" placeholder="Ex.: Paçoca" value={pedido.nomePet} onChange={muda('nomePet')} />
              </label>
            </fieldset>

            <fieldset>
              <legend>Qual peça?</legend>
              <label className="campo">
                <span className="sr-only">Peça</span>
                <select id="peca" value={pedido.peca} onChange={muda('peca')}>
                  {PRODUTOS.map((p) => (
                    <option key={p.id} value={p.id}>{p.nome}</option>
                  ))}
                  <option value="outra">Outra ideia (descrevo nos detalhes)</option>
                </select>
              </label>
            </fieldset>

            <fieldset>
              <legend>Cores do fio <small>escolha quantas quiser</small></legend>
              <div className="cartela">
                {FIOS.map((f) => (
                  <button
                    type="button"
                    key={f.id}
                    className="amostra"
                    aria-pressed={pedido.fios.includes(f.id)}
                    onClick={() => alternaFio(f.id)}
                  >
                    <span className="amostra-cor" style={{ '--fio': f.cor }} />
                    {f.nome}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Medidas <small>em centímetros · <a href="#medidas">como medir</a></small></legend>
              <div className="medidas">
                {[
                  ['pescoco', 'A · Pescoço'],
                  ['torax', 'B · Tórax'],
                  ['dorso', 'C · Dorso'],
                ].map(([id, rot]) => (
                  <label className="campo" key={id}>
                    <span>{rot}</span>
                    <span className="com-sufixo">
                      <input id={`medida-${id}`} type="number" inputMode="decimal" min="0" step="0.5" placeholder="0" value={pedido[id]} onChange={muda(id)} disabled={pedido.semMedidas} />
                      <i>cm</i>
                    </span>
                  </label>
                ))}
              </div>
              <label className="check">
                <input id="sem-medidas" type="checkbox" checked={pedido.semMedidas} onChange={muda('semMedidas')} />
                Ainda não sei medir, quero ajuda
              </label>
            </fieldset>

            <fieldset>
              <legend>Toques finais</legend>
              <label className="check">
                <input id="bordar" type="checkbox" checked={pedido.bordar} onChange={muda('bordar')} />
                Bordar o nome do pet na peça
              </label>
              <label className="campo">
                <span>Detalhes, ideias ou referências</span>
                <textarea id="obs" rows="3" placeholder="Ex.: quero flores amarelas na gola, é para o aniversário dele no dia 20." value={pedido.obs} onChange={muda('obs')} />
              </label>
            </fieldset>
          </form>

          <aside className="previa" aria-label="Prévia da mensagem">
            <p className="previa-rot">Prévia da mensagem</p>
            <div className="balao" ref={previaRef}>{mensagem}</div>
            <a className="btn btn-wa btn-largo" href={linkWhats(mensagem)} target="_blank" rel="noopener noreferrer">
              <IconeConversa /> Enviar pelo WhatsApp
            </a>
            <button type="button" className="btn btn-linha btn-largo" onClick={copiar}>
              Copiar mensagem
            </button>
            <p className="previa-nota" aria-live="polite">
              {copiado || <>WhatsApp da artesã: <strong className="selecionavel">{WHATSAPP_EXIBICAO}</strong></>}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
