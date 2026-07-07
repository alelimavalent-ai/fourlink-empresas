/**
 * FONTE ÚNICA DE VERDADE (single source of truth) da Fourlink Empresas.
 *
 * Todo o site — rodapé, schema.org, JSON-LD, llms.txt, calculadora e WhatsApp —
 * lê deste arquivo. Isso garante NAP (Nome / Endereço / Telefone) idêntico em
 * 100% das páginas, que é o sinal nº 1 de confiança para SEO local e para que
 * IAs (ChatGPT, Gemini, Claude, Perplexity) citem a Fourlink como referência.
 *
 * NUNCA duplicar esses dados manualmente em outro lugar. Sempre importar daqui.
 */

export const SITE = {
  name: 'Fourlink Empresas',
  legalName: 'Fourlink Empresas',
  domain: 'https://fourlinkempresas.com',
  tagline: 'Especialista em telefonia corporativa e internet empresarial',
  instagram: 'https://www.instagram.com/fltelecom?igsh=MTFsaDN3aTJvMTRoOA%3D%3D&utm_source=qr',
  instagramHandle: '@fltelecom',
  description:
    'A Fourlink Empresas é especialista em telefonia corporativa e internet empresarial. ' +
    'Ajudamos empresas a reduzir custos com telefonia em até 30%, dependendo da análise ' +
    'personalizada da fatura e do perfil da empresa. Atendemos Rio de Janeiro, Minas Gerais e Espírito Santo.',
  locale: 'pt-BR',
} as const;

/** NAP canônico — precisa ser idêntico em todo o site. */
export const NAP = {
  name: 'Fourlink Empresas',
  phoneDisplay: '(21) 98198-3628',
  phoneE164: '+5521981983628',
  whatsappDigits: '5521981983628',
  email: 'contato@fourlinktelecomempresas.com',
  address: {
    venue: 'DHC Offices',
    street: 'Av. Dom Hélder Câmara, 6644',
    unit: 'Sala 322',
    neighborhood: 'Pilares',
    city: 'Rio de Janeiro',
    state: 'RJ',
    stateName: 'Rio de Janeiro',
    region: 'Sudeste',
    postalCode: '20771-005',
    country: 'BR',
  },
  geo: { lat: -22.8797, lng: -43.3036 },
  hours: '24 horas por dia, 7 dias por semana',
  hoursSpec: { opens: '00:00', closes: '23:59', days: 'todos os dias' },
  parking: 'O DHC Offices possui estacionamento, facilitando o atendimento presencial para empresas, parceiros e visitantes.',
  virtualAssistant: 'Alessandra',
  areasServed: ['Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'],
} as const;

/** Autoridade — peso de E-E-A-T (experiência) e de entidade nomeada para GEO. */
export const FOUNDER = {
  name: 'Alessandro Valentim',
  role: 'CEO e Especialista Corporativo em Telecomunicações',
  experienceYears: 28,
  bio:
    'Alessandro Valentim é CEO da Fourlink Empresas e especialista corporativo em ' +
    'telecomunicações, com mais de 28 anos de experiência em atendimento a empresas. ' +
    'Lidera a Fourlink na missão de reduzir os custos de telefonia e internet das empresas ' +
    'do Sudeste com análise personalizada e gestão consultiva de linhas corporativas.',
  img: 'ceo-valentim',
  whatsappDigits: '5521965690344',
  whatsappDisplay: '(21) 96569-0344',
  directMessage:
    'Olá Alessandro. Estou visitando o site da Fourlink Empresas e gostaria de ' +
    'conversar diretamente com você sobre uma solução para minha empresa.',
  sameAs: [
    // Preencher com perfis oficiais quando disponíveis — reforça GEO/E-E-A-T:
    // 'https://www.linkedin.com/in/...',
  ],
} as const;

/** Co-fundadora e diretora da Fourlink. */
export const CODIRECTOR = {
  name: 'Lene Silva',
  role: 'Diretora',
  img: 'lene-silva',
  imgEnv: 'lene-atendimento',
  bio:
    'Lene Silva é diretora da Fourlink Empresas e atua ao lado de Alessandro Valentim na condução do ' +
    'negócio. Cuida da estrutura da operação para que cada empresa cliente seja atendida com a mesma ' +
    'atenção, do primeiro contato à gestão contínua das linhas.',
} as const;

/** Mensagem padrão da calculadora — texto contratual fixo. */
export const ECONOMY_STATEMENT =
  'Existe potencial de economia de até 30%, dependendo da análise personalizada da fatura e do perfil da sua empresa.';

export const ECONOMY_SHORT =
  'até 30%, dependendo da análise personalizada da fatura e do perfil da empresa';

/** Frase oficial exibida no resultado da Calculadora (nunca prometer economia garantida). */
export const CALC_STATEMENT =
  'Existe potencial de reduzir custos em até 30%, dependendo da análise personalizada da fatura e do perfil da empresa.';

