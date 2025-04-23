
lucide.createIcons();

// Navega para a página de resultados com o tema selecionado na URL
function filtrarTema(tema) {
  window.location.href = "resultados.html?tema=" + encodeURIComponent(tema.toLowerCase());
}

// Mostra os links filtrando por tema e/ou palavra-chave
function filtrarLinks() {
  const urlParams = new URLSearchParams(window.location.search);
  const temaSelecionado = urlParams.get("tema") || "todos";

  const inputFiltro = document.getElementById("filtro-palavra");
  const termo = inputFiltro ? inputFiltro.value.toLowerCase().trim() : "";

  const container = document.getElementById("containerLinks");
  if (!container) return;
  container.innerHTML = "";

  const filtrados = links.filter(link => {
    const temaOk = temaSelecionado === "todos" || link.tema === temaSelecionado;
    const textoCompleto = \`\${link.subtema} \${link.instituicao} \${link.ministerio} \${link.assunto}\`.toLowerCase();
    const palavraOk = termo === "" || textoCompleto.includes(termo);
    return temaOk && palavraOk;
  });

  filtrados.forEach(link => {
    const card = document.createElement("div");
    card.className = "card";
    card.title = link.assunto;
    card.innerHTML = `
      <h3 style="text-align:center;">\${link.subtema}</h3>
      <p style="text-align:center; font-weight:bold;">\${link.instituicao}</p>
      <p style="text-align:center; font-size: 12px; color: #666;">\${link.ministerio}</p>
      <p style="text-align:center;">\${link.assunto}</p>
      <p style="text-align:center; margin-top: 10px;">
        <a href="\${link.url}" target="_blank">Acessar link</a>
      </p>
    `;
    container.appendChild(card);
  });
}

// Acompanha a digitação na caixa de busca
const inputBusca = document.getElementById("filtro-palavra");
if (inputBusca) {
  inputBusca.addEventListener("input", filtrarLinks);
  window.onload = filtrarLinks;
}
