# Crochê de Pets

Site vitrine (sem venda direta) da artesã. Pedidos vão para o WhatsApp com a mensagem já montada.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/ para subir em qualquer hospedagem estática (Vercel, Netlify, Hostinger)
```

## Onde editar

- `src/config.js` — número do WhatsApp (formato `55` + DDD + número) e texto exibido.
- `src/data/produtos.js` — peças da vitrine, pets e cartela de fios.
- Fotos reais: coloque em `public/fotos/` e preencha `foto: '/fotos/arquivo.jpg'` na peça. Sem foto, o card mostra a textura de crochê nas cores da peça.
- `src/styles.css` — cores e fontes no topo (`:root`), com tema escuro automático.

## Estrutura

```
src/
  App.jsx                 estado do pedido + seções
  components/
    Header.jsx            topo fixo
    Hero.jsx              abertura com o logo
    Catalogo.jsx          vitrine com filtro por pet
    Encomenda.jsx         formulário que monta a mensagem do WhatsApp
    ComoMedir.jsx         guia de medidas (pescoço, tórax, dorso)
    Sobre.jsx             a artesã, como funciona, perguntas frequentes
    Rodape.jsx            rodapé + botão flutuante do WhatsApp
    Logo.jsx              logo em SVG (novelo, agulhas, porquinho e cachorrinho)
    Icones.jsx            ícones dos pets e textura de crochê
```
