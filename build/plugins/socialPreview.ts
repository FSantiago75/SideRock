import type { Plugin } from 'vite'
import { EXPERIENCE_ROUTES, LEGACY_EXPERIENCE_ROUTES } from '../../src/config/experiences'

const previews = {
  catalog: {
    title: 'Side Rock e Ozzborn — Experiências musicais',
    description: 'Rock internacional e tributo a Ozzy Osbourne. Conheça as bandas, ouça as faixas e confira os shows.',
    path: '/',
    image: '/images/sharing/experiencias.jpg',
    alt: 'Side Rock e Ozzborn — identidades das duas bandas',
    icon: '/favicon.svg',
  },
  sideRock: {
    title: 'Side Rock — Rock internacional, energia ao vivo',
    description: 'Clássicos do rock com identidade em cada apresentação. Ouça a Side Rock, conheça a formação e leve essa energia para o seu evento.',
    path: `${EXPERIENCE_ROUTES.sideRock}/resumo`,
    image: '/images/sharing/side-rock.jpg',
    alt: 'Emblema da Side Rock com caveira e coroa em fundo preto e vermelho',
    icon: '/favicon.svg',
  },
  ozzborn: {
    title: 'Ozzborn — Tributo a Ozzy Osbourne',
    description: 'A identidade de Ozzy em um tributo com peso e presença no palco. Ouça a Ozzborn, confira os shows e conheça a banda.',
    path: `${EXPERIENCE_ROUTES.ozzborn}/resumo`,
    image: '/images/sharing/ozzborn.jpg',
    alt: 'Logo da Ozzborn com asas de morcego em fundo preto e roxo',
    icon: '/favicon-ozzborn.png',
  },
} as const

type Preview = typeof previews[keyof typeof previews]
const escape = (text: string) => text.replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]!)

function forPath(pathname: string): Preview {
  const matches = (base: string) => pathname === base || pathname.startsWith(`${base}/`)
  if (matches(EXPERIENCE_ROUTES.ozzborn) || matches(LEGACY_EXPERIENCE_ROUTES.ozzborn)) return previews.ozzborn
  if (matches(EXPERIENCE_ROUTES.sideRock)) return previews.sideRock
  return previews.catalog
}

// Static HTML variants let sharing crawlers read metadata without running React.
export function socialPreview(siteUrl: string): Plugin {
  const origin = new URL(siteUrl).origin

  function render(html: string, preview: Preview) {
    const absolute = (path: string) => new URL(path, origin).href
    const meta = (property: string, content: string) => `<meta property="${property}" content="${escape(content)}" />`
    const tags = [
      '<!-- social-preview:start -->',
      '<link rel="canonical" href="' + escape(absolute(preview.path)) + '" />',
      meta('og:type', 'website'),
      meta('og:locale', 'pt_BR'),
      meta('og:site_name', preview === previews.ozzborn ? 'Ozzborn' : 'Side Rock'),
      meta('og:title', preview.title),
      meta('og:description', preview.description),
      meta('og:url', absolute(preview.path)),
      meta('og:image', absolute(preview.image)),
      meta('og:image:type', 'image/jpeg'),
      meta('og:image:width', '1200'),
      meta('og:image:height', '630'),
      meta('og:image:alt', preview.alt),
      '<meta name="twitter:card" content="summary_large_image" />',
      `<meta name="twitter:title" content="${escape(preview.title)}" />`,
      `<meta name="twitter:description" content="${escape(preview.description)}" />`,
      `<meta name="twitter:image" content="${escape(absolute(preview.image))}" />`,
      `<meta name="twitter:image:alt" content="${escape(preview.alt)}" />`,
      '<!-- social-preview:end -->',
    ].join('\n    ')

    return html
      .replace(/<title>[^<]*<\/title>/, `<title>${escape(preview.title)}</title>`)
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(preview.description)}" />`)
      .replace(/<link rel="icon"[^>]*>/, `<link rel="icon" type="${preview.icon.endsWith('.png') ? 'image/png' : 'image/svg+xml'}" href="${preview.icon}" />`)
      .replace(/<!-- social-preview:start -->[\s\S]*?<!-- social-preview:end -->|<!-- social-preview -->/, tags)
  }

  return {
    name: 'social-preview',
    transformIndexHtml: {
      order: 'pre',
      handler(html, context) {
        return render(html, forPath(new URL(context.originalUrl ?? context.path, origin).pathname))
      },
    },
    generateBundle: {
      order: 'post',
      handler(_, bundle) {
        const index = bundle['index.html']
        if (!index || index.type !== 'asset') throw new Error('Missing index.html for social previews')
        for (const [name, preview] of Object.entries(previews)) {
          if (name === 'catalog') continue
          this.emitFile({ type: 'asset', fileName: `sharing/${name}.html`, source: render(String(index.source), preview) })
        }
      },
    },
  }
}
