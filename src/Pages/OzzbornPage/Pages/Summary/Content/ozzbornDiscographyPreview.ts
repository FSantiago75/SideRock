import { OZZBORN_REPERTOIRE_ERAS } from '../../Repertoire/ozzbornRepertoireContent'

export const OZZBORN_SUMMARY_CHAPTERS = [
  {
    id: 'origens',
    label: 'Origens',
    period: '1970–1972',
    title: 'Onde o peso começou.',
    copy: 'Riffs marcantes e atmosferas sombrias apresentam as raízes de Ozzy no Black Sabbath. É o ponto de partida para conhecer a identidade do tributo.',
    albums: [
      OZZBORN_REPERTOIRE_ERAS[0].albums[0],
      OZZBORN_REPERTOIRE_ERAS[0].albums[1],
    ],
  },
  {
    id: 'carreira-solo',
    label: 'Carreira solo',
    period: '1980–1988',
    title: 'Uma nova fase. Outra intensidade.',
    copy: 'A carreira solo traz guitarras em destaque, solos e refrões que marcaram os anos 80. A Ozzborn acompanha essas mudanças respeitando os timbres de cada fase.',
    albums: [
      OZZBORN_REPERTOIRE_ERAS[1].albums[0],
      OZZBORN_REPERTOIRE_ERAS[2].albums[0],
    ],
  },
  {
    id: 'novas-fases',
    label: 'Novas fases',
    period: '1991–2010',
    title: 'O som cresce em novas camadas.',
    copy: 'Peso, melodias e novas texturas ampliam a experiência. Os instrumentos e as bases sincronizadas trabalham juntos para preservar os detalhes dessas gravações.',
    albums: [
      OZZBORN_REPERTOIRE_ERAS[3].albums[0],
      OZZBORN_REPERTOIRE_ERAS[4].albums[2],
    ],
  },
] as const

export type OzzbornSummaryChapter = (typeof OZZBORN_SUMMARY_CHAPTERS)[number]
