const links = [
  {
    titulo: "Defesa Civil Alerta",
    descricao: "Ferramenta de envio de alertas de emergência do Governo Federal, coordenada pela Defesa Civil Nacional e pela Anatel, utilizando a tecnologia Cell Broadcast para avisar e orientar as pessoas em localidades com risco iminente de desastres.",
    url: "https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil/defesa-civil-alerta",
    tema: 'alerta',
    subtema: "Defesa Civil Alerta",
    ministerio: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
    instituicao: "Secretaria Nacional de Proteção e Defesa Civil (Sedec)",
    assunto: "Ferramenta de envio de alertas de emergência do Governo Federal, coordenada pela Defesa Civil Nacional e pela Anatel, utilizando a tecnologia Cell Broadcast para avisar e orientar as pessoas em localidades com risco iminente de desastres."
  },
  {
    titulo: "TV 3.0 – nova geração da televisão digital",
    descricao: "Iniciativa conjunta entre governo, setor privado e academia para implantação da TV digital 3.0, com imagem em 4K/8K, áudio imersivo, interatividade, integração com internet e capacidade avançada para alertas de emergência. Permite sobreposição de mensagens, vídeos ao vivo, mapas interativos e interrupção de programação para emergências. Sistema previsto para início em 2025.",
    url: "https://www.gov.br/mcom/pt-br/assuntos/radio-e-tv-aberta/tv-30",
    tema: 'alerta',
    subtema: "TV 3.0 – nova geração da televisão digital",
    ministerio: "Ministério das Comunicações (MCom)",
    instituicao: "MCom / Fórum SBTVD",
    assunto: "Iniciativa conjunta entre governo, setor privado e academia para implantação da TV digital 3.0, com imagem em 4K/8K, áudio imersivo, interatividade, integração com internet e capacidade avançada para alertas de emergência. Permite sobreposição de mensagens, vídeos ao vivo, mapas interativos e interrupção de programação para emergências. Sistema previsto para início em 2025."
  },
  {
    titulo: "Sistema de Alerta de Eventos Críticos (SACE)",
    descricao: "Plataforma que reúne dados sobre secas, estiagens, inundações e outros eventos críticos com alertas e monitoramentos para apoio à defesa civil.",
    url: "https://www.sgb.gov.br/sace/",
    tema: 'alerta',
    subtema: "Sistema de Alerta de Eventos Críticos (SACE)",
    ministerio: "Ministério de Minas e Energia (MME)",
    instituicao: "Serviço Geológico do Brasil (SGB)",
    assunto: "Plataforma que reúne dados sobre secas, estiagens, inundações e outros eventos críticos com alertas e monitoramentos para apoio à defesa civil."
  },
  {
    titulo: "Painel de alertas",
    descricao: "Plataforma de consulta aos alertas vigentes emitidos pelo CEMADEN, com mapa interativo e atualização em tempo real.",
    url: "https://painelalertas.cemaden.gov.br/",
    tema: 'alerta',
    subtema: "Painel de alertas",
    ministerio: "Ministério da Ciência, Tecnologia e Inovação (MCTI)",
    instituicao: "Centro Nacional de Monitoramento e Alertas de Desastres Naturais (CEMADEN)",
    assunto: "Plataforma de consulta aos alertas vigentes emitidos pelo CEMADEN, com mapa interativo e atualização em tempo real."
  },
  {
    titulo: "Mapa interativo",
    descricao: "Ferramenta geoespacial que permite visualizar riscos, alertas, dados pluviométricos e hidrológicos, além de vulnerabilidades.",
    url: "https://mapainterativo.cemaden.gov.br/",
    tema: 'alerta',
    subtema: "Mapa interativo",
    ministerio: "Ministério da Ciência, Tecnologia e Inovação (MCTI)",
    instituicao: "Centro Nacional de Monitoramento e Alertas de Desastres Naturais (CEMADEN)",
    assunto: "Ferramenta geoespacial que permite visualizar riscos, alertas, dados pluviométricos e hidrológicos, além de vulnerabilidades."
  },
  {
    titulo: "Alertas Meteorológicos",
    descricao: "Plataforma com alertas em tempo real sobre chuvas, ventos, geadas e calor extremo.",
    url: "https://alertas2.inmet.gov.br/",
    tema: 'alerta',
    subtema: "Alertas Meteorológicos",
    ministerio: "MAPA",
    instituicao: "INMET",
    assunto: "Plataforma com alertas em tempo real sobre chuvas, ventos, geadas e calor extremo."
  },
  {
    titulo: "Gestão de riscos e desastres no Brasil",
    descricao: "Órgão central do Sistema Nacional de Proteção e Defesa Civil (Sinpdec), responsável por coordenar a gestão de riscos e de desastres no país. Atua nas fases de prevenção, mitigação, preparação, resposta e recuperação.",
    url: "https://www.gov.br/mdr/pt-br/centrais-de-conteudo/publicacoes/protecao-e-defesa-civil-sedec",
    tema: 'capacitacao',
    subtema: "Gestão de riscos e desastres no Brasil",
    ministerio: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
    instituicao: "Secretaria Nacional de Proteção e Defesa Civil (Sedec)",
    assunto: "Órgão central do Sistema Nacional de Proteção e Defesa Civil (Sinpdec), responsável por coordenar a gestão de riscos e de desastres no país. Atua nas fases de prevenção, mitigação, preparação, resposta e recuperação."
  },
  {
    titulo: "Plano Nacional de Proteção e Defesa Civil",
    descricao: "Instrumento norteador da implementação da Política Nacional de Proteção e Defesa Civil, estabelecendo diretrizes, objetivos, metas e indicadores voltados para a gestão do risco de desastres.",
    url: "https://www.gov.br/mdr/pt-br/noticias/saiba-tudo-sobre-o-plano-nacional-de-protecao-e-defesa-civil",
    tema: 'capacitacao',
    subtema: "Plano Nacional de Proteção e Defesa Civil",
    ministerio: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
    instituicao: "Secretaria Nacional de Proteção e Defesa Civil (Sedec)",
    assunto: "Instrumento norteador da implementação da Política Nacional de Proteção e Defesa Civil, estabelecendo diretrizes, objetivos, metas e indicadores voltados para a gestão do risco de desastres."
  },
  {
    titulo: "Curso Básico de Vigilância (CBVD)",
    descricao: "Oferta de turmas do Curso Básico de Vigilância em Saúde dos Riscos Associados aos Desastres.",
    url: "https://educacao.cemaden.gov.br/midiateca/programa-vigidesastres/",
    tema: 'capacitacao',
    subtema: "Curso Básico de Vigilância (CBVD)",
    ministerio: "Ministério da Saúde",
    instituicao: "Programa Vigidesastres",
    assunto: "Oferta de turmas do Curso Básico de Vigilância em Saúde dos Riscos Associados aos Desastres."
  },
  {
    titulo: "Capacitação em Defesa Civil",
    descricao: "Ambiente virtual com cursos gratuitos, apostilas e vídeos para agentes públicos e comunidade. Parte do Plano de Capacitação Continuada em Defesa Civil.",
    url: "https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil/capacitacoes",
    tema: 'capacitacao',
    subtema: "Capacitação em Defesa Civil",
    ministerio: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
    instituicao: "Secretaria Nacional de Proteção e Defesa Civil (Sedec)",
    assunto: "Ambiente virtual com cursos gratuitos, apostilas e vídeos para agentes públicos e comunidade. Parte do Plano de Capacitação Continuada em Defesa Civil."
  },
  {
    titulo: "Capacitação em Defesa Civil",
    descricao: "Acervo digital da área de Defesa Civil da CNM com publicações, manuais, notas técnicas, cartilhas e legislações sobre gestão de riscos e desastres, voltado para gestores municipais.",
    url: "https://cnm.org.br/areas_tecnicas/defesa-civil/biblioteca",
    tema: 'capacitacao',
    subtema: "Capacitação em Defesa Civil",
    ministerio: "Confederação Nacional de Municípios (CNM)",
    instituicao: "Área de Defesa Civil ",
    assunto: "Acervo digital da área de Defesa Civil da CNM com publicações, manuais, notas técnicas, cartilhas e legislações sobre gestão de riscos e desastres, voltado para gestores municipais."
  },
  {
    titulo: "Plano de Capacitação Continuada 2024–2028",
    descricao: "Estratégia de capacitação nacional com parceria de órgãos federais e da Escola Nacional de Administração Pública, oferecendo cursos gratuitos e online para agentes de proteção e defesa civil das três esferas de governo.",
    url: "https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil/capacitacoes/Plano_de_Capacitacao_2024_2028___Final.pdf",
    tema: 'capacitacao',
    subtema: "Plano de Capacitação Continuada 2024–2028",
    ministerio: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
    instituicao: "Secretaria Nacional de Proteção e Defesa Civil (Sedec)",
    assunto: "Estratégia de capacitação nacional com parceria de órgãos federais e da Escola Nacional de Administração Pública, oferecendo cursos gratuitos e online para agentes de proteção e defesa civil das três esferas de governo."
  },
  {
    titulo: "Banco de Boas Práticas em Proteção e Defesa Civil",
    descricao: "Repositório de boas práticas adotadas por coordenadorias municipais e estaduais, servindo de inspiração para outras defesas civis, com ações que resultaram em mudanças positivas e inovadoras na gestão de riscos e de desastres.",
    url: "https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil/boas-praticas",
    tema: 'capacitacao',
    subtema: "Banco de Boas Práticas em Proteção e Defesa Civil",
    ministerio: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
    instituicao: "Secretaria Nacional de Proteção e Defesa Civil (Sedec)",
    assunto: "Repositório de boas práticas adotadas por coordenadorias municipais e estaduais, servindo de inspiração para outras defesas civis, com ações que resultaram em mudanças positivas e inovadoras na gestão de riscos e de desastres."
  },
  {
    titulo: "Resposta a desastres com foco em animais",
    descricao: "Organização voluntária com mais de 80 integrantes, de diversas formações, que atua em resposta a desastres com foco na proteção e salvamento de animais (domésticos, domesticados, silvestres e de produção), sempre em coordenação com os órgãos oficiais. Destaque para a atuação no RS (2023-2024) com termo de cooperação com o governo estadual, além de ações em SP, SC, PI, Pantanal (MT) e Roraima (Yanomamis).",
    url: "https://gradbrasil.org.br/",
    tema: 'gerenciamento',
    subtema: "Resposta a desastres com foco em animais",
    ministerio: "Não se aplica (iniciativa da sociedade civil)",
    instituicao: "Grupo de Resposta a Animais em Desastres (GRAD)",
    assunto: "Organização voluntária com mais de 80 integrantes, de diversas formações, que atua em resposta a desastres com foco na proteção e salvamento de animais (domésticos, domesticados, silvestres e de produção), sempre em coordenação com os órgãos oficiais. Destaque para a atuação no RS (2023-2024) com termo de cooperação com o governo estadual, além de ações em SP, SC, PI, Pantanal (MT) e Roraima (Yanomamis)."
  },
  {
    titulo: "Apoio emergencial a municípios",
    descricao: "Em situações de emergência ou calamidade pública, como chuvas intensas, o MDS oferece: 1) cofinanciamento emergencial para abrigamento de desabrigados; 2) unificação do pagamento do Bolsa Família; e 3) Ação de Distribuição de Alimentos (ADA). Também disponibiliza orientações para que gestores municipais solicitem o auxílio de forma ágil.",
    url: "https://www.gov.br/mds/pt-br/noticias-e-conteudos/desenvolvimento-social/noticias-desenvolvimento-social/gestor-saiba-como-acessar-os-auxilios-emergenciais-do-mds-para-municipios-em-situacao-de-calamidade",
    tema: 'gerenciamento',
    subtema: "Apoio emergencial a municípios",
    ministerio: "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS)",
    instituicao: "MDS",
    assunto: "Em situações de emergência ou calamidade pública, como chuvas intensas, o MDS oferece: 1) cofinanciamento emergencial para abrigamento de desabrigados; 2) unificação do pagamento do Bolsa Família; e 3) Ação de Distribuição de Alimentos (ADA). Também disponibiliza orientações para que gestores municipais solicitem o auxílio de forma ágil."
  },
  {
    titulo: "Sistema Integrado de Informações sobre Desastres (S2ID)",
    descricao: "Ferramenta informatizada que permite o registro de ocorrências de desastres em todos os municípios, possibilitando ainda que municípios e estados solicitem o reconhecimento e recursos ao governo federal.",
    url: "https://s2id.mi.gov.br/",
    tema: 'gerenciamento',
    subtema: "Sistema Integrado de Informações sobre Desastres (S2ID)",
    ministerio: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
    instituicao: "Secretaria Nacional de Proteção e Defesa Civil (Sedec)",
    assunto: "Ferramenta informatizada que permite o registro de ocorrências de desastres em todos os municípios, possibilitando ainda que municípios e estados solicitem o reconhecimento e recursos ao governo federal."
  },
  {
    titulo: "Atlas Digital de Desastres no Brasil",
    descricao: "Ferramenta para análise e consulta das informações relacionadas a desastres no Brasil, com dados oficiais da Sedec/MIDR no âmbito municipal, permitindo pesquisas por estados, tipo de desastre e categoria de impacto.",
    url: "https://atlasdigital.mdr.gov.br/",
    tema: 'gerenciamento',
    subtema: "Atlas Digital de Desastres no Brasil",
    ministerio: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
    instituicao: "Secretaria Nacional de Proteção e Defesa Civil (Sedec)",
    assunto: "Ferramenta para análise e consulta das informações relacionadas a desastres no Brasil, com dados oficiais da Sedec/MIDR no âmbito municipal, permitindo pesquisas por estados, tipo de desastre e categoria de impacto."
  },
  {
    titulo: "Prevenção de desastres",
    descricao: "Portfólio de projetos e ações do SGB voltados à prevenção de desastres naturais, como movimentos de massa, inundações, estiagens e secas. Inclui ferramentas para análise de risco, suscetibilidade, monitoramento e alertas.",
    url: "https://www.sgb.gov.br/prevencao-de-desastres",
    tema: 'mapeamento',
    subtema: "Prevenção de desastres",
    ministerio: "Ministério de Minas e Energia (MME)",
    instituicao: "Serviço Geológico do Brasil (SGB)",
    assunto: "Portfólio de projetos e ações do SGB voltados à prevenção de desastres naturais, como movimentos de massa, inundações, estiagens e secas. Inclui ferramentas para análise de risco, suscetibilidade, monitoramento e alertas."
  },
  {
    titulo: "Visualização de dados de desastres",
    descricao: "Visualizador geográfico com dados interativos sobre áreas afetadas por desastres, riscos e suscetibilidades mapeadas, disponível via Geoportal do SGB.",
    url: "https://geoportal.sgb.gov.br/desastres/",
    tema: 'mapeamento',
    subtema: "Visualização de dados de desastres",
    ministerio: "Ministério de Minas e Energia (MME)",
    instituicao: "Serviço Geológico do Brasil (SGB)",
    assunto: "Visualizador geográfico com dados interativos sobre áreas afetadas por desastres, riscos e suscetibilidades mapeadas, disponível via Geoportal do SGB."
  },
  {
    titulo: "Cartografia de Risco Geológico",
    descricao: "Dashboard com informações georreferenciadas sobre risco geológico em diversas localidades brasileiras, com foco em prevenção e apoio à tomada de decisão.",
    url: "https://geoportal.sgb.gov.br/portal/apps/dashboards/c338199dee3a4d4bb0e43738b424a298",
    tema: 'mapeamento',
    subtema: "Cartografia de Risco Geológico",
    ministerio: "Ministério de Minas e Energia (MME)",
    instituicao: "Serviço Geológico do Brasil (SGB)",
    assunto: "Dashboard com informações georreferenciadas sobre risco geológico em diversas localidades brasileiras, com foco em prevenção e apoio à tomada de decisão."
  },
  {
    titulo: "Cartografia de Suscetibilidade",
    descricao: "Dashboard com dados sobre áreas suscetíveis a movimentos de massa e inundações, importante para planejamento urbano e ações de mitigação.",
    url: "https://geoportal.sgb.gov.br/portal/apps/dashboards/d55b875b15f6489e957fe9dd4ee5ee4b",
    tema: 'mapeamento',
    subtema: "Cartografia de Suscetibilidade",
    ministerio: "Ministério de Minas e Energia (MME)",
    instituicao: "Serviço Geológico do Brasil (SGB)",
    assunto: "Dashboard com dados sobre áreas suscetíveis a movimentos de massa e inundações, importante para planejamento urbano e ações de mitigação."
  },
  {
    titulo: "Manchas de Inundação",
    descricao: "Base de dados com delimitação de manchas de inundação históricas e estimativas, usada para planejamento e prevenção de desastres hidrológicos.",
    url: "https://www.sgb.gov.br/sace/index_manchas_inundacao.php",
    tema: 'mapeamento',
    subtema: "Manchas de Inundação",
    ministerio: "Ministério de Minas e Energia (MME)",
    instituicao: "Serviço Geológico do Brasil (SGB)",
    assunto: "Base de dados com delimitação de manchas de inundação históricas e estimativas, usada para planejamento e prevenção de desastres hidrológicos."
  },
  {
    titulo: "Monitoramento e apoio à resposta em desastres",
    descricao: "Atua com tecnologias de geoprocessamento, imagens orbitais, modelagem hidrometeorológica e comunicação em apoio à Defesa Civil e ações humanitárias em desastres. Destaque para a atuação no RS, com suporte à resposta e reconstrução. Opera ferramentas como o SipamHidro (previsão de cheias/estiagens) e o Painel do Fogo (monitoramento de incêndios florestais). Oferece conectividade e aplicativos móveis para operações em campo, inclusive em áreas remotas e sem internet.",
    url: "https://www.gov.br/censipam/pt-br",
    tema: 'monitoramento',
    subtema: "Monitoramento e apoio à resposta em desastres",
    ministerio: "Ministério da Defesa",
    instituicao: "Centro Gestor e Operacional do Sistema de Proteção da Amazônia (CENSIPAM)",
    assunto: "Atua com tecnologias de geoprocessamento, imagens orbitais, modelagem hidrometeorológica e comunicação em apoio à Defesa Civil e ações humanitárias em desastres. Destaque para a atuação no RS, com suporte à resposta e reconstrução. Opera ferramentas como o SipamHidro (previsão de cheias/estiagens) e o Painel do Fogo (monitoramento de incêndios florestais). Oferece conectividade e aplicativos móveis para operações em campo, inclusive em áreas remotas e sem internet."
  },
  {
    titulo: "Monitoramento de Secas e Estiagens",
    descricao: "Monitoramento contínuo de áreas afetadas por estiagens e secas, com base em dados hidroclimáticos e análises de vulnerabilidade.",
    url: "https://www.sgb.gov.br/sace/index_secas_estiagens.php",
    tema: 'monitoramento',
    subtema: "Monitoramento de Secas e Estiagens",
    ministerio: "Ministério de Minas e Energia (MME)",
    instituicao: "Serviço Geológico do Brasil (SGB)",
    assunto: "Monitoramento contínuo de áreas afetadas por estiagens e secas, com base em dados hidroclimáticos e análises de vulnerabilidade."
  },
  {
    titulo: "Monitoramentos Especiais de Eventos Críticos",
    descricao: "Página dedicada a análises e acompanhamento especial de eventos críticos em andamento ou com potencial impacto significativo.",
    url: "https://www.sgb.gov.br/sace/index_monitoramento_especial.php",
    tema: 'monitoramento',
    subtema: "Monitoramentos Especiais de Eventos Críticos",
    ministerio: "Ministério de Minas e Energia (MME)",
    instituicao: "Serviço Geológico do Brasil (SGB)",
    assunto: "Página dedicada a análises e acompanhamento especial de eventos críticos em andamento ou com potencial impacto significativo."
  },
  {
    titulo: "Monitoramento de riscos geo-hidrológicos",
    descricao: "Página com informações e ações relacionadas aos riscos geológicos e hidrológicos monitorados nacionalmente pelo CEMADEN.",
    url: "https://www.gov.br/cemaden/pt-br/assuntos/riscos-geo-hidrologicos/",
    tema: 'monitoramento',
    subtema: "Monitoramento de riscos geo-hidrológicos",
    ministerio: "Ministério da Ciência, Tecnologia e Inovação (MCTI)",
    instituicao: "Centro Nacional de Monitoramento e Alertas de Desastres Naturais (CEMADEN)",
    assunto: "Página com informações e ações relacionadas aos riscos geológicos e hidrológicos monitorados nacionalmente pelo CEMADEN."
  },
  {
    titulo: "Monitoramento em tempo real",
    descricao: "Acesso ao sistema de monitoramento contínuo de desastres, incluindo chuvas intensas, deslizamentos, inundações e outros eventos críticos.",
    url: "https://www.gov.br/cemaden/pt-br/assuntos/monitoramento",
    tema: 'monitoramento',
    subtema: "Monitoramento em tempo real",
    ministerio: "Ministério da Ciência, Tecnologia e Inovação (MCTI)",
    instituicao: "Centro Nacional de Monitoramento e Alertas de Desastres Naturais (CEMADEN)",
    assunto: "Acesso ao sistema de monitoramento contínuo de desastres, incluindo chuvas intensas, deslizamentos, inundações e outros eventos críticos."
  },
  {
    titulo: "Monitoramento de secas",
    descricao: "Plataforma de análise e acompanhamento das condições de seca em todo o território brasileiro, com base em múltiplos indicadores climáticos.",
    url: "https://mapasecas.cemaden.gov.br/",
    tema: 'monitoramento',
    subtema: "Monitoramento de secas",
    ministerio: "Ministério da Ciência, Tecnologia e Inovação (MCTI)",
    instituicao: "Centro Nacional de Monitoramento e Alertas de Desastres Naturais (CEMADEN)",
    assunto: "Plataforma de análise e acompanhamento das condições de seca em todo o território brasileiro, com base em múltiplos indicadores climáticos."
  },
  {
    titulo: "Monitoramento de risco de incêndios florestais",
    descricao: "Produto especializado com estimativa e monitoramento de áreas com risco de incêndios florestais, considerando variáveis meteorológicas e ambientais.",
    url: "https://produtos.cemaden.gov.br/fogo/",
    tema: 'monitoramento',
    subtema: "Monitoramento de risco de incêndios florestais",
    ministerio: "Ministério da Ciência, Tecnologia e Inovação (MCTI)",
    instituicao: "Centro Nacional de Monitoramento e Alertas de Desastres Naturais (CEMADEN)",
    assunto: "Produto especializado com estimativa e monitoramento de áreas com risco de incêndios florestais, considerando variáveis meteorológicas e ambientais."
  },
  {
    titulo: "Plataforma Georisk",
    descricao: "Plataforma dedicada à visualização e análise de dados de riscos geológicos e hidrológicos em interface moderna e interativa.",
    url: "https://georisk.cemaden.gov.br/",
    tema: 'monitoramento',
    subtema: "Plataforma Georisk",
    ministerio: "Ministério da Ciência, Tecnologia e Inovação (MCTI)",
    instituicao: "Centro Nacional de Monitoramento e Alertas de Desastres Naturais (CEMADEN)",
    assunto: "Plataforma dedicada à visualização e análise de dados de riscos geológicos e hidrológicos em interface moderna e interativa."
  },
  {
    titulo: "Previsão de tempo e estudos climáticos",
    descricao: "Portal com informações atualizadas sobre previsão do tempo, monitoramento climático, modelagem atmosférica, satélites meteorológicos e emissão de avisos especiais.",
    url: "https://www.cptec.inpe.br/",
    tema: 'previsao',
    subtema: "Previsão de tempo e estudos climáticos",
    ministerio: "Ministério da Ciência, Tecnologia e Inovação (MCTI)",
    instituicao: "CPTEC/INPE",
    assunto: "Portal com informações atualizadas sobre previsão do tempo, monitoramento climático, modelagem atmosférica, satélites meteorológicos e emissão de avisos especiais."
  },
];

