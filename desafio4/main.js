function sacar() {
    const valor = parseInt(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor <= 0) {
        resultado.innerHTML = "Digite um valor válido.";
        return;
    }

    if (valor % 5 !== 0) {
        resultado.innerHTML = "Valor inválido. O saque deve ser múltiplo de R$ 5.";
        return;
    }

    const notas = [100, 50, 20, 10, 5];

    let restante = valor;
    let saida = "<ul>";

    for (let i = 0; i < notas.length; i++) {
        const quantidade = Math.floor(restante / notas[i]);
        restante = restante % notas[i];                     

        if (quantidade > 0) {
            saida += `<li>${quantidade} nota(s) de R$ ${notas[i]}</li>`;
        }
    }

    saida += "</ul>";
    resultado.innerHTML = "Resultado: " + saida;
}