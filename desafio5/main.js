let segundos = 0;
let minutos = 0;

let intervalo;

function iniciar(){
    if (!intervalo) {
        intervalo = setInterval(function() {
            segundos ++;

            if (segundos == 60) {
                segundos = 0;
                minutos ++;
            }

            atualizarTela();

        }, 1000);
    }
}

function pausar(){
    clearInterval(intervalo);
    intervalo = null;
}

function resetar(){
    clearInterval(intervalo);

    intervalo = null;

    segundos = 0;

    minutos = 0;

    atualizarTela();
}

function atualizarTela(){
    let min = minutos < 10 ? "0" + minutos : minutos;
    let seg = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById("tempo").innerHTML = min + ":" + seg;
}