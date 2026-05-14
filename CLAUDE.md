# Factory Interactive — Contexto do Projeto

> Este arquivo serve como contexto para o Claude trabalhar neste projeto sem começar do zero.

---

## 🧠 Sobre o Projeto

**Projeto:** Site de portfólio da Factory Interactive — estúdio de design freelancer  
**Arquivo principal:** `factoryinteractive.html` (one-page, HTML/CSS/JS puro, sem build tools)  
**Objetivo:** Site dark/minimalista premium para atrair clientes de design web

---

## 🎨 Identidade Visual Atual

### CSS Variables (`:root`)
```css
--bg: #f8f8f8;
--bg-alt: #f0f0f0;
--bg-card: #e8e8e8;
--text: #0f0f0f;
--muted: #888;
--mid: rgba(15,15,15,0.55);
--accent: #ffd100;         /* amarelo — cor de destaque principal */
--accent-d: #e6bc00;       /* hover do accent */
--border: rgba(0,0,0,0.1);
--font-d: 'Montserrat', sans-serif;
--font-b: 'Montserrat', sans-serif;
--pad-x: clamp(6rem, 21vw, 24rem);  /* margem lateral global */
```

### Tipografia
- **Tudo:** `Montserrat` (Google Fonts) — substituiu Syne + DM Sans

### Estética
- Hero e seções dark: fundo `#0a0a0a` / `#111`
- Seções de conteúdo (FAQ, Soluções): fundo claro `#f8f8f8`
- Custom cursor (`.cursor` + `.cursor-follower`)
- Scrollbar customizada
- Logo: `images/logo_site.png` (arquivo local)

---

## 🏗️ Estrutura de Seções (ordem no HTML)

| ID | Seção | Notas |
|---|---|---|
| `#inicio` | Hero | Vídeo `images/SHOWREEL.mp4` full-bleed, título grande, hero-bar com 3 cards glass |
| `#sobre` | Sobre mim | Texto centralizado 3 linhas + 2 icon cards (globo + pin) |
| `#solucoes` | Soluções | Accordion com 3 serviços |
| `#projetos` | Portfólio | Grid 2×2, cards full-width sem padding lateral |
| `#duvidas` | FAQ | Accordion |
| `#contato` | Formulário de Contato | Seção dark acima do footer |
| — | Footer | 3 colunas horizontais (linha única) |

---

## 🔑 Componentes Principais

### Header
- `position: fixed`, transparente sobre hero (glass pill: `rgba(255,255,255,0.07)`, `backdrop-filter: blur`)
- Some ao rolar (`header.scrolled` → `opacity:0; transform: translateY(-120%)`)
- Logo: `images/logo_site.png` — **140px de altura**
- Botão WA: verde limão `#aaee00`, ícone circular + label "Whatsapp" — **51px de ícone, fonte 1.32rem**
- Hamburger: quadrado escuro arredondado `66×66px`, `border-radius: 14px`, 3 linhas brancas `27px`

### Nav Overlay (menu hamburger)
- Abre **pela direita** (`right: 0; transform: translateX(100%)`)
- `z-index: 600` (acima do header que tem 500)
- Largura: `min(520px, 100vw)`
- Fundo: `#0d0d0d`
- Top bar: "Menu" label + botão X arredondado
- Links grandes uppercase: INICIO /01, CONTATO /02, PROJETOS /03, SOLUÇÕES /04
- Links centralizados verticalmente (`justify-content: center`)
- Sem ghost text, sem email, sem redes sociais

### Side Dot Nav
- `position: fixed; right: 1.75rem` — acompanha o scroll
- 5 dots: `13px`, amarelos `rgba(255,209,0,0.45)`, borda `var(--accent)`
- Dot ativo: amarelo sólido, `scale(1.45)`

### Hero
- Vídeo full-bleed (`images/SHOWREEL.mp4`)
- Overlay escuro
- Conteúdo: eyebrow text, título h1 grande, subtítulo, link CTA
- Hero-bar flutuante na base: 3 cards glass (Sites & Landing Pages, Logo & Branding, Criativos Digitais)

### Portfólio (`#projetos`)
- Grid 2×2 **full-width** (sem padding lateral — `padding: 0 0 5rem`)
- Gap mínimo: `0.4rem`
- Cards: `height: 480px`, `border-radius: 8px`, **sem hover animation**
- Cada card tem:
  - Badge de bandeira top-left (flag emoji + cidade)
  - Botão circular `↗` top-right (glass, vira accent no hover)
  - Barra flutuante bottom: nome (esquerdo) | ano (centro) | tipo pill (direito) — sem fundo sólido, flutua no gradiente
  - Gradiente overlay: `rgba(0,0,0,0.92)` na base

