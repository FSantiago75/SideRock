import promotionalVideo from '../../../../assets/sideRock/media/booking/promotionalVideo.web.mp4'
import promotionalVideoPoster from '../../../../assets/sideRock/media/booking/promotionalVideo.webp'
import promotionalVideo2 from '../../../../assets/sideRock/media/booking/promotionalVideo2.web.mp4'
import promotionalVideo2Poster from '../../../../assets/sideRock/media/booking/promotionalVideo2.webp'

const BOOKING_MESSAGE =
  'Olá, Vanessa! Gostaria de consultar a disponibilidade da Side Rock para um evento. Posso enviar a data, a cidade e mais informações?'

export const SIDE_ROCK_BOOKING = {
  manager: 'Vanessa',
  location: 'Jundiaí / SP',
  whatsappUrl: `https://wa.me/5511971632992?text=${encodeURIComponent(BOOKING_MESSAGE)}`,
  instagramUrl: 'https://www.instagram.com/bandasiderock',
  intro: {
    eyebrow: 'Contratação',
    title: 'O show certo para fazer o evento acontecer.',
    lead: 'Conte para a gente a data, a cidade e o perfil do evento. Você recebe disponibilidade, formato e orçamento diretamente com quem cuida da agenda da Side Rock.',
    primaryAction: 'Consultar disponibilidade',
    secondaryAction: 'Assistir às apresentações',
    managerLabel: 'Atendimento direto',
  },
  closing: {
    copy: 'Quer essa energia no seu evento?',
    action: 'Falar com Vanessa',
  },
  videos: [
    {
      src: promotionalVideo,
      poster: promotionalVideoPoster,
      title: 'Pearl Jam — Even Flow',
      href: 'https://www.instagram.com/reel/DHl9VzfxAWq/',
    },
    {
      src: promotionalVideo2,
      poster: promotionalVideo2Poster,
      title: "Don't Cry — Guns N' Roses",
      href: 'https://www.instagram.com/bandasiderock/reel/DKvypJ1tOzX/',
    },
  ],
  cards: [
    {
      eyebrow: 'Energia',
      title: 'Uma banda que ocupa o palco',
      copy: 'Quatro músicos, presença de palco e uma apresentação construída para manter o público conectado do começo ao fim.',
    },
    {
      eyebrow: 'Versatilidade',
      title: 'Do clube ao grande evento',
      copy: 'Uma experiência preparada para casas de show, eventos particulares, festivais e programações culturais.',
    },
    {
      eyebrow: 'Repertório',
      title: 'Clássicos escolhidos a dedo',
      copy: 'Músicas que o público reconhece, canta e vive junto, interpretadas com respeito aos arranjos, timbres e momentos que fizeram cada clássico permanecer.',
    },
    {
      eyebrow: 'Atendimento',
      title: 'Contratação direta e sem complicação',
      copy: 'Vanessa acompanha disponibilidade, orçamento e alinhamentos da apresentação em um único canal.',
    },
  ],
} as const
