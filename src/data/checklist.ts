export type ChecklistItemData = {
  id: string;
  label: string;
};

export type ChecklistSectionData = {
  id: string;
  index: string;
  title: string;
  support?: string;
  items: ChecklistItemData[];
  objective?: string;
};

export type RoadmapPhaseData = {
  id: string;
  phase: string;
  period: string;
  title: string;
  items: ChecklistItemData[];
};

const item = (id: string, label: string): ChecklistItemData => ({ id, label });

export const sections: ChecklistSectionData[] = [
  {
    id: "experiencia",
    index: "01",
    title: "Experiência de Compra",
    support: "Mais rapidez, relevância e facilidade para o cliente B2B.",
    items: [
      item("exp-1", "Página inicial personalizada por segmento"),
      item("exp-2", "Vitrines para Restaurantes"),
      item("exp-3", "Vitrines para Supermercados"),
      item("exp-4", "Vitrines para Hotéis"),
      item("exp-5", "Vitrines para Hospitais"),
      item("exp-6", "Busca inteligente"),
      item("exp-7", "Mais vendidos por perfil"),
      item("exp-8", "Recomendações de produtos"),
      item("exp-9", "Fotos e vídeos profissionais"),
      item("exp-10", "Estoque em tempo real"),
    ],
    objective: "Tornar a compra mais rápida, relevante e intuitiva.",
  },
  {
    id: "recorrencia",
    index: "02",
    title: "Recorrência e Inteligência Comercial",
    support: "Comportamento de compra convertido em novos pedidos.",
    items: [
      item("rec-1", "Histórico de compras"),
      item("rec-2", "Frequência de compra por item"),
      item("rec-3", "Régua automática de recompra"),
      item("rec-4", "Sugestão de repetição de pedido"),
      item("rec-5", "Produtos que o cliente deixou de comprar"),
      item("rec-6", "Recomendações automáticas"),
      item("rec-7", "Sugestões de produtos complementares"),
    ],
    objective: "Transformar comportamento de compra em novos pedidos.",
  },
  {
    id: "crm",
    index: "03",
    title: "CRM + Equipe Comercial",
    support: "O digital trabalhando a favor da carteira de cada vendedor.",
    items: [
      item("crm-1", "Painel por carteira de clientes"),
      item("crm-2", "Alertas de carrinho abandonado"),
      item("crm-3", "Alertas de clientes inativos"),
      item("crm-4", "Orçamentos integrados"),
      item("crm-5", "Lista diária de oportunidades"),
      item("crm-6", "Integração entre vendedor e e-commerce"),
    ],
    objective: "Fazer o digital gerar oportunidades para o time comercial.",
  },
  {
    id: "preco",
    index: "04",
    title: "Preço, Promoções e Fidelidade",
    support: "Crescimento com controle de margem e disciplina comercial.",
    items: [
      item("pre-1", "Margem por produto"),
      item("pre-2", "Giro por categoria"),
      item("pre-3", "Elasticidade de preço"),
      item("pre-4", "Alertas de baixa margem"),
      item("pre-5", "Campanhas de volume"),
      item("pre-6", "Campanhas sazonais"),
      item("pre-7", "Complete sua carga"),
      item("pre-8", "Descontos progressivos"),
      item("pre-9", "Benefícios para clientes recorrentes"),
      item("pre-10", "Clube de fidelidade B2B"),
    ],
    objective: "Vender mais sem perder controle de margem.",
  },
  {
    id: "grandes-contas",
    index: "05",
    title: "Grandes Contas",
    support: "Tratamento dedicado para os clientes estratégicos.",
    items: [
      item("gc-1", "Tabela personalizada"),
      item("gc-2", "Condições comerciais negociadas"),
      item("gc-3", "Limite de crédito"),
      item("gc-4", "Gestor dedicado"),
      item("gc-5", "Calendário promocional"),
      item("gc-6", "Ambiente exclusivo para contas estratégicas"),
    ],
    objective: "Aumentar previsibilidade, relacionamento e rentabilidade.",
  },
  {
    id: "operacao",
    index: "06",
    title: "Operação Integrada",
    support: "Todos os sistemas falando a mesma língua, em tempo real.",
    items: [
      item("ope-1", "ERP conectado"),
      item("ope-2", "Disponibilidade de estoque"),
      item("ope-3", "Quantidade disponível"),
      item("ope-4", "Previsão de reposição"),
      item("ope-5", "Substituição de produtos"),
      item("ope-6", "Financeiro"),
      item("ope-7", "Logística"),
      item("ope-8", "Suporte"),
      item("ope-9", "CRM"),
      item("ope-10", "BI"),
      item("ope-11", "IA"),
    ],
  },
  {
    id: "dashboard",
    index: "07",
    title: "Dashboard Executivo",
    support: "Leitura executiva do canal digital, do faturamento à ação.",
    items: [
      item("dsh-1", "Faturamento digital"),
      item("dsh-2", "Faturamento por cidade e estado"),
      item("dsh-3", "Margem por categoria"),
      item("dsh-4", "Ticket médio"),
      item("dsh-5", "Itens por pedido"),
      item("dsh-6", "Clientes ativos e inativos"),
      item("dsh-7", "Taxa de recompra"),
      item("dsh-8", "Carrinhos abandonados"),
      item("dsh-9", "Produtos sem giro"),
      item("dsh-10", "Ruptura"),
      item("dsh-11", "Vendas por vendedor"),
      item("dsh-12", "ROI de campanhas"),
    ],
  },
];

