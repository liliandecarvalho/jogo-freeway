let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let comprimentoCarros = 50;
let larguraCarros = 40;
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];

function mostrarCarros() {
  for (let i = 0; i < imagensCarros.length; i++) {
    image(
      imagensCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarros,
      larguraCarros
    );
  }
}

function movimentarCarros() {
  for (let i = 0; i < imagensCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function reiniciarCarros() {
  for (let i = 0; i < imagensCarros.length; i++) {
    if (ultrapassarLimite(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function ultrapassarLimite(xCarro) {
  return xCarro < -50;
}
