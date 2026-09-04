export type AcousticFormatId = 'duo' | 'trio'

export const ACOUSTIC_FORMAT_ORDER: readonly AcousticFormatId[] = ['duo', 'trio']

export const ACOUSTIC_FORMATS = {
  duo: {
    label: 'Duo',
    cue: 'Mais ambiente',
    formation: 'Marcelo no vocal · Victor no violão',
    title: 'A Side Rock mais perto do público.',
    lead: 'Um show popular, descontraído e reconhecível, pensado para acompanhar o ambiente e assumir a atenção nos momentos certos.',
    statement: 'Mais ambiente que energia.',
    detail: 'Voz e violão em uma formação íntima, com Victor criando a condução e a percussão nas próprias notas.',
    facts: [
      { value: '2', label: 'músicos' },
      { value: '3h', label: 'de apresentação' },
      { value: 'Compacto', label: 'na estrutura' },
    ],
  },
  trio: {
    label: 'Trio',
    cue: 'Mais energia',
    formation: 'Marcelo · Victor · Toddynho na bateria',
    title: 'Mais pulsação. Mais impacto no palco.',
    lead: 'A proximidade do acústico com uma base rítmica mais presente para festas e ocasiões que pedem movimento.',
    statement: 'Mais energia que som ambiente.',
    detail: 'A bateria libera Victor para explorar o violão e aproxima a dinâmica do impacto da Side Rock completa.',
    facts: [
      { value: '3', label: 'músicos' },
      { value: '3h', label: 'de apresentação' },
      { value: 'Dinâmico', label: 'na entrega' },
    ],
  },
} as const

export const ACOUSTIC_SUMMARY = {
  story: {
    eyebrow: 'A mesma raiz. Outra proximidade.',
    title: 'Menor na estrutura. Side Rock na entrega.',
    paragraphs: [
      'O Side Rock Acústico leva a qualidade da banda completa para espaços que pedem proximidade, repertório popular e uma produção mais acessível.',
      'É música para conversar, celebrar e cantar junto — com dinâmica suficiente para surpreender quando o show pede mais atenção.',
    ],
  },
  occasions: ['Bares e restaurantes', 'Casamentos', 'Aniversários', 'Eventos corporativos', 'Festas particulares'],
  booking: {
    eyebrow: 'Duo ou Trio para o seu evento',
    title: 'A gente ajuda você a escolher o clima certo.',
    body: 'Conte a data, a cidade e como será o evento. A Vanessa indica a formação mais adequada e alinha estrutura, duração e próximos passos.',
  },
} as const

const WHATSAPP_NUMBER = '5511971632992'

export function getAcousticBookingUrl(format: AcousticFormatId): string {
  const message = `Olá, Vanessa! Gostaria de informações sobre o Side Rock Acústico.

Formato de interesse: ${ACOUSTIC_FORMATS[format].label}
Data do evento:
Cidade:
Tipo de evento:`

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
