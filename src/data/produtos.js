export const PETS = [
  { id: 'cachorro', nome: 'Cachorro', plural: 'Cachorros' },
  { id: 'gato', nome: 'Gato', plural: 'Gatos' },
  { id: 'miniporco', nome: 'Mini porco', plural: 'Mini porcos' },
  { id: 'aves', nome: 'Ave', plural: 'Aves' },
  { id: 'cavalo', nome: 'Cavalo', plural: 'Cavalos' },
  { id: 'outros', nome: 'Outro pet', plural: 'Outros pets' },
];

// Cartela de fios usada no "Monte sua encomenda".
export const FIOS = [
  { id: 'rosa', nome: 'Rosa chiclete', cor: '#E2558A' },
  { id: 'mostarda', nome: 'Mostarda', cor: '#E3A92B' },
  { id: 'pistache', nome: 'Pistache', cor: '#9CC27A' },
  { id: 'ceu', nome: 'Azul céu', cor: '#7FB6E0' },
  { id: 'lilas', nome: 'Lilás', cor: '#B497D6' },
  { id: 'vermelho', nome: 'Vermelho', cor: '#C8373B' },
  { id: 'caramelo', nome: 'Caramelo', cor: '#B9763C' },
  { id: 'cru', nome: 'Branco cru', cor: '#EFE6D2' },
  { id: 'grafite', nome: 'Grafite', cor: '#4A4E57' },
  { id: 'coral', nome: 'Coral', cor: '#F07F5E' },
];

// Vitrine. Para usar uma foto real: coloque o arquivo em public/fotos/
// e preencha `foto: '/fotos/nome-do-arquivo.jpg'`.
// `pets: ['todos']` faz a peça aparecer em qualquer filtro.
export const PRODUTOS = [
  {
    id: 'sueter-tranca',
    nome: 'Suéter Trança',
    pets: ['cachorro', 'gato', 'miniporco'],
    desc: 'Ponto trança, gola alta dobrável e barra canelada que não aperta.',
    fios: ['rosa', 'mostarda'],
    selo: 'Mais pedido',
    foto: null,
  },
  {
    id: 'colete-florido',
    nome: 'Colete Florido',
    pets: ['miniporco', 'cachorro'],
    desc: 'Abertura larga para as patinhas e flores de crochê costuradas à mão.',
    fios: ['pistache', 'cru', 'coral'],
    foto: null,
  },
  {
    id: 'bandana-nome',
    nome: 'Bandana com Nome',
    pets: ['cachorro', 'gato'],
    desc: 'Amarração de laço e o nome do pet bordado na ponta.',
    fios: ['ceu', 'cru'],
    selo: 'Com bordado',
    foto: null,
  },
  {
    id: 'gorro-orelhas',
    nome: 'Gorrinho com Orelhas',
    pets: ['gato', 'cachorro'],
    desc: 'Furos sob medida para as orelhas e amarração macia no queixo.',
    fios: ['lilas', 'mostarda'],
    foto: null,
  },
  {
    id: 'touca-cavalo',
    nome: 'Touca de Orelhas',
    pets: ['cavalo'],
    desc: 'A touca de crochê que cobre as orelhas do cavalo e ajuda contra mosquitos.',
    fios: ['vermelho', 'cru', 'grafite'],
    selo: 'Para cavalos',
    foto: null,
  },
  {
    id: 'coletinho-ave',
    nome: 'Coletinho de Ave',
    pets: ['aves'],
    desc: 'Peça levíssima para calopsitas, periquitos e papagaios, com as asas livres.',
    fios: ['mostarda', 'pistache'],
    foto: null,
  },
  {
    id: 'pijama',
    nome: 'Pijama Macacão',
    pets: ['cachorro', 'miniporco'],
    desc: 'Quatro mangas, abertura nas costas e botões de madeira.',
    fios: ['ceu', 'lilas'],
    foto: null,
  },
  {
    id: 'colar-flores',
    nome: 'Colar de Flores',
    pets: ['gato', 'cachorro', 'aves'],
    desc: 'Guirlanda de florzinhas para ensaios, aniversários e casamentos.',
    fios: ['coral', 'rosa', 'pistache'],
    foto: null,
  },
  {
    id: 'manta-caminha',
    nome: 'Manta de Caminha',
    pets: ['todos'],
    desc: 'Pontos fechados e macios para a caminha, o sofá ou a caixa de transporte.',
    fios: ['caramelo', 'cru'],
    foto: null,
  },
];

export const fio = (id) => FIOS.find((f) => f.id === id);
export const pet = (id) => PETS.find((p) => p.id === id);
