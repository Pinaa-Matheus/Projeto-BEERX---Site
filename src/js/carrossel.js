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
      posicaoAtual = Math.max(0, Math.min(index, totalPosicoes));
      const slideWidth = slides[0].offsetWidth + 20; // largura + gap de 20px
      track.style.transform = `translateX(-${posicaoAtual * slideWidth}px)`;
      atualizarDots();
    }
 
    document.getElementById('btnProximo').addEventListener('click', () => irPara(posicaoAtual + 1));
    document.getElementById('btnAnterior').addEventListener('click', () => irPara(posicaoAtual - 1));
 
    // Recalcular posição ao redimensionar a janela
    window.addEventListener('resize', () => irPara(posicaoAtual));