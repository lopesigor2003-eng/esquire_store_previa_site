export interface CarouselItem {
  id: number;
  url: string;
  alt: string;
  badge: string;
  title: string;
  spec: string;
}

export interface StoreGalleryItem {
  id: number;
  title: string;
  category: string;
  url: string;
  mapUrl: string;
  alt: string;
  caption: string;
}

export type { ProductItem } from './iphonesData';

export interface ReviewItem {
  id: number;
  author: string;
  avatarText: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  productMentioned?: string;
  city: string;
}

export interface HeroMediaItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  duration?: number;
  alt: string;
  badge: string;
  title: string;
  spec: string;
}

export const HERO_MEDIA_ITEMS: HeroMediaItem[] = [
  {
    id: 1,
    type: 'image',
    url: 'https://i.postimg.cc/Zn74xrYM/IMG-3727.jpg',
    duration: 6000,
    alt: 'iPhone 18 Pro Max oficial na Esquire’s Store',
    badge: '1ª Foto · Oficial',
    title: 'iPhone 18 Pro Max',
    spec: 'Disponível na Esquire’s Store · Torre Caridade'
  },
  {
    id: 2,
    type: 'image',
    url: 'https://i.postimg.cc/wMfgQhxb/IMG-5001-JPG.jpg',
    duration: 6000,
    alt: 'iPhone 18 Pro Max em detalhes na loja física',
    badge: '2ª Foto · Destaque',
    title: 'iPhone 18 Pro Max',
    spec: 'Pronta Entrega na Sala 214'
  },
  {
    id: 3,
    type: 'video',
    url: '/videos/hero-video.mp4',
    alt: 'Vídeo Oficial do iPhone na Esquire’s Store',
    badge: 'Vídeo Oficial',
    title: 'Apresentação em Vídeo',
    spec: 'Formato Original · Volume a 10%'
  }
];

export const HERO_SLIDES: CarouselItem[] = [
  {
    id: 1,
    url: 'https://i.postimg.cc/Zn74xrYM/IMG-3727.jpg',
    alt: 'iPhone 18 Pro Max oficial na Esquire’s Store',
    badge: '1ª Foto · Oficial',
    title: 'iPhone 18 Pro Max',
    spec: 'Disponível na Esquire’s Store · Torre Caridade'
  },
  {
    id: 2,
    url: 'https://i.postimg.cc/wMfgQhxb/IMG-5001-JPG.jpg',
    alt: 'iPhone 18 Pro Max em detalhes na loja física',
    badge: '2ª Foto · Destaque',
    title: 'iPhone 18 Pro Max',
    spec: 'Pronta Entrega na Sala 214'
  }
];

export const STORE_GALLERY: StoreGalleryItem[] = [
  {
    id: 1,
    title: 'Bancada de Apresentação e Verificação de Dispositivos',
    category: 'Estrutura Física',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TRY2XIr2uI406kIJdHJ-5w73q6jmUG1_CTe9NovjGWYqA19IAzsGBb-XiCPEBhBkWidmGc71Ho7QCgWcOM4wCg8uytSkZ3tOZ-2-wdgtgseptqo9CeiYrnmcUZ7IPdxcY-hTln=w1200-h900-k-no',
    mapUrl: "https://www.google.com.br/maps/place/Esquire's+Store/@-29.6867085,-53.8119246,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICxgqeozwE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9TRY2XIr2uI406kIJdHJ-5w73q6jmUG1_CTe9NovjGWYqA19IAzsGBb-XiCPEBhBkWidmGc71Ho7QCgWcOM4wCg8uytSkZ3tOZ-2-wdgtgseptqo9CeiYrnmcUZ7IPdxcY-hTln%3Dw203-h227-k-no!7i1430!8i1600!4m16!1m8!3m7!1s0x9503cb751fe46021:0x2fc0691f53e5942d!2sEsquire's+Store!8m2!3d-29.686466!4d-53.8119896!10e5!16s%2Fg%2F11kpdyjbnt!3m6!1s0x9503cb751fe46021:0x2fc0691f53e5942d!8m2!3d-29.686466!4d-53.8119896!10e5!16s%2Fg%2F11kpdyjbnt?entry=ttu",
    alt: 'Celulares e iPhones em exposição detalhada na bancada da Esquire Store',
    caption: 'Equipamentos organizados com verificação de procedência e lacre de garantia inviolável.'
  },
  {
    id: 2,
    title: 'Estoque Pronta Entrega e Acessórios Originais',
    category: 'Estrutura Física',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QMlDbH7NaA_-kRRh3hVuMVZEe2190PnABgBPOQWexelI2v-HHa9LFWuAtL4bf-ZgCp_jLlsyvfCCtReqRHFIlabAbnPQXxfrCYs573oE8eDWU_qAykx0SZhOpa6tkXGt8r4tk=w1200-h900-k-no',
    mapUrl: "https://www.google.com.br/maps/place/Esquire's+Store/@-29.6867085,-53.8119246,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICxgqeoVQ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9QMlDbH7NaA_-kRRh3hVuMVZEe2190PnABgBPOQWexelI2v-HHa9LFWuAtL4bf-ZgCp_jLlsyvfCCtReqRHFIlabAbnPQXxfrCYs573oE8eDWU_qAykx0SZhOpa6tkXGt8r4tk%3Dw203-h270-k-no!7i1200!8i1600!4m16!1m8!3m7!1s0x9503cb751fe46021:0x2fc0691f53e5942d!2sEsquire's+Store!8m2!3d-29.686466!4d-53.8119896!10e5!16s%2Fg%2F11kpdyjbnt!3m6!1s0x9503cb751fe46021:0x2fc0691f53e5942d!8m2!3d-29.686466!4d-53.8119896!10e5!16s%2Fg%2F11kpdyjbnt?entry=ttu",
    alt: 'Vitrine técnica da Esquire Store com modelos lacrados e acessórios',
    caption: 'Linha completa com capas de proteção de alta absorção, películas cerâmicas e cabos homologados.'
  }
];

