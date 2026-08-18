// ============================================================================
// ERAS / ÉPOCAS DA GALERIA
// ============================================================================
// Cada objeto aqui é um "capítulo" da timeline (ex: "O Início", "Viagem para
// a Serra", "Um ano juntos"...). A página de Fotos lê esse array e monta uma
// seção para cada época, na ordem em que aparecem aqui.
//
// COMO ADICIONAR UMA ÉPOCA NOVA:
//   1. Copie um dos objetos abaixo (do { ... } até a próxima vírgula).
//   2. Troque id, title, period, description.
//   3. Preencha "photos" com as fotos dessa época (veja o formato abaixo).
//   4. Cole as fotos correspondentes dentro da pasta assets/ do projeto.
//
// COMO ADICIONAR UMA FOTO EM UMA ÉPOCA JÁ EXISTENTE:
//   - Só acrescente um novo item no array "photos" dessa época, apontando
//     para o arquivo de imagem (ele precisa estar em assets/).
//
// FORMATO DE CADA FOTO:
//   {
//     src: '/nome-do-arquivo.jpeg',  // caminho a partir da pasta assets/
//     alt: 'descrição curta da foto', // importante para acessibilidade
//   }
//
// Não existe limite de fotos por época nem de épocas — o layout (masonry)
// se ajusta sozinho ao formato de cada imagem (retrato, paisagem, quadrada).
// ============================================================================

export const eras = [
  {
    id: 'inicio',
    title: 'O Início',
    period: '2025',
    description:
      'As nossas primeiras fotos juntos, os primeiros encontros, o início de tudo.',
    photos: [
      { src: '/fotoMalu2.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu20.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu19.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu18.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu14.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu13.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu10.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu9.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu8.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu1.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu6.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu5.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu4.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu3.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu7.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu16.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu15.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu12.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu11.jpeg', alt: 'eu te amo' },
      { src: '/fotoMalu17.jpeg', alt: 'eu te amo' },
    ],
  },

  // 👉 Exemplo de próxima época — descomente e preencha quando tiver as fotos:
  // {
  //   id: 'viagem-serra',
  //   title: 'Viagem para a Serra',
  //   period: 'Julho 2024',
  //   description: 'Nosso primeiro fim de semana viajando juntos.',
  //   photos: [
  //     { src: '/viagem-serra-1.jpeg', alt: 'vista da serra' },
  //   ],
  // },
]

// Foto usada de fundo na Home e na Bio.
export const backgroundPhoto = '/fotoBackground.jpeg'
