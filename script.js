
const links = [
  {
    titulo: "Cemaden - Monitoramento de Riscos",
    descricao: "Alertas e previsões de desastres naturais emitidos pelo Cemaden.",
    url: "https://www.cemaden.gov.br",
    tema: "monitoramento",
    subtema: "Monitoramento de chuvas intensas",
    ministerio: "Ministério da Ciência, Tecnologia e Inovação",
    instituicao: "Cemaden",
    assunto: "Monitoramento hidrometeorológico"
  },
  {
    titulo: "Curso EAD Defesa Civil",
    descricao: "Plataforma de cursos online sobre gestão de riscos.",
    url: "https://ead.defesacivil.gov.br",
    tema: "capacitacao",
    subtema: "Capacitação EAD",
    ministerio: "MDR",
    instituicao: "Defesa Civil Nacional",
    assunto: "Capacitação de agentes"
  },
  {
    titulo: "INMET - Previsão do Tempo",
    descricao: "Consultas meteorológicas atualizadas para todo o país.",
    url: "https://www.inmet.gov.br/portal/",
    tema: "previsao",
    subtema: "Meteorologia",
    ministerio: "Ministério da Agricultura",
    instituicao: "INMET",
    assunto: "Previsão meteorológica oficial"
  }
];

function filtrarLinks() {
  let filtroTema = "todos";
  const temaInput = document.getElementById("temaLink");
  if (temaInput) filtroTema = temaInput.value.toLowerCase();

  const container = document.getElementById("containerLinks");
  container.innerHTML = "";

  const filtrados = links.filter(link => {
    return filtroTema === "todos" || link.tema === filtroTema;
  });

  if (filtrados.length === 0) {
    container.innerHTML = "<p>Nenhum resultado encontrado para este tema.</p>";
    return;
  }

  filtrados.forEach(link => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${link.titulo}</h3>
      <p><strong>Tema:</strong> ${link.tema}</p>
      <p><strong>Subtema:</strong> ${link.subtema}</p>
      <p><strong>Ministério:</strong> ${link.ministerio}</p>
      <p><strong>Instituição:</strong> ${link.instituicao}</p>
      <p><strong>Assunto:</strong> ${link.assunto}</p>
      <p><a href="${link.url}" target="_blank">Acessar link</a></p>
    `;
    container.appendChild(card);
  });
}

window.onload = () => {
  const tema = document.getElementById("temaLink");
  if (tema && tema.value !== "todos") {
    filtrarLinks();
  }
};
