function ordenar() {
    let entrada = document.getElementById("numeros").value;

    let lista = entrada.split(",");

    for (let i = 0; i < lista.length; i++) {
        lista[i] = Number(lista[i]);
    }

    for (let i = 0; i < lista.length; i++) {

        for (let j = i + 1; j < lista.length; j++) {

            if (lista[i] > lista[j]) {

                let temp = lista[i];
                lista[i] = lista[j];
                lista[j] = temp;

            }
        }
    }

    let decrescente = [];

    for (let i = lista.length - 1; i >= 0; i--) {
        decrescente.push(lista[i]);
    }

    document.getElementById("crescente").innerHTML =
        "Crescente: " + lista.join(", ");

    document.getElementById("decrescente").innerHTML =
        "Decrescente: " + decrescente.join(", ");
}