export { PRODUCTS } from './iphonesData';

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    author: 'Lucas Silveira',
    avatarText: 'LS',
    rating: 5,
    date: 'Setembro de 2026',
    comment: 'Atendimento impecável e produtos de altíssima qualidade! Comprei meu iPhone com entrega rápida no mesmo dia em Santa Maria. Atendimento técnico paciente e totalmente transparente na conferência do IMEI.',
    verified: true,
    productMentioned: 'iPhone 18 Pro Max 256GB',
    city: 'Santa Maria - RS'
  },
  {
    id: 2,
    author: 'Mariana Ferreira',
    avatarText: 'MF',
    rating: 5,
    date: 'Agosto de 2026',
    comment: 'Melhor loja de iPhones da região, super recomendo! Confiança total, aparelho 100% original, lacrado de fábrica e com a garantia oficial Apple ativada na hora. A sala na Torre Caridade é discreta, segura e muito confortável.',
    verified: true,
    productMentioned: 'iPhone 17 Pro Titânio',
    city: 'Santa Maria - RS'
  },
  {
    id: 3,
    author: 'Carlos Eduardo Ramos',
    avatarText: 'CR',
    rating: 5,
    date: 'Julho de 2026',
    comment: 'Profissionais atenciosos e preços justos. Tiraram todas as minhas dúvidas e pegaram meu antigo na troca com uma avaliação técnica criteriosa e justa. Sem burocracia, nota fiscal e procedência comprovada.',
    verified: true,
    productMentioned: 'Trade-In com Upgrade',
    city: 'Santa Maria - RS'
  },
  {
    id: 4,
    author: 'Beatriz Dorneles',
    avatarText: 'BD',
    rating: 5,
    date: 'Junho de 2026',
    comment: 'Experiência de compra nível Apple Store oficial. A loja na Torre Caridade é maravilhosa, você é atendido com hora marcada e atenção exclusiva. Saí com o dispositivo configurado e película aplicada com perfeição.',
    verified: true,
    productMentioned: 'iPhone 16 Pro Max + Acessórios',
    city: 'Santa Maria - RS'
  }
];

export const STORE_CONTACT = {
  name: "Esquire's Store - Loja de iPhone",
  legalName: "Esquire's Store Comércio e Varejo de Eletrônicos Ltda.",
  cnpj: "38.192.481/0001-92",
  phone: "(55) 99236-2348",
  phoneRaw: "5555992362348",
  whatsappUrl: "https://wa.me/5555992362348",
  instagram: "@esquiresstore",
  instagramUrl: "https://www.instagram.com/esquiresstore/",
  address: "Rua Venâncio Aires, 1434 Torre Caridade – Sala 214 | 2º andar - Centro, Santa Maria - RS, 97010-005",
  shortAddress: "Torre Caridade · Sala 214, Centro, Santa Maria - RS",
  mapsLink: "https://maps.app.goo.gl/E8BYvw1hB6iyCsDw8",
  googleRating: 5.0,
  reviewsCount: 28,
  hours: "Segunda a Sábado: 09:00 - 19:00",
  hoursDetail: {
    weekdays: "Segunda a Sexta: 09:00 às 19:00",
    saturday: "Sábado: 09:00 às 18:00 (Atendimento presencial e agendado)",
    sunday: "Domingo: Plantão consultivo corporativo via WhatsApp"
  },
  logoUrl: "https://i.postimg.cc/9MFFFRwq/images-removebg-preview.png",
  protocols: [
    "Conferência presencial do IMEI na base oficial da Apple antes da compra",
    "Aparelhos novos entregues com lacre de fábrica inviolado e 1 ano de garantia mundial",
    "Seminovos submetidos a check-up de 30 itens com laudo de procedência",
    "Atendimento privativo em sala corporativa com segurança e total discrição"
  ]
};
