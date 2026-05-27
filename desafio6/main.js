let opcoes = ["Pedra", "Papel", "Tesoura"];

let pontosJogador = 0;
let pontosComputador = 0;

function jogar(jogadaJogador){
    let jogadaAleatoria = Math.floor(Math.random() * 3);

    let jogadaComputador = opcoes[jogadaAleatoria];

    let resultado = "";

    if (jogadaJogador == jogadaComputador){
        resultado = "Empate!";
    }

    else if (
            (jogadaJogador == "Pedra" && jogadaComputador == "Tesoura" ) ||
            (jogadaJogador == "Papel" && jogadaComputador == "Pedra") ||
            (jogadaJogador == "Tesoura" && jogadaComputador == "Papel")
    ){
        resultado = "Você venceu!";

        pontosJogador++;
    }
    else{
        resultado = "Computador Venceu!";

        pontosComputador++;
    }

    document.getElementById("resultado").innerHTML =
        "Você escolheu " + jogadaJogador + 
        " | Computador escolheu " + jogadaComputador +
        " <br> " + resultado;

    document.getElementById("placar").innerHTML =
        "Jogador: " + pontosJogador +
        " | Computador: " + pontosComputador;
}