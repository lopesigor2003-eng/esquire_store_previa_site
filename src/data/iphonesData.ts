export interface ProductItem {
  id: string;
  name: string;
  year: number;
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
    ram?: string;
    usb?: string;
    system?: string;
    battery?: string;
  };
}

export const PRODUCTS: ProductItem[] = [
  // ==========================================
  // ANO 2026
  // ==========================================
  {
    id: 'iphone-18-pro-max',
    name: 'iPhone 18 Pro Max',
    year: 2026,
    generation: '2026',
    tag: 'Flagship Oficial 2026',
    highlight: true,
    description: 'O mais potente e luxuoso da Apple. Tela de 6.9", até 29 horas de bateria, câmera Pro de 48 MP e até 2TB de armazenamento.',
    storageOptions: ['256GB', '512GB', '1TB', '2TB'],
    colors: [
      { name: 'Burgundy', hex: '#631024' },
      { name: 'Glacier', hex: '#A8D5E5' },
      { name: 'Black Titanium', hex: '#1E1E1E' }
    ],
    condition: 'Novo Lacrado · Serial Oficial Ativado',
    warranty: 'Garantia Mundial Apple de 12 Meses',
    delivery: 'Pronta entrega física · Torre Caridade Sala 214',
    technicalSpecs: {
      chip: 'Processador Apple A20 Pro Bionic Neural 32-core',
      screen: '6.9" Super Retina XDR OLED ProMotion 120Hz',
      camera: 'Traseira 48 MP Pro + Câmera Frontal 18 MP',
      battery: 'Até 29 horas de bateria (Íon de lítio)',
      ram: 'Memória RAM não especificada',
      system: 'iOS 20 com Apple Intelligence 2.0',
      security: 'Face ID biométrico e Criptografia em Hardware'
    }
  },
  {
    id: 'iphone-18-pro',
    name: 'iPhone 18 Pro',
    year: 2026,
    generation: '2026',
    tag: 'Série Pro Lançamento',
    description: 'Chassi compacto em titânio aeroespacial, tela de 6.3", câmera traseira de 48 MP e frontal de 18 MP com até 2TB de armazenamento.',
    storageOptions: ['256GB', '512GB', '1TB', '2TB'],
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
      chip: 'Processador Apple A20 Pro Bionic',
      screen: '6.3" Super Retina XDR OLED Always-On 120Hz',
      camera: 'Traseira 48 MP + Frontal 18 MP',
      battery: 'Capacidade da bateria de Íon de lítio',
      ram: 'Memória RAM não especificada',
      system: 'iOS 20 com Apple Intelligence',
      security: 'Face ID com proteção biométrica avançada'
    }
  },
  {
    id: 'iphone-17e',
    name: 'iPhone 17e',
    year: 2026,
    generation: '2026',
    tag: 'Linha Inteligente 2026',
    description: 'Entrada refinada de 2026 com tela de 6.1", opções de 256GB e 512GB, câmera traseira de 48 MP e frontal TrueDepth de 12 MP.',
    storageOptions: ['256GB', '512GB'],
    colors: [
      { name: 'Meia-Noite', hex: '#1C2430' },
      { name: 'Estelar', hex: '#F0EAE1' },
      { name: 'Azul Geleira', hex: '#9BBBD4' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: 'Garantia Oficial Apple de 12 Meses',
    delivery: 'Pronta entrega física em Santa Maria',
    technicalSpecs: {
      chip: 'Processador Apple A19 Bionic',
      screen: '6.1" Super Retina XDR OLED com Dynamic Island',
      camera: 'Traseira 48 MP + Frontal TrueDepth 12 MP',
      battery: 'Capacidade da bateria de Íon de lítio',
      ram: 'Memória RAM não especificada',
      system: 'iOS com Apple Intelligence',
      security: 'Face ID biométrico de rápida leitura'
    }
  },
  {
    id: 'iphone-duo',
    name: 'iPhone Duo',
    year: 2026,
    generation: '2026',
    tag: 'Inovação Dobrável Apple',
    highlight: true,
    description: 'O primeiro iPhone dobrável da história: tela interna imersiva Dual-OLED de 7.9" e tela externa compacta de 6.2" com chip A20 Pro.',
    storageOptions: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Preto Cósmico', hex: '#141517' },
      { name: 'Prata Titânio', hex: '#E0E2E5' },
      { name: 'Safira Escura', hex: '#1A2E44' }
    ],
    condition: 'Novo Lacrado de Fábrica',
    warranty: 'Garantia Mundial Apple de 12 Meses com Cobertura de Dobradiça',
    delivery: 'Disponibilidade sob reserva exclusiva na Sala 214',
    technicalSpecs: {
      chip: 'Processador Apple A20 Pro Neural Dual-Chip',
      screen: '7.9" Dobrável Dual-OLED 120Hz interna + 6.2" OLED externa',
      camera: 'Sistema Dual Fusion 48 MP Pro + Câmera Frontal 18 MP',
      battery: 'Bateria dupla de íon de lítio de alta autonomia',
      system: 'iOS Duo com multitarefa split-screen em tempo real',
      security: 'Touch ID lateral + Face ID nas duas telas'
    }
  },

  // ==========================================
  // ANO 2025
  // ==========================================
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    year: 2025,
    generation: '2025',
    tag: 'Máxima Potência 2025',
    description: 'Armazenamento até 2TB, tela de 6.9", câmera traseira de 48 MP, frontal de 18 MP e bateria interna de íon de lítio.',
    storageOptions: ['256GB', '512GB', '1TB', '2TB'],
    colors: [
      { name: 'Prateado', hex: '#E8E8E8' },
      { name: 'Titânio Preto', hex: '#2A2928' },
      { name: 'Titânio Ouro Nobre', hex: '#DFD0B8' },
      { name: 'Titânio Natural', hex: '#9E9A93' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: 'Garantia Mundial Apple de 12 Meses',
    delivery: 'Showroom Sala 214 - Torre Caridade',
    technicalSpecs: {
      chip: 'Chip Apple A19 Pro de máxima performance',
      screen: '6.9" de tamanho de tela ProMotion 120Hz',
      camera: 'Traseira 48 MP + Frontal 18 MP',
      battery: 'Bateria interna de íon de lítio',
      system: 'iOS com Apple Intelligence integrada',
      security: 'Face ID, Classificação IP68 contra água e poeira'
    }
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    year: 2025,
    generation: '2025',
    tag: 'A19 Pro & Unibody Alumínio',
    description: 'Chip A19 Pro, estrutura unibody de alumínio, resistência IP68, opções até 1TB e Apple Intelligence integrada.',
    storageOptions: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Prateado', hex: '#E8E8E8' },
      { name: 'Titânio Preto', hex: '#2A2928' },
      { name: 'Titânio Ouro Nobre', hex: '#DFD0B8' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: 'Garantia Oficial Apple de 12 Meses',
    delivery: 'Pronta entrega física em Santa Maria',
    technicalSpecs: {
      chip: 'Chip A19 Pro com Apple Intelligence',
      screen: '6.3" Super Retina XDR ProMotion 120Hz Always-On',
      camera: 'Sistema Pro Triplo 48 MP + Câmera Frontal 18 MP',
      battery: 'Bateria interna de alta densidade',
      system: 'Sistema operacional iOS',
      security: 'Face ID para autenticação segura, IP68'
    }
  },
  {
    id: 'iphone-air',
    name: 'iPhone Air',
    year: 2025,
    generation: '2025',
    tag: 'Design Ultra-Slim',
    description: 'O modelo mais fino e leve: opções de 256GB, 512GB e 1TB, tela de 6.5", chip A19 Pro, câmera traseira de 48 MP e frontal de 18 MP.',
    storageOptions: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Titânio Polido', hex: '#D0D3D4' },
      { name: 'Preto Ônix', hex: '#141517' },
      { name: 'Azul Etéreo', hex: '#A6C0D9' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: 'Garantia Mundial Apple de 12 Meses',
    delivery: 'Edição Exclusiva na Sala 214',
    technicalSpecs: {
      chip: 'Chip A19 Pro de alta velocidade',
      screen: '6.5" de tamanho da tela Ultra-Slim OLED',
      camera: 'Traseira 48 MP + Frontal 18 MP',
      battery: 'Bateria interna recarregável de íon de lítio',
      system: 'iOS otimizado para o perfil Air',
      security: 'Face ID integrado no display, Estrutura Unibody'
    }
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    year: 2025,
    generation: '2025',
    tag: 'Nova Geração 2025',
    description: 'Opções de 256GB e 512GB, tela de 6.3", chip A19, câmera traseira de 48 MP, câmera frontal de 18 MP e bateria de íon de lítio.',
    storageOptions: ['256GB', '512GB'],
    colors: [
      { name: 'Titânio Natural', hex: '#9E9A93' },
      { name: 'Azul Meia-Noite', hex: '#1C2430' },
      { name: 'Prateado', hex: '#E8E8E8' },
      { name: 'Verde Esmeralda', hex: '#2E5343' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: 'Garantia Mundial Apple de 12 Meses',
    delivery: 'Pronta entrega na Torre Caridade',
    technicalSpecs: {
      chip: 'Chip A19 de processador',
      screen: '6.3" de tamanho da tela',
      camera: 'Traseira 48 MP + Frontal 18 MP',
      battery: 'Bateria de íon de lítio',
      system: 'iOS com recursos neurais avançados',
      security: 'Face ID com Secure Enclave'
    }
  },
  {
    id: 'iphone-16e',
    name: 'iPhone 16e',
    year: 2025,
    generation: '2025',
    tag: 'Edição Especial 2025',
    description: 'Armazenamento de 128GB, 256GB e 512GB, cor Preto, tela de 6.1", chip Apple A18, câmera Fusion de 48 MP e conectividade 5G.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Preto', hex: '#1F2022' },
      { name: 'Branco', hex: '#F4F4F6' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: '12 Meses de Garantia Oficial Apple',
    delivery: 'Pronta entrega na Sala 214',
    technicalSpecs: {
      chip: 'Processador Apple A18',
      screen: '6.1 polegadas de tamanho da tela',
      camera: 'Câmera principal Fusion de 48 MP + Frontal 12 MP',
      system: 'Sistema operacional iOS com conectividade 5G',
      security: 'Face ID, Carregamento USB-C'
    }
  },

  // ==========================================
  // ANO 2024
  // ==========================================
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    year: 2024,
    generation: '2024',
    tag: 'Tela 6.9" & Bateria 4685mAh',
    description: 'Armazenamento de 256GB, 512GB e 1TB, tela de 6.9", bateria de 4685 mAh, câmera de 48 MP, chip A18 Pro, Dual SIM e NFC.',
    storageOptions: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Cinza / Titânio Natural', hex: '#9E9A93' },
      { name: 'Titânio Deserto', hex: '#C5B49D' },
      { name: 'Titânio Branco', hex: '#E3E2DD' },
      { name: 'Titânio Preto', hex: '#2A2928' }
    ],
    condition: 'Condição: Excelente / Novo Lacrado',
    warranty: 'Garantia Mundial Apple de 12 Meses',
    delivery: 'Pronta entrega física na Sala 214',
    technicalSpecs: {
      chip: 'Processador Apple A18 Pro',
      screen: '6.9 Polegadas Super Retina XDR OLED 120Hz',
      camera: 'Câmera Principal 48 MP + Frontal 12 MP',
      ram: 'Memória RAM: 8 GB',
      battery: 'Bateria: 4685 mAh',
      system: 'iOS 18 (Operadora: Desbloqueado, Rede: GSM / 4G / 5G, NFC: SIM)',
      security: 'Face ID, Dual SIM: SIM, Condição: Excelente'
    }
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    year: 2024,
    generation: '2024',
    tag: 'Titânio & A18 Pro 4.0GHz',
    description: 'Processador Apple A18 Pro 4.0 GHz, tela de 6.3" (1206x2622), RAM de 8GB, conector Tipo-C e câmera de 48 MP.',
    storageOptions: ['128GB', '256GB', '512GB', '1TB'],
    colors: [
      { name: 'Titânio Deserto', hex: '#C5B49D' },
      { name: 'Titânio Natural', hex: '#9E9A93' },
      { name: 'Titânio Branco', hex: '#E3E2DD' },
      { name: 'Titânio Preto', hex: '#2A2928' }
    ],
    condition: '',
    warranty: 'Garantia Oficial Apple de 12 Meses',
    delivery: 'Disponível na Torre Caridade',
    technicalSpecs: {
      chip: 'APPLE A18 PRO 4.0 GHZ',
      screen: '6.3" (1206x2622 pixels) Super Retina XDR 120Hz',
      camera: 'Câmera Principal 48 MP + Frontal 12 MP',
      ram: 'Memória RAM: 8 GB',
      usb: 'USB: Tipo-C',
      system: 'Versão: iOS 18 (Modelo: A3293, Ano: 2024)',
      security: 'Face ID, Dual Sim: Não'
    }
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus',
    year: 2024,
    generation: '2024',
    tag: 'Super Retina XDR 6.7"',
    description: 'Armazenamento de 128GB, 256GB e 512GB, tela Super Retina XDR de 6.7", chip A18, câmera Fusion de 48 MP e frontal de 12 MP.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Preto', hex: '#1F2022' },
      { name: 'Branco', hex: '#F4F4F6' },
      { name: 'Rosa', hex: '#EB7995' },
      { name: 'Verde-Acizentado', hex: '#9FCBB4' },
      { name: 'Ultramarino', hex: '#4563A2' }
    ],
    condition: 'Novo Lacrado Oficial',
    warranty: 'Garantia Oficial Apple de 12 Meses',
    delivery: 'Retirada imediata em Santa Maria',
    technicalSpecs: {
      chip: 'Chip A18',
      screen: 'Tela Super Retina XDR de 6,7"',
      camera: 'Câmera Fusion de 48 MP + Frontal 12 MP',
      battery: 'Bateria interna recarregável',
      system: 'iOS 18 com Apple Intelligence',
      security: 'Face ID, Botão de Ação e Controle da Câmera'
    }
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    year: 2024,
    generation: '2024',
    tag: 'Fusion 48MP & iOS 18',
    description: '128GB, 256GB e 512GB de armazenamento, tela de 6.1", câmera traseira de 48 MP, frontal de 12 MP e sistema iOS 18.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Preto', hex: '#1F2022' },
      { name: 'Branco', hex: '#F4F4F6' },
      { name: 'Rosa', hex: '#EB7995' },
      { name: 'Verde-Acizentado', hex: '#9FCBB4' },
      { name: 'Ultramarino', hex: '#4563A2' }
    ],
    condition: 'Novo Lacrado ou Seminovo Impecável',
    warranty: 'Garantia Oficial Apple de 12 Meses',
    delivery: 'Pronta entrega na Sala 214',
    technicalSpecs: {
      chip: 'Apple A18 Bionic',
      screen: '6,1" de tamanho da tela Super Retina XDR',
      camera: 'Traseira 48 MP + Frontal 12 MP',
      battery: 'Bateria interna recarregável de íon de lítio',
      system: 'iOS 18 de sistema operacional',
      security: 'Face ID, Botão Controle da Câmera'
    }
  },

  // ==========================================
  // ANO 2023
  // ==========================================
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    year: 2023,
    generation: '2023',
    tag: 'A17 Pro 3.7GHz & Titânio',
    description: 'Armazenamento de 256GB, 512GB e 1TB, chip Apple A17 Pro 3.7 GHz, 8GB de RAM, USB Tipo-C e tela de 6.7" (1290x2796).',
    storageOptions: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Titânio Natural', hex: '#9E9A93' },
      { name: 'Titânio Azul', hex: '#2E3B4E' },
      { name: 'Titânio Branco', hex: '#E3E2DD' },
      { name: 'Titânio Preto', hex: '#2A2928' }
    ],
    condition: '',
    warranty: 'Garantia com Laudo Pericial de 30 Itens',
    delivery: 'Disponível na Torre Caridade Sala 214',
    technicalSpecs: {
      chip: 'APPLE A17 PRO 3.7 GHZ',
      screen: '6.7" (1290x2796 pixels) Super Retina XDR ProMotion 120Hz',
      camera: 'Câmera Principal 48 MP + 12 MP + 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 8 GB',
      usb: 'USB: Tipo-C',
      system: 'Versão: iOS 17 (Modelo: A3106)',
      security: 'Face ID, Dual Sim: Não'
    }
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    year: 2023,
    generation: '2023',
    tag: 'A17 Pro & Titânio 6.1"',
    description: 'Armazenamento de 128GB, 256GB, 512GB e 1TB, chip A17 Pro 3.7 GHz, 8GB de RAM, USB Tipo-C e câmera Pro de 48 MP + 12 MP + 12 MP.',
    storageOptions: ['128GB', '256GB', '512GB', '1TB'],
    colors: [
      { name: 'Titânio Natural', hex: '#9E9A93' },
      { name: 'Titânio Azul', hex: '#2E3B4E' },
      { name: 'Titânio Branco', hex: '#E3E2DD' },
      { name: 'Titânio Preto', hex: '#2A2928' }
    ],
    condition: '',
    warranty: 'Garantia de Loja com Procedência Oficial',
    delivery: 'Pronta entrega física em Santa Maria',
    technicalSpecs: {
      chip: 'APPLE A16 PRO / A17 PRO 3.7 GHZ',
      screen: '6.1" (1179x2556 pixels) ProMotion 120Hz',
      camera: 'Câmera Principal 48 MP + 12 MP + 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 8 GB',
      usb: 'USB: Tipo-C',
      system: 'Versão: iOS 17 (Modelo: A3101 / A3102, Peso: 187g)',
      security: 'Face ID, Dual Sim: Não'
    }
  },
  {
    id: 'iphone-15-plus',
    name: 'iPhone 15 Plus',
    year: 2023,
    generation: '2023',
    tag: 'Tela 6.7" & USB Tipo-C',
    description: 'Armazenamento de 128GB, 256GB e 512GB, Apple A16 Bionic 3.4 GHz, RAM de 6GB, USB Tipo-C e câmera de 48 MP + 12 MP.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Preto', hex: '#2C2D30' },
      { name: 'Azul', hex: '#D1DFE8' },
      { name: 'Verde', hex: '#D7E4D3' },
      { name: 'Rosa', hex: '#EED5D9' }
    ],
    condition: '',
    warranty: 'Garantia com Teste Rigoroso de Bateria',
    delivery: 'Disponível na Torre Caridade',
    technicalSpecs: {
      chip: 'APPLE A16 BIONIC 3.4 GHZ',
      screen: '6.7" (1290x2796 pixels) Super Retina XDR Dynamic Island',
      camera: 'Câmera Principal 48 MP + 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 6 GB',
      usb: 'USB: Tipo-C',
      system: 'Versão: iOS 17 (Modelo: A3094, Peso: 201g)',
      security: 'Face ID, Dual Sim: Não'
    }
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    year: 2023,
    generation: '2023',
    tag: 'Dynamic Island & USB-C',
    description: 'Armazenamento de 128GB, 256GB e 512GB, chip A16 Bionic 3.4 GHz, 6GB de RAM, USB Tipo-C e câmera de 48 MP + 12 MP.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Preto', hex: '#2C2D30' },
      { name: 'Azul', hex: '#D1DFE8' },
      { name: 'Verde', hex: '#D7E4D3' },
      { name: 'Amarelo', hex: '#F5ECD5' },
      { name: 'Rosa', hex: '#EED5D9' }
    ],
    condition: '',
    warranty: 'Garantia com Suporte Técnico Local',
    delivery: 'Pronta entrega na Sala 214',
    technicalSpecs: {
      chip: 'APPLE A16 BIONIC 3.4 GHZ',
      screen: '6.1" (1179 x 2556 pixels) Dynamic Island',
      camera: 'Câmera Principal 48 MP + 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 6 GB',
      usb: 'USB: Tipo-C',
      system: 'Versão: iOS 17 (Modelo: A3090, Peso: 171g)',
      security: 'Face ID, Operadora: Desbloqueada, Dual Sim: Não'
    }
  },

  // ==========================================
  // ANO 2022
  // ==========================================
  {
    id: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    year: 2022,
    generation: '2022',
    tag: 'Dynamic Island & A16 3.4GHz',
    description: 'Armazenamento de 128GB, 256GB, 512GB e 1TB, chip A16 Bionic 3.4 GHz, RAM de 6GB, tela de 6.7" (1290x2796 pixels) e câmera de 48 MP.',
    storageOptions: ['128GB', '256GB', '512GB', '1TB'],
    colors: [
      { name: 'Roxo Profundo', hex: '#4B3F56' },
      { name: 'Preto-Espacial', hex: '#2D2D2D' },
      { name: 'Dourado', hex: '#F1E4C3' },
      { name: 'Prateado', hex: '#E8E8E8' }
    ],
    condition: '',
    warranty: 'Garantia com Laudo Pericial de Procedência',
    delivery: 'Pronta entrega física em Santa Maria',
    technicalSpecs: {
      chip: 'Apple A16 Bionic 3.4 GHZ',
      screen: '6.7" (1290x2796 pixels) Super Retina XDR Always-On',
      camera: 'Principal 48 MP + 12 MP + 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 6 GB',
      usb: 'USB: USB 2.0 (Lightning)',
      system: 'Versão: iOS 16 ou superior',
      security: 'Face ID, Dynamic Island'
    }
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    year: 2022,
    generation: '2022',
    tag: 'Dynamic Island & 48MP Pro',
    description: 'Armazenamento de 128GB, 256GB, 512GB e 1TB, chip A16 Bionic 3.4 GHz, tela de 6.1" (1179 x 2556), câmera de 48 MP + 12 MP + 12 MP e Lightning.',
    storageOptions: ['128GB', '256GB', '512GB', '1TB'],
    colors: [
      { name: 'Roxo Profundo', hex: '#4B3F56' },
      { name: 'Preto-Espacial', hex: '#2D2D2D' },
      { name: 'Dourado', hex: '#F1E4C3' },
      { name: 'Prateado', hex: '#E8E8E8' }
    ],
    condition: '',
    warranty: 'Garantia com Assistência Especializada',
    delivery: 'Retirada na Torre Caridade Sala 214',
    technicalSpecs: {
      chip: 'APPLE A16 BIONIC 3.4 GHZ',
      screen: '6.1" (1179 x 2556 pixels) Dynamic Island',
      camera: 'Principal 48 MP + 12 MP + 12 MP + Frontal 12 MP',
      usb: 'USB: LIGHTNING',
      system: 'Versão: iOS 16',
      security: 'Face ID, SOS via Satélite'
    }
  },
  {
    id: 'iphone-14-plus',
    name: 'iPhone 14 Plus',
    year: 2022,
    generation: '2022',
    tag: 'Super Tela 6.7" & A15 3.23GHz',
    description: 'Armazenamento de 128GB, 256GB e 512GB, Apple A15 Bionic 3.23 GHz, RAM de 6GB, tela de 6.7" (2778 x 1284 pixels) e conector Lightning.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Meia-Noite', hex: '#1C2430' },
      { name: 'Estelar', hex: '#F0EAE1' },
      { name: 'Azul', hex: '#87A9C7' },
      { name: 'Roxo', hex: '#D3C5E5' }
    ],
    condition: '',
    warranty: 'Garantia com Laudo Técnico de Bateria',
    delivery: 'Disponível na Sala 214',
    technicalSpecs: {
      chip: 'APPLE A15 BIONIC 3.23 GHZ',
      screen: '6,7" (2778 x 1284 pixels) Super Retina XDR',
      camera: 'Principal 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 6 GB',
      usb: 'USB: LIGHTNING',
      system: 'Versão: iOS 16',
      security: 'Face ID, É DUAL SIM: Não'
    }
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    year: 2022,
    generation: '2022',
    tag: 'Homologação Anatel 109862201993',
    description: 'Armazenamento de 128GB, 256GB e 512GB, Apple A15 Bionic 3.23 GHz, RAM de 6GB, tela de 6.1" e homologação oficial Anatel.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Meia-Noite', hex: '#1C2430' },
      { name: 'Estelar', hex: '#F0EAE1' },
      { name: 'Azul', hex: '#87A9C7' },
      { name: 'Roxo', hex: '#D3C5E5' },
      { name: 'Amarelo', hex: '#FDE47B' }
    ],
    condition: '',
    warranty: 'Garantia com Código Homologação Anatel: 109862201993',
    delivery: 'Pronta entrega física na Torre Caridade',
    technicalSpecs: {
      chip: 'Apple A15 Bionic 3.23 GHZ',
      screen: '6.1" (1170x2532 pixels) Super Retina XDR',
      camera: 'Câmera Principal 12 MP + 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 6 GB',
      usb: 'USB: USB 2.0 (Lightning)',
      system: 'Versão: iOS 16 ou superior',
      security: 'Face ID, Dual Sim: Não, Anatel: 109862201993'
    }
  },
  {
    id: 'iphone-se-3',
    name: 'iPhone SE (3ª Geração)',
    year: 2022,
    generation: '2022',
    tag: 'Rede Celular 5G & Touch ID',
    description: 'Armazenamento de 64GB, 128GB e 256GB, chip A15 Bionic, rede 5G, tela Retina HD de 4.7 polegadas, Touch ID clássico e IP67.',
    storageOptions: ['64GB', '128GB', '256GB'],
    colors: [
      { name: 'Meia-Noite', hex: '#1C2430' },
      { name: 'Estelar', hex: '#F0EAE1' },
      { name: '(PRODUCT)RED', hex: '#B81D24' }
    ],
    condition: 'Novo Lacrado ou Seminovo Revisado',
    warranty: 'Garantia com Procedência Comprovada',
    delivery: 'Pronta entrega física em Santa Maria',
    technicalSpecs: {
      chip: 'Chip A15 Bionic de alto desempenho',
      screen: 'Tela Retina HD de 4,7 polegadas (IP67)',
      camera: 'Câmera única de 12 MP (4K até 60 qps) + FaceTime HD 7 MP',
      ram: 'Memória RAM: 4 GB',
      battery: 'Até 15 horas de reprodução de vídeo',
      system: 'iOS 15 com novos recursos',
      security: 'Botão de Início com Touch ID, Rede celular 5G'
    }
  },

  // ==========================================
  // ANO 2021
  // ==========================================
  {
    id: 'iphone-13-pro-max',
    name: 'iPhone 13 Pro Max',
    year: 2021,
    generation: '2021',
    tag: 'ProMotion 120Hz & 8GB RAM',
    description: 'Armazenamento de 128GB, 256GB, 512GB e 1TB, processador 3.23GHz Hexa-Core, 8GB de RAM, tela de 6.7" e bateria de longa duração.',
    storageOptions: ['128GB', '256GB', '512GB', '1TB'],
    colors: [
      { name: 'Azul Sierra', hex: '#8DA2B5' },
      { name: 'Grafite', hex: '#3B3B3B' },
      { name: 'Dourado', hex: '#F1E4C3' },
      { name: 'Prateado', hex: '#E8E8E8' },
      { name: 'Verde-Alpino', hex: '#495847' }
    ],
    condition: '',
    warranty: 'Garantia da Loja com Assistência Presencial',
    delivery: 'Disponível na Sala 214',
    technicalSpecs: {
      chip: 'Processador 3.23GHz Hexa-Core (Apple A15 Bionic)',
      screen: '6.7" (1284 x 2778 pixels) Super Retina XDR 120Hz',
      camera: 'Câmera Principal 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 8 GB',
      usb: 'USB: USB 2.0 cabo proprietário (Lightning)',
      system: 'iOS 15',
      security: 'Face ID, Um Chip, Desbloqueado, É Dual Sim: Não'
    }
  },
  {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    year: 2021,
    generation: '2021',
    tag: '3.23GHz Hexa-Core & 8GB RAM',
    description: 'Armazenamento de 128GB, 256GB, 512GB e 1TB, processador 3.23GHz Hexa-Core, 8GB de RAM, tela de 6.1" e modo ProRes.',
    storageOptions: ['128GB', '256GB', '512GB', '1TB'],
    colors: [
      { name: 'Azul Sierra', hex: '#8DA2B5' },
      { name: 'Grafite', hex: '#3B3B3B' },
      { name: 'Dourado', hex: '#F1E4C3' },
      { name: 'Prateado', hex: '#E8E8E8' },
      { name: 'Verde-Alpino', hex: '#495847' }
    ],
    condition: '',
    warranty: 'Garantia com Laudo Pericial de 30 Itens',
    delivery: 'Pronta entrega na Torre Caridade',
    technicalSpecs: {
      chip: '3.23GHz Hexa-Core (Apple A15 Bionic)',
      screen: '6.1" (1170 x 2532 pixels) ProMotion 120Hz',
      camera: 'Câmera Principal 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 8 GB',
      usb: 'USB: USB 2.0 cabo proprietário (Lightning)',
      system: 'Versão: iOS 15',
      security: 'Face ID, Um Chip, Desbloqueado, É Dual Sim: Não'
    }
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    year: 2021,
    generation: '2021',
    tag: 'A15 Hexa-Core & 6GB RAM',
    description: 'Armazenamento de 128GB, 256GB e 512GB, processador Apple A15 Bionic, RAM de 6GB, tela de 6.1" e câmera dupla de 12 MP.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Meia-Noite', hex: '#1C2430' },
      { name: 'Estelar', hex: '#F0EAE1' },
      { name: 'Azul', hex: '#274D73' },
      { name: 'Rosa', hex: '#E8B4B8' },
      { name: 'Verde', hex: '#3B4F3F' }
    ],
    condition: '',
    warranty: 'Garantia com Nota Fiscal e Teste de Bateria',
    delivery: 'Retirada imediata na Sala 214',
    technicalSpecs: {
      chip: 'Processador: Apple A15 Bionic Hexa-Core',
      screen: '6.1" (1170x2532 pixels) Super Retina XDR OLED',
      camera: 'Câmera Principal 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 6 GB',
      usb: 'USB: USB 2.0 cabo proprietário (Lightning)',
      system: 'Versão: iOS 15',
      security: 'Face ID, Desbloqueado'
    }
  },
  {
    id: 'iphone-13-mini',
    name: 'iPhone 13 mini',
    year: 2021,
    generation: '2021',
    tag: 'Compacto 5.4" & 6GB RAM',
    description: 'Armazenamento de 128GB, 256GB e 512GB, tela de 5.4" (1080 x 2340), 6GB de RAM, chip Hexa-Core 3.23GHz e câmera dupla de 12 MP.',
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Meia-Noite', hex: '#1C2430' },
      { name: 'Estelar', hex: '#F0EAE1' },
      { name: 'Azul', hex: '#274D73' },
      { name: 'Rosa', hex: '#E8B4B8' },
      { name: 'Verde', hex: '#3B4F3F' }
    ],
    condition: '',
    warranty: 'Garantia de Loja com Laudo de Procedência',
    delivery: 'Pronta entrega física em Santa Maria',
    technicalSpecs: {
      chip: 'Processador: Hexa-Core 3.23GHz (Apple A15 Bionic)',
      screen: '5.4" (1080 x 2340 pixels) Super Retina XDR',
      camera: 'Câmera Principal 12 MP + Frontal 12 MP',
      ram: 'Memória RAM: 6 GB',
      usb: 'USB: USB 2.0 cabo proprietário (Lightning)',
      system: 'Versão: 15',
      security: 'Face ID, Um Chip, Desbloqueado, É Dual Sim: Não'
    }
  }
];
