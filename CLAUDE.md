# Factory Interactive — Contexto do Projeto

> Este arquivo serve como contexto para o Claude trabalhar neste projeto sem começar do zero.

---

## Sobre o Projeto

**Projeto:** Site de portfólio da Factory Interactive — studio criativo especializado em experiências digitais para arquitetura e mercado imobiliário  
**Arquivo principal:** `index.html` (one-page, HTML/CSS/JS puro, sem build tools, sem frameworks)  
**Objetivo:** Site dark/premium para atrair arquitetos, incorporadoras e empreendimentos de alto padrão

---

## Identidade Visual

### CSS Variables (`:root`)
```css
--gold:   #b89c6e;   /* dourado — cor de destaque principal */
--gold-d: #a08860;   /* hover do gold */
--bg:     #080808;   /* fundo global escuro */
--bg-alt: #1e1e1e;   /* fundo seções alternadas */
--text:   #f5f5f5;   /* texto principal */
--muted:  rgba(255, 255, 255, 0.45);
--border: rgba(255, 255, 255, 0.08);
--pad:    10%;        /* padding lateral global */
--radius: 24px;
--ease:   cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Tipografia
- **Tudo:** `Inter` (Google Fonts) — pesos 300, 400, 500, 600, 700, 800

### Estética
- Fundo global: `#080808` — todo o site é dark
- Seção Serviços: `var(--bg-alt)` = `#1e1e1e`
- Seção CTA "Iniciar Projeto": `var(--bg-alt)` = `#1e1e1e`
- Slide de encerramento do portfólio horizontal: `#f7f7f7` (exceção clara)
- Sem custom cursor, sem scrollbar customizada
- Logo: `images/logo_site2.png` (arquivo local)

---

## Estrutura de Seções (ordem no HTML)

| Seção | Classe/Tag | Notas |
|---|---|---|
| Hero | `<section class="hero">` | Vídeo full-bleed, logo, seletor de idioma, h1, parágrafo, botão WA |
| Portfólio horizontal | `<div class="ph-wrap">` | Scroll horizontal fixo, 300vh de altura |
| Serviços | `<section class="section-services">` | Bento grid de cards, fundo `--bg-alt` |
| Image Sequencer | `<div class="seq-wrap">` | Canvas com 121 frames webp, POI pins, botões Aéreo/Living |
| CTA | `<section class="cta">` | Centralizado, fundo `--bg-alt` |
| Side Nav | `<nav class="side-nav">` | Dots de navegação lateral direita |
| Footer | `<footer>` | Linha única centralizada |
| Modal Panorama | `<div id="pano-modal">` | Three.js, tour 360° por quarto/living/sacada |

---

## Componentes Principais

### Hero
- `height: 100vh`, `flex-direction: column`, `justify-content: center`
- Vídeo: `images/SHOWREEL.mp4` — `autoplay muted loop playsinline`, poster `images/SHOWREEL.webp`
- Overlay: `linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.32))`
- Logo: `images/logo_site2.png` — `height: 140px; width: auto; align-self: flex-start`
- **Seletor de idioma** (`.lang-switcher`): `position: absolute; top: 28px; right: var(--pad)` — 3 bandeiras emoji (🇧🇷 🇺🇸 🇪🇸), inativas em `grayscale(1) opacity(0.35)`, ativa em `scale(1.22)` com cor
- Botão WA: `.btn-wa` — borda branca translúcida, ícone dourado `.btn-wa-icon` (`border-radius: 10px`)
- **Animações de entrada com delays escalonados:**
  - Logo: `heroFadeDown 0.8s delay 0.25s`
  - H1: `heroFadeUp 0.9s delay 0.45s`
  - Parágrafo: `heroFadeUp 0.9s delay 0.65s`
  - Botão WA: `heroFadeUp 0.8s delay 0.85s`

### Botão WhatsApp (`.btn-wa`)
- `display: inline-flex; align-items: center; gap: 10px`
- `padding: 10px 24px 10px 10px; border-radius: 16px`
- `border: 1px solid rgba(255,255,255,0.18)`
- Ícone `.btn-wa-icon`: `48×48px; background: var(--gold); border-radius: 10px; color: #000`
- Hover: icon rotaciona `rotate(12deg) scale(1.12)`, botão sobe `translateY(-3px)`
- Link: `https://wa.me/5541992272317`

### Seletor de Idioma (`.lang-switcher`)
- `position: absolute; top: 28px; right: var(--pad); z-index: 10`
- 3 botões `.lang-btn` com `data-lang="pt|en|es"` e emoji de bandeira
- Inativo: `filter: grayscale(1) opacity(0.35)` | Ativo: `filter: none; transform: scale(1.22)`
- No Windows os emojis renderizam como texto (BR US ES) em `color: #fff`
- Idioma salvo em `localStorage` com chave `fi-lang` e restaurado no load
- **Não mexer no idioma PT** na restauração — é o default e já está aplicado no HTML

