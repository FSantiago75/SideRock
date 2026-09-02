import promotionalVideo from '../../../../assets/sideRock/promotionalVideo.web.mp4'
import promotionalVideoPoster from '../../../../assets/sideRock/promotionalVideo.webp'
import promotionalVideo2 from '../../../../assets/sideRock/promotionalVideo2.web.mp4'
import promotionalVideo2Poster from '../../../../assets/sideRock/promotionalVideo2.webp'

const BOOKING_MESSAGE =
  'Olá, Vanessa! Gostaria de consultar disponibilidade e orçamento do Ozzborn para um evento.'

export const OZZBORN_BOOKING = {
  manager: 'Vanessa',
  location: 'Jundiaí / SP',
  whatsappUrl: `https://wa.me/5511971632992?text=${encodeURIComponent(BOOKING_MESSAGE)}`,
  instagramUrl: 'https://www.instagram.com/ozzborntributo',
  intro: {
    eyebrow: 'Contratação',
    title: 'Do primeiro contato ao palco.',
    lead: 'Conte a data, a cidade e o perfil do evento. O Ozzborn retorna com disponibilidade, formato e necessidades de palco de forma objetiva.',
    primaryAction: 'Consultar data e orçamento',
    secondaryAction: 'Ver apresentações',
    managerLabel: 'Atendimento comercial',
  },
  closing: {
    copy: 'Quer levar a experiência Ozzborn ao seu evento?',
    action: 'Consultar data e orçamento',
  },
  videos: [
    {
      src: promotionalVideo,
      poster: promotionalVideoPoster,
      title: 'Ozzborn — apresentação ao vivo',
      href: 'https://www.instagram.com/ozzborntributo',
    },
    {
      src: promotionalVideo2,
      poster: promotionalVideo2Poster,
      title: 'Ozzborn — experiência de palco',
      href: 'https://www.instagram.com/ozzborntributo',
    },
  ],
  cards: [
    {
      eyebrow: 'Fidelidade',
      title: 'Detalhes que sustentam o tributo',
      copy: 'Timbres, arranjos, solos e atmosferas trabalhados para preservar a identidade musical de Ozzy e Black Sabbath.',
    },
    {
      eyebrow: 'Execução',
      title: 'Formação completa e sincronizada',
      copy: 'Quatro músicos em palco, com bases programadas e uma execução disciplinada para manter cada parte do show no lugar.',
    },
    {
      eyebrow: 'Aplicações',
      title: 'Da casa de rock ao festival',
      copy: 'Uma experiência preparada para casas de show, eventos particulares, festivais e programações públicas.',
    },
    {
      eyebrow: 'Atendimento',
      title: 'Contato direto com a manager',
      copy: 'Vanessa centraliza disponibilidade, orçamento e alinhamentos técnicos da data em um único canal.',
    },
  ],
} as const