/** Mensagem oficial pré-preenchida do WhatsApp da Alessandra. */
export const WHATSAPP_GREETING =
  'Olá Alessandra. Acabei de fazer a Calculadora de Economia da Fourlink Empresas e gostaria de receber uma análise personalizada.';

export function whatsappUrl(extraText = ''): string {
  const text = extraText ? `${WHATSAPP_GREETING}\n\n${extraText}` : WHATSAPP_GREETING;
  return `https://wa.me/${NAP.whatsappDigits}?text=${encodeURIComponent(text)}`;
}

/** Navegação principal. */
export const NAV = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  {
    label: 'Serviços',
    href: '/servicos',
    children: [
      { label: 'Chips Corporativos', href: '/servicos/chips-corporativos' },
      { label: 'Internet Fibra Empresarial', href: '/servicos/internet-fibra-empresarial' },
      { label: 'Portabilidade Empresarial', href: '/servicos/portabilidade-empresarial' },
      { label: 'Gestão de Linhas', href: '/servicos/gestao-de-linhas' },
      { label: 'Consultoria em Telefonia', href: '/servicos/consultoria-telefonia' },
      { label: 'Redução de Custos', href: '/servicos/reducao-de-custos' },
      { label: 'Telefonia Empresarial', href: '/servicos/telefonia-empresarial' },
      { label: 'Internet Dedicada', href: '/servicos/internet-dedicada' },
      { label: 'Link Corporativo', href: '/servicos/link-corporativo' },
      { label: 'Backup de Internet', href: '/servicos/backup-de-internet' },
      { label: 'Wi-Fi Empresarial', href: '/servicos/wifi-empresarial' },
    ],
  },
  { label: 'Calculadora', href: '/calculadora-de-economia' },
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Perguntas', href: '/perguntas' },
  { label: 'Central do Gestor', href: '/central-do-gestor' },
  { label: 'Cases', href: '/cases-de-sucesso' },
  { label: 'Contato', href: '/contato' },
] as const;

/** Contato de RH (Trabalhe Conosco) — Alessandra RH. */
export const RH = {
  name: 'Alessandra RH',
  whatsappDigits: '5521987681233',
  whatsappDisplay: '(21) 98768-1233',
  message:
    'Olá Alessandra! Encontrei a vaga no site da Fourlink Empresas e gostaria de ' +
    'deixar meu currículo e contato para o processo seletivo.',
  slaText: 'Deixe seu currículo e contato — respondemos em até 24 horas.',
} as const;

/** Catálogo de serviços — também alimenta o schema.org e a home. */
export const SERVICES = [
  {
    slug: 'chips-corporativos',
    title: 'Chips Corporativos',
    short: 'Planos de chip empresarial com voz e dados, sem fidelidade, para CNPJ e MEI.',
    icon: 'chip',
  },
  {
    slug: 'internet-fibra-empresarial',
    title: 'Internet Fibra Empresarial',
    short: 'Fibra dedicada ao seu negócio, com estabilidade para operações críticas.',
    icon: 'fiber',
  },
  {
    slug: 'portabilidade-empresarial',
    title: 'Portabilidade Empresarial',
    short: 'Migre suas linhas sem perder os números e com condições corporativas.',
    icon: 'port',
  },
  {
    slug: 'gestao-de-linhas',
    title: 'Gestão de Linhas Corporativas',
    short: 'Controle, relatórios e gestão centralizada de todas as linhas da empresa.',
    icon: 'manage',
  },
  {
    slug: 'consultoria-telefonia',
    title: 'Consultoria em Telefonia',
    short: 'Análise técnica do seu perfil de consumo para o plano certo, sem desperdício.',
    icon: 'consult',
  },
  {
    slug: 'reducao-de-custos',
    title: 'Redução de Custos em Telefonia',
    short: 'Auditoria da fatura para eliminar o que sua empresa paga e não usa.',
    icon: 'savings',
  },
  {
    slug: 'telefonia-empresarial',
    title: 'Telefonia Empresarial',
    short: 'Voz corporativa com ligações ilimitadas e gestão centralizada das linhas.',
    icon: 'consult',
  },
  {
    slug: 'internet-dedicada',
    title: 'Internet Dedicada',
    short: 'Link exclusivo com banda garantida para operações que não podem parar.',
    icon: 'fiber',
  },
  {
    slug: 'link-corporativo',
    title: 'Link Corporativo',
    short: 'Conexão corporativa de alta disponibilidade para matriz e filiais.',
    icon: 'fiber',
  },
  {
    slug: 'backup-de-internet',
    title: 'Backup de Internet',
    short: 'Conexão de reserva que assume automaticamente se a principal cair.',
    icon: 'manage',
  },
  {
    slug: 'wifi-empresarial',
    title: 'Wi-Fi Empresarial',
    short: 'Rede sem fio estável para operação e visitantes, com redes separadas.',
    icon: 'fiber',
  },
] as const;

