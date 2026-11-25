import { OZZBORN_REPERTOIRE_ERAS } from '../../Repertoire/ozzbornRepertoireContent'

export const OZZBORN_SUMMARY_CHAPTERS = [
  {
    id: 'origens',
    label: 'Origens',
    period: '1970–1972',
    title: 'Onde o peso começou',
    copy: 'O repertório inclui o começo de Ozzy no Black Sabbath, com os riffs dos primeiros discos da banda.',
    albums: [
      OZZBORN_REPERTOIRE_ERAS[0].albums[0],
      OZZBORN_REPERTOIRE_ERAS[0].albums[1],
    ],
  },
  {
    id: 'carreira-solo',
    label: 'Carreira solo',
    period: '1980–1988',
    title: 'O começo da carreira solo',
    copy: 'A seleção passa pelo início da carreira solo e pelos discos dos anos 80. As guitarras e os arranjos mudam de uma fase para outra.',
    albums: [
      OZZBORN_REPERTOIRE_ERAS[1].albums[0],
      OZZBORN_REPERTOIRE_ERAS[2].albums[0],
    ],
  },
  {
    id: 'novas-fases',
    label: 'Novas fases',
    period: '1991–2010',
    title: 'Dos anos 90 aos anos 2000',
    copy: 'Os discos mais recentes também entram nas referências do tributo. Bases sincronizadas acrescentam os efeitos e sons de apoio dessas gravações.',
    albums: [
      OZZBORN_REPERTOIRE_ERAS[3].albums[0],
      OZZBORN_REPERTOIRE_ERAS[4].albums[2],
    ],
  },
] as const

export type OzzbornSummaryChapter = (typeof OZZBORN_SUMMARY_CHAPTERS)[number]