export const roadmap: RoadmapPhaseData[] = [
  {
    id: "fase-1",
    phase: "Fase 01",
    period: "0 a 30 dias",
    title: "Fundação Comercial",
    items: [
      item("f1-1", "Reformular banners"),
      item("f1-2", "Padronizar fotos"),
      item("f1-3", "Criar vitrines segmentadas"),
      item("f1-4", "Implantar busca inteligente"),
      item("f1-5", "Definir KPIs"),
    ],
  },
  {
    id: "fase-2",
    phase: "Fase 02",
    period: "31 a 60 dias",
    title: "Integração e Recorrência",
    items: [
      item("f2-1", "Integrar CRM e vendedores"),
      item("f2-2", "Ativar carrinho abandonado"),
      item("f2-3", "Ativar clientes inativos"),
      item("f2-4", "Criar recomendações"),
      item("f2-5", "Implantar fidelidade"),
    ],
  },
  {
    id: "fase-3",
    phase: "Fase 03",
    period: "61 a 90 dias",
    title: "Escala e Inteligência",
    items: [
      item("f3-1", "Implantar dashboards completos"),
      item("f3-2", "Ativar IA comercial"),
      item("f3-3", "Criar área de grandes contas"),
      item("f3-4", "Estruturar campanhas sazonais"),
      item("f3-5", "Preparar evolução para aplicativo"),
    ],
  },
];

export const results: string[] = [
  "Mais recorrência",
  "Maior ticket médio",
  "Maior mix por pedido",
  "Mais produtividade comercial",
  "Menos ruptura e pedidos cortados",
  "Melhor margem",
  "Mais inteligência de dados",
  "Maior participação do digital no faturamento",
];

export const pillars = [
  { id: "experiencia", label: "Experiência de Compra" },
  { id: "recorrencia", label: "Recorrência" },
  { id: "crm", label: "CRM + Comercial" },
  { id: "preco", label: "Preço e Promoções" },
  { id: "grandes-contas", label: "Grandes Contas" },
  { id: "operacao", label: "Operação" },
  { id: "dashboard", label: "Dashboard" },
  { id: "roadmap", label: "Roadmap" },
];

export const allItemIds: string[] = [
  ...sections.flatMap((s) => s.items.map((i) => i.id)),
  ...roadmap.flatMap((p) => p.items.map((i) => i.id)),
];
