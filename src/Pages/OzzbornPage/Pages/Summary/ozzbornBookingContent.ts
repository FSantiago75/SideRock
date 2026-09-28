import promotionalVideo from '../../../../assets/sideRock/media/booking/promotionalVideo.web.mp4'
import promotionalVideoPoster from '../../../../assets/sideRock/media/booking/promotionalVideo.webp'
import promotionalVideo2 from '../../../../assets/sideRock/media/booking/promotionalVideo2.web.mp4'
import promotionalVideo2Poster from '../../../../assets/sideRock/media/booking/promotionalVideo2.webp'

const BOOKING_MESSAGE =
  'Olá, Vanessa! Gostaria de consultar a disponibilidade da Ozzborn para um evento. Posso enviar a data, a cidade e mais informações?'

export const OZZBORN_BOOKING = {
  manager: 'Vanessa',
  location: 'Jundiaí / SP',
  whatsappUrl: `https://wa.me/5511971632992?text=${encodeURIComponent(BOOKING_MESSAGE)}`,
  instagramUrl: 'https://www.instagram.com/ozzborntributo',
  intro: {
    eyebrow: 'Contratação',
    title: 'Do primeiro contato ao palco.',
    lead: 'Conte para a gente a data, a cidade e o perfil do evento. Você recebe disponibilidade, formato, orçamento e as informações necessárias para levar a Ozzborn ao seu palco.',
    primaryAction: 'Consultar disponibilidade',
    secondaryAction: 'Assistir às apresentações',
    managerLabel: 'Atendimento direto',
  },
  closing: {
    copy: 'Quer levar a experiência Ozzborn ao seu evento?',
    action: 'Falar com Vanessa',
  },
  videos: [
    {
      src: promotionalVideo,
      poster: promotionalVideoPoster,
      title: 'Ozzborn ao vivo',
      href: 'https://www.instagram.com/ozzborntributo',
    },
    {
      src: promotionalVideo2,
      poster: promotionalVideo2Poster,
      title: 'A experiência Ozzborn no palco',
      href: 'https://www.instagram.com/ozzborntributo',
    },
  ],
  cards: [
    {
      eyebrow: 'Fidelidade',
      title: 'Detalhes que sustentam o tributo',
      copy: 'Timbres, arranjos, solos e atmosferas trabalhados para preservar a identidade musical de Ozzy Osbourne e Black Sabbath.',
    },
    {
      eyebrow: 'Execução',
      title: 'Formação completa e sincronizada',
      copy: 'Quatro músicos no palco, com bases e elementos sincronizados que completam os arranjos e mantêm cada parte da apresentação no lugar.',
    },
    {
      eyebrow: 'Experiência',
      title: 'Duas fases, uma história',
      copy: 'Uma apresentação que percorre as raízes com o Black Sabbath e os grandes momentos da carreira solo de Ozzy Osbourne.',
    },
    {
      eyebrow: 'Aplicações',
      title: 'Da casa de rock ao festival',
      copy: 'Uma experiência de nicho preparada para casas de show, festivais, eventos temáticos e programações culturais.',
    },
  ],
} as const
