export interface ProductItem {
  id: string;
  name: string;
  year: number;
  generation: string;
  tag: string;
  price: string;
  priceNumeric: number;
  image: string;
  highlight?: boolean;
  description: string;
  storage: string;
  storageOptions: string[];
  condition: string;
  warranty: string;
  delivery: string;
  technicalSpecs: {
    chip: string;
    screen: string;
    camera: string;
    security: string;
    ram?: string;
    usb?: string;
    system?: string;
    battery?: string;
  };
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'iphone-16-pro-max-256',
    name: 'iPhone 16 Pro Max 256GB',
    year: 2024,
    generation: 'iPhone 16',
    tag: 'Todo Original · 1 Ano de Garantia',
    price: 'R$ 5.890,00',
    priceNumeric: 5890,
    image: 'https://i.postimg.cc/pLXWh8vd/Whats-App-Image-2026-10-06-at-16-47-59.jpg',
    highlight: true,
    description: 'Tela de 6.9" Super Retina XDR OLED 120Hz, processador Apple A18 Pro, câmera Pro de 48 MP e bateria de altíssima autonomia.',
    storage: '256GB',
    storageOptions: ['256GB'],
    condition: 'Todo Original',
    warranty: '1 Ano de Garantia',
    delivery: 'Pronta entrega física · Torre Caridade Sala 214',
    technicalSpecs: {
      chip: 'Processador Apple A18 Pro Hexa-Core',
      screen: '6.9" Super Retina XDR OLED 120Hz ProMotion',
      camera: 'Traseira Tripla 48 MP + Frontal 12 MP',
      ram: '8 GB',
      battery: 'Bateria de longa duração',
      usb: 'USB-C Universal',
      security: 'Face ID biométrico · Aparelho 100% Original'
    }
  },
  {
    id: 'iphone-16-pro-256',
    name: 'iPhone 16 Pro 256GB',
    year: 2024,
    generation: 'iPhone 16',
    tag: 'Todo Original · 1 Ano de Garantia',
    price: 'R$ 5.490,00',
    priceNumeric: 5490,
    image: 'https://i.postimg.cc/sDJfgmk7/Whats-App-Image-2026-10-06-at-16-47-59-(1).jpg',
    description: 'Chassi em titânio aeroespacial, tela de 6.3" ProMotion 120Hz, chip Apple A18 Pro 4.0 GHz e gravação em 4K a 120 qps.',
    storage: '256GB',
    storageOptions: ['256GB'],
    condition: 'Todo Original',
    warranty: '1 Ano de Garantia',
    delivery: 'Pronta entrega na Sala 214',
    technicalSpecs: {
      chip: 'Processador Apple A18 Pro 4.0 GHz',
      screen: '6.3" Super Retina XDR OLED Always-On 120Hz',
      camera: 'Câmera Principal 48 MP + Frontal 12 MP',
      ram: '8 GB',
      usb: 'USB-C Universal',
      security: 'Face ID com proteção biométrica avançada'
    }
  },
  {
    id: 'iphone-16-pro-128',
    name: 'iPhone 16 Pro 128GB',
    year: 2024,
    generation: 'iPhone 16',
    tag: 'Todo Original · 1 Ano de Garantia',
    price: 'R$ 5.290,00',
    priceNumeric: 5290,
    image: 'https://i.postimg.cc/15KR3Bkq/Whats-App-Image-2026-10-06-at-16-47-59-(2).jpg',
    description: 'Acabamento titânio refinado, botão Controle da Câmera, processador A18 Pro e display Super Retina XDR de 6.3".',
    storage: '128GB',
    storageOptions: ['128GB'],
    condition: 'Todo Original',
    warranty: '1 Ano de Garantia',
    delivery: 'Pronta entrega física em Santa Maria',
    technicalSpecs: {
      chip: 'Processador Apple A18 Pro Hexa-Core',
      screen: '6.3" Super Retina XDR OLED 120Hz ProMotion',
      camera: 'Câmera Principal 48 MP + Frontal 12 MP',
      ram: '8 GB',
      usb: 'USB-C Universal',
      security: 'Face ID biométrico · Todo Original'
    }
  },
  {
    id: 'iphone-15-plus-128',
    name: 'iPhone 15 Plus 128GB',
    year: 2023,
    generation: 'iPhone 15',
    tag: 'Todo Original · 1 Ano de Garantia',
    price: 'R$ 3.490,00',
    priceNumeric: 3490,
    image: 'https://i.postimg.cc/J4Q7zxfB/Whats-App-Image-2026-10-06-at-16-47-59-(3).jpg',
    description: 'Tela imersiva de 6.7" com Dynamic Island, autonomia líder de bateria, processador A16 Bionic e conector USB-C universal.',
    storage: '128GB',
    storageOptions: ['128GB'],
    condition: 'Todo Original',
    warranty: '1 Ano de Garantia',
    delivery: 'Disponível na Torre Caridade Sala 214',
    technicalSpecs: {
      chip: 'Processador Apple A16 Bionic 3.4 GHz',
      screen: '6.7" Super Retina XDR Dynamic Island',
      camera: 'Câmera Principal 48 MP + Frontal 12 MP',
      ram: '6 GB',
      usb: 'USB-C Universal',
      security: 'Face ID · Todo Original'
    }
  },
  {
    id: 'iphone-14-128',
    name: 'iPhone 14 128GB',
    year: 2022,
    generation: 'iPhone 14',
    tag: 'Todo Original · 1 Ano de Garantia',
    price: 'R$ 2.690,00',
    priceNumeric: 2690,
    image: 'https://i.postimg.cc/hP04tskz/Whats-App-Image-2026-10-06-at-16-48-00.jpg',
    description: 'Tela OLED Super Retina XDR de 6.1", chip Apple A15 Bionic veloz, modo Ação para vídeos fluidos e detecção de acidentes.',
    storage: '128GB',
    storageOptions: ['128GB'],
    condition: 'Todo Original',
    warranty: '1 Ano de Garantia',
    delivery: 'Pronta entrega física na Torre Caridade',
    technicalSpecs: {
      chip: 'Processador Apple A15 Bionic 3.23 GHz',
      screen: '6.1" Super Retina XDR OLED (1170x2532)',
      camera: 'Dupla Traseira 12 MP + Frontal 12 MP',
      ram: '6 GB',
      usb: 'Lightning',
      security: 'Face ID · Todo Original'
    }
  },
  {
    id: 'iphone-13-pro-128',
    name: 'iPhone 13 Pro 128GB',
    year: 2021,
    generation: 'iPhone 13',
    tag: 'Todo Original · 6 Meses de Garantia',
    price: 'R$ 3.190,00',
    priceNumeric: 3190,
    image: 'https://i.postimg.cc/rF9ywjBd/Whats-App-Image-2026-10-06-at-16-48-01-(1).jpg',
    description: 'Aço cirúrgico, tela fluida ProMotion 120Hz, câmera tripla com modo Macro e gravação ProRes com chip A15 Bionic.',
    storage: '128GB',
    storageOptions: ['128GB'],
    condition: 'Todo Original',
    warranty: '6 Meses de Garantia',
    delivery: 'Pronta entrega na Sala 214',
    technicalSpecs: {
      chip: 'Apple A15 Bionic 3.23GHz Hexa-Core',
      screen: '6.1" Super Retina XDR ProMotion 120Hz',
      camera: 'Câmera Tripla 12 MP + Frontal 12 MP',
      ram: '6 GB',
      usb: 'Lightning',
      security: 'Face ID · Todo Original'
    }
  },
  {
    id: 'iphone-11-128',
    name: 'iPhone 11 128GB',
    year: 2019,
    generation: 'iPhone 11',
    tag: 'Todo Original · 6 Meses de Garantia',
    price: 'R$ 1.190,00',
    priceNumeric: 1190,
    image: 'https://i.postimg.cc/MKYZp5Cf/Whats-App-Image-2026-10-06-at-16-48-01.jpg',
    description: 'Excelente custo-benefício, tela Liquid Retina HD de 6.1", chip Apple A13 Bionic veloz e câmera dupla com Modo Noite.',
    storage: '128GB',
    storageOptions: ['128GB'],
    condition: 'Todo Original',
    warranty: '6 Meses de Garantia',
    delivery: 'Retirada imediata na Sala 214',
    technicalSpecs: {
      chip: 'Processador Apple A13 Bionic',
      screen: '6.1" Liquid Retina HD (1792 x 828)',
      camera: 'Dupla Traseira 12 MP + Frontal 12 MP',
      ram: '4 GB',
      usb: 'Lightning',
      security: 'Face ID · Todo Original'
    }
  }
];