### Portfólio Horizontal (`.ph-wrap`)
- `height: 300vh` — scroll vertical converte em horizontal via JS
- `.ph-sticky`: `position: sticky; top: 0; height: 100vh; overflow: hidden`
- `.ph-track`: `display: flex; gap: 0; will-change: transform`
- **Slide de texto** (`.ph-slide-text` com classe `.ph-slide`): `width: 38vw !important; background: var(--gold) !important`
- **Slides de imagem** (`.ph-slide`): `width: 42vw`
- **Slide de encerramento** (`.ph-slide-end`): `width: 50vw !important; background: #f7f7f7 !important; color: #111`
- **JS:** `maxX = track.scrollWidth - viewport.offsetWidth` (cálculo correto para evitar espaço em branco extra)
- Projetos: LA TERROIR (Camila Dirani, 2026), ITAPORÃ (Eduardo Rabachini, 2025), MODUS CONSULTING (Miami FL, 2026)

### Serviços (`.section-services`)
- `background: var(--bg-alt)` — `#1e1e1e`
- Bento grid (`.services-bento`) com cards `.svc-card`
- Cards com imagem: `.svc-web`, `.svc-arch`, `.svc-real`, `.svc-vr`
- Cards especiais dourados: `.svc-card--special` — `.svc-ai` (badge "IA") e `.svc-voz` (badge "VOZ")
- Hover: imagem escala, card sobe

**6 cards na ordem:**
1. `.svc-web` — Websites & Digital Experiences (com imagem)
2. `.svc-ai` — AI Creative Interface (especial dourado, badge IA)
3. `.svc-arch` — Interactive Archviz (com imagem)
4. `.svc-real` — Realtime & Unreal Engine (com imagem)
5. `.svc-vr` — VR & AR (com imagem)
6. `.svc-voz` — Voice Interfaces (especial dourado, badge VOZ)

### Image Sequencer (`.seq-wrap`)
- 121 frames webp em `images/seq/seq_teste_000.webp` … `seq_teste_120.webp`
- Canvas + scroll → anima frames via `requestAnimationFrame`
- **POI pins** (`.poi-pin`): gerados via JS do objeto `POI_DATA` (dentro da IIFE do sequencer)
  - Grupo `aerial`: 4 pins (Torre Residencial, Baía Norte, Ponte Hercílio Luz, Morro da Cruz)
  - Grupo `living`: 1 pin (Área de Estar) com botão "Ver 360°" que abre o modal panorama
- Botões `.seq-scrub-btn`: `#seqBtnFirst` (Aéreo) e `#seqBtnLast` (Living)
- Overlay com título e botão WhatsApp

### Modal Panorama 360° (`#pano-modal`)
- Three.js carregado sob demanda (`cdn.jsdelivr.net/npm/three@0.160.0`)
- `TOUR` object global com rooms: `quarto`, `living`, `sacada`
  - Cada room tem `label`, `src` (imagem 360°) e `hotspots` (lon/lat + leadsTo)
- `_setRoomUI(roomKey)` exposto em `window._setRoomUI` — atualiza label e hotspots
- `window._panoCurrentRoom` — room atualmente exibida (usado pelo i18n)
- Loading text via `window._panoLoadingText`
- Room labels via `window._panoRoomLabels` (`{ quarto, living, sacada }`)

### CTA (`.cta`)
- Centralizado, `background: var(--bg-alt)`
- Label + H2 + parágrafo + `.btn-wa` centralizado

### Side Nav (`.side-nav`)
- Dots laterais direita com labels
- `data-target` aponta para IDs: `hero`, `portfolio`, `services`, `sequencer`, `contact`

### Footer
- `display: flex; justify-content: center`
- `font-size: 0.82rem; color: var(--muted)`

---

## Sistema de Internacionalização (i18n)

### Como funciona
- Elementos traduzíveis têm `data-i18n="chave"` no HTML
- Elementos com HTML interno (spans, em) têm também `data-i18n-html="true"`
- A função `applyLang(lang)` itera todos `[data-i18n]` e aplica `textContent` ou `innerHTML`
- Script isolado em IIFE no final do `<body>`, após o bloco do panorama

### Idiomas suportados
| Código | Idioma | Bandeira |
|---|---|---|
| `pt` | Português (Brasil) | 🇧🇷 |
| `en` | English (US) | 🇺🇸 |
| `es` | Español | 🇪🇸 |

### Chaves existentes no dicionário `T`
**Gerais:** `hero-h1`, `hero-p`, `ph-label`, `ph-heading`, `ph-desc`, `ph-meta-projeto`, `ph-meta-ano`, `ph-end-label`, `ph-end-heading`  
**Serviços:** `svc-web-h3/p`, `svc-ai-badge/h3/p`, `svc-arch-h3/p`, `svc-real-h3/p`, `svc-vr-h3/p`, `svc-voz-badge/h3/p`  
**Sequencer:** `seq-title`, `seq-btn-aerial`, `seq-btn-living`  
**CTA/Nav/Footer:** `cta-label`, `cta-h2`, `cta-p`, `nav-inicio/portfolio/servicos/interatividade/contato`, `footer`  
**POI pins:** `poi-aerial-0/1/2/3-title/desc`, `poi-living-0-title/desc`  
**Panorama:** `pano-btn-360`, `pano-hint`, `pano-room-quarto/living/sacada`, `pano-loading`, `pano-rl-quarto/living/sacada`

