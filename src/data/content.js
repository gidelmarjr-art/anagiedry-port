import { COLORS } from "../constants/colors.js";

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export const MARQUEE_PILLARS = [
  "Ciência",
  "Individualização",
  "Acompanhamento contínuo",
  "Sem culpa no prato",
];

export const MARQUEE_CTA = ["Agende sua consulta", "Comece hoje"];

export const PILLARS = [
  {
    title: "Evidência",
    color: COLORS.forest,
    text: "Cada orientação parte de ciência atualizada, não de tendência de rede social.",
  },
  {
    title: "Individualização",
    color: COLORS.berry,
    text: "Sua rotina, seu paladar e seu histórico definem o plano — nunca uma fórmula pronta.",
  },
  {
    title: "Acompanhamento",
    color: COLORS.gold,
    text: "O cuidado continua entre as consultas, ajustando a rota conforme a vida acontece.",
  },
  {
    title: "Sem restrição vazia",
    color: COLORS.forestLight,
    text: "Comer com prazer faz parte do plano. Regra sem propósito não constrói hábito.",
  },
];

export const SERVICES = [
  {
    key: "avaliacao",
    title: "Avaliação Nutricional",
    desc: "Ponto de partida completo: anamnese, histórico de saúde, rotina alimentar e definição de objetivos.",
    rows: [
      ["Formato", "Presencial ou online"],
      ["Duração", "Consulta única"],
      ["Entrega", "Plano inicial + orientações"],
    ],
  },
  {
    key: "continuo",
    title: "Acompanhamento Contínuo",
    desc: "Consultas de retorno com ajustes periódicos, suporte entre sessões e evolução acompanhada de perto.",
    rows: [
      ["Formato", "Presencial ou online"],
      ["Duração", "Ciclos mensais"],
      ["Entrega", "Ajustes + suporte contínuo"],
    ],
  },
  {
    key: "especializado",
    title: "Cuidado Especializado",
    desc: "Atenção individualizada para relação com a comida, restrições clínicas ou objetivos específicos de saúde.",
    rows: [
      ["Formato", "Presencial ou online"],
      ["Duração", "Sob avaliação"],
      ["Entrega", "Plano clínico dedicado"],
    ],
  },
];

// Placeholders — substitua pelos depoimentos reais das pacientes.
export const TESTIMONIALS = [
  { name: "M. T.", role: "Paciente", text: "Foi a primeira vez que senti um plano se adaptando a mim, e não o contrário." },
  { name: "R. S.", role: "Paciente", text: "O acompanhamento entre as consultas fez toda diferença pra eu não desistir no meio do caminho." },
  { name: "J. A.", role: "Paciente", text: "Aprendi a comer com mais liberdade, sem a culpa que eu carregava antes." },
];

export const FAQ_ITEMS = [
  {
    q: "O plano alimentar é restritivo?",
    a: "Não. O foco é construir uma rotina alimentar sustentável, adaptada ao seu paladar e à sua rotina — sem listas de proibidos ou fórmulas genéricas.",
  },
  {
    q: "O acompanhamento é só presencial?",
    a: "As consultas acontecem no formato presencial ou online, conforme sua preferência e disponibilidade.",
  },
  {
    q: "Preciso já saber meu objetivo antes da primeira consulta?",
    a: "Não. A primeira consulta serve justamente para entender seu histórico, sua rotina e construir juntas os objetivos possíveis.",
  },
  {
    q: "Como funciona o suporte entre as consultas?",
    a: "O acompanhamento contínuo inclui orientação entre as sessões, para ajustar o plano conforme a vida acontece.",
  },
];
