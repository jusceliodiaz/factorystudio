# Factory Interactive — Contexto do Projeto

> Este arquivo serve como contexto para o Claude trabalhar neste projeto sem começar do zero.

---

## Sobre o Projeto

**Projeto:** Site de portfólio da Factory Interactive — studio criativo especializado em experiências digitais para arquitetura e mercado imobiliário  
**Arquivo principal:** `factoryinteractive.html` (one-page, HTML/CSS/JS puro, sem build tools, sem frameworks)  
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
- Logo: `images/logo_site.png` (arquivo local)

---

## Estrutura de Seções (ordem no HTML)

| Seção | Classe/Tag | Notas |
|---|---|---|
| Hero | `<section class="hero">` | Vídeo full-bleed, logo, h1, parágrafo, botão WA |
| Portfólio horizontal | `<div class="ph-wrap">` | Scroll horizontal fixo, 300vh de altura |
| Serviços | `<section class="section-services">` | Grid 6 cards, fundo `--bg-alt` |
| Portfólio 2×2 | `<section class="section-portfolio">` | Grid full-width sem padding |
| CTA | `<section class="cta">` | Centralizado, fundo `--bg-alt` |
| Footer | `<footer>` | Linha única centralizada |

---

## Componentes Principais

### Hero
- `height: 100vh`, `flex-direction: column`, `justify-content: center`
- Vídeo: `images/SHOWREEL.mp4` — `autoplay muted loop playsinline`
- Overlay: `linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.32))`
- Logo: `images/logo_site.png` — `height: 140px; width: auto; align-self: flex-start`
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

### Portfólio Horizontal (`.ph-wrap`)
- `height: 300vh` — scroll vertical converte em horizontal via JS
- `.ph-sticky`: `position: sticky; top: 0; height: 100vh; overflow: hidden`
- `.ph-track`: `display: flex; gap: 16px; will-change: transform`
- **Slide de texto** (`.ph-slide-text`): `width: 38vw !important; background: var(--gold) !important`
- **Slides de imagem** (`.ph-slide`): `width: 42vw`
- **Slide de encerramento** (`.ph-slide-end`): `width: 50vw !important; background: #f7f7f7 !important; color: #111`
- **Barra de progresso** (`.ph-progress-bar`): criada via JS, `height: 2px; background: var(--gold)` na base
- **JS:** `maxX = track.scrollWidth - viewport.offsetWidth` (cálculo correto para evitar espaço em branco extra)
- Projetos: LA TERROIR (Camila Dirani, 2026), ITAPORÃ (Eduardo Rabachini, 2025), MODUS CONSULTING (Miami FL, 2026)

### Serviços (`.section-services`)
- `background: var(--bg-alt)` — `#1e1e1e`
- Título H2: `color: var(--gold)`
- Grid: `grid-template-columns: repeat(6, 1fr); gap: 16px`
- Cards regulares (`.card`): `background: #121212; border-radius: var(--radius); padding: 36px`
  - Imagem no topo: `.card-img` — `height: 200px`, crop `object-fit: cover`
  - Número dourado, H3 branco, parágrafo `rgba(255,255,255,0.56)`, tags com borda
  - Hover: `translateY(-6px)`, borda dourada, imagem `scale(1.06)`
- Cards especiais (`.card-special`): `background: var(--gold); color: #1a1200` — **sem imagem**
  - Badge (`.card-special-badge`): pill escuro com texto "IA" ou "VOZ"
  - Tags (`.tag.tag-special`): `color: #3a3a3a; border-color: rgba(26,18,0,0.18)`

**Ordem dos 6 cards:**
1. Websites & Landing Pages (regular, com imagem)
2. Geração de Imagem por AI (especial dourado, badge "IA")
3. Archviz (regular, com imagem)
4. Realtime & Unreal Engine (regular, com imagem)
5. Navegação por Voz (especial dourado, badge "VOZ")
6. VR & AR (regular, com imagem)

### Portfólio 2×2 (`.section-portfolio`)
- `padding: 0; border-bottom: none`
- Grid: `grid-template-columns: 1fr 1fr; grid-template-rows: 60vh 60vh; gap: 3px`
- Cada card: `position: relative; overflow: hidden`
- Overlay: `linear-gradient(to top, rgba(0,0,0,0.82), transparent 52%)`
- Hover: imagem `scale(1.05)`, info sobe `translateY(0)`

**Projetos:**
| Projeto | Tipo | Local | Ano |
|---|---|---|---|
| Modus Consulting | Website | Miami — FL | 2026 |
| Dancon Empreendimentos | Landing Page | Curitiba — PR | 2025 |
| Baterias Samuka | Landing Page | Londrina — PR | 2025 |
| Solicita Licitações | Website | Brasil — Nacional | 2025 |

### CTA (`.cta`)
- Centralizado, `background: var(--bg-alt)`
- H2 + parágrafo + `.btn-wa` centralizado

### Footer
- `display: flex; justify-content: center`
- Texto: `Factory Studio © 2026 · Todos os direitos reservados.`
- `font-size: 0.82rem; color: var(--muted)`

---

## JavaScript (inline no `<body>`)

1. **Portfólio horizontal scroll** — converte scroll vertical em `translateX` no `.ph-track`, atualiza `.ph-progress-bar`
2. **Scroll reveal** — `IntersectionObserver` em `.reveal` → adiciona `.visible` (threshold 0.1), desconecta após revelar

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
- `.card-special` e `.card` têm mesma especificidade → `.card-special` deve vir depois no CSS ou usar seletor mais específico
- `.tag.tag-special` (dois seletores) supera `.tag` (um seletor) — usar essa forma para overrides de tag

---

## Padrões a Evitar

- Não usar fontes além de Inter
- Não usar accent verde, azul ou roxo — accent é `#b89c6e` (dourado)
- Não adicionar `box-shadow` — estética flat
- Não alterar `--pad: 10%` sem necessidade
- Não remover o gradiente escuro dos cards de portfólio
- Não calcular `maxX` como `viewport.offsetWidth * (n-1)` — usar `track.scrollWidth - viewport.offsetWidth`
- Não usar `!important` desnecessariamente — só em overrides de especificidade igual comprovada

---

## Próximos Passos Possíveis

- [ ] Imagens reais nos cards (mockups dos projetos)
- [ ] Lightbox nos projetos do portfólio 2×2
- [ ] Versão mobile revisada (portfólio horizontal, grid de serviços)
- [ ] Formulário de contato (Formspree)
- [ ] Favicon dedicado (além da logo)

---

*Atualizado em 15/05/2026 — pós refactor completo do `factoryinteractive.html`*
