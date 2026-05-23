let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let quantidadeTentativas = 0;

function verificarNumero() {

  let valorDigitado = Number(document.getElementById("palpite").value);

  quantidadeTentativas++;

  if (valorDigitado > numeroSecreto) {

    document.getElementById("mensagem").innerHTML =
      "Muito alto!";

  }

  else if (valorDigitado < numeroSecreto) {

    document.getElementById("mensagem").innerHTML =
      "Muito baixo!";

  }

  else {

    document.getElementById("mensagem").innerHTML =
      "Acertou!";

  }
  
  document.getElementById("tentativas").innerHTML =
    "Tentativas: " + quantidadeTentativas;
}