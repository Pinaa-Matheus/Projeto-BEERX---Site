/**
 * Função JavaScript para gerenciar downloads programáticos
 * baseados em cliques de botões da página BeerX.
 * * @param {string} url - Caminho relativo ou absoluto do arquivo (ex: docs/TAP.pdf)
 * @param {string} nomeArquivo - Nome sugerido para salvar o arquivo (ex: TAP_BeerX.pdf)
 */
function baixarArquivo(url, nomeArquivo) {
  // Cria um elemento âncora temporário em memória
  const linkDownload = document.createElement('a');
  linkDownload.href = url;
  
  // Define o atributo download com o nome sugerido para o arquivo
  linkDownload.download = nomeArquivo || 'BeerX_Download';
  
  // Aplica estilos para garantir que ele não quebre o layout caso seja renderizado
  linkDownload.style.display = 'none';
  document.body.appendChild(linkDownload);
  
  // Simula o evento de clique para disparar o download nativo do navegador
  linkDownload.click();
  
  // Remove o elemento do DOM para limpar a memória
  document.body.removeChild(linkDownload);
}