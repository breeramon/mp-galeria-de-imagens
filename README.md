# Galeria de Imagens (versão React)

Site de galeria de fotos organizado por "épocas" (início do namoro, viagens, datas
especiais...), com layout tipo museu/editorial e grid masonry responsivo — pensado
para lidar bem com fotos de formatos diferentes (retrato, paisagem, quadrada) sem
que uma "brigue" visualmente com a outra.

Construído com **Vite + React**, **react-router-dom** (navegação entre páginas),
**react-masonry-css** (grid masonry responsivo) e **framer-motion** (as animações:
a foto crescendo/encolhendo ao abrir e fechar, a troca suave entre páginas e o
efeito de revelar cada época ao rolar a tela).

## Como rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção (pasta `dist/`):

```bash
npm run build
npm run preview   # opcional, para conferir o build antes de publicar
```

## Estrutura do projeto

```
assets/              ← suas fotos ficam aqui (mesma pasta de sempre)
index.html
vite.config.js
src/
  main.jsx           ← ponto de entrada
  App.jsx            ← rotas (Home, Fotos, Bio, Contato)
  data/eras.js        ← ★ onde você cadastra as épocas e as fotos de cada uma
  pages/              ← Home.jsx, Fotos.jsx, Bio.jsx, Contato.jsx
  components/         ← Navbar, EraSection, MasonryGallery (grid + lightbox)
  motion/pageTransition.js ← configuração da animação de troca de página
  styles/             ← reset.css, tokens.css, layout.css, gallery.css, pages.css
```

As fotos continuam morando na pasta `assets/` na raiz do projeto — não precisei
mover nenhum arquivo de imagem que você já tinha. O `vite.config.js` está
configurado para servir essa pasta como se fosse a raiz do site (por isso as
fotos são referenciadas como `/fotoMalu1.jpeg`, sem `assets/` na frente).

## Como adicionar uma foto ou uma época nova

Tudo é feito em **`src/data/eras.js`**. O arquivo tem comentários explicando,
mas resumindo:

- **Foto nova numa época que já existe:** cole o arquivo dentro de `assets/` e
  adicione uma linha no array `photos` daquela época, com `src` (caminho do
  arquivo) e `alt` (uma descrição curta da foto).
- **Época nova (ex: uma viagem):** copie o formato de um objeto existente no
  array `eras`, dê um `id`, `title`, `period` (o texto da data, livre — pode
  ser "Julho 2024", "Verão de 2025", o que fizer sentido) e `description`, e
  preencha o `photos` com as fotos daquela época.

Não tem limite de fotos por época nem de épocas. O grid se ajusta sozinho.

**Importante:** hoje todas as 21 fotos que já existiam no projeto antigo foram
colocadas numa única época chamada "O Início", porque os nomes dos arquivos
(`fotoMalu1.jpeg`, `fotoMalu2.jpeg`...) não davam pra saber a qual fase cada
uma pertence. Separe elas em épocas quando tiver um tempo — é só mover cada
foto para o array `photos` da época certa em `eras.js`.

## Página de Contato

Criei a página (estava no README antigo como pendência, mas nunca tinha sido
feita). Abra `src/pages/Contato.jsx` e troque o e-mail/telefone de exemplo
pelos seus dados reais — estão comentados no topo do arquivo.

## Sobre as animações

- **Foto ampliada (lightbox):** ao clicar numa foto, ela "cresce" a partir do
  lugar exato onde estava na grade até preencher a tela, e encolhe de volta
  pro mesmo lugar ao fechar (ou ao trocar de foto com as setas/teclado). Isso
  é feito com o `layoutId` do framer-motion em `MasonryGallery.jsx` — o
  segredo é que a miniatura e a foto ampliada compartilham o mesmo id, então
  a biblioteca anima a transição entre as duas sozinha. Dá pra fechar com
  `Esc`, navegar com as setas `←`/`→` do teclado, ou clicando fora da foto.
- **Troca de página:** cada página (`Home`, `Fotos`, `Bio`, `Contato`) tem um
  fade + leve deslize configurado em `src/motion/pageTransition.js`. Pra
  ajustar a velocidade ou o estilo da transição, é só mexer nesse arquivo —
  vale pra todas as páginas de uma vez.
- **Revelar as épocas ao rolar:** cada seção de época (`EraSection.jsx`)
  aparece com um fade + deslize suave quando entra na tela, usando o
  `whileInView` do framer-motion.

## Publicando o site (deixar no ar)

Como é um site 100% estático (sem backend), dá pra publicar de graça em:
- **Vercel** ou **Netlify**: conecta o repositório do GitHub e ele detecta o
  Vite sozinho (build command `npm run build`, output `dist`).
- **GitHub Pages**: precisa de um ajuste no `vite.config.js` (`base: '/nome-do-repo/'`)
  e rodar o build antes de publicar a pasta `dist`. Posso ajudar a configurar
  quando você decidir onde vai hospedar.

## O que mudou em relação ao projeto antigo

O projeto antigo (HTML/CSS/JS puro: `index.html`, `fotos.html`, `bio.html`,
`script.js`, `styles.css`, `dados.js`) foi substituído por esta versão em
React. Esses arquivos antigos continuam no histórico do git, então nada foi
perdido — mas ficaram sem uso na pasta do projeto. Pode apagar com segurança:

- `fotos.html`, `bio.html`
- `script.js`, `dados.js`
- `styles.css`

O `index.html` da raiz **foi substituído** pelo novo (ponto de entrada do
Vite) — não precisa mexer nele.

**Atualização mais recente:** troquei a biblioteca `yet-another-react-lightbox`
por `framer-motion` (ela cobre o lightbox animado e as transições de página,
então na prática uma lib fez o trabalho de duas). O arquivo
`src/hooks/useInView.js`, que existia numa versão anterior, também não é mais
usado — pode apagar.
