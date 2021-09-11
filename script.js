// Carne - 400gr por pessoa , + de 6 horas - 650gr
// Cerveja - 1200ml por pessoa, + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa, + 6 horas 1500ml
// Crianças valem por 0,5


let inputAdultos = document.getElementById("adulto");
let inputCriancas = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
  let qdtTotalCerveja = cervejaPP(duracao) * adultos
  let qdtTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas)

  resultado.innerHTML = ` <p>${qdtTotalCarne / 1000} kg de Carne</p>`
  resultado.innerHTML += ` <p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
  resultado.innerHTML += ` <p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2l de Bebidas</p>`

}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}

function bebidaPP(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}
