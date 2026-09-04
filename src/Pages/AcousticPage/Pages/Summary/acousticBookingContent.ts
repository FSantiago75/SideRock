import promotionalVideo from '../../../../assets/sideRock/promotionalVideo.web.mp4'
import promotionalVideoPoster from '../../../../assets/sideRock/promotionalVideo.webp'
import promotionalVideo2 from '../../../../assets/sideRock/promotionalVideo2.web.mp4'
import promotionalVideo2Poster from '../../../../assets/sideRock/promotionalVideo2.webp'
import { getAcousticBookingUrl, type AcousticFormatId } from './acousticSummaryContent'

export function getAcousticBooking(format: AcousticFormatId) {
  return {
    manager: 'Vanessa',
    location: 'Jundiaí / SP',
    whatsappUrl: getAcousticBookingUrl(format),
    instagramUrl: 'https://www.instagram.com/bandasiderock',
    intro: {
      eyebrow: 'Contratação',
      title: 'Do primeiro contato ao evento.',
      lead: `Conte a data, a cidade e o perfil do evento. A Side Rock retorna com disponibilidade, estrutura e próximos passos para o formato ${format === 'duo' ? 'Duo' : 'Trio'}.`,
      primaryAction: 'Consultar data e orçamento',
      secondaryAction: 'Ver apresentações',
      managerLabel: 'Atendimento comercial',
    },
    closing: {
      copy: 'Quer levar o Side Rock Acústico ao seu evento?',
      action: 'Consultar data e orçamento',
    },
    videos: [
      { src: promotionalVideo, poster: promotionalVideoPoster, title: 'Side Rock ao vivo', href: 'https://www.instagram.com/reel/DHl9VzfxAWq/' },
      { src: promotionalVideo2, poster: promotionalVideo2Poster, title: 'Side Rock ao vivo', href: 'https://www.instagram.com/bandasiderock/reel/DKvypJ1tOzX/' },
    ],
    cards: [
      { eyebrow: 'Formato', title: format === 'duo' ? 'Proximidade em primeiro plano' : 'Mais pulsação no ambiente', copy: format === 'duo' ? 'Voz e violão para ocasiões que pedem música presente sem ocupar o evento inteiro.' : 'A bateria acrescenta energia e impacto sem perder a proposta compacta.' },
      { eyebrow: 'Aplicações', title: 'Do bar à celebração', copy: 'Bares, casamentos, aniversários, eventos corporativos e festas particulares.' },
      { eyebrow: 'Experiência', title: 'Popular e reconhecível', copy: 'Músicas nacionais e internacionais para diferentes públicos cantarem e aproveitarem juntos.' },
      { eyebrow: 'Atendimento', title: 'Contato direto com a manager', copy: 'Vanessa centraliza disponibilidade, orçamento e alinhamentos da data em um único canal.' },
    ],
  } as const
}