| Projeto | Bandeira | Ano | Tipo |
|---|---|---|---|
| Modus Consulting | 🇺🇸 Miami — FL | 2026 | Website |
| Dancon Empreendimentos | 🇧🇷 Curitiba — PR | 2025 | Landing Page |
| Baterias Samuka | 🇧🇷 Londrina — PR | 2025 | Landing Page |
| Solicita Licitações | 🇧🇷 Brasil — Nacional | 2025 | Website |

### Seção de Contato (`#contato`)
- Fundo `#111`, antes do footer
- Grid 2 colunas: `1fr 500px`
  - **Esquerda:** Texto "Buscando algo fora do padrão? Vamos conversar." + botão CTA WA
  - **Direita:** Formulário com Name, Telefone, Soluções (dropdown), E-mail, Mensagem, Enviar
- Form action: Formspree (firsightstudio@gmail.com)
- Padding: `var(--pad-x)` nas laterais

### Footer (`.footer-dark`)
- Fundo `#111`
- **Layout: linha única horizontal** (`display: flex; align-items: center`)
- 3 colunas:
  1. **Brand**: logo + tagline oculta + botão CTA oculto (compacto na linha)
  2. **Navegação**: links em linha horizontal (/01–/04)
  3. **Redes + Contato**: agrupados à direita (`margin-left: auto`)
- Bottom bar: copyright centralizado, `font-size: 0.85rem`
- Padding: `var(--pad-x)` nas laterais

---

## ⚙️ JavaScript (inline no `<body>`)

1. **Custom cursor** — segue o mouse com delay no follower
2. **Reveal on scroll** — `IntersectionObserver` em `.reveal` → adiciona `.visible`
3. **FAQ accordion** — toggle `.open` em `.faq-item`
4. **Tabs de serviços** — toggle `.active` em `.servico-tab` / `.servico-panel`
5. **Header scroll** — `header.scrolled` toggled a `scrollY > 60`
6. **Side dot nav** — `IntersectionObserver` nas seções → marca dot ativo

---

## 📦 Conteúdo

### Contato
- WhatsApp: `https://wa.me/5541992272317` (+55 41 99227-2317)
- E-mail: firsightstudio@gmail.com
- Instagram: @umdesignerchato
- TikTok: @umdesignerchato
- Facebook: /Um-designer-chato/
- Behance: firsightstudio

---

## 🔧 Como Trabalhar com Este Arquivo

### Técnica de edição CSS
O VS Code formatter reformata o CSS inline. **Sempre injetar novos estilos como overrides antes de `</style>`** — eles ganham na cascata.

```powershell
# Padrão para injetar CSS:
$css = @'  /* novo CSS */ '@
$content = $content -replace '(\s+</style>)', "$css`$1"
```

### Técnica de edição HTML
Usar `[System.IO.File]::ReadAllLines()` para substituições por índice de linha.

```powershell
$lines = [System.IO.File]::ReadAllLines($file)
$newLines = $lines[0..N] + $newHTML.Split([Environment]::NewLine) + $lines[M..($lines.Length-1)]
[System.IO.File]::WriteAllLines($file, $newLines, [System.Text.Encoding]::UTF8)
```

---

## 🚫 Padrões a Evitar

- Não usar fontes além de Montserrat
- Não usar accent verde ou roxo — accent é `#ffd100` (amarelo)
- Não adicionar `box-shadow` excessivo — estética flat
- Não mudar o cursor (body tem `cursor: none`)
- Não remover o gradiente escuro dos cards de portfólio
- Não aumentar o `--pad-x` além de `clamp(6rem, 21vw, 24rem)` — já é o valor calibrado
- Cuidado com overrides CSS acumulados — sempre usar `!important` e verificar qual é o último

---

## 💡 Próximos Passos Possíveis

- [ ] Imagens reais nos cards de portfólio (mockups dos projetos)
- [ ] Integrar formulário com Formspree real
- [ ] Lightbox nos projetos do portfólio
- [ ] Animação de entrada no hero title
- [ ] Versão mobile revisada (header, portfólio, footer)

---

*Atualizado em 14/05/2026 — estado atual do arquivo `factoryinteractive.html`*
