let peso = document.getElementById("peso")
let altura = document.getElementById("altura")

let calcular = document.getElementById("calcular")

let imc = document.getElementById("imc")
let classificacao = document.getElementById("classificacao")

calcular.addEventListener("click", function(){
    let kg = Number(peso.value)
    let m = Number(altura.value)

    let resultadoimc = (kg / (m**2))

    imc.innerHTML = resultadoimc.toFixed(2)

    if (resultadoimc < 18.5){
        classificacao.innerHTML = "Magreza"
    }else if (resultadoimc >= 18.5 && resultadoimc < 25){
            classificacao.innerHTML = "Normal"
        }else if (resultadoimc >= 25 && resultadoimc< 30){
                classificacao.innerHTML = "sobrepeso"
        }else if (resultadoimc >= 30){
                classificacao.innerHTML = "Obesidade"
            }
})