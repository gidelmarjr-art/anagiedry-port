# Ana Giedry · Nutrição

Landing page da nutricionista Ana Giedry — React + Vite.

## Estrutura

```
src/
  assets/images/     fotos usadas no site
  components/        peças reutilizáveis (cursor, marquee, reveal, etc.)
  sections/          cada bloco da página (Hero, Sobre, Método, ...)
  data/content.js     todo o texto/conteúdo editável (serviços, FAQ, depoimentos...)
  constants/colors.js  paleta de cores
  index.css           estilos globais e animações
  App.jsx             monta as seções na ordem final
  main.jsx            ponto de entrada
```

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## O que editar primeiro

- **Textos e conteúdo**: `src/data/content.js` (serviços, depoimentos, FAQ, links do menu).
- **Fotos**: troque os arquivos em `src/assets/images/` (mantenha os mesmos nomes ou atualize os imports nas seções correspondentes).
- **Cores**: `src/constants/colors.js`.
- **Contato real (WhatsApp/Instagram)**: `src/sections/Footer.jsx` e `src/components/FullscreenMenu.jsx` — os links ainda estão como placeholder (`href="#"`).
- **Depoimentos**: os 3 cards em `src/data/content.js` (`TESTIMONIALS`) são exemplo de layout — troque pelos reais.
