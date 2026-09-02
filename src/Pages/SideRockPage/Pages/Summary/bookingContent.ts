import promotionalVideo from '../../../../assets/sideRock/promotionalVideo.web.mp4'
import promotionalVideoPoster from '../../../../assets/sideRock/promotionalVideo.webp'
import promotionalVideo2 from '../../../../assets/sideRock/promotionalVideo2.web.mp4'
import promotionalVideo2Poster from '../../../../assets/sideRock/promotionalVideo2.webp'

const BOOKING_MESSAGE =
  'Olá, Vanessa! Gostaria de consultar disponibilidade e orçamento da Side Rock para um evento.'

export const SIDE_ROCK_BOOKING = {
  manager: 'Vanessa',
  location: 'Jundiaí / SP',
  whatsappUrl: `https://wa.me/5511971632992?text=${encodeURIComponent(BOOKING_MESSAGE)}`,
  instagramUrl: 'https://www.instagram.com/bandasiderock',
  intro: {
    eyebrow: 'Contratação',
    title: 'Do primeiro contato ao palco.',
    lead: 'Conte a data, a cidade e o perfil do evento. A Side Rock retorna com disponibilidade, formato e próximos passos de forma objetiva.',
    primaryAction: 'Consultar data e orçamento',
    secondaryAction: 'Ver apresentações',
    managerLabel: 'Atendimento comercial',
  },
  closing: {
    copy: 'Quer levar a Side Rock ao seu evento?',
    action: 'Consultar data e orçamento',
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
      eyebrow: 'Formato',
      title: 'Presença de palco',
      copy: 'Uma apresentação de rock internacional construída para ocupar o palco com presença, execução consistente e leitura clara do repertório.',
    },
    {
      eyebrow: 'Aplicações',
      title: 'Do clube ao festival',
      copy: 'Casas de show, eventos particulares, festivais e programações culturais. Duração e condições são alinhadas para cada data.',
    },
    {
      eyebrow: 'Experiência',
      title: 'Repertório reconhecível',
      copy: 'Classic rock, hard rock e heavy metal para públicos de diferentes gerações, com uma entrega preparada para o palco.',
    },
    {
      eyebrow: 'Atendimento',
      title: 'Contato direto com a manager',
      copy: 'Vanessa centraliza disponibilidade, orçamento e alinhamentos da data em um único canal.',
    },
  ],
} as const
