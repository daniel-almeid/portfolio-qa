export type Categoria = 'e2e' | 'api' | 'manual';
export type Projeto = { titulo: string; status: string; descricao: string; tags: string[]; snippet: string; repo: string; categoria: Categoria };

export const perfil = {
  nome: 'Daniel Almeida',
  email: 'danielandrade_2001@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/daniel-almeida-16b94a231/',
  github: 'https://github.com/daniel-almeid',
  local: 'Nova Iguaçu, RJ',
};

export const stats = [
  { valor: '6', rotulo: 'projetos de QA' },
  { valor: '3', rotulo: 'camadas de teste' },
  { valor: 'QA desde 2025', rotulo: 'na FloripaBit' },
  { valor: 'EN · ES', rotulo: 'nível profissional' },
];

export const execucao = [
  { tipo: 'm', texto: '$ npx playwright test' },
  { tipo: 'p', texto: '✓ login › credenciais válidas        1.2s' },
  { tipo: 'p', texto: '✓ login › usuário bloqueado          0.8s' },
  { tipo: 'p', texto: '✓ carrinho › adiciona produto        0.9s' },
  { tipo: 'f', texto: '✗ checkout › CEP vazio aceito → BUG-001' },
  { tipo: 'p', texto: '✓ mobile › sem rolagem horizontal    0.6s' },
  { tipo: 'm', texto: '5 testes · 4 passaram · 1 bug reportado' },
] as const;

export const camadas: { id: Categoria; titulo: string; apoio: string }[] = [
  { id: 'e2e', titulo: 'E2E e mobile', apoio: 'Playwright' },
  { id: 'api', titulo: 'API e performance', apoio: 'Cypress · k6' },
  { id: 'manual', titulo: 'Processo e exploratório', apoio: 'Jira · Confluence · casos de teste' },
];

export const projetos: Projeto[] = [
  { categoria: 'e2e', repo: 'qa-playwright-saucedemo', titulo: 'E2E com Playwright', status: '✓ passing · CI', descricao: 'Login, carrinho e checkout do SauceDemo com Page Object Model, pipeline no GitHub Actions e relatório HTML.', tags: ['Playwright', 'TypeScript', 'POM'], snippet: "await login.login('locked_out_user', 'secret_sauce');\nawait login.expectError('locked out');" },
  { categoria: 'api', repo: 'qa-cypress-api-jsonplaceholder', titulo: 'API com Cypress', status: '✓ passing', descricao: 'Status, contrato, cenários negativos, filtros e tempo de resposta de uma API REST pública.', tags: ['Cypress', 'TypeScript', 'REST'], snippet: "cy.request({ url: '/posts/9999', failOnStatusCode: false })\n  .its('status').should('eq', 404);" },
  { categoria: 'api', repo: 'qa-k6-performance', titulo: 'Performance com k6', status: '✓ thresholds', descricao: 'Smoke e load test com p95 e taxa de erro como critério de aceite do pipeline.', tags: ['k6', 'Carga', 'Thresholds'], snippet: "thresholds: {\n  http_req_duration: ['p(95)<1000'],\n  http_req_failed: ['rate<0.02'],\n}" },
  { categoria: 'e2e', repo: 'qa-mobile-web-playwright', titulo: 'Mobile web', status: '✓ 3 dispositivos', descricao: 'Responsividade e toque em iPhone, Pixel e iPad, incluindo orientação paisagem.', tags: ['Playwright', 'Mobile', 'Responsivo'], snippet: "await page.locator('#react-burger-menu-btn').tap();\nawait expect(logout).toBeVisible();" },
  { categoria: 'manual', repo: 'qa-process-jira-confluence', titulo: 'Jira e Confluence', status: '✓ documentado', descricao: 'Fluxo de bug com JQL, modelo de estratégia de teste e guia de análise de logs.', tags: ['Jira', 'Confluence', 'Logs'], snippet: 'project = APP AND issuetype = Bug\nAND status = Reopened' },
  { categoria: 'manual', repo: 'qa-manual-test-docs', titulo: 'Teste manual', status: '✓ documentado', descricao: 'Plano de teste, 10 casos priorizados e relatório de bug no formato de times ágeis.', tags: ['Plano de teste', 'Exploratório', 'Bug report'], snippet: 'CT-08 | Checkout sem nome\n→ "First Name is required" | Média' },
];

export const trajetoria = [
  { periodo: 'dez 2022 → dez 2024', titulo: 'Enel Green Power · Estagiário HSEQ', texto: 'Automação de processos com Power BI, Excel, Power Automate e Power Apps. Rotinas que levavam dias passaram a rodar em minutos.', atual: false },
  { periodo: 'jan 2025 → atual', titulo: 'FloripaBit · QA Júnior', texto: 'Testes automatizados com Playwright, validação manual, suíte de regressão e testes exploratórios para achar falhas críticas antes da produção.', atual: true },
  { periodo: 'jan 2025 → atual', titulo: 'Data Life · Analista de dados (freelance)', texto: 'Dashboards em Power BI e tratamento de dados no Excel para clientes.', atual: true },
];

export const skills = [
  { nome: 'Playwright', destaque: true }, { nome: 'Cypress', destaque: true }, { nome: 'k6', destaque: true }, { nome: 'TypeScript', destaque: true },
  { nome: 'JavaScript' }, { nome: 'React' }, { nome: 'Next.js' }, { nome: 'React Native' }, { nome: 'Svelte' }, { nome: 'Jira' }, { nome: 'Confluence' }, { nome: 'Trello' },
  { nome: 'CI/CD' }, { nome: 'Logs' }, { nome: 'Git · GitHub · GitLab' }, { nome: 'Power BI' }, { nome: 'Excel' }, { nome: 'Power Automate' },
];

export const certificacoes = [
  { area: 'QA', nome: 'Formação Carreira QA: processos e automação de testes' },
  { area: 'Web e mobile', nome: 'Formação Desenvolva aplicações Web e Mobile com React e React Native' },
  { area: 'Mobile', nome: 'React Native: Criando um app' },
  { area: 'Mobile', nome: 'Desenvolva seu primeiro app com React Native' },
  { area: 'Dados', nome: 'Microsoft Excel Avançado 2016' },
];
