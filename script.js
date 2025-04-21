const links = [
  {
    titulo: "Cemaden - Monitoramento de Riscos",
    descricao: "Alertas e previsões de desastres naturais emitidos pelo CEMADEN.",
    url: "https://www.cemaden.gov.br",
    tema: "monitoramento"
  },
  {
    titulo: "Alert-AS - Defesa Civil PR",
    descricao: "Sistema de alerta antecipado da Defesa Civil do Paraná para desastres naturais.",
    url: "https://alerta.defesacivil.pr.gov.br",
    tema: "alerta"
  },
  {
    titulo: "S2iD - Registro de Desastres",
    descricao: "Ferramenta para gerenciamento do desastre e solicitação de recursos.",
    url: "https://s2id.mi.gov.br",
    tema: "gerenciamento"
  }
];

function filtrarLinks() {
  const filtroTema = document.getElementById("temaLink").value.toLowerCase();
  const palavraChave = document.getElementById("buscaPalavra").value.toLowerCase();
  const container = document.getElementById("containerLinks");
  container.innerHTML = "";

  const filtrados = links.filter(link => {
    const temaOk = filtroTema === "todos" || link.tema === filtroTema;
    const palavraOk = palavraChave === "" ||
      link.titulo.toLowerCase().includes(palavraChave) ||
      link.descricao.toLowerCase().includes(palavraChave);

    return temaOk && palavraOk;
  });

  filtrados.forEach(link => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3><a href="${link.url}" target="_blank">${link.titulo}</a></h3>
                      <p>${link.descricao}</p>`;
    container.appendChild(card);
  });
}

window.onload = filtrarLinks;

  });
}

window.onload = filtrarLinks;
