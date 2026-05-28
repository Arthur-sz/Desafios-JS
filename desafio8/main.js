function analisar() {
    let frase = document.getElementById("frase").value;

    let quantidadeCaracteres = frase.length;

    let listaPalavras = frase.split(" ");
    let quantidadePalavras = listaPalavras.length;

    let fraseInvertida = frase.split("").reverse().join("");

    let fraseTratada = frase.toLowerCase().split(" ").join("");
    let invertidaTratada = fraseTratada.split("").reverse().join("");

    let resultado = "";

    if (fraseTratada == invertidaTratada) {
        resultado = "É um palíndromo";
    } else {
        resultado = "Não é um palíndromo";
    }

    document.getElementById("caracteres").innerHTML =
        "Quantidade de caracteres: " + quantidadeCaracteres;

    document.getElementById("palavras").innerHTML =
        "Quantidade de palavras: " + quantidadePalavras;

    document.getElementById("invertida").innerHTML =
        "Frase invertida: " + fraseInvertida;

    document.getElementById("palindromo").innerHTML =
        resultado;
}