### Adicionar nova chave
1. Adicionar `data-i18n="nova-chave"` no elemento HTML
2. Adicionar a chave nos 3 dicionários (`pt`, `en`, `es`) no bloco `<!-- ── I18N ──`
3. Se o texto tiver HTML interno, adicionar também `data-i18n-html="true"`

### POI pins — geração dinâmica
Os pins são gerados via JS dentro do IIFE do sequencer. As chaves são montadas dinamicamente:
```js
`poi-${group}-${idx}-title`  // ex: poi-aerial-0-title
`poi-${group}-${idx}-desc`   // ex: poi-aerial-0-desc
```
Se adicionar novo POI ao `POI_DATA`, adicionar as chaves correspondentes ao dicionário T.

### Globals do panorama (atualizados pelo applyLang)
```js
window._panoLoadingText   // texto do spinner de carregamento
window._panoRoomLabels    // { quarto, living, sacada } com labels traduzidos
window._panoCurrentRoom   // room aberta atualmente (ou null)
window._setRoomUI         // função para re-renderizar room label + hotspots
```

---

## JavaScript (inline no `<body>`) — Blocos

1. **IIFE principal** — portfólio horizontal scroll + image sequencer (POI pins incluídos)
2. **Script global** — panorama 360° (TOUR, openPanoModal, _setRoomUI, _navigateToPano…)
3. **Script i18n** — seletor de idioma, dicionário T, applyLang, restauração do localStorage

---

## Animações

### Hero (CSS keyframes)
```css
@keyframes heroFadeUp   { to { opacity: 1; transform: translateY(0); } }
@keyframes heroFadeDown { to { opacity: 1; transform: translateY(0); } }
```
Elementos começam `opacity: 0` e animam para visíveis com delays escalonados.

### Scroll Reveal
```css
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.75s var(--ease), transform 0.75s var(--ease); }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.22s; }
.reveal-delay-3 { transition-delay: 0.34s; }
```

---

## SEO

- `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="robots">`, `<link rel="canonical">`
- Open Graph completo (og:type, og:url, og:title, og:description, og:image, og:locale, og:site_name)
- Twitter Card (`summary_large_image`)
- JSON-LD Schema (`ProfessionalService`) com nome, telefone, e-mail, endereço, sameAs
- Favicon: `images/logo_site.png`

---

## Contato

- WhatsApp: `https://wa.me/5541992272317` (+55 41 99227-2317)
- E-mail: firsightstudio@gmail.com
- Instagram: @umdesignerchato
- Behance: firsightstudio

---

## Como Trabalhar com Este Arquivo

### Edição via Edit tool (preferencial)
Usar o Edit tool diretamente. Antes de editar, sempre ler o trecho com Read para pegar a string exata incluindo indentação.

### Injetar CSS novo
Adicionar como override no final do bloco `<style>`, antes de `</style>`. Usar seletores mais específicos ou `!important` se necessário para vencer a cascata.

### Especificidade CSS importante
- `.svc-card--special` deve vir depois de `.svc-card` no CSS
- `.tag.tag-special` (dois seletores) supera `.tag` — usar essa forma para overrides de tag

---

## Padrões a Evitar

- Não usar fontes além de Inter
- Não usar accent verde, azul ou roxo — accent é `#b89c6e` (dourado)
- Não adicionar `box-shadow` — estética flat
- Não alterar `--pad: 10%` sem necessidade
- Não remover o gradiente escuro dos cards de portfólio
- Não calcular `maxX` como `viewport.offsetWidth * (n-1)` — usar `track.scrollWidth - viewport.offsetWidth`
- Não usar `!important` desnecessariamente — só em overrides de especificidade igual comprovada
- Não adicionar textos fixos em PT sem também adicionar ao dicionário EN e ES do i18n
- Não mexer em `_setRoomUI` sem expor via `window._setRoomUI` (necessário para o i18n re-renderizar)

---

## Próximos Passos Possíveis

- [ ] Imagens reais nos cards (mockups dos projetos)
- [ ] Lightbox nos projetos do portfólio 2×2
- [ ] Versão mobile revisada (portfólio horizontal, grid de serviços)
- [ ] Formulário de contato (Formspree)
- [ ] Favicon dedicado (além da logo)
- [ ] Seção portfólio 2×2 (estava no CLAUDE anterior, verificar se ainda existe no HTML)

---

*Atualizado em 15/05/2026 — adicionado i18n (PT/EN/ES), image sequencer, POI pins, modal panorama 360°*
