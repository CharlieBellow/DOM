// Adicionado eventos via JS

const h1 = document.querySelector('h1')

// "ouvidor de eventos" - recebe dois parâmetros: o evento que eu quero que aconteça, nesse caso o click e o que ele vai fazer quando o evento acontecer, nesse caso, fai chamar a função print
h1.addEventListener('click', print)

function print() {
  console.log('print');
}

h1.addEventListener('click', function () {
  console.log('outro momento');
})

// pode ser usado para mais de uma função