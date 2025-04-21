
const links = [
  {
    titulo: "Monitoramento de Riscos",
    subtema: "Monitoramento de Riscos",
    url: "https://www.cemaden.gov.br",
    tema: "monitoramento",
    instituicao: "CEMADEN",
    ministerio: "Ministério da Ciência, Tecnologia e Inovação",
    assunto: "Monitoramento de riscos naturais e hidrometeorológicos no Brasil"
  },
  {
    titulo: "Cursos EAD Defesa Civil",
    subtema: "Capacitação",
    url: "https://ead.defesacivil.gov.br",
    tema: "capacitacao",
    instituicao: "Defesa Civil Nacional",
    ministerio: "Ministério da Integração e do Desenvolvimento Regional",
    assunto: "Cursos gratuitos voltados à capacitação em gestão de riscos"
  },
  {
    titulo: "Previsão do Tempo - INMET",
    subtema: "Previsão do Tempo",
    url: "https://www.inmet.gov.br/portal/",
    tema: "previsao",
    instituicao: "INMET",
    ministerio: "Ministério da Agricultura e Pecuária",
    assunto: "Previsão do tempo por estado e município com dados atualizados"
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
      <h3>${link.subtema}</h3>
      <p style="text-align:center; font-weight:bold;">${link.instituicao}</p>
      <p style="text-align:center; font-size:12px; color:#666;">${link.ministerio}</p>
      <p>${link.assunto}</p>
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
