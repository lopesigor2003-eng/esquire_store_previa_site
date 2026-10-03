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

export interface ProductItem {
  id: string;
  name: string;
  generation: string;
  tag: string;
  highlight?: boolean;
  description: string;
  storageOptions: string[];
  colors: { name: string; hex: string }[];
  condition: string;
  warranty: string;
  delivery: string;
  technicalSpecs: {
    chip: string;
    screen: string;
    camera: string;
    security: string;
  };
}

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

export const PRODUCTS: ProductItem[] = [
  {
    id: 'iphone-18-pro-max',
    name: 'iPhone 18 Pro Max',
    generation: 'Linha 18',
    tag: 'Lançamento Oficial',
    highlight: true,
    description: 'O mais potente e luxuoso da Apple. Disponível nas cores icônicas Burgundy, Glacier e Black Titanium.',
    storageOptions: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Burgundy', hex: '#631024' },
      { name: 'Glacier', hex: '#A8D5E5' },
      { name: 'Black Titanium', hex: '#1E1E1E' }
    ],
    condition: 'Novo Lacrado · Serial Oficial',
    warranty: 'Garantia Mundial Apple de 12 Meses',
    delivery: 'Pronta entrega física em Santa Maria',
    technicalSpecs: {
      chip: 'Processador Apple A Pro Neural 32-core',
      screen: 'Super Retina XDR OLED 6.9" ProMotion 120Hz',
      camera: 'Sistema Pro Triplo 48MP com Zoom Óptico Telefoto',
      security: 'Face ID biométrico e Criptografia em Hardware'
    }
  },
  {
    id: 'iphone-18-pro',
    name: 'iPhone 18 Pro',
    generation: 'Linha 18',
    tag: 'Série Pro Lançamento',
    description: 'Chassi compacto em titânio aeroespacial, autonomia prolongada e máxima velocidade de transferência de dados.',
    storageOptions: ['128GB', '256GB', '512GB', '1TB'],
    colors: [
      { name: 'Burgundy', hex: '#631024' },
      { name: 'Glacier', hex: '#A8D5E5' },
      { name: 'Black Titanium', hex: '#1E1E1E' },
      { name: 'Natural Titanium', hex: '#9E9A93' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: 'Garantia Oficial Apple de 12 Meses',
    delivery: 'Pronta entrega na Sala 214',
    technicalSpecs: {
      chip: 'Processador Apple A Pro de última geração',
      screen: 'Super Retina XDR OLED 6.3" Always-On 120Hz',
      camera: 'Câmera Tripla 48MP com Gravação ProRes 4K',
      security: 'Face ID com proteção biométrica avançada'
    }
  },
  {
    id: 'iphone-18',
    name: 'iPhone 18',
    generation: 'Linha 18',
    tag: 'Nova Geração',
    description: 'Novo design refinado em alumínio aeroespacial, recursos inteligentes Apple e Dynamic Island.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Meia-Noite', hex: '#1C2430' },
      { name: 'Estelar', hex: '#F0EAE1' },
      { name: 'Azul', hex: '#87A9C7' },
      { name: 'Rosa Suave', hex: '#E8B4B8' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: 'Garantia Oficial Apple de 12 Meses',
    delivery: 'Disponível para retirada ou entrega imediata',
    technicalSpecs: {
      chip: 'Apple Bionic com arquitetura de 3nm',
      screen: 'Super Retina XDR OLED com cores vibrantes',
      camera: 'Dupla lente 48MP Fusion com fotos em altíssima resolução',
      security: 'Face ID integrado e Detecção de Acidentes'
    }
  },
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    generation: 'Linha 17',
    tag: 'Alta Performance',
    description: 'Chassi em titânio de grau aeroespacial, câmera teleobjetiva avançada e portas USB-C com velocidade de estúdio.',
    storageOptions: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Titânio Natural', hex: '#9E9A93' },
      { name: 'Titânio Preto', hex: '#2A2928' },
      { name: 'Titânio Branco', hex: '#E3E2DD' }
    ],
    condition: 'Novo Lacrado ou Seminovos Selecionados',
    warranty: '12 Meses de Garantia Oficial Apple',
    delivery: 'Disponível na Sala 214 - Torre Caridade',
    technicalSpecs: {
      chip: 'Apple A-Series Bionic Pro com litografia ultra refinada',
      screen: 'OLED Always-On com Dynamic Island multitarefas',
      camera: 'Sensor Quad-Pixel 48MP com gravação ProRes em 4K',
      security: 'Criptografia em hardware com Secure Enclave'
    }
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    generation: 'Linha 17',
    tag: 'Série Pro',
    description: 'Poder computacional Pro em formato ergonômico com moldura de titânio escovado e display ProMotion.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Titânio Natural', hex: '#9E9A93' },
      { name: 'Titânio Preto', hex: '#2A2928' },
      { name: 'Titânio Branco', hex: '#E3E2DD' }
    ],
    condition: 'Novo Lacrado com Nota Fiscal',
    warranty: '12 Meses de Garantia Oficial Apple',
    delivery: 'Pronta entrega física em Santa Maria',
    technicalSpecs: {
      chip: 'Apple Bionic Pro com GPU gráfica de alta potência',
      screen: 'Super Retina XDR OLED 6.1" ProMotion 120Hz',
      camera: 'Câmera tripla de precisão com modo Retrato avançado',
      security: 'Face ID biométrico de reconhecimento instantâneo'
    }
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    generation: 'Linha 17',
    tag: 'Design Moderno',
    description: 'Equipamento equilibrado com vidro traseiro colorido por infusão, conector USB-C universal e ótima autonomia.',
    storageOptions: ['128GB', '256GB'],
    colors: [
      { name: 'Preto', hex: '#232426' },
      { name: 'Azul Claro', hex: '#9BB8D0' },
      { name: 'Verde Menta', hex: '#A8C9B9' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: 'Garantia Oficial Apple de 12 Meses',
    delivery: 'Pronta entrega imediata',
    technicalSpecs: {
      chip: 'Apple Bionic de alto rendimento',
      screen: 'Display Super Retina XDR com HDR10',
      camera: 'Câmera de 48MP com teleobjetiva 2x integrada',
      security: 'Face ID e proteção IP68 contra água e poeira'
    }
  },
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    generation: 'Linha 16',
    tag: 'Consagrado',
    description: 'Design refinado com botão capacitivo de controle de câmera, teleobjetiva periscópica 5x e maior tela da categoria.',
    storageOptions: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Titânio Deserto', hex: '#B89B7B' },
      { name: 'Titânio Preto', hex: '#222222' },
      { name: 'Titânio Natural', hex: '#9E9A93' }
    ],
    condition: 'Novo Lacrado ou Seminovos com Laudo Pericial',
    warranty: 'Garantia com Documentação Completa',
    delivery: 'Pronta entrega imediata',
    technicalSpecs: {
      chip: 'Apple A18 Pro com GPU de 6 núcleos e Ray Tracing',
      screen: 'Super Retina XDR 6.9" com bordas ultrafinas',
      camera: 'Tripla lente 48MP Fusion com teleobjetiva 5x óptica',
      security: 'Face ID e botão de controle tátil de captura'
    }
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    generation: 'Linha 16',
    tag: 'Controle de Câmera',
    description: 'Acabamento premium em titânio grau 5, gravação em 4K a 120 fps com Dolby Vision e microfones com qualidade de estúdio.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Titânio Deserto', hex: '#B89B7B' },
      { name: 'Titânio Preto', hex: '#222222' },
      { name: 'Titânio Natural', hex: '#9E9A93' }
    ],
    condition: 'Novo Lacrado ou Seminovos Inspecionados',
    warranty: 'Garantia Oficial Apple de 12 Meses',
    delivery: 'Disponível na Torre Caridade',
    technicalSpecs: {
      chip: 'Apple A18 Pro com aceleradores neurais dedicados',
      screen: 'Super Retina XDR 6.3" ProMotion 120Hz Always-On',
      camera: 'Câmera Fusion 48MP + Ultra-angular 48MP macro',
      security: 'Biometria Face ID e estrutura interna de grafite térmico'
    }
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16 & 16 Plus',
    generation: 'Linha 16',
    tag: 'Cores Saturadas',
    description: 'Novo arranjo vertical de câmeras para vídeos espaciais, botão de Ação configurável e suporte integral ao ecossistema Apple.',
    storageOptions: ['128GB', '256GB'],
    colors: [
      { name: 'Ultramarino', hex: '#254E82' },
      { name: 'Azul-Petróleo', hex: '#2A666A' },
      { name: 'Branco', hex: '#F3F4F6' },
      { name: 'Preto', hex: '#1C1D1F' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: 'Garantia Oficial Apple de 12 Meses',
    delivery: 'Pronta entrega física',
    technicalSpecs: {
      chip: 'Apple A18 de 3 nanômetros com salto de desempenho',
      screen: 'Super Retina XDR com Ceramic Shield de 2ª geração',
      camera: 'Câmera Fusion de 48MP com fotos de 24MP super nítidas',
      security: 'Face ID biométrico e certificação IP68'
    }
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    generation: 'Linha 15',
    tag: 'Pioneiro Titânio',
    description: 'Primeiro iPhone em titânio com porta USB-C 3 de alta velocidade, lente teleobjetiva 5x e processador A17 Pro.',
    storageOptions: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Titânio Natural', hex: '#9E9A93' },
      { name: 'Titânio Azul', hex: '#2C3A4E' },
      { name: 'Titânio Preto', hex: '#242526' }
    ],
    condition: 'Seminovos Impecáveis ou Novos de Estoque',
    warranty: 'Garantia de Loja com Laudo de 30 Itens',
    delivery: 'Retirada presencial imediata',
    technicalSpecs: {
      chip: 'Apple A17 Pro com Ray Tracing acelerado por hardware',
      screen: 'Super Retina XDR 6.7" OLED ProMotion 120Hz',
      camera: 'Câmera principal 48MP com zoom ótico 5x tipo prisma',
      security: 'Face ID e botão de Ação personalizável'
    }
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    generation: 'Linha 15',
    tag: 'Titânio Compacto',
    description: 'Chassi leve em titânio escovado, ergonomia perfeita e câmera de padrão profissional em 6.1 polegadas.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Titânio Natural', hex: '#9E9A93' },
      { name: 'Titânio Preto', hex: '#242526' },
      { name: 'Titânio Branco', hex: '#ECECEB' }
    ],
    condition: 'Seminovo Selecionado com Bateria Excelente',
    warranty: 'Garantia com Documentação Completa',
    delivery: 'Pronta entrega física',
    technicalSpecs: {
      chip: 'Processador Apple A17 Pro 6 núcleos',
      screen: 'OLED Always-On ProMotion 120Hz',
      camera: 'Tripla lente 48MP com revestimento antirreflexo',
      security: 'Face ID e porta USB-C com velocidade de até 10 Gb/s'
    }
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15 & 15 Plus',
    generation: 'Linha 15',
    tag: 'Dynamic Island & USB-C',
    description: 'Entrada USB-C, Dynamic Island interativa e sensor fotográfico de 48MP com acabamento fosco acetinado.',
    storageOptions: ['128GB', '256GB'],
    colors: [
      { name: 'Preto', hex: '#232426' },
      { name: 'Azul', hex: '#95B3C7' },
      { name: 'Verde', hex: '#98BAA8' },
      { name: 'Rosa', hex: '#DC9DA8' }
    ],
    condition: 'Novo Lacrado ou Seminovos Periciados',
    warranty: 'Garantia com Nota e Suporte Técnico',
    delivery: 'Pronta entrega em Santa Maria',
    technicalSpecs: {
      chip: 'Apple A16 Bionic testado e aprovado',
      screen: 'Super Retina XDR OLED com pico de 2.000 nits ao ar livre',
      camera: 'Câmera principal de 48MP com teleobjetiva 2x com qualidade ótica',
      security: 'Face ID e carregamento via cabo USB-C universal'
    }
  },
  {
    id: 'iphone-14-series',
    name: 'iPhone 14 & 14 Pro Max',
    generation: 'Linha 14 & Anteriores',
    tag: 'Excelente Custo-Benefício',
    description: 'Equipamentos robustos com display OLED Super Retina, modo Cinema em 4K e excelente saúde de bateria.',
    storageOptions: ['128GB', '256GB'],
    colors: [
      { name: 'Meia-Noite', hex: '#1C2430' },
      { name: 'Estelar', hex: '#F0EAE1' },
      { name: 'Roxo Profundo', hex: '#4B3F56' }
    ],
    condition: 'Seminovos com Laudo Pericial de 30 Itens',
    warranty: 'Garantia de Loja com Nota Fiscal',
    delivery: 'Disponível na Torre Caridade Sala 214',
    technicalSpecs: {
      chip: 'Apple A15 / A16 Bionic com CPU fluida',
      screen: 'Super Retina XDR OLED com Ceramic Shield',
      camera: 'Sistema de câmera dupla avançada com Modo Noturno',
      security: 'Face ID e detecção de acidentes veiculares'
    }
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    generation: 'Linha 14 & Anteriores',
    tag: 'Porta de Entrada iOS',
    description: 'O modelo mais acessível do ecossistema Apple com ótima autonomia de bateria, chip veloz e design clássico.',
    storageOptions: ['128GB', '256GB'],
    colors: [
      { name: 'Meia-Noite', hex: '#1C2430' },
      { name: 'Estelar', hex: '#F0EAE1' },
      { name: 'Azul', hex: '#264D73' }
    ],
    condition: 'Seminovo Selecionado 100% Original',
    warranty: 'Garantia com Suporte e Assistência Local',
    delivery: 'Pronta entrega física imediata',
    technicalSpecs: {
      chip: 'Processador Apple A15 Bionic 6-core',
      screen: 'Super Retina XDR OLED 6.1"',
      camera: 'Câmera dupla de 12MP com estabilização por deslocamento de sensor',
      security: 'Face ID e compatibilidade com carregadores MagSafe'
    }
  }
];

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
