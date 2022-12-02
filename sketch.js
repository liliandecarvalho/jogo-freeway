function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostrarAtor();
  mostrarCarros();
  movimentarCarros();
  movimentarAtor();
  reiniciarCarros();
  verificarColisao();
  incluirPontuacao();
  marcarPontos();
}