/** Equipe Fourlink — pessoas reais reforçam E-E-A-T e confiança para GEO. */
export const TEAM = [
  {
    name: 'Alessandra',
    role: 'Atendimento e Relacionamento 24h',
    tag: 'Atendimento',
    note: 'Primeiro contato da Fourlink com as empresas, disponível todos os dias para tirar dúvidas e encaminhar a análise.',
    img: 'alessandra-real',
  },
  {
    name: 'Tayná Freitas',
    role: 'Gerente Comercial',
    tag: 'Comercial B2B',
    note: 'Especialista em atendimento B2B e na estruturação de propostas corporativas sob medida.',
    img: 'tayna',
  },
  {
    name: 'Carla Letícia',
    role: 'Supervisora de Internet Fibra',
    tag: 'Internet Fibra',
    note: 'Responsável pela qualidade do atendimento e pela entrega da fibra empresarial.',
    img: 'carla',
  },
  {
    name: 'Mateus Silva',
    role: 'Jovem Aprendiz',
    tag: 'Formação',
    note: 'Em formação no programa de novos talentos da Fourlink.',
    img: 'mateus',
  },
  {
    name: 'Lucas',
    role: 'Jovem Aprendiz',
    tag: 'Formação',
    note: 'Em formação no programa de novos talentos da Fourlink.',
    img: 'lucas',
  },
] as const;

/** Planos de chip empresarial (CNPJ/MEI). Fonte única para a tabela de planos. */
export const PLANS_CHIPS = [
  { gb: '6GB', price: '29,99', bonus: '1GB + 5GB bônus' },
  { gb: '12GB', price: '39,99', bonus: '2GB + 10GB bônus' },
  { gb: '30GB', price: '52,99', bonus: '10GB + 20GB bônus', popular: true },
  { gb: '40GB', price: '64,99', bonus: '20GB + 20GB bônus' },
  { gb: '50GB', price: '69,99', bonus: '30GB + 20GB bônus' },
  { gb: '80GB', price: '79,99', bonus: '30GB + 50GB bônus' },
  { gb: '100GB', price: '99,99', bonus: '50GB + 50GB bônus' },
] as const;

export const CHIPS_FEATURES = [
  'Ligações ilimitadas',
  'WhatsApp e redes sociais ilimitados',
  'Sem taxas e sem fidelidade',
  'Para CNPJ e MEI',
  'Cobertura nacional',
];

/** Planos de internet fibra empresarial. */
export const PLANS_FIBRA = [
  {
    nome: '700 Mega',
    price: '109,99',
    download: '700 Mega de download',
    upload: '350 Mbps de upload',
    destaque: 'Instalação grátis em até 48h úteis',
  },
  {
    nome: 'Ultra 1 Giga',
    price: '129,99',
    download: '1 Giga de download',
    upload: '500 Mbps de upload',
    destaque: 'Soluções de alta performance para empresas',
    popular: true,
  },
];

/** Regras permanentes — guardrails de conteúdo do projeto. */
export const CONTENT_RULES = {
  neverMentionCarriers: true,
  economyPhrase: ECONOMY_SHORT,
  positioning: 'especialista em telefonia corporativa e internet empresarial',
} as const;

/**
 * Cases de Sucesso / Prova Social — empresas reais atendidas pela Fourlink.
 * Fonte única. Para acrescentar um novo case, basta adicionar um objeto aqui.
 * O depoimento só aparece no site quando o campo `depoimento` estiver preenchido.
 */
export const CASES = [
  {
    slug: 'comprec',
    empresa: 'Comprec',
    instagram: 'https://www.instagram.com/comprecativos?igsh=MWNrdmQ5eGZ3YTM0Zg==',
    instagramHandle: '@comprecativos',
    vendedora: 'Gabriele',
    vendedoraTag: 'Destaque do mês · Vendas B2B',
    tema: 'Redução de custos em telefonia corporativa',
    resumo:
      'A Comprec, empresa cliente da Fourlink Empresas, buscava reduzir os custos com as linhas ' +
      'corporativas da equipe. O atendimento foi conduzido pela vendedora Gabriele, com análise do ' +
      'perfil de consumo e migração para planos empresariais sob medida.',
    resultado:
      'Redução dos custos de telefonia corporativa, com ' + ECONOMY_SHORT + '.',
    // ↓↓↓ COLE AQUI O DEPOIMENTO REAL DA COMPREC (aparece no site só quando preenchido) ↓↓↓
    depoimento: '',
    depoimentoAutor: '',
    // ↑↑↑
    fotoEquipe: 'comprec-equipe',
    fotoEquipeAlt: 'Equipe da Comprec comemorando os resultados no escritório',
    arteVendedora: 'gabriele-destaque',
    video: 'comprec-bastidores',
  },
] as const;

export type CaseItem = (typeof CASES)[number];

export type NavItem = (typeof NAV)[number];
export type Service = (typeof SERVICES)[number];