function filtrarLinks() {
  
    let filtroTema = "todos";
    const selectEl = document.getElementById("temaLink");
    if (selectEl) filtroTema = selectEl.value.toLowerCase();

    const container = document.getElementById("containerLinks");
  container.innerHTML = "";

    const inputFiltro = document.getElementById("filtro-palavra");
    const container = document.querySelector(".temas-container");
  
  const filtrados = links.filter(link => {
    const temaOk = filtroTema === "todos" || link.tema === filtroTema;
    
    return temaOk 
  });

  filtrados.forEach(link => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3 style="text-align:center;">${link.subtema}</h3>
      <p style="text-align:center;"><strong>${link.instituicao}</strong></p>
      <p style="text-align:center; font-size:12px; color:#666;">${link.ministerio}</p>
      <p style="text-align:center;">${link.assunto}</p>
      <p style="text-align:center;"><a href="${link.url}" target="_blank">Acessar link</a></p>
        `;
    
  // Exibir todos os cards ao carregar a página
   function renderizarTodos() {
     container.innerHTML = "";
     temas.forEach(tema => {
        const card = document.createElement("div");
        card.className = "tema-card";
        card.setAttribute("data-tooltip", tema.descricao);
        card.innerHTML = `
      <div class="icon">${tema.icon}</div>
      <div class="titulo">${tema.titulo}</div>
    `;
renderizarTodos();

  inputFiltro.addEventListener("input", function () {
    const termo = this.value.toLowerCase().trim();
    container.innerHTML = "";

    const resultados = temas.filter(tema => {
      const textoCompleto = `${tema.titulo} ${tema.descricao} ${tema.palavrasChave.join(" ")}`.toLowerCase();
      return textoCompleto.includes(termo);
  });

    if (resultados.length === 0) {
      container.innerHTML = "<p style='text-align:center;'>Nenhum resultado encontrado.</p>";
    } else {
      resultados.forEach(tema => {
        const card = document.createElement("div");
        card.className = "tema-card";
        card.setAttribute("data-tooltip", tema.descricao);
        card.innerHTML = `
          <div class="icon">${tema.icon}</div>
          <div class="titulo">${tema.titulo}</div>
      `;
      container.appendChild(card);
  });
}

    
window.onload = filtrarLinks;
window.onload = renderizarTodos;
