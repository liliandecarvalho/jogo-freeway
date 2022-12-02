let xAtor = 85;
let yAtor = 366;
let comprimentoAtor = 30;
let larguraAtor = 30;
let diametroAtor = 15;

let colisao = false;
let pontuacao = 0;

function mostrarAtor() {
  image(imagemAtor, xAtor, yAtor, comprimentoAtor, larguraAtor);
}

function movimentarAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (liberarMovimento()) {
      yAtor += 3;
    }
  }
}

function verificarColisao() {
  for (let i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarros,
      larguraCarros,
      xAtor,
      yAtor,
      diametroAtor
    );
    if (colisao) {
      retornarAtor();
      somColisao.play();
      if (pontuarNegativo()) {
        pontuacao -= 1;
      }
    }
  }
}

function retornarAtor() {
  yAtor = 366;
}

function incluirPontuacao() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(pontuacao, width / 5, 27);
}

function marcarPontos() {
  if (yAtor < 15) {
    pontuacao += 1;
    somPontuacao.play();
    retornarAtor();
  }
}

function pontuarNegativo() {
  return pontuacao > 0;
}

function liberarMovimento() {
  return yAtor < 366;
}
