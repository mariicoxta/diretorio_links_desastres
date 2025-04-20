
const links = [
  {
    titulo: "S2iD - Sistema Integrado de Informacoes sobre Desastres",
    descricao: "Ferramenta do Governo Federal para registro de desastres e solicitacao de recursos.",
    url: "https://s2id.mi.gov.br/paginas/login/login.aspx",
    tipo: "todos"
  },
  {
    titulo: "Defesa Civil Nacional",
    descricao: "Portal com informacoes, alertas e orientacoes da Defesa Civil Nacional.",
    url: "https://www.gov.br/defesacivil/pt-br",
    tipo: "todos"
  },
  {
    titulo: "Monitor de Secas - ANA",
    descricao: "Mapa interativo sobre a evolucao das secas no Brasil.",
    url: "https://monitordesecas.ana.gov.br",
    tipo: "seca"
  },
  {
    titulo: "Cemaden - Monitoramento de Riscos",
    descricao: "Alertas e previsoes de desastres naturais emitidos pelo CEMADEN.",
    url: "https://www.cemaden.gov.br",
    tipo: "enchente"
  },
  {
    titulo: "Plataforma Alert-AS",
    descricao: "Sistema de alerta antecipado da Defesa Civil do Parana para desastres naturais.",
    url: "https://alerta.defesacivil.pr.gov.br",
    tipo: "deslizamento"
  }
];

function filtrarLinks() {
  const filtro = document.getElementById("tipoDesastre").value;
  const container = document.getElementById("containerLinks");
  container.innerHTML = "";

  const filtrados = links.filter(link => 
    filtro === "todos" || link.tipo === filtro || link.tipo === "todos"
  );

  filtrados.forEach(link => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3><a href="${link.url}" target="_blank">${link.titulo}</a></h3>
                      <p>${link.descricao}</p>`;
    container.appendChild(card);
  });
}

window.onload = filtrarLinks;
