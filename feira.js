// var lista = ['tomate', 'laranja', 'abacaxi', 'limão']
// var alimento = prompt('Informe o nome do alimento.')
// for (var i = 0; i < lista.length; i++) {
//   if (alimento == lista[i]) {
//     var valAnterior = parseInt(prompt('Valor do alimento semana passada?'))
//     var valAtual = parseInt(prompt('Valor atual do alimento?'))
//     if (valAtual > valAnterior) {
//       alert('O alimento aumentou em ' + (valAtual - valAnterior) + ' reais')
//     } else if (valAtual < valAnterior) {
//       alert('O alimento diminuiu em ' + (valAnterior - valAtual) + ' reais')
//     } else if (valAtual == valAnterior) {
//       alert('Não houve alteração no preço do alimento.')
//     }
//     break
//   }
// }
// if (alimento != lista[i]) {
//   alert('Alimento indisponível na feira!')
// }
var ingredientes = ['tomate', 'laranja', 'abacaxi', 'limão']

var nomeAlimento = prompt('Informe o nome do alimento.')

if (ingredientes.includes(nomeAlimento)) {
  var valAnterior = parseFloat(
    prompt('Valor do alimento semana passada?')
  ).toFixed(2)
  var valAtual = parseFloat(prompt('Valor atual do alimento?')).toFixed(2)

  if (valAtual > valAnterior) {
    alert(
      'O alimento aumentou em ' + (valAtual - valAnterior).toFixed(2) + ' reais'
    )
  } else if (valAtual < valAnterior) {
    alert(
      'O alimento diminuiu em ' + (valAnterior - valAtual).toFixed(2) + ' reais'
    )
  } else if (valAtual == valAnterior) {
    alert('Não houve alteração no preço do alimento.')
  }
} else {
  alert('Alimento indisponível na feira!')
}
