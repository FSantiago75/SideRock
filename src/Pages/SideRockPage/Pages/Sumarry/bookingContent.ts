import promotionalVideo from '../../../../assets/promotionalVideo.mp4'
import promotionalVideo2 from '../../../../assets/promotionalVideo2.mp4'

const BOOKING_MESSAGE =
  'Olá, Vanessa! Gostaria de consultar disponibilidade e orçamento da Side Rock para um evento.'

export const SIDE_ROCK_BOOKING = {
  manager: 'Vanessa',
  location: 'Jundiaí / SP',
  company: 'Side Rock Ltda.',
  document: 'CNPJ 47.070.989/0001-73',
  whatsappUrl: `https://wa.me/5511971632992?text=${encodeURIComponent(BOOKING_MESSAGE)}`,
  instagramUrl: 'https://www.instagram.com/bandasiderock',
  videos: [
    {
      src: promotionalVideo,
      title: 'Pearl Jam — Even Flow',
      href: 'https://www.instagram.com/reel/DHl9VzfxAWq/',
    },
    {
      src: promotionalVideo2,
      title: "Don't Cry — Guns N' Roses",
      href: 'https://www.instagram.com/bandasiderock/reel/DKvypJ1tOzX/',
    },
  ],
  cards: [
    {
      eyebrow: 'Formato',
      title: 'Banda completa',
      copy: 'Quatro músicos em uma apresentação de rock internacional construída para ocupar o palco com presença e consistência.',
    },
    {
      eyebrow: 'Aplicações',
      title: 'Diferentes tipos de evento',
      copy: 'Casas de show, eventos particulares, festivais e programações culturais. Duração e condições são alinhadas para cada data.',
    },
    {
      eyebrow: 'Experiência',
      title: 'Mais de cinco anos em cena',
      copy: 'Uma formação consolidada, repertório reconhecível e uma entrega preparada para públicos de diferentes gerações.',
    },
    {
      eyebrow: 'Atendimento',
      title: 'Conversa direta com a manager',
      copy: 'Vanessa centraliza disponibilidade, orçamento e próximos passos para tornar a contratação simples desde o primeiro contato.',
    },
  ],
} as const
