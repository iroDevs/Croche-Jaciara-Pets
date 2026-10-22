import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Catalogo from './components/Catalogo.jsx';
import Encomenda, { PEDIDO_INICIAL } from './components/Encomenda.jsx';
import ComoMedir from './components/ComoMedir.jsx';
import Sobre from './components/Sobre.jsx';
import { BotaoFlutuante, Rodape } from './components/Rodape.jsx';

export default function App() {
  const [pedido, setPedido] = useState(PEDIDO_INICIAL);

  // "Personalizar" num card: preenche a peça no formulário e rola até ele.
  const personalizar = (produto) => {
    setPedido((p) => {
      const petServe = produto.pets.includes('todos') || produto.pets.includes(p.pet);
      return {
        ...p,
        peca: produto.id,
        pet: petServe ? p.pet : produto.pets[0],
        fios: [...produto.fios],
      };
    });
    document.getElementById('encomenda')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalogo onPersonalizar={personalizar} />
        <Encomenda pedido={pedido} setPedido={setPedido} />
        <ComoMedir />
        <Sobre />
      </main>
      <Rodape />
      <BotaoFlutuante />
    </>
  );
}
