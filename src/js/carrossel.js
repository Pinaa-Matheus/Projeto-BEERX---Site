document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carrosselTrack');
    const dotsContainer = document.getElementById('carrosselDots');
    const slides = track.querySelectorAll('.carrossel-slide');

    const slidesVisiveis = 3;
    const totalPosicoes = slides.length - slidesVisiveis;
    let posicaoAtual = 0;

    // Criar dots dinamicamente
    for (let i = 0; i <= totalPosicoes; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('ativo');
      dot.addEventListener('click', () => irPara(i));
      dotsContainer.appendChild(dot);
    }

    function atualizarDots() {
      dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('ativo', i === posicaoAtual);
      });
    }

    function irPara(index) {
      // Lógica do Carrossel Infinito:
      if (index > totalPosicoes) {
        posicaoAtual = 0; // Se passou do limite, volta para o primeiro
      } else if (index < 0) {
        posicaoAtual = totalPosicoes; // Se voltou antes do zero, vai para o último
      } else {
        posicaoAtual = index; // Movimentação normal
      }

      const slideWidth = slides[0].offsetWidth + 20; // largura do slide + gap de 20px
      track.style.transform = `translateX(-${posicaoAtual * slideWidth}px)`;
      atualizarDots();
    }

    document.getElementById('btnProximo').addEventListener('click', () => irPara(posicaoAtual + 1));
    document.getElementById('btnAnterior').addEventListener('click', () => irPara(posicaoAtual - 1));

    // Recalcular posição ao redimensionar a janela
    window.addEventListener('resize', () => irPara(posicaoAtual));
});