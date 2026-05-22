let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")

let calcular = document.getElementById("calcular")

let soma = document.getElementById("soma")
let subtracao = document.getElementById("subtracao")
let multiplicacao =  document.getElementById("multiplicacao")
let divisao = document.getElementById("divisao")

calcular.addEventListener("click", function(){

let numero1 = Number(valor1.value)
let numero2 = Number(valor2.value)

soma.innerHTML = "Resultado da soma: " + (numero1 + numero2)
subtracao.innerHTML = "Resultado da subtração: " + (numero1 - numero2)
multiplicacao.innerHTML = "Resultado da multipicação: " + (numero1 * numero2)
if (numero2 === 0){
    divisao.innerHTML = "Resultado da divisão: O valor não pode ser 0" 
} else {
    divisao.innerHTML = "Resultado da divisão: " + (numero1 / numero2)
}
